
//New API Key
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f466c28a93mshc3c44718ab029c4p1af359jsnefa63d91cf93',
// 		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
// 	}
// };

// fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

  
// var ingredient = 'chicken';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f466c28a93mshc3c44718ab029c4p1af359jsnefa63d91cf93',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

fetch('https://tasty.p.rapidapi.com/tags/list', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));






let password = "";
for (let i = 0; i < length; i++) {
  password += charSet[Math.floor(Math.random() * charSet.length)];
}
return password;


//Below is what we can adjust from Kai's weather app to make searched recipes 1) appear, 2) clear onClick of a clear button
//Change const's to match what we have as on our search form
const searchForm = document.querySelector('.search-form');
const rsList = document.querySelector('.rsList');
const clearBtn = document.querySelector(".clearBtn")

document
function addRecentSearch(city) {
  const li = document.createElement('li');
  li.textContent= city;
  li.addEventListener('click', function() {
    document.querySelector('.search-form input[type="text"]').value = city;
    searchForm.dispatchEvent(new Event('submit'));
  });
  rsList.prepend(li);
}
//need to make clearBBtn element on html

clearBtn.addEventListener('click', function() {
  while (rsList.firstChild) {
rsList.removeChild(rsList.firstChild);
  }
});

// Below are other uses for the tasty api to consider

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '3b3f004df5msh06f428dcf1e949ep15fbdajsn0397b504c8be',
// 		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
// 	}
// };
// fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '3b3f004df5msh06f428dcf1e949ep15fbdajsn0397b504c8be',
//         'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
//     }
// };
// fetch('https://tasty.p.rapidapi.com/recipes/get-more-info?id=8138', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
//$(document).ready(function() {

//const options = {
//  method: "GET",
//  headers: {
//    "X-RapidAPI-Key": "3b3f004df5msh06f428dcf1e949ep15fbdajsn0397b504c8be",
//    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
//  },
//};

//fetch(
//  "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=" + ingredient,
//  options
//)

//  .then((response) => response.json())
//  .then((response) => console.log(response))
//  .catch((err) => console.error(err));

//  randomRecipe();

  
//  getLocalStorage ();
//})

