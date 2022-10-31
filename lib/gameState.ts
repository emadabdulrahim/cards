// state for a card matching game

import gsap from "gsap";
import create from "zustand";
import { cardSetArray } from "./cardSet";

export interface Card {
  name: string;
  image: string;
  id: string;
}

export type Difficulty = "easy" | "medium" | "hard";

interface GameState {
  state: "idle" | "playing" | "lost" | "paused" | "won";
  difficulty: Difficulty;
  cardsInPlay: Card[];
  matchedCards: Card[];
  selectedCards: Card[];
  matchesErrorCount: number;
}

export interface GameStore extends GameState {
  play: (difficulty?: Difficulty) => void;
  onCardTurn: (card: Card) => void;
  isFlipped: (card: Card) => boolean;
  isMatched: (card: Card) => boolean;
}

const initialGameState: GameState = {
  state: "idle",
  difficulty: "easy",
  cardsInPlay: [],
  matchedCards: [],
  selectedCards: [],
  matchesErrorCount: 0,
};

const getCardsInPlay = (difficulty: Difficulty) => {
  const cardCount =
    difficulty === "easy" ? 6 : difficulty === "medium" ? 8 : 10;
  const uniqueCards = gsap.utils.shuffle([...cardSetArray]).slice(0, cardCount);
  const cardsInPlay = gsap.utils.shuffle([...uniqueCards, ...uniqueCards]);
  return cardsInPlay.map((card, i) => ({ ...card, id: `${card.name}-${i}` }));
};

export const useGameStore = create<GameStore>()((set, get) => ({
  ...initialGameState,
  play: (difficulty = "easy") => {
    set({
      ...initialGameState,
      difficulty,
      state: "playing",
      cardsInPlay: getCardsInPlay(difficulty),
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
      let gameState: GameState["state"] = state.state;

      if (selectedCards.length === 2) {
        if (selectedCards[0].name === selectedCards[1].name) {
          matchedCards.push(...selectedCards);
          selectedCards = [];

          if (matchedCards.length === state.cardsInPlay.length) {
            gameState = "won";
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
