import dogs from "/data.js";

const dogsData = dogs;
const likeBtn = document.querySelector(".like-btn");
// const nopeBtn = document.querySelector(".nope-btn");
let dogsArray = ["Rex", "Bella", "Teddy"];

function getNewDog() {
  const nextDogsData = dogs[dogsArray.shift()];
  return nextDogsData ? new Dog(nextDogsData) : new Dog(dogsData[0]);
}

// function noped() {
//   dog.hasBeenSwiped = true;
//   document.querySelector(".like").style.display = "none";
//   document.querySelector(".nope").style.display = "block";
// }
function liked() {
  document.querySelector(".nope").style.display = "none";
  document.querySelector(".like").style.display = "block";
  dog.hasBeenSwiped = true;
  dog.swipe();
  render();
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
        </div>`;
  }
  swipe() {
    if (this.hasBeenSwiped) {
      console.log("swiped");
      getNewDog();
      render();
    }
  }
}

//const firstDog = new Dog(dogsData[0]);

//let dog = new Dog(dogsData[0]);
let dog = getNewDog();
console.log(dog);

function render() {
  document.querySelector(".profile").innerHTML = dog.getDogHtml();
}

likeBtn.addEventListener("click", liked);
// nopeBtn.addEventListener("click", noped);
render();
