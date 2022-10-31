import { Card } from "./gameState";

export const cardSet = new Map<string, Omit<Card, "id">>([
  ["baby-dragon", { name: "Baby Dragon", image: "baby-dragon.png" }],
  ["baby-duck-1", { name: "Baby Duck", image: "baby-duck-1.png" }],
  ["baby-duck", { name: "Duck", image: "baby-duck.png" }],
  ["cat", { name: "Cat", image: "cat.png" }],
  ["dragon", { name: "Dragon", image: "dragon.png" }],
  ["duck2", { name: "Duck2", image: "duck.png" }],
  ["fox", { name: "Fox", image: "fox.png" }],
  [
    "headless-horseman",
    { name: "Headless Horseman", image: "headless-horseman.png" },
  ],
  ["human-boar", { name: "Human-boar", image: "human-boar.png" }],
  ["knight", { name: "Knight", image: "knight.png" }],
  ["mystery-house", { name: "Mystery House", image: "mystery-house.png" }],
  ["necromancer", { name: "Necromancer", image: "necromancer.png" }],
  // ["panda-2", { name: "Panda", image: "panda-2.png" }],
  ["panda", { name: "Panda", image: "panda.png" }],
  ["sleepy-dragon", { name: "Sleepy Dragon", image: "sleepy-dragon.png" }],
  ["tortoise", { name: "Tortoise", image: "tortoise.png" }],
  ["tree-of-life", { name: "Tree Of Life", image: "tree-of-life.png" }],
  ["warlock", { name: "Warlock", image: "warlock.png" }],
  ["warrior", { name: "Warrior", image: "warrior.png" }],
  ["werewolf", { name: "Werewolf", image: "werewolf.png" }],
  ["woodcutter", { name: "Woodcutter", image: "woodcutter.png" }],
]);

export const cardSetArray = Array.from(cardSet.values());
