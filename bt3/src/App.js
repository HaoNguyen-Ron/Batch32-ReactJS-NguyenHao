// import React, { useEffect } from 'react';
// import { Route, Routes, useNavigate } from 'react-router';
// import { DEFAULT, LOCATION } from 'constants/index';
// import { axiosClient } from 'helper/axiosClient';
// // import LoginForm from 'Components/Form-Exercise/loginForm';
// // import CardList from 'Components/cardList';
// // import PlayList from './Components/PlayList';
// // import LikeButton from 'Components/Like button';
// // import Carousel from 'Components/Carousel';
// // import Form from 'Components/Form';
// // import Form2 from 'Components/Form-Exercise';
// // import Accordions from 'Components/Accordion';

// import Accordions from 'Components/Accordion';
// import AuthLayout from 'Components/layer/auth';
// import Form from 'Components/Form-Class';
// import NonAuthLayout from 'Components/layer/nonAuth';

// import CarouselPage from 'pages/carousel';
// import CartEmployeePage from 'pages/cardEmployee';
// import CartManagerPage from 'pages/cardManager';
// import HomePage from 'pages/home';
// import LoginPage from 'pages/login';
// import NotFoundPage from 'pages/404';
// import RegisterPage from 'pages/register';
// import PlayListPage from 'pages/musicPlayer';
// import ProductListPage from 'pages/product';
import TodoPage from 'pages/todo';

import './App.css';

function App() { // = Home Page
  // const navigate = useNavigate();

  // const token = window.localStorage.getItem(DEFAULT.TOKEN);

  // useEffect(() => {
  //   if (token) {
  //     axiosClient.defaults.headers.Authorization = `Bearer ${token}`;
  //   } else {
  //     navigate(LOCATION.LOGIN);
  //   }
  // }, [navigate, token]);
  return (
    <>

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
      {/* <LoginForm /> */}
      {/* <CardList /> */}
      {/* <PlayList /> */}

      {/* <Routes>
        <Route path={LOCATION.HOME} element={<NonAuthLayout />} >
          <Route index path={LOCATION.LOGIN} element={<LoginPage />} />
          <Route path={LOCATION.REGISTER} element={<RegisterPage />} />
        </Route>
      </Routes>
      <Routes>
        <Route path={LOCATION.HOME} element={<AuthLayout />} >
          <Route index element={<HomePage />} />
          <Route path={LOCATION.IMAGE} element={<CarouselPage />} />
          <Route path={LOCATION.PRODUCT} element={<ProductListPage />} />
          <Route path={LOCATION.PLAY_LIST} element={<PlayListPage />} />
          <Route path={LOCATION.CART_EMPLOYEE} element={<CartEmployeePage />} />
          <Route path={LOCATION.CART_MANAGER} element={<CartManagerPage />} />
          <Route path={LOCATION.BUTTON_ACCORDION} element={<Accordions />} />
          <Route path={LOCATION.FORM} element={<Form />} />
          <Route path={LOCATION.REGISTER} element={<RegisterPage />} />
          <Route path={LOCATION.TODO} element={<TodoPage />} />
        </Route>
        <Route index path={LOCATION.LOGIN} element={<LoginPage />} />

        <Route path={LOCATION.REGISTER} element={<RegisterPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}

      <div className='container my-5'>
        <TodoPage />

      </div>

      
      

    </>

  );
}

export default App;