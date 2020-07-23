const express = require("express");
const router = express.Router();
const connection = require("../config");

// add a cat
router.post("/", (req, res) => {
  const data = req.body;

  connection.query("INSERT INTO cat SET ?", data, (err, results) => {
    if (err) {
      res.sendStatus(err);
    } else {
      res.sendStatus(200);
    }
  });
});

// list all cats
router.get("/", (req, res) => {
  connection.query("SELECT * FROM cat", (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

// get a cat
router.get("/:id", (req, res) => {
  const idParams = req.params.id;
  connection.query(
    "SELECT * FROM cat WHERE id = ?",
    idParams,
    (err, results) => {
      if (err) {
        res.sendStatus(err);
      } else {
        res.json(results);
      }
    }
  );
});

// update a cat
router.put("/:id", (req, res) => {
  const idParams = req.params.id;
  const data = req.body;

  connection.query(
    "UPDATE cat SET ? WHERE id = ?",
    [data, idParams],
    (err, results) => {
      if (err) {
        res.sendStatus(err);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

// delete a cat
router.delete("/:id", (req, res) => {
  const idParams = req.params.id;

  connection.query("DELETE FROM cat WHERE id = ?", idParams, (err, results) => {
    if (err) {
      res.sendStatus(err);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
