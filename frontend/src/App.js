
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Container } from "react-bootstrap";

//components and screen
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (

    <Router>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen/>} exact />
          </Routes>
        </Container>
      </main>

    </Router>
  );
}

export default App;
