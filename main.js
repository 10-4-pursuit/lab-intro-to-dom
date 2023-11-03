const firstSection = document.querySelector('section');
firstSection.classList.add('featured');

const newArticle = document.createElement('article');
newArticle.innerHTML = `
  <img src="./images/paul-gilmore-unsplash.jpg" alt="Image of a mountain in front of a lake." />
  <h3>Stop Planning</h3>
  <p>You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?</p>
  <aside>
    <p><span><strong>Read Time:</strong> 4 Minutes</span><a href="#">Read more...</a></p>
  </aside>
`;

const sectionPosts = document.querySelector('section.posts');
sectionPosts.appendChild(newArticle);

const articles = document.querySelectorAll('article');
if (articles.length >= 2) {
  sectionPosts.insertBefore(articles[1], articles[0]);
}

const headerLinks = document.querySelectorAll('header a');
for (const link of headerLinks) {
  if (link.textContent === 'All Posts') {
    link.remove();
  }
}

const featuredArticle = articles[0];
const readTimeSpan = featuredArticle.querySelector('span');
if (readTimeSpan) {
  readTimeSpan.remove();
}

const lastPost = sectionPosts.querySelector('article:last-child');
if (lastPost) {
  lastPost.remove();
}

const nonFeaturedArticles = document.querySelectorAll('section.posts article:not(.featured) h3');
for (const title of nonFeaturedArticles) {
  title.remove();
}
