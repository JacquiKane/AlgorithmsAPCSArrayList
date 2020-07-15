var imagesAll = new Array();
var progressionAll = ["Assume the first element is in a sorted list. \r\n\r\n",
    "nums at index 1 is 17, which is less than 19.\r\n 17 is inserted before 19 in the ArrayList.\r\n",
    "17 and 19 are in the sorted part of the ArrayList. \r\nThe next element, nums at index 2, is 5, which is less than 19, and less than 17\r\n",
    "See how the blue dashed line divides the sorted part, from the unsorted part.\r\nnums at index 3 is 23 - where should this be inserted?\r\n",
    "23 is greater than 19, and is inserted at the end of the sorted part of the ArrayList.\r\nNow, nums at index 4 is 1, and should be inserted before 5.\r\n",
    "Now the first 5 elements are sorted. \r\nnums at index 5 should follow nums at index 4, as 23 is less than 27.",
    "nums at index 6 has a value of 9, which should be inserted between 5 and 17.\r\n\r\n",
    "The last element has a value of 2, which is inserted after the first element.\r\nNote how the ArrayList elements shift in the sorting process.\r\n",
    "Now all of the ArrayList is sorted in ascending order.\r\n\r\n"
];
for (i = 0; i < 9; i++) {
    imagesAll[i] = new Image();
    imagesAll[i].src = 'images/insertsortal' + i + '.png';
}

var counter = 0;

function rotate() {

    document.getElementById('array').src = imagesAll[counter].src;
    document.getElementById('progress').innerText = progressionAll[counter];
    counter = (counter + 1) % imagesAll.length;
    setTimeout('rotate()', 6000);
}

window.addEventListener('load', rotate);