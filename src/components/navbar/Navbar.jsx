export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full shadow-sm">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-lg font-semibold">FL Keys Rental</h1>
        <nav>
          <ul className="flex gap-12">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Location</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
