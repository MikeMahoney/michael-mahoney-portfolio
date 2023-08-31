import React, { Fragment } from 'react';
import { Blogs } from '../../helpers/blogHelper';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import { BlogItem, BlogItemContent, BlogItemDescription, BlogItemTitle, BlogItemYear } from './BlogStyles';

interface IBlog { }

const Blog: React.FC<IBlog> = () => {
  return (
    <Fragment>
      {Blogs.map((yearItem, index) => (
        <Fragment key={index}>
          <BlogItemYear>{yearItem.year}</BlogItemYear>
          {yearItem.blogs.map((blog, index) => (
            <BlogItem key={index}>
              <BlogItemTitle>{blog.title}</BlogItemTitle>
              {blog.description.map((item, index) => (
                <BlogItemDescription key={index}>
                  {item}
                </BlogItemDescription>
              ))}
              <BlogItemContent>
                {blog.images.map((image, index) => (
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