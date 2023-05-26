import { Nav } from "./Nav";
import "./App.css";
import { Card } from "./Card";
import data from "./Data";

function App() {
  console.log(data);

  let cardObj = data.map((item) => {
    return <Card item={item} key={item.id} />;
  });

  return (
    <div>
      <Nav />
      {cardObj}
    </div>
  );
}

export default App;
