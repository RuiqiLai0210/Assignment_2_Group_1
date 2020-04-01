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
//image_file_indices.forEach(element => console.log(element));
//thumbBar.appendChild(newImage)

/* Wiring up the Darken/Lighten button */
