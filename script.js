
            // Array containing file names of images
            var images = [
                "files/images/x02.png",
                "files/images/errwekugwer.png",
                "files/images/hsrsfrthsrth.png",
                "files/images/IMG_20161101_113139.jpg",
                "files/images/sfrthrth.jpg",
                "files/images/SmilingInTheBusToNidaArtColony_out.png",
                "files/images/wryty7io0(1920).png"
                // Add paths to your other images here
            ];
    
            // Function to shuffle an array
            function shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            }
    
            // Function to create image elements and append them to the container
            function createImages() {
                var shuffledImages = shuffleArray(images.slice()); // Copy and shuffle the images array
                var container = document.getElementById("imageContainer");
                shuffledImages.forEach(function(imageSrc) {
                    var img = document.createElement("img");
                    img.src = imageSrc;
                    container.appendChild(img);
                });
            }
    
            // Call the function to create and display the images when the page loads
            createImages();