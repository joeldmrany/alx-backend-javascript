const fs = require('fs').promises;

async function countStudents(File) {
  try {
    // Reading data
    const data = await fs.readFile(File, 'utf-8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const starting = lines[0].split(',');
    const students = lines.slice(1).map((line) => line.split(','));

    console.log(`Number of students: ${students.length}`);

    const fieldIndex = starting.indexOf('field');
    const firstNameIndex = starting.indexOf('firstname');
    const fields = {};
    // ...existing code...
  } catch (error) {
    console.error('Cannot load the database', error);
  }
}

module.exports = countStudents;
