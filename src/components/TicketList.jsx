import TicketCard from "./TicketCard";

export default function TicketList({ tickets, onSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} onSelect={onSelect} />
      ))}
    </div>
  );
}
