// Select all elements with the class "price"
const priceCells = document.querySelectorAll(".price");

// Initialize total sum
let total = 0;

// Loop through each price cell and add its value to the total
priceCells.forEach(cell => {
    total += parseFloat(cell.textContent); // Convert text to number
});

// Get reference to the table
const table = document.querySelector("table");

// Create a new table row
const totalRow = document.createElement("tr");

// Create a single cell that spans both columns
const totalCell = document.createElement("td");
totalCell.colSpan = 2; // Merge both columns
totalCell.textContent = "Total Price: Rs " + total;

// Add the new cell to the new row
totalRow.appendChild(totalCell);

// Append the new row to the table
table.appendChild(totalRow);
