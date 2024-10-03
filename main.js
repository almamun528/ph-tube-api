//! get loadCatagories
const loadCatagories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCatagories(data.categories))
    .catch((error) => console.log(error));
};

//? load the videos
const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
};
//! display video function
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video-section");
  videos.forEach((video) => {
    console.log(video);
    const card = document.createElement("div");
    card.classList = "card card-compact bg-base-100 shadow";
    card.innerHTML = `
    <figure class ="h-4/6"> 
    <img class ="h-full w-full object-cover"
      src= ${video.thumbnail}
      alt="Shoes" />
      
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>`;
    videoContainer.append(card);
  });
};
//* Display The Button as category
const displayCatagories = (categories) => {
  //?button container from html file
  const categoryBtnContainer = document.getElementById("btn-categories");

  categories.forEach((item) => {
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;
    categoryBtnContainer.append(button);
  });
};

loadCatagories();
loadVideos();
