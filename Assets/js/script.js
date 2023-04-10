//Add an *event listener* to the *search form* that *fetches recipe results* from an API
var recipeResult = document.getElementById('resultsList');
var recipeSearchBtn = document.getElementById('searchbtn');
var apiUrl ="https://themealdb.p.rapidapi.com/search.php?s=";
var recipeInput = document.getElementById('ingredinput').value;

//recipeSearchBtn.addEventListener("click", () => {
	//Fetch recipe results from Meal DB API
	fetch(apiUrl + recipeInput, options)
		.then(response => response.json())
		.then(response => {
			var searchMeal = response.meals[0];
			console.log(searchMeal);
			//Logs name of recipe
			console.log(searchMeal.strMeal);
			//Logs ohoto of recipe
			console.log(searchMeal.strMealThumb);
			let count = 1;
			//Display ingredient and amount next to eachother
			var recipeIngredients =[];
			for (let i in searchMeal) {
				var stringIngredients = "";
				var stringMeasurements = "";
				if (i.startsWith('strIngredient') && searchMeal[i]) {
					stringIngredients = searchMeal[i];
					stringMeasurements = searchMeal[`strMeasure` + count];
					count += 1;
					recipeIngredients.push(`${stringMeasurements} ${stringIngredients}`);
				}
			}
		//Display ingredient and amount next to each other
		console.log(recipeIngredients);
		//Display recipe instructions
		console.log(searchMeal.strInstructions);

		//Display the results of the API fetch in the *resultsList element* in the UI
		recipeResult.innerHTML = `
		<div class="searchnformation">
			<h3>${searchMeal.strMeal}</h3>
		</div>
		<img src=${searchMeal.strMealThumb}>
		<div id="recipestringredients"></div>
		<div id="stringinstructions">
			<button id="closeinstructions">X</button>
			<div id="recipeinstructions">${searchMeal.strInstructions}</div>
		</div>
		<button type="submit" id="openinstructions">View Insturctions</button>`;
		var recipeStrIngredients = document.getElementById("recipestringredients");
		//Display ingredients in a list 
		var parentElement = document.createElement("ul");
		var stringInstructions = document.getElementById("stringinstructions");
		var closeInstructions = document.getElementById("closeinstructions");
		var openInstructions = document.getElementById("openinstructions");
		recipeIngredients.forEach((i) => {
			var childElement = document.createElement("li");
			childElement.innerText = i;
			parentElement.appendChild(childElement);
			recipeStrIngredients.appendChild(parentElement);
		});
		//Event listener to view instructions
		openInstructions.addEventListener("click", () => {
			stringInstructions.style.display = "block";
		});
		//Event listener to close instructions
		closeInstructions.addEventListener("click", () => {
			stringInstructions.style.display = "none";
		});

	});
//});

//Display the results of the API fetch in the *resultsList element*

// Sign in form elements*
const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

//Add an *event listener* to the *sign-in form* that *handles authentication* and *toggles the showNone* class to *display the saved recipes list*.
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector("error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector("error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }
};

const randomRecipeBtn = document.getElementById("getRandom");
const randomRecipeContainer = document.getElementById("randomRecipe");

function createRandomRecipe(meal) {
  const { strMeal, strMealThumb, strInstructions } = meal;
  //Generate the elements that will apear on the card
  const recipeCard = document.createElement("div");
  recipeCard.classList.add("recipeCard");

  const recipeCardImg = document.createElement("div");
  recipeCardImg.classList.add("recipeCard-img");

  const img = document.createElement("img");
  img.src = strMealThumb;
  img.alt = strMeal;

  const recipeCardDetails = document.createElement("div");
  recipeCardDetails.classList.add("recipeCard-details");

  const h2 = document.createElement("h2");
  h2.textContent = strMeal;

  const instructions = document.createElement("p");
  instructions.textContent = strInstructions;
  //Assembles HTML
  recipeCardImg.appendChild(img);
  recipeCardDetails.appendChild(h2);
  recipeCardDetails.appendChild(instructions);
  recipeCard.appendChild(recipeCardImg);
  recipeCard.appendChild(recipeCardDetails);

  //Clear eexisting recipe details
  randomRecipeContainer.innerHTML = "";

  //Add card to page
  randomRecipeContainer.appendChild(recipeCard);
}
randomRecipeBtn.addEventListener("click", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((response) => {
      createRandomRecipe(response.meals[0]);
    })
    .catch((e) => {
      console.warn(e);
    });
});


//Add an *event listener* to each *saved recipe item* that *fetches the recipe details and *displays* them on a *separate page*.

// let password = "";
// for (let i = 0; i < length; i++) {
//   password += charSet[Math.floor(Math.random() * charSet.length)];
// }
// return password;

const randomBtn = document.querySelector(".randomBtn");

randomBtn.addEventListener("mouseenter", () => {
  randomBtn.style.setProperty("--color-r", Math.floor(Math.random() * 255));
  randomBtn.style.setProperty("--color-g", Math.floor(Math.random() * 255));
  randomBtn.style.setProperty("--color-b", Math.floor(Math.random() * 255));
});

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
