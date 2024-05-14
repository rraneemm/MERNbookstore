import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const {
    title,
    author,
    imageUrl,
    genre,
    description,
    format,
    language,
    publishDate,
    pdfUrl,
    price,
  } = useLoaderData();

  return (
    <div className=" mt-20 px-4 lg:px-24 flex flex-col items-center">
      <div className="max-w-3xl">
        <h1 className="mt-20 mb-20 text-4xl font-bold text-center px-10">
          {title}
        </h1>
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <img
            src={imageUrl}
            alt={title}
            className="rounded-lg shadow-lg w-full lg:w-72 h-auto mb-4 lg:mb-0"
          />
          <div className="flex flex-col ml-0 lg:ml-8">
            <p className="text-lg mb-2">
              <span className="font-bold">Author:</span> {author}
            </p>
            <p className="text-lg mb-2">
              <span className="font-bold">Genre:</span> {genre}
            </p>
            <p className="text-lg mb-2">
              <span className="font-bold">Format:</span> {format}
            </p>
            <p className="text-lg mb-2">
              <span className="font-bold">Language:</span> {language}
            </p>
            <p className="text-lg">
              <span className="font-bold">Publish Date:</span>{" "}
              {new Date(publishDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
        <div className="text-lg">
          <p className="mb-4">
            <span className="font-bold">Description:</span> {description}
          </p>
          <p className="mb-4">
            <span className="font-bold">Price:</span> ${price}
          </p>
          <div className="flex justify-center">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Read PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
