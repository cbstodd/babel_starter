"use strict";

var images = [{ height: 10, width: 30 }, { height: 20, width: 90 }, { height: 54, width: 32 }];

var areas = [];

images.forEach(function (image) {
    var height = image.height;
    var width = image.width;
    var total = height * width;
    areas.push(total);
});

console.log(areas);