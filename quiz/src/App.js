import './App.css';
import './Components/Navbar/Navbar';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';
import Description from './Components/Description/Description';
import Instruction from './Components/Instruction/Instruction';
import Types from './Components/Types/Types';
function App() {
  return (
    <> 
    <Navbar/>
    <Banner/>
    <Description/>
    <Types/>
    <Footer/>
    <Instruction/>
     </>
  );
}

export default App;
