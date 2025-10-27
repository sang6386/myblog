+++
title = "JavaScript Essentials 1 (Phần 1) — Biến, Hàm và Luồng điều khiển "
date = "2025-10-22"
draft = false
tags = ["JavaScript", "Cisco", "Web Development", "Programming", "Logic Flow"]
categories = ["Lập trình mạng", "Web Development"]
description = "Tổng quan toàn diện về biến, hàm và luồng điều khiển trong JavaScript — nền tảng tư duy lập trình hiện đại, theo khóa học Cisco Networking Academy."
+++

# 💻 JavaScript Essentials 1 — Biến, Hàm và Luồng điều khiển 

> **Tóm tắt:**  
> Bài viết này tổng hợp và phân tích nội dung trọng tâm từ khóa học **JavaScript Essentials 1** của **Cisco Networking Academy**, tập trung vào 3 nền tảng:  
> **Biến (Variables)** – nơi lưu trữ dữ liệu,  
> **Hàm (Functions)** – cách tái sử dụng logic,  
> **Luồng điều khiển (Control Flow)** – điều hướng chương trình.  

<!--more-->

## 📘 Mục lục
1. [JavaScript là gì?](#javascript-là-gì)  
2. [Biến và Kiểu dữ liệu](#biến-và-kiểu-dữ-liệu)  
3. [Hàm (Functions)](#hàm-functions)  
4. [Luồng điều khiển (Control Flow)](#luồng-điều-khiển-control-flow)  
5. [Bài tập minh họa](#bài-tập-minh-họa)  
6. [Tổng kết & Best Practices](#tổng-kết--best-practices)

---

## 🧭 1. JavaScript là gì?

**JavaScript (JS)** là ngôn ngữ lập trình *động*, chạy trực tiếp trên trình duyệt, cho phép trang web tương tác với người dùng theo thời gian thực.

📗 **Ứng dụng của JavaScript:**
- Thay đổi nội dung và giao diện trang web (DOM manipulation)
- Xử lý sự kiện người dùng (user events)
- Giao tiếp với máy chủ qua API hoặc AJAX
- Kiểm tra dữ liệu nhập trước khi gửi đi (form validation)

📘 **Ví dụ đầu tiên:**
```html
<!DOCTYPE html>
<html>
  <body>
    <h2>Chào mừng bạn đến với JavaScript!</h2>
    <p id="demo">Đây là ví dụ đầu tiên</p>

    <script>
      document.getElementById("demo").innerText = "Xin chào, mình là Sang!";
    </script>
  </body>
</html>
```

---

## 🧩 2. Biến và Kiểu dữ liệu

Biến (Variable) là nơi lưu trữ giá trị trong bộ nhớ.
JavaScript hỗ trợ 3 cách khai báo biến:

```html
var name = "Sang";    // cũ, có phạm vi function
let age = 20;         // phạm vi block
const PI = 3.14159;   // hằng số, không thay đổi
```

📘 **Kiểu dữ liệu phổ biến:**

| **Kiểu**            | **Ví dụ**                     | **Ghi chú**                          |
|----------------------|-------------------------------|--------------------------------------|
| String              | `"Hello"`                     | Chuỗi ký tự                          |
| Number              | `42`, `3.14`                  | Số nguyên & thực                     |
| Boolean             | `true`, `false`               | Logic                                |
| Array               | `[1, 2, 3]`                   | Danh sách giá trị                    |
| Object              | `{name: "Sang", age: 20}`     | Dạng từ khóa – giá trị               |
| Null / Undefined    | `null`, `undefined`           | Không có giá trị / chưa khởi tạo     |


📎 Ép kiểu (Type Coercion)
JavaScript tự động chuyển kiểu trong nhiều trường hợp:
```html
console.log("5" + 3); // "53" (chuỗi)
console.log("5" - 3); // 2 (số)
```

💡 Best Practice: Luôn kiểm soát kiểu dữ liệu rõ ràng khi tính toán.

---

## 🧠 3. Hàm (Functions)

Hàm là khối mã thực hiện một tác vụ cụ thể.
Bạn có thể tái sử dụng hàm nhiều lần để giảm trùng lặp code.

📍 Cú pháp cơ bản:
```html
function greet(name) {
  return `Xin chào, ${name}!`;
}

console.log(greet("Sang"));
```
🧩 Biến thể hiện đại:

```html
const greet = (name) => `Xin chào, ${name}!`;
```
🧪 Hàm có tham số mặc định:

```html
function sum(a = 0, b = 0) {
  return a + b;
}

console.log(sum(5, 7)); // 12
console.log(sum(5));    // 5
```

📘 Ghi nhớ:

Mỗi hàm có thể return một giá trị.

Nếu không có return, kết quả là undefined.

---

## 🔄 4. Luồng điều khiển (Control Flow)

JavaScript chạy tuần tự, nhưng bạn có thể điều hướng luồng logic bằng các cấu trúc điều kiện và vòng lặp.

🔹 Cấu trúc if / else

```html
let score = 85;

if (score >= 90) console.log("Xuất sắc");
else if (score >= 75) console.log("Khá");
else console.log("Trung bình");
```
🔹 Cấu trúc switch / case

```html
let day = 3;
switch(day) {
  case 1: console.log("Thứ Hai"); break;
  case 2: console.log("Thứ Ba"); break;
  case 3: console.log("Thứ Tư"); break;
  default: console.log("Không xác định");
}
```
🔹 Vòng lặp for

```html
for (let i = 1; i <= 5; i++) {
  console.log("Lần thứ " + i);
}
```
🔹 Vòng lặp while

```html
let count = 0;
while (count < 3) {
  console.log("Đếm: " + count);
  count++;
}
```
---

## 🧮 5. Bài tập minh họa

🎯 Yêu cầu:
Viết chương trình yêu cầu người dùng nhập điểm và hiển thị xếp loại.

```html
let score = prompt("Nhập điểm của bạn:");

if (score >= 90) alert("Xuất sắc");
else if (score >= 75) alert("Khá");
else if (score >= 50) alert("Trung bình");
else alert("Không đạt");
```

📘 Phân tích:

prompt() nhận dữ liệu từ người dùng.

if / else xử lý điều kiện logic.

alert() hiển thị kết quả.