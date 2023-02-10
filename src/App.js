// import Home from './components/pages/home';
// import Greattings from './components/iu/greattings/Greattings';
import {Routes, Route} from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { Prueba } from './components/pages/Home/Prueba';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Services' element={<Prueba />}/>
      <Route path='/FAQ' element={<Prueba />}/>
      </Routes>
    </div>
  );
}

export default App;
