const fs = require("fs")

let storedNotes = require("../db/db.json")

module.exports = function (app) {

  // get
  app.get("/api/notes", function (req, res) {
    res.json(storedNotes);
    console.log(storedNotes)

  });

  // post
  app.post("/api/notes", function (req, res) {
    var newNote = (req.body);
    console.log(newNote);

    storedNotes.push(newNote);
    req.body.index = storedNotes.length;
    res.json(newNote);

    fs.writeFile(storedNotes, newNote, "utf8", function (err) {
      if (err) throw err;
    
    });

  });

  // delete
  app.delete("/api/notes/:id", function (req, res) {

    const index = storedNotes.indexOf(storedNotes);

    storedNotes.splice(index, (1));

    res.json(storedNotes);

  });

};