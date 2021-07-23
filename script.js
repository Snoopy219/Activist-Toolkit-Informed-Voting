/* .js files add interaction to your website */
var displayScript = document.getElementById("pledge");
var scriptBtn = document.getElementById("enter");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("theName").value;

  displayScript.innerHTML = "I, " + name + ", promise to always research before elections. I promise to trust reputable sources and not what I see on social media. I promise to share this information with others so that they can learn too.";
}
