// import Home from './components/pages/home';
// import Greattings from './components/iu/greattings/Greattings';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './components/pages/Home/Home';

function App() {
  return (
    <div>
    <Router>
      <Routes>
      <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
