function FeaturedBooks() {
  const books = [
    {
      title: "Kim Ji-young, Born 1982",
      author: "Cho Nam-joo",
      category: "Novela",
      emoji: "📖"
    },
    {
      title: "The Vegetarian",
      author: "Han Kang",
      category: "Literatura",
      emoji: "🌿"
    },
    {
      title: "Solo Leveling",
      author: "Chugong",
      category: "Manhwa",
      emoji: "⚔️"
    },
    {
      title: "True Beauty",
      author: "Yaongyi",
      category: "Webtoon",
      emoji: "💖"
    }
  ];

  return (
    <section className="card" id="libros">
      <h2>📚 Libros Recomendados</h2>

      <p className="subtitle">
        Disfruta de un buen café mientras descubres historias
        inspiradas en la cultura coreana.
      </p>

      <div className="books-grid">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <div className="book-icon">
              {book.emoji}
            </div>

            <h3>{book.title}</h3>

            <p>
              <strong>Autor:</strong><br />
              {book.author}
            </p>

            <span>{book.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedBooks;