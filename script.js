document.getElementById('myButton').addEventListener('click', function() {
    const bearContainer = document.getElementById('bearContainer');
    
    // Check if the bear image already exists
    let bearImage = document.getElementById('bearImage');
    if (!bearImage) {
        // Create a new image element
        bearImage = document.createElement('img');
        bearImage.id = 'bearImage';
        bearImage.src = '/Users/alisabanci/Desktop/firstApp/Bear_PNG_Clip_Art-1476.png'; // Replace with the URL of your bear image
        bearContainer.appendChild(bearImage);
    }
    
    // Toggle the bear image visibility
    if (bearImage.style.display === 'none' || bearImage.style.display === '') {
        bearImage.style.display = 'block';
    } else {
        bearImage.style.display = 'none';
    }
});
