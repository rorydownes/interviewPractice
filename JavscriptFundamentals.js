/* Question 2: Create “native” methods
 Define a repeatify function on the String object.
The function accepts an integer that specifies how many times the string has to be repeated.
The function returns the string repeated the number of times specified.
*/

// Goal:

'rory'.repeatify(5) = 'roryroryroryroryroryrory';

// Solution:

String.prototype.repeatify = function(count) {
  var output = '';

  for (var i = 0; i < count; i++) {
    output += this;
  }

  return output;
};

// Note for improvement, test if prototype function is already defined to avoid overwriting functionality.



/* Question 3: Hoisting
What’s the result of executing this code and why. */

// Sample Code:

function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();

/* The result will be undefined and 2.
The reason for this is at run time the variable declarations and function definitions are hoisted to the top
of their scope, so at run time, the above code behave like this:
*/

function test() {
  var a;
  function foo() {
     return 2;
  }

   console.log(a);
   console.log(foo());

   var a = 1;
}

Which results in a being a declared variable, with an undefined value, but the full definition of foo being available.


/* Question 4: How this works in JavaScript
    What is the result of the following code? Explain your answer.
 */

 var fullname = 'John Doe';
 var obj = {
    fullname: 'Colin Ihrig',
    prop: {
       fullname: 'Aurelio De Rosa',
       getFullname: function() {
          return this.fullname;
       }
    }
 };

 console.log(obj.prop.getFullname());

 var test = obj.prop.getFullname;

 console.log(test());


/* The output would be:
'Aurelio De Rosa'
'John Doe'

Because the context of this switches based on the invokation of the function, obj.prop.getFullname() invokes
the getFullname method of the obj.prop object, the context of 'this' therefore is that object.

However the variable test is assigned the definition of the getFullname function, when it's invoked the context of this
would therefore not be obj.prop since only the definition was assigned, this would refer to global scope, where fullname = 'John Doe'
*/
