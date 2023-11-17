function addClassToSectionElement() {
    const sectionElement = document.querySelector("section");
    sectionElement.classList.add("featured")
}

function createArticleElement() {
    const articleElement = document.createElement("article");
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
    imgElement.setAttribute("alt", "Image of a mountain in front of a lake.");
    articleElement.append(imgElement);
    const headerElement = document.createElement("h3");
    headerElement.innerText = "Stop Planning";
    articleElement.append(headerElement);
    const headParElement = document.createElement("p");
    headParElement.innerText = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
    articleElement.append(headParElement);
    const asideElement = document.createElement("aside");
    const parElement = document.createElement("p")
    const spanElement = document.createElement("span");
    parElement.append(spanElement);
    asideElement.append(parElement);
    articleElement.append(asideElement);
    spanElement.innerHTML = "<strong>Read Time:</strong> 4 Minutes";
    const appendArticleTarget = document.querySelector("section.posts");
    appendArticleTarget.append(articleElement);
}

function switchArticleElements() {
    const sectionPost = document.querySelector("section.posts");
    const firstArticle = sectionPost.children[0];
    const secondArticle = sectionPost.children[1];
    const thirdArticle = sectionPost.children[2];
    const main = document.querySelector("main");
    const newSection = document.createElement("section");
    newSection.append(secondArticle, firstArticle, thirdArticle);
    newSection.className = "posts";
    main.removeChild(sectionPost);
    main.appendChild(newSection)
}

function removeLinkFromHeader() {
    const unwantedLink = document.querySelector("li", "All Posts");
    unwantedLink.remove();
}

function removeSpanInPost() {
    const unwantedSpan = document.querySelector("span", "featured");
    unwantedSpan.remove();
}

function deleteLastPost() {
    const postToDelete = document.querySelector("section.posts article:last-child");
    console.log(postToDelete);
    postToDelete.remove();
}

function removeNonFeaturedTitles() {
    const sectionTitles = document.querySelector("section.posts");
    const titles = sectionTitles.querySelectorAll("h3");
    for (let i = 0; i < titles.length; i++) {
        titles[i].remove();
    }
}

addClassToSectionElement();
createArticleElement();
switchArticleElements();
removeLinkFromHeader();
removeSpanInPost();
deleteLastPost();
removeNonFeaturedTitles();