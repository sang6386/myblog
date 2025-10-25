+++
title = "JavaScript Essentials 2 – Asynchronous và Fetch API"
date = "2025-10-26"
draft = false
tags = ["JavaScript", "Web Development", "Async", "Fetch API", "Promises", "Frontend"]
categories = ["Lập trình web"]
+++

# 💻 JavaScript Essentials 2 – Asynchronous và Fetch API

Hiểu **bất đồng bộ (Asynchronous)** giúp xử lý dữ liệu từ server hiệu quả, tránh block UI, và là nền tảng cho SPA (Single Page Application).

---

### 🧩 1. Promises

**Promise** đại diện cho một giá trị có thể có trong tương lai, giúp xử lý các tác vụ bất đồng bộ.

```js
fetch("https://api.example.com/data")
  .then(response => response.json())   // Chuyển response sang JSON
  .then(data => {
    console.log("Dữ liệu nhận được:", data);
  })
  .catch(err => {
    console.error("Lỗi khi fetch dữ liệu:", err);
  });
```

🔹 Giải thích
.then() – xử lý khi Promise thành công.

.catch() – xử lý lỗi nếu Promise bị reject.

.finally() – thực thi bất kể thành công hay thất bại.

### 🧩 2. Async / Await
async/await giúp viết code bất đồng bộ giống đồng bộ, dễ đọc và bảo trì.

```js
Sao chép mã
async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log("Dữ liệu nhận được:", data);
  } catch(err) {
    console.error("Lỗi:", err);
  }
}

// Gọi hàm
getData();
```
🔹 Giải thích
async biến một hàm trả về Promise.

await tạm dừng hàm cho tới khi Promise resolve.

Sử dụng try/catch để bắt lỗi.

📘 Tip: Luôn bọc await trong try/catch để xử lý lỗi hiệu quả.

### 🧩 3. JSON và API
API thường trả dữ liệu JSON.

Dữ liệu này có thể parse và render trực tiếp lên HTML.

```js
async function renderUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  
  const container = document.getElementById("user-list");
  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.name} (${user.email})`;
    container.appendChild(li);
  });
}
renderUsers();
```
🔹 Tip
JSON là định dạng phổ biến cho REST API.

DOM manipulation + async giúp render dữ liệu nhanh chóng.

### 🧩 4. Error Handling nâng cao
```js
async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { signal: controller.signal });
    return await response.json();
  } catch(err) {
    console.error("Lỗi fetch hoặc timeout:", err);
    throw err;
  } finally {
    clearTimeout(id);
  }
}
```
📘 Tip: Kiểm soát timeout khi fetch dữ liệu từ server để tránh treo UI.

## 🧩 5. Best Practices – Asynchronous JS
Luôn xử lý lỗi với try/catch hoặc .catch().

Sử dụng async/await thay vì chain .then() quá dài.

Không block UI – các thao tác nặng nên chạy async.

Kết hợp với DOM manipulation để render dữ liệu theo thời gian thực.

Sử dụng AbortController để hủy request không cần thiết.
