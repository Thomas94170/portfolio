import {
  Navbar as MTNavbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {["Présentation", "Compétences", "Portfolio", "Contact"].map((item) => (
        <Typography
          key={item}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a
            href={`#${item.toLowerCase()}`}
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            {item}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar
      className={`sticky top-0 z-50 max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 ${
        scrolled ? "border-b bg-white/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-bold"
        >
          Thomas DevWeb Solutions
        </Typography>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>{navList}</Collapse>
    </MTNavbar>
  );
}
