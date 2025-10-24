+++
title = "JavaScript Essentials 1(Phần 2) — Biểu thức, Toán tử và Cấu trúc điều kiện "
date = "2025-10-23"
draft = false
tags = ["JavaScript", "Cisco", "Programming", "Control Flow", "Best Practices"]
categories = ["Lập trình mạng", "Web Development"]
description = "Phân tích chuyên sâu về biểu thức, toán tử và cấu trúc điều kiện trong JavaScript — lý thuyết, ví dụ, best-practice và các tình huống thực tế."
+++

# ⚙️ JavaScript Essentials 1 — Biểu thức, Toán tử và Cấu trúc điều kiện (Chuyên sâu)

> **Tóm tắt:** 
Bài viết này giúp bạn hiểu sâu về cách JavaScript **tính toán biểu thức**, **vận hành toán tử**, và **điều khiển luồng chương trình** qua cấu trúc điều kiện.  
> Dựa theo khóa học *JavaScript Essentials 1* trên Cisco Networking Academy.

---

## 📘 Mục lục
1. [Giới thiệu](#giới-thiệu)  
2. [Biểu thức (Expressions)](#biểu-thức-expressions)  
3. [Toán tử (Operators)](#toán-tử-operators)  
4. [Cấu trúc điều kiện (Conditional Structures)](#cấu-trúc-điều-kiện-conditional-structures)  
5. [Bài tập thực hành nhỏ](#bài-tập-thực-hành-nhỏ)  
6. [Tổng kết](#tổng-kết)

---

## 🔹 Giới thiệu

Trong lập trình, **biểu thức** là công cụ biểu diễn logic và biến đổi dữ liệu, còn **toán tử** là hành động thực hiện trên các giá trị.  
**Cấu trúc điều kiện** giúp điều hướng luồng chương trình tùy theo các tình huống cụ thể.  
Hiểu đúng cơ chế hoạt động giúp code **hiệu quả**, **an toàn** và **dễ bảo trì**.

---

## 🧩 Biểu thức (Expressions)

**Biểu thức** là sự kết hợp giữa giá trị, biến và toán tử để tạo ra một kết quả.

📘 **Ví dụ cơ bản:**
```javascript
let a = 10;
let b = 5;
let c = a * b + 2; // c = 52
console.log(c);
```

## ⚖️ Ưu tiên toán tử (Operator Precedence)
Quyết định phép toán nào được thực hiện trước.

```javascript
Sao chép mã
let x = 2 + 3 * 4;  // 2 + (3*4) = 14
let y = (2 + 3) * 4; // 20
```

⚡ Side effects trong biểu thức
Một số biểu thức có thể thay đổi trạng thái chương trình (side effect):

```javascript
Sao chép mã
let i = 0;
let v = ++i + Math.abs(-2); // ++i thay đổi i; v = 3
```

💡 Lưu ý: Hạn chế viết biểu thức có nhiều side-effect vì khó debug và dễ gây lỗi logic.

## 🔢 Toán tử (Operators)
🧮 3.1 Toán tử số học
Toán tử	Mô tả	Ví dụ	Kết quả
+	Cộng	5 + 3	8
-	Trừ	9 - 4	5
*	Nhân	6 * 2	12
/	Chia	10 / 2	5
%	Lấy dư	7 % 3	1
**	Lũy thừa	2 ** 3	8

📘 Lưu ý:

```javascript
'5' + 3; // "53" — nối chuỗi
Number('5') + 3; // 8 — ép kiểu về số
```

🧩 3.2 Toán tử gán

```javascript
let x = 10;
x += 5; // 15
x *= 2; // 30
```

⚖️ 3.3 Toán tử so sánh
Toán tử	Mô tả	Ví dụ	Kết quả
==	So sánh bằng (ép kiểu)	"5" == 5	true
===	So sánh tuyệt đối	"5" === 5	false
!=	Khác	10 != 5	true
>	Lớn hơn	8 > 3	true
<=	Nhỏ hơn hoặc bằng	3 <= 2	false

✅ Khuyến nghị: Luôn dùng === và !== để tránh lỗi ép kiểu tự động.

🔐 3.4 Toán tử logic & short-circuit
Toán tử	Ý nghĩa	Ví dụ	Kết quả
&&	AND	(x > 0 && y > 0)	true
||	OR	(x > 0 || y > 0)	true
!	NOT	!(x > 0)	false

📘 Short-circuit evaluation:

```javascript
0 && "A";        // 0 (falsy)
"Hello" && 42;   // 42
null || "Mặc định"; // "Mặc định"
⚙️ 3.5 Toán tử khác
javascript
Sao chép mã
typeof 42; // "number"
"age" in { age: 20, name: "Sang" }; // true
delete obj.prop; // xóa thuộc tính
```

## 🧠 Cấu trúc điều kiện (Conditional Structures)
🔸 4.1 if / else if / else
```javascript
let score = 85;
if (score >= 90) console.log("Xuất sắc");
else if (score >= 75) console.log("Khá");
else console.log("Trung bình");
```

📘 Best practice: Dùng return sớm để giảm độ sâu lồng nhau.

🔸 4.2 Toán tử 3 ngôi (Ternary Operator)
```javascript
let age = 18;
let result = (age >= 18) ? "Đủ tuổi" : "Chưa đủ tuổi";
```

⚠️ Tránh lạm dụng toán tử 3 ngôi trong logic phức tạp — dễ gây khó hiểu.

🔸 4.3 switch / case

```javascript
let day = 3;
switch(day) {
  case 1: console.log("Thứ Hai"); break;
  case 2: console.log("Thứ Ba"); break;
  case 3: console.log("Thứ Tư"); break;
  default: console.log("Không xác định");
}
```

🔸 4.4 Guard Clauses & Early Return

```javascript

function process(order) {
  if (!order) return;
  if (!order.items?.length) return;
  // xử lý tiếp...
}
```

💡 Guard clause giúp code ngắn gọn, dễ đọc và ít bug hơn.

## 🧩 **Bài tập thực hành nhỏ**
Viết hàm nhận danh sách điểm và xếp loại sinh viên.

```javascript
function classifyStudent(student) {
  if (!student || !Array.isArray(student.scores)) return "No Data";

  const valid = student.scores.filter(s => typeof s === 'number' && !Number.isNaN(s));
  if (valid.length === 0) return "No Data";

  const avg = valid.reduce((sum, s) => sum + s, 0) / valid.length;

  if (avg >= 90) return "Xuất sắc";
  if (avg >= 75) return "Khá";
  if (avg >= 50) return "Trung bình";
  return "Không đạt";
}

console.log(classifyStudent({name:"Sang",scores:[92,88,95]})); // Xuất sắc
console.log(classifyStudent({name:"Lan",scores:[60,70,50]})); // Trung bình
```

📘 Phân tích:

Dữ liệu đầu vào được kiểm tra kỹ.

Sử dụng filter() và reduce() để tính trung bình.

Tránh crash khi dữ liệu không hợp lệ.