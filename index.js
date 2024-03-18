const fs = require('fs');

function decode(file) {
  let fileData = fs.readFileSync(__dirname + file);
  let fileLines = fileData.toString().split('\n');
  let obj = {};
  for ( let line of fileLines ) {
    let values = line.split(' ');
    obj[values[0]] = values[1];
  }
  let words = Object.values(obj);
  let phrases = [];
  let lineNum = 1;
  while ( words.length >= lineNum ) { // Ensure that a new branch can be added to the decoded message
    let line = words.splice(0,lineNum);
    phrases.push(line[line.length - 1]);
    lineNum++;
  }
  return phrases.join(' ');
}

console.log(decode('/input.txt'));