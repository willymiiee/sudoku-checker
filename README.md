# Sudoku Checker App

## Description

This is a simple app built using NodeJS that checks the sudoku data that users input.

## Explanation

This app contains 2 javascript files:
- `app.js` that handles the interface (checking users' input, displaying question & response)
- `sudoku.js` that plays as a core (init & validating the data)

First, users' input is converted into an array, whitespaces removed and length checked whether the data is valid enough to be considered as 9x9 sudoku. After that, it creates a `sudoku` object and makes the array as it's parameter. The array is converted again into a 9x9 multidimentional array. From that, we can check if its a valid sudoku or not.
