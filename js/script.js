/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  /* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  document.getElementById("profileBtn").addEventListener("click", function() {
    openProfile("/profile.html");
});
  function openProfile(htmlFileName){
    window.location.href = htmlFileName;
  }
  document.getElementById("productsBtn").addEventListener("click", function(){
    openProducts("/products.html")
  });
  function openProducts(htmlFileName){
    window.location.href = htmlFileName;
  }