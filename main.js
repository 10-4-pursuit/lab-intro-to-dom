// Add a class of "featured" to the first section element on the page.
const featured = document.querySelector("section");
featured.classList.add("featured");

//Create the following article element with JavaScript and add at the end of the section.posts element.
const newArticleElement = document.createElement("article");

const newTitleElement = document.createElement('h3');
newTitleElement.textContent = "Stop Planning"
const newImageElement = document.createElement('img');



const newContentElement = document.createElement('p');

newContentElement.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all is
so stressful these days; why add to the stress by overworking yourself? `;

newArticleElement.appendChild(newImageElement);
newArticleElement.appendChild(newTitleElement);
newArticleElement.appendChild(newContentElement);


const sectionPostsElement = document.querySelector('section.posts');
sectionPostsElement.appendChild(newArticleElement);

document.querySelector("section.posts").appendChild(newArticleElement);


newImageElement.setAttribute ( 
    "src",
    "/images/paul-gilmore-unsplash.jpg",
    "alt",
    "Image of a mountain in front of a lake.",
    "h3",
    "Stop Planning"
)


const postsSection = document.querySelector('section.posts')

const firstArticle = postsSection.firstElementChild;
const secondArticle = firstArticle.nextElementSibling;

// postsSection.removeChild(firstArticle)

//this insert the second article after  
postsSection.insertBefore(secondArticle, firstArticle)


