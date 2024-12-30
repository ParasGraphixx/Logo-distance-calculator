// Function to calculate logo width based on height and product dimension
function calculateDimensions() {
    // Given proportions for the logo
    const heightRatio = 6.5;
    const widthRatio = 47.55;

    // Get the entered logo height and product dimension
    const logoHeight = parseFloat(document.getElementById("logoHeight").value);
    const productDimension = parseFloat(document.getElementById("productDimension").value);

    // Calculate the logo width proportionately
    if (!isNaN(logoHeight) && logoHeight > 0) {
        const logoWidth = (logoHeight * widthRatio) / heightRatio;
        document.getElementById("logoWidth").value = logoWidth.toFixed(2);  // Set calculated width

        // Calculate the logo distance from edge using the formula
        if (!isNaN(productDimension) && productDimension > 0) {
            const x = productDimension - logoWidth;
            const y = x / 2;
            const z = y * 0.2;

            // Display the calculated z value
            document.getElementById("logoDistance").innerText = `Logo distance from edge: ${z.toFixed(2)} mm`;
        } else {
            document.getElementById("logoDistance").innerText = "";  // Clear text if product dimension is invalid
        }
    } else {
        document.getElementById("logoWidth").value = "";  // Clear width if input is invalid
        document.getElementById("logoDistance").innerText = "";  // Clear logo distance
    }
}
