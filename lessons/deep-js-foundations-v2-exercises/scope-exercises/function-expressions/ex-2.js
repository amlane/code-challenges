function printRecords(recordIds) {
  let results = recordIds
    .map((id) => studentRecords.find((user) => user.id === id))
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((r) =>
      console.log(`${r.name} (${r.id}): ${r.paid ? "Paid" : "Not Paid"}`),
    );
}

function paidStudentsToEnroll() {
  const ids = [];
  studentRecords.forEach((r) => {
    if (currentEnrollment.indexOf(r.id) === -1 && r.paid) ids.push(r.id);
  });
  return [...currentEnrollment, ...ids];
}

function remindUnpaid(recordIds) {
  let unpaidEnrollments = recordIds
    .map((id) => studentRecords.find((user) => user.id === id))
    .map((pd) => {
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
