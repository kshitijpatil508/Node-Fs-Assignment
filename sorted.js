const fs = require("fs");

if (process.argv.length < 4) {
  console.error("Please provide input and output file paths.");
  process.exit(1);
}

const inputFile = process.argv[2];
const outputFile = process.argv[3];

if (!fs.existsSync(inputFile)) {
  console.error(`File not found: ${inputFile}`);
  process.exit(1);
}

const fileContents = fs.readFileSync(inputFile, "utf-8");

const lines = fileContents.split("\n");

const filteredLines = lines.filter((line) => {
  return line.trim() !== "" && !line.startsWith("#");
});

const sortedLines = filteredLines.sort();

try {
  fs.writeFileSync(outputFile, sortedLines.join("\n"));
  console.log(`Sorted lines written to ${outputFile}`);
} catch (err) {
  console.error(`Error writing to file: ${outputFile}`);
  console.error(err);
  process.exit(1);
}
