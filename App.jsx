import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './app.scss';

export default function App() {
  return (
    <div className='container'>
        <Header />
        <Banner />
        <Footer />
    </div>
  )
}
