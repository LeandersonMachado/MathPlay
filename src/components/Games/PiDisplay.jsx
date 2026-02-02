export default function PiDisplay({ pi, position, total = 8 }) {
  const corretos = pi.slice(0, position);
  const faltantes = "-".repeat(Math.max(total - corretos.length, 0));

  return (
    <div className="text-3xl font-mono tracking-widest text-gray-800">
      3,{corretos}
      <span className="text-gray-300">{faltantes}</span>
    </div>
  );
}
