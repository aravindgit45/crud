import logo from './logo.svg';
import './App.css';
import EmpListing from './EmpListing';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import EmpCreate from './EmpCreate';
import EmpEdit from './EmpEdit';
import EmpDetails from './EmpDetails';

function App() {
  return (
    <div className="App">
      <h1>React js crud operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element = {<EmpListing />}> </Route>
          <Route path ="/employee/create" element = {<EmpCreate />}></Route>
          <Route path ="/employee/Edit/:empid" element = {<EmpEdit />}></Route>
          <Route path ="/employee/Details/:empid" element = {<EmpDetails />} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// we need to install below commands

// 1.Create New App
//   npx create-react-app appname

// 2. Create Routing
//   npm install react-router-dom

// 3.install bootstrap
//   npm install bootstrap

// 4.install Json-Server
//   npm install -g json-Server

// 5.Api
//   json-server --watch db.json --port 8000