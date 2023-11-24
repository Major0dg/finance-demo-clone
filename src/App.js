import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./containers/Hero/HeroSection";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
