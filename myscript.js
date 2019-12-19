 <!-- Eindopdracht Coen van Essen | Webontwikkeling | 16-12-2019 -->


function valideertitel() {
	var Lengte = document.getElementById("TitleRecipe").Length;
	if(Lengte <2) { 
    return (true)
  }
    alert("Je hebt geen titel of een hele korte titel bij het recept gegeven, probeer het nog eens")
    return (false)	
}

function ValideerEmail(mail) {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.Recepten.Emailadres.value)){
    return (true)
  }
    alert("Er gaat iets mis met je e-mail adres, wil je daar nog even naar kijken?")
    return (false)
}

function valideerIngredient1() {
	var Lengte = document.getElementById("ingredient1").Length;  
	if(Lengte <2) { 
    return (true)
  }
	alert("U bent vergeten ingredienten toe te voegen, probeer het nog eens aub")
	return (false)
}
function valideerIngredient2() {
	var Lengte = document.getElementById("ingredient2").Length;  
	if(Lengte <2) { 
    return (true)
  }
	alert("U bent vergeten ingredienten toe te voegen, probeer het nog eens aub")
	return (false)
}
function valideerIngredient3() {
	var Lengte = document.getElementById("ingredient3").Length;  
	if(Lengte <2) { 
    return (true)
  }
	alert("U bent vergeten ingredienten toe te voegen, probeer het nog eens aub")
	return (false)
}

function valideerBereidingswijze() {
	var Lengte = document.getElementById("bereidingswijze").Length;  
	if(Lengte <5) { 
    return (true)
  }
	alert("U bent vergeten de bereidingswijze toe te voegen, probeer het nog eens aub")
	return (false)
}



function showUserInput1() {
		document.getElementById('displayTitle').innerHTML = 'Ingredienten'
        document.getElementById('displayTitlerecipe').innerHTML = document.Recepten.TitleRecipe.value;
		document.getElementById('displayTypeRecipe').innerHTML = ('Categorie ' +document.Recepten.TypeRecipe.value);
		document.getElementById('displayTimeRecipe').innerHTML = (document.Recepten.TimeRecipe.value+ ' minuten om te bereiden');
		document.getElementById('displayingredient1').innerHTML = document.Recepten.ingredient1.value;
		document.getElementById('displayTypeIngredient1').innerHTML = document.Recepten.TypeIngredient1.value;
		document.getElementById('displayingredienthoeveelheid1').innerHTML = document.Recepten.ingredienthoeveelheid1.value;
		document.getElementById('displayingredient2').innerHTML = document.Recepten.ingredient2.value;
		document.getElementById('displayTypeIngredient2').innerHTML = document.Recepten.TypeIngredient2.value;
		document.getElementById('displayingredienthoeveelheid2').innerHTML = document.Recepten.ingredienthoeveelheid2.value;
		document.getElementById('displayingredient3').innerHTML = document.Recepten.ingredient3.value;
		document.getElementById('displayTypeIngredient3').innerHTML = document.Recepten.TypeIngredient3.value;
		document.getElementById('displayingredienthoeveelheid3').innerHTML = document.Recepten.ingredienthoeveelheid3.value;
		document.getElementById('displayingredient4').innerHTML = document.Recepten.ingredient4.value;
		document.getElementById('displayTypeIngredient4').innerHTML = document.Recepten.TypeIngredient4.value;
		document.getElementById('displayingredienthoeveelheid4').innerHTML = document.Recepten.ingredienthoeveelheid4.value;
		document.getElementById('displayingredient5').innerHTML = document.Recepten.ingredient5.value;
		document.getElementById('displayTypeIngredient5').innerHTML = document.Recepten.TypeIngredient5.value;
		document.getElementById('displayingredienthoeveelheid5').innerHTML = document.Recepten.ingredienthoeveelheid5.value;
		document.getElementById('displayingredient6').innerHTML = document.Recepten.ingredient6.value;
		document.getElementById('displayTypeIngredient6').innerHTML = document.Recepten.TypeIngredient6.value;
		document.getElementById('displayingredienthoeveelheid6').innerHTML = document.Recepten.ingredienthoeveelheid6.value;
		document.getElementById('displaybereidingswijze').innerHTML = document.Recepten.bereidingswijze.value;
	}

document.addEventListener("click", SecondArticle);
function SecondArticle() {
      document.getElementById("par").innerHTML = "Op deze website heb ik mijn grootste favoriete recepten genoteerd. Ik wens je veel leesplezier en hoop dat je aan het eind met het formulier een nieuw recept instuurt.";
}
