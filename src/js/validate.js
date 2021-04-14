//const { doc } = require("prettier");

function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  //console.log('TODO - validate the longitude, latitude values before submitting');
  let latitude = document.getElementById("latitude");
  let longtitude = document.getElementById("longtitude");

  if (
    isNaN(latitude.value.trim()) ||
    latitude.value.trim() < -90 ||
    latitude.value.trim() > 90
  ) {
    document.querySelector("#lblLatitude > span").innerHTML = "";
    document.querySelector("#lblLatitude > span").innerHTML =
      "* must be a valid Latitude (-90 to 90)";
    event.preventDefault();
  } else {
    document.querySelector("#lblLatitude > span").innerHTML = "";
    document.querySelector("#lblLatitude > span").innerHTML = "*";
  }

  if (
    isNaN(longtitude.value.trim()) ||
    longtitude.value.trim() < -180 ||
    longtitude.value.trim() > 180
  ) {
    document.querySelector("#lblLongtitude > span").innerHTML = "";
    document.querySelector("#lblLongtitude > span").innerHTML =
      "* must be a valid Longtitude (-180 to 180)";
    event.preventDefault();
  } else {
    document.querySelector("#lblLongtitude > span").innerHTML = "";
    document.querySelector("#lblLongtitude > span").innerHTML = "*";
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
