import { useEffect, useState } from "react";

import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  //toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Blog", path: "/blog" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
  ];
  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0  bg-stone-100" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/*logo*/}
          <Link
            to="/"
            className="text-2xl font-bold text-green-700 flex items-center gap-2"
          >
            <FaBlog className="inline-block" />
            Books
          </Link>
          {/*nav items for large devices: some map operations */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base font-thin text-stone-800  cursor-pointer hover:text-green-900"
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>

        {/*menu btn for mobile devices */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-slate-800 focus:outline-none"
          >
            {isMenuOpen ? (
              <FaXmark className="h-5 w-5 text-slate-800" />
            ) : (
              <FaBarsStaggered />
            )}
          </button>
        </div>
        {/*navItems form small devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 gb-green-700 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base text-slate-800  cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
