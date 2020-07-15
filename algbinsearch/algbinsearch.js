var imagesAll = new Array();
var progressionAll = ["Remember ... <br>The ArrayList instance must be sorted for the Binary Search algorithm to work.",
    "low is 0, high is 7. mid value is (low + high)/2. This is integer division, and has a value of 3. <br>The value at index 3 is the starting comparison",
    "9 is not equal to target, it is less. low is recalibrated to be the mid value, plus 1. This is 4.<br>The new mid value is (low + high)/2, which is 5 ",
    "The target matches the mid value ...<br> so the target has been found."
];
for (i = 0; i < 4; i++) {
    imagesAll[i] = new Image();
    imagesAll[i].src = 'images/binsearchal' + i + '.png';
}

var counter = 0;

function rotate() {

    document.getElementById('array').src = imagesAll[counter].src;
    document.getElementById('progress').innerHTML = progressionAll[counter];
    counter = (counter + 1) % imagesAll.length;
    setTimeout('rotate()', 6000);
}

window.addEventListener('load', rotate);