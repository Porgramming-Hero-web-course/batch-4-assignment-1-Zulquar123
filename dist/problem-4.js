"use strict";
{
    function calculateShapeArea(shape) {
        if (shape.shape === "circle") {
            return parseFloat((Math.PI * shape.radius ** 2).toFixed(2));
        }
        else if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        }
        throw new Error("Unknown and Invalid shape");
    }
    // Area of Circle.
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea); // 78.54
    // Area Of Rectangle.
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(rectangleArea); // 24
}
