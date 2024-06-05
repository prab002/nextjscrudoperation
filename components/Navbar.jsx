import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
        <Link href={"/"} className="text-white font-bold">
          back to home
        </Link>
        <Link href={"/addTopic"} className="bg-white  p-2">
          add Topic
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
