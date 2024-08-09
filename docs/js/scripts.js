const burgerMenuButton=document.querySelector(".burger_button");let menu=document.querySelector(".menu");function burgerMenu(){burgerMenuButton.classList.toggle("active"),menu.classList.toggle("active")}burgerMenuButton.onclick=burgerMenu;const customeSizeMenu=document.querySelector(".custom_size"),canvas=document.querySelector(".canvas");function appearanceCustomeSize(){const e=document.querySelector(".easel_bg").clientHeight;if("none"==customeSizeMenu.style.display)customeSizeMenu.style.display="flex";else if("flex"==customeSizeMenu.style.display){size30x30.checked=!0;const t=.6*e/150;customeSizeMenu.style.display="none",currentWidth=30,currentHeight=30,canvas.style.width=currentWidth*t+"px",canvas.style.height=currentHeight*t+"px",calculatePrice(currentWidth,currentHeight)}}customeSizeMenu.style.display="none";const size30x30=document.getElementById("size30x30"),size30x90=document.getElementById("size30x90"),size90x120=document.getElementById("size90x120"),size90x150=document.getElementById("size90x150");size30x30.onchange=checkSize,size30x90.onchange=checkSize,size90x120.onchange=checkSize,size90x150.onchange=checkSize;let currentWidth=30,currentHeight=30;function checkSize(){const e=document.querySelector(".easel_bg").clientHeight;widthRatio.style.border="2px solid #4c7792",heightRatio.style.border="2px solid #4c7792",widthRatio.value="",heightRatio.value="";const t=.6*e/150;size30x30.checked?(currentWidth=30,currentHeight=30):size30x90.checked?(currentWidth=30,currentHeight=90):size90x120.checked?(currentWidth=90,currentHeight=120):size90x150.checked&&(currentWidth=90,currentHeight=150),canvas.style.width=currentWidth*t+"px",canvas.style.height=currentHeight*t+"px",calculatePrice(currentWidth,currentHeight)}const widthRatio=document.getElementById("width"),heightRatio=document.getElementById("height"),customeAlert=document.querySelector(".alert"),errorText=document.querySelector(".errorText"),errorTime=document.querySelector(".timeLine");function calculateDimensions(){size30x30.checked=!1,size30x90.checked=!1,size90x120.checked=!1,size90x150.checked=!1,widthRatio.value=widthRatio.value-widthRatio.value%10,heightRatio.value=heightRatio.value-heightRatio.value%10;try{if(""==widthRatio.value)throw"Заповніть поле з шириною";if(widthRatio.value<20||widthRatio.value>150||isNaN(widthRatio.value))throw"В строці ширина використовуйте числа від 20 до 150";if(""==heightRatio.value)throw"Заповніть поле з висотою";if(heightRatio.value<20||heightRatio.value>150||isNaN(heightRatio.value))throw"В строці висота використовуйте числа від 20 до 150"}catch(e){errorText.innerHTML=e,startPosition()}finally{if(""==widthRatio.value)widthRatio.style.border="2px solid red";else if(""==heightRatio.value)heightRatio.style.border="2px solid red";else if(widthRatio.value<20||widthRatio.value>150||isNaN(widthRatio.value))widthRatio.style.border="2px solid red";else if(heightRatio.value<20||heightRatio.value>150||isNaN(heightRatio.value))heightRatio.style.border="2px solid red";else{const e=.6*document.querySelector(".easel_bg").clientHeight/150;widthRatio.value=widthRatio.value-widthRatio.value%10,heightRatio.value=heightRatio.value-heightRatio.value%10,currentWidth=widthRatio.value,currentHeight=heightRatio.value,widthRatio.style.border="2px solid #4c7792",heightRatio.style.border="2px solid #4c7792",canvas.style.width=widthRatio.value*e+"px",canvas.style.height=heightRatio.value*e+"px",calculatePrice(currentWidth,currentHeight)}}}function startPosition(){errorTime.style.transition="0s",errorTime.style.transition="5s",customeAlert.style.right="20px",errorTime.style.width=0,setTimeout((()=>{customeAlert.style.right="-100%",errorTime.style.width="100%"}),5e3)}let moreExpensiveCanvas=document.querySelector("#moreExpensiveCanvas");moreExpensiveCanvas.onchange=()=>{calculatePrice(currentWidth,currentHeight)};let withFrame=document.querySelector("#withFrame");withFrame.onchange=()=>{calculatePrice(currentWidth,currentHeight)};let newPost=document.querySelector("#newPost");newPost.onchange=()=>{calculatePrice(currentWidth,currentHeight)};const pricePerSquareCm=.1;function calculatePrice(e,t){let i=.1*(e*t);moreExpensiveCanvas.checked&&(i+=35),withFrame.checked&&(i+=10),newPost.checked&&(i+=40),document.querySelector(".total_price").innerHTML=i,4==document.querySelector(".total_price").innerHTML.length?(document.querySelector(".total_price").style.fontSize="40rem",document.querySelector(".total_price_p span").style.fontSize="20rem"):(document.querySelector(".total_price").style.fontSize="48rem",document.querySelector(".total_price_p span").style.fontSize="24rem")}checkSize(),window.addEventListener("resize",checkSize);let cellPopup=document.querySelector(".cell_popup");function cell_popup(){"flex"==cellPopup.style.display?cellPopup.style.display="none":cellPopup.style.display="flex"}let phoneError=document.querySelector(".phoneError");function validatePhoneNumber(e){console.log(e);const t=e.replace(/\D/g,""),i=/^\d{10}$/;if(e.startsWith("+")){if(!/^\d{11,12}$/.test(t))return!1}else if(!i.test(t))return!1;return!!(/^[+\d\s().-]*$/.test(e)&&/^\+?\d*\s*(\(\d+\))?\s*\d+[\d\s().-]*$/.test(e)&&/^([^()]*\([^()]*\))*[^()]*$/.test(e))}function phoneCheck(){validatePhoneNumber(document.querySelector(".phoneNumber").value)?(console.log("true"),phoneError.style.color="#00aa17",phoneError.innerText="Все ок через деякий час ми зателефонуємо вам"):(console.log("falce"),phoneError.style.color="#aa0017",phoneError.innerText="Введений номер не є коректним повторіть спробу")}