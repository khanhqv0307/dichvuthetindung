/* =====================================================
   VIỆT TÍN CREDIT — script.js
   ===================================================== */

// ─── DATA ─────────────────────────────────────────
const testimonials = [
  {
    name: "Lê Thị Thu",
    role: "Chủ cửa hàng thời trang",
    text: "Việt Tín là địa chỉ tôi tin cậy khi cần rút tiền thẻ tín dụng và đáo hạn thẻ tín dụng. Quy trình dịch vụ nhanh chóng, đội ngũ chuyên nghiệp và luôn hỗ trợ tận tâm. Nhờ Việt Tín, tôi hoàn toàn yên tâm về tài chính và không còn lo lắng về phí phạt trễ hạn.",
  },
  {
    name: "Phạm Thị Bích Ngọc",
    role: "Nhân viên văn phòng",
    text: "Dịch vụ rút tiền thẻ tín dụng tại Việt Tín thật tuyệt vời! Nhân viên luôn nhiệt tình và hướng dẫn chi tiết, giúp tôi rút tiền nhanh chóng mà không gặp bất kỳ khó khăn nào. Đây là giải pháp kịp thời cho những lúc tôi cần tiền mặt gấp.",
  },
  {
    name: "Trần Minh Tuấn",
    role: "Chủ nhà hàng",
    text: "Tôi rất hài lòng với dịch vụ lắp đặt máy quẹt thẻ của Việt Tín. Thủ tục nhanh chóng, không phức tạp, và máy POS hoạt động ổn định, giúp việc kinh doanh của tôi thuận tiện hơn rất nhiều.",
  },
];

// ─── TESTIMONIAL SLIDER ────────────────────────────
let currentTestimonial = 0;

function renderTestimonial() {
  const t = testimonials[currentTestimonial];
  document.getElementById("testimonial-text").textContent = `"${t.text}"`;
  document.getElementById("testimonial-name").textContent = t.name;
  document.getElementById("testimonial-role").textContent = t.role;
  document.getElementById("testimonial-avatar").textContent = t.name[0];

  document.querySelectorAll(".dot").forEach((d, i) => {
    d.classList.toggle("active", i === currentTestimonial);
  });
}

function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  renderTestimonial();
}
function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  renderTestimonial();
}

// ─── FAQ ACCORDION ─────────────────────────────────
function initFAQ() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-q");
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      // close all
      document.querySelectorAll(".faq-item").forEach((el) => el.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });
}

// ─── BANK CAROUSEL (infinite scroll) ───────────────
function initBankCarousel() {
  const carousel = document.getElementById("bankCarousel");
  if (!carousel) return;
  // Duplicate slides for seamless infinite scroll
  const slides = carousel.innerHTML;
  carousel.innerHTML = slides + slides;
}

// ─── INIT ──────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderTestimonial();
  initFAQ();
  initBankCarousel();

  document.getElementById("btn-prev")?.addEventListener("click", prevTestimonial);
  document.getElementById("btn-next")?.addEventListener("click", nextTestimonial);

  document.querySelectorAll(".dot").forEach((d, i) => {
    d.addEventListener("click", () => {
      currentTestimonial = i;
      renderTestimonial();
    });
  });

  // Auto-advance every 5 s
  setInterval(nextTestimonial, 5000);
});
