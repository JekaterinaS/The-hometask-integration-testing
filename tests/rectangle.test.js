import {getRectangleArea, getRectanglePerimeter, getRectangleInfo} from "../js/rectangle.js";


test('should properly output rectangle perimeter', () => {
    const rectanglePerimeter = getRectanglePerimeter(9, 4);
    expect(rectanglePerimeter).toBe(26);
});

test('should properly output rectangle area', () => {
    const rectangleArea = getRectangleArea(9, 4);
    expect(rectangleArea).toBe(36);
});

test('should properly output rectangle info', () => {
    const logSpy = jest.spyOn(console, 'log');
    getRectangleInfo(9,4)
    expect(logSpy).toHaveBeenCalledWith('The perimeter of a rectangle is 26 and the area is 36');

});
