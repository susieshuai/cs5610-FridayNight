
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

//components and screen
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from './screens/SearchSreen'
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import DetailScreen from "./screens/DetailScreen";
import CartScreen from "./screens/CartScreen";
import CheckoutScreen from './screens/CheckoutScreen'

function App() {
  return (

    <Router>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />

            <Route path='/search' element={<SearchScreen />} exact />
            <Route path='/search/:searchCriteria' element={<SearchScreen />} exact />

            <Route path='/details/:id' element={<DetailScreen />} exact />

            <Route path='/cart/' element={<CartScreen />} exact />
            <Route path='/cart/:id' element={<CartScreen />} exact />

            <Route path='/checkout' element={<CheckoutScreen />} exact />

            <Route path='/login' element={<LoginScreen />} exact />
            <Route path='/register' element={<RegisterScreen />} exact />
          </Routes>
        </Container>
      </main>

    </Router>
  );
}

export default App;
