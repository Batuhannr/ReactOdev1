import './App.css';
import Weather from './Components/Weather';
import { WeatherProvider } from './Context/WeatherContext';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Weather />

      </WeatherProvider>
    </div>
  );
}

export default App;
