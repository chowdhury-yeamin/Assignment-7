import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketList from './components/TicketList';
import TaskStatus from './components/TaskStatus';
import ticketsData from './data/tickets.json';

function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  useEffect(() => {
    setTickets(ticketsData);
  }, []);

  const handleSelect = (ticket) => {
    if (!inProgress.find(t => t.id === ticket.id)) {
      setInProgress([...inProgress, ticket]);
      alert("Ticket added to In-Progress");
    }
  }

  const handleComplete = (ticket) => {
    setInProgress(inProgress.filter(t => t.id !== ticket.id));
    setResolved([...resolved, ticket]);
    setTickets(tickets.filter(t => t.id !== ticket.id));
    alert("Ticket marked as Resolved");
  }

  return (
    <>
      <Navbar />
      <Banner inProgressCount={inProgress.length} resolvedCount={resolved.length} />

      <main className="flex-1 max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="font-semibold mb-4">Customer Tickets</h2>
          <TicketList tickets={tickets} onSelect={handleSelect} />
        </div>

        <TaskStatus
          inProgress={inProgress}
          resolved={resolved}
          onComplete={handleComplete}
        />
      </main>
    </>
  )
}

export default App;
