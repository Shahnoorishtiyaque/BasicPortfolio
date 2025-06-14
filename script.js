let toggleBtn = document.getElementById("themeIcon");
let WA=document.getElementById("WA");
let call=document.getElementById("call");
let linkedin=document.getElementById("linkedin");
let mail=document.getElementById("mail");

toggleBtn.onclick = function () {
    document.body.classList.toggle("dark");
    // Swap icon based on current mode
    if (document.body.classList.contains("dark")) {
        toggleBtn.src = "images/sun.svg";
        WA.src="images/wawhite.svg";
        call.src="images/phone-callwhite.svg";
        linkedin.src="images/linkedinwhite.svg";
        mail.src="images/mailwhite.svg";
        
    } else {
        toggleBtn.src = "images/moon.svg";
         WA.src="images/whatsapp-icon.svg";
        call.src="images/phone-call.svg";
        linkedin.src="images/linkedin.svg";
        mail.src="images/mail.svg";
        
    }
};
