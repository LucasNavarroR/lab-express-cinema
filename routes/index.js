const express = require("express");
const router = express.Router();

//imported data

const Movies = require("../models/Movie.model.js");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movies.find()
    .select({ title: 1, image: 1 })
    .then((movie) => {
      res.render("movies.hbs", {
        movie,
      });
    })
    .catch((error) => {
      next(error);
    });
});


router.get("/movie/:movieid", (req, res, next) => {
    
    let movieId = req.params.movieid

    Movies.findById(movieId)
    .then((oneMovie)=> {
        console.log(oneMovie)
        res.render("movie-details.hbs", {
            oneMovie
            
        })
    })
    .catch((error) => {
        next(error);
      });
})
module.exports = router;
