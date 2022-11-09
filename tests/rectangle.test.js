import {getRectangleArea, getRectanglePerimeter} from "../js/rectangle.js";


test('should properly output rectangle perimeter', () => {
    const rectanglePerimeter = getRectanglePerimeter(9, 4);
    expect(rectanglePerimeter).toBe(26);
});

test('should properly output rectangle area', () => {
    const rectangleArea = getRectangleArea(9, 4);
    expect(rectangleArea).toBe(36);

});
