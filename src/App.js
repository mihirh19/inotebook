// import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import { Route, Switch } from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
function App() {
  return (
    <>
    <NoteState>
    <Navbar/>
    <Alert message="ausome"/>
    <div className='container'>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        
        <Route exact path='/about'>
          <About/>
        </Route>
      </Switch>
      </div>
      </NoteState>
    </>
  );
}

export default App;
