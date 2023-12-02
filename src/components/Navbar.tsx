import Navlink from "@ui/Navlink";

const links = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Connect", href: "/connect" }
];



const Navbar = () => {
  return (
    <nav className="flex justify-center items-center overflow-auto">
            <Navlink links={links} />
    </nav>
  );
};

export default Navbar;
