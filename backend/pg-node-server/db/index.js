import pkg from "pg";
const { Pool } = pkg;
import "dotenv/config";

const db = new Pool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "zahin",
  database: process.env.DB_DATABASE || "blog",
  password: process.env.DB_PASSWORD,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

const query = async (text, params) => {
  const start = Date.now();
  const time = new Date();
  const res = await db.query(text, params);
  const duration = Date.now() - start;
  console.log("executed query", {
    text,
    start: time,
    duration,
    rows: res.rowCount,
  });
  return res;
};

export default query;
