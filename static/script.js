const search = document.getElementById("searchBike");

if(search){

search.addEventListener("keyup",()=>{

let value=search.value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let bike=card.querySelector("h2").textContent.toLowerCase();

if(bike.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}
