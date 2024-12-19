const logoElements = document.getElementsByClassName("cross");

for (const cross of logoElements) {
  cross.addEventListener("click", function() {
    cross.add("hide");
    console.log("Logo clicked!");
  });
}
