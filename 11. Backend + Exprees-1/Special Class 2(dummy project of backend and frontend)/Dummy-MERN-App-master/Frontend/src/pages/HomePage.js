import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsPencil } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-hot-toast";


const HomePage = () => {
  const [bookData, setBookData] = useState();

  const getAllData = async () => {
    try {
      const getBook = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getallBooks`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await getBook.json();
      setBookData(res);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong")
    }
  };

  useEffect(() => {
    getAllData();
  }, []);
  console.log(bookData);

  async function handleDelete(book_id) {
    try {
      const toastId = toast.loading("Loading...")
      const deleteBook = await fetch(
        `${process.env.REACT_APP_BASE_URL}/deleteBook/${book_id}`,
        {
          method: "DELETE",
        }
      );

      const res = await deleteBook.json();
      console.log(res.message);
      toast.dismiss(toastId)
      getAllData();
      toast.success("Book Deleted")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className="container px-4 mx-auto py-4 overflow-hidden">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Books
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              This is a list of all Books. You can add new books, edit or delete
              existing ones.
            </p>
          </div>
          <Link to={"/addbook"}>
            <div>
              <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500 ">
                Add Book
              </button>
            </div>
          </Link>
        </div>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <span>Book Title</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Author
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Year Published
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        ISBN
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Edit/Delete
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {bookData?.data.map((book) => (
                      <tr key={book.title}>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {book.title}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">
                            {book.author}
                          </div>
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          {book.yearPublished}
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          {book.ISBN}
                        </td>

                        <td>
                          <div className="flex gap-5 ml-6 hover:cursor-pointer">
                            <Link to={`/updatebook/${book._id}`}>
                              <BsPencil color="white" />
                            </Link>

                            <button onClick={() => handleDelete(book._id)}>
                              <AiOutlineDelete color="white" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
