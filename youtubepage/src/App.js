
import './App.css';
import Header from './components/Header/Header'
import Subheader from './components/Subheader/Subheader'
import Content from './components/Content/Content'
import Sidebar from './components/Sidebar/Sidebar'


function App() {
  return (
    <>
    <Header></Header>
    <div class="youtube-list-complete-container">
    <Sidebar></Sidebar>
    <div class ="Youtube-subheader-content-container">
    <Subheader></Subheader> 
     <Content></Content>
     {/* <Main></Main> */}
    </div>
    </div>

    {/* <Sidebar></Sidebar> */}
    {/* <Subheader></Subheader> */}
    {/* <Content></Content> */}
    </>
  );
}

export default App;
