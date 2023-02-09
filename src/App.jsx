import './App.scss'
import { Topbar } from './components/topbar/Topbar';
import { Navbar } from './components/navbar/Navbar';
import { TopBanner } from './components/topBanner/TopBanner';
import { Coupon } from './components/coupon/Coupon';
import { Catalog } from './components/catalogSection/Catalog';
import { SingleSlider } from './components/singleSlider/SingleSlider';
import { PopularFood } from './components/popularFoods/PopularFood';
import { Drink } from './components/drinkItems/Drink';
import { Breakfast } from './components/breakfast/Breakfast';


function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <TopBanner />
      <Coupon />
      <Catalog />
      <SingleSlider />
      
     <div className="appWrapper">
      <PopularFood/>
      <Breakfast />
      <Drink />
      </div>
    </div>
  );
}

export default App;
