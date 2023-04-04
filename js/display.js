function reset_cookie(event)
{
  Cookies.remove(`image_url`);
}
let image_url = Cookies.get(`image_url`);
if(image_url !== undefined)
{
  let image_cont = document.querySelector(`#image_container`);
  image_cont.insertAdjacentHTML(`beforeend`,
  `<img src="${image_url}" alt"Image of a Puppy">`);
}
else
{
  let image_cont = document.querySelector(`#image_container`);
  image_cont.insertAdjacentHTML(`beforeend`, `<h3>You have not selected a puppy to adopt</h3>`);
}

let back_btn = document.querySelector(`#back_btn`);
back_btn.addEventListener(`click`, reset_cookie);
