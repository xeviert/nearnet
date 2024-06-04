export default function StatusContainer(props) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg my-5">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-green-600">
          {props.first_name} {props.last_name}
        </div>
        <h3 className="text-lg leading-tight font-semibold mb-2">{props.title}</h3>
        <div className="text-gray-700 text-base">
          <p className="mb-4">{props.description}</p>
          <p className="text-sm text-gray-600">Payment: ${props.payment}</p>
          <p className="text-sm text-gray-600">{props.posted}</p>
        </div>
      </div>
    </div>
  );
}
