// //your original class
// var Type = function(name) {
//     this.name = name;
// };

// //our extend function
// var extend = function(cls) {

//     //which returns a constructor
//     function foo() {

//         //that calls the parent constructor with itself as scope
//         cls.apply(this, arguments)

//         //the additional field
//         this.extraField = 1;
//     }

//     //make the prototype an instance of the old class
//     foo.prototype = Object.create(cls.prototype);

//     return foo;
// };

// //so lets extend Type into newType
// var newType = extend(Type);

// //create an instance of newType and old Type
// var t = new Type('bar');
// var n = new newType('foo');


// console.log(t);
// console.log(t instanceof Type);
// console.log(n);
// console.log(n instanceof newType);
// console.log(n instanceof Type);
                    // <ul>
                    //     { 
                    //         this.props.items.map(function(keyName, index) {
                    //         return <li key={index}>{keyName.name}</li>
                    //     })
            
                    //     }
                    // </ul>
