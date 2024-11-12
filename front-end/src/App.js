import logo from './logo.svg';
import './App.css';
import Loggin from './Components/auth/Loggin';
import Header from './Components/auth/Header';
import Footer from './Components/auth/Footer';

function App() {
  return (
    <div className="login">
      <Header></Header>
      <Loggin></Loggin>
      <Footer></Footer>
    </div>
  );
}

export default App;
