// data/KoreanData.js

import KoreanWord from "./models/KoreanWord.js";

// Function to add a new Korean word
export const addKoreanWord = async ({ word, meaning}) => {
  try {
    const createdKoreanWord = await KoreanWord.create({ word, meaning});
    return createdKoreanWord;
  } catch (error) {
    throw new Error(`Error adding Korean word: ${error.message}`);
  }
};

// Function to get all Korean words
export const getKoreanWords = async () => {
  try {
    const koreanWords = await KoreanWord.find({});
    return koreanWords;
  } catch (error) {
    throw new Error(`Error getting Korean words: ${error.message}`);
  }
};
