import logo from './logo.svg';
import './App.css';
import Header from './components/comun/header.jsx';
import Footer from './components/comun/Footer.jsx';
import LeafletMap from './components/body/map.jsx';
import Landing from './components/paginas/Main.jsx';

function App() {
  return (
    <div className="App">
      <Header>
      </Header>
      {/* <LeafletMap center={[51.505, -0.09]} zoom={13} /> */}
      <Landing/>
      <Footer>
      </Footer>
    </div>
  );
}

export default App;
