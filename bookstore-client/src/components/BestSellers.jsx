import React, { useEffect, useState } from "react";
import BookCards from "./BookCards";

const BestSellers = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0 - 6)));
  }, []);
  return (
    <div>
      <BookCards books={books} headLine="Best Sellers" />
    </div>
  );
};

export default BestSellers;
