import './App.css';
import Framelist from './components/Framelist';
import Profileimage from './components/Profileimage';
import Title from './components/Title';
import ProfileImage from './assets/profile/profile-image.jpg'
import Frame1 from './assets/frames/Cute+bear.png'
import Frame2 from './assets/frames/Gold+Brush.png'
import Frame3 from './assets/frames/Magical.png'
import Frame4 from './assets/frames/Olive+Branch.png'
import Frame5 from './assets/frames/Ring+of+Fire.png'
import Frame6 from './assets/frames/The+Movies.png'
import { useState } from 'react';

function App() {
  //set hook as a flag for frames list, shows/hides frames list if button clicked
  const[frameListFlag,setFrameListFlag] = useState(false)
  //hook for selected frame
  const[selectedFrame,setSelectedFrame] = useState()

  //set variables to send frames and profile pic to components
  const profileImage = ProfileImage;
  const framesList = [Frame1,Frame2,Frame3,Frame4,Frame5,Frame6]
  
  //function to show frame list
  const showList = ()=>{
    if(frameListFlag){
      return <Framelist framesList={framesList} setSelectedFrame={setSelectedFrame}/>
    }
    else return null
  }


  return (
    <div className="App">
      <Title/>
      {/* <Profileframe selectedFrame={selectedFrame}/> */}
      <Profileimage profileImage={profileImage} setFrameListFlag={setFrameListFlag} frameListFlag={frameListFlag} selectedFrame={selectedFrame}/>
      {showList()}
    </div>
  );
}

export default App;