import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Blogs } from '../../helpers/blogHelper';
import Thumbnail from './components/Thumbnail/Thumbnail';

const BlogItem = styled.div`
  background-color: ${props => props.theme.colors.primary};
  padding: 10px 20px;
  margin-bottom: 20px;
`;
const BlogItemYear = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: 32px;
  font-weight: 500;
  text-align: right;
  color: ${props => props.theme.colors.primary};
`;
const BlogItemTitle = styled.div`
  color: ${props => props.theme.colors.header};
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSizes.title};
  font-weight: 500;
`;
const BlogItemDescription = styled.div`
  margin-top: 10px;
`;
const BlogItemContent = styled.div`
  margin-top: 20px;
`;

function Blog () {
  return (
    <Fragment>
      {Blogs.map((yearItem, index)=>(
        <Fragment key={index}>
          <BlogItemYear>{yearItem.year}</BlogItemYear>
          {yearItem.blogs.map((blog, index)=>(
            <BlogItem key={index}>
              <BlogItemTitle>{blog.title}</BlogItemTitle>
              {blog.description.map((item, index)=>(
                <BlogItemDescription key={index}>
                  {item}
                </BlogItemDescription>
              ))}
              <BlogItemContent>
                {blog.images.map((image, index)=>(
                  <Thumbnail
                    image={image}
                    key={index}
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