import pkg from "pg";
const { Pool } = pkg;

const db = new Pool({
  host: "localhost",
  user: "zahin",
  database: "my-blog",
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
