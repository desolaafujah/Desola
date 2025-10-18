import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "about", href: "#about" },
    { name: "writing", href: "/writings" },
    { name: "projects", href: "#projects" },
    { name: "contact", href: "mailto:desolafujah365@gmail.com" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-primary">
          desola f.
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground/80 hover:text-forest transition-colors"
              >
                {item.name}
              </Link>
            ) : item.href.startsWith("mailto:") ? (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-forest transition-colors"
              >
                {item.name}
              </a>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-forest transition-colors"
              >
                {item.name}
              </a>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          {navItems.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.name}
                to={item.href}
                className="block px-4 py-3 text-foreground/80 hover:text-forest transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-foreground/80 hover:text-forest transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
