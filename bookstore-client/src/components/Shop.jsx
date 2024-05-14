import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([""]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">Explore Your Empyrean</h2>
      <div className="grid gap-8 my-12 ld:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <Card key={book._id} className="max-w-sm">
            <div className="flex justify-center items-center">
              <Link to={`/book/${book._id}`}>
                <img
                  src={book.imageUrl}
                  alt=""
                  className="max-w-full max-h-fit"
                />
              </Link>
            </div>

            <p>
              {" "}
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                <p>{book.title}</p>
              </h5>
              <p className=" ml-2 font-normal text-gray-700 dark:text-gray-400">
                {book.description}
              </p>
            </p>
            <Link to={`/book/${book._id}`}>
              <button className="bg-green-800 font-semibold text-emerald-200 hover:text-white rounded">
                Checkout Book
              </button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
