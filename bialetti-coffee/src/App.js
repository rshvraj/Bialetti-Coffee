import logo from './logo.svg';
import './App.css';
import { Product } from './Components/product_page/Product';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
      {/* <Product/> */}
      <AllRoutes/>
    </div>
  );
}

export default App;
