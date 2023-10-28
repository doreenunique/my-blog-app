BACKEND SERVER:
-npm init -y
-start nodemon server in package.json
-install express, mongoose, dotenv cors

<!-- server.js -->

-create server.js(https://expressjs.com/en/starter/hello-world.html)
-add middleware, app.use express
-app.use for the routers (https://expressjs.com/en/4x/api.html#router)

<!--  -->

-create folders for Routers, Controllers, Models.
-create files for connection, .env, .gitignore
in .env put mongodburi
in .gitignore put node_modules and .env

<!-- connection.js -->

-connection.js: (https://mongoosejs.com/docs/)//getting-started.js
require dotenv.config(), then const URI = process.env.mongodb_uri, replace inside async function.
-require connection in server.

<!-- models -->

-Models file: create schema, and compile it into a model
-we can add validation to the items
-the createdAt and updatedAt fields will be automatically assigned the current date and time as default values

<!-- routers -->

-helps to have routes in separate files and handling the routes
-require express, and use express.Router()
-router.post, create,update, delete, get blogs etc
-export the router
(https://expressjs.com/en/guide/routing.html)

<!-- controllers -->

-contains functions that interacts directly with Mongoose Model such as findOneAndUpdate().
-require mongoose and the respective routers.
-We call these controller methods within our route handlers
-post: both in front and backend, send data
-get: declare a var, to save what we find in the blog model that will be sent back to client side(array of objects)
CORS:To enable CORS we need to install cors package from npm

FRONTEND CLIENT:
install axios,

- create a blog form with fields like Title, Content etc...
- send the data using axios POST request
  -Backend Server will receive this request
- validate input values (title should be required)
- save blog into database
- generate unique id as \_id value of Blog document
- return response back
  Frontend can then display success message or error messages based on API responses

<!-- BlogForm.js -->

-import useState for changing and saving data
-create state for each variable we have, title, category, author, imageUrl
-to save any data in react we use State hook, here the initial value is empty ""
-for [title, setTitle] variable, the input value is the title.

<!-- <input type="text" placeholder={props.blog? props.blog.Title : "Enter title"} -->

-connect label with input field with htmlFor="title"
-I cannot type anything in the input field until we put onChange when we add state?
-on Change, the function with param event, will set title to event.target.value
-button to handle the submit of the form
-the form method onSubmit will call the function createBlog to create a blog when form is submitted
-event.prevent default in the function stops refresh of form when submitted
-in the function we create a var equal to the values, and in it create an object with the values we are adding in the input
-send request to server to save data, communicate with the route built in backend, using axios(not require)
-axios takes our server url and the data we are sending as parameters.
-axios is async so we can either use async/await or use .then as below:
function createBlog(event) {

<!-- // console.log("form submitted") -->

event.preventDefault();
let newBlog = {
title: title,
author: author,
content: content,
category: category,
image: image || "",
createdAt: Date(),
// updatedAt: null // don't need this field for now but can keep as a placeholder
};
axios.post("http://localhost:3636/blog/create", newBlog).then(res => {
console.log(res.data.newBlog);
})

<!-- // console.log(newBlog) -->

}

-create function to get all blogs from server
-set the blogs to response.data we get.(setBlogs=response.data)
-in blog list component we have a var for blogs, starts with empty array that will hold the objects received from the server
-in the div we map the blogs received, and render the data by creating the relevant tags for each blog object, img, p, etc
-each blog will have an img, title, p etc
-the src of image will be from blog.image, author from blog.author,
-we cn use conditional rendering
-we can create a button that on click renders the data to the page, but when page is refreshed, poof!
-to render from API when page loads we use instead useEffect hook. call get blogs function inside useEffect

- // eslint-disable-next-line react-hooks/exhaustive-deps, will safely disable the warning for this specific line
  -use react router dom to switch between pages
  -import react browser router to index.js and replace React.StrictMode (https://reactrouter.com/en/main/router-components/browser-router)
  -import route and routes from react-router-dom to app.js, then use routes > route with path and component to that path
  -import and use Link instead of <a></a> tags
