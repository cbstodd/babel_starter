var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];

let areas = [];

images.forEach(image => {
    let height = image.height;
    let width = image.width;
    let total = height * width;
    areas.push(total);
});

console.log(areas);