+++
title = "JavaScript Essentials 2 (Phần 2) — Đối tượng, Mảng và Lập trình Hướng Đối tượng (OOP)"
date = "2025-10-23"
draft = false
tags = ["JavaScript", "Cisco", "OOP", "Web Development", "Object", "Array", "Class"]
categories = ["Lập trình mạng", "Web Development"]
description = "Hiểu sâu về Object, Array và lập trình hướng đối tượng trong JavaScript — nền tảng phát triển ứng dụng web hiện đại."
+++

# 🧩 JavaScript Essentials 2 — Đối tượng, Mảng và Lập trình Hướng Đối Tượng (OOP)

> **Tóm tắt:**  
> Trong phần 2 của khóa **JavaScript Essentials 2 (Cisco Networking Academy)**,  
> bạn sẽ học cách **tổ chức dữ liệu bằng Object và Array**, và xây dựng chương trình có cấu trúc rõ ràng nhờ **Lập trình Hướng Đối Tượng (OOP)**.  
> Đây là kỹ năng bắt buộc cho bất kỳ lập trình viên web hoặc full-stack nào.

<!--more-->

## 📘 Mục lục

1. [Giới thiệu](#giới-thiệu)  
2. [Đối tượng (Object) — Cấu trúc dữ liệu linh hoạt](#đối-tượng-object--cấu-trúc-dữ-liệu-linh-hoạt)  
3. [Mảng (Array) — Làm việc với danh sách dữ liệu](#mảng-array--làm-việc-với-danh-sách-dữ-liệu)  
4. [OOP trong JavaScript — Class, Constructor, và Method](#oop-trong-javascript--class-constructor-và-method)  
5. [Kế thừa (Inheritance) và Từ khóa super()](#kế-thừa-inheritance-và-từ-khóa-super)  
6. [Mini Project — Quản lý sinh viên bằng OOP](#mini-project--quản-lý-sinh-viên-bằng-oop)  
7. [Tổng kết & Best Practices](#tổng-kết--best-practices)

---

## 🔹 Giới thiệu

Trước khi học framework như **React** hay **Node.js**, bạn cần hiểu **Object và Class** — hai nền tảng giúp JavaScript mô hình hóa thế giới thật.  
JavaScript không phải là ngôn ngữ thuần OOP như Java, nhưng lại cực kỳ linh hoạt trong việc mô phỏng hành vi hướng đối tượng.

---

## 🧱 1. Đối tượng (Object) — Cấu trúc dữ liệu linh hoạt

Đối tượng (Object) là tập hợp **các cặp khóa–giá trị (key–value pairs)**.  
Nó mô tả thực thể (entity) có thuộc tính (property) và hành vi (method).

📘 **Ví dụ:**
```javascript
const student = {
  name: "Nguyễn Ngọc Sang",
  age: 21,
  major: "Công nghệ thông tin",
  greet: function() {
    console.log(`Xin chào, mình là ${this.name}!`);
  }
};

student.greet(); // Xin chào, mình là Nguyễn Ngọc Sang!
console.log(student.age); // 21
```
---

##📚 2. Mảng (Array) — Làm việc với danh sách dữ liệu
Mảng là danh sách có thứ tự của các phần tử, có thể chứa nhiều kiểu dữ liệu khác nhau.

📘 Ví dụ:

```javascript

const scores = [85, 92, 78, 90];

console.log(scores[0]);  // 85
console.log(scores.length); // 4
⚙️ Các phương thức mảng thông dụng:
Phương thức	Mô tả	Ví dụ
push()	Thêm phần tử vào cuối	scores.push(88)
pop()	Xóa phần tử cuối	scores.pop()
map()	Tạo mảng mới từ mảng cũ	scores.map(x => x + 5)
filter()	Lọc phần tử theo điều kiện	scores.filter(x => x >= 80)
reduce()	Tính tổng, trung bình, v.v.	scores.reduce((a,b)=>a+b,0)

📘 Ví dụ nâng cao:

javascript
Sao chép mã
const avg = scores.reduce((sum, s) => sum + s, 0) / scores.length;
console.log(`Điểm trung bình: ${avg}`);
```

---

##⚙️ 3. OOP trong JavaScript — Class, Constructor, và Method
JavaScript hỗ trợ cú pháp hướng đối tượng qua class (ES6+).

📘 Ví dụ cơ bản:

```javascript

class Student {
  constructor(name, major) {
    this.name = name;
    this.major = major;
  }

  introduce() {
    console.log(`Xin chào, mình là ${this.name}, học ngành ${this.major}.`);
  }
}

const s1 = new Student("Sang", "Công nghệ thông tin");
s1.introduce();
```
💡 Giải thích:

constructor được gọi khi khởi tạo đối tượng.

this trỏ đến đối tượng hiện tại.

---

##🧬 4. Kế thừa (Inheritance) và Từ khóa super()
OOP trong JavaScript hỗ trợ kế thừa (inheritance) giúp lớp con mở rộng lớp cha.

📘 Ví dụ:

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Xin chào, mình là ${this.name}`);
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name); // Gọi constructor lớp cha
    this.subject = subject;
  }

  teach() {
    console.log(`${this.name} đang dạy môn ${this.subject}`);
  }
}

const teacher = new Teacher("Thầy Huy", "Mạng máy tính");
teacher.greet();
teacher.teach();
```

📘 Phân tích:

Teacher kế thừa từ Person → có thể dùng cả greet() và teach().

super() giúp kế thừa và mở rộng constructor của lớp cha.

---

## 💼 5. Mini Project — Quản lý sinh viên bằng OOP
🎯 Yêu cầu:
Xây dựng hệ thống quản lý sinh viên đơn giản bằng Class & Array.

```javascript
class Student {
  constructor(name, scores) {
    this.name = name;
    this.scores = scores;
  }

  getAverage() {
    return this.scores.reduce((a, b) => a + b, 0) / this.scores.length;
  }

  getRank() {
    const avg = this.getAverage();
    if (avg >= 90) return "Xuất sắc";
    if (avg >= 75) return "Khá";
    if (avg >= 50) return "Trung bình";
    return "Yếu";
  }
}

class StudentManager {
  constructor() {
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  listStudents() {
    this.students.forEach(s => {
      console.log(`${s.name}: ${s.getAverage().toFixed(2)} điểm — ${s.getRank()}`);
    });
  }
}

// Demo
const s1 = new Student("Sang", [92, 88, 95]);
const s2 = new Student("Lan", [76, 80, 70]);
const s3 = new Student("Minh", [60, 55, 50]);

const manager = new StudentManager();
manager.addStudent(s1);
manager.addStudent(s2);
manager.addStudent(s3);
manager.listStudents();
```

📘 Kết quả:

```makefile

Sang: 91.67 điểm — Xuất sắc
Lan: 75.33 điểm — Khá
Minh: 55.00 điểm — Trung bình
```