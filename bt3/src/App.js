import React from 'react';
import './App.css';
import LoginForm from 'Components/Form-Exercise/loginForm';
// import PlayList from './Components/PlayList';
// import LikeButton from 'Components/Like button';
// import Carousel from 'Components/Carousel';
// import Form from 'Components/Form';
// import Form2 from 'Components/Form-Exercise';
// import Accordions from 'Components/Accordion';

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
      {/* <Accordions /> */}
      {/* <RegisterForm /> */}
      <LoginForm />
    </div>

      // <PlayList />
  );
}

export default App;