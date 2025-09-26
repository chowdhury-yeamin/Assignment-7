export default function TicketCard({ ticket, onSelect }) {
  return (
    <div
      className="bg-white shadow rounded-lg p-4 cursor-pointer hover:shadow-md"
      onClick={() => onSelect(ticket)}
    >
      <h3 className="font-semibold">{ticket.title}</h3>
      <p className="text-sm text-gray-600">{ticket.description}</p>
      <div className="mt-2 text-sm">
        <span className="font-medium">Customer:</span> {ticket.customer}
      </div>
      <div className="flex justify-between mt-2 text-xs">
        <span
          className={`px-2 py-1 rounded ${
            ticket.priority === "High"
              ? "bg-red-100 text-red-600"
              : ticket.priority === "Medium"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {ticket.priority} PRIORITY
        </span>
        <span className="text-gray-500">{ticket.createdAt}</span>
      </div>
    </div>
  );
}
