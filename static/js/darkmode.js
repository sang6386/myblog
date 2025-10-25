document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return; // nếu không có nút thì dừng lại

  // --- Lấy theme đang lưu ---
  const currentTheme = localStorage.getItem("theme") || "light";
  html.setAttribute("data-theme", currentTheme);

  // --- Xử lý khi bấm nút ---
  toggle.addEventListener("click", () => {
    const newTheme =
      html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
});
