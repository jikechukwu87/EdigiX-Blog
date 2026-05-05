
const post_button = document.getElementById("post_button");

const post_area = document.querySelector(".text_area");

const input_area = document.getElementById("post");

const post_environment = document.querySelector(".posted_environment");


post_button.addEventListener("click",()=>{
   if (input_area.value.trim()==="")return;

   const p = document.createElement("p");
   p.innerText = input_area.value;
   post_area.appendChild(p);

//    delete post_button

  const delete_btn = document.createElement("button");
  delete_btn.innerText = "Delete";
  delete_btn.id = "delete_btn";
  post_area.appendChild(delete_btn);

  delete_btn.addEventListener("click",()=>{
    post_environment.remove(post_area)
  })


   input_area.value = "";


})



