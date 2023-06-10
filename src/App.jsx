import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
