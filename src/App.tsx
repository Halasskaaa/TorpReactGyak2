import { Torp } from './components/Torp';
import { torpcsalad } from './data/torpok';
import 'bootstrap/dist/css/bootstrap.min.css';

const handleKiir =(nev:string, jogsi:boolean) => {
  alert (`A törp neve: ${nev}, jogsija van-e: ${jogsi ? "Igen" : "Nem"}`);
}

function App() {
    return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="display-1">Törpök listája</h1>          
        </div>
      </div>
      <div className="row">
        {torpcsalad.map((torp, index) => (          
          <div key = {index} className="col-sm-4"> {/* key={torp.id} */}
          <Torp
          torpNeve={torp.nev}
          torpKora={torp.kor}
          torpJogsi={torp.jogsi}
          muvelet = { () => handleKiir(torp.nev, torp.jogsi)}
        />
        </div>
      ))}        
      </div>
    </div>
    </>
  )
}

export default App;