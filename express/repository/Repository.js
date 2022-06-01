const fs = require("fs");

// Reading function from db.json file
module.exports.readJSONFile = () => {
  
    return JSON.parse(fs.readFileSync("db.json"))["Circuite"];
  }
  
// Writing function from db.json file
module.exports.writeJSONFile = (circuit) => {
  fs.writeFileSync(
    "db.json",
    JSON.stringify({ Circuite : circuit}, null, 4),
    "utf8",
    err => {
      if (err) {
        console.log(err);
      }
    }
  );
}