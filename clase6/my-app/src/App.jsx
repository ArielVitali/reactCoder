import { useEffect, useState } from "react";

function App() {
  const [noticias, setNoticias] = useState([]);

  const getNoticias = () => {
    //axios.get("https://randomuser.me/api");
    //  .then((res) => setNoticias(res.data.results[0]))
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setNoticias(data))
      .catch((err) => console.error("ERROR: ", err));
  };

  useEffect(() => {
    getNoticias();
  }, []);

  console.log(noticias);

  return (
    <div className="App">
      {noticias.map((noticia) => {
        return (
          <div>
            <h1>{noticia.id}</h1>;
          </div>
        );
      })}
    </div>
  );
}

export default App;
