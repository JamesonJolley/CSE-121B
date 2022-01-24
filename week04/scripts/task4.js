/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let me= {
    


// Step 2: Inside of the object, add a property named name with a value of your name as a string
  name:'jameson',


// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
  img:'../W02 Tasks/Ponder and Prove: Week 2/images/placeholder.png',

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
  favoriteFoods:['ramen','pho','shellfish'],

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
  hobbies:['swimming','programming','reading'],

// Step 6: Add another property named placesLived with a value of an empty array
  placesLived:[
    {place:'grantsville','length':'14y'},
    {place:'carlsbad','length':'6m'},
  ]
}
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').value = me 
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').src = me.img
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').alt = me.name
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
me.favoriteFoods.forEach(function(food){
let e = document.createElement('li')
e.textContent= food
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector('#favorite-foods').appendChild(e)
})
// Step 6: Repeat Step 4 for each hobby in the hobbies property
me.hobbies.forEach(function(h){
let e = document.createElement('li')
e.textContent = h
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
document.querySelector('#hobbies').appendChild(e)
})


// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

me.placesLived.forEach((placeLived) => {
  let placesLivedPlace = document.createElement('dt');
  placesLivedPlace.textContent = placeLived.place;
  
  let placesLivedLength = document.createElement('dd');
  placesLivedLength.textContent = placeLived.length;
  
  
  document.querySelector('#places-lived').appendChild(placesLivedPlace);
  document.querySelector('#places-lived').appendChild(placesLivedLength);
})



// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
