import Header from "./components/Header";
import Footer from "./components/Footer";
import "./global.css";
export default function App() {


  return(
    <div>
        <Header/>
        <main>
          <h1 className="color-text">Desenvolvido por Vitório Braga</h1>
        </main>
        <Footer/>
    </div>  
  );


}