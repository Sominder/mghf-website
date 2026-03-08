/* ============================================
   MGHF Website - Main JavaScript
   ============================================ */

function mghfInit() {

  /* ============================================================
     1. NAVBAR — Scroll shadow + active link
     ============================================================ */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // Highlight active nav link based on current page
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .dropdown a').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ============================================================
     2. MOBILE MENU
     ============================================================ */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-close');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
  }
  if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileMenu);
  }
  function closeMobileMenu() {
    hamburger && hamburger.classList.remove('open');
    mobileMenu && mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Mobile accordion sub-menus
  document.querySelectorAll('.mobile-nav-link[data-toggle]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.getElementById(this.dataset.toggle);
      const arrow = this.querySelector('.mobile-arrow');
      if (target) {
        const isOpen = target.style.maxHeight;
        target.style.maxHeight = isOpen ? '' : target.scrollHeight + 'px';
        if (arrow) arrow.style.transform = isOpen ? '' : 'rotate(90deg)';
      }
    });
  });

  /* ============================================================
     3. HERO SLIDER
     ============================================================ */
  const heroSlides = document.querySelector('.hero-slides');
  const heroDots = document.querySelectorAll('.hero-dot');
  const heroTotal = document.querySelectorAll('.hero-slide').length;
  let heroIndex = 0;
  let heroTimer;

  function goToSlide(index) {
    heroIndex = (index + heroTotal) % heroTotal;
    if (heroSlides) {
      heroSlides.style.transform = `translateX(-${heroIndex * 100}%)`;
    }
    heroDots.forEach((dot, i) => dot.classList.toggle('active', i === heroIndex));
  }

  function nextSlide() { goToSlide(heroIndex + 1); }
  function prevSlide() { goToSlide(heroIndex - 1); }

  function startHeroTimer() {
    clearInterval(heroTimer);
    heroTimer = setInterval(nextSlide, 5000);
  }

  if (heroTotal > 0) {
    goToSlide(0);
    startHeroTimer();

    document.querySelector('.hero-next')?.addEventListener('click', () => { nextSlide(); startHeroTimer(); });
    document.querySelector('.hero-prev')?.addEventListener('click', () => { prevSlide(); startHeroTimer(); });

    heroDots.forEach((dot, i) => {
      dot.addEventListener('click', () => { goToSlide(i); startHeroTimer(); });
    });

    // Touch support
    let touchStartX = 0;
    heroSlides?.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    heroSlides?.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) { diff > 0 ? nextSlide() : prevSlide(); startHeroTimer(); }
    });
  }

  /* ============================================================
     4. HERO EMI QUICK CALCULATOR (sidebar widget)
     ============================================================ */
  const heroLoanSlider = document.getElementById('hero-loan');
  const heroTenureSlider = document.getElementById('hero-tenure');
  const heroLoanVal = document.getElementById('hero-loan-val');
  const heroTenureVal = document.getElementById('hero-tenure-val');
  const heroEmiResult = document.getElementById('hero-emi-result');

  function calcEMI(principal, rate, tenureYears) {
    const r = rate / 12 / 100;
    const n = tenureYears * 12;
    if (r === 0) return principal / n;
    return principal * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  }

  function updateHeroEMI() {
    if (!heroLoanSlider || !heroTenureSlider) return;
    const loan = parseInt(heroLoanSlider.value) * 100000;
    const tenure = parseInt(heroTenureSlider.value);
    if (heroLoanVal) heroLoanVal.textContent = '₹' + heroLoanSlider.value + 'L';
    if (heroTenureVal) heroTenureVal.textContent = heroTenureSlider.value + ' yrs';
    const emi = calcEMI(loan, 10.5, tenure);
    if (heroEmiResult) {
      heroEmiResult.textContent = '₹' + Math.round(emi).toLocaleString('en-IN');
    }
  }

  heroLoanSlider?.addEventListener('input', updateHeroEMI);
  heroTenureSlider?.addEventListener('input', updateHeroEMI);
  updateHeroEMI();

  /* ============================================================
     5. FULL EMI CALCULATOR
     ============================================================ */
  const emiLoan    = document.getElementById('emi-loan');
  const emiRate    = document.getElementById('emi-rate');
  const emiTenure  = document.getElementById('emi-tenure');
  const emiLoanV   = document.getElementById('emi-loan-v');
  const emiRateV   = document.getElementById('emi-rate-v');
  const emiTenureV = document.getElementById('emi-tenure-v');
  const emiMonthly = document.getElementById('emi-monthly');
  const emiInterest= document.getElementById('emi-interest');
  const emiTotal   = document.getElementById('emi-total');

  function updateFullEMI() {
    if (!emiLoan || !emiRate || !emiTenure) return;
    const loanL = parseFloat(emiLoan.value);
    const rate  = parseFloat(emiRate.value);
    const tenure= parseFloat(emiTenure.value);
    const loanAmt = loanL * 100000;

    if (emiLoanV)    emiLoanV.textContent    = '₹' + loanL.toFixed(1) + 'L';
    if (emiRateV)    emiRateV.textContent    = rate.toFixed(1) + '%';
    if (emiTenureV)  emiTenureV.textContent  = tenure + ' yrs';

    const monthly = calcEMI(loanAmt, rate, tenure);
    const totalPay = monthly * tenure * 12;
    const interest = totalPay - loanAmt;

    if (emiMonthly)  emiMonthly.textContent  = '₹' + Math.round(monthly).toLocaleString('en-IN');
    if (emiInterest) emiInterest.textContent = '₹' + Math.round(interest / 100000).toFixed(1) + 'L';
    if (emiTotal)    emiTotal.textContent    = '₹' + Math.round(totalPay / 100000).toFixed(1) + 'L';
  }

  emiLoan?.addEventListener('input', updateFullEMI);
  emiRate?.addEventListener('input', updateFullEMI);
  emiTenure?.addEventListener('input', updateFullEMI);
  updateFullEMI();

  /* ============================================================
     6. TESTIMONIALS SLIDER
     ============================================================ */
  const testTrack = document.querySelector('.testimonials-track');
  const testCards = document.querySelectorAll('.testimonial-card');
  let testIndex = 0;
  let testPerView = getTestPerView();

  function getTestPerView() {
    return window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  }

  function updateTestSlider() {
    testPerView = getTestPerView();
    const maxIndex = Math.max(0, testCards.length - testPerView);
    testIndex = Math.min(testIndex, maxIndex);
    if (testTrack) {
      const pct = (100 / testCards.length) * testIndex;
      testTrack.style.transform = `translateX(-${pct}%)`;
    }
  }

  document.querySelector('.test-prev')?.addEventListener('click', () => {
    testIndex = Math.max(0, testIndex - 1);
    updateTestSlider();
  });
  document.querySelector('.test-next')?.addEventListener('click', () => {
    const max = Math.max(0, testCards.length - getTestPerView());
    testIndex = Math.min(max, testIndex + 1);
    updateTestSlider();
  });

  window.addEventListener('resize', updateTestSlider);

  /* ============================================================
     7. ACCORDION
     ============================================================ */
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function () {
      const item = this.closest('.accordion-item');
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.accordion-item.open').forEach(i => i.classList.remove('open'));
      // Open clicked (if it wasn't open)
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ============================================================
     8. SCROLL ANIMATIONS (Intersection Observer)
     ============================================================ */
  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    fadeEls.forEach(el => observer.observe(el));
  }

  /* ============================================================
     9. COUNTER ANIMATION
     ============================================================ */
  function animateCounter(el) {
    const target = parseInt(el.dataset.target || el.textContent);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    let current = 0;

    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = prefix + current.toLocaleString('en-IN') + suffix;
      if (current >= target) clearInterval(timer);
    }, 16);
  }

  const counterEls = document.querySelectorAll('.counter');
  if (counterEls.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target);
          counterObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    counterEls.forEach(el => counterObserver.observe(el));
  }

  /* ============================================================
     10. LEAD FORM SUBMIT
     ============================================================ */
  document.querySelectorAll('.lead-form').forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('[type="submit"]');
      const successEl = this.closest('.lead-form-wrap')?.querySelector('.form-success');

      // Basic validation
      let valid = true;
      this.querySelectorAll('[required]').forEach(field => {
        if (!field.value.trim()) {
          field.style.borderColor = '#dc2626';
          valid = false;
        } else {
          field.style.borderColor = '';
        }
      });
      if (!valid) return;

      // Show loading
      btn.textContent = 'Submitting…';
      btn.disabled = true;

      // Simulate submission (replace with real API/Formspree endpoint)
      setTimeout(() => {
        if (successEl) {
          form.style.display = 'none';
          successEl.style.display = 'block';
        } else {
          btn.textContent = '✓ Submitted! We\'ll call you soon.';
          btn.style.background = '#14B8A6';
        }
      }, 1200);
    });
  });

  /* ============================================================
     11. STICKY HEADER OFFSET for anchor links
     ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = (navbar?.offsetHeight || 70) + 16;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
        closeMobileMenu();
      }
    });
  });

  /* ============================================================
     12. TRACK LOAN CTA dismiss
     ============================================================ */
  document.querySelector('.track-dismiss')?.addEventListener('click', function () {
    this.closest('.track-banner')?.remove();
  });

}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mghfInit);
} else {
  mghfInit();
}
