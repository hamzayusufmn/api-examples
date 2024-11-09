let animals = ['giraffe', 'elephant', 'yak']


animals.forEach(   function (animal, index) {
    console.log(animal, index)
})


animals.forEach( (animals,index) => {
    console.log(animals,index)
    // this looks better and easier for me
} )
animals.forEach(function (animal) {
    console.log(animal)
})

animals.forEach((animals) =>  {
    console.log(animals)

})

animals.forEach(animal => console.log(animal))






