const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

const image_file_indices = [1, 2, 3, 4, 5];

//const newImage = document.createElement('img');
image_file_indices.forEach((element) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + element + '.jpg');
    thumbBar.appendChild(newImage);
})

const heading1 = document.querySelector("h1");
const heading2 = document.createElement("h2");
heading1.innerHTML = 'Ruiqi Lai and Nicholas Stewart';
heading2.innerHTML = 'Image Gallery';


/* Wiring up the Darken/Lighten button */
