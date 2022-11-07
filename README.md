This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## Interesting facts

### Client Side Navigation

The way that link tags work in next JS is way different from how it hworks with other frameworks like Angular React or pure HTML.

When users navigate to other pages, the browser reloads the page and places the component on the DOM, but here, switching pages is handled by the JS thread, thereby there is no browser fetching business and everything is handled by the client side code. 

Page switching is instant irrespective of the number of pages. 

### File conventions

![Reserved components](https://beta.nextjs.org/docs/api-reference/file-conventions/layout)


### Assets Metadata and CSS

#### Images

- Assets inside the public directory can be referenced from the root of the application 
- NejtJS provides an optmized image component out of the box
- Images are lazy loaded by default, Images load as they are scrolled into view port

#### Page Metadata

- ```Head``` component, a built in React component is used for this purpose, 

#### Scripts

- Using the ```Script``` component, we can lazy load scripts to the component page within the Head Tag.

#### CSS

- CSS modules allow you to locally scope CSS at the component-level by automatically creating unique class names. 
- This allows you to use the same CSS class name in different files without worrying about class name collisions.
- Important: To use CSS Modules, the CSS file name must end with .module.css.
- To load global css files, we create a global app level component that will act as a container component that access the css styles
- In Next.js, you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.
- The container component can be used to import all the global styles like the util styles so on so forth

### Static build time rendering vs server side rendering

#### ![How static rendering works](https://nextjs.org/docs/basic-features/pages#pre-rendering)

- The HTML pages are generated at build time, when we run the ```next build``` method rather than when having to be generated when required. This HTML file can be re used on each request and this can also be cached by a CDN, threby faster rendering on a global level

##### Static generation with fetching external data

- To fetch this data on pre-render, Next.js allows you to export an async function called getStaticProps from the same file. This function gets called at build time and lets you pass fetched data to the page's props on pre-render.
- By returning { props: { posts } } in the async getStaticProps function, the Blog component will receive `posts` as a prop at build time

### Server Side Rendering

- page HTML is generated on each request
