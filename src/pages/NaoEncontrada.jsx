import { Link } from 'react-router-dom';

function NaoEncontrada() {
  return (
    <div className="erro-404">
      <p className="codigo">404</p>
      <p className="subtexto" style={{ margin: '0 auto 26px' }}>
        Essa página do caderno foi rasgada há muito tempo…
      </p>
      <Link to="/">
        <button className="terracota">Voltar para o início</button>
      </Link>
    </div>
  );
}

export default NaoEncontrada;
