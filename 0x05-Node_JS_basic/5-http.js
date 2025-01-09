const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';

// counting number of students in a file
const countStudents = (File) => new Promise((res, rej) => {
  fs.readFile(File, 'utf8', (error, info) => {
    if (error) {
      rej(new Error('Cannot load the database'));
    } else {
      const fileLines = info.trim().split('\n');
      const fileFields = fileLines[0].split(',');
      const students = fileLines.slice(1).map((line) => {
        const value = line.split(',');
        const student = {};
        fileFields.forEach((field, index) => {
          student[field] = value[index];
        });
        return student;
      });

      const CSStudents = students.filter((student) => student.field === 'CS');
      const SWEStudents = students.filter(
        (student) => student.field === 'SWE',
      );

      let response = `Number of students: ${students.length}\n`;
      response += `Number of students in CS: ${
        CSStudents.length
      }. List: ${CSStudents
        .map((student) => student.firstname)
        .join(', ')}\n`;
      response += `Number of students in SWE: ${
        SWEStudents.length
      }. List: ${SWEStudents.map((student) => student.firstname).join(', ')}`;

      res(response);
    }
  });
});

// creating server
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((response) => {
        res.end(`This is the list of our students\n${response}`);
      })
      .catch((err) => {
        res.statusCode = 500;
        res.end(err.message);
      });
  }
});

// listening to the server
app.listen(PORT, HOST, () => {
  console.log(`The server is running at http://${HOST}:${PORT}`);
});
