import dogs from "/data.js";

let likedDogs = [];
let isWaiting = false;
const likeBtn = document.querySelector(".like-btn");
const nopeBtn = document.querySelector(".nope-btn");

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
  let message =
    likedDogs.length > 1
      ? "You liked them"
      : likedDogs.length === 1
      ? "You liked it"
      : "You liked none";
  return `<div class="results"><h2>${message}</h2>
  ${likedDogsHtml}</div>`;
}

function noped() {
  if (isWaiting == false) {
    dog.hasBeenSwiped = true;
    dog.swipe();
    document.querySelector(".like").style.display = "none";
    document.querySelector(".nope").style.display = "block";
    isWaiting = false;
  }
}
function liked() {
  if (isWaiting == false) {
    dog.hasBeenSwiped = true;
    dog.hasBeenLiked = true;
    dog.swipe();
    if (!likedDogs.includes(dog)) {
      likedDogs.push(dog);
    }
    document.querySelector(".nope").style.display = "none";
    document.querySelector(".like").style.display = "block";
    isWaiting = false;
  }
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
      isWaiting = true;
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
