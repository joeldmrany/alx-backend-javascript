const fs = require('fs').promises;

async function countStudents(File) {
  try {
    const data = await fs(File, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    console.log(data);
    console.log(lines);
  } catch (error) {
    throw new Error(`cannot load the database: ${error}`);
  }
}

countStudents('database.csv');
