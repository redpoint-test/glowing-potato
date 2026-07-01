import { getDb, initializeSchema } from "./db.ts";

export function searchMetricsUnsafe(term: string) {
  initializeSchema();
  const sql = `select id, title, status from tasks where title like '%${term}%' order by id desc`;
  return getDb().prepare(sql).all();
}
