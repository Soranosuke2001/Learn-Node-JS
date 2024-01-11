// Note: `process.argv` stores the arguments passed from the terminal when running the file
// const mission = process.argv[2];
const mission = "learn";

if (mission === "learn") {
  console.log("Time to write some Node code!");
} else {
  console.log(`Is ${mission} really more fun?`);
}
