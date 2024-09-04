import React from 'react';
import BlogPost from '@/components/regular/BlogPost';

import data from '@/data/blog-contents.json'
import Banner from '@/components/Banner';

const BlogPage: React.FC = () => {
  const title = "SSOH";
  const description = "Spokesman Sanctuary of Hope Church";
  const backgroundImage = "/img/ministries/ssoh-bg.jpg"
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "SSOH", link: "#" }
  ];
  const {ministryArm} = data

  return (
    <div>
        <Banner title={title} description={description} breadcrumbs={breadcrumbs} backgroundImage= {backgroundImage}/>
        <BlogPost content={ministryArm.ssoh.content} shareLinks={ministryArm.ssoh.shareLinks} />
    </div>
    
  );
};

export default BlogPage;
