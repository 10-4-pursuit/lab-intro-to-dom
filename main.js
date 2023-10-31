// Add a class of "featured" to the first section element on the page.
const featured = document.querySelector("section");
featured.classList.add("featured");

//Create the following article element with JavaScript and add at the end of the section.posts element.
const newArticleElement = document.createElement("article");
const newTitleElement = document.createElement('h3');
newTitleElement.textContent = "Stop Planning"
const newContentElement = document.createElement('p');
newContentElement.textContent = "You -- yes you! You're an over-planner";
newArticleElement.appendChild(newTitleElement);
newArticleElement.appendChild(newContentElement);

const sectionPostsElement = document.querySelector('section.posts');
sectionPostsElement.appendChild(newArticleElement);

// document.querySelector("section.posts").appendChild(newArticleElement);
// newArticleElement.setAttribute (
//     "img", 
//     "src",
//     "/images/paul-gilmore-unsplash.jpg",
//     "alt",
//     "Image of a mountain in front of a lake.",
//     "h3",
//     "Stop Planning"
// )