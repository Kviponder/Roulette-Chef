<<<<<<< HEAD
//New API Key
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f466c28a93mshc3c44718ab029c4p1af359jsnefa63d91cf93',
// 		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
// 	}
// };

//global search history array
var History = [];



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
//Add an *event listener* to each *saved recipe item* that *fetches the recipe details and *displays* them on a *separate page*.


//const options = {
  //method: "GET",
  //headers: {
   // "X-RapidAPI-Key": "f466c28a93mshc3c44718ab029c4p1af359jsnefa63d91cf93",
    //"X-RapidAPI-Host": "tasty.p.rapidapi.com",
  //},
//};

//fetch("https://tasty.p.rapidapi.com/tags/list", options)
  //.then((response) => response.json())
  //.then((response) => console.log(response))
  //.catch((err) => console.error(err));

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

=======
// //New API Key
>>>>>>> 68aaa36f4f2deef1103572bdd0db4931b4c36f25
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f466c28a93mshc3c44718ab029c4p1af359jsnefa63d91cf93',
// 		'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
// 	}
// };

// fetch('https://themealdb.p.rapidapi.com/random.php', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
<<<<<<< HEAD
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
// Get the input element from the HTML
//


//get all the items in local storage
function getHistoryFromLocalStorage() {
	var storedHistory = localStorage.getItem("");
	if (storedHistory) {
	  history = JSON.parse(storedHistory);
	}
  } 

//  take what the user entered into the search field and push to global serch history array
function addToSearchHistory() {
	var inputField = document.getElementById("searchField");
	var inputValue = inputField.value.trim();
  
	if (inputValue !== "") {
	  history.push(inputValue);
  
	  // Save the updated history to local storage
	  localStorage.setItem("", JSON.stringify(history));
	}
  
	// Clear the search field
	inputField.value = "";
  }






  getHistoryFromLocalStorage ();
  addToSearchHistory ();
  
=======

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'f466c28a93mshc3c44718ab029c4p1af359jsnefa63d91cf93',
			'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
		}
	};
	
	fetch('https://themealdb.p.rapidapi.com/categories.php', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));
		
//Some things to be done I added asterisks just so its easier to look and see what needs done to what part:
//Add an *event listener* to the *search form* that *fetches recipe results* from an API


//Display the results of the API fetch in the *resultsList element*

// Sign in form elements*
const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

//Add an *event listener* to the *sign-in form* that *handles authentication* and *toggles the showNone* class to *display the saved recipes list*.
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('error');

	errorDisplay.innerText = message;
	inputControl.classList.add('error');
	inputControl.classList.remove('success')
}

const setSuccess = element => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('error');

	errorDisplay.innerText = '';
	inputControl.classList.add('success');
	inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();

	if(usernameValue === '') {
		setError(username, 'Username is required');
	} else {
		setSuccess(username);
	}

	if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

};


const randomRecipeBtn = document.getElementById('getRandom');
const randomRecipeContainer = document.getElementById('randomRecipe');

function createRandomRecipe(meal) {
const {strMeal, strMealThumb, strInstructions} = meal;
//Generate the elements that will apear on the card
const recipeCard = document.createElement('div');
  recipeCard.classList.add('recipeCard');

  const recipeCardImg = document.createElement('div');
  recipeCardImg.classList.add('recipeCard-img');

  const img = document.createElement('img');
  img.src = strMealThumb;
  img.alt = strMeal;

  const recipeCardDetails = document.createElement('div');
  recipeCardDetails.classList.add('recipeCard-details');

  const h2 = document.createElement('h2');
  h2.textContent = strMeal;

  const instructions = document.createElement('p');
  instructions.textContent = strInstructions;
//Assembles HTML
recipeCardImg.appendChild(img);
recipeCardDetails.appendChild(h2);
recipeCardDetails.appendChild(instructions);
recipeCard.appendChild(recipeCardImg);
recipeCard.appendChild(recipeCardDetails);

//Clear eexisting recipe details
randomRecipeContainer.innerHTML = '';

//Add card to page
randomRecipeContainer.appendChild(recipeCard);
}
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


//Add an *event listener* to the *Random Button* that *fetches a random recipe* from the API and *displays* it on the page
// const randomRecipeBtn = document.getElementById('getRandom');
// const randomContainer = document.getElementById('randomRecipe');



//Add an *event listener* to each *saved recipe item* that *fetches the recipe details and *displays* them on a *separate page*.



// let password = "";
// for (let i = 0; i < length; i++) {
//   password += charSet[Math.floor(Math.random() * charSet.length)];
// }
// return password;



const randomBtn = document.querySelector('.randomBtn');

randomBtn.addEventListener('mouseenter', () => {
  randomBtn.style.setProperty('--color-r', Math.floor(Math.random() * 255));
  randomBtn.style.setProperty('--color-g', Math.floor(Math.random() * 255));
  randomBtn.style.setProperty('--color-b', Math.floor(Math.random() * 255));
})


// const searchForm = document.querySelector(".search-form");
// const rsList = document.querySelector(".rsList");
// const clearBtn = document.querySelector(".clearBtn");

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
>>>>>>> 68aaa36f4f2deef1103572bdd0db4931b4c36f25
