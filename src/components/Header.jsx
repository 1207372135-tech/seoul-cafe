function Header() {
  return (
    <header className="hero" id="inicio">

      <nav className="navbar">

        <h2 className="logo">☕ Seoul Café & Books</h2>

        <div className="menu">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Sobre Nosotros</a>
          <a href="#galeria">Galería</a>
          <a href="#libros">Libros Recomendados</a>
          <a href="#contacto">Contacto</a>
        </div>

      </nav>

      <div className="hero-content">

        <span className="hero-subtitle">
          Bienvenido a nuestra cafetería
        </span>

        <h1>☕ Seoul Café & Books</h1>

        <p>
          Vive una experiencia inspirada en Corea del Sur,
          donde el aroma del café, los libros y la cultura
          crean momentos inolvidables.
        </p>

        <a href="#libros" className="btn">
          ☕ Explorar Café y Libros
        </a>

      </div>

    </header>
  );
}

export default Header;