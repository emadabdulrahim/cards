interface Card {
  name: string;
  url: string;
}

export const cardSet = new Map<string, Card>([
  ["baby-dragon", { name: "Baby Dragon", url: "baby-dragon.png" }],
  ["baby-duck-1", { name: "Baby Duck", url: "baby-duck-1.png" }],
  ["baby-duck", { name: "Duck", url: "baby-duck.png" }],
  ["cat", { name: "Cat", url: "cat.png" }],
  ["dragon", { name: "Dragon", url: "dragon.png" }],
  ["duck", { name: "Duck", url: "duck.png" }],
  ["fox", { name: "Fox", url: "fox.png" }],
  [
    "headless-horseman",
    { name: "Headless Horseman", url: "headless-horseman.png" },
  ],
  ["human-boar", { name: "Human-boar", url: "human-boar.png" }],
  ["knight", { name: "Knight", url: "knight.png" }],
  ["mystery-house", { name: "Mystery House", url: "mystery-house.png" }],
  ["necromancer", { name: "Necromancer", url: "necromancer.png" }],
  ["panda-2", { name: "Panda", url: "panda-2.png" }],
  ["panda", { name: "Panda", url: "panda.png" }],
  ["sleepy-dragon", { name: "Sleepy Dragon", url: "sleepy-dragon.png" }],
  ["tortoise", { name: "Tortoise", url: "tortoise.png" }],
  ["tree-of-life", { name: "Tree Of Life", url: "tree-of-life.png" }],
  ["warlock", { name: "Warlock", url: "warlock.png" }],
  ["warrior", { name: "Warrior", url: "warrior.png" }],
  ["werewolf", { name: "Werewolf", url: "werewolf.png" }],
  ["woodcutter", { name: "Woodcutter", url: "woodcutter.png" }],
]);
