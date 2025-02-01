// ✅ دالة لفتح النافذة المنبثقة
function openPopup(title, text) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-text").innerText = text;
    document.getElementById("popup").style.display = "block";
}

// ✅ دالة لإغلاق النافذة
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// ✅ ربط الأزرار بالنوافذ المنبثقة
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".button:nth-child(1)").onclick = function () {
        openPopup("تحليل اليوم", "تفاصيل تحليل اليوم...");
    };
    document.querySelector(".button:nth-child(2)").onclick = function () {
        openPopup("تحليل الأسبوع القادم", "تفاصيل تحليل الأسبوع القادم...");
    };
    document.querySelector(".button:nth-child(3)").onclick = function () {
        openPopup("تحليل غدًا", "تفاصيل تحليل غدًا...");
    };
    document.querySelector(".button:nth-child(4)").onclick = function () {
        openPopup("صفقات سكالبينج", "تفاصيل صفقات السكالبينج...");
    };
});
