// Exercise 6
// ----------
// GOAL: Set buttonLabel to "Out of Stock" when stock is 0,
//       and "Add to Cart" when stock is greater than 0.
// The ternary is syntactically correct but the logic is wrong.
// Find and fix the bug.

const stock = 0;

const buttonLabel = stock > 0 ? "Out of Stock" : "Add to Cart";
console.log(buttonLabel);

// Fix: โจทย์ต้องการ stock = 0 → "Out of Stock" กับ stock > 0 → "Add to Cart"
        // syntax อยู่สลับที่กัน ดังนั้นจึงต้องย้าย Out of Stock กับ Add to Cart
const buttonLabel = stock > 0 ? "Add to Cart" : "Out of Stock";
console.log(buttonLabel);
