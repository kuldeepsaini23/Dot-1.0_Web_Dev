import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import {toast} from "react-hot-toast"

const UpdateBook = () => {
  const { id } = useParams();

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const createBook = async (data) => {
    const toastId = toast.loading("Loading...")

    try{
      const savedUserResponse = await fetch(
        `${process.env.REACT_APP_BASE_URL}/updateBook/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...data }),
        }
      );
  
      console.log("FORM RESPONSE......", savedUserResponse);
      toast.dismiss(toastId)
      navigate("/");
      toast.success("Book Updated")
    }catch (error) {
      console.log(error);
      toast.error("Something went wrong")
    }
   
  };

  return (
    <div className="flex justify-center items-center w-full h-screen flex-col gap-6">
      <h1 className="text-bold text-5xl text-white">Update Your Book</h1>
      <div className="w-5/12 flex items-center">
        <p className="text-base text-gray-600 dark:text-gray-300 self-start">
          <Link
            to={"/"}
            className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700 flex items-center gap-3"
          >
            <FaBackward />
            Back to all Book List
          </Link>
        </p>
      </div>

      <form onSubmit={handleSubmit(createBook)} className="mt-8 w-5/12">
        <div className="space-y-5">
          <div>
            <label
              htmlFor="title"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              {" "}
              Book Title{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter Your Book Title"
                {...register("title")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="author"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              {" "}
              Author{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter Author"
                {...register("author")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="yearPublished"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              {" "}
              Year Published{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter Your Year Published"
                {...register("yearPublished")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="ISBN"
              className="text-base font-medium text-gray-900 dark:text-gray-200"
            >
              {" "}
              ISBN Number{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter Your ISBN number"
                {...register("ISBN")}
              ></input>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
            >
              Update Book
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateBook;
