import logo from './logo.svg';
import './App.css';
import Mvheader from './components/Mvheader';
import MvPreview from './components/Mvpreview';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>hello</p>
//       </header>
//     </div>
//   );
// }

function App() {
  const comedyFilms= [
    {
      title:"Golmaal 2",
      type:"Comedy",
      thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuTGQuFWaOfnhxFndOyn3gJuz8VzA683rAW5zskHrr&s",
      rating:"5*"
    },
    {
      title:"Hangama",
      type:"Comedy",
      thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfl2-tDcZIAPQ3X8-vKQbvf0GHH9mVkM4voaDMZYio&s",
      rating:"4*"
    },
    {
      title:"No entry1",
      type:"Comedy",
      thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIwrXMKfQ3bhCb6jjEpkEV_yKKvFmIj_iHCOIya4do&s",
      rating:"3*"
    },
    {
      title:"Golmaal",
      type:"Comedy",
      thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuTGQuFWaOfnhxFndOyn3gJuz8VzA683rAW5zskHrr&s",
      rating:"5*"
    },
    {
      title:"Halchal",
      type:"Comedy",
      thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfzUHhgjlva0ppq8rTCDi0pAWiqmgXRMhdSpz6Slj&s",
      rating:"3*"
    },
    {
      title:"Dhamal",
      type:"Comedy",
      thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQnHPmEum4aNw3TNuiDHafanS-U2FxTinuBigHpGmj&s",
      rating:"2*"
    }

  ]
  const actionFilms= [
    {
      title:"Sholay",
      type:"action",
      thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe3qHYqzsHnkIO-wpUa4GOmEmcxMtPAsNiQUxesje6&s",
      rating:"5*"
    },
    {
      title:"LOC",
      type:"action",
      thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvX6mgXNSYJo0mE8NqH6aWaC2bmYTwHSvNEseU-I6-&s",
      rating:"4*"
    },
    {
      title:"KGF",
      type:"action",
      thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI7fFOybRoLRdiVpDYlX2cW9dcUpR3yw5lpyZprGNQ&s",
      rating:"3*"
    }
  ]
  
  return(
      <div class="App">
      <h1>Movie preview page </h1>
      <Mvheader heading="All time Comedy Movies"></Mvheader>
      <div class="Previewcontainer">  
      {comedyFilms.map(i => <MvPreview title = {i.title} rating = {i.rating} thumbnail = {i.thumbnail}></MvPreview>)} 
      </div>
      <Mvheader heading="Action movies"></Mvheader>
      <div class="Previewcontainer">  
      {actionFilms.map(i => <MvPreview title = {i.title} rating = {i.rating} thumbnail = {i.thumbnail}></MvPreview>)} 
      </div>
      </div>
  );
}


export default App;
