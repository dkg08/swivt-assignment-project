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
import { BestDeals } from './components/bestDeals/BestDeals';
import { Article } from './components/blogPost/Article';
import middleBanner from './assets/middlebanner.png'
import { Promotion } from './components/promotion/Promotion';
import { UserBenefit } from './components/userBenefit/UserBenefit';
import { RiderProgram } from './components/riderProgram/RiderProgram';
import { AppPromo } from './components/appPromo/AppPromo';


function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <TopBanner />
      <Coupon />
      <Catalog />
      
     <div className="appWrapper">
      <SingleSlider />
      <BestDeals />
      <PopularFood/>
      <Breakfast />
      <Drink />
      <Article />
      </div>
      <div className="middleBanner">
        <img src={middleBanner} alt="food and fruits" />
      </div>
      <div className="appMiddleWrapper">
        <Promotion />
        <UserBenefit />
      </div>
      <RiderProgram />
      <AppPromo />
    </div>
  );
}

export default App;
