// burger icon
const burger = document.querySelector(".burger");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const lines = document.querySelectorAll(".burger__line");

// hidden menu
const hiddenMenu = document.querySelector(".hiddenMenu");
const hiddenMenuSections = document.querySelectorAll(".hiddenMenu__section");

// sections
const homeSection = document.querySelector("#home");
const homeSectionOffset = homeSection ? homeSection.offsetHeight : 0;
const aboutusSection = document.querySelector(".aboutus");
const aboutusSectionOffset = aboutusSection
	? aboutusSection.offsetHeight + homeSectionOffset
	: 0;
const adventureSection = document.querySelector(".adventure");
const adventureSectionOffset = adventureSection
	? adventureSection.offsetHeight / 2 + aboutusSectionOffset
	: 0;
const offerSection = document.querySelector(".offer");
const offerSectionOffset = offerSection ? offerSection.offsetTop : 0;

let currentOffset = scrollY;
const menuHome = document.querySelector(".menuElement1");
const menuAboutus = document.querySelector(".menuElement2");
const menuOffer = document.querySelector(".menuElement3");
const logo = document.querySelector(".logo");

// Current Date
const now = new Date();
const currentYear = now.getFullYear();
const currentYearElement = document.querySelector("#currentYear");

const hiddenMenuElement1 = document.querySelector(".hiddenMenuElement1");
const hiddenMenuElement2 = document.querySelector(".hiddenMenuElement2");
const hiddenMenuElement3 = document.querySelector(".hiddenMenuElement3");

// Check if we are on index.html site
if (
	window.location.pathname === "/index.html" ||
	window.location.pathname === "/"
) {
	logo.href = "./index.html";
	hiddenMenuElement1.href = "#home";
	hiddenMenuElement2.href = "#o-nas";
	hiddenMenuElement3.href = "#oferta";
} else {
	logo.href = "./index.html";
	hiddenMenuElement1.href = "./index.html#home";
	hiddenMenuElement2.href = "./index.html#o-nas";
	hiddenMenuElement3.href = "./index.html#oferta";
}

// Scrollspy
window.onscroll = () => {
	currentOffset = scrollY;

	if (currentOffset >= 0 && currentOffset < homeSectionOffset / 2) {
		menuHome.classList.remove("menuSectionActive");
		menuOffer.classList.remove("menuSectionActive");
		menuAboutus.classList.remove("menuSectionActive");
		menuHome.classList.add("menuSectionActive");
	} else if (
		currentOffset > homeSectionOffset / 2 &&
		currentOffset < aboutusSectionOffset
	) {
		menuHome.classList.remove("menuSectionActive");
		menuOffer.classList.remove("menuSectionActive");
		menuAboutus.classList.add("menuSectionActive");
	} else if (currentOffset > adventureSectionOffset) {
		menuAboutus.classList.remove("menuSectionActive");
		menuOffer.classList.add("menuSectionActive");
	}
};

// Set current year to footer
currentYearElement.innerHTML = currentYear;

// Hidden menu animation
function hiddenMenuShowUp() {
	hiddenMenu.classList.toggle("hiddenMenu--active");

	lines.forEach((item) => {
		item.classList.toggle("burger__line--color");
	});
}

// Burger icon animation
function addBurgerAnimation() {
	if (line1.classList.contains("burgerAnimation1")) {
		line1.classList.toggle("burgerAnimation1");
		line2.classList.toggle("burgerAnimation2");
		line3.classList.toggle("burgerAnimation3");

		line1.classList.toggle("burgerAnimation1Reverse");
		line2.classList.toggle("burgerAnimation2Reverse");
		line3.classList.toggle("burgerAnimation3Reverse");
	}

	line1.classList.toggle("burgerAnimation1");
	line2.classList.toggle("burgerAnimation2");
	line3.classList.toggle("burgerAnimation3");
}

hiddenMenuSections.forEach((section) => {
	section.addEventListener("click", hiddenMenuShowUp);
});

burger.addEventListener("click", addBurgerAnimation);
burger.addEventListener("click", hiddenMenuShowUp);
