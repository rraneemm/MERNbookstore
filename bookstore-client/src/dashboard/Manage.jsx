import { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const Manage = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooks(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/book/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        alert("Book successfuly removed.");
        window.location.reload();
      });
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>

      {/* table for book data */}
      <Table className="lg:w-[1180px]">
        <Table.Head>
          <Table.HeadCell>Number</Table.HeadCell>
          <Table.HeadCell>Book Title</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Genre</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Edit or Manage</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            // The allBooks.map() function is used to iterate over each item in the allBooks array
            books.map((book, index) => (
              <Table.Row
                key={book._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell>{book.title}</Table.Cell>
                <Table.Cell>{book.author}</Table.Cell>
                <Table.Cell>{book.genre}</Table.Cell>
                <Table.Cell>{book.price}</Table.Cell>
                <Table.Cell>
                  <Link
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                    to={`/admin/dashboard/edit/${book._id}`}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600"
                  >
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    </div>
  );
};

export default Manage;
