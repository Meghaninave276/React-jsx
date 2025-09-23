import React, { useEffect, useState } from "react";
import "./Movies.css";


export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    setMovies(storedMovies);
  }, []);

 
  const saveToLocalStorage = (updatedMovies) => {
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !genre || !rating) {
      alert("Please fill all fields");
      return;
    }

    let updatedMovies = [...movies];
    if (editIndex !== null) {
      updatedMovies[editIndex] = { title, genre, rating };
      setEditIndex(null);
      alert("Movie updated!");
    } else {
      updatedMovies.push({ title, genre, rating });
      alert("Movie added!");
    }

    setMovies(updatedMovies);
    saveToLocalStorage(updatedMovies);

    setTitle("");
    setGenre("");
    setRating("");
  };


  const handleDelete = (index) => {
    let updatedMovies = movies.filter((_, i) => i !== index);
    setMovies(updatedMovies);
    saveToLocalStorage(updatedMovies);
    alert("Movie deleted!");
  };

  const handleEdit = (index) => {
    const movie = movies[index];
    setTitle(movie.title);
    setGenre(movie.genre);
    setRating(movie.rating);
    setEditIndex(index);
  };

  return (
    <div className="card p-3">
      <h4>{editIndex !== null ? "Edit Movie" : "Add Movie"}</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Rating (1-10)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button type="submit" className="btn btn-success">
          {editIndex !== null ? "Update Movie" : "Add Movie"}
        </button>
      </form>

      <h5 className="mt-4">My Movies</h5>
      {movies.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.rating}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}


