var imagesAll = new Array();
var progressionAll = ["Average = Sum Of Values / nums.size()",
    "nums.get(0) is 19, total + nums.get(0) is 19",
    "nums.get(1) is 17, total + nums.get(1) is 36",
    "nums.get(2) is 5, total + nums.get(2) is 41",
    "nums.get(3) is 23, total + nums.get(3) is 64",
    "nums.get(4) is 1, total + nums.get(4) is 65",
    "nums.get(5) is 27, total + nums.get(5) is 92",
    "nums.get(6) is 9, total + nums.get(6) is 101",
    "nums.get(7) is 2, total + nums.get(7) is 103",
    "Average is 103/nums.size(), 12.875 "
];

for (i = 0; i < 10; i++) {
    imagesAll[i] = new Image();
    imagesAll[i].src = 'images/avgal' + i + '.png';
}

var counter = 0;

function rotate() {

    document.getElementById('array').src = imagesAll[counter].src;
    document.getElementById('progress').innerText = progressionAll[counter];
    counter = (counter + 1) % imagesAll.length;
    setTimeout('rotate()', 3000);
}

window.addEventListener('load', rotate);