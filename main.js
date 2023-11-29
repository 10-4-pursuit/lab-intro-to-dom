// Add a class of "featured" to the first section element
document.querySelector('section').classList.add('featured');

// Create the new article element
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
document.querySelector('section.posts').appendChild(newArticle);

// Move the first article to become the second and vice versa
const sectionPosts = document.querySelector('section.posts');
const firstArticle = sectionPosts.firstElementChild;
const secondArticle = sectionPosts.lastElementChild;

sectionPosts.insertBefore(secondArticle, firstArticle);

// Remove the "All Posts" link from the header
document.querySelector('header nav a').remove();

// Remove the span element that contains "Read Time" in the featured post
document.querySelector('section.posts article.featured span').remove();

// Remove the last post from the page titled "Stop Planning"
document.querySelector('section.posts article:last-of-type').remove();

// Remove all titles from all non-featured posts
document.querySelectorAll('section.posts article:not(.featured) h3').forEach(title => {
  title.remove();
});