import './App.css';
import Search from './search/Search';
import Coins from './coins/Coins';
import Info from  './Info/Info';

function App() {
  return (
    <div className="App">
      <Search />
      <div className="content">
        <Coins />
        <Info />
      </div>
    </div>
  );
}

export default App;
