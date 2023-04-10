import dogs from "/data.js";

const likeBtn = document.querySelector(".like-btn");
const nopeBtn = document.querySelector(".nope-btn");
let likedDogs = [];

function showLikedDogs() {
  let likedDogsHtml = likedDogs
    .map((dog) => {
      return `
      <div class="liked-dog">
      <img src="${dog.avatar}"/>
      <h3>${dog.name}</h3>
      </div>`;
    })
    .join("");
  return `<div class="results"><h3>You liked them</h3>
  <div class="liked-dogs-container">${likedDogsHtml}</div></div>`;
}

function noped() {
  dog.hasBeenSwiped = true;
  dog.swipe();
  document.querySelector(".like").style.display = "none";
  document.querySelector(".nope").style.display = "block";
}
function liked() {
  dog.hasBeenSwiped = true;
  dog.hasBeenLiked = true;
  likedDogs.push(dog);
  dog.swipe();
  document.querySelector(".nope").style.display = "none";
  document.querySelector(".like").style.display = "block";
}

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }
  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return ` <div class="profile">
          <img src="/images/badge-like.png" alt="" class="like" />
          <img src="/images/badge-nope.png" alt="" class="nope" />
          <img src=${avatar} alt="" />
          <div class="profile-info">
            <h4>${name}, ${age}</h4>
            <p>${bio}</p>
          </div>
        </div>
       `;
  }
  swipe() {
    if (this.hasBeenSwiped) {
      setTimeout(() => {
        dog = getNewDog();
        render();
      }, 1100);
    }
  }
}

function getNewDog() {
  const nextDogsData = dogs.shift();
  return nextDogsData ? new Dog(nextDogsData) : "";
}

function render() {
  if (dog) {
    document.querySelector(".profile").innerHTML = dog.getDogHtml();
  } else {
    document.querySelector("main").innerHTML = showLikedDogs(likedDogs);
  }
}

likeBtn.addEventListener("click", liked);
nopeBtn.addEventListener("click", noped);

let dog = getNewDog();
render();
