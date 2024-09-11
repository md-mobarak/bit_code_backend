// /controllers/reportController.js
import { openDb } from '../db/database.js';

export const generateReport = async (req, res) => {
  try {
    const db = await openDb();

    const report = await db.all(`
      SELECT Users.name AS customerName, Products.name AS productName, PurchaseHistory.quantity, Products.price,
      (PurchaseHistory.quantity * Products.price) AS total
      FROM PurchaseHistory
      INNER JOIN Users ON Users.id = PurchaseHistory.userId
      INNER JOIN Products ON Products.id = PurchaseHistory.productId
      ORDER BY total DESC
    `);

    res.status(200).json({
      message: 'Report generated successfully',
      report,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to generate report',
      error: error.message,
    });
  }
};
