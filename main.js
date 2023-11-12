// Add a class of "featured" to the first section element on the page
document.querySelector('main section').classList.add('featured');

// Create a new article element
const newArticle = document.createElement('article');
newArticle.innerHTML = `
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
      <a href="#">Read more...</a>
    </p>
  </aside>
`;

// Add the new article to the end of the section.posts element
const sectionPosts = document.querySelector('section.posts');
sectionPosts.appendChild(newArticle);

// Move the first article to become the second and the second to become the first
const articles = sectionPosts.querySelectorAll('article');
const firstArticle = articles[0];
const secondArticle = articles[1];

sectionPosts.insertBefore(secondArticle, firstArticle);

// Remove the "All Posts" link from the header
const allPostsLink = document.querySelector('nav ul li:first-child a');
allPostsLink.remove();

// Remove the span element that contains the "Read Time" in the featured post
const featuredPost = document.querySelector('.featured article');
const readTimeSpan = featuredPost.querySelector('aside span');
readTimeSpan.remove();

// Remove the last post from the page, titled "Stop Planning"
const stopPlanningPost = document.querySelector('section.posts article:last-child');
stopPlanningPost.remove();

// Remove all titles from all non-featured posts
articles.forEach((article, index) => {
  if (article !== featuredPost) {
    const title = article.querySelector('h3');
    title.remove();
  }
});
