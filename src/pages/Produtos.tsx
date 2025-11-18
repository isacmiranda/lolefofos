export default function Produtos() {
  const produtos = [
    {
      nome: "Sabonetes Personalizados",
      preco: "R$ 12,00",
      img: "https://via.placeholder.com/300x300?text=Sabonete"
    },
    {
      nome: "Velas Aromatizadas",
      preco: "R$ 18,00",
      img: "https://via.placeholder.com/300x300?text=Vela"
    },
    {
      nome: "Cestas Variadas",
      preco: "R$ 49,90",
      img: "https://via.placeholder.com/300x300?text=Cestas"
    },
    {
      nome: "Lembrancinhas Personalizadas",
      preco: "R$ 8,00 (cada)",
      img: "https://via.placeholder.com/300x300?text=Lembrancinhas"
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Produtos da LofeFofos
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {produtos.map((item) => (
          <div
            key={item.nome}
            className="bg-white rounded-xl shadow-md border border-pink-300 p-4 flex flex-col items-center hover:shadow-lg hover:scale-[1.02] transition"
          >
            <img
              src={item.img}
              alt={item.nome}
              className="w-full h-48 object-cover rounded-lg border border-pink-200"
            />

            <h2 className="mt-3 text-lg font-semibold text-gray-900 text-center">
              {item.nome}
            </h2>

            <p className="text-pink-600 font-bold text-center mt-1">{item.preco}</p>

            <button className="mt-auto bg-pink-400 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500 transition">
              Fazer Pedido
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}
