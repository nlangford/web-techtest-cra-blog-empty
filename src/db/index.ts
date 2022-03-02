import { blogEntries } from "./entries";

const db = {
  blogEntries: {
    getAll: (offset: number, take: number) => blogEntries.slice(offset, offset + take),
    getOneBySlug: (slug: string) => {
      const blogEntry = blogEntries.find(be => be.slug === slug);
      
      if (!blogEntry) {
        throw new Error("Not found");
      }
  
      return blogEntry;
    }
  },
}

export const useBlogEntries = () => db.blogEntries;
