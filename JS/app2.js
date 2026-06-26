// // //Obtain DOM with querySelector elements

// // //Obtain elements from id
// // console.log(document.querySelector("#nav"));
// // console.log(nav);

// // //Obtain elements from class
// // const elemntsC = document.querySelectorAll(".col");

// // console.log(elemntsC);

// // //obtain elements from tag
// // const elemntsT = document.querySelectorAll("li");

// // console.log(elemntsT);

// //Obtain DOM elements with getElement
// const nav = document.getElementById("nav");

// console.log(nav);

// const elementC = document.getElementsByClassName("col");

// console.log(elementC);

// const elementLi = document.getElementsByTagName("li");

// console.log(elementLi);

const socialMediaTitle = document.getElementById("socialMediaTitle");
const proyect1 = document.getElementById("proyect1");

socialMediaTitle.textContent = "Redes Sociales";
proyect1.innerHTML = "<h1>Proyect 1</h1>";
