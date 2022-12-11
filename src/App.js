import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  About,
  Blog,
  CareerRoles,
  Careers,
  ChangePassword,
  Contact,
  Product,
  ProductDetails,
  CreateProduct,
  Faq,
  ForgotPassword,
  HelpCenter,
  Home,
  Login,
  NotFound,
  Privacy,
  Register,
  Shop,
  Terms,
  VendorsPage,
  VendorsRegisterPage,
  WelcomePage
} from './pages';
import Navbar from './components/organisms/Navbar';
import ScrollToTop from './hooks/scrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/welcome' element={<WelcomePage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/change-password' element={<ChangePassword />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/create-product' element={<CreateProduct />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/help-center' element={<HelpCenter />} />
          <Route path='/vendors-page' element={<VendorsPage />} />
          <Route path='/vendor-register' element={<VendorsRegisterPage />} />
          <Route path='/not-found' element={<NotFound />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/career-roles' element={<CareerRoles />} />
          <Route path='*' element={<Navigate replace to='/not-found' />} />
        </Routes>
        {/* <MobileNavbar /> */}
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
