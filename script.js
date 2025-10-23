 const getSumBtn = document.createElement("button");
        getSumBtn.append("Get Total Price");
        document.body.appendChild(getSumBtn);

        // Function to calculate the total price
        const getSum = () => {
            // Get all price elements from the table
            const prices = document.querySelectorAll('.price');
            
            let totalPrice = 0;

            // Loop through each price element, parse it to a number and add to total
            prices.forEach(price => {
                totalPrice += parseFloat(price.textContent); // Parsing the price to float
            });

            // Create a new row for displaying the total price
            const table = document.querySelector('table');
            const totalRow = document.createElement('tr');
            const totalCell = document.createElement('td');

            // Set the colspan to 2 to make the cell span across both columns
            totalCell.setAttribute('colspan', 2);
            totalCell.textContent = `Total: ₹${totalPrice}`; // Display total with ₹ symbol

            // Append the total cell to the new row and then add the row to the table
            totalRow.appendChild(totalCell);
            table.appendChild(totalRow);
        };

        // Add event listener to the button to trigger the total calculation
        getSumBtn.addEventListener("click", getSum);
getSumBtn.addEventListener("click", getSum);

