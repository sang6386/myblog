+++
title = "JavaScript Essentials 1 – DOM và Event"
date = "2025-10-24"
draft = false
tags = ["JavaScript", "Web Development", "DOM", "Event Handling", "Frontend"]
categories = ["Lập trình web"]
+++

# 💻 JavaScript Essentials 1 – DOM và Event

Bài học này giúp bạn **tương tác với trang web** bằng cách thao tác DOM và xử lý sự kiện. Đây là bước quan trọng trước khi học framework như React, Vue hay Angular.

<!--more-->

## 🧩 1. DOM (Document Object Model)

**DOM** là cấu trúc cây đại diện cho HTML trong trình duyệt.  
Các node DOM bao gồm **elements**, **attributes**, và **text**.  

### 🔹 Thao tác DOM cơ bản

```js
// Lấy element theo ID
const heroTitle = document.getElementById("hero-title");
heroTitle.textContent = "Chào mừng đến với Blog!";

// Lấy elements theo class
const buttons = document.getElementsByClassName("btn-card");

// Lặp qua NodeList
Array.from(buttons).forEach(btn => btn.style.border = "2px solid cyan");
```
### 🔹 Thêm / Xóa / Thay đổi element
```js
// Tạo element mới
const newPara = document.createElement("p");
newPara.textContent = "Đây là đoạn text mới thêm vào DOM.";
document.body.appendChild(newPara);

// Xóa element
const oldPara = document.querySelector(".old-text");
oldPara.remove();

// Thay đổi style trực tiếp
heroTitle.style.color = "#0ff";
heroTitle.style.textShadow = "0 0 10px #0ff";
```

## 🧩 2. Event Handling (Xử lý sự kiện)
Event là hành vi của người dùng (click, hover, input, submit).

### 🔹 Thêm sự kiện
```js
const button = document.querySelector(".btn-card");
button.addEventListener("click", () => {
  alert("Bạn vừa click nút!");
});
```

### 🔹 Các loại event phổ biến
click – khi người dùng click chuột.
input – khi giá trị input thay đổi.
mouseover / mouseout – hover chuột.
submit – form được gửi đi.

### 🔹 Event delegation (Ủy quyền sự kiện)
Giúp quản lý nhiều element cùng loại hiệu quả:

```js
document.body.addEventListener("click", e => {
  if(e.target.classList.contains("btn-card")) {
    console.log("Button clicked:", e.target.textContent);
  }
});
```
📘 Tip: Sử dụng event delegation để tránh lặp quá nhiều listener, tiết kiệm bộ nhớ.

## 🧩 3. Manipulating Classes (Thêm/xóa class)
Thêm hoặc xóa class giúp thay đổi style mà không cần trực tiếp sửa CSS:

```js
Sao chép mã
// Thêm class
heroTitle.classList.add("highlight");

// Xóa class
heroTitle.classList.remove("highlight");

// Toggle (bật/tắt)
heroTitle.classList.toggle("active");
```
### 🔹 Ví dụ ứng dụng
```js
button.addEventListener("click", () => {
  heroTitle.classList.toggle("neon-glow");
});
```

## 🧩 4. Best Practices – DOM & Event
Tránh thao tác DOM quá nhiều lần: lưu các reference element, thay đổi batch.
Sử dụng event delegation khi nhiều element cùng loại.
Thêm/tách class thay vì style trực tiếp để dễ bảo trì CSS.
Gắn sự kiện sau khi DOM load:

```js
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM đã sẵn sàng");
});
```