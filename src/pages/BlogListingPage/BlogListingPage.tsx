import React from "react";
import { useBlogEntries } from "db";

export const BlogListingPage: React.FC = () => {
  const blogEntries = useBlogEntries();
  const allBlogEntries = blogEntries.getAll(0, -1);
  return (
      <section>
        <h1>Technical Test Blog</h1>
        {
          allBlogEntries.map(blogListing => {
            return (
                <>
                  {
                    <section>
                      <a href={blogListing.slug}><h2>{blogListing.title}</h2></a>
                      <span className={"author"}>{blogListing.author}</span><span> views: {blogListing.readCount} Article Length: {blogListing.body.length}</span>
                    </section>
                  }
                </>
            )
          })
        }
      </section>
  );
};
