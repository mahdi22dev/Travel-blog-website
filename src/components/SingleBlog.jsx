import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context/Context";
import Loading from "./Loading";
import ReactMarkdown from "react-markdown";
import LatestBlogs from "./LatestBlogs";
const SingleBlog = () => {
  const { blogId } = useParams();
  const { Data, IsLoading } = useGlobalContext();
  // fetch();

  if (IsLoading) {
    return <Loading />;
  }
  const blog = Data.find((blog) => blog.id === blogId);
  const { id, text } = blog;
  return (
    <Single_Blog className='blog-container single-blog'>
      <div key={id} className='blog'>
        <div className='blog-content'>
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
        <div className='latest-blogs'>
          <div className='latest-content'>
            <LatestBlogs key={id} />
          </div>
        </div>
      </div>
    </Single_Blog>
  );
};
const Single_Blog = styled.main`
  padding: 20px;
  padding-top: 50px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    max-width: 1200px;
  }
  .blog {
    display: flex;
    .blog-content {
      width: 100%;
      padding: 20px;
      h1 {
        margin-bottom: 50px;
        margin-top: 0px;
      }
    }
    .latest-blogs {
      width: 30%;
      display: none;
      padding: 20px;
      .latest-content {
        padding: 20px;
        position: sticky;
        top: 10%;
        background-color: var(--primary-200);
      }
    }
  }
  @media (min-width: 1200px) {
    padding: 100px;
    flex-direction: row;

    .blog {
      display: flex;
      .blog-content {
        width: 70%;
      }
      .latest-blogs {
        display: block;
      }
    }
  }
`;

export default SingleBlog;
