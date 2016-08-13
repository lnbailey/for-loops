
// Increments by 10
for (var i = 5; i <= 120; i+= 10) {
	console.log(i);
}

// Decrement by division
for (var d = 4096; d >=1; d/= 2) {
	console.log(d);
}

// Array iteration
var presidents = [ "Washington", "Adams", "Jefferson", "Madison" ];
for (var p = 0; p < presidents.length; p++){
	console.log("President #" + [p+1] + " was " +  presidents[p]);
}

// Object iteration
var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}


for (var names in antSpecies) {
    console.log(names);
}