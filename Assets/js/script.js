//New API Key
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f466c28a93mshc3c44718ab029c4p1af359jsnefa63d91cf93',
		'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
	}
};

fetch('https://themealdb.p.rapidapi.com/random.php', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
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

//Some things to be done I added asterisks just so its easier to look and see what needs done to what part:
//Add an *event listener* to the *search form* that *fetches recipe results* from an API



//Display the results of the API fetch in the *resultsList element*

//Add an *event listener* to the *sign-in form* that *handles authentication* and *toggles the showNone* class to *display the saved recipes list*.
//Add an *event listener* to the *Random Button* that *fetches a random recipe* from the API and *displays* it on the page
const randomRecipeBtn = document.getElementById('getRandom');
const randomContainer = document.getElementById('randomRecipe');

randomRecipeBtn.addEventListener('click', () => {
	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(response => response.json())
		.then(response => {
			createRandomRecipe(response.meals[0]);
		})
		.catch(e => {
			console.warn(e);
		});
});

//Add an *event listener* to each *saved recipe item* that *fetches the recipe details and *displays* them on a *separate page*.


// let password = "";
// for (let i = 0; i < length; i++) {
//   password += charSet[Math.floor(Math.random() * charSet.length)];
// }
// return password;

//Below is what we can adjust from Kai's weather app to make searched recipes 1) appear, 2) clear onClick of a clear button
//Change const's to match what we have as on our search form
const searchForm = document.querySelector(".search-form");
const rsList = document.querySelector(".rsList");
const clearBtn = document.querySelector(".clearBtn");

// document
// function addRecentSearch(city) {
//   const li = document.createElement('li');
//   li.textContent= city;
//   li.addEventListener('click', function() {
//     document.querySelector('.search-form input[type="text"]').value = city;
//     searchForm.dispatchEvent(new Event('submit'));
//   });
//   rsList.prepend(li);
// }
//need to make clearBBtn element on html

// clearBtn.addEventListener('click', function() {
//   while (rsList.firstChild) {
// rsList.removeChild(rsList.firstChild);
//   }
// });

// Below are other uses for the tasty api to consider


//  randomRecipe();

//  getLocalStorage ();
//})
