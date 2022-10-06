import { BrowserRouter } from 'react-router-dom';
import './assets/scss/App.scss';
import './assets/scss/helpers.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
