// /services/dbService.js
import { openDb } from '../db/database.js';

// Initialize the database and create tables
export const initializeDb = async () => {
  const db = await openDb();

  await db.exec(`
    CREATE TABLE IF NOT EXISTS Users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT
    );
    CREATE TABLE IF NOT EXISTS Products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      price REAL
    );
    CREATE TABLE IF NOT EXISTS PurchaseHistory (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER,
      productId INTEGER,
      quantity INTEGER,
      FOREIGN KEY(userId) REFERENCES Users(id),
      FOREIGN KEY(productId) REFERENCES Products(id)
    );
  `);
};
