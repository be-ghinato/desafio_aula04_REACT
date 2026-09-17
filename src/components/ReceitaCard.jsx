function ReceitaCard({ receita, onRemover }) {
  return (
    <article className="cartao">
      <span className="categoria">{receita.categoria}</span>
      <h3>{receita.nome}</h3>
      <p className="nota">{receita.nota}</p>
      <div className="acoes">
        <button className="remover" onClick={() => onRemover(receita.id)}>
          Rasgar página
        </button>
      </div>
    </article>
  );
}

export default ReceitaCard;
