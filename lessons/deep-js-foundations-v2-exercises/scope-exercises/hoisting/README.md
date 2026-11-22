# Hoisting

In this exercise, you will refactor some code that manages student enrollment records for a workshop, to take advantage of function hoisting.

## Instructions

Refactor all inline function expressions to be function declarations. Place function declarations at the bottom (that is, below any executable code) of their respective scopes.

Also, pull function declarations to outer scopes if they don't need to be nested.

## Insights

This section changed my opinion on hoisting now that I understand the two-pass (compile, then execute) model JavaScript uses.

It makes sense to take advantage of hoisting for function declarations. I agree with Kyle Simpson that putting the main logic first and the helper functions below lets the reader see the "what" before the "how." It's also a good exercise to build an accurate mental model of how variable and function declarations are handled at compile time, and why some runtime behavior that looks like a bug isn't one.

That model explains why using a variable before its declaration isn't recommended, while invoking a function before its declaration is a reasonable, reliable pattern.

`var` declarations are hoisted to the top of their enclosing function scope, which is why reading one before assignment gives `undefined`.

It's not accurate to say "let is not hoisted," and this example shows why:

```js
var dog = "Griffin";

{
  console.log(dog); // ReferenceError (temporal dead zone)
  let dog = "Prince Robert";
}
```

If `let` weren't hoisted, `console.log` would print the outer `"Griffin"`. Instead, the inner `dog` is registered at block entry and shadows the outer one, but stays uninitialized until its declaration runs. That uninitialized window is the TDZ, and it's why you get an error instead of `undefined`.

I've also changed my opinion about var vs let/const. It isn't all-or-nothing, and replacing every `var` isn't necessarily a good pattern.

Kyle Simpson's guidance:

- Use `var` unless you specifically need block scoping.
- If you use `let`, declare it at the top of the block to avoid collisions and make intent clear.
- Use `const` sparingly, for primitives that should never change (like an API URL). Objects/arrays declared with `const` can still be mutated, since only the reference is fixed, so `const` doesn't communicate intent as clearly there.

I used to side with teams that eliminate `var`, mostly because it felt "modern," kept code consistent, and avoided misuse. Now I see blanket replacement as skipping the work of understanding the tools. In Simpson's view, `let`/`const` weren't meant to replace `var`: they exist to give block scoping, and each keyword signals to the reader how a variable is meant to be used.
