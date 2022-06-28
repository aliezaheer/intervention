const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const businessName = document.getElementById("business-name");
const comapny = document.getElementById("company");
const country = document.getElementById("country");
const form = document.getElementById("form");

const firstError = document.getElementById("first-error");
const secError = document.getElementById("second-error");
const businessError = document.getElementById("business-error");

form.addEventListener("submit", (e) => {
  let errorMsgs = [];

  if (firstName.value === "" || firstName.value == null) {
    errorMsgs.push("This field can’t be empty. \n Please fill it in.");

    firstError.style.backgroundColor = "#FF7777";
  }

  if (errorMsgs.length > 0) {
    e.preventDefault();
    firstError.innerText = errorMsgs.join(" ");
  }
  if (errorMsgs.length > 0) {
    document.onkeyup = function () {
      firstError.style.display = "none";
    };
  }
});

// form.addEventListener("submit", (e) => {
//   let errorMsgs2 = [];
//   if (lastName.value === "" || lastName.value == null) {
//     errorMsgs2.push("This field can’t be empty. \n Please fill it in.");

//     secError.style.backgroundColor = "#FF7777";
//   } else secError.style.display = "none";

//   if (errorMsgs2.length > 0) {
//     e.preventDefault();
//     secError.innerText = errorMsgs2.join(" ");
//   }

//   if (errorMsgs2.length > 0) {
//     document.onkeyup = function () {
//       secError.style.display = "none";
//     };
//   }
// });

// form.addEventListener("submit", (e) => {
//   let errorMsgs = [];
//   if (businessName.value === "" || businessName.value == null) {
//     errorMsgs.push("Please enter your email.");

//     businessError.style.backgroundColor = "#FF7777";
//   }

//   if (errorMsgs.length > 0) {
//     e.preventDefault();
//     businessError.innerText = errorMsgs.join(" ");
//   }
// });

// country selection

var select = document.getElementById("selectCountry");

var countries = new Array(
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burma",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo, Democratic Republic",
  "Congo, Republic of the",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Greenland",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Mongolia",
  "Morocco",
  "Monaco",
  "Mozambique",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Samoa",
  "San Marino",
  " Sao Tome",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
);

for (var i = 0; i < countries.length; i++) {
  var option = document.createElement("option");
  var txt = document.createTextNode(countries[i]);
  option.appendChild(txt);
  option.setAttribute("value", countries[i]);
  select.insertBefore(option, select.lastChild);
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    //console.log('DOM fully loaded and parsed');
    document.querySelector('select[name="selectCountry"]').onchange =
      alertCountry;
  },
  false
);

// play button

$(".video")
  .parent()
  .click(function () {
    if ($(this).children(".video").get(0).paused) {
      $(this).children(".video").get(0).play();
      $(this).children(".playpause").fadeOut();
    } else {
      $(this).children(".video").get(0).pause();
      $(this).children(".playpause").fadeIn();
    }
  });

// tootltip
new jBox("Tooltip", {
  attach: ".toolip",
  theme: "TooltipBorderThick",
  width: 350,
  position: {
    x: "center",
    y: "bottom",
  },
  outside: "y",
  pointer: "top:160",
  animation: "move",
});

// mob menu
$(document).ready(function () {
  $(".menuBtn").click(function () {
    $(this).toggleClass("act");
    if ($(this).hasClass("act")) {
      $(".mainMenu").addClass("act");
    } else {
      $(".mainMenu").removeClass("act");
    }
  });
});
