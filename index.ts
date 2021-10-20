const world = "world";

export function hello(word: string = world): string {
  console.log("asas");
  return `Hello ${word}! `;
}

hello();
