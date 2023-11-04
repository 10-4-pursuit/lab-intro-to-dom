//this adds a class of "featured" to the first section element on the page.
const featured = document.querySelector("section");
featured.classList.add("featured");

//creates new article element
const newArticleElement = document.createElement("article");

//creates new title element
const newTitleElement = document.createElement("h3");
newTitleElement.textContent = "Stop Planning";

//create new image element with attributes
const newImageElement = document.createElement("img");
newImageElement.setAttribute(
    "src",
    "/images/paul-gilmore-unsplash.jpg",
    "alt",
    "Image of a mountain in front of a lake.",
    "h3",
    "Stop Planning"
  );

//create new content element with text
const newContentElement = document.createElement("p");
newContentElement.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all is
so stressful these days; why add to the stress by overworking yourself? `;


//append new elements to new article
newArticleElement.appendChild(newImageElement);
newArticleElement.appendChild(newTitleElement);
newArticleElement.appendChild(newContentElement);

//append article to posts section
const sectionPostsElement = document.querySelector("section.posts");
sectionPostsElement.appendChild(newArticleElement);

//this switches first article with the second article under post
const postsSection = document.querySelector("section.posts");
const firstArticle = postsSection.firstElementChild;
const secondArticle = firstArticle.nextElementSibling;
postsSection.insertBefore(secondArticle, firstArticle);

//removes all post link from header
const header = document.querySelector("header a");
header.parentNode.removeChild(header);

//removes read time from featured article
const featuredPost = document.querySelector(".featured article");
const readTimeSpan = featuredPost.querySelector("span");
readTimeSpan.parentNode.removeChild(readTimeSpan);

//removes last post
const lastPost = postsSection.childNodes[5];
lastPost.remove(lastPost);

//Remove all titles from all non-featured post
postsSection.querySelectorAll("h3");
const allTitles = postsSection.querySelectorAll("h3");
allTitles.forEach((title) => {
  title.parentNode.removeChild(title);
});
