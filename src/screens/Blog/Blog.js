import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Blogs } from '../../helpers/blogHelper';
import Thumbnail from './components/Thumbnail/Thumbnail';

const BlogItem = styled.div`
  background-color: white;
  padding-bottom: 30px;
  margin-bottom: 20px;
`;
const BlogItemYear = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 32px;
  font-weight: 500;
  text-align: right;
  margin-right: 30px;
  color: white;
`;
const BlogItemTitle = styled.div`
  color: #bf2222;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 48px;
  font-weight: 500;
  text-align: center;
`;
const BlogItemDescription = styled.div`
  margin-top: 10px;
  margin-left: 5px;
  text-align: center;
`;
const BlogItemContent = styled.div`
  margin-top: 20px;
`;

function Blog () {
  return (
    <Fragment>
      {Blogs.map((yearItem)=>(
        <Fragment>
          <BlogItemYear>{yearItem.year}</BlogItemYear>
          {yearItem.blogs.map((blog)=>(
            <BlogItem>
              <BlogItemTitle>{blog.title}</BlogItemTitle>
              <BlogItemDescription>{blog.description}</BlogItemDescription>
              <BlogItemContent>
                {blog.images.map((image)=>(
                  <Thumbnail
                    image={image}
                  />
                ))}
              </BlogItemContent>
            </BlogItem>
          ))}
        </Fragment>
      ))}
    </Fragment>
  );
}

export default Blog;