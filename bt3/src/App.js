import React from 'react';
import './App.css';
// import PlayList from './Components/PlayList';
// import LikeButton from 'Components/Like button';
// import Carousel from 'Components/Carousel';
// import Form from 'Components/Form';
import Form2 from 'Components/Form-Ex';

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
      {/* <Carousel /> */}
      {/* <Form /> */}
      <Form2 />
    </div>

      // <PlayList />
  );
}

export default App;