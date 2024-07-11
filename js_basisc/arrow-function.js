const a = ["apple","Car","Prado","Mango","Laptop"];

const a2 = a.map(function(s){
    return s.length;
});

const a3 = a.map((s) => s.length);

console.log(a3)
