let form = document.getElementById("form");
let nameInput = document.getElementById("nameInput");
let nameErrorMag = document.getElementById("nameErrorMag");
let emailInput = document.getElementById("emailInput");
let emailErrorMsg = document.getElementById("emailErrorMsg");
let textareaInput = document.getElementById("textareaInput");
let textareaErrorMsg = document.getElementById("textareaErrorMsg");
let submitBtn = document.getElementById("submitBtn");
let greenTick = document.getElementById("greenTick");
let formContainer = document.getElementById("formContainer");

// localStorage.clear();

// validations
function nameValidation() {
    if (nameInput.value === "") {
        nameErrorMag.textContent = "*Required";
    } else {
        nameErrorMag.textContent = "";
    }
}

function emailValidation() {
    if (emailInput.value === "") {
        emailErrorMsg.textContent = "*Required";
    } else if (!((emailInput.value).endsWith("@gmail.com"))) {
        emailErrorMsg.textContent = "Email Must Ends With @gmail.com";
    } else {
        emailErrorMsg.textContent = "";
    }
}

function textareaValidation() {
    if (textareaInput.value === "") {
        textareaErrorMsg.textContent = "*Required";
        textareaErrorMsg.style.marginRight = "20px";
    } else {
        textareaErrorMsg.textContent = "";
    }
}


nameInput.addEventListener("blur", function() {
    nameValidation();
});
emailInput.addEventListener("blur", function() {
    emailValidation();
});
textareaInput.addEventListener("blur", function() {
    textareaValidation();
})




// store in local storage 

let newObj = [];

function saveDetails() {
    let newObj = getDetails();
    localStorage.setItem("newObj", JSON.stringify(newObj));
}

function getDetails() {
    let parsedData = localStorage.getItem("newObj");
    let newObj = JSON.parse(parsedData);
    if (newObj === null) {
        return newObj = []
    } else {
        return newObj;
    }

}


form.addEventListener("submit", function(event) {
    event.preventDefault();
    // nameValidation();
    // emailValidation();
    // textareaValidation();

});


submitBtn.addEventListener("click", function() {
    nameValidation();
    emailValidation();
    textareaValidation();
    if (!((nameInput.value === "") || (emailInput.value === "") || (textareaInput.value === ""))) {
        greenTick.classList.remove("d-none");
        formContainer.classList.add("d-none");

        let data = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            message: textareaInput.value.trim()
        };
        let newObj = getDetails();
        newObj.push(data);
        localStorage.setItem("newObj", JSON.stringify(newObj));
        saveDetails();
    }
});



function toGetDetails() {
    let details = JSON.parse(localStorage.getItem("newObj"));
    if (details === null) {
        console.log("No messages");
    } else {
        for (let eachData of details) {
            let {
                name,
                email,
                message
            } = eachData;
            console.log(`${name} : ${message}`);
        }
    }

}

toGetDetails();