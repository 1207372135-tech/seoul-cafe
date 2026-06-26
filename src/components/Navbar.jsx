function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">☕ Seoul Café & Books</div>

      <ul className="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#menu">Menú</a></li>
        <li><a href="#biblioteca">Biblioteca</a></li>
        <li><a href="#galeria">Galería</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;