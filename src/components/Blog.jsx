import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/Context";
import Loading from "./Loading";
const Blog = () => {
  const { Data, IsLoading, SortData } = useGlobalContext();
  // function getRandomNumber(min, max) {
  //   return Math.floor(Math.random() * (max - min) + min);
  // }

  // function shuffleArray(array) {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = getRandomNumber(0, i + 1);
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   return array;
  // }
  // const shuffledData = shuffleArray(Data);
  // const randomItems = shuffledData.slice(0, 6);
  if (IsLoading) {
    return <Loading />;
  }

  return (
    <Wrapper className='blog-section'>
      <h2 className='title'>LATEST BLOG POSTS</h2>
      <div className='blog-container'>
        {SortData().map((blog) => {
          // console.log(moment(blog.createdAt).format("MMM DO YYY, h:mm:ss a"));
          return (
            <div key={blog.titleOfBlog} className='blog'>
              <div className='img'>
                <img src={blog.image} alt='' />
              </div>
              <div className='blog-title'>
                <Link to={`./blog/${blog.id}`}>{blog.titleOfBlog}</Link>
              </div>
            </div>
          );
        })}
      </div>

      <Link to={"./blog"} className='more-link flex-center'>
        Read More
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: var(--BackGroundColor);
  padding: 100px;
  padding-bottom: 40px;
  text-align: center;
  display: grid;
  place-content: center;
  width: 100%;
  .title {
    margin: 0;
  }
  .blog-container {
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 80vw;
    gap: 20px;
  }
  .blog {
    box-shadow: 0px 10px 44px -7px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 20px;
  }
  .blog:hover {
    box-shadow: 0px 4px 35px -9px #25807d;
  }
  .img img {
    -webkit-border-top-left-radius: 5px;
    -webkit-border-top-right-radius: 5px;
    -moz-border-radius-topleft: 5px;
    -moz-border-radius-topright: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    transition: transform 0.5s ease;
    height: 300px;
    max-height: 350px;
  }
  .img {
    overflow: hidden;
  }
  .blog:hover img {
    transform: scale(1.25);
  }

  .blog-title {
    margin: 15px auto;
    max-width: 350px;
    text-align: center;
    font-size: clamp(9px, 1.3vw, 17px);
  }
  .more-link {
    margin: 0 auto;
    width: 150px;
    height: 50px;
    border: 3px solid transparent;
    background-color: var(--btn-bg-color-primary);
    transition-property: background color;
    transition: 0.4s;
    font-weight: 600;
  }
  .more-link:hover {
    background-color: transparent;
    border-color: var(--btn-bg-color-primary);
    color: var(--btn-bg-color-primary);
  }

  @media (min-width: 800px) {
    .blog-container {
      grid-template-columns: repeat(2, 1fr);
    }
    .card {
      width: 400px;
    }
    .blog {
      margin: 15px 15px;
    }
  }
  @media (min-width: 1300px) {
    .blog-container {
      grid-template-columns: repeat(3, 1fr);
    }
    .card {
      width: 350px;
    }
  }
`;
export default Blog;
