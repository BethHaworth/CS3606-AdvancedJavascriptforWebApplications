var fullname = "John";

var obj = {
  fullname: "Jane", prop: {
      fullname: "Tom", getName: function () {
      return this.fullname;
      }
  }
};

var test1 = obj.prop.getName;
console.log(test1()); // The function gets invoked at the global scope
// expected output: John

var test2 = test1.bind(obj);
console.log(test2());
// expected output: Jane

var test3 = obj.prop.fullname;
console.log(test3);
// expected output: Tom

