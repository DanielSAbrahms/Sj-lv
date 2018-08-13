
console.log("menuObject.js Loaded");
module.exports = function menuObject (type = "noType", name = "noName", active = false) {
  this.type = type;
  this.name = name;
  this.active = active;
  this.dropHandler = dropHandler;
  this.doubleClickHandler = doubleClickHandler;

}

function dropHandler(event, ui) {
}

function doubleClickHandler() {
    $(this).css({"left": "0px",
                "top": "0px"});
    dropHandler();
}
