// ==================== BUỔI 3: JAVASCRIPT CƠ BẢN ====================
console.log("=== BUỔI 3: CÂU LỆNH ĐIỀU KIỆN, VÒNG LẶP VÀ HÀM ===");

// ==================== 1. CÂU LỆNH ĐIỀU KIỆN ====================
console.log("\n--- 1. CÂU LỆNH ĐIỀU KIỆN ---");

// Ví dụ 1: if/else
let age = 20;
if (age >= 18) {
  console.log("Bạn đã đủ tuổi trưởng thành");
} else {
  console.log("Bạn chưa đủ tuổi trưởng thành");
}

// Ví dụ 2: if/else if/else
let score = 85;
if (score >= 90) {
  console.log("Điểm A - Xuất sắc");
} else if (score >= 80) {
  console.log("Điểm B - Giỏi");
} else if (score >= 70) {
  console.log("Điểm C - Khá");
} else if (score >= 60) {
  console.log("Điểm D - Trung bình");
} else {
  console.log("Điểm F - Yếu");
}

// Ví dụ 3: switch case
let day = 3;
switch (day) {
  case 1:
    console.log("Thứ Hai");
    break;
  case 2:
    console.log("Thứ Ba");
    break;
  case 3:
    console.log("Thứ Tư");
    break;
  case 4:
    console.log("Thứ Năm");
    break;
  case 5:
    console.log("Thứ Sáu");
    break;
  case 6:
    console.log("Thứ Bảy");
    break;
  case 7:
    console.log("Chủ Nhật");
    break;
  default:
    console.log("Ngày không hợp lệ");
}

// ==================== 2. VÒNG LẶP ====================
console.log("\n--- 2. VÒNG LẶP ---");

// Ví dụ 1: for loop
console.log("For loop - Đếm từ 1 đến 5:");
for (let i = 1; i <= 5; i++) {
  console.log("Số: " + i);
}

// Ví dụ 2: while loop
console.log("While loop - Đếm ngược từ 5:");
let count = 5;
while (count > 0) {
  console.log("Đếm ngược: " + count);
  count--;
}

// Ví dụ 3: do-while loop
console.log("Do-while loop:");
let num = 1;
do {
  console.log("Số: " + num);
  num++;
} while (num <= 3);

// ==================== 3. HÀM (FUNCTIONS) ====================
console.log("\n--- 3. HÀM ---");

// Ví dụ 1: Function Declaration
function greetUser(name) {
  return "Xin chào, " + name + "!";
}
console.log(greetUser("Anh Vũ"));

// Ví dụ 2: Function Expression
const calculateSum = function (a, b) {
  return a + b;
};
console.log("Tổng 5 + 3 =", calculateSum(5, 3));

// Ví dụ 3: Arrow Function
const multiply = (x, y) => x * y;
console.log("Tích 4 × 6 =", multiply(4, 6));

// Ví dụ 4: Arrow Function với một tham số
const square = (n) => n * n;
console.log("Bình phương của 7 =", square(7));

// ==================== 4. SCOPE VÀ HOISTING ====================
console.log("\n--- 4. SCOPE VÀ HOISTING ---");

// Global scope
var globalVar = "Biến global";

function demonstrateScope() {
  // Function scope
  var functionVar = "Biến trong hàm";

  if (true) {
    // Block scope
    let blockVar = "Biến trong block";
    const blockConst = "Hằng số trong block";

    console.log("Trong block:", blockVar, blockConst);
  }

  console.log("Trong hàm:", functionVar);
  console.log("Truy cập global:", globalVar);
}

demonstrateScope();

// ==================== 5. BÀI TẬP THỰC HÀNH ====================
console.log("\n--- 5. BÀI TẬP THỰC HÀNH ---");

// Bài tập 1: Kiểm tra số chẵn lẻ
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return number + " là số chẵn";
  } else {
    return number + " là số lẻ";
  }
}
console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));

// Bài tập 2: Tính giai thừa
function factorial(n) {
  if (n <= 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log("5! =", factorial(5));

// Bài tập 3: Tìm số lớn nhất trong 3 số
const findMax = (a, b, c) => {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
};
console.log("Số lớn nhất trong (10, 25, 15):", findMax(10, 25, 15));

// Bài tập 4: In bảng cửu chương
function printMultiplicationTable(n) {
  console.log(`Bảng cửu chương ${n}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} × ${i} = ${n * i}`);
  }
}
printMultiplicationTable(7);

// ==================== 6. BÀI TẬP THỰC HÀNH NÂNG CAO ====================
console.log("\n--- 6. BÀI TẬP THỰC HÀNH NÂNG CAO ---");

// ===== Bài 1: Tính Hóa Đơn Mua Sắm =====
console.log("=== Bài 1: Tính Hóa Đơn Mua Sắm ===");
function calculateInvoice() {
  let price = parseFloat(prompt("Nhập giá sản phẩm:"));
  let quantity = parseInt(prompt("Nhập số lượng:"));

  if (!isNaN(price) && !isNaN(quantity)) {
    let total = price * quantity;
    total -= total * 0.1; // giảm giá 10%
    total += total * 0.05; // VAT 5%
    console.log("Tổng hóa đơn (đã giảm giá + VAT): " + total);
    return total;
  } else {
    console.log("Vui lòng nhập số hợp lệ!");
    return null;
  }
}

// ===== Bài 2: Kiểm Tra Số Chẵn/Lẻ =====
console.log("=== Bài 2: Kiểm Tra Số Chẵn/Lẻ ===");
function checkEvenOddAdvanced() {
  let number = parseInt(prompt("Nhập một số:"));
  if (!isNaN(number)) {
    console.log(number + " là số " + (number % 2 === 0 ? "chẵn" : "lẻ"));
  } else {
    console.log("Vui lòng nhập số hợp lệ!");
  }
}

// ===== Bài 3: Máy Tính BMI =====
console.log("=== Bài 3: Máy Tính BMI ===");
function calculateBMI() {
  let weight = parseFloat(prompt("Nhập cân nặng (kg):"));
  let height = parseFloat(prompt("Nhập chiều cao (m):"));

  if (!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) {
    let bmi = weight / (height * height);

    if (bmi < 18.5) {
      console.log("Gầy (BMI: " + bmi.toFixed(2) + ")");
    } else if (bmi >= 25) {
      console.log("Béo (BMI: " + bmi.toFixed(2) + ")");
    } else {
      console.log("Bình thường (BMI: " + bmi.toFixed(2) + ")");
    }
    return bmi;
  } else {
    console.log("Vui lòng nhập số hợp lệ!");
    return null;
  }
}

// ===== Bài 4: Kiểm Tra Đăng Nhập =====
console.log("=== Bài 4: Kiểm Tra Đăng Nhập ===");
function checkLogin() {
  let username = prompt("Nhập username:");
  let password = prompt("Nhập password:");

  if (username === "admin" && password === "123") {
    console.log("Đăng nhập thành công");
    return true;
  } else {
    console.log("Sai thông tin đăng nhập");
    return false;
  }
}

// ===== Bài 5: Kiểm Tra Năm Nhuận =====
console.log("=== Bài 5: Kiểm Tra Năm Nhuận ===");
function checkLeapYear() {
  let year = parseInt(prompt("Nhập năm:"));

  if (!isNaN(year) && year > 0) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      console.log(year + " là năm nhuận");
      return true;
    } else {
      console.log(year + " không phải năm nhuận");
      return false;
    }
  } else {
    console.log("Năm không hợp lệ!");
    return null;
  }
}

console.log("\n=== KẾT THÚC BUỔI 3 ===");
