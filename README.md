# Empty CRA Blog

This is an extremely oversimplified blog built using Typescript and bootstrapped using `create-react-app`. Well, calling
it a blog is pushing it a bit as it's missing the content from the pages!

Wee note on the TypeScript aspect: `strict` mode is turned off so at any point you wish, feel free to fall back to using
JavaScript.

## Tasks

There are two pages that need worked on:

* `./src/pages/BlogListingPage/BlogListingPage.tsx`
* `./src/pages/BlogEntryPage/BlogEntryPage.tsx`

The overall task is to provide the content for these pages using the data from the database found `./db/index.ts`. Yes,
calling it a database is also pushing it - but it does the job for these tasks.

We have no particular styling requirements and you'll find some default styles that may help you in
`./src/styles/index.css`. Feel free to not use them - you can add to them, remove them or change them in any way you
wish.

### Task 1 - Blog Listing Page - `/src/pages/BlogListingPage/BlogListingPage.tsx`

This page should behave as a listing page for the blog entries that are found in the database. The requirements for this
page are as follows:

* for each blog entry in the database, show:
  * its title - which should be a link to the BlogEntryPage for this entry
  * its author
  * its read count
  * the length of its body

### Task 2 - Blog Entry Page - `/src/pages/BlogEntryPage/BlogEntryPage.tsx`

This page should behave as a viewing page for the blog entry that's identified by the `slug` URL parameter. The
requirements for this page are as follows:

* show the title
* show the author
* show the read count
* show the body of the blog entry

## Development and Running

Standard `create-react-app` commands apply:

```sh
# run in dev (watch) mode
npm start
```
