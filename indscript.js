



let SignOut= document.getElementById("show-logout");

let Signout = ()=>{
  sessionStorage.removeItem("user-creds");
  sessionStorage.removeItem("user-info");
  window.location.href='login.html'
  alert("Do you really want to log out?")

 
}



SignOut.addEventListener('click' ,Signout)





const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 200);
    clickCounter++;
    if (itemNumber - (2 + clickCounter) + (2 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 600
        }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 200));
});


























