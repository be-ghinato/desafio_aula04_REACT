import { Link } from 'react-router-dom';
import ContadorPessoas from '../components/ContadorPessoas';

function Home() {
  return (
    <>
      <span className="etiqueta">Caderno de receitas da família</span>
      <h1 className="chamada">
        Receitas escritas à mão, <em>guardadas no coração.</em>
      </h1>
      <p className="subtexto">
        Aqui anotamos os pratos que fizeram história nas nossas mesas de domingo:
        o bolo de fubá da vovó, o feijão tropeiro do tio Zé e tudo mais que vale
        a pena passar adiante. Pegue uma xícara de café e fique à vontade.
      </p>

      <ContadorPessoas />

      <p style={{ marginTop: '36px' }}>
        <Link to="/receitas">
          <button className="terracota">Abrir o caderno de receitas →</button>
        </Link>
      </p>
    </>
  );
}

export default Home;
