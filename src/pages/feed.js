import Image from "next/image";
import { useContext } from 'react';

function Feed() {
//   const context = useContext(AppContext);

//   const [inputField, setInputField] = useState({
//     title: '',
//     payment: '',
//     description: '',
//   });

//   const [error, setError] = useState(null);

  const handleChange = (e) => {
    // setInputField({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    // const favor = {
    //   title: inputField.title,
    //   payment: inputField.payment,
    //   description: inputField.description,
    //   posted: new Date(),
    // };

    // fetch(`${config.API_ENDPOINT}/favors`, {
    //   method: 'POST',
    //   body: JSON.stringify(favor),
    //   headers: {
    //     'content-type': 'application/json',
    //     authorization: `Bearer ${TokenService.getAuthToken()}`,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((favor) => {
    //     context.addFavor(favor);
    //     setInputField({
    //       title: '',
    //       payment: '',
    //       description: '',
    //     });
    //   })
    //   .catch((error) => {
    //     setError(error);
    //   });
  };

//   const { first_name, last_name } = context;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <div className="flex justify-between items-center border-b pb-3">
        <span className="text-2xl font-bold">XT</span>
      </div>

      <form className="space-y-4 mt-4">
        <input
          type="text"
          placeholder="Favor Title"
          name="title"
          maxLength="20"
          required
          className="w-full p-2 border rounded-md"
        />

        <input
          type="text"
          placeholder="Payment $$"
          name="payment"
          maxLength="20"
          required
          className="w-full p-2 border rounded-md"
        />

        <textarea
          placeholder="Description"
          name="description"
          maxLength="300"
          type="text"
          required
          className="w-full p-2 border rounded-md h-40"
        ></textarea>

        <button type="submit" className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
          +
        </button>
      </form>
    </div>
  </div>

  );
}

export default Feed;
