let d = {a:1, b:2, name :{ c : 3 , d : 4}};
console.log(d);

let f = d;
console.log(f);

f.name.c = "Hi";
console.log(f);
console.log(d);