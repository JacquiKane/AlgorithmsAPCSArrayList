var imagesAll = new Array();

var progressionAll = ["Start with an unsorted list. Iteratively progress to a sorted list, using Selection Sort.<br>",
    "Assume element at index 0 is the minimum. Iterate through the rest of the list, <br>resetting the <i>assumed minimum</i> to a lower value, if found.",
    "17 is less than 19, the new <i>assumed minimum</i> is 17.<br>",
    "nums at index 2 is 5, which is less than 17. Now 5 is the new <i>assumed minimum</i>.<br>",
    "5 is less than nums at index 3, 5 is still the assumed minimum<br>",
    "5 is greater than nums at index 4, so now the new assumed minimum is 1<br>",
    "1 is less than nums at index 5, so 1 stays the assumed minimum<br>",
    "1 is less than nums at index 6, 1 is still the assumed minimum<br>",
    "Now the end of the list has been reached, and 1 is still the assumed minimum.<br>",
    "nums at index 0 swaps with nums at index 4.<br>1 is the real minimum value and belongs at the start of the list.",
    "After the first pass though, the ArrayList instance looks like this.<br>Now we iterate through the list again, this time starting with nums at index 1.",
    "2 is the lowest value in the reminder of the ArrayList, <br>nums at index 1 swaps with nums at index 7",
    "After the second pass, the ArrayList looks like this. <br>Sstart with nums at index 2, and get the smallest element in the rest of the list.",
    "swap nums at index 2 ...<br>with nums at index 2!",
    "The ArrayList has not changed, this is it after the third pass.<br>Start with nums at index 3, find the minimum value in the rest of the list and ...",
    "swap with nums at index 3.<br>",
    "This is the ArrayList after the fourth pass. Now we go through the process again, <br>starting with nums at index 4, which has a value of 19.",
    "nums at index 4 swaps with nums at index 7.<br>",
    "This is nums after the fifth pass, and now the first five elements are sorted.<br>Starting with nums at index 5, go through the process again.",
    "swap<br>",
    "This is the ArrayList after the sixth pass ...<br>Start again with nums at index 6, <br>",
    "which swaps with itself.   <br>",
    "The ArrayList after the seventh pass, almost officially sorted.<br>We start with nums at index 7 ...",
    "swap with itself,<br>",
    "Now the ArrayList is sorted.<br>"
];

for (i = 0; i < 25; i++) {
    imagesAll[i] = new Image();
    imagesAll[i].src = 'images/alselsort' + i + '.png';
}

var counter = 0;

function rotate() {
    document.getElementById('array').src = imagesAll[counter].src;
    document.getElementById('progress').innerHTML = progressionAll[counter];
    counter = (counter + 1) % imagesAll.length;

    setTimeout('rotate()', 6000);
}

window.addEventListener('load', rotate);