//HARD: Given the information below for Tom and Jerry. 

// Tom - height:  9in   mass: 8 g
// Jerry - height: 10in mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:

//     BMI = mass / height ^2 = mass / (height * height)

// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

const heightTom = 9;
const massTom = 8;
const heightJerry = 10;
const massJerry = 45;

const BMITom = (massTom/heightTom) **2;
const BMIJerry = (massJerry/heightJerry) **2; 
const BMIJerryIsHigher = (BMIJerry > BMITom);
console.log(BMITom, BMIJerry);
console.log(`Is Jerry's BMI higher than Tom's? ${BMIJerryIsHigher}`);


if (BMITom > BMIJerry){
    console.log('Toms BMI is higher');
} else if (BMIJerry > BMITom){
    console.log( "Jerry's BMI is higher than Toms");
}