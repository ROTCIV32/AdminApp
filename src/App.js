import "./App.css";
// import HomeComp from "./components/pages/home/HomeComp";
import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import UserList from "./components/pages/home/userList/UserList";
import Home from "./components/pages/home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Analytics from "./components/pages/analytics/Analytics";
import Sales from "./components/pages/sales/Sales";
import Product from "./components/pages/product/Product";
import Translation from "./components/pages/translation/Translation";
import Reports from "./components/pages/reports/Reports";
import Message from "./components/pages/message/Message";
import Mail from "./components/pages/mail/Mail";
import Feedback from "./components/pages/feed/Feedback";

function App() {
  return (
      <BrowserRouter>
    <div className="App">
          <TopBar />
        <div className="container">
          <div className="side" >
            <SideBar />
          </div>

          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/userlist" element={<UserList />} />
              <Route path="/userlist" element={<UserList />} />
              <Route path="/product" element={<Product />} />
              <Route path="/translation" element={<Translation />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/message" element={<Message />} />
              <Route path="/mail" element={<Mail />} />
              <Route path="/feedback" element={<Feedback />} />
            </Routes>
          </div>
          </div>
    </div>
      </BrowserRouter>
  );
}

export default App;


