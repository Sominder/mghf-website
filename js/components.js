/* ============================================
   MGHF — Shared HTML Components
   Injects Navbar and Footer into every page
   ============================================ */

(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const inSubdir = window.location.pathname.includes('/customers/');
  const base = inSubdir ? '../' : '';

  /* ===================== NAVBAR ===================== */
  function isActive(pages) {
    return pages.some(p => currentPage === p) ? 'active' : '';
  }

  const navbarHTML = `
    <div class="alert-bar">
      <div class="container">
        ⚠️ Beware of fraud! MGHF never accepts cash or requests payment through unofficial channels.
        <a href="${base}customers/awareness.html"> Learn more →</a>
      </div>
    </div>
    <nav id="navbar">
      <div class="nav-inner">
        <a href="${base}index.html" class="nav-logo">
          <img src="${base}images/logo-main.png" alt="Micro Green Housing Finance" class="nav-logo-img">
        </a>
        <ul class="nav-menu">
          <li class="nav-item"><a href="${base}index.html" class="nav-link ${isActive(['index.html',''])}">Home</a></li>
          <li class="nav-item">
            <a href="${base}about.html" class="nav-link ${isActive(['about.html','promoters.html','board.html','vision.html'])}">
              About Us
              <svg class="nav-arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4l4 4 4-4"/></svg>
            </a>
            <div class="dropdown">
              <a href="${base}about.html">About MGHF</a>
              <a href="${base}promoters.html">Our Promoters</a>
              <a href="${base}board.html">Board of Directors</a>
              <a href="${base}vision.html">Vision &amp; Mission</a>
            </div>
          </li>
          <li class="nav-item">
            <a href="${base}home-loan.html" class="nav-link ${isActive(['home-loan.html','mortgage-loans.html'])}">
              Products
              <svg class="nav-arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4l4 4 4-4"/></svg>
            </a>
            <div class="dropdown">
              <a href="${base}home-loan.html">Home Loan</a>
              <a href="${base}home-loan.html#home-improvement">Home Improvement Loan</a>
              <a href="${base}mortgage-loans.html">Mortgage Loans / LAP</a>
            </div>
          </li>
          <li class="nav-item">
            <a href="${base}customers/awareness.html" class="nav-link ${isActive(['awareness.html','grievance.html','fair-practice.html','mitc.html'])}">
              Customers
              <svg class="nav-arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4l4 4 4-4"/></svg>
            </a>
            <div class="dropdown">
              <a href="${base}customers/awareness.html">Awareness</a>
              <a href="${base}customers/grievance.html">Grievance Redressal</a>
              <a href="${base}customers/fair-practice.html">Fair Practice Code</a>
              <a href="${base}customers/mitc.html">MITC</a>
            </div>
          </li>
          <li class="nav-item">
            <a href="${base}e-mandate.html" class="nav-link ${isActive(['e-mandate.html'])}">
              E-Mandate
              <svg class="nav-arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4l4 4 4-4"/></svg>
            </a>
            <div class="dropdown">
              <a href="${base}e-mandate.html#registration">Registration</a>
              <a href="${base}e-mandate.html#cancellation">Cancellation</a>
              <a href="${base}e-mandate.html#faq">FAQs</a>
            </div>
          </li>
          <li class="nav-item"><a href="${base}pmay.html" class="nav-link ${isActive(['pmay.html'])}">PMAY 2.0</a></li>
          <li class="nav-item"><a href="${base}partner-with-us.html" class="nav-link ${isActive(['partner-with-us.html'])}">Partner</a></li>
        </ul>
        <div class="nav-actions">
          <div class="nav-phone">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            1800-890-5969
          </div>
          <a href="${base}track-loan.html" class="btn btn-outline btn-sm">Track Loan</a>
          <a href="${base}contact.html#apply" class="btn btn-primary btn-sm">Apply Now</a>
        </div>
        <button class="hamburger" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div class="mobile-menu">
      <button class="mobile-close">✕</button>
      <div class="mobile-menu-inner">
        <ul>
          <li class="mobile-nav-item"><a href="${base}index.html" class="mobile-nav-link">Home</a></li>
          <li class="mobile-nav-item">
            <a href="#" class="mobile-nav-link" data-toggle="mob-about">About Us <span class="mobile-arrow" style="transition:transform 0.25s">›</span></a>
            <div id="mob-about" class="mobile-sub-links" style="max-height:0;overflow:hidden;transition:max-height 0.3s ease">
              <a href="${base}about.html">About MGHF</a>
              <a href="${base}promoters.html">Our Promoters</a>
              <a href="${base}board.html">Board of Directors</a>
              <a href="${base}vision.html">Vision &amp; Mission</a>
            </div>
          </li>
          <li class="mobile-nav-item">
            <a href="#" class="mobile-nav-link" data-toggle="mob-products">Products <span class="mobile-arrow" style="transition:transform 0.25s">›</span></a>
            <div id="mob-products" class="mobile-sub-links" style="max-height:0;overflow:hidden;transition:max-height 0.3s ease">
              <a href="${base}home-loan.html">Home Loan</a>
              <a href="${base}home-loan.html#home-improvement">Home Improvement Loan</a>
              <a href="${base}mortgage-loans.html">Mortgage Loans / LAP</a>
            </div>
          </li>
          <li class="mobile-nav-item">
            <a href="#" class="mobile-nav-link" data-toggle="mob-customers">Customers <span class="mobile-arrow" style="transition:transform 0.25s">›</span></a>
            <div id="mob-customers" class="mobile-sub-links" style="max-height:0;overflow:hidden;transition:max-height 0.3s ease">
              <a href="${base}customers/awareness.html">Awareness</a>
              <a href="${base}customers/grievance.html">Grievance Redressal</a>
              <a href="${base}customers/fair-practice.html">Fair Practice Code</a>
            </div>
          </li>
          <li class="mobile-nav-item"><a href="${base}pmay.html" class="mobile-nav-link">PMAY 2.0</a></li>
          <li class="mobile-nav-item"><a href="${base}partner-with-us.html" class="mobile-nav-link">Partner with Us</a></li>
          <li class="mobile-nav-item"><a href="${base}empanel-with-us.html" class="mobile-nav-link">Empanel with Us</a></li>
          <li class="mobile-nav-item"><a href="${base}regulatory.html" class="mobile-nav-link">Regulatory Disclosure</a></li>
          <li class="mobile-nav-item"><a href="${base}track-loan.html" class="mobile-nav-link">Track Loan</a></li>
          <li class="mobile-nav-item"><a href="${base}contact.html" class="mobile-nav-link">Get in Touch</a></li>
        </ul>
        <div class="mobile-actions">
          <a href="tel:18008905969" class="mobile-phone">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            1800-890-5969 (Toll Free)
          </a>
          <a href="${base}contact.html#apply" class="btn btn-primary" style="text-align:center;justify-content:center">Apply Now →</a>
        </div>
      </div>
    </div>
  `;

  /* ===================== FOOTER ===================== */
  const footerHTML = `
    <footer>
      <div class="footer-top">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <div class="footer-logo">
                <img src="${base}images/logo-on-blue.png" alt="Micro Green Housing Finance" class="footer-logo-img">
              </div>
              <p class="footer-desc">Committed to democratizing and digitising housing finance for underserved communities across India, with a focus on sustainable and eco-friendly construction.</p>
              <div class="footer-contact-item">
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Module No T.36, Belapur Railway Station Complex, Sector 11, CBD Belapur, Navi Mumbai — 400614</span>
              </div>
              <div class="footer-contact-item">
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 010 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                <span><a href="tel:18008905969" style="color:inherit">1800-890-5969</a> (Toll Free)</span>
              </div>
              <div class="footer-contact-item">
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span><a href="mailto:customercare@microgreenhf.com" style="color:inherit">customercare@microgreenhf.com</a></span>
              </div>
              <div class="footer-social">
                <a href="#" class="social-icon" aria-label="LinkedIn"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
                <a href="#" class="social-icon" aria-label="Twitter"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg></a>
                <a href="#" class="social-icon" aria-label="Facebook"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
              </div>
            </div>
            <div class="footer-col">
              <h4>Quick Links</h4>
              <ul class="footer-links">
                <li><a href="${base}about.html">About MGHF</a></li>
                <li><a href="${base}contact.html#apply">Apply for Loan</a></li>
                <li><a href="${base}home-loan.html#emi-calculator">EMI Calculator</a></li>
                <li><a href="${base}track-loan.html">Track Loan</a></li>
                <li><a href="${base}partner-with-us.html">Partner with Us</a></li>
                <li><a href="${base}empanel-with-us.html">Empanel with Us</a></li>
                <li><a href="${base}pmay.html">PMAY 2.0</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Products</h4>
              <ul class="footer-links">
                <li><a href="${base}home-loan.html">Home Purchase Loan</a></li>
                <li><a href="${base}home-loan.html">Home Construction Loan</a></li>
                <li><a href="${base}home-loan.html">Plot + Construction</a></li>
                <li><a href="${base}home-loan.html#home-improvement">Home Improvement Loan</a></li>
                <li><a href="${base}mortgage-loans.html">Loan Against Property</a></li>
                <li><a href="${base}mortgage-loans.html">Secured Business Loan</a></li>
                <li><a href="${base}home-loan.html">Balance Transfer</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Resources &amp; Legal</h4>
              <ul class="footer-links">
                <li><a href="${base}customers/fair-practice.html">Fair Practice Code</a></li>
                <li><a href="${base}customers/grievance.html">Grievance Redressal</a></li>
                <li><a href="${base}customers/mitc.html">MITC</a></li>
                <li><a href="${base}customers/awareness.html">KYC / AML Policy</a></li>
                <li><a href="${base}regulatory.html">Regulatory Disclosure</a></li>
                <li><a href="${base}e-mandate.html">E-Mandate</a></li>
                <li><a href="${base}privacy.html">Privacy Policy</a></li>
                <li><a href="${base}terms.html">Terms &amp; Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="footer-bottom">
          <span class="footer-reg">CIN: U65999MH2022PTC378239 &nbsp;|&nbsp; GSTIN: 27AAPCM5395J1ZO &nbsp;|&nbsp; Registered with NHB</span>
          <div class="footer-legal">
            <a href="${base}privacy.html">Privacy Policy</a>
            <a href="${base}terms.html">Terms of Use</a>
            <a href="${base}sitemap.html">Sitemap</a>
          </div>
          <span class="footer-reg">© 2024 Micro Green Housing Finance Pvt Ltd. All rights reserved.</span>
        </div>
      </div>
    </footer>
    <a href="https://wa.me/911800890596?text=Hi%20MGHF%2C%20I%20need%20help%20with%20a%20loan." class="whatsapp-btn pulse" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      <svg width="28" height="28" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.017 2C6.504 2 2.017 6.487 2.017 12c0 1.824.489 3.536 1.345 5.012L2 22l5.137-1.341A9.948 9.948 0 0012.017 22c5.513 0 9.983-4.487 9.983-10S17.53 2 12.017 2zm0 18.21a8.185 8.185 0 01-4.198-1.155l-.3-.179-3.048.797.815-2.973-.196-.306A8.21 8.21 0 013.807 12c0-4.536 3.693-8.228 8.21-8.228 4.517 0 8.21 3.692 8.21 8.228 0 4.535-3.693 8.21-8.21 8.21z"/></svg>
    </a>
  `;

  /* ===================== INJECT ===================== */
  const bodyEl = document.body;

  // Inject navbar before first child
  const navWrapper = document.createElement('div');
  navWrapper.innerHTML = navbarHTML;
  while (navWrapper.firstChild) {
    bodyEl.insertBefore(navWrapper.firstChild, bodyEl.firstChild);
  }

  // Inject footer before closing body
  const footerWrapper = document.createElement('div');
  footerWrapper.innerHTML = footerHTML;
  while (footerWrapper.firstChild) {
    bodyEl.appendChild(footerWrapper.firstChild);
  }

  // Load main JS after injecting
  const mainScript = document.createElement('script');
  mainScript.src = base + 'js/main.js';
  bodyEl.appendChild(mainScript);
})();
