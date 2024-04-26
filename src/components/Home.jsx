
import Navbar from './Navbar';
import NavbarTwo from './NavbarTwo';
import Crousel from './Craousel';
import Test from './Test';
import Footer from './Footer';
const Home = () => {
  return (
   <div>
    <Navbar/>
    <NavbarTwo/>
    <Test/>
    <div className='h-[50px] m-[10px]'><h1 className='text-[#00838f] text-[1.3rem] font-normal'>Best Seller For Daily Needs</h1></div>
    <Footer/>
   </div>
  )
}

export default Home;