// import Greattings from './components/iu/greattings/Greattings';
import {Routes, Route} from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { Couter } from './components/pages/Couter/Couter';
import { InputHello } from './components/pages/InputHello/InputHello';
import { HeaderHome } from './components/layouts/HeaderHome/HeaderHome'
import { ChangesColor } from './components/pages/ChangesColor/ChangesColor';

function App() {
  return (
    <div>
      <HeaderHome />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Couter' element={<Couter />}/>
      <Route path='/Hello' element={<InputHello />}/>
      <Route path='/ChangesColor' element={<ChangesColor />}/>
      </Routes>
    </div>
  );
}

export default App;
