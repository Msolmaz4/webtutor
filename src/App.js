import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
    <div className="App">
    
    <Navbar/>
      <Routes>
        <Route>
          
        </Route>
      </Routes>

    </div>
    </Router>
  );
}

export default App;
