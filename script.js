// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
  this.firstName = ko.observable("Oliver");
  this.lastName = ko.observable("Twist");

  this.fullName = ko.computed(function() {
    return this.firstName() + " " + this.lastName();    
  }, this);

  this.capitalizeLastName = function() {
    var currentVal = this.lastName();
    this.lastName(currentVal.toUpperCase());
  };
}
//-----------------------------------------------------------

// Overall viewmodel for this screen, along with initial state
// Class to represent a row in the seat reservations grid
function SeatReservation(name, initialMeal) {
  var self = this;
  self.name = name;
  self.meal = ko.observable(initialMeal);
}

// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel() {
  var self = this;

  // Non-editable catalog data - would come from the server
  self.availableMeals = [
      { mealName: "Standard (sandwich)", price: 0 },
      { mealName: "Premium (lobster)", price: 34.95 },
      { mealName: "Ultimate (whole zebra)", price: 290 }
  ];    

  // Editable data
  self.seats = ko.observableArray([
      new SeatReservation("Steve", self.availableMeals[0]),
      new SeatReservation("Bert", self.availableMeals[0])
  ]);

  self.addSeat = function() {
    self.seats.push(new SeatReservation("", self.availableMeals[0]));
  }
}
//-----------------------------------------------------------




//-----------------------------------------------------------
// Activates knockout.js
$(function() {
  ko.applyBindings(new ReservationsViewModel());
});

// $(function() {
//   ko.applyBindings(new AppViewModel());
// });


