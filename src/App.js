import { Button } from '@mui/material';
import './App.css';
import { SendAndArchiveOutlined } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button color='inherit' variant="contained" startIcon={SendAndArchiveOutlined} >Click me</Button>
      </header>
    </div>
  );
}

export default App;
