import "./App.css";
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";

export function App() {
  const END_POINT_IMAGE_CAT = `https://cataas.com/cat/says/`;
  const { fact, refreshFact } = useCatFact();
  const { imageCat } = useCatImage({ fact });

  const handleClick = () => {
    refreshFact();
  };

  return (
    <main>
      <h1>Api de Gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        <img
          src={END_POINT_IMAGE_CAT + imageCat}
          alt={`Image taked of the API cataas with this three words: '${imageCat}'`}
        />
      </section>
      <button onClick={handleClick}>Nuevo Fact</button>
    </main>
  );
}
