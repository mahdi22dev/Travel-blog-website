import { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import BlogsPage from "./pages/BlogsPage";
import Home from "./pages/Home";
import SharedLayout from "./pages/SharedLayout";
import Destinations from "./pages/Destinations";
import SingleBlog from "./components/SingleBlog";

import { AppProvider } from "./context/Context";
import ScrollToTop from "./components/ScroolToTop";
import Error from "./pages/Error";
import NewsletterPage from "./pages/NewsletterPage";

function App() {
  return (
    <AppProvider>
      <Wrapper className='container'>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path='destinations' element={<Destinations />} />
              <Route path='blog' element={<BlogsPage />} />
              <Route path='blog/:blogId' element={<SingleBlog />} />
              <Route path='blog/:blogId/blog/blogId' element={<SingleBlog />} />
              <Route path='newsletter' element={<NewsletterPage />} />
              <Route path='*' element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </AppProvider>
  );
}

const Wrapper = styled.main`
  overflow: visible;
  max-width: 100vw;
`;
export default App;
