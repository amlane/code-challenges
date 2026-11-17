# Function Expressions

In this exercise, you will be writing some functions and function expressions, to manage the student enrollment records for a workshop.

**Note:** The spirit of this exercise is to use functions wherever possible and appropriate, so consider usage of array utilities `map(..)`, `filter(..)`, `find(..)`, `sort(..)`, and `forEach(..)`.

## Instructions (Part 1)

**Note:** In Part 1, use only function declarations or named function expressions.

You are provided three functions stubs -- `printRecords(..)`, `paidStudentsToEnroll()`, and `remindUnpaid(..)` -- which you must define.

At the bottom of the file you will see these functions called, and a code comment indicating what the console output should be.

1. `printRecords(..)` should:
   - take a list of student Ids
   - retrieve each student record by its student Id (hint: array `find(..)`)
   - sort by student name, ascending (hint: array `sort(..)`)
   - print each record to the console, including `name`, `id`, and `"Paid"` or `"Not Paid"` based on their paid status

2. `paidStudentsToEnroll()` should:
   - look through all the student records, checking to see which ones are paid but **not yet enrolled**
   - collect these student Ids
   - return a new array including the previously enrolled student Ids as well as the to-be-enrolled student Ids (hint: spread `...`)

3. `remindUnpaid(..)` should:
   - take a list of student Ids
   - filter this list of student Ids to only those whose records are in unpaid status
   - pass the filtered list to `printRecords(..)` to print the unpaid reminders

## Instructions (Part 2)

Now that you've completed Part 1, refactor to use **only** `=>` arrow functions.

For `printRecords(..)`, `paidStudentsToEnroll()`, and `remindUnpaid(..)`, assign these arrow functions to variables of such names, so that the execution still works.

As the appeal of `=>` arrow functions is their conciseness, wherever possible try to use only expression bodies (`x => x.id`) instead of full function bodies (`x => { return x.id; }`).

My thoughts & takeaways from the exercise:

I went from disagreeing to agreeing back to disagreeing on the readability opinion Kyle has on function declaration vs arrow functions. I find that the function declaration naming is time consuming for the author and visually overwhelming. I can also see how this could lead a future developer to make wrong assumptions about the intent of the code, even if you've tried really hard to name variables/functions well. I think there's a good middle ground that could be found between allowing the logic to speak for itself but also providing good variable/function names along with comments when logic becomes overly complex to infer for the next developer. In my humblest opinion.
