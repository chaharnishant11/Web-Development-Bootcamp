var faker = require("faker");

/*var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

//c0onsole.log(randomName);
//console.log(randomEmail);
console.log(randomCard);*/
for(var i=0 ; i<10 ;i++){
    console.log(faker.commerce.productName()+" : $"+faker.commerce.price());
    
}
