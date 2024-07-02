import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { createWord, getWords } from "./data.js";
import { log } from "./middlewares/logger.js";
import { addKoreanWord, getKoreanWords } from './KoreanData.js'; 
import { addTurkishWord, getAllTurkishWords } from './data/TurkishData.js';

dotenv.config();

const app = express();
const PORT =  4000;
const MONGODB_URI = "mongodb+srv://saratasnim798:JfCOh8YrkQ8iMb4V@cluster0.jjmhfwy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGODB_URI, {
    
  })
    .then(() => console.log("Database Connected"))
    .catch((err) => console.error(`Error Connecting database: ${err.message}`));
  

app.use(express.json());
app.use(log);

// Route to create a new word
app.post('/words', async (req, res) => {
  const { word } = req.body;

  try {
    const newWord = await createWord({ word });
    return res.status(201).json({ message: "New word is created", word: newWord });
  } catch (error) {
    console.error("Error creating word:", error);
    return res.status(500).json({ error: "Failed to create word" });
  }
});

// Route to get all words
app.get('/words', async (req, res) => {
  try {
    const words = await getWords();
    return res.status(200).json(words);
  } catch (error) {
    console.error("Error getting words:", error);
    return res.status(500).json({ error: "Failed to fetch words" });
  }
});
app.post('/korean-words', async (req, res) => {
    const { word, definition} = req.body;
  
    try {
      const newKoreanWord = await addKoreanWord({ word, definition});
      return res.status(203).json({ message: "New Korean word added", word: newKoreanWord });
    } catch (error) {
      console.error("Error adding Korean word:", error);
      return res.status(500).json({ error: "Failed to add Korean word" });
    }
  });
  
  // Route to get all Korean words
  app.get('/korean-words', async (req, res) => {
    try {
      const koreanWords = await getKoreanWords();
      return res.status(200).json(koreanWords);
    } catch (error) {
      console.error("Error getting Korean words:", error);
      return res.status(500).json({ error: "Failed to fetch Korean words" });
    }
  });
  app.post('/turkish-words', async (req, res) => {
    const { word, definition} = req.body;
  
    try {
      const newTurkishWord = await addTurkishWord({ word, definition});
      return res.status(201).json({ message: "New Turkish word added", word: newTurkishWord });
    } catch (error) {
      console.error("Error adding Turkish word:", error);
      return res.status(500).json({ error: "Failed to add Turkish word" });
    }
  });
  
  // Route to get all turkish-words
  app.get('/turkish-words', async (req, res) => {
    try {
      const TurkishWords = await getAllTurkishWords();
      return res.status(200).json(TurkishWords);
    } catch (error) {
      console.error("Error getting Turkish words:", error);
      return res.status(500).json({ error: "Failed to fetch Turkish words" });
    }
  });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
