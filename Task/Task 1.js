
// 1. how to compare two json have the same properties without order.  let obj1 = { name: "person 1", age: 5 }
//let obj2 = {age: 5, name: "person 1"}



let obj3 = { name: "person 1", age: 5 };
let obj4 = { age: 5, name: "person 1" }; 


let obj1string = JSON.stringify(obj3, Object.keys(obj3).sort());
let obj2string = JSON.stringify(obj4, Object.keys(obj4).sort());

if (obj3 === obj4) {
  ("JSON have the same properties without cosidering order");
} else {
  ("JSON haven't the same properties without cosidering order");
}


