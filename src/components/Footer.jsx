export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-8">
      <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-5 gap-8">
        <div>
          <h3 className="font-bold">CS — Ticket System</h3>
          <p className="text-sm mt-2 text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Company</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Services</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>Products</li>
            <li>Customer Support</li>
            <li>Download Apps</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Information</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Social Links</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>@CS — Ticket System</li>
            <li>@CS — Ticket System</li>
            <li>@CS — Ticket System</li>
            <li>support@cs.com</li>
          </ul>
        </div>
      </div>
      <div className="text-center py-4 text-xs text-gray-400 border-t border-gray-700">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
}
