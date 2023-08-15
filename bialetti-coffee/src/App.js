import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import  Product  from './Components/product_page/Product';
import Navbar from './Home/Navbar';




function App() {
  return (
    <div className="App">

      <Navbar />
      {/* <AllRoutes/> */}

      <Product/>
    </div>
  );
}

export default App;
