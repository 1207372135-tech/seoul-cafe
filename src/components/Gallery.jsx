function Gallery() {
  return (
    <section className="card" id="galeria">
      <h2>📸 Galería</h2>

      <div className="gallery">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          alt="Café"
        />

        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
          alt="Latte"
        />

        <img
          src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
          alt="Postre"
        />

        <img
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0"
          alt="Biblioteca"
        />
      </div>
    </section>
  );
}

export default Gallery;