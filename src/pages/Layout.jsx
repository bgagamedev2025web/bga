import { Outlet } from 'react-router';
import Header from '../components/Header.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const Layout = ({ user, setUser }) => {
  return (
    //<div class="flex flex-col min-h-screen bg-[url('/background.jpg')] bg-cover bg-center bg-scroll overflow-y-scroll overscroll-auto ">
    <div className='h-screen'>
      <div className="absolute inset-0 bg-[url('./assets/background.jpg')] bg-fixed bg-cover opacity-75 overflow-y-scroll overscroll-auto ">
      </div>
      <div className='absolute h-screen w-screen flex flex-col min-h-screen'>
        <Header />
        <Navbar user={user} setUser={setUser} />
        <main className="flex-grow">
          <div className="">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>

  );
};

export default Layout;
