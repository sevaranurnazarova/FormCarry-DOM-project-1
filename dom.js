// ------- Header start ------>

const headerNavbar = ["FAQ", "Docs", "Integrations", "Pricing"];


let elHeader = document.querySelector(".site-header");
let elMain = document.querySelector(".site-main");
let elFooter = document.querySelector(".site-footer");

let elheaderContainer = document.createElement("div")
let elHeaderFlexDiv = document.createElement("div")
let elLogoLink = document.createElement("a")
let elLogoImg = document.createElement("img")
let elHeaderList = document.createElement("ul")

let elBtnBox = document.createElement("div")
let elLoginBtn = document.createElement("button")
let elSignupBtn = document.createElement("button")


elheaderContainer.setAttribute("class", "container w-[1200px] mx-auto")
elHeaderFlexDiv.setAttribute("class", "flex items-center justify-between")

elLogoLink.setAttribute("href", "/")
elLogoLink.setAttribute("class", "inline-block")

elLogoImg.setAttribute("src", "./images/formcarry.svg")
elLogoImg.setAttribute("alt", "Logo Img")
elLogoImg.setAttribute("width", "157")
elLogoImg.setAttribute("height", "24")

elHeaderList.setAttribute("class", "flex items-center gap-[30px]")

headerNavbar.forEach((item)=>{
    let elHeaderItem = document.createElement("li")
    let elHeaderLink = document.createElement("a")
    
    elHeaderLink.setAttribute("class", "font-semibold text-[18px] hover:text-blue-300 duration-300")

    elHeaderLink.setAttribute("href", "/")
    elHeaderLink.textContent = item;

    elHeaderList.appendChild(elHeaderItem);
    elHeaderItem.appendChild(elHeaderLink);

});

elBtnBox.setAttribute("class", "flex items-center gap-[10px]")

elLoginBtn.textContent = "Login";
elLoginBtn.setAttribute("class", "cursor-pointer font-semibold")

elSignupBtn.textContent = "Sign Up";
elSignupBtn.setAttribute("class", "bg-blue-500 p-2 rounded-[15px] text-white font-semibold cursor-pointer")


elHeader.appendChild(elheaderContainer);
elheaderContainer.appendChild(elHeaderFlexDiv);
elHeaderFlexDiv.appendChild(elLogoLink);
elLogoLink.appendChild(elLogoImg);
elHeaderFlexDiv.appendChild(elHeaderList);

elHeaderFlexDiv.appendChild(elBtnBox);
elBtnBox.appendChild(elLoginBtn);
elBtnBox.appendChild(elSignupBtn);

//---------- Header End ------------

//---------- Main Start ------------

let elMainContainer = document.createElement("div");
let mainBox = document.createElement("div");
let mainP = document.createElement("p");
let mainH1 = document.createElement("h1");
let mainText = document.createElement("p");
let btnDiv = document.createElement("div")
let mainBtn = document.createElement("button");

mainP.textContent = "COLLECT FORM SUBMISSIONS";
mainH1.textContent = "Get emails and messages from your HTML form";
mainText.textContent = "Code your own HTML form and style it, then point your form to formcarry to get email notifications, upload files, block spam and integrate with other apps."
mainBtn.textContent = "Get Started";


elMainContainer.setAttribute("class", "container w-[660px] mx-auto h-screen flex justify-center items-center");
mainBox.setAttribute("class", "mx-auto font-semibold  items-centr");

mainP.setAttribute("class", "text-blue-600 text-center ");
mainP.setAttribute("width", "221");
mainP.setAttribute("height", "24");


mainH1.setAttribute("class", "font-semibold text-[45px] text-center leading-[72px]");
mainH1.setAttribute("width", "720");
mainH1.setAttribute("height", "150");

mainText.setAttribute("class", "text-[17px] text-center p-[14px] leading-[36px]");
mainText.setAttribute("width", "655");
mainText.setAttribute("height", "72");

btnDiv.setAttribute("class", "text-center");
mainBtn.setAttribute("class", "cursor-pointer w-[143px] h-[48px] text-white bg-black text-[13px] p-2 m-[68px] rounded-[50px] font-semibold");


elMain.appendChild(elMainContainer);
elMainContainer.appendChild(mainBox);
mainBox.appendChild(mainP);
mainBox.appendChild(mainH1);
mainBox.appendChild(mainText);
mainBox.appendChild(btnDiv);
btnDiv.appendChild(mainBtn);

//------------Main End-------------------

//------------Footer start--------------->

let footerContainer = document.createElement("div");
let footerBox = document.createElement("div");
let footerP = document.createElement("p");
let footerUl = document.createElement("ul");
let footerIcons = document.createElement("div");

let footerIcon1=document.createElement("img");
let footerIcon2=document.createElement("img");
let footerIcon3=document.createElement("img");


footerP.textContent = "formcarry. all rights reserved";

const footerList = ["Terms of Service", "Privacy Policy"];

footerList.forEach((items)=>{
   let footerLi = document.createElement("li");

   footerLi.textContent=items;
   footerUl.appendChild(footerLi);
})

footerContainer.setAttribute("class", "w-[1112px] h-[72px] bg-[#F7F9FC] mx-auto rounded-[12px] p-[20px]")
footerBox.setAttribute("class", "flex items-center justify-between")
footerUl.setAttribute("class", "flex gap-[31px]")
footerIcons.setAttribute("class", "flex gap-[24px]")

footerIcon1.setAttribute("src", "./images/icon1.svg");
footerIcon2.setAttribute("src", "./images/icon2.svg");
footerIcon3.setAttribute("src", "./images/icon3.svg");

footerIcon1.setAttribute("alt", "Icon Img")
footerIcon1.setAttribute("width", "32")
footerIcon1.setAttribute("height", "32")

footerIcon2.setAttribute("alt", "Icon Img")
footerIcon2.setAttribute("width", "32")
footerIcon2.setAttribute("height", "32")

footerIcon3.setAttribute("alt", "Icon Img")
footerIcon3.setAttribute("width", "32")
footerIcon3.setAttribute("height", "32")

elFooter.appendChild(footerContainer);
footerContainer.appendChild(footerBox);

footerBox.appendChild(footerP);
footerBox.appendChild(footerUl);
footerBox.appendChild(footerIcons);

footerBox.append(footerIcons);
footerIcons.appendChild(footerIcon1);
footerIcons.appendChild(footerIcon2);
footerIcons.appendChild(footerIcon3);

