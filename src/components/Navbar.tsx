import { Menu } from "lucide-react";
import { useState } from "react";

const links = [
  "Home",
  "About",
  "Experience",
  "Skills",
  "Projects",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-600">
          Nagarathinam
        </h1>

        <nav className="hidden md:flex gap-8">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-medium hover:text-blue-600 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white px-6 pb-5">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-3"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}