import Image from "next/image";

export const StatusContainer = ({ title, payment, description, posted, first_name, last_name }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
        <span className="text-gray-600">
          {first_name && first_name.length > 0 ? first_name[0] : ''}
          {last_name && last_name.length > 0 ? last_name[0] : ''}
        </span>

        </div>
        <div>
          <h4 className="font-semibold">{first_name} {last_name}</h4>
          <p className="text-sm text-gray-600">{posted}</p>
        </div>
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex justify-between text-sm text-gray-600">
        <span>Payment: ${payment}</span>
        <div className="flex space-x-4">
          <button className="hover:underline">Like</button>
          <button className="hover:underline">Comment</button>
          <button className="hover:underline">Share</button>
        </div>
      </div>
    </div>
  );
}
