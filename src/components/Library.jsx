function Library() {
  return (
    <section className="card" id="biblioteca">
      <h2>📚 Biblioteca y K-Dramas</h2>

      <div className="library-content">
        <img
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800"
          alt="Biblioteca"
        />

        <div className="library-text">
          <p>
            En Seoul Café podrás disfrutar de una selección de novelas
            coreanas, mangas, libros de programación y un espacio tranquilo
            para leer mientras degustas un café de especialidad.
          </p>

          <ul className="library-list">
            <li>📖 Novelas Coreanas</li>
            <li>🎬 K-Dramas</li>
            <li>🎵 K-Pop</li>
            <li>💻 Programación</li>
            <li>📚 Manhwas</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Library;