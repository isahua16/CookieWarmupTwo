function url_cookie(event)
{
   let image_url = event[`target`].getAttribute(`src`);
   Cookies.set(`image_url`, image_url);
}

let image_cont = document.querySelector(`#image_container`);
image_cont.insertAdjacentHTML(`beforeend`, 
`<img class="img" src="/images/golden.jpg" alt="Golden Puppy">
<img class="img" src="/images/aussie.jpg" alt="Aussi Puppy">
<img class="img" src="/images/bichon.jpg" alt="Bichon Puppt">`);

let images = document.querySelectorAll(`.img`);
for(let i = 0; i < images.length; i++)
{
    images[i].addEventListener(`click`, url_cookie);
}