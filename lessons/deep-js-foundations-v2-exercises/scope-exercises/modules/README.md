# Modules

In this exercise, you will refactor some code that manages student enrollment records for a workshop, to use the module pattern.

## Instructions

1. Wrap all of the functions in a module factory (ie, function named `defineWorkshop()`). This function should make a return a public API object.

2. The returned public API object should include the following methods:
   - `addStudent(id,name,paid)`
   - `enrollStudent(id)`
   - `printCurrentEnrollment()`
   - `enrollPaidStudents()`
   - `remindUnpaidStudents()`,

3. Move the `currentEnrollment` and `studentRecords` arrays inside the module definition, but as empty arrays.

4. Create an instance of this module by calling `defineWorkshop()`, and name it `deepJS`.

5. Define all the student records by calling `deepJS.addStudent(..)` for each.

6. Define the student enrollments by calling `deepJS.enrollStudent(..)` for each.

7. Change the execution code (the console output steps) to references to `deepJS.*` public API methods.

### Notes from Lesson

#### Closure

Closure is the ability for a function to "remember" or hold onto variables from the scope where it was created, even once the outer scope has finished running and "disappeared".
Closure is the preservation of a linkage to the variable, not capturing a snapshot of the value.

Using `let` vs `var` in for loops (supported in for/for in/for of) is a good way to observe closure:

Because this loop is using "var", the i is shared across all iterations of the loop. This results in closures accessing the final value of the variable after the loop has finished iterating.

```
for(var i = 0; i < 4; i++){
  setTimeout(function printOut(){
    console.log(i)
  }, 1000)
}
```

output
i: 4
i: 4
i: 4
i: 4

Using let "magically" creates a new variable for i on each iteration of the loop.
This allows each closure to have access to its own separate variable which results in returning the expected value.

```
for(let i = 0; i < 4; i++){
  setTimeout(function printOut(){
    console.log(i)
  }, 1000)
}
```

output
i: 0
i: 1
i: 2
i: 3

#### Modules

Modules are, in a sense, closures applied at the file or structure level. Both do the same job: they keep some things private and expose only what you choose.

Before ES modules, closures were the module system. In JavaScript, the "module pattern" used an immediately invoked function to create a private scope:

```
const cart = (function () {
	const items = []; // private, trapped in the closure

	function total() {
	    return items.reduce((sum, i) => sum + i.price, 0);
	}

	return { // public API
	    add(item) { items.push(item); },
	    getTotal: total,
	};
})();

cart.add({ price: 5 });
cart.getTotal(); // 5
cart.items; // undefined, can't reach it

```

`items` and `total` are only reachable because the returned functions close over them. Nothing else can touch them.

ES modules do the same thing with dedicated syntax:

javascript```
// cart.js
const items = []; // module-scoped, not global

export function add(item) { items.push(item); }
export function getTotal() {
return items.reduce((sum, i) => sum + i.price, 0);
}

````

Anything not exported stays private to the file. Exported functions keep access to the unexported variables, which is the closure behavior. Each module is evaluated once, so items is effectively shared state that all importers see.

The relationship in short:

- A closure is a mechanism: a function retains access to its defining scope.
- A module is a pattern or feature built on that mechanism: bundle state and functions together, hide the internals, export a small interface.

One difference worth knowing: a closure-based module pattern can create many independent instances (call the factory again), while an ES module is a singleton by default. If you need multiple instances from a module, you export a factory function, which is a closure again.

The two major styles of import in ES6 module syntax:

1. Named import: Importing specific exported bindings by their exact names using curly braces

```
import { foo, bar } from "my-module";

```

2. Namespace import: Importing the entire module's exports as a single object namespace using `* as`

```
import * as myModule from "my-module";s
```
````
