import Home from './pages'
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';
import Categories from './pages/Categories';
   AOS.init();
const App = () => {
  return (
    <div>
      <Home></Home>
    </div>
  )
}

export default App