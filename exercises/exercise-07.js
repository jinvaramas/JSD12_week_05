// Exercise 7
// ----------
// GOAL: Log the matching message for each order status:
//   "processing" → "Your order is being processed."
//   "shipped"    → "Your order is on the way!"
//   "delivered"  → "Your order has been delivered."
//   anything else → "Status unknown. Please contact support."
// When orderStatus is "cancelled", nothing is logged. Fix the code.

const orderStatus = "cancelled";

if (orderStatus === "processing") {
  console.log("Your order is being processed.");
} else if (orderStatus === "shipped") {
  console.log("Your order is on the way!");
} else if (orderStatus === "delivered") {
  console.log("Your order has been delivered.");
}

// Fix: โจทย์ต้องการให้ กรณีอื่นๆ แสดงผลเป็น "Status unknown. Please contact support."
// และการเขียนต้องมี if .. else if .. และปิดด้วย else สำหรับกรณีอื่นๆ ดังนั้นข้อนี้ต้องมี else
// และต้องมี if else ของ cancelled 
if (orderStatus === "processing") {
  console.log("Your order is being processed.");

} else if (orderStatus === "shipped") {
  console.log("Your order is on the way!");
} else if (orderStatus === "delivered") {
  console.log("Your order has been delivered.");
} else if (orderStatus === "cancelled") {
  console.log("Your order has been cancelled.");
} else { console.log ("Status unknown. Please contact support.");
}


