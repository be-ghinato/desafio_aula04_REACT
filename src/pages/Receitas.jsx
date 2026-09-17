import { useState } from 'react';
import ReceitaCard from '../components/ReceitaCard';

const receitasIniciais = [
  { id: 1, nome: 'Bolo de fubá com café', categoria: 'Doce', nota: 'A vovó só usa fubá de moinho de pedra. Fica úmido por três dias — se durar.' },
  { id: 2, nome: 'Feijão tropeiro do tio Zé', categoria: 'Salgado', nota: 'Segredo: couve cortada fininha e farinha torrada na manteiga de garrafa.' },
  { id: 3, nome: 'Pão de queijo da vizinhança', categoria: 'Lanche', nota: 'Receita trocada pelo muro em 1998. Polvilho azedo, sempre.' },
];

function Receitas() {
  const [receitas, setReceitas] = useState(receitasIniciais);
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('Doce');

  const adicionarReceita = (evento) => {
    evento.preventDefault();
    const nomeLimpo = nome.trim();
    if (nomeLimpo === '') return;

    const nova = {
      id: Date.now(),
      nome: nomeLimpo,
      categoria,
      nota: 'Anotada agora mesmo, direto da cozinha.',
    };

    setReceitas([...receitas, nova]);
    setNome('');
  };

  const removerReceita = (id) => {
    setReceitas(receitas.filter((receita) => receita.id !== id));
  };

  return (
    <>
      <span className="etiqueta">Páginas do caderno</span>
      <h1 className="chamada">
        Receitas anotadas <em>à caneta.</em>
      </h1>

      <section className="painel-lista">
        <form className="form-receita" onSubmit={adicionarReceita}>
          <input
            className="nome-receita"
            type="text"
            placeholder="Nome da receita (ex.: canjica da festa junina)"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option>Doce</option>
            <option>Salgado</option>
            <option>Lanche</option>
          </select>
          <button type="submit" className="terracota">Adicionar ao caderno</button>
        </form>

        {receitas.length === 0 ? (
          <p className="lista-vazia">O caderno está em branco… anote a primeira receita!</p>
        ) : (
          <ul className="grade-cartoes">
            {receitas.map((receita) => (
              <li key={receita.id}>
                <ReceitaCard receita={receita} onRemover={removerReceita} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default Receitas;
