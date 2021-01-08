import './reset.css';
import { Route } from "react-router-dom";
import Home from './pages/Home';
import Play from './pages/Play';
import Search from './pages/Search';
import { VideoProvider } from './VideoContext';

function App() {
  return (
    <VideoProvider>
      <Route path="/" component={Home} exact />
      <Route path="/search" component={Search} />
      <Route path="/play" component={Play} />
    </VideoProvider>
  );
}

export default App;
