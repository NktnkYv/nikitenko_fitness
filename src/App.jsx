
import './App.scss'
import Header from './components/Header/Header.jsx'
import Content from './components/Content/Content.jsx'
import Footer from './components/Footer/Footer.jsx'
import {useEffect} from "react"; // Обязательно подключаем стили
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });
    }, []);

  return (
      <div className="app">
        <Header/>
        <Content/>
        <Footer/>
      </div>
  )
}

export default App
