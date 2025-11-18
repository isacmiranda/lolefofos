export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4">

      {/* Banner */}
      <section className="mt-6 bg-pink-200 rounded-2xl p-6 md:p-10 shadow-md text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Presentes feitos com amor 
        </h2>
        <p className="mt-3 text-base md:text-lg text-gray-700">
          Sabonetes personalizados, velas aromatizadas, cestas especiais e muito mais.
        </p>

        <a
          href="https://wa.me/559999999"
          className="inline-block mt-5 bg-pink-400 text-white px-6 py-3 rounded-xl shadow hover:bg-pink-500 transition"
        >
          Fazer pedido no WhatsApp
        </a>
      </section>

      {/* Cards */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

        {[
          { title: "Sabonetes Personalizados", desc: "Feitos à mão com fragrâncias incríveis." },
          { title: "Velas Aromatizadas", desc: "Aromas que transformam qualquer ambiente." },
          { title: "Cestas Variadas", desc: "Combinações perfeitas para presentear." },
          { title: "Lembrancinhas Personalizadas", desc: "Perfeitas para datas especiais." }
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white shadow-md rounded-xl p-6 border border-pink-300 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}

      </section>

    </div>
  );
}
