{

// Problem-3

// Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

// Sample Input:
// countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");

// Sample Output: 2


function countWordOccurrences(sentence: string, word: string): number {
    const words = sentence.toLowerCase().split(/\W+/);
    const targetWord = word.toLowerCase();
    return words.reduce((count, w) => (w === targetWord ? count + 1 : count), 0);
}

console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")); // 2

console.log(countWordOccurrences("I love ProgrammingHero. ProgrammingHero web courses are Awsome. I took ProgrammingHero Level 2 course ", "ProgrammingHero")); // 3


}