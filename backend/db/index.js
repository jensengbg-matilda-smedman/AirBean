const low = require('lowdb');
const FlieSync = require('lowdb/adapters/FileSync');

const adapter = new FlieSync('./db/db.json');
const db = low(adapter);

module.exports = { db };

