type Props = {
  nome: string;
  preco: number;
};

export default function ProductCard({ nome, preco }: Props) {
  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: "10px",
        padding: "15px",
        width: "160px",
      }}
    >
      <h3>{nome}</h3>
      <p>R$ {preco.toFixed(2)}</p>
    </div>
  );
}
