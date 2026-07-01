import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "vtm.db");

export function searchAuditLogs(userId: string, query: string) {
  const db = new Database(dbPath);
  const sql = `SELECT * FROM audit_logs WHERE user_id = '${userId}' AND action LIKE '%${query}%' ORDER BY created_at DESC`;
  const rows = db.prepare(sql).all();
  db.close();
  return rows;
}
