


const post_button = document.getElementById("post_button");

const write_text = document.getElementById("post");

const post_parent = document.querySelector(".text_area");


// LOAD SAVED POSTS
const saved_posts = localStorage.getItem("posts");

const posts = JSON.parse(saved_posts || "[]");


// RENDER SAVED POSTS WHEN PAGE LOADS
for (const post of posts) {
  render_posts(post);
}


// POST BUTTON
post_button.addEventListener("click", () => {

  // PREVENT EMPTY POSTS
  if (write_text.value.trim() === "") return;

  // DISPLAY POST
  render_posts(write_text.value);

  // SAVE TO LOCAL STORAGE
  save_posts(write_text.value);

  // CLEAR TEXTAREA
  write_text.value = "";
});



// FUNCTION TO DISPLAY POSTS
function render_posts(post = "") {

  if (!post.trim()) return;

  // CREATE POST CONTAINER
  const post_container = document.createElement("div");

  post_container.className = "post_container";

  // CREATE PARAGRAPH
  const p = document.createElement("p");

  p.innerText = post;

  // CREATE DELETE BUTTON
  const delete_btn = document.createElement("button");

  delete_btn.innerText = "Delete";

  delete_btn.className = "delete_btn";

  // APPEND ELEMENTS
  post_container.appendChild(p);

  post_container.appendChild(delete_btn);

  post_parent.appendChild(post_container);


  // DELETE FUNCTION
  delete_btn.addEventListener("click", () => {

    post_container.remove();

    remove_post(post);

  });

}



// SAVE POSTS
function save_posts(post = "") {

  if (!post.trim()) return;

  posts.push(post);

  localStorage.setItem("posts", JSON.stringify(posts));

}



// REMOVE POSTS
function remove_post(post = "") {

  if (!post.trim()) return;

  const index = posts.findIndex((x) => x === post);

  if (index !== -1) {

    posts.splice(index, 1);

  }

  localStorage.setItem("posts", JSON.stringify(posts));

}