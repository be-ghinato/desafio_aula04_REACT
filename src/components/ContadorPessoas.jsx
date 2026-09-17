import { useState } from 'react';

function ContadorPessoas() {
  const [pessoas, setPessoas] = useState(4);

  const diminuir = () => setPessoas((atual) => (atual > 1 ? atual - 1 : atual));

  return (
    <section className="quadro-mesa">
      <h2>Mesa para quantos?</h2>
      <p>Ajuste o número de pessoas e adapte as porções das receitas.</p>

      <div className="contador">
        <button onClick={diminuir} aria-label="Menos uma pessoa">−</button>
        <span className="numero">{pessoas}</span>
        <button className="terracota" onClick={() => setPessoas(pessoas + 1)}>
          +
        </button>
        <div className="prato">
          {pessoas <= 2 ? 'P' : pessoas <= 6 ? 'M' : 'G'}
        </div>
      </div>
    </section>
  );
}

export default ContadorPessoas;
