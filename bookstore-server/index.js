const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const { ObjectId } = require("mongodb");
//middleware to connect to the front end
app.use(cors());
app.use(express.json());

//databse
const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   age: Number,
// });

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  isbn: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: [String], required: true },
  imageUrl: { type: String, required: false },
  genre: { type: [String], required: true },
  format: {
    type: String,
    enum: ["PAPERBACK", "HARDCOVER", "E-BOOK"],
    required: true,
  },
  // price: { type: Number, required: true },
  language: { type: [String], required: true },
  publishDate: { type: Date, required: true },
});

// const User = mongoose.model("User", userSchema);
const Book = mongoose.model("Book", bookSchema);

mongoose
  .connect("mongodb://localhost:27017/mongo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");

    app.post("/add-books", async (req, res) => {
      const data = req.body;
      const result = await Book.insertMany(data);
      return res.status(201).send(result);
    });

    app.get("/books", async (req, res) => {
      let query = {};
      if (req.query?.genre) {
        query = { genre: req.query.genre };
      }
      if (req.query?.author) {
        query = { author: req.query.author };
      }
      if (req.query?.title) {
        query = { title: req.query.title };
      }
      const books = await Book.find(query);
      return res.send(books);
    });

    app.get("/book/:id", async (req, res) => {
      const { id } = req.params;
      const filter = { _id: new ObjectId(id) };
      const book = await Book.findOne(filter);
      return res.send(book);
    });

    app.patch("/book/:id", async (req, res) => {
      const { id } = req.params;
      const updatedBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedBook = {
        $set: {
          ...updatedBookData,
        },
      };
      const response = await Book.updateMany(filter, updatedBook, options);
      return res.send(response);
    });

    app.delete("/book/:id", async (req, res) => {
      const { id } = req.params;
      const filter = { _id: new ObjectId(id) };
      const deletedBook = await Book.deleteOne(filter);
      return res.send(deletedBook);
    });
  })
  .catch((err) => console.error("Error connecting to DataBase: MongoDB:", err));
//to screate a server
app.listen(port, () => {
  console.log(`Server Listening on port ${port}...`);
});
