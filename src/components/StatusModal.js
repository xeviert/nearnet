import Image from "next/image";

export default function StatusModal() {
    return (
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg my-5">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Juliette J.</div>
          <h3 className="text-lg leading-tight font-semibold mb-2">Status Title</h3>
          <div className="text-gray-700 text-base">
            <p className="mb-4">I am tired but I want to get to a certain stopping point</p>
            <p className="text-sm text-gray-600">Payment: $40</p>
            <p className="text-sm text-gray-600">Posted: 12:03 am</p>
          </div>
        </div>
      </div>
    )
}