const fs = require("fs");

// to check if file paths are given
if (process.argv.length < 4) {
  console.error("Please give input and output file paths.");
  process.exit(1);
}

// take I/O from command line
const inputFile = process.argv[2];
const outputFile = process.argv[3];

// check for input file
if (!fs.existsSync(inputFile)) {
  console.error(`File not found: ${inputFile}`);
  process.exit(1);
}

const fileContents = fs.readFileSync(inputFile, "utf-8");

// convert lines into array
const lines = fileContents.split("\n");

// removing empty lines and comments
const filteredLines = lines.filter((line) => {
  return line.trim() !== "" && !line.startsWith("#");
});

// sorting
const sortedLines = filteredLines.sort();

// writing to outpit file
try {
  fs.writeFileSync(outputFile, sortedLines.join("\n"));
  console.log(`Sorted lines written to ${outputFile}`);
} catch (err) {
  console.error(`Error writing to file: ${outputFile}`);
  console.error(err);
  process.exit(1);
}
