import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home, Content, Roadmap } from './pages';

const purpose = {
  "title" : "Purpose",
  "subtitle" : "We want to make the difference, we want to save lives and our target is to donate an initial amount of 1 dollar per sold Panda(It can go up to 1.5 or even 2 dollars, check the roadmap). The money will be donated to 2 animal charity institutions based in Portugal, https://chaodosbichos.org/ and https://www.ocantinhodamilu.com/ , we will post pictures of the transactions every week as proof that the money is really being donated to the right cause.",
  "image" : "purpose.png"
}

const ourstory = {
  "title" : "Our Story",
  "subtitle" : "So back in 2015 it appeared on the news that an animal shelter was on fire and that they had no money to find a new place for the 500+ animals (dogs and cats) they took care of. Since we were not old enough we could not be volunteers in order to help so we tried to help in our own way by seeling cakes and biscuits from door to door. We never made that much money but we still did the best we could. Many years later we discovered this NFTs world and we thought the concept was brilliant and a few time ago we thought that perhaps we could do something that could please the collectors but could also help these animal shelters. After all, why the Panda as the art theme? No real reason, we just think they are cute.",
  "image" : "story.png"
}

const ourteam = {
  "title" : "Our Team",
  "subtitle" : "Our team is composed by four members, all friends since elementary school and now we are currently attending University. We all share the same passion for Crypto, NFTs, Metaverse and of course, saving animal lives. ",
  "image" : "team.png"
}

function App() {
  return (
    <Router>
      <div className='app__container'>
        <div className='app__box'>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/purpose" exact element={<Content title={purpose.title} subtitle={purpose.subtitle} image={purpose.image}/>}/>
            <Route path="/ourstory" exact element={<Content title={ourstory.title} subtitle={ourstory.subtitle} image={ourstory.image}/>}/>
            <Route path="/ourteam" exact element={<Content title={ourteam.title} subtitle={ourteam.subtitle} image={ourteam.image}/>}/>
            <Route path="/roadmap" exact element={<Roadmap/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
