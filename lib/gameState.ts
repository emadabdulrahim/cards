import gsap from "gsap";
import create from "zustand";
import { cardSetArray } from "./cardSet";

export interface Card {
  name: string;
  image: string;
  id: string;
}

export type Difficulty = "easy" | "medium" | "hard";
export type GameState =
  | "idle"
  | "playing"
  | "over"
  | "paused"
  | "won"
  | "level-complete";

export type Level = number;

interface GameStoreProps {
  state: GameState;
  time: number;
  level: Level;
  difficulty?: Difficulty;
  cardsInPlay: Card[];
  matchedCards: Card[];
  selectedCards: Card[];
  matchesErrorCount: number;
}

export interface GameStore extends GameStoreProps {
  play: (level?: Level) => void;
  onCardTurn: (card: Card) => void;
  timeUp: () => void;
  advanceToNextLevel: () => void;
  isFlipped: (card: Card) => boolean;
  isMatched: (card: Card) => boolean;
}

const initialGameState: GameStoreProps = {
  state: "idle",
  time: 30,
  level: 1,
  difficulty: "easy",
  cardsInPlay: [],
  matchedCards: [],
  selectedCards: [],
  matchesErrorCount: 0,
};

const prepareGame = (level: number) => {
  const cardsInPlay = getCardsInPlay(level);
  return {
    cardsInPlay,
    time: cardsInPlay.length * 3 + 20,
  };
};

const getCardsInPlay = (level: number) => {
  const cardCount = Math.min(Math.max(level, 2), 13);
  const uniqueCards = gsap.utils.shuffle([...cardSetArray]).slice(0, cardCount);
  const cardsInPlay = gsap.utils.shuffle([...uniqueCards, ...uniqueCards]);
  return cardsInPlay.map((card, i) => ({ ...card, id: `${card.name}-${i}` }));
};

export const useGameStore = create<GameStore>()((set, get) => ({
  ...initialGameState,
  timeUp: () => {
    set({ state: "over" });
  },
  advanceToNextLevel: () => {
    const { level } = get();
    const nextLevel = level + 1;

    set({
      ...initialGameState,
      ...prepareGame(nextLevel),
      state: "playing",
      level: nextLevel,
    });
  },
  play: (level = 1) => {
    set({
      ...initialGameState,
      state: "playing",
      ...prepareGame(level),
    });
  },
  isFlipped: (card: Card) => {
    const { selectedCards, matchedCards } = get();
    const maybeCard =
      selectedCards.find((c) => c.id === card.id) ||
      matchedCards.find((c) => c.id === card.id);

    return maybeCard ? true : false;
  },
  isMatched: (card: Card) => {
    const { matchedCards } = get();

    return !!matchedCards.find((c) => c.id === card.id);
  },
  onCardTurn: (card: Card) => {
    if (get().isFlipped(card)) return;

    set((state) => {
      if (state.state !== "playing") return state;

      let selectedCards = [...state.selectedCards, card];
      const matchedCards = [...state.matchedCards];
      let matchesErrorCount = state.matchesErrorCount;
      let gameState: GameStoreProps["state"] = state.state;

      if (selectedCards.length === 2) {
        if (selectedCards[0].name === selectedCards[1].name) {
          matchedCards.push(...selectedCards);
          selectedCards = [];

          if (matchedCards.length === state.cardsInPlay.length) {
            gameState = "level-complete";
          }
        } else {
          matchesErrorCount++;
          requestAnimationFrame(() => {
            set({ selectedCards: [] });
          });
        }
      }

      return {
        ...state,
        selectedCards,
        matchedCards,
        matchesErrorCount,
        state: gameState,
      };
    });
  },
}));
