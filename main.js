



const feature = document.querySelector("section");

feature.classList.add("featured");

const newArticle = document.createElement("article");

newArticle.innerText = ` <article>
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
</article> `

const postSections = document.querySelector("section.posts")

const firstArticle = postSections.firstElementChild

const secondArticle = firstArticle.nextElementSibling

postSections.insertBefore(secondArticle, firstArticle)

const headerLinkGone = document.querySelector("header a");

headerLinkGone.parentNode.removeChild(headerLinkGone);

const featuredPost = document.querySelector(".featured article");

const readTimeSpan = featuredPost.querySelector("span");

readTimeSpan.parentNode.removeChild(readTimeSpan);

const lastPost = postSections.lastChild;
lastPost.remove(lastPost);

const nonFeaturedPosts = document.querySelectorAll("h3")
nonFeaturedPosts.forEach((post) => {
  post.parentNode.removeChild(post);
});