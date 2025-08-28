import { Outlet } from 'react-router';
//import Header from '../components/Header.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const Layout = ({ user, setUser }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
     
      <div className="absolute inset-0 bg-[url('./assets/bck2.png')] bg-fixed bg-cover opacity-90"></div>

     
      <div className="relative flex flex-col min-h-screen">
        {/*<Header />*/}
        <Navbar user={user} setUser={setUser} />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
