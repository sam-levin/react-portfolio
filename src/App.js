import logo from './logo.svg';
import './App.css';
import Projects from './components/Projects'
import Footer from './components/Footer'
import Header from './components/Header'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
