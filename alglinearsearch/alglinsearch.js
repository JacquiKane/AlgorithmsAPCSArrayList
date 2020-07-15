var imagesAll = new Array();
var progressionAll = ["Looking for a value of 27, using the Linear Search algorithm",
    "nums at index 0 does not have a value of 27, so next element ...",
    "nums at index 1 is not the target either. Move to next element",
    "Still no match, with nums at index 2. Next element",
    "nums at index 3 is not the target. Next element",
    "nums at index 4 is still not a match for 27. Move to next element",
    "nums at index 5 matches the target of the search!"

];
for (i = 0; i < 7; i++) {
    imagesAll[i] = new Image();
    imagesAll[i].src = 'images/linsearchal' + i + '.png';
}

var counter = 0;

function rotate() {

    document.getElementById('array').src = imagesAll[counter].src;
    document.getElementById('progress').innerText = progressionAll[counter];
    counter = (counter + 1) % imagesAll.length;
    setTimeout('rotate()', 4000);
}

window.addEventListener('load', rotate);