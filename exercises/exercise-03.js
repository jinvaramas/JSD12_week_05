// Exercise 3
// ----------
// GOAL: Log "Proceed to checkout" if the user is logged in.
//       Log "Please log in first." if the user is NOT logged in.
// When isLoggedIn is false, nothing is logged at all. Fix the code.

const isLoggedIn = false;

if (isLoggedIn) {
  console.log("Proceed to checkout");
}

// Fix: ตอนนี้มีแค่ if ยังไม่มี else ดังนั้นหาก false จะไม่แสดงอะไรเลย
// ดังนั้น เราจึงต้องเพิ่ม console.log("Please log in first."); เข้ามาด้วย //
if (isLoggedIn) {
  console.log("Proceed to checkout");
} else {
  console.log("Please log in first.");
}