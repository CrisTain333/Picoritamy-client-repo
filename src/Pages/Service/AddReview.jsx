import React, { useContext} from "react";
import AuthContext from "../../Context/Context";

const AddReview = () => {
  const {user} = useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    const current = new Date();
    const time = current.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const form = e.target;
    const message = form.message.value;

    const userReview = {
        time,
      message,
    };

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
        Please Review
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Your Feedback is Very Important For Us
      </p>
      <form onSubmit={handleSubmit}>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button
          className="text-white bg-primary border-0 py-2 px-6 text-center focus:outline hover:bg-pink-600 rounded text-lg"
          type="submit"
        >
          Add Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
