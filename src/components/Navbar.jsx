export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        <h1 className="font-bold text-lg">CS — Ticket System</h1>
        <div className="hidden md:flex gap-6 items-center">
          <a href="" className="hover:text-indigo-600">
            Home
          </a>
          <a href="" className="hover:text-indigo-600">
            FAQ
          </a>
          <a href="" className="hover:text-indigo-600">
            Changelog
          </a>
          <a href="" className="hover:text-indigo-600">
            Blog
          </a>
          <a href="" className="hover:text-indigo-600">
            Download
          </a>
          <a href="" className="hover:text-indigo-600">
            Contact
          </a>
          <button className="bg-indigo-600 text-white px-3 py-2 rounded-md">
            + New Ticket
          </button>
        </div>
      </div>
    </nav>
  );
}
