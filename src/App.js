import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';
import {DataContext} from './Contexts/DataContext';
import { Data } from "./data";


function App() {
  return (
    <div className="App">
      <DataContext.Provider value={{Data}}>
     <Tabs />
     </DataContext.Provider>
    </div>
  );
}

export default App;
