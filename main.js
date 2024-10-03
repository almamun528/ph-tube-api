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
    videoContainer.innerHTML = ''
    videos.forEach((video) => {
      console.log(video);
      const card = document.createElement("div");
      card.classList = "card card-compact bg-base-100 shadow";
      card.innerHTML = `
      <figure class ="h-[200px] relative"> 
      <img class ="h-full w-full object-cover"
      src= ${video.thumbnail}
      alt="Shoes" />
      ${
        video.others.posted_date?.length == 0
        ? ""
        : `<span class=" absolute bg-black text-white bottom-2 right-4 p-2 rounded-lg  "> ${getTime(video.others.posted_date)} </span>`
      }
      </figure>
      <div class="card-body">
      <div class="flex gap-3 items-center"> 
      <img class ="w-10 h-10 rounded-full object-cover" src= ${
        video.authors[0].profile_picture
      } />
      <h2 class=" font-semibold text-xl ">${video.title}</h2>
      </div>
      <div class="flex items-center gap-2">
      <p class=" text-gray-400" >${video.authors[0].profile_name}</p> 
      
      ${
        video.authors[0].verified == true
        ? ` <img class="w-5" src ="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png"/> `
        : ""
      }
      </div>
      
      <p class=" text-gray-400 " >${video.others.views} views</p>
      </div>`;
      videoContainer.append(card);
    });
  };
  //? load categories videos function 
  const loadCategoryvideos = (id) =>{
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) =>  displayVideos(data.category));
  
}
//* Display The Button as category
const displayCatagories = (categories) => {
  //?button container from html file
  const categoryBtnContainer = document.getElementById("btn-categories");

  categories.forEach((item) => {
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML =`
    <button onclick ="loadCategoryvideos(${item.category_id})" class="btn">${item.category} </button>

    `
    categoryBtnContainer.append(buttonContainer)
  });
};



loadCatagories();
loadVideos();

// const video = {
//   "category_id": "1003",
//   "video_id": "aaaj",
//   "thumbnail": "https://i.ibb.co/xgWL3vQ/kid-gorgeous.jpg",
//   "title": "Kid Gorgeous",
//   "authors": [
//       {
//           "profile_picture": "https://i.ibb.co/xsfkwN2/john.jpg",
//           "profile_name": "John Mulaney",
//           "verified": true
//       }
//   ],
//   "others": {
//       "views": "241K",
//       "posted_date": ""
//   },
//   "description": "John Mulaney's 'Kid Gorgeous' has captured the hearts of many with 241K views. As a verified comedian, John delivers a masterclass in stand-up with clever anecdotes, quick wit, and relatable humor. This performance is a laugh-filled adventure through his unique take on life, politics, and pop culture."
// }
