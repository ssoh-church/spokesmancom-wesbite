import React from 'react';
import BlogPost from '@/components/regular/BlogPost';

import data from '@/data/blog-contents.json'
import Banner from '@/components/Banner';

const BlogPage: React.FC = () => {
  const title = "Medicare";
  const description = "";
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Medicare", link: "#" }
  ];
  const {ministryArm} = data

  return (
    <div>
        <Banner title={title} description={description} breadcrumbs={breadcrumbs} />
        <BlogPost content={ministryArm.medicare.content} />
    </div>
    
  );
};

export default BlogPage;
