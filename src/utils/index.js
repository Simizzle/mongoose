const { Movie } = require("../movie/movie.model");
const { closeConnection } = require("../db/connection");

exports.add = async (entryObj) => {
    try {
        const movie = new Movie(entryObj);
        const savedMovie = await movie.save();
        console.log(savedMovie);
    } catch (error) {
        console.log(error);
    }
    closeConnection();
};

exports.list = async() => {
    try {
        const movies = await Movie.find();
            console.log(movies)
        }    catch (error) {
        console.log(error)
    }
    closeConnection();
};

exports.update = async(titleInput) => {
   
    try {
        let query = { title: titleInput };
        Movie.findOneAndUpdate(query, { watched : true } , function (err, movie){
            if (err) handleError(err);
            console.log(`You have set the status of ${movie.title} to finished`)
        })
    } catch (err) {
        console.log(err)
    }
    // closeConnection();
};

exports.remove = async(titleInput) =>{

    try {
        let query = { title: titleInput };
        Movie.findOneAndRemove(query, function (err, movie){
            if (err) return handleError(err);
            console.log(`${movie.title} has been removed from the list.`)
        })
    } catch (error) {
        console.log(error)
    }
    // closeConnection();
};