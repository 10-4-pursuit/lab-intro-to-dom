const section = document.querySelector("section");
section.classList.add("featured")

const lakeMountain = document.createElement("article")

const gilmore = document.createElement("img")
gilmore.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
lakeMountain.append(gilmore)
gilmore.setAttribute("alt", "Image of a mountain in front of a lake.")
lakeMountain.append(gilmore)

const headLine = document.createElement("h3")
headLine.innerText = "Stop Planning"
lakeMountain.append(headLine)

const blog = document.createElement("p")
blog.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?`
lakeMountain.append(blog) 

const sideBar = document.createElement("aside")
const container = document.createElement("p")
sideBar.append(container)

const spread = document.createElement("span")
spread.innerText =  "4 Minutes"
container.append(spread)

const muscles = document.createElement("strong")
muscles.innerText = "Read Time:\u00A0"
spread.prepend(muscles)

const apple = document.createElement("a")
apple.setAttribute("href", "#")
apple.innerText = "Read more"

container.append(apple)
sideBar.append(container)
lakeMountain.append(sideBar)
document.querySelector(".posts").append(lakeMountain)

document.querySelector("li").remove();
document.querySelector("span").remove();
lakeMountain.remove();
document.querySelector("h3").remove();
document.querySelector("h3").remove();

const secondArticle = document.querySelector(".posts article:nth-child(2)")

secondArticle.after(document.querySelector(".posts article"))

const htmlToInsert = `<article>
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
</article>`;
// document.querySelector(".posts").innerHTML += htmlToInsert