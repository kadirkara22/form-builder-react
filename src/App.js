import './App.css';
import Dropzone from './components/Dropzone';
import Toolbox from './components/Toolbox';

function App() {
  return (
    <div className="App">
      <div className="App-left"> <Dropzone /></div>
      <div className="App-right"><Toolbox /></div>
    </div>
  );
}

export default App;
