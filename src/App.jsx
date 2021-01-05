import './reset.css';
import { Route } from "react-router-dom";
import Home from './pages/Home';
import Play from './pages/Play';
import Search from './pages/Search';
import { useState } from 'react';

function App() {
  let [videoList, setVideoList] = useState([]);
  const getVideoList = (data) => {
    setVideoList(data);
  }
  return (
    <>
      <Route path="/" component={Home} exact>
        <Home videoList={videoList} getVideoList={getVideoList} />
      </Route>
      <Route path="/search" component={Search} />
      <Route path="/play" component={Play} />
    </>
  );
}

export default App;
