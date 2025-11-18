export default function Contato() {
  return (
    <div className="min-h-screen bg-white text-gray-800 pt-20 pb-32">

      {/* Título */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-rose-500">Entre em Contato</h1>
        <p className="text-gray-600 mt-2">
          Fale com a LofeFofos! Será um prazer responder você 
        </p>
      </div>

      {/* Container das áreas */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

        {/* Formulário */}
        <div className="bg-rose-50 p-6 rounded-2xl shadow-lg border border-rose-200">
          <h2 className="text-2xl font-semibold text-rose-500 mb-4">
            Envie sua mensagem
          </h2>
          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Seu nome"
              className="px-4 py-3 rounded-xl border border-rose-300 focus:ring-2 focus:ring-rose-400 outline-none"
            />

            <input
              type="email"
              placeholder="Seu e-mail"
              className="px-4 py-3 rounded-xl border border-rose-300 focus:ring-2 focus:ring-rose-400 outline-none"
            />

            <textarea
              rows={4}
              placeholder="Sua mensagem"
              className="px-4 py-3 rounded-xl border border-rose-300 focus:ring-2 focus:ring-rose-400 outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-rose-500 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-rose-600 transition"
            >
              Enviar Mensagem
            </button>

          </form>
        </div>

        {/* Informações / WhatsApp */}
        <div className="flex flex-col gap-6 justify-center">

          <div className="bg-white shadow-lg border border-rose-200 p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold text-rose-500 mb-3">
              Informações de Contato
            </h2>

            <p className="mb-3">
              📍 <strong>Endereço:</strong> Sua rua, número, bairro
            </p>

            <p className="mb-3">
              📞 <strong>Telefone:</strong> (XX) XXXX-XXXX
            </p>

            <p className="mb-3">
              ✉️ <strong>E-mail:</strong> lofefofos@gmail.com
            </p>

            <p>
              💬 <strong>WhatsApp:</strong> (XX) XXXXX-XXXX
            </p>
          </div>

          {/* Botão WhatsApp */}
          <a
            href="https://wa.me/55XXXXXXXXXX"
            target="_blank"
            className="bg-green-500 text-white text-center py-4 rounded-2xl text-xl font-semibold shadow-lg hover:bg-green-600 transition"
          >
            Falar no WhatsApp 💬
          </a>

        </div>
      </div>
    </div>
  );
}