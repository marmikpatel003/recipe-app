function toggleAddRecipe() {
  var dataDiv = document.getElementById("hiddenAddRecipe");
  if (dataDiv.style.display === "none") {
    dataDiv.style.display = "block";
  } else {
    dataDiv.style.display = "none";
  }
}

function toggleViewRecipe() {
  var dataDiv = document.getElementById("hiddenViewRecipe");
  if (dataDiv.style.display === "none") {
    dataDiv.style.display = "block";
  } else {
    dataDiv.style.display = "none";
  }
}
