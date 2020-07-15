var imagesAll = new Array();
var progressionAll = ["nums at index 0 is 19 - start here and assume 19 is the minimum.",
    "nums at index 1 is 17, which is less than 19. 17 becomes the new minimum.",
    "nums at index 2 is 5. 5 is less than 17, and now becomes the new minimum.",
    "nums at index 3 is 23. 23 is not less than 5, so 5 stays the minimum.",
    "nums at index 4 is 1, which is less than 5. 1 is now the new minimum.",
    "nums at index 5 is 27, 27 is not less than 1, 1 stays the minimum.",
    "nums at index 6 is 9. 1 stays the minimum.",
    "nums at index 7 is 2, which is not less than the minimum - which is still 1",
    "1 stays the minimum."
];
for (i = 0; i < 9; i++) {
    imagesAll[i] = new Image();
    imagesAll[i].src = 'images/almin' + i + '.png';
}

var counter = 0;

function rotate() {
    document.getElementById('array').src = imagesAll[counter].src;
    document.getElementById('progress').innerText = progressionAll[counter];
    counter = (counter + 1) % imagesAll.length;

    setTimeout('rotate()', 4000);
}

window.addEventListener('load', rotate);