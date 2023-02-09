import './App.scss'
import { Topbar } from './components/topbar/Topbar';
import { Navbar } from './components/navbar/Navbar';
import { TopBanner } from './components/topBanner/TopBanner';
import { Coupon } from './components/coupon/Coupon';
import { Catalog } from './components/catalogSection/Catalog';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <TopBanner />
      <Coupon />
      <Catalog />
    </div>
  );
}

export default App;
