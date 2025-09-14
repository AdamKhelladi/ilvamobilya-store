import './App.css';
import InfosBar from './components/InfosBar/InfosBar';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <InfosBar />
      <div className="container">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
