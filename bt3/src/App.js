import React , { useState } from 'react';
import './App.css';
// import PlayList from './Components/PlayList';
// import LikeButton from 'Components/Like button';
import Accordion from 'Components/Accordion';
// import Form from 'Components/Form';

function App() { // = Home Page
// const [classes,setclasses] = useState('bg-black')

// const onclickToLike = () =>{
//     setclasses('new-style')
// }
  return (
    <div className="container">

      {/* <LikeButton
      icon={<i class="fa-solid fa-heart fa-xl" />}
      name="Like"
      classes={classes}
      onclickToLike = {onclickToLike}
      />
      <br /> */}
      <Accordion />
      {/* <Form /> */}
    </div>

      // <PlayList />
  );
}

export default App;