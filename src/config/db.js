import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "campus2023",
  password: "campus2023",
  database: "api_notas",
  waitForConnections: true,
  connectionLimit: 10,
});