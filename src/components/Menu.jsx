function Menu() {
  const productos = [
    {
      nombre: "Latte Coreano",
      precio: "$3.50",
      imagen:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
    },
    {
      nombre: "Bingsu",
      precio: "$4.50",
      imagen:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb"
    },
    {
      nombre: "Pastel de Fresa",
      precio: "$3.80",
      imagen:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
    }
  ];

  return (
    <section className="menu" id="menu">
      <h2>☕ Menú Destacado</h2>

      <div className="cards">
        {productos.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.imagen} alt={item.nombre} />

            <h3>{item.nombre}</h3>

            <p>{item.precio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;