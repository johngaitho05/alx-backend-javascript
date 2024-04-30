const http = require('http');
const fs = require('fs').promises;

const hostname = 'localhost';
const port = 1245;

/**
 * Counts the students in a CSV data file.
 * @param {String} path The path to the CSV data file.
 * @returns {Promise<Array>} A promise that resolves with an array containing the payload.
 */
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const students = data.split('\n');
    // remove headers
    students.shift();
    // remove empty lines at the end of the file
    let i = students.length - 1;
    while (students[i] === '') {
      students.pop();
      i -= 1;
    }

    const payload = [`Number of students: ${students.length}`];

    const studentsByField = {};
    for (const s of students) {
      const studentData = s.split(',');
      const firstName = studentData[0];
      const field = studentData[3];
      if (field in studentsByField) {
        studentsByField[field].push(firstName);
      } else {
        studentsByField[field] = [firstName];
      }
    }

    for (const field in studentsByField) {
      if (field) {
        payload.push(
          `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`,
        );
      }
    }
    return payload;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (url.pathname === '/') {
    res.end('Hello Holberton School!');
  } else if (url.pathname === '/students') {
    const message = 'This is the list of our students\n';
    try {
      const payload = await countStudents(process.argv[2]);
      res.end(message + payload.join('\n'));
    } catch (err) {
      res.end(message + err.message);
    }
  }
});

app.listen(port, hostname);

module.exports = app;
