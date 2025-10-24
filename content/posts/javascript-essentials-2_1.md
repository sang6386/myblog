+++
title = "JavaScript Essentials 2 (Phần 1) — Hàm nâng cao, Scope và Closure"
date = "2025-10-24"
draft = false
tags = ["JavaScript", "Cisco", "Web Development", "Advanced Functions", "Scope", "Closure"]
categories = ["Lập trình mạng", "Web Development"]
description = "Khám phá hàm nâng cao, phạm vi (scope) và closure trong JavaScript — cốt lõi của tư duy lập trình hiện đại theo khóa Cisco Networking Academy."
+++

# 🧠 JavaScript Essentials 2 — Hàm nâng cao, Scope và Closure

> **Tóm tắt:**  
> Đây là bài học chuyên sâu thuộc khóa **JavaScript Essentials 2** trên **Cisco Networking Academy**,  
> tập trung vào 3 khái niệm nền tảng giúp bạn hiểu cơ chế vận hành nội bộ của JavaScript:  
> **Hàm nâng cao (Advanced Functions)**, **Phạm vi (Scope)**, và **Closure (Bao đóng)**.  
> Nếu nắm vững chúng, bạn đã đi được nửa chặng đường để trở thành **Front-end Developer chuyên nghiệp**.

---

## 📘 Mục lục

1. [Giới thiệu](#giới-thiệu)  
2. [Hàm nâng cao (Advanced Functions)](#hàm-nâng-cao-advanced-functions)  
3. [Phạm vi (Scope) — Local & Global](#phạm-vi-scope--local--global)  
4. [Closure — Cơ chế “ghi nhớ” thần kỳ của hàm](#closure--cơ-chế-ghi-nhớ-thần-kỳ-của-hàm)  
5. [Ứng dụng thực tế của closure](#ứng-dụng-thực-tế-của-closure)  
6. [Mini Project — Bộ đếm thông minh (Smart Counter)](#mini-project--bộ-đếm-thông-minh-smart-counter)  
7. [Tổng kết & Best Practices](#tổng-kết--best-practices)

---

## 🔹 Giới thiệu

Trong JavaScript, **hàm không chỉ là khối mã thực thi**, mà còn là **đối tượng đặc biệt** có thể:
- Lưu vào biến
- Truyền làm tham số
- Trả về hàm khác

Nhờ đó, JavaScript được gọi là **“ngôn ngữ lập trình hàm (functional language)”**.

---

## ⚙️ 1. Hàm nâng cao (Advanced Functions)

### 📍 Hàm như một “giá trị”
Bạn có thể **truyền hàm vào hàm khác** hoặc **trả về một hàm** – gọi là **higher-order functions**.

```javascript
function greet(name) {
  console.log(`Xin chào, ${name}!`);
}

function processUserInput(callback) {
  const name = "Sang";
  callback(name);
}

processUserInput(greet);
```

---

🧩 Hàm ẩn danh & Arrow Function
```javascript

setTimeout(function() {
  console.log("Đây là hàm ẩn danh sau 2 giây");
}, 2000);

setTimeout(() => console.log("Arrow function sau 2 giây"), 2000);
```

---

## 🧭 2. Phạm vi (Scope) — Local & Global
Scope là vùng mà biến có thể được truy cập.
JavaScript có 3 loại chính:

Loại scope	Giải thích	Ví dụ
Global	Có thể truy cập ở mọi nơi	var x = 10
Function	Chỉ truy cập trong hàm	function test(){ let y=5; }
Block	Chỉ trong {} khi dùng let hoặc const	if(true){ const z=7; }

📘 Ví dụ minh họa:

```javascript
let globalVar = "Toàn cục";

function demoScope() {
  let localVar = "Cục bộ";
  console.log(globalVar); // OK
  console.log(localVar);  // OK
}

demoScope();
console.log(localVar); // ❌ Lỗi — không tồn tại ngoài hàm
```

💡 Best Practice:
Luôn khai báo biến bằng let hoặc const để tránh rò rỉ phạm vi (scope leakage).

---

## 🧩 3. Closure — Cơ chế “ghi nhớ” thần kỳ của hàm
Closure cho phép hàm “ghi nhớ” biến của phạm vi bên ngoài, ngay cả khi hàm đó được gọi sau khi phạm vi cha kết thúc.

📘 Ví dụ:

```javascript
Sao chép mã
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

💡 Phân tích:

createCounter() trả về một hàm con có thể truy cập count.

Biến count không bị mất đi nhờ closure.

➡️ Closure giúp mô phỏng biến riêng tư (private variable) trong JS.

---

### 🧪 4. Ứng dụng thực tế của Closure
🧱 Ví dụ: Giới hạn số lần đăng nhập sai
```javascript

function loginAttemptLimiter(maxAttempts) {
  let attempts = 0;

  return function() {
    attempts++;
    if (attempts > maxAttempts) {
      console.log("Tài khoản bị khóa!");
    } else {
      console.log(`Lần thử ${attempts}/${maxAttempts}`);
    }
  }
}

const checkLogin = loginAttemptLimiter(3);
checkLogin(); // Lần thử 1/3
checkLogin(); // Lần thử 2/3
checkLogin(); // Lần thử 3/3
checkLogin(); // Tài khoản bị khóa!
```
📘 Closure ở đây giữ lại biến attempts ngay cả khi hàm loginAttemptLimiter đã chạy xong.

---

## 🔧 5. Mini Project — Bộ đếm thông minh (Smart Counter)
🎯 Mục tiêu:
Tạo bộ đếm có các hàm increase(), decrease() và reset(), lưu trạng thái nhờ closure.

```javascript
function createSmartCounter() {
  let count = 0;

  return {
    increase: () => ++count,
    decrease: () => --count,
    reset: () => (count = 0),
    value: () => count
  };
}

const counter = createSmartCounter();
console.log(counter.increase()); // 1
console.log(counter.increase()); // 2
console.log(counter.decrease()); // 1
console.log(counter.value());    // 1
console.log(counter.reset());    // 0
```
💡 Điểm nổi bật:

count là biến riêng tư, chỉ truy cập thông qua các hàm.

Mô phỏng hướng đối tượng mà không cần class.