const section = document.querySelector("section")
section.classList.add("featured")

const article= document.createElement("article")
article.innerHTML= `
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
`
const postSection = document.querySelector("section.posts")
postSection.appendChild(article)


const sectionPost = document.querySelector("section.posts")
const firstArticle= sectionPost.querySelector("article")
const secondArticle = sectionPost.querySelector("article:nth-child(2)")
sectionPost.insertBefore(secondArticle, firstArticle)

const allPosts= document.querySelector("nav ul li a")
allPosts.remove()

const featuredPost = document.querySelector("section span")
featuredPost.remove()

const lastPost = document.querySelector(".posts article:last-child")
lastPost.remove()

const nonFeatured = document.querySelectorAll("section:not(.featured) h3")
nonFeatured.forEach(element => {
  element.remove()
})

