import './reset.css';
import { Route } from "react-router-dom";
import Home from './pages/Home';
import Play from './pages/Play';
import Search from './pages/Search';

function App() {
  return (
    <>
      <Route path="/" component={Home} exact />
      <Route path="/search" component={Search} />
      <Route path="/play/:id" component={Play} />
    </>
  );
}

export default App;
