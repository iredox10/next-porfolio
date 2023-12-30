import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <div className="flex justify-between py-5 px-10">
      <div>
        <h1>logo</h1>
      </div>
      <nav className="flex items-center gap-4">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/portfolio"}>Portfolio</Link>
        <Link className="bg-secondary-color  px-4 py-2 text-black rounded-full" href={"/hire-me"}>
          Hire Me
        </Link>
      </nav>
    </div>
  );
};

export default Header;
