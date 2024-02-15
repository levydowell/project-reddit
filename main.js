let author = document.querySelector(".author");
let postText = document.querySelector(".post")
let clickable = document.querySelector(".btn");
let posts = document.querySelector(".posts");

//create element, fill element, and append to div
clickable.addEventListener("click", function () {
  const newTextElement = document.createElement('p');
  const newNameElement = document.createElement('strong')
  const postElement = document.createElement('div');
  postElement.setAttribute("class", "new-post");

  newNameElement.innerText = author.value;
  newTextElement.innerText = postText.value;
  postElement.appendChild(newNameElement);
  postElement.appendChild(newTextElement);
  posts.appendChild(postElement);
})