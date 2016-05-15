var avengersMovie = {
    name: "Avengers",
    runtime: "143 mins",
    releaseYear: 2012,
    director: "Joss Whedon",
    domesticBoxOfficeSales: 623357910,
    domesticSalesOpening: 207438708,
    stars: ["Scarlett Johanssen", "Robert Downey Jr.", "Chris Evans", "Jeremy Renner", "Chris Hemsworth", "Mark Ruffalo", "Tom Hiddleston"]
};

function factoids() {
 	var actors = "";
  	for (var i = 0; i < avengersMovie.stars.length; i++) { // loop through stars to create string
  		if (i < avengersMovie.stars.length - 1) {  // sets proper commas and "and" in string
			actors = actors + avengersMovie.stars[i] + ", ";
			} else {
			actors = actors + "and " + avengersMovie.stars[i];
			}
		}
  var sales1 = (avengersMovie.domesticBoxOfficeSales).toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 0}); //sets number to USD currency format 
  var sales2 = (avengersMovie.domesticSalesOpening).toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 0}); //sets number to USD currency format 
	var avengersFacts = 
       "Name: " + avengersMovie.name + "</br>" +
       "Runtime: " + avengersMovie.runtime + "</br>" +
       "Released In: " + avengersMovie.releaseYear + "</br>" +
       "Director: " + avengersMovie.director + "</br>" +
       "Domestic Box Office Sales: " + sales1 + "</br>" +
       "Domestic Sales of Opening Weekend: " + sales2 + "</br>" +
       "Stars: " + actors;  	
	document.getElementById("Show Factoids").innerHTML = avengersFacts;
};


