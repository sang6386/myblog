+++
title = "Networking Basics – Nền tảng mạng máy tính"
date = "2025-10-22"
draft = false
tags = ["Networking", "Cisco", "CCNA", "Computer Networks"]
categories = ["Lập trình mạng"]
+++

# 🌐 Networking Basics – Hiểu nền tảng mạng máy tính

Trong thời đại kết nối, **mạng máy tính** là nền tảng để mọi ứng dụng Internet hoạt động – từ việc duyệt web, gửi email cho đến gọi API giữa các hệ thống.  
Khóa học **Networking Basics** (Cisco Networking Academy) giúp bạn nắm được tư duy cốt lõi về cách dữ liệu di chuyển trong mạng và cách các thiết bị giao tiếp với nhau.

<!--more-->

## 🧩 1. Mạng máy tính là gì?

**Mạng máy tính (Computer Network)** là hệ thống các thiết bị (máy tính, router, switch, server, điện thoại, v.v.) được kết nối để **trao đổi dữ liệu**.

### 🔸 Ví dụ thực tế:
Trong một văn phòng:
- Router kết nối ra Internet.
- Switch phân phối tín hiệu đến các máy tính nội bộ.
- Các máy trạm truy cập tài nguyên mạng nội bộ hoặc web bên ngoài.

📘 **Mục tiêu của mạng:**  
> Truyền tải thông tin nhanh chóng, an toàn và hiệu quả giữa các thiết bị.

---

## 🧠 2. Mô hình OSI và TCP/IP

Hai mô hình kinh điển trong mạng là **OSI** và **TCP/IP**.  
Chúng mô tả cách dữ liệu được đóng gói, gửi đi và nhận lại qua nhiều tầng (layer).

| Mô hình OSI (7 tầng) | Mô hình TCP/IP (4 tầng) |
|-----------------------|--------------------------|
| Application           | Application              |
| Presentation          | Transport                |
| Session               | Internet                 |
| Transport             | Network Access           |
| Network               |                          |
| Data Link             |                          |
| Physical              |                          |

📘 **Chức năng tiêu biểu:**
- **Transport Layer**: quản lý luồng dữ liệu (TCP/UDP).  
- **Network Layer**: định tuyến gói tin (IP Address).  
- **Data Link Layer**: truyền dữ liệu qua card mạng (MAC Address).

---

## 🧮 3. Địa chỉ IP và Subnet

Mỗi thiết bị mạng cần một **địa chỉ IP duy nhất** để giao tiếp.  
Có 2 phiên bản:
- IPv4: 32-bit (ví dụ: `192.168.1.10`)
- IPv6: 128-bit (ví dụ: `fe80::1a2b:3c4d:5e6f:7g8h`)

### 🎯 Cấu trúc địa chỉ IPv4:
```text
192.168.1.10/24
