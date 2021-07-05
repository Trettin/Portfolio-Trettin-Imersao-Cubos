import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
