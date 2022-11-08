import {getRectanglePerimeter} from "../js/rectangle.js";


test('should properly output rectangle perimeter', () => {
    const rectanglePerimeter = getRectanglePerimeter(9, 4);
    expect(rectanglePerimeter).toBe(26);
});
