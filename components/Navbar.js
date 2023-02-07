import Link from "next/link";
import { FiMenu } from "react-icons/fi";
function Navbar() {
  return (
    <>
      <div className="container mx-auto flex justify-between py-4">
        <div className="logo">
          <span>Gym</span> baran
        </div>

        <div className="flex align-item-center justify-between  hidden md:flex">
          <ul className="hidden md:flex navbar-gap">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/program">
              <li>Program</li>
            </Link>
            <Link href="/blog">
              <li>Blog</li>
            </Link>
            <Link href="/aboutUs">
              <li>About Us</li>
            </Link>
          </ul>
          <button className="flex align-item-center justify-between  hidden md:flex log-in">
            Log in
          </button>
        </div>

        <div className="md:hidden text-[24px]">
          <FiMenu />
        </div>
      </div>
    </>
  );
}

export default Navbar;
