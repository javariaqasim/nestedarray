const data = {
    code: 42,
    items: [{
      id: 1,
      name: 'foo'
    }, {
      id: 2,
      name: 'bar'
    }]
  };

  const item_name = data.items[1].name;
  
  console.log(item_name)
  console.log(data.items[1])


let a = "";
const myObj = {
  name: "Javaria",
  age: 19,
  cars: [
    {name:"Audi", models:["Fiesta", "Focus", "Mustang"]},

    {name:"BMW", models:["320", "X3", "X5"]},
    
    {name:"civic", models:["500", "Panda"]}
  ]
}

for (let i in myObj.cars) {
  a += "<h2>" + myObj.cars[i].name + "</h2>";
  for (let j in myObj.cars[i].models) {
    a += myObj.cars[i].models[j] + "<br>";
  }
}

document.write(a)


const cat = {
    legs: 4,
    sound: 'meow'
  };
  const dog = {
    ...cat,
    sound: 'woof'
  };
  console.log(dog);


const person = {
    name: 'javaria',
    surname: 'qasim'
  };
  const keys = Object.keys(person);
console.log(keys); 



const array = ['1','2','3']
const copyWithEquals = array 
console.log(copyWithEquals === array) 
const copyWithSpread = [...array] 
const copyWithSlice = array.slice() 

console.log(copyWithSpread === array) 
console.log(copyWithSlice === array) 
array[0] = '4' 

console.log(...array) 
console.log(...copyWithEquals) 
console.log(...copyWithSpread) 
console.log(...copyWithSlice)



const nestedArray = [["1"], ["2"], ["-1"]]
const nestedCopyWithSpread = [...nestedArray]
console.log(nestedArray[0] === nestedCopyWithSpread[0])


let products = {
  Realme:{
    realme9: {
          version: "Android 47.51%",
          quality: "Qualcomm SM6225 Snapdragon 680 4G (6 nm)"+"<br>"+ "	Octa-core (4x2.4 GHz Kryo 265 Gold & 4x1.9 GHz Kryo 265 Silver)"+"<br>"+"Adreno 610",
          price: "Rs 64,999"
      },
      realme8: {
        version: "Android 47.51%",
        quality: "Qualcomm SM6225 Snapdragon 680 4G (6 nm)"+"<br>"+ "	Octa-core (4x2.4 GHz Kryo 265 Gold & 4x1.9 GHz Kryo 265 Silver)"+"<br>"+"Adreno 610", 
        price: "Rs 25500"
    },
  realmec11: {
    version: "Android 47.51%",
    quality: "Qualcomm SM6225 Snapdragon 680 4G (6 nm)"+"<br>"+ "	Octa-core (4x2.4 GHz Kryo 265 Gold & 4x1.9 GHz Kryo 265 Silver)"+"<br>"+"Adreno 610", 
    price: "Rs 19000"
  },
  realmec12: {
    version: "Android 47.51%",
    quality: "Qualcomm SM6225 Snapdragon 680 4G (6 nm)"+"<br>"+ "	Octa-core (4x2.4 GHz Kryo 265 Gold & 4x1.9 GHz Kryo 265 Silver)"+"<br>"+"Adreno 610",
    price: "Rs 24000"
  },
  realmec25: {
    version: "Android 47.51%",
    quality: "Qualcomm SM6225 Snapdragon 680 4G (6 nm)"+"<br>"+ "	Octa-core (4x2.4 GHz Kryo 265 Gold & 4x1.9 GHz Kryo 265 Silver)"+"<br>"+"Adreno 610",
    price: "Rs 30000"
},
realmec35: {
    version: "Android 47.51%",
    quality: "Qualcomm SM6225 Snapdragon 680 4G (6 nm)"+"<br>"+ "	Octa-core (4x2.4 GHz Kryo 265 Gold & 4x1.9 GHz Kryo 265 Silver)"+"<br>"+"Adreno 610",
    price: "Rs 35000"
},
realmec31: {
    version: "Android 47.51%",
    quality: "Qualcomm SM6225 Snapdragon 680 4G (6 nm)"+"<br>"+ "	Octa-core (4x2.4 GHz Kryo 265 Gold & 4x1.9 GHz Kryo 265 Silver)"+"<br>"+"Adreno 610",
    price: "Rs: 40000"
  }
}
}












