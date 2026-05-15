import React,{useState} from 'react';
import BgVideo from './pages/home/video'; 
import Buttons from './pages/home/button';
import Text from './pages/home/text';
import Resume from './pages/resume/resume.jsx';
import Projects from './pages/projects/projects/projects';
import TransitionOverlay, { animateIn, animateOut } from './components/TransitionOverlay';
import { gsap } from 'gsap';
import './App.css';

function App() {
  const [route,setRoute]=useState('home');
  const navigateTo = async (newRoute) => {
    if (newRoute === route) return;
    await animateIn();
    setRoute(newRoute);
    requestAnimationFrame(() => {
      animateOut().then(() => {
        gsap.set('.block', { visibility: 'hidden' });
      });
    });
  };

  return (
    <div>
      <TransitionOverlay/>
      {route==='home'?(
        <div>
          <BgVideo/>
          <Text/>
          <Buttons setRoute={navigateTo}/>
        </div>
      ):route==='projects'
        ?(<Projects setRoute={navigateTo}/>)
        :(<Resume setRoute={navigateTo}/>)
    }</div>
  );
}

export default App;
  