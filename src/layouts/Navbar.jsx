const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur border-b z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">Irfan</h1>

        <div className="flex gap-6 text-sm">
          <a href="#intro" className="hover:text-blue-600">Home</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;