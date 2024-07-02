// data.js

import Word from './models/Word.js';

// Function to create a new word
export const createWord = async ({ word }) => {
  try {
    const newWord = await Word.create({ word });
    return newWord;
  } catch (error) {
    throw new Error(`Error creating word: ${error.message}`);
  }
};

// Function to get all words
export const getWords = async () => {
  try {
    const words = await Word.find({});
    return words;
  } catch (error) {
    throw new Error(`Error getting words: ${error.message}`);
  }
};
