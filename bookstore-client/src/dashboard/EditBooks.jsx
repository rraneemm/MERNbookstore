import { useLoaderData, useParams } from "react-router-dom";
import React, { useState } from "react";
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";

const EditBooks = () => {
  const { id } = useParams();
  const {
    title,
    isbn,
    author,
    imageUrl,
    description,
    language,
    publishDate,
    pdfUrl,
    price,
  } = useLoaderData();

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Friction",
    "Fantasy",
    "Horror",
    "History",
    "Romance",
    "Romantasy",
  ];

  const bookFormats = ["PAPERBACK", "HARDCOVER", "E-BOOK"];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const [selectedBookFormat, setSelectedBookFormat] = useState(bookFormats[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
    setSelectedBookFormat(event.target.value);
  };

  //handel book submission
  //collecting data on form submit
  const handelBookUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const isbn = form.isbn.value;
    const author = form.author.value;
    const imageUrl = form.imageUrl.value;
    const genre = form.genre.value;
    const description = form.description.value;
    const format = form.format.value;
    const language = form.language.value;
    const publishDate = form.publishDate.value;
    const pdfUrl = form.pdfUrl.value;
    const price = form.price.value;
    const updatedBookObj = {
      title,
      isbn,
      author,
      imageUrl,
      genre,
      description,
      format,
      language,
      publishDate,
      pdfUrl,
      price,
    };
    //update book data
    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book updated successfully!!");
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update Book Details</h2>

      {/* redirecting to the function created */}
      <form
        onSubmit={handelBookUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* first row */}
        <div className="flex gap-8">
          {/* book title */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="title" value="Book Title" />
            </div>
            <TextInput
              id="title"
              name="title"
              type="text"
              placeholder="Book Title... "
              required
              defaultValue={title}
            />
          </div>

          {/* author name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="author" value="Author Name" />
            </div>
            <TextInput
              id="author"
              name="author"
              type="text"
              placeholder="Author Name... "
              required
              defaultValue={author}
            />
          </div>

          {/* isbn*/}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="isbn" value="Book ISBN" />
            </div>
            <TextInput
              id="isbn"
              name="isbn"
              type="text"
              placeholder="BOOK ISBN"
              required
              defaultValue={isbn}
            />
          </div>
        </div>

        {/* second row */}
        <div className="flex gap-8">
          {/* book format*/}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Format" />
            </div>
            <Select
              id="inputState"
              name="format"
              className="w-full rounded"
              value={selectedBookFormat}
              onChange={handleChangeSelectedValue}
            >
              {bookFormats.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
          {/* genre */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Genres" />
            </div>
            <Select
              id="inputState"
              name="genre"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>
        {/*third row */}
        <div className="flex gap-8">
          {/* book img */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book Image URL" />
            </div>
            <TextInput
              id="imageUrl"
              name="imageUrl"
              type="text"
              placeholder="Book Image Url"
              required
              defaultValue={imageUrl}
            />
          </div>
          {/* book pdf link */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="pdfUrl" value="Book PDF URL" />
            </div>
            <TextInput
              id="pdfUrl"
              name="pdfUrl"
              type="text"
              placeholder="Book Pdf Url"
              defaultValue={pdfUrl}
            />
          </div>
        </div>

        {/* fourth row */}
        <div className="flex gap-8">
          {/* book price */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput
              id="price"
              name="price"
              type="number"
              placeholder="Price"
              required
              defaultValue={price}
            />
          </div>

          {/* language*/}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="language" value="Language" />
            </div>
            <TextInput
              id="language"
              name="language"
              type="text"
              placeholder="Language "
              required
              defaultValue={language}
            />
          </div>
          {/* publish Date */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="publishDate" value="Pulish Date" />
            </div>
            <TextInput
              id="publishDate"
              name="publishDate"
              type="date"
              placeholder="Publish Date "
              required
              defaultValue={publishDate}
            />
          </div>
        </div>
        {/* fifth row */}
        {/* bookDescription */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Book Description" />
          </div>
          <Textarea
            id="description"
            name="description"
            placeholder="Write your book description..."
            required
            rows={4}
            className="w-full"
            defaultValue={description}
          />
        </div>
        <Button type="submit" className="mt-5">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
