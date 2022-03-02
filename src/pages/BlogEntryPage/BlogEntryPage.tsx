import React from "react";
import { useParams } from "react-router";
import { useBlogEntries } from "db";

export const BlogEntryPage: React.FC = () => {
  const blogEntries = useBlogEntries();
  const { slug } = useParams<{ slug: string }>();

  return null;
};
