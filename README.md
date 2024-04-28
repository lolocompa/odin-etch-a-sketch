# Odin Etch-A-Sketch

This project is a simple web-based version of the classic Etch-A-Sketch toy. It allows users to draw pixel art by moving their mouse over a grid of squares that change color upon hover. Additionally, users can change the size of the grid to create more detailed drawings or to reset their canvas.

## Features

- **Dynamic Grid**: Users can create a grid of squares of any size by entering a number when prompted. This allows for customization of the drawing area to suit the user's preferences.
- **Drawing**: By hovering the mouse over the squares, they change color to black, allowing users to draw pixel art.
- **Reset and Resize**: The grid can be reset and resized at any time by clicking the "change grid" button and entering a new grid size.

## How to Use

1. Open the `index.html` file in a web browser to start the application.
2. Move your mouse over the grid to start drawing.
3. To change the grid size, click the "change grid" button and enter a number when prompted. This number will determine the number of squares per side in the grid.

## Implementation Details

The project is implemented using HTML, CSS, and JavaScript. The main logic is contained within the `etch.js` file, which handles the creation of the grid, drawing functionality, and grid resizing.

### Key JavaScript Functions

- **Grid Creation**: Initially, a 16x16 grid (256 squares) is created using a for loop that appends `div` elements to the container.
- **Drawing**: An event listener is added to each grid square that changes its background color to black when the mouse enters it.
- **Grid Resizing**: The grid can be resized by entering a new size, which clears the existing grid and creates a new one based on the input size. The size of each square is adjusted accordingly to fit the container.

## Project Structure
- index.html: The HTML file that contains the structure of the web application.
- styles.css: The CSS file that contains the styling for the application.
- etch.js: The JavaScript file that contains the logic for grid creation, drawing, and resizing.
## Conclusion
This Odin Etch-A-Sketch project is a fun and simple way to create pixel art in your browser. It demonstrates basic web development concepts such as DOM manipulation, event handling, and dynamic CSS styling.

Feel free to clone the repository and try it out for yourself!
