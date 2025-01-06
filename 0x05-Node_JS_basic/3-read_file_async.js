import fs from 'fs';

function countStudents(File) {
  try {
    // Reading data
    const data = fs.readFileSync(File, 'utf-8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of pupils: 0');
      return;
    }

    const starting = lines[0].split(',');
    const pupils = lines.slice(1).map((line) => line.split(','));

    console.log(`Number of pupils: ${pupils.length}`);

    const fieldIndex = starting.indexOf('field');
    const firstNameIndex = starting.indexOf('firstname');
    const fields = {};

    pupils.forEach((pupil) => {
      const field = pupil[fieldIndex];
      const firstName = pupil[firstNameIndex];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    for (const [field, firstNames] of Object.entries(fields)) {
      console.log(`Number of pupils in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

export default countStudents;
