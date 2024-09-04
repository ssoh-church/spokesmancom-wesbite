import React from 'react';
import BlogPost from '@/components/regular/BlogPost';

import data from '@/data/blog-contents.json'
import Banner from '@/components/Banner';

const BlogPage: React.FC = () => {
  const title = "ACCF";
  const description = "Asthma and CHest Care Foundation";
  const backgroundImage = "/img/ministries/accf-bg.jpg"
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "ACCF", link: "#" }
  ];
  const {ministryArm} = data

  return (
    <div>
        <Banner title={title} description={description} breadcrumbs={breadcrumbs} backgroundImage={backgroundImage}/>
        <BlogPost content={ministryArm.accf.content} shareLinks={ministryArm.accf.shareLinks} />
    </div>
    
  );
};

export default BlogPage;
