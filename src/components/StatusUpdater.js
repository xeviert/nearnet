import Image from "next/image";
import { useContext } from 'react';

export default function StatusUpdater() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6 flex">
      <div className="flex-none">
        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
          <span className="text-gray-600 font-bold text-lg">
            XT
            {/* {first_name && first_name.length > 0 ? first_name[0] : ''}
            {last_name && last_name.length > 0 ? last_name[0] : ''} */}
          </span>
        </div>
      </div>
      <div className="flex-grow">
        <form className="space-y-4 w-full">
          <textarea
            placeholder="What's on your mind?"
            className="w-full p-3 border border-gray-300 rounded-md"
            rows="3"
          ></textarea>
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Add a title"
              className="w-full p-2 border border-gray-300 rounded-md mr-2"
            />
            <input
              type="text"
              placeholder="Payment $$"
              className="w-32 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700  text-white px-4 py-2 rounded-md"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}
