import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/Context";
import Loading from "../components/Loading";
import { useState } from "react";

const BlogsPage = () => {
  const { IsLoading, pageData } = useGlobalContext();
  const [page, setPage] = useState(0);
  const handlePage = (index) => {
    setPage(index);
  };
  const NextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > pageData.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const PrevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = 0;
      }
      return prevPage;
    });
  };
  if (IsLoading) {
    return <Loading />;
  }

  return (
    <Wrapper className='blog-section'>
      <h2 className='title'>LATEST BLOG POSTS</h2>
      <div className='blog-container'>
        {pageData[page].map((blog) => {
          return (
            <div key={blog.id} className='blog'>
              <div className='img'>
                <img src={blog.image} alt='' />
              </div>
              <div className='blog-title'>
                <Link to={`./${blog.id}`}>{blog.titleOfBlog}</Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Button */}
      {!IsLoading && (
        <div className='btn-container'>
          <button className='pagination-btns' onClick={PrevPage}>
            Prev
          </button>
          {pageData.map((btn, index) => {
            return (
              <button
                className={
                  index == page
                    ? "pagination-btns active-btn"
                    : "pagination-btns"
                }
                onClick={() => [handlePage(index)]}
                key={index}
              >
                {index + 1}
              </button>
            );
          })}
          <button className='pagination-btns' onClick={NextPage}>
            Next
          </button>
        </div>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: var(--white);
  padding: 100px;
  padding-bottom: 40px;
  padding-top: 50px;
  text-align: center;
  display: grid;
  place-content: center;
  .title {
    margin: 0;
  }
  .blog-container {
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 80vw;
  }
  .single-blog {
    padding-top: 100px;
    padding-left: 100px;
    padding-right: 100px;
  }
  .blog {
    margin-bottom: 20px;
    box-shadow: 0px 10px 44px -7px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 5px;
    max-height: 400px;
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
  .pagination-btns {
    margin-right: 15px;
    padding: 15px 25px;
    border: 1px solid transparent;
    border-radius: 5px;
  }
  .pagination-btns:hover {
    background-color: #fff;
    border-color: var(--btn-bg-color-primary);
    color: var(--primary-400);
  }
  .active-btn {
    background-color: #fff;
    border-color: var(--btn-bg-color-primary);
    color: var(--primary-400);
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

export default BlogsPage;
