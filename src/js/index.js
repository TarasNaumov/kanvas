const burgerMenuButton = document.querySelector(".burger_button")
let menu = document.querySelector('.menu');

burgerMenuButton.onclick = burgerMenu
function burgerMenu() {
    burgerMenuButton.classList.toggle('active')
    menu.classList.toggle('active');
}

const customeSizeMenu = document.querySelector(".custom_size");
const canvas = document.querySelector(".canvas");
customeSizeMenu.style.display = "none";

function appearanceCustomeSize() {
    const containerHeight = document.querySelector('.easel_bg').clientHeight;
    if (customeSizeMenu.style.display == "none") {
        customeSizeMenu.style.display = "flex";
    } else if (customeSizeMenu.style.display == "flex") {
        size30x30.checked = true;
        const maxDimension = containerHeight * 0.6;
        const scaleFactor = maxDimension / 150;
        customeSizeMenu.style.display = "none";
        currentWidth = 30
        currentHeight = 30
        canvas.style.width = currentWidth * scaleFactor + "px";
        canvas.style.height = currentHeight * scaleFactor + "px";
        calculatePrice(currentWidth, currentHeight);
    }
}


const size30x30 = document.getElementById("size30x30");
const size30x90 = document.getElementById("size30x90");
const size90x120 = document.getElementById("size90x120");
const size90x150 = document.getElementById("size90x150");

size30x30.onchange = checkSize
size30x90.onchange = checkSize
size90x120.onchange = checkSize
size90x150.onchange = checkSize

let currentWidth = 30;
let currentHeight = 30;

function checkSize() {
    const containerHeight = document.querySelector('.easel_bg').clientHeight;
    widthRatio.style.border = "2px solid #4c7792";
    heightRatio.style.border = "2px solid #4c7792";
    widthRatio.value = "";
    heightRatio.value = "";
    const maxDimension = containerHeight * 0.6;
    const scaleFactor = maxDimension / 150;

    if (size30x30.checked) {
        currentWidth = 30;
        currentHeight = 30;
    } else if (size30x90.checked) {
        currentWidth = 30;
        currentHeight = 90;
    } else if (size90x120.checked) {
        currentWidth = 90;
        currentHeight = 120;
    } else if (size90x150.checked) {
        currentWidth = 90;
        currentHeight = 150;
    }

    canvas.style.width = currentWidth * scaleFactor + "px";
    canvas.style.height = currentHeight * scaleFactor + "px";
    calculatePrice(currentWidth, currentHeight);
}

const widthRatio = document.getElementById('width');
const heightRatio = document.getElementById('height');
const customeAlert = document.querySelector(".alert");
const errorText = document.querySelector(".errorText");
const errorTime = document.querySelector(".timeLine");

function calculateDimensions() {
    size30x30.checked = false;
    size30x90.checked = false;
    size90x120.checked = false;
    size90x150.checked = false;

    widthRatio.value = widthRatio.value - (widthRatio.value % 10);
    heightRatio.value = heightRatio.value - (heightRatio.value % 10);

    try {
        if (widthRatio.value == "") {
            throw "Заповніть поле з шириною";
        } else if (widthRatio.value < 20 || widthRatio.value > 150 || isNaN(widthRatio.value)) {
            throw "В строці ширина використовуйте числа від 20 до 150";
        } else if (heightRatio.value == "") {
            throw "Заповніть поле з висотою";
        } else if (heightRatio.value < 20 || heightRatio.value > 150 || isNaN(heightRatio.value)) {
            throw "В строці висота використовуйте числа від 20 до 150";
        }
    } catch (err) {
        errorText.innerHTML = err;
        startPosition();
    } finally {
        if (widthRatio.value == "") {
            widthRatio.style.border = "2px solid red";
        } else if (heightRatio.value == "") {
            heightRatio.style.border = "2px solid red";
        } else if (widthRatio.value < 20 || widthRatio.value > 150 || isNaN(widthRatio.value)) {
            widthRatio.style.border = "2px solid red";
        } else if (heightRatio.value < 20 || heightRatio.value > 150 || isNaN(heightRatio.value)) {
            heightRatio.style.border = "2px solid red";
        } else {
            const containerHeight = document.querySelector('.easel_bg').clientHeight;
            const maxDimension = containerHeight * 0.6;
            const scaleFactor = maxDimension / 150;
            widthRatio.value = widthRatio.value - (widthRatio.value % 10);
            heightRatio.value = heightRatio.value - (heightRatio.value % 10);
            currentWidth = widthRatio.value;
            currentHeight = heightRatio.value;
            widthRatio.style.border = "2px solid #4c7792";
            heightRatio.style.border = "2px solid #4c7792";
            canvas.style.width = widthRatio.value * scaleFactor + "px";
            canvas.style.height = heightRatio.value * scaleFactor + "px";
            calculatePrice(currentWidth, currentHeight);
        }
    }
}

function startPosition() {
    errorTime.style.transition = 0 + "s";
    errorTime.style.transition = 5 + "s";
    customeAlert.style.right = 20 + "px";
    errorTime.style.width = 0;
    setTimeout(() => {
        customeAlert.style.right = -100 + "%";
        errorTime.style.width = 100 + "%";
    }, 5000);
}

let moreExpensiveCanvas = document.querySelector("#moreExpensiveCanvas");
moreExpensiveCanvas.onchange = () => {
    calculatePrice(currentWidth, currentHeight);
}
let withFrame = document.querySelector("#withFrame");
withFrame.onchange = () => {
    calculatePrice(currentWidth, currentHeight);
}
let newPost = document.querySelector("#newPost");
newPost.onchange = () => {
    calculatePrice(currentWidth, currentHeight);
}

const pricePerSquareCm = 0.1;

function calculatePrice(width, height) {
    const area = width * height;
    let price = area * pricePerSquareCm;
    if (moreExpensiveCanvas.checked) {
        price += 35;
    }
    if (withFrame.checked) {
        price += 10;
    }
    if (newPost.checked) {
        price += 40;
    }
    document.querySelector('.total_price').innerHTML = price;
    if (document.querySelector('.total_price').innerHTML.length == 4) {
        document.querySelector('.total_price').style.fontSize = 40 + "rem"
        document.querySelector('.total_price_p span').style.fontSize = 20 + "rem"
    } else {
        document.querySelector('.total_price').style.fontSize = 48 + "rem"
        document.querySelector('.total_price_p span').style.fontSize = 24 + "rem"
    }
}

checkSize()
window.addEventListener('resize', checkSize)

let cellPopup = document.querySelector(".cell_popup")
function cell_popup() {
    if (cellPopup.style.display == "flex") {
        cellPopup.style.display = "none"
    } else {
        cellPopup.style.display = "flex"
    }
}

let phoneError = document.querySelector(".phoneError")

function validatePhoneNumber(phone) {
    console.log(phone);
    const cleanedPhone = phone.replace(/\D/g, '');
    const hasCountryCode = phone.startsWith('+');
    const localDigitsRegex = /^\d{10}$/;
    const internationalDigitsRegex = /^\d{11,12}$/;

    if (hasCountryCode) {
        if (!internationalDigitsRegex.test(cleanedPhone)) {
            return false;
        }
    } else {
        if (!localDigitsRegex.test(cleanedPhone)) {
            return false;
        }
    }
    
    const formatRegex = /^[+\d\s().-]*$/;
    const parenRegex = /^\+?\d*\s*(\(\d+\))?\s*\d+[\d\s().-]*$/;
    const balancedParenRegex = /^([^()]*\([^()]*\))*[^()]*$/;
    
    if (!formatRegex.test(phone) || !parenRegex.test(phone) || !balancedParenRegex.test(phone)) {
        return false;
    }
    
    return true;
}

function phoneCheck() {
    const phone = document.querySelector(".phoneNumber").value
    if (validatePhoneNumber(phone)) {
        console.log("true");
        phoneError.style.color  = "#00aa17"
        phoneError.innerText = "Все ок через деякий час ми зателефонуємо вам"
    } else {
        console.log("falce");
        phoneError.style.color  = "#aa0017"
        phoneError.innerText = "Введений номер не є коректним повторіть спробу"

    }
}