
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/Home';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import Info from './components/pages/AllUserInfo';
import Input from './components/pages/UserInput';
import NotFound from './components/pages/Notfound';
import EditUser from './components/pages/EditUser';
import User from './components/pages/User';

function App() {
  return (
  <Router>

    <div className="App">

          <Layout>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/info" element={<Info/>}/>
              <Route path="/user" element={<Input/>}/>
              <Route path="/user/:id" element={<User/>}/>
              <Route path="/user/edit/:id" element={<EditUser/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </Layout>

    </div>
  </Router>
  );
}

export default App;
