const user = {
  name: "Sambulo",
  cities: ["Luton", "Dunstable", "London"],
  printPlacesLived: function() {
    const that = this;
    this.cities.forEach(function(city) {
      console.log(that.name + 'has lived in city' + city)
      
    });
  }
};


user.printPlacesLived();
