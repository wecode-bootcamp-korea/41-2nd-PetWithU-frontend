import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Community from './pages/Community/Community';
import Feed from './pages/Feed/Feed';
import TrailCourseList from './pages/TrailCourse/TrailCourseList';
import TrailCourseDetail from './pages/TrailCourseDetail/TrailCourseDetail';
import Store from './pages/Store/Store';
import CommonDetail from './pages/Detail/CommonDetail/CommonDetail';
import Cart from './pages/Cart/Cart';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/community" element={<Community />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/promenade" element={<TrailCourseList />} />
        <Route path="/promenade/detail/:id" element={<TrailCourseDetail />} />
        <Route path="/store" element={<Store />} />
        <Route path="/detail" element={<CommonDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
