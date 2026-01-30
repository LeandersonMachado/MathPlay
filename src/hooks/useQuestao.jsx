import { useCallback, useState } from 'react';

export function useQuestao() {
  const [questao, setQuestao] = useState(null);
  const [respondidas, setRespondidas] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [feedback, setFeedback] = useState('');

  const gerarNovaQuestao = useCallback(() => {
    const numero = Math.floor(Math.random() * 90000) + 1000;
    const numStr = numero.toString();
    const posicao = Math.floor(Math.random() * numStr.length);
    const potencia = numStr.length - 1 - posicao;
    const valorReal = Number(numStr[posicao]) * 10 ** potencia;

    setQuestao({
      numeroCompleto: numStr,
      posicaoSublinhada: posicao,
      respostaCorreta: valorReal
    });

    setFeedback('');
  }, []);

  const verificarResposta = useCallback((valor) => {
    if (!questao) return false;

    if (Number(valor) === questao.respostaCorreta) {
      setPontuacao(p => p + 10);
      setRespondidas(r => r + 1);
      setFeedback('Correto! 🎉');
      return true;
    }

    setFeedback('Tente novamente! ❌');
    return false;
  }, [questao]);

  return {
    questao,
    feedback,
    respondidas,
    pontuacao,
    gerarNovaQuestao,
    verificarResposta
  };
}
export default useQuestao;