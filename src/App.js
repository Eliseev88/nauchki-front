import { BrowserRouter } from 'react-router-dom';
import './assets/scss/App.scss';
import './assets/scss/helpers.scss';
import Header from './components/Header/Header';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Main />
    </BrowserRouter>
  );
}

export default App;
