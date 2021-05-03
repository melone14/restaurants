import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Restauracje w Twoim mieście!</h1>
      <h2>Wybierz swoje miasto:</h2>
      <Link to="/city/warszawa">Warszawa</Link>
      <Link to="/city/wrocław">Wrocław</Link>
      <Link to="/city/kraków">Kraków</Link>
      <Link to="/city/gdańsk">Gdańsk</Link>
    </>
  );
};

export default Home;
