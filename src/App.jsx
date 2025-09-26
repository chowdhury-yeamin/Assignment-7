import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketList from './components/TicketList';
import ticketsData from './data/tickets.json';

function App() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTickets(ticketsData);
  }, []);

  const handleSelect = (ticket) => {
    if (ticket) {
      alert("Ticket added to In-Progress");
    }
  }

  return (
    <>
      <Navbar />
      <Banner inProgressCount={0} resolvedCount={0} />
      
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-semibold mb-4">Customer Tickets</h2>
        <TicketList tickets={tickets} onSelect={handleSelect} />
      </div>
    </>
  )
}

export default App;
