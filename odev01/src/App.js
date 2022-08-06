import './App.css';
import getValue from './GetData';

function App() {
  return (
    <div className="App">
      <div className="App">
      <button onClick={()=>getValue(1,1)}>Kullanıcı 1 Çek</button>
      <button onClick={()=>getValue(1,2)}>Post 2 Çek</button>
    </div>
    </div>
  );
}

export default App;
