var searchCover;

document.addEventListener("DOMContentLoaded", function(event) {
  searchCover = document.getElementById("search-cover");
  searchCoverSpan = document.getElementById("search-cover-span");
  searchInput = document.getElementById("search-input");
  searchIcon = document.getElementById("search-icon");
});

var covered = true;

document.addEventListener("click", (e) => {
  if(e.target === searchCover ||
    e.target === searchCoverSpan ||
    e.target === searchIcon &&
    covered === true){
      searchCover.style.display = "none";
      searchInput.focus();
      covered = false;
  }else if(covered === false && e.target !== searchCover &&
    e.target !== searchInput &&
    e.target !== searchIcon ){
      searchCover.style.display = "block";
      searchInput.blur();
      covered = true;
  }
});
