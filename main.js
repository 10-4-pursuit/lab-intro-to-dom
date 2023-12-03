function addFeatured() {
    const firstSection = document.querySelector("section");
    firstSection.classList.add("featured");
  }
  
  function createNewArticle() {
    const newArticle = document.createElement("article");
    const sectionPosts = document.querySelector("section.posts");
    sectionPosts.appendChild(newArticle);
  }
  
  function swapArticles() {
    const sectionPosts = document.querySelector("section.posts");
    const articles = sectionPosts.querySelectorAll("article");
    const firstArticle = articles[0];
    const secondArticle = articles[1];
    sectionPosts.insertBefore(secondArticle, firstArticle);
  }
  
  function deleteAllPostslink() {
    const allPostslink = document.querySelector("header a");
    allPostslink.remove();
  }

  function deleteReadTimeSpan() {
    const featuredPost = document.querySelector("section.featured article");
    const readTimeSpan = featuredPost.querySelector("span");
    readTimeSpan.remove();
  }
  
  function deleteLastPost() {
    const lastPost = document.querySelector("section.posts article:last-child");
    lastPost.remove();
  }
  
  function deleteAllTitlesFromNonFeaturedPosts() {
    const nonFeaturedPosts = document.querySelectorAll(
      "section.posts article:not(.featured) h3"
    );
    nonFeaturedPosts.forEach(function (postTitle) {
      postTitle.textContent = "";
    });
  }
  
  addFeatured();
  createNewArticle();
  swapArticles();
  deleteAllPostslink();
  deleteReadTimeSpan();
  deleteLastPost();
  deleteAllTitlesFromNonFeaturedPosts();