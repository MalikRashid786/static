// Show Images on Image Button
const profileUploaderBtn = document.querySelector(".profile_uploader-btn");
const profiteInputButton = document.querySelector(".profile_input-button");
const profileImage = document.querySelector(".profile_image");

profileUploaderBtn.addEventListener("click", () => {
    profiteInputButton.click();
});

profiteInputButton.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            const result = reader.result;
            profileImage.src = result;
        };
        reader.readAsDataURL(file);
    }
});

// validation
let select_scene = document.getElementById("select_scene");
let user_name = document.getElementById("name");
let surname = document.getElementById("surname");
let age = document.getElementById("age");
let city = document.getElementById("city");
let email = document.getElementById("email");
let checkbox = document.getElementById("validationFormCheck1");

// let pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
var pattern = /^[A-Za-z\s]+$/;
// let mailformat =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let mailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function form_validate() {
    var flag = validate();
    if (flag) {
        generateImage();
    }
}

//Live form validation
user_name.addEventListener("keyup", function (e) {
    if (user_name.value.match(pattern) && user_name.value.trim() != "") {
        user_name.style.border = "3px solid #14A44D";
    } else {
        user_name.style.border = "3px solid #DC4C64";
    }
});

surname.addEventListener("keyup", function (e) {
    if (surname.value.match(pattern) && surname.value.trim() != "") {
        surname.style.border = "3px solid #14A44D";
    } else {
        surname.style.border = "3px solid #DC4C64";
    }
});

age.addEventListener("keyup", function (e) {
    if ((age.value > 0 && age.value < 100) && age.value.length != 0) {
        age.style.border = "3px solid #14A44D";
    } else {
        age.style.border = "3px solid #DC4C64";
    }
});

city.addEventListener("keyup", function (e) {
    if (city.value.trim() != "") {
        city.style.border = "3px solid #14A44D";
    } else {
        city.style.border = "3px solid #DC4C64";
    }
});

email.addEventListener("keyup", function (e) {
    if (mailformat.test(email.value) && email.value.length != 0) {
        email.style.border = "3px solid #14A44D";
    } else {
        email.style.border = "3px solid #DC4C64";
    }
});
checkbox.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {
        document.getElementById("checkbox_label").style.color = "#14A44D";
    } else {
        document.getElementById("checkbox_label").style.color = "#DC4C64";
    }
});

select_scene.addEventListener("change", (event) => {
    if (select_scene.value != '') {
        select_scene.style.border = "3px solid #14A44D";
    } else {
        select_scene.style.border = "3px solid #DC4C64";
    }
});

// Form validation
function validate() {
    var status = true;
    var inputImage = document.getElementById("image");
    var files = inputImage.files;

    if (files.length === 0) {
        alert("Please choose a file first...");
        status = false;
    }

    if (select_scene.value === '') {
        select_scene.style.border = "3px solid #DC4C64";
        status = false;
    }

    if (!pattern.test(user_name.value) || user_name.value.trim() === "" || !/\S/.test(user_name.value)) {
        user_name.style.border = "3px solid #DC4C64";
        status = false;
    }
    if (!pattern.test(surname.value) || surname.value.trim() === "" || !/\S/.test(surname.value)) {
        surname.style.border = "3px solid #DC4C64";
        status = false;
    }
    if (age.value <= 0 || age.value >= 100) {
        age.style.border = "3px solid #DC4C64";
        status = false;
    }
    if (city.value.trim() === "" || !/\S/.test(city.value)) {
        city.style.border = "3px solid #DC4C64";
        status = false;
    }
    if (!mailformat.test(email.value)) {
        email.style.border = "3px solid #DC4C64";
        status = false;
    }
    if (!document.getElementById("validationFormCheck1").checked) {
        document.getElementById("checkbox_label").style.color = "#DC4C64";
        status = false;
    }
    return status;
}

var base64Image2 = "data:image/png;base64,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";

const loginPopup = document.querySelector(".popup");
const close = document.querySelector(".close");
var loading = document.getElementById("loading");
var display_error = document.getElementById("display_error");
var generats = document.getElementById("generats");
var ok_button = document.getElementById("ok_button");
// Close the popup
close.addEventListener("click", function () {
    loginPopup.classList.remove("show");
    // location.reload();
});

ok_button.addEventListener("click", function () {
    loginPopup.classList.remove("show");
    location.reload();
});

function myTimeoutFunction() {
    // for checkings
    loading.style.display = "none";
    generats.style.display = "block";
}
loginPopup.classList.add("show");
loading.style.display = "none";
generats.style.display = "block";
function generateImage() {
    // Get the input image file
    var gender = document.querySelector('input[name="gender"]:checked');

    var inputImage = document.getElementById("image").files[0];
    const profileImage = document.querySelector(".profile_image");

    // Set the image button icon on upload image area.
    profileImage.src = "/static/public/Upload Button.png";

    // Show the Popup
    loginPopup.classList.add("show");
    display_error.style.display = "none";

    setTimeout(() => myTimeoutFunction("Hello", "World"), 5000);

    // Create a FormData object to send the image to the server
    var formData = new FormData();
    formData.append("image", inputImage);

    formData.append("name", user_name.value);
    formData.append("surname", surname.value);
    formData.append("age", age.value);
    formData.append("city", city.value);
    formData.append("email", email.value);
    formData.append("gender", gender.value);

    formData.append("select", select_scene.value);

    // Send the image to the server for generation

    fetch("/generate", {
        method: "POST",
        body: formData,
    })
        .then((response) => response.json())
        .then(data => {
            // Remove loading indicator
            loading.style.display = "none";

            // Display the generated images
            var generatedImagesElement_1 = document.getElementById("generate_img_1");
            generatedImagesElement_1.innerHTML = "";

            // var generatedImagesElement_2 = document.getElementById("generate_img_2");
            // generatedImagesElement_2.innerHTML = "";

            if (data && data.success && data.data !== null) {
                generats.style.display = "block";

                // Create image elements
                var imageElement_1 = createImageElement("data:image/png;base64," + data.data[0]);
                // var imageElement_2 = createImageElement("data:image/png;base64," + data.data[1]);

                // Store image URLs
                window.img1 = imageElement_1.src;
                // window.img2 = imageElement_2.src;

                window.img1_url = data.data[1];
                // window.img2_url = data.data[3];

                // Append image elements to the DOM
                generatedImagesElement_1.appendChild(imageElement_1);
                // generatedImagesElement_2.appendChild(imageElement_2);
            } else {
                // Display error message
                display_error.style.display = "block";
                var errorMessage = document.createElement("p");
                errorMessage.textContent = data ? data.error : "Unexpected end of JSON input";
                console.error(errorMessage);
            }
        })
        .catch((error) => {
            // disappeared loading indicator
            // loading.style.display = "none";
            // display_error.style.display = "block";
            console.error("Error:", error);
        });

    // Reset form data
    resetForm();
}


function resetForm() {

    document.getElementById("generate_form").reset();
    // Resetting border color of all input fields on form reset

    document.getElementById("checkbox_label").style.color = "#fff"; // Resetin color of check boxe.
    select_scene.style.borderColor = ""; // Resetting border color of select input fields.
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type === 'text' || inputs[i].type === 'email' || inputs[i].type === 'checkbox' || inputs[i].type === 'number') {
            inputs[i].style.borderColor = "";
        }
    }
}

// Function to create an image element
function createImageElement(src) {
    var imageElement = document.createElement("img");
    imageElement.src = src;
    imageElement.style.width = "155px";
    imageElement.style.height = "155px";
    imageElement.classList.add("img-fluid");
    return imageElement;
}

// Download images
// function downloadImages() {
//     // Create a new JSZip instance
//     var zip = new JSZip();

//     // Add the first image to the zip file
//     zip.file("image1.png", base64toBlob(img1));

//     // Add the second image to the zip file
//     zip.file("image2.png", base64toBlob(img2));

//     // Generate the zip file
//     zip.generateAsync({ type: "blob" })
//         .then(function (blob) {
//             // Create a download link
//             var link = document.createElement("a");
//             link.href = URL.createObjectURL(blob);
//             link.download = "images.zip";

//             // Append the link to the body and click it
//             document.body.appendChild(link);
//             link.click();

//             // Remove the link from the DOM
//             document.body.removeChild(link);
//         })
//         .catch(function (error) {
//             console.error("Error generating zip file:", error);
//         });
// }

function downloadImage() {
    // Base64-encoded image string
    var base64Image = base64Image2;

    // Create a link element
    var downloadLink = document.createElement("a");

    // Set the href attribute with the Base64 image string
    downloadLink.href = base64Image;

    // Set the download attribute with the desired filename
    downloadLink.download = "image.png";

    // Append the link to the document
    document.body.appendChild(downloadLink);

    // Programmatically click the link to trigger the download
    downloadLink.click();

    // Remove the link from the document
    document.body.removeChild(downloadLink);
}



function getOS() {
    const userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
        macosPlatforms = ['macOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    let os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (/Linux/.test(platform)) {
        os = 'Linux';
    }

    return os;
}

const shButton = document.getElementById('shareButton');
shButton.addEventListener('click', async () => {
    try {
        const blob = await fetch(base64Image2).then(response => response.blob());
        const file = new File([blob], 'image.png', { type: 'image/png' });
        // Check if the Web Share API is supported by the browser
        if (navigator.canShare && navigator.canShare(file)) {
            if (getOS() === 'iOS') {
                await navigator.share({
                    files: [file],
                    text: "Well, aren't you a hottie! Share your results, with this link www.herbex.co.za, tag and follow us on Instagram @herbexhealth. A few lucky participants stand a chance to win a Herbex Hamper packed full of Herbex products to support your weight loss mission. Plus personalised advice and guidance from our dedicated Customer Relations Team ,,, https://herbex.co.za/",
                    url: 'https://herbex.co.za/',
                });
            } else {
                await navigator.share({
                    files: [file],
                    text: "Well, aren't you a hottie! Share your results, with this link www.herbex.co.za, tag and follow us on Instagram @herbexhealth. A few lucky participants stand a chance to win a Herbex Hamper packed full of Herbex products to support your weight loss mission. Plus personalised advice and guidance from our dedicated Customer Relations Team ,,, https://herbex.co.za/",
                    url: 'https://herbex.co.za/',
                });
            }
          } else {
    // Web Share API not supported, provide fallback
    alert('Sorry, your browser does not support the Share API or Your system does not support sharing these files.');
}
    } catch (error) {
    console.error('Error sharing image:', error);
}
});

// function dataURLtoBlob(dataURL) {
//     const parts = dataURL.split(';base64,');
//     const contentType = parts[0].split(':')[1];
//     const raw = window.atob(parts[1]);
//     const rawLength = raw.length;
//     const uInt8Array = new Uint8Array(rawLength);

//     for (let i = 0; i < rawLength; ++i) {
//         uInt8Array[i] = raw.charCodeAt(i);
//     }

//     return new Blob([uInt8Array], { type: contentType });
// }

// Share images
// const shareButton = document.getElementById('shareButton');
// Add click event listener to the share button
// shareButton.addEventListener('click', async () => {
//     try {
// Check if the navigator supports the Share API
// if (navigator.share) {
// Use the Share API to trigger the native sharing dialog
//     await navigator.share({
//         title: 'Share Image',
//         text: 'Check out this generated image!',
//         url: img1_url
//     });
// } else {
// Fallback for browsers that do not support the Share API
//             alert('Sorry, your browser does not support the Share API.');
//         }
//     } catch (error) {
//         console.error('Error sharing image:', error);
//     }
// });

// Share Popup 
// const section = document.querySelector(".share_popup"),
//     overlay = document.querySelector(".overlay"),
//     showBtn = document.querySelector(".show-modal");

// showBtn.addEventListener("click", () => section.classList.add("active"));

// overlay.addEventListener("click", () =>
//     section.classList.remove("active")
// );
