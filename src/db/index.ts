import { blogEntries } from "./entries";
import {BlogEntry} from "../models";

const db = {
  blogEntries: {
    getAll: (offset: number, take: number): BlogEntry[] => blogEntries.slice(offset, offset + take),
    getOneBySlug: (slug: string): BlogEntry => {
      const blogEntry = blogEntries.find(be => be.slug === slug);
      
      if (!blogEntry) {
        throw new Error("Not found");
      }
  
      return blogEntry;
    }
  },
};

export const useBlogEntries = () => db.blogEntries;
