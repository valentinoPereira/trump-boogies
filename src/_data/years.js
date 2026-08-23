// Auto-derive the unique list of years (sorted ascending) from lies.json
const lies = require("./lies.json");
module.exports = [...new Set(lies.map((l) => l.year))].sort((a, b) => a - b);
