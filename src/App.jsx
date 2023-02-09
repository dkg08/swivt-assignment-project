import './App.scss'
import { Topbar } from './components/topbar/Topbar';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
    </div>
  );
}

export default App;
