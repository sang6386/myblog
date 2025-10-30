+++
title = "About Me"
date = "2025-10-21"
layout = "about"
image = "images/avatar.jpg"
cv = "/files/CV_NGUYENNGOCSANG.jpg"
github = "https://github.com/sang6386"
linkedin = "https://linkedin.com/in/sang6386"
email = "mailto:123ngsang25@gmail.com"
draft = false

[[params.certificates]]
title = "JavaScript Essentials 1"
image = "/certificates/javascript/javascript-essentials-1.png"
pdf = "/certificates/javascript/JavaScriptEssentials1.pdf"

[[params.certificates]]
title = "JavaScript Essentials 2"
image = "/certificates/javascript/javascript-essentials-2.png"
pdf = "/certificates/javascript/JavaScriptEssentials2.pdf"

[[params.certificates]]
title = "Networking Basics"
image = "/certificates/networkingbasic/networking-basics.png"
pdf = "/certificates/networkingbasic/NetworkingBasics.pdf"
+++


<section class="mw7 center ph3 pv5 lh-copy fade-in-up">

  <!-- 🧑‍💻 Ảnh và thông tin cá nhân -->
  <h1 class="f2 fw7 mt3 mb2 black">Nguyễn Ngọc Sang</h1>
  <p class="f5 light-silver mt0">
    Sinh viên lớp <strong>22DTHC5</strong> – Ngành <em>Công nghệ Thông tin</em>
  </p>
  <a href="/files/CV_NGUYENNGOCSANG.jpg" class="btn-cv grow mt3" target="_blank">
    📄 Download CV
  </a>
</div>

  <!-- 💻 Giới thiệu bản thân -->
  <div class="card glass p3 mb5">
    <h3 class="tc black-90">💻 Giới thiệu bản thân</h3>
    <p class="f5 -80 mt3">
      Xin chào! Mình là <strong>Nguyễn Ngọc Sang</strong>, một sinh viên yêu thích công nghệ — đặc biệt là
      <em>lập trình mạng, web, và hệ thống phân tán</em>.  
      Mình thích tìm hiểu cách ứng dụng giao tiếp, hoạt động phía sau và tối ưu hiệu suất qua từng dòng code.
    </p>
  </div>

  <!-- 🧠 Kỹ năng -->
  <div class="card glass p3 mb5">
    <h3 class="tc black-90">🧠 Kỹ năng chuyên môn</h3>
    <div class="flex flex-wrap justify-center mt4">
      <ul class="list pl0 ma3 w-50-ns w-100 black-80">
        <li>⚙️ <strong>Ngôn ngữ:</strong> C#, Python (cơ bản)</li>
        <li>🌐 <strong>Frontend:</strong> HTML, CSS, JavaScript</li>
      </ul>
      <ul class="list pl0 ma3 w-50-ns w-100 black-80">
        <li>🗄️ <strong>CSDL:</strong> SQL Server, MySQL</li>
        <li>☁️ <strong>Quan tâm:</strong> Socket, RMI, Cloud Computing</li>
      </ul>
    </div>
  </div>

  <!-- 🎯 Mục tiêu -->
  <div class="card glass p3 mb5">
    <h3 class="tc black-90">🎯 Mục tiêu nghề nghiệp</h3>
    <blockquote class="f5 black-80 i mt3">
      “Mục tiêu của mình là trở thành <strong>Full-stack Developer</strong>, xây dựng các ứng dụng Web và hệ thống phân tán hiệu quả, sáng tạo và thân thiện với người dùng.”
    </blockquote>
  </div>

  <!-- 🌐 Liên hệ -->
  <div class="tc mt5 fade-in-up">
    <div align="center">
  <a href="https://github.com/sang6386" target="_blank" class="link dim blue mh2">🐙 GitHub</a>
  <a href="mailto:1120ngsang25@gmail.com" class="link dim blue mh2">✉️ Gmail</a>
  </div>

</section>

<style>
/* 🌌 Nền gradient công nghệ */
body {
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  color: #e6e6e6;
  font-family: 'Inter', sans-serif;
}

/* 💫 Card trong suốt nhẹ (hiệu ứng glassmorphism) */
.card.glass {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card.glass:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.35);
}

/* ✨ Nút tải CV */
.btn-cv {
  display: inline-block;
  background: linear-gradient(90deg, #667eea, #764ba2);
  color: white;
  padding: 0.6rem 1.8rem;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}
.btn-cv:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(118, 75, 162, 0.3);
}

/* 🪄 Hover ảnh avatar */
.hover-scale {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.hover-scale:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(118, 75, 162, 0.5);
}

/* 🚀 Hiệu ứng xuất hiện */
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.8s ease-in-out forwards;
}
@keyframes fadeUp {
  to { opacity: 1; transform: translateY(0); }
}

/* 📱 Responsive */
@media (max-width: 768px) {
  .card.glass { padding: 1rem; }
  img { width: 160px !important; }
  .btn-cv { padding: 0.5rem 1.2rem; font-size: 0.9rem; }
}
</style>
