export default function PiDisplay({ pi, position, total = 8 }) {
    const resto = position % total;
    const blocosCompletos = Math.floor(position / total);

    const exibicaoCompleta = pi.slice(0, blocosCompletos * total);

    const blocoAtualNumeros = pi.slice(
        blocosCompletos * total,
        blocosCompletos * total + resto
    );

    const blocoAtualTracos = "-".repeat(total - resto);

    return (
        <div className="w-full text-center">
            <div className="text-2xl font-mono tracking-widest break-all">
                3,{exibicaoCompleta}
                {blocoAtualNumeros}
                {blocoAtualTracos}
            </div>
        </div>
    );
}
