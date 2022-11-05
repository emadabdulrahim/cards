import { Card } from "./gameState";

export const cardSet = new Map<string, Omit<Card, "id">>([
  ["card-1", { name: "card-1", image: "card-1.png" }],
  ["card-2", { name: "card-2", image: "card-2.png" }],
  ["card-3", { name: "card-3", image: "card-3.png" }],
  ["card-4", { name: "card-4", image: "card-4.png" }],
  ["card-5", { name: "card-5", image: "card-5.png" }],
  ["card-6", { name: "card-6", image: "card-6.png" }],
  ["card-7", { name: "card-7", image: "card-7.png" }],
  ["card-8", { name: "card-8", image: "card-8.png" }],
  ["card-9", { name: "card-9", image: "card-9.png" }],
  ["card-10", { name: "card-10", image: "card-10.png" }],
  ["card-11", { name: "card-11", image: "card-11.png" }],
  ["card-12", { name: "card-12", image: "card-12.png" }],
  ["card-13", { name: "card-13", image: "card-13.png" }],
  ["card-14", { name: "card-14", image: "card-14.png" }],
  ["card-15", { name: "card-15", image: "card-15.png" }],
  ["card-16", { name: "card-16", image: "card-16.png" }],
  ["card-17", { name: "card-17", image: "card-17.png" }],
  ["card-18", { name: "card-18", image: "card-18.png" }],
  ["card-19", { name: "card-19", image: "card-19.png" }],
  ["card-20", { name: "card-20", image: "card-20.png" }],
]);

export const cardSetArray = Array.from(cardSet.values());
