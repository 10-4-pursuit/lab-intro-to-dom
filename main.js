/* 1 */const sectionElements = document.querySelector("section");
sectionElements.className = "featured";

/* 2 */const createArticleElement = document.createElement("article");
createArticleElement.innerHTML = `
<img
  src="./images/paul-gilmore-unsplash.jpg"
  alt="Image of a mountain in front of a lake."
/>
<h3>Stop Planning</h3>
<p>
  You -- yes you! You're an over-planner, I can tell. It's time to stop
  planning so much and instead focusing on relaxing. Taking a break at all is
  so stressful these days; why add to the stress by overworking yourself?
</p>
<aside>
  <p>
    <span><strong>Read Time:</strong> 4 Minutes</span
    ><a href="#">Read more...</a>
  </p>
</aside>
`;



const variableForSp = document.querySelector("section.posts");
variableForSp.append(createArticleElement);

/* 3 */ 
const postsContainer = document.querySelector("section.posts");
const articlesContainer = postsContainer.querySelectorAll("article");

if (articlesContainer.length >=2) {
    const firstArticle = articlesContainer[0];
    const secondArticle = articlesContainer[1];

postsContainer.insertBefore(secondArticle, firstArticle);

}


/* 4 */const linkToRemove = document.querySelector("header a");
linkToRemove.remove();


/* 5 */const hideSpan = document.querySelector("section span");
hideSpan.remove();

 /* 6 */articlesContainer[articlesContainer.length-1].remove();

const articleTitles = document.querySelectorAll("section.posts h3");
for (let title of articleTitles) {
    title.remove();
}
