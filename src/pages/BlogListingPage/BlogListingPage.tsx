import React from "react";
import { useBlogEntries } from "db";

export const BlogListingPage: React.FC = () => {
  const blogEntries = useBlogEntries();
  
  return null;
};
