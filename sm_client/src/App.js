import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter} from "react-router-dom";
import AppRouter from './components/appRouter';
function App() {

  return (
    <BrowserRouter basename="/">
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
      
  );
}

export default App;
