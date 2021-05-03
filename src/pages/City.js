import { useParams } from "react-router-dom";

const City = () => {
  const { city } = useParams();

  return <h1>{city}</h1>;
};

export default City;
