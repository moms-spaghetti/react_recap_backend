const { query } = require("../index");
// const { Pool } = require("pg");

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: { rejectUnauthorized: false },
// });

const drop = `
  DROP TABLE IF EXISTS admins, videos, tags, lecturers, feedbacktable;
`;

const videos = `
  CREATE TABLE IF NOT EXISTS videos (
    id SERIAL PRIMARY KEY,
    title TEXT,
    lecturer TEXT,
    video_url TEXT,
    thumbnail_url TEXT,
    tags TEXT [],
    timestamps JSON [],
    lecture_date DATE,
    bootcamp_week INTEGER,
    cohort INTEGER,
    description TEXT,
    github_links JSON [],
    slides JSON [],
    other_links JSON []
  );`;

const tags = `	
  CREATE TABLE IF NOT EXISTS tags (
    "key" SERIAL PRIMARY KEY,
    tag TEXT
  );`;

const lecturers = `
  CREATE TABLE IF NOT EXISTS lecturers (
    "key" SERIAL PRIMARY KEY,
    lecturer TEXT);
`;

const feedback = `
  CREATE TABLE IF NOT EXISTS feedbacktable (
    id SERIAL PRIMARY KEY,
    videoid INTEGER,
    feedback TEXT,
    created_at TIMESTAMP
    );
`;

const admins = `
  CREATE TABLE IF NOT EXISTS admins (
    id SERIAL PRIMARY KEY,
    "user" TEXT,
    email TEXT
    );
`;

const populateAdmin = `
  INSERT INTO admins (
    "user",
    email
    )
  VALUES ('admin', 'admin@mail.com');
`;

const TABLES = [drop, admins, videos, tags, lecturers, feedback, populateAdmin];

async function createTables() {
  let res = await query(drop);
  console.log(res.command);
  res = await query(admins);
  console.log(res.command);
  res = await query(videos);
  console.log(res.command);
  res = await query(tags);
  console.log(res.command);
  res = await query(lecturers);
  console.log(res.command);
  res = await query(feedback);
  console.log(res.command);
  res = await query(populateAdmin);
  console.log(res.command);
  // TABLES.forEach((table) => {
  //   return new Promise((resolve, reject) => {
  //     pool.query(table, undefined, (err, data) => {
  //       if (err) {
  //         reject(err); // calling `reject` will cause the promise to fail with or without the error passed as an argument
  //         return; // and we don't want to go any further
  //       }
  //       resolve(data);
  //       console.log(data.command);
  //     });
  //   });
  // });
}

createTables();
//
//console.log(res.command);
