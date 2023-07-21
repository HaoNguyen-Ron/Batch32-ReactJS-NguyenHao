import React , { useState } from 'react';
import './App.css';
// import PlayList from './Components/PlayList';
import LikeButton from 'Components/Like button';

function App() { // = Home Page
const [classes,setclasses] = useState('bg-black')

const onclickToLike = () =>{
    setclasses('new-style')
}
  return (
    <LikeButton
    icon={<i class="fa-solid fa-heart fa-xl" />}
    name="Like"
    classes={classes}
    onclickToLike = {onclickToLike}
    />
      // <PlayList />
  );
}

export default App;