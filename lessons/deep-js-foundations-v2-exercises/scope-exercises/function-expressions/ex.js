/*
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

*/

function printRecords(recordIds) {
  let results = recordIds
    .map(function mapStudentRecords(id) {
      return studentRecords.find(function findRecordById(user) {
        return user.id === id;
      });
    })
    .sort(function sortByName(a, b) {
      return a.name.localeCompare(b.name);
    })
    .forEach(function printResults(r) {
      console.log(`${r.name} (${r.id}): ${r.paid ? "Paid" : "Not Paid"}`);
    });
}

function paidStudentsToEnroll() {
  const ids = [];
  studentRecords.forEach(function enrollPaidStudents(r) {
    if (currentEnrollment.indexOf(r.id) === -1 && r.paid) ids.push(r.id);
  });
  return [...currentEnrollment, ...ids];
}

function remindUnpaid(recordIds) {
  let unpaidEnrollments = recordIds
    .map(function mapStudentRecords(id) {
      return studentRecords.find(function findUsersById(user) {
        return user.id === id;
      });
    })
    .map(function findUnpaidEnrollments(pd) {
      if (!pd.paid) {
        return pd.id;
      }
    })
    .filter(Boolean);

  printRecords(unpaidEnrollments);
}

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
