//var rect = {
//    perimeter: (x, y) => (2 * (x + y)),
//    area : (x,y) => (x*y)
//}
//function solveReact(l, b) {
//    console.log(rect.area(l, b));
//    console.log(rect.perimeter(l, b));

//}

//solveReact(2, 3);
//solveReact(0.6);
module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0)
        setTimeout(() =>
            callback(new Error("Rectangle dimensions should be greater than zero: l = "
                + x + ", and b = " + y),
            null),
            2000);
    else
        setTimeout(() =>
            callback(null, {
                perimeter: () => (2 * (x + y)),
                area: () => (x * y)
            }),
            2000);
}