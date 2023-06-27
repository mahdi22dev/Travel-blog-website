import React from "react";
import { useGlobalContext } from "../context/Context";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LatestBlogs = () => {
  const { SortData } = useGlobalContext();

  return (
    <>
      {SortData().map((blog) => {
        const { image, titleOfBlog, id } = blog;
        return (
          <LatestContainer key={id} className='flex'>
            <div className='latest-img img'>
              <img src={image} alt='' />
            </div>
            <div className='latest-title'></div>
            <div className='latest-link flex-center'>
              <Link to={`/blog/${id}`} className='flex-center'>
                {titleOfBlog}
              </Link>
            </div>
          </LatestContainer>
        );
      })}
    </>
  );
};

const LatestContainer = styled.aside`
  margin-bottom: 20px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  a {
    margin-left: 10px;
  }
`;
export default LatestBlogs;
