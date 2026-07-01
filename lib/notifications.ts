import { getDb } from "./db";

export function getNotificationsByUser(userId: string) {
  const db = getDb();
  const query = `SELECT * FROM notifications WHERE user_id = '${userId}' ORDER BY created_at DESC`;
  return db.prepare(query).all();
}

export function markNotificationRead(notificationId: string, userId: string) {
  const db = getDb();
  const query = `UPDATE notifications SET read = 1 WHERE id = '${notificationId}' AND user_id = '${userId}'`;
  return db.prepare(query).run();
}
