// Exercise 8 — Refactor
// ---------------------
// GOAL: The if...else below works correctly. Rewrite it as a single ternary
//       expression that assigns the value to shippingLabel.
// Hint: you only need one line to replace the entire if...else block.

const cartTotal = 1200;
let shippingLabel;

if (cartTotal >= 1000) {
  shippingLabel = "FREE";
} else {
  shippingLabel = "$9.99";
}

console.log("Shipping: " + shippingLabel);

// Refactor:
const shippingLabel = cartTotal >= 1000 ? "FREE" : "$9.99";
console.log("Shipping: " + shippingLabel);

// หาก cartTotal มากกว่าหรือเท่ากับ 1000 แสดง shippingLabel "FREE" แต่ถ้าไม่ถึงค่าส่ง "$9.99" 
// การย่อเป็น ternary รูปแบบ condition ? valueIfTrue : valueIfFalse
// condition → cartTotal >= 1000
// true → "FREE"
// false → "$9.99"
// ตัวอย่างการแสดงผล shippingLabel = "$9.99";