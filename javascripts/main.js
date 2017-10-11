
//example 1

// console.log(this);

// var b = 30;
// let c = 90;

// this.a = 37;
// console.log('window.a:', window.a);
// console.log('this.b, this.c:', this.b, this.c);


// var fubar = '42';

// function baz() {
//     console.log('baz');
//     bar();
// };

// function bar() {
//     console.log('bar');
//     foo();
// };

// function foo() {
//     var fubar = '13';
//     console.log('foo');
//     console.log('this', this);
//     console.log('this.fubar', this.fubar);
// };

// baz();

//event listener example

// var eventFxn = function(e){
//     console.log('event:', e);
//     console.log('e.target:', e.target);
//     console.log('this:', this);
// };
// $('#my-button').click(eventFxn);



//example 2: context objects

// var a = 3;

// function foo() {
//     console.log('this:', this);
//     console.log('this.a:', this.a);
// };

// var obj = {
//     a: 2,
//     monkey: foo
// };

// obj.monkey();


//example 3

// function foo() {
//     console.log('this:', this);
//     console.log('this.a:', this.a);
// };

// var obj2 = {
//     a: 42,
//     foo: foo
// };

// var obj1 = {
//     a: 2,
//     obj2: obj2
// };

// obj1.obj2.foo();

//example 4

// function foo() {
//     console.log('this:', this);
//     console.log('this.a:', this.a);
// };

// var obj = {
//     a: 2,
//     foo: foo
// };

// var bar = obj.foo;

// var a = 'global warming';

// obj.foo();
// bar();

// example 5

function foo() {
    console.log('this:', this);
    console.log('this.a:', this.a);
};

function doFoo(fn) {
    return fn();
};

var obj = {
    a: 2,
    foo: foo
};

var a = 'oops, global';

doFoo(obj.foo);