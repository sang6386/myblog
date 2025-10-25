+++
title = "Networking Basics – VLAN và Switch nâng cao"
date = "2025-10-24"
draft = false
tags = ["Networking", "Cisco", "CCNA", "VLAN", "Switch", "Trunk", "Access Port"]
categories = ["Lập trình mạng"]
+++

# 🌐 Networking Basics – VLAN và Switch nâng cao

Khóa học này giúp bạn hiểu **Virtual LAN (VLAN)**, các loại switch (Layer 2/3), và kỹ thuật cấu hình switch nâng cao trong doanh nghiệp.  
Bài viết phù hợp cho học viên **Cisco Networking Academy** muốn thực hành setup mạng chuyên nghiệp.

---

## 🧩 1. VLAN là gì?

**VLAN (Virtual LAN)** là phương pháp **tách mạng vật lý thành nhiều mạng logic**.  
Mục đích:

- Cải thiện bảo mật: người dùng trong VLAN riêng không truy cập VLAN khác nếu không được phép.  
- Tối ưu băng thông: giảm broadcast domain.  
- Quản lý dễ dàng: mỗi phòng ban, nhóm thiết bị có VLAN riêng.

### 🔹 Ví dụ thực tế:

| VLAN | Phòng ban           | IP Subnet         |
|------|-------------------|-----------------|
| 10   | Kế toán           | 192.168.10.0/24 |
| 20   | Kỹ thuật          | 192.168.20.0/24 |
| 30   | Nhân sự           | 192.168.30.0/24 |

📘 **Tip:** Luôn lập sơ đồ VLAN trước khi cấu hình để tránh xung đột IP và quản lý hiệu quả.

---

## 🧩 2. Switch Layer 2 và Layer 3

Switch hoạt động ở **Layer 2 hoặc Layer 3** trong mô hình OSI:

- **Layer 2 (Data Link)**:
  - Chuyển gói tin dựa trên **MAC Address**.
  - Thường dùng cho **mạng LAN nội bộ**.
  - Hỗ trợ VLAN tagging (802.1Q).
- **Layer 3 (Network)**:
  - Chuyển gói tin dựa trên **IP Address**.
  - Hỗ trợ **routing nội bộ** giữa các VLAN.
  - Thích hợp cho mạng lớn, doanh nghiệp.

### 🔹 Ví dụ minh họa:

```text
# Layer 2 VLAN trên switch Cisco
Switch(config)# vlan 10
Switch(config-vlan)# name Accounting
Switch(config-vlan)# exit
```
# Layer 3 Switch: cấu hình IP trên VLAN
Switch(config)# interface vlan 10
Switch(config-if)# ip address 192.168.10.1 255.255.255.0
Switch(config-if)# no shutdown

📘 Tip: Layer 3 switch giúp vừa switch vừa routing mà không cần router riêng.

## 🧩 3. Trunk Port và Access Port
Access Port: nối thiết bị cuối (PC, máy in) và chỉ thuộc 1 VLAN.

Trunk Port: nối switch với switch, mang nhiều VLAN cùng lúc (802.1Q tagging).

🔹 Ví dụ cấu hình:
```text
# Cấu hình Access Port cho PC thuộc VLAN 10
Switch(config)# interface g0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
Switch(config-if)# no shutdown

# Cấu hình Trunk Port nối switch
Switch(config)# interface g0/24
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk allowed vlan 10,20,30
Switch(config-if)# no shutdown
```

📘 Tip:

Sử dụng Access Port cho từng thiết bị cuối.

Sử dụng Trunk Port cho uplink giữa các switch hoặc với router Layer 3.

## 🧩 4. VLAN Routing (Inter-VLAN Routing)
Để các VLAN khác nhau giao tiếp:

Dùng Router-on-a-stick hoặc Layer 3 switch.

Gán sub-interface hoặc interface VLAN tương ứng.

🔹 Ví dụ Router-on-a-stick:
```text
Router(config)# interface g0/0.10
Router(config-if)# encapsulation dot1Q 10
Router(config-if)# ip address 192.168.10.254 255.255.255.0

Router(config)# interface g0/0.20
Router(config-if)# encapsulation dot1Q 20
Router(config-if)# ip address 192.168.20.254 255.255.255.0
Bây giờ VLAN 10 và VLAN 20 có thể giao tiếp qua router
```