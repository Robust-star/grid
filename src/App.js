import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import Sidenav from './component/Sidenav'
import Body from './component/Body'
import Footer from './component/Footer'
function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <div style={{display:"flex"}}>
            <Sidenav/>
            <Body/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
