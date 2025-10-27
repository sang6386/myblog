+++
title = "Networking Basics – Địa chỉ IP và Routing"
date = "2025-10-23"
draft = false
tags = ["Networking", "Cisco", "CCNA", "IP Address", "Routing", "Subnetting"]
categories = ["Lập trình mạng"]
+++

# 🌐 Networking Basics – Địa chỉ IP và Routing

Hiểu cách **địa chỉ IP hoạt động** và **routing** giúp thiết lập mạng nội bộ và kết nối Internet.  
Bài viết này sẽ hướng dẫn từ cơ bản đến nâng cao, bao gồm **IP tĩnh/động**, **Subnetting**, **Routing**, và **ví dụ cấu hình Cisco**.

<!--more-->

## 🧩 1. Địa chỉ IP động và tĩnh

Mỗi thiết bị mạng cần một **địa chỉ IP duy nhất**. Có hai loại chính:

- **Static IP**: gán thủ công, không thay đổi.
  - Ưu điểm: ổn định, phù hợp máy chủ, router.
  - Nhược điểm: cần quản lý thủ công, dễ nhầm lẫn nếu mạng lớn.
- **Dynamic IP (DHCP)**: gán tự động bởi server DHCP.
  - Ưu điểm: dễ quản lý, tiết kiệm thời gian.
  - Nhược điểm: IP có thể thay đổi, không phù hợp thiết bị cần địa chỉ cố định.

### 🔹 Ví dụ thực tế:

| Thiết bị       | IP Static          | IP Dynamic (DHCP) |
|----------------|------------------|-----------------|
| Router         | 192.168.1.1       | -               |
| Server nội bộ  | 192.168.1.10      | -               |
| Máy tính nhân viên | -               | 192.168.1.101  |
| Máy in mạng    | -                 | 192.168.1.102  |

📘 **Tip:** Máy chủ và thiết bị mạng quan trọng luôn dùng Static IP, các máy trạm dùng DHCP.

---

## 🧩 2. Subnetting – Chia nhỏ mạng

Subnetting giúp tối ưu **sử dụng IP** và **tăng tính bảo mật**.  

- Ví dụ: mạng 192.168.1.0/24 có **256 địa chỉ**.  
- Chia thành 2 subnet `/25` sẽ có **2 subnet**, mỗi subnet 128 địa chỉ.

### 🔹 Cách tính subnet:

1. Xác định số lượng host cần:  
   Ví dụ: 50 host mỗi phòng ban → cần 6 bit cho host (2^6-2=62 host khả dụng).
2. Tính subnet mask: 32 - 6 = 26 → /26  
   Ví dụ subnet: 192.168.1.0/26, 192.168.1.64/26, 192.168.1.128/26, 192.168.1.192/26.

### 🔹 Ví dụ minh họa Cisco:

```text
# Cấu hình VLAN và IP trên switch Cisco
Switch(config)# interface vlan 10
Switch(config-if)# ip address 192.168.1.1 255.255.255.192
Switch(config-if)# no shutdown
```

## 🧩 3. Routing – Định tuyến gói tin
Routing quyết định đường đi của gói tin giữa các mạng khác nhau.

### 🔹 3.1 Static Routing
Thủ công, cấu hình đường đi cố định.

Phù hợp mạng nhỏ hoặc mạng thí nghiệm.

```text
Router(config)# ip route 192.168.2.0 255.255.255.0 192.168.1.2
Gói tin tới 192.168.2.0/24 sẽ qua gateway 192.168.1.2.
```

### 🔹 3.2 Dynamic Routing
Router tự cập nhật bảng định tuyến bằng giao thức.

Ví dụ: OSPF, RIP, EIGRP.

```text
Router(config)# router ospf 1
Router(config-router)# network 192.168.1.0 0.0.0.255 area 0
Lợi ích: tự động học mạng mới, giảm cấu hình thủ công.
```

### 🔹 3.3 Routing Table
Hiển thị các tuyến đã biết của router.

```text

Router# show ip route
Kết quả cho thấy network, next-hop, và interface.
```

📘 Tip: Hiểu Routing Table là chìa khóa để giải quyết các vấn đề kết nối mạng


