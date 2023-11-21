// add a class of 'featured' to the first section element on the page
const firstSection = document.querySelector('section');
firstSection.classList.add('featured');

// make a new artivle element and add it to end of section.posts element
const newArticle = document.createElement('article');
newArticle.innerHTML = `<img src="./images/paul-gilmore-unsplash.jpg" alt="Image of a mountain in front of a lake." />
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
</aside>`

document.querySelector('section.posts').appendChild(newArticle)

// move first article to be the second and vice versa

const articles = document.querySelectorAll('section.posts article')
const firstArticle = articles[0]
const secondArticle = articles[1]
document.querySelector('section.posts').insertBefore(secondArticle, firstArticle)


// take out 'all post' link from the header
const allPostsLink = document.querySelector('header nav li:first-child a')
allPostsLink.remove()


// remove the span that has 'read time' in featured post
const featuredArticle = document.querySelector('section.featured article')
featuredArticle.querySelector('span').remove()

// remove the last post from the page, title 'stop planning'

const lastPost = document.querySelector('section.posts article:last-child')
lastPost.remove()

// remove all titles from all non-featured posts

const nonFeaturedArticles = document.querySelectorAll('section.posts article:not(.featured)')
nonFeaturedArticles.forEach(article => article.querySelector('h3').remove())