
var Predator = (function () {
  var carnivores = [];
  var herbivores= [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "carnivores.JSON");
      loader.send();
      loader.addEventListener("load", function () {
      carnivores = JSON.parse(this.responseText).carnivores2;
      callbackToInvoke(carnivores);

      });
    },
      loadHerbivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "herbivores.JSON");
      loader.send();
      loader.addEventListener("load", function () {
      herbivores = JSON.parse(this.responseText).herbivores2;
      callbackToInvoke(herbivores);
     

      });
    }
  };
})();