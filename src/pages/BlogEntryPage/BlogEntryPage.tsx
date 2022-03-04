import React from "react";
import { useParams } from "react-router";
import { useBlogEntries } from "db";
import {BlogEntry} from "../../models";

export const BlogEntryPage: React.FC = () => {
  const blogEntries = useBlogEntries();
  const { slug } = useParams<{ slug: string }>();
  let blogEntry: BlogEntry;
  if(slug) {
    blogEntry = blogEntries.getOneBySlug(slug);
    return (
        <article>
          <a className={"button"} href={"/"}>Back</a>
          <h1>{blogEntry.title}</h1>
          <p dangerouslySetInnerHTML={{__html: blogEntry.body}} />
          <span className={"author"}>{blogEntry.author}</span><span className={"views"}> views: {blogEntry.readCount}</span>
        </article>
    )
  }

  return null;

};
