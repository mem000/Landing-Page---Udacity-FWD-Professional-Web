////////////////////////////////////////////////////////////////////////////////////////

// Add active class to the current link (highlight it) and remove from the other
let navBar = document.getElementById("navbar__list");
function addActive() {
  let current = navBar.getElementsByClassName("active");
  let section_id, active_se;
  if (current.length > 0) {
    ////remove highlight section
    section_id = current[0].querySelector("a").getAttribute("href").replace("#", "");
    console.log(section_id);
    if (section_id) {
      active_se = document.getElementById(section_id);
      active_se.classList.remove("active_section");
    }
    ///
    current[0].classList.remove("active");
  }
  this.classList.add("active");
  ////highlight the corresponding section
  section_id = current[0].querySelector("a").getAttribute("href").replace("#", "");
  if (section_id) {
    active_se = document.getElementById(section_id);
    active_se.classList.add("active_section");
  }
}
let btns = navBar.getElementsByClassName("link");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", addActive);
}
////////////////////////////////////////////////////////////////////////////////////////
//Change Active Menu Item on Page Scroll (JS and JQuery: modified by me)
//link:https://stackoverflow.com/questions/9979827/change-active-menu-item-on-page-scroll
// Cache selectors

var topMenu = $("#navbar__list"),
  topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

let last_active_id = $(".active_section").attr("id");

// Bind to scroll
$(window).scroll(function () {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop) return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";
  // Set/remove active class
  menuItems
    .parent()
    .removeClass("active")
    .end()
    .filter("[href='#" + id + "']")
    .parent()
    .addClass("active");

  if (!(last_active_id) && (id == "section1")) {
    $("#section1").addClass("active_section");
    last_active_id = id;
  }
  else if (last_active_id && (id != last_active_id)) {
    console.log("hi id = " + id + " last active id = " + last_active_id);
    $("#" + last_active_id).removeClass("active_section");
    $("#" + id).addClass("active_section");
    last_active_id = id;
  }
  else {
    last_active_id = id;
  }

});


///////////////////////////

/*******************************************************/
/*Scroll to top when arrow up clicked BEGIN*/
//source: https://html-online.com/articles/dynamic-scroll-back-top-page-button-javascript/

$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $("#back2Top").fadeIn();
  } else {
    $("#back2Top").fadeOut();
  }
});
$(document).ready(function () {
  $("#back2Top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});
/*Scroll to top when arrow up clicked END*/
/*******************************************************/
/*Scroll to top when reloading the page */

$(window).on('load', function (event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
/*******************************************************/