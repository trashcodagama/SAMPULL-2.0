import Button from '@mui/material/Button';
import ResponsiveAppBar from './components/Header.jsx'
import Home from './pages/home.jsx'
function App() {

  return (
      <div className="App">
        <ResponsiveAppBar />
        <Home/>
      </div>
  );
}

export default App;
