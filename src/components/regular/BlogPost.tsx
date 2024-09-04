import React from 'react';

interface BlogPostProps {
  content: string;
  shareLinks?: { platform: string; url: string; iconClass: string; class: string }[]; // Make shareLinks optional
}

const BlogPost: React.FC<BlogPostProps> = ({ content, shareLinks }) => {
  return (
    <section className="blog-section bg-grey padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 sm-padding">
            <div className="blog-items single-post row">
              <div dangerouslySetInnerHTML={{ __html: content }} />
              {shareLinks && shareLinks.length > 0 && ( // Conditionally render share section
                <div className="share-wrap">
                  <h4>Connect:</h4>
                  <ul className="share-icon">
                    {shareLinks.map((link, index) => (
                      <li key={index} className={link.class}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <i className={link.iconClass}></i> {link.platform}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
