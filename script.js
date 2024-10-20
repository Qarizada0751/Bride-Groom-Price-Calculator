// Initial starting price
const basePrice = 100;

// Function to calculate the bride/groom price
function calculatePrice() {
    let price = basePrice;

    // Get education value
    const education = parseFloat(document.getElementById("education").value);
    price *= education;

    // Get family net worth value
    const netWorth = parseFloat(document.getElementById("netWorth").value);
    price *= netWorth;

    // Get caste value
    const caste = parseFloat(document.getElementById("caste").value);
    price += caste;

    // Get skill bonuses
    if (document.getElementById("instrument").checked) {
        price += parseFloat(document.getElementById("instrument").value);
    }
    if (document.getElementById("cook").checked) {
        price += parseFloat(document.getElementById("cook").value);
    }
    if (document.getElementById("easygoing").checked) {
        price += parseFloat(document.getElementById("easygoing").value);
    }
    if (document.getElementById("sing").checked) {
        price += parseFloat(document.getElementById("sing").value);
    }

    // Get age multiplier
    const age = parseFloat(document.querySelector('input[name="age"]:checked').value);
    price *= age;

    // Get reputation modifiers
    if (document.getElementById("gossipParents").checked) {
        price *= parseFloat(document.getElementById("gossipParents").value);
    }
    if (document.getElementById("gossipCharacter").checked) {
        price *= parseFloat(document.getElementById("gossipCharacter").value);
    }
    if (document.getElementById("generalGossip").checked) {
        price += parseFloat(document.getElementById("generalGossip").value);
    }

    // Display the result
    document.getElementById("result").innerText = `The final bride/groom price is: $${price.toFixed(2)}`;

    // Change result color for better visualization
    document.getElementById("result").style.color = "blue";
}

// Event listener for button click
document.getElementById("calculateButton").addEventListener("click", calculatePrice);
