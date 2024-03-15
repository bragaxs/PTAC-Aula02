import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./global.css";
export default function App() {


  return(
    <div>
      <Header/>
      <Main/>
        <main>
          <h1 className="color-text"></h1>
        </main>
        <Footer/>
    </div>  
  );


}