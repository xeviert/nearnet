export default function StatusUpdater() {
  return (
    <div className="inset-0 flex justify-center items-center z-50">
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
