import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
{
  /*instead of loading it from db */
}
const UploadBook = () => {
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
    //console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
    setSelectedBookFormat(event.target.value);
  };

  //handel book submission
  //collecting data on form submit
  const handelBookSubmit = (event) => {
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
    const bookObj = {
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
    console.log(bookObj);

    //send data to DataBase
    fetch("http://localhost:5000/add-books", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(bookObj),
      // JavaScript object into a JSON string,
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book uploaded successfully!!");
        form.reset(); //reset form after submission
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload a Book</h2>

      {/* redirecting to the function created */}
      <form
        onSubmit={handelBookSubmit}
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
          />
        </div>
        <Button type="submit" className="mt-5">
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
