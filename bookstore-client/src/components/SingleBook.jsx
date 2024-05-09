import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { _id, title, imageUrl } = useLoaderData();
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h1 className="text-6xl ">{title}</h1>
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default SingleBook;
