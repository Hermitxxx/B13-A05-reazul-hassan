

     1️⃣ What is the difference between var, let, and const?
     => The difference between var,let and const is that let and const is block scoped but var is only function scoped.
     var: Can be re-declared or re-assigned.VAR is hoisted though it returns undefined.
     let: Can not be re-declared but re-assigned.Maintains TDZ after being hoisted
     const: Can not be re-declared or re-assigned.Maintains TDZ after being hoisted

     2️⃣ What is the spread operator (...)?
     => The spread operator is used to expand elements of an array, object.It helps copy arrays or objects without changing the real one.

     3️⃣ What is the difference between map(), filter(), and forEach()?
     => These are all array methods which are used for different use cases.
     forEach(): Takes each element from an array and applies a function on each item.Ex: [1,2,3].forEach(e => e ** 2);
                It changes the original array.

      map(): It applies a given function to every element of an array but the main difference between forEach() and map() is    that forEach() changes the original array but map() returns a new array.

      filter(): After applying a certain function on each element in an array, filter() will return a new array of elements that passed a certain condition (true conditions) , false condition elments will be filtered.

     4️⃣ What is an arrow function?
     => Arrow functions are shorthand syntax of the native function which are great for onetime use.It was introduced in js ES6.
     It uses the arrow(=>) symbol.
     SYNTAX: const arrow = (e => {do something})

     5️⃣ What are template literals?
     => Template literals is another way of writing strings which is more felxible and dynamic than double or single quotation.
     We can use funcitons , variables and other js elements inside them to dynamically fetch or create data.

     These are written using backticks (` `).

