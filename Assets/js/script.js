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

//New API Key
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f466c28a93mshc3c44718ab029c4p1af359jsnefa63d91cf93',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

  
var ingredient = 'chicken';


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