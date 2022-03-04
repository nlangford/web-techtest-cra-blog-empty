import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BlogListingPage, BlogEntryPage } from "./pages";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
        <main>
          <Routes>
                <Route path="/" element={<BlogListingPage />} />
                <Route path="/:slug" element={<BlogEntryPage />} />
          </Routes>
        </main>
    </BrowserRouter>
  );
};
