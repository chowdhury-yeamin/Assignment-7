export default function TaskStatus({ inProgress, resolved, onComplete }) {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="font-semibold mb-2">Task Status</h2>

      {inProgress.length === 0 && (
        <p className="text-sm text-gray-500">Select a ticket to add to Task Status</p>
      )}

      {inProgress.map(ticket => (
        <div
          key={ticket.id}
          className="border-b py-2 mb-2"
        >
          <div className="font-medium mb-1">{ticket.title}</div>

          <button
            onClick={() => onComplete(ticket)}
            className="w-full bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
          >
            Complete
          </button>
        </div>
      ))}

      <h2 className="font-semibold mt-4 mb-2">Resolved Tasks</h2>
      {resolved.length === 0 && (
        <p className="text-sm text-gray-500">No resolved tasks yet.</p>
      )}
      {resolved.map(ticket => (
        <div key={ticket.id} className="text-sm py-1">
          ✅ {ticket.title}
        </div>
      ))}
    </div>
  )
}
