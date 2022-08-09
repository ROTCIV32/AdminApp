import "./App.css";
import Home from "./components/pages/home/Home";
import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <TopBar />
     <div class="container">
      <div className="side" >
        <SideBar />
      </div>
        <div className="main">
          <Home />
        </div>
     </div>
     
    </div>
  );


}

export default App;


