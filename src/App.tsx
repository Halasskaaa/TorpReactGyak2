import { Torp } from './components/Torp';
import { torpcsalad } from './data/torpok';

const handleKiir =(nev:string, jogsi:boolean) => {
  alert (`A törp neve: ${nev}, jogsi: ${jogsi ? "Igen" : "Nem"}`);
}

function App() {
    return (
    <>
      <h1>Törpök listája</h1>
      {torpcsalad.map((torp, index) => (
        <Torp
          key = {index} // key={torp.id}
          torpNeve={torp.nev}
          torpKora={torp.kor}
          torpJogsi={torp.jogsi}
          muvelet = { () => handleKiir(torp.nev, torp.jogsi)}
        />
      ))}
    </>
    )
}

export default App;