// define loop here
var loop = function(collection, callback){

  if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++){
      callback(collection[i], i);
    }
  } else if (typeof collection === 'object'){
    for (var key in collection){
      callback(collection[key], key);
    }
  }
};


// define extendObj here
var extendObj = function(object1,object2){
	loop(object2,function(object2Object,object2Index){
		object1.push(object2Object,object2Index);
	})
	return object1
}

// test data we're giving you:
var Jon = {name: "Jon", fear: "koala bears"};
var moreCharacteristics = {favoriteFruit: "avocados", funFact: "I once played basketball with Prince in the summer of 1984."};

// test extendObj here using the two sample data objects given above

console.log(extendObj(Jon,moreCharacteristics))