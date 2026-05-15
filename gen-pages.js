const fs = require('fs');

const PHONE = '(858) 988-0325';
const PHONE_LINK = 'tel:+18589880325';
const SMS_LINK = 'sms:+18589880325';

function topbarItems() {
  return `
      <span class="topbar-item">📍 Mobile service — we come to you <span class="topbar-sep"></span></span>
      <span class="topbar-item">📞 <a href="${PHONE_LINK}">${PHONE}</a> <span class="topbar-sep"></span></span>
      <span class="topbar-item">⚡ Same-day quotes via text <span class="topbar-sep"></span></span>
      <span class="topbar-item">🎨 Color-matched finish — guaranteed <span class="topbar-sep"></span></span>
      <span class="topbar-item">📍 Mobile service — we come to you <span class="topbar-sep"></span></span>
      <span class="topbar-item">📞 <a href="${PHONE_LINK}">${PHONE}</a> <span class="topbar-sep"></span></span>
      <span class="topbar-item">⚡ Same-day quotes via text <span class="topbar-sep"></span></span>
      <span class="topbar-item">🎨 Color-matched finish — guaranteed <span class="topbar-sep"></span></span>`.trim();
}

function nav() {
  return `<header class="site-header">
  <div class="topbar" id="topbar">
    <div class="topbar-track">
      ${topbarItems()}
    </div>
  </div>
  <nav>
    <a class="nav-brand" href="/" style="display:block;height:56px;overflow:hidden;">
      <img src="logo.png" alt="Auto Paint Fix" style="height:220px;width:auto;display:block;mix-blend-mode:screen;margin-top:-67px;">
    </a>
    <div class="nav-links">
      <a href="services.html">Services</a>
      <a href="pricing.html">Pricing</a>
      <div class="nav-dropdown">
        <a href="service-area.html">Service Area</a>
        <div class="nav-dropdown-menu">
          <a href="carlsbad.html">Carlsbad</a>
          <a href="chula-vista.html">Chula Vista</a>
          <a href="coronado.html">Coronado</a>
          <a href="downtown-san-diego.html">Downtown San Diego</a>
          <a href="el-cajon.html">El Cajon</a>
          <a href="escondido.html">Escondido</a>
          <a href="la-jolla.html">La Jolla</a>
          <a href="mira-mesa.html">Mira Mesa</a>
          <a href="mission-valley.html">Mission Valley</a>
          <a href="national-city.html">National City</a>
          <a href="ocean-beach.html">Ocean Beach</a>
          <a href="oceanside.html">Oceanside</a>
          <a href="pacific-beach.html">Pacific Beach</a>
          <a href="poway.html">Poway</a>
          <a href="rancho-bernardo.html">Rancho Bernardo</a>
          <a href="santee.html">Santee</a>
          <a href="vista.html">Vista</a>
          <a href="service-area.html" class="dd-all">View All Service Areas →</a>
        </div>
      </div>
      <a href="contact.html">Contact</a>
      <a href="${PHONE_LINK}" class="nav-phone">${PHONE}</a>
      <a href="contact.html" class="nav-cta">Get a Quote</a>
    </div>
    <button class="hamburger" id="hamburger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-menu" id="mobileMenu">
    <a href="services.html">Services</a>
    <a href="pricing.html">Pricing</a>
    <a href="service-area.html">Service Area</a>
    <a href="contact.html">Contact</a>
    <a href="carlsbad.html" style="font-size:13px;padding:8px 0;color:rgba(255,255,255,0.55);">↳ Carlsbad</a>
    <a href="chula-vista.html" style="font-size:13px;padding:8px 0;color:rgba(255,255,255,0.55);">↳ Chula Vista</a>
    <a href="coronado.html" style="font-size:13px;padding:8px 0;color:rgba(255,255,255,0.55);">↳ Coronado</a>
    <a href="downtown-san-diego.html" style="font-size:13px;padding:8px 0;color:rgba(255,255,255,0.55);">↳ Downtown San Diego</a>
    <a href="el-cajon.html" style="font-size:13px;padding:8px 0;color:rgba(255,255,255,0.55);">↳ El Cajon</a>
    <a href="escondido.html" style="font-size:13px;padding:8px 0;color:rgba(255,255,255,0.55);">↳ Escondido</a>
    <a href="la-jolla.html" style="font-size:13px;padding:8px 0;color:rgba(255,255,255,0.55);">↳ La Jolla</a>
    <a href="mira-mesa.html" style="font-size:13px;padding:8px 0;color:rgba(255,255,255,0.55);">↳ Mira Mesa</a>
    <a href="mission-valley.html" style="font-size:13px;padding:8px 0;color:rgba(255,255,255,0.55);">↳ Mission Valley</a>
    <a href="national-city.html" style="font-size:13px;padding:8px 0;color:rgba(255,255,255,0.55);">↳ National City</a>
    <a href="ocean-beach.html" style="font-size:13px;padding:8px 0;color:rgba(255,255,255,0.55);">↳ Ocean Beach</a>
    <a href="oceanside.html" style="font-size:13px;padding:8px 0;color:rgba(255,255,255,0.55);">↳ Oceanside</a>
    <a href="pacific-beach.html" style="font-size:13px;padding:8px 0;color:rgba(255,255,255,0.55);">↳ Pacific Beach</a>
    <a href="poway.html" style="font-size:13px;padding:8px 0;color:rgba(255,255,255,0.55);">↳ Poway</a>
    <a href="rancho-bernardo.html" style="font-size:13px;padding:8px 0;color:rgba(255,255,255,0.55);">↳ Rancho Bernardo</a>
    <a href="santee.html" style="font-size:13px;padding:8px 0;color:rgba(255,255,255,0.55);">↳ Santee</a>
    <a href="vista.html" style="font-size:13px;padding:8px 0;color:rgba(255,255,255,0.55);">↳ Vista</a>
    <a href="${PHONE_LINK}" class="mm-phone">${PHONE}</a>
    <a href="contact.html" class="mm-cta">Get a Free Quote</a>
  </div>
</header>`;
}

function footer() {
  return `<footer style="background:#080808;border-top:1px solid rgba(255,255,255,0.07);padding:56px 48px 0;">
  <div style="display:grid;grid-template-columns:1.6fr 1fr 1.4fr 1fr;gap:48px;max-width:1200px;margin:0 auto;padding-bottom:48px;">
    <div>
      <a href="/" style="display:block;height:48px;overflow:hidden;margin-bottom:16px;">
        <img src="logo.png" alt="Auto Paint Fix" style="height:190px;width:auto;display:block;mix-blend-mode:screen;margin-top:-60px;">
      </a>
      <p style="font-size:13px;color:rgba(255,255,255,0.4);line-height:1.7;max-width:260px;">Mobile auto paint repair across San Diego County. We come to you — no shop drop-off, no waiting.</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:20px;">
        <span style="font-size:11px;padding:4px 10px;background:rgba(217,38,38,0.1);border:1px solid rgba(217,38,38,0.25);border-radius:100px;color:rgba(255,255,255,0.5);">No Shop Drop-Off</span>
        <span style="font-size:11px;padding:4px 10px;background:rgba(217,38,38,0.1);border:1px solid rgba(217,38,38,0.25);border-radius:100px;color:rgba(255,255,255,0.5);">Factory-Level Finish</span>
        <span style="font-size:11px;padding:4px 10px;background:rgba(217,38,38,0.1);border:1px solid rgba(217,38,38,0.25);border-radius:100px;color:rgba(255,255,255,0.5);">Fast Photo Quotes</span>
        <span style="font-size:11px;padding:4px 10px;background:rgba(217,38,38,0.1);border:1px solid rgba(217,38,38,0.25);border-radius:100px;color:rgba(255,255,255,0.5);">San Diego County</span>
      </div>
    </div>
    <div>
      <div style="font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.3);margin-bottom:16px;">Services</div>
      <ul style="list-style:none;display:flex;flex-direction:column;gap:10px;">
        <li><a href="bumper-repair.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:14px;transition:color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">Bumper Repair</a></li>
        <li><a href="scratch-removal.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:14px;transition:color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">Scratch Removal</a></li>
        <li><a href="scuff-scrape-repair.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:14px;transition:color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">Scuff &amp; Scrape Repair</a></li>
        <li><a href="auto-body-paint.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:14px;transition:color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">Auto Body Paint</a></li>
        <li><a href="paintless-dent-repair.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:14px;transition:color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">Paintless Dent Repair</a></li>
      </ul>
    </div>
    <div>
      <div style="font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.3);margin-bottom:16px;">Service Area</div>
      <ul style="list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:8px 16px;">
        <li><a href="service-area.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:13px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">San Diego County</a></li>
        <li><a href="carlsbad.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:13px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">Carlsbad</a></li>
        <li><a href="chula-vista.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:13px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">Chula Vista</a></li>
        <li><a href="coronado.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:13px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">Coronado</a></li>
        <li><a href="downtown-san-diego.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:13px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">Downtown SD</a></li>
        <li><a href="el-cajon.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:13px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">El Cajon</a></li>
        <li><a href="escondido.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:13px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">Escondido</a></li>
        <li><a href="la-jolla.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:13px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">La Jolla</a></li>
        <li><a href="mira-mesa.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:13px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">Mira Mesa</a></li>
        <li><a href="mission-valley.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:13px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">Mission Valley</a></li>
        <li><a href="national-city.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:13px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">National City</a></li>
        <li><a href="ocean-beach.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:13px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">Ocean Beach</a></li>
        <li><a href="oceanside.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:13px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">Oceanside</a></li>
        <li><a href="pacific-beach.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:13px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">Pacific Beach</a></li>
        <li><a href="poway.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:13px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">Poway</a></li>
        <li><a href="rancho-bernardo.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:13px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">Rancho Bernardo</a></li>
        <li><a href="santee.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:13px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">Santee</a></li>
        <li><a href="vista.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:13px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">Vista</a></li>
      </ul>
    </div>
    <div>
      <div style="font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.3);margin-bottom:16px;">Quick Links</div>
      <ul style="list-style:none;display:flex;flex-direction:column;gap:10px;">
        <li><a href="pricing.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:14px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">Pricing</a></li>
        <li><a href="contact.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:14px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">Get a Quote</a></li>
        <li><a href="contact.html" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:14px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">Contact</a></li>
        <li><a href="/#faq" style="text-decoration:none;color:rgba(255,255,255,0.55);font-size:14px;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.55)'">FAQ</a></li>
        <li><a href="${SMS_LINK}" style="text-decoration:none;color:#4ADE80;font-size:14px;font-weight:700;">📱 Text a Photo</a></li>
      </ul>
    </div>
  </div>
  <div style="border-top:1px solid rgba(255,255,255,0.07);padding:20px 0;max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
    <span style="font-size:13px;color:rgba(255,255,255,0.3);">© 2026 Auto Paint Fix. All rights reserved. San Diego, CA.</span>
    <span style="font-size:13px;color:rgba(255,255,255,0.2);">Mobile auto paint repair designed for fast, on-site convenience across San Diego County.</span>
  </div>
</footer>`;
}

function styles() {
  return `<style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg:#0C0C0C; --bg2:#161616; --bg3:#1F1F1F;
      --white:#FFFFFF; --ink:#FFFFFF; --ink2:#E0E0E0;
      --mid:#888888; --line:rgba(255,255,255,0.09);
      --dark:#080808; --red:#D92626; --red2:#B81E1E;
      --rainbow:linear-gradient(90deg,#FF0000 0%,#FF6600 14%,#FFD600 28%,#00CC44 42%,#0088FF 57%,#6600FF 71%,#CC00FF 85%,#FF0066 100%);
    }
    html { scroll-behavior: smooth; }
    body { background: var(--bg); color: var(--ink); font-family: 'DM Sans', sans-serif; font-size: 16px; line-height: 1.6; overflow-x: hidden; }
    .bf-rainbow { background: var(--rainbow); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

    /* TOPBAR */
    .site-header { position: sticky; top: 0; z-index: 300; }
    .topbar { background: var(--red); height: 38px; overflow: hidden; display: flex; align-items: center; position: relative; }
    .topbar::before, .topbar::after { content: ''; position: absolute; top: 0; bottom: 0; width: 80px; z-index: 2; pointer-events: none; }
    .topbar::before { left: 0; background: linear-gradient(90deg, var(--red), transparent); }
    .topbar::after  { right: 0; background: linear-gradient(270deg, var(--red), transparent); }
    .topbar-track { display: flex; white-space: nowrap; animation: topbarScroll 32s linear infinite; }
    .topbar-item { display: inline-flex; align-items: center; gap: 10px; font-family: 'Anton', sans-serif; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; color: #fff; padding: 0 28px; flex-shrink: 0; }
    .topbar-item a { color: #fff; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.4); }
    .topbar-sep { display: inline-block; width: 5px; height: 5px; background: rgba(255,255,255,0.5); border-radius: 50%; flex-shrink: 0; }
    @keyframes topbarScroll { 0%{ transform: translateX(0); } 100%{ transform: translateX(-50%); } }

    /* NAV */
    nav { background: rgba(12,12,12,0.98); border-bottom: 1px solid rgba(255,255,255,0.07); display: flex; justify-content: space-between; align-items: center; padding: 14px 48px; backdrop-filter: blur(12px); }
    .nav-brand { display: flex; align-items: center; text-decoration: none; }
    .nav-links { display: flex; gap: 28px; align-items: center; }
    .nav-links a { text-decoration: none; color: var(--mid); font-size: 14px; font-weight: 500; transition: color 0.2s; }
    .nav-links a:hover { color: var(--white); }
    .nav-phone { color: var(--white) !important; font-weight: 800 !important; background: var(--red) !important; padding: 8px 16px !important; border-radius: 6px !important; font-size: 14px !important; }
    .nav-phone:hover { background: var(--red2) !important; }
    .nav-cta { background: transparent !important; border: 1px solid rgba(255,255,255,0.25) !important; color: var(--white) !important; padding: 8px 18px !important; border-radius: 6px !important; font-weight: 600 !important; font-size: 14px !important; }
    .nav-cta:hover { border-color: var(--white) !important; background: rgba(255,255,255,0.05) !important; }
    .nav-dropdown { position: relative; }
    .nav-dropdown > a { display: flex; align-items: center; gap: 5px; }
    .nav-dropdown > a::after { content: '▾'; font-size: 10px; opacity: 0.6; }
    .nav-dropdown-menu { display: grid; position: absolute; top: 100%; padding-top: 14px; left: 50%; transform: translateX(-50%) translateY(-6px); background: rgba(18,18,18,0.98); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 10px; min-width: 360px; grid-template-columns: 1fr 1fr; gap: 2px; box-shadow: 0 12px 40px rgba(0,0,0,0.5); z-index: 999; opacity: 0; pointer-events: none; transition: opacity 0.18s ease, transform 0.18s ease; backdrop-filter: blur(16px); }
    .nav-dropdown:hover .nav-dropdown-menu, .nav-dropdown-menu:hover { opacity: 1; pointer-events: auto; transform: translateX(-50%) translateY(0); }
    .nav-dropdown-menu a { text-decoration: none; color: rgba(255,255,255,0.7); font-size: 13px; font-weight: 500; padding: 8px 12px; border-radius: 6px; transition: background 0.15s, color 0.15s; white-space: nowrap; }
    .nav-dropdown-menu a:hover { background: rgba(255,255,255,0.08); color: #fff; }
    .nav-dropdown-menu .dd-all { grid-column: 1 / -1; border-top: 1px solid rgba(255,255,255,0.08); margin-top: 4px; padding-top: 10px; color: var(--red) !important; font-weight: 700 !important; text-align: center; }
    .hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
    .hamburger span { display: block; width: 24px; height: 2px; background: var(--white); border-radius: 2px; }
    .mobile-menu { display: none; background: var(--bg2); border-top: 1px solid rgba(255,255,255,0.07); padding: 20px 24px; flex-direction: column; gap: 4px; }
    .mobile-menu.open { display: flex; }
    .mobile-menu a { text-decoration: none; color: var(--ink2); font-size: 16px; font-weight: 500; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); }
    .mobile-menu a:last-child { border-bottom: none; }
    .mm-phone { font-weight: 700 !important; color: var(--red) !important; font-size: 18px !important; }
    .mm-cta { background: var(--red) !important; color: var(--white) !important; text-align: center; border-radius: 6px; font-weight: 700 !important; padding: 14px !important; border-bottom: none !important; margin-top: 8px; }

    /* HERO */
    .page-hero { background: var(--bg); padding: 80px 48px; border-bottom: 1px solid rgba(255,255,255,0.07); position: relative; overflow: hidden; }
    .page-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 60% at 100% 0%, rgba(217,38,38,0.10) 0%, transparent 60%), radial-gradient(ellipse 40% 50% at 0% 100%, rgba(217,38,38,0.04) 0%, transparent 55%); pointer-events: none; }
    .page-hero-inner { max-width: 760px; position: relative; }
    .section-tag { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--red); margin-bottom: 12px; display: flex; align-items: center; gap: 10px; }
    .section-tag::before { content: ''; width: 20px; height: 2px; background: var(--red); flex-shrink: 0; }
    h1.page-h { font-family: 'Anton', sans-serif; font-size: clamp(40px, 6vw, 76px); line-height: 0.9; letter-spacing: 0.01em; color: var(--white); margin-bottom: 20px; }
    .page-desc { font-size: 17px; color: rgba(255,255,255,0.55); max-width: 560px; line-height: 1.8; margin-bottom: 32px; }
    .btn-primary { display: inline-flex; align-items: center; gap: 9px; background: var(--red); color: var(--white); padding: 15px 32px; border-radius: 6px; font-size: 15px; font-weight: 700; text-decoration: none; transition: background 0.2s; }
    .btn-primary:hover { background: var(--red2); }
    .btn-ghost { display: inline-flex; align-items: center; gap: 7px; color: rgba(255,255,255,0.65); font-size: 14px; font-weight: 600; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 1px; }
    .btn-ghost:hover { color: var(--white); border-color: rgba(255,255,255,0.5); }

    /* CONTENT */
    .content-section { padding: 72px 48px; max-width: 1200px; margin: 0 auto; }
    .cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 48px; }
    .info-card { background: var(--bg2); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 28px; }
    .info-card-icon { font-size: 28px; margin-bottom: 14px; }
    .info-card h3 { font-family: 'Anton', sans-serif; font-size: 22px; letter-spacing: 0.01em; color: var(--white); margin-bottom: 10px; }
    .info-card p { font-size: 14px; color: rgba(255,255,255,0.5); line-height: 1.7; }
    .info-card-price { margin-top: 16px; font-size: 13px; font-weight: 700; color: var(--red); letter-spacing: 0.05em; }

    /* PRICING TABLE */
    .pricing-section { background: var(--bg2); padding: 72px 48px; border-top: 1px solid rgba(255,255,255,0.07); border-bottom: 1px solid rgba(255,255,255,0.07); }
    .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-top: 48px; max-width: 1200px; margin-left: auto; margin-right: auto; }
    .price-card { background: var(--bg3); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 24px; text-align: center; }
    .price-card h4 { font-family: 'Anton', sans-serif; font-size: 18px; letter-spacing: 0.05em; color: rgba(255,255,255,0.7); margin-bottom: 8px; }
    .price-card .price { font-family: 'Anton', sans-serif; font-size: 36px; color: var(--white); }
    .price-card .price-sub { font-size: 12px; color: var(--mid); margin-top: 4px; }
    .price-card .price-shop { font-size: 13px; color: rgba(255,255,255,0.3); margin-top: 6px; text-decoration: line-through; }

    /* TRUST */
    .trust-row { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 48px; }
    .trust-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 100px; padding: 8px 18px; font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.7); }

    /* CTA BAND */
    .cta-band { background: var(--red); padding: 56px 48px; text-align: center; }
    .cta-band h2 { font-family: 'Anton', sans-serif; font-size: clamp(32px, 4vw, 56px); letter-spacing: 0.01em; color: #fff; margin-bottom: 12px; }
    .cta-band p { font-size: 16px; color: rgba(255,255,255,0.8); margin-bottom: 28px; }
    .cta-band-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
    .btn-white { display: inline-flex; align-items: center; gap: 8px; background: #fff; color: var(--red); padding: 15px 32px; border-radius: 6px; font-size: 15px; font-weight: 700; text-decoration: none; }
    .btn-outline-white { display: inline-flex; align-items: center; gap: 8px; background: transparent; border: 2px solid rgba(255,255,255,0.6); color: #fff; padding: 14px 28px; border-radius: 6px; font-size: 15px; font-weight: 600; text-decoration: none; }

    /* AREA GRID */
    .area-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 12px; margin-top: 40px; }
    .area-card { background: var(--bg2); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 18px 20px; text-decoration: none; display: block; transition: border-color 0.2s, background 0.2s; }
    .area-card:hover { border-color: var(--red); background: rgba(217,38,38,0.05); }
    .area-card-name { font-weight: 700; font-size: 15px; color: var(--white); margin-bottom: 4px; }
    .area-card-sub { font-size: 12px; color: var(--mid); }

    /* CONTACT FORM */
    .form-section { padding: 72px 48px; max-width: 700px; margin: 0 auto; }
    .form-group { margin-bottom: 20px; }
    .form-label { font-size: 13px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(255,255,255,0.5); margin-bottom: 8px; display: block; }
    .form-input { width: 100%; background: var(--bg2); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 14px 16px; font-size: 15px; color: var(--white); font-family: 'DM Sans', sans-serif; }
    .form-input:focus { outline: none; border-color: var(--red); }
    .form-input::placeholder { color: rgba(255,255,255,0.25); }
    textarea.form-input { min-height: 120px; resize: vertical; }
    .form-submit { background: var(--red); color: #fff; border: none; padding: 16px 40px; border-radius: 6px; font-size: 15px; font-weight: 700; cursor: pointer; width: 100%; font-family: 'DM Sans', sans-serif; }
    .form-submit:hover { background: var(--red2); }

    @media (max-width: 768px) {
      nav { padding: 12px 20px; }
      .nav-links { display: none; }
      .hamburger { display: flex; }
      .page-hero { padding: 56px 24px; }
      .content-section { padding: 48px 24px; }
      .pricing-section { padding: 48px 24px; }
      .form-section { padding: 48px 24px; }
      .cta-band { padding: 48px 24px; }
    }
  </style>`;
}

function head(title, desc, canonical) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${title}</title>
  <meta name="description" content="${desc}"/>
  <link rel="canonical" href="https://www.autopaintsd.com/${canonical}"/>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Nunito:wght@900&display=swap" rel="stylesheet">
  ${styles()}
</head>`;
}

function navScript() {
  return `<script>
  document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('mobileMenu').classList.toggle('open');
  });
</script>`;
}

function ctaBand(headline, sub) {
  return `<section class="cta-band">
  <h2>${headline}</h2>
  <p>${sub}</p>
  <div class="cta-band-btns">
    <a href="${SMS_LINK}" class="btn-white">📱 Text Us a Photo</a>
    <a href="tel:+18589880325" class="btn-outline-white">📞 Call ${PHONE}</a>
  </div>
</section>`;
}

// ─── SERVICE PAGES ────────────────────────────────────────────────────────────

const servicePages = [
  {
    file: 'bumper-repair.html',
    title: 'Bumper Repair San Diego | Auto Paint Fix',
    desc: 'Mobile bumper repair and repaint across San Diego. Color-matched finish, no shop drop-off needed. Same-day quotes via text.',
    tag: 'Bumper Repair',
    h1: 'BUMPER\nREPAIR',
    intro: 'Scuffed, cracked, or scraped bumper? We repair and refinish bumpers on-site across San Diego County — no drop-off, no waiting. Our mobile technicians color-match your factory paint and deliver a seamless finish.',
    cards: [
      { icon: '🔧', name: 'Minor Scuff / Scratch', desc: 'Surface-level paint transfer and light scuffs are wet-sanded, blended, and resprayed for an invisible repair.', price: 'From $200' },
      { icon: '🎨', name: 'Bumper Respray', desc: 'Full panel color-match and respray for deeper scratches, faded paint, or minor cracks that don\'t affect structure.', price: 'From $405' },
      { icon: '🚗', name: 'Bumper Replace & Paint', desc: 'New bumper installed and painted to exact factory color spec. We source the part and handle the full job.', price: 'From $605' },
    ],
    prices: [
      { name: 'Surface Scuff', price: '$200', shop: '$675+' },
      { name: 'Scratch Repair', price: '$405', shop: '$1,080+' },
      { name: 'Full Bumper Repaint', price: '$605', shop: '$1,620+' },
    ]
  },
  {
    file: 'scratch-removal.html',
    title: 'Scratch Removal San Diego | Auto Paint Fix',
    desc: 'Professional auto scratch removal in San Diego. Deep scratches, key marks, and road debris damage repaired and color-matched on-site.',
    tag: 'Scratch Removal',
    h1: 'SCRATCH\nREMOVAL',
    intro: 'Key marks, road debris, or parking lot scratches — we handle all depths of paint damage. Our technicians come to your location, assess the scratch, and restore the finish with factory-matched paint.',
    cards: [
      { icon: '✦', name: 'Clear Coat Scratch', desc: 'Scratches that haven\'t broken through the base coat are polished out and sealed — no respray needed in most cases.', price: 'From $200' },
      { icon: '🎨', name: 'Base Coat Scratch', desc: 'Scratches reaching the colored paint layer are spot-repaired, blended into surrounding panels for an invisible fix.', price: 'From $405' },
      { icon: '🔩', name: 'Deep Scratch / Key Mark', desc: 'Down-to-metal scratches are filled, primed, base-coated, and clear-coated — full professional finish.', price: 'From $550' },
    ],
    prices: [
      { name: 'Clear Coat Polish', price: '$200', shop: '$400+' },
      { name: 'Spot Repair', price: '$405', shop: '$900+' },
      { name: 'Deep Scratch / Keying', price: '$550', shop: '$1,350+' },
    ]
  },
  {
    file: 'scuff-scrape-repair.html',
    title: 'Scuff & Scrape Repair San Diego | Auto Paint Fix',
    desc: 'Mobile scuff and scrape repair across San Diego. Paint transfer, curb rash, and concrete scrapes repaired on-site with color-matched finish.',
    tag: 'Scuff & Scrape Repair',
    h1: 'SCUFF &\nSCRAPE REPAIR',
    intro: 'Paint transfer from another car, curb rash on your bumper, or concrete scrapes on a panel — these are quick wins for our mobile team. We remove the transfer, smooth the surface, and respray with your factory color.',
    cards: [
      { icon: '🚧', name: 'Paint Transfer', desc: 'Paint from another vehicle wiped or scraped onto yours is chemically removed and the area is polished or resprayed.', price: 'From $200' },
      { icon: '🛞', name: 'Curb Rash', desc: 'Bumper corner scrapes and wheel-arch scuffs from parking are smoothed, filled if needed, and refinished.', price: 'From $200' },
      { icon: '🏗️', name: 'Panel Scrape', desc: 'Deeper scrapes from concrete pillars, bollards, or walls — filled, primed, and repainted to factory spec.', price: 'From $405' },
    ],
    prices: [
      { name: 'Light Scuff', price: '$200', shop: '$500+' },
      { name: 'Curb / Corner Rash', price: '$200+', shop: '$675+' },
      { name: 'Deep Panel Scrape', price: '$405+', shop: '$1,080+' },
    ]
  },
  {
    file: 'auto-body-paint.html',
    title: 'Auto Body Paint San Diego | Auto Paint Fix',
    desc: 'Full auto body paint and partial panel repaints across San Diego. Color matching, blending, and full vehicle refinishing — mobile service.',
    tag: 'Auto Body Paint',
    h1: 'AUTO BODY\nPAINT',
    intro: 'From single-panel repaints to full vehicle refinishing, our mobile technicians deliver showroom-quality paint work at your location. Precision color-matching means no visible difference between repainted and original panels.',
    cards: [
      { icon: '🎨', name: 'Panel Repaint', desc: 'One or more damaged panels stripped, prepped, and resprayed with factory-matched base and clear coat.', price: 'From $550' },
      { icon: '✨', name: 'Partial Repaint', desc: 'Targeted repair covering damage zones across multiple panels — blended seamlessly into adjacent paintwork.', price: 'From $625' },
      { icon: '🚗', name: 'Full Vehicle Repaint', desc: 'Complete vehicle refinishing including panel prep, color-match, base coat, and high-gloss clear coat.', price: 'From $1,620' },
    ],
    prices: [
      { name: 'Single Panel', price: '$550', shop: '$1,350+' },
      { name: 'Partial Repaint', price: '$625+', shop: '$1,420+' },
      { name: 'Full Repaint', price: '$1,620+', shop: '$3,375+' },
    ]
  },
  {
    file: 'paintless-dent-repair.html',
    title: 'Paintless Dent Repair San Diego | Auto Paint Fix',
    desc: 'Paintless dent repair (PDR) in San Diego. Hail damage, door dings, and minor dents removed without repainting — preserves factory finish.',
    tag: 'Paintless Dent Repair',
    h1: 'PAINTLESS\nDENT REPAIR',
    intro: 'Paintless dent repair (PDR) is the gold standard for small dents and door dings where the paint is unbroken. We massage the metal back to factory shape from behind the panel — no filler, no repaint, no loss of original finish value.',
    cards: [
      { icon: '🔨', name: 'Door Dings', desc: 'Small dents from car doors in parking lots are massaged out in 30–60 minutes with no paint involved.', price: 'From $200' },
      { icon: '🌨️', name: 'Hail Damage', desc: 'Multiple shallow dents from hail are worked panel by panel using specialized PDR tools.', price: 'From $200' },
      { icon: '⚙️', name: 'Crease Dents', desc: 'Longer, creased dents require more time and precision — we evaluate each one before quoting.', price: 'Case by case' },
    ],
    prices: [
      { name: 'Single Door Ding', price: '$200', shop: '$350+' },
      { name: 'Multi-Dent / Hail', price: '$200+', shop: '$675+' },
      { name: 'Crease / Complex', price: 'Quote', shop: '$1,000+' },
    ]
  },
];

function servicePage(data) {
  const h1Lines = data.h1.split('\n').map(l => `<span style="display:block;">${l}</span>`).join('');
  const cardsHtml = data.cards.map(c => `
    <div class="info-card">
      <div class="info-card-icon">${c.icon}</div>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
      <div class="info-card-price">${c.price}</div>
    </div>`).join('');
  const pricesHtml = data.prices.map(p => `
    <div class="price-card">
      <h4>${p.name}</h4>
      <div class="price">${p.price}</div>
      <div class="price-shop">Shop avg: ${p.shop}</div>
    </div>`).join('');

  return `${head(data.title, data.desc, data.file)}
<body>
${nav()}
<section class="page-hero">
  <div class="page-hero-inner">
    <div class="section-tag">${data.tag}</div>
    <h1 class="page-h">${h1Lines}</h1>
    <p class="page-desc">${data.intro}</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap;">
      <a href="${SMS_LINK}" class="btn-primary">📱 Text Us a Photo</a>
      <a href="contact.html" class="btn-ghost">Get a Free Quote →</a>
    </div>
    <div class="trust-row">
      <span class="trust-badge">✓ Mobile — We Come to You</span>
      <span class="trust-badge">✓ Color-Matched Finish</span>
      <span class="trust-badge">✓ Same-Day Quotes</span>
      <span class="trust-badge">✓ San Diego County</span>
    </div>
  </div>
</section>

<section style="background:var(--bg);padding:72px 48px;">
  <div style="max-width:1200px;margin:0 auto;">
    <div class="section-tag">What's Included</div>
    <h2 style="font-family:'Anton',sans-serif;font-size:clamp(32px,4vw,52px);letter-spacing:0.01em;color:var(--white);margin-bottom:8px;">What We Fix</h2>
    <p style="font-size:15px;color:rgba(255,255,255,0.45);max-width:500px;">Every job is assessed on-site before work begins. Text us a photo for a same-day estimate.</p>
    <div class="cards-grid">${cardsHtml}</div>
  </div>
</section>

<section class="pricing-section">
  <div style="max-width:1200px;margin:0 auto;">
    <div class="section-tag">Transparent Pricing</div>
    <h2 style="font-family:'Anton',sans-serif;font-size:clamp(32px,4vw,52px);letter-spacing:0.01em;color:var(--white);margin-bottom:8px;">What You'll Pay</h2>
    <p style="font-size:15px;color:rgba(255,255,255,0.45);max-width:500px;">No hidden fees. We quote the total before we start. Final price confirmed after on-site inspection.</p>
    <div class="pricing-grid">${pricesHtml}</div>
  </div>
</section>

${ctaBand('Ready to Fix It?', 'Text us a photo — most quotes come back within the hour.')}
${footer()}
${navScript()}
</body>
</html>`;
}

// ─── CITY PAGES ───────────────────────────────────────────────────────────────

const cities = [
  { file: 'carlsbad.html',           name: 'Carlsbad',            blurb: 'Serving Carlsbad and surrounding North County areas from Carlsbad Village to Bressi Ranch.' },
  { file: 'chula-vista.html',        name: 'Chula Vista',         blurb: 'Mobile auto paint repair throughout Chula Vista — East Lake, Otay Ranch, Bonita, and beyond.' },
  { file: 'coronado.html',           name: 'Coronado',            blurb: 'We serve Coronado Island and the surrounding Bay area with full mobile paint repair.' },
  { file: 'downtown-san-diego.html', name: 'Downtown San Diego',  blurb: 'Serving the Downtown SD core — Little Italy, East Village, Gaslamp, Marina District, and Cortez Hill.' },
  { file: 'el-cajon.html',           name: 'El Cajon',            blurb: 'Full mobile paint service in El Cajon including Fletcher Hills, Rancho San Diego, and Santee border areas.' },
  { file: 'escondido.html',          name: 'Escondido',           blurb: 'Serving Escondido and North County Inland — Hidden Meadows, Valley Center, and San Marcos nearby.' },
  { file: 'la-jolla.html',           name: 'La Jolla',            blurb: 'Premium mobile auto paint repair in La Jolla — Bird Rock, La Jolla Shores, UTC, and Torrey Pines.' },
  { file: 'mira-mesa.html',          name: 'Mira Mesa',           blurb: 'We cover all of Mira Mesa including Black Mountain Ranch and Scripps Ranch nearby.' },
  { file: 'mission-valley.html',     name: 'Mission Valley',      blurb: 'Centrally located — we serve Mission Valley, Fashion Valley, Hotel Circle, and Mission Hills.' },
  { file: 'national-city.html',      name: 'National City',       blurb: 'Mobile paint repair in National City and adjacent South Bay neighborhoods.' },
  { file: 'ocean-beach.html',        name: 'Ocean Beach',         blurb: 'Serving Ocean Beach, Point Loma, Sunset Cliffs, and the Sports Arena area.' },
  { file: 'oceanside.html',          name: 'Oceanside',           blurb: 'North County coastal coverage — Oceanside, Camp Pendleton area, and San Luis Rey.' },
  { file: 'pacific-beach.html',      name: 'Pacific Beach',       blurb: 'We come to Pacific Beach, Mission Beach, and the beach communities along Mission Bay.' },
  { file: 'poway.html',              name: 'Poway',               blurb: 'Covering Poway, Rancho Bernardo adjacent, and Scripps Ranch for mobile auto paint repair.' },
  { file: 'rancho-bernardo.html',    name: 'Rancho Bernardo',     blurb: 'Serving Rancho Bernardo, 4S Ranch, and Sabre Springs — convenient on-site service.' },
  { file: 'santee.html',             name: 'Santee',              blurb: 'Mobile paint repair in Santee and East County including Lakeside and Flinn Springs.' },
  { file: 'vista.html',              name: 'Vista',               blurb: 'Serving Vista and surrounding areas including Bonsall, Buena, and South Oceanside.' },
];

function cityPage(city) {
  return `${head(
    `Auto Paint Repair in ${city.name} | Auto Paint Fix San Diego`,
    `Mobile auto paint repair in ${city.name}, CA. Bumper repair, scratch removal, and full repaints — we come to you. Same-day quotes. Serving all of San Diego County.`,
    city.file
  )}
<body>
${nav()}
<section class="page-hero">
  <div class="page-hero-inner">
    <div class="section-tag">Service Area</div>
    <h1 class="page-h">${city.name.toUpperCase().replace(/ /g, '\n').split('\n').map(l => `<span style="display:block;">${l}</span>`).join('')}</h1>
    <p class="page-desc">${city.blurb} We handle bumper repair, scratch removal, scuffs, dents, and full panel repaints — color-matched and done on-site.</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap;">
      <a href="${SMS_LINK}" class="btn-primary">📱 Text Us a Photo</a>
      <a href="contact.html" class="btn-ghost">Get a Free Quote →</a>
    </div>
    <div class="trust-row">
      <span class="trust-badge">✓ We Come to ${city.name}</span>
      <span class="trust-badge">✓ Color-Matched Finish</span>
      <span class="trust-badge">✓ Same-Day Quotes</span>
      <span class="trust-badge">✓ No Shop Drop-Off</span>
    </div>
  </div>
</section>

<section style="background:var(--bg);padding:72px 48px;">
  <div style="max-width:1200px;margin:0 auto;">
    <div class="section-tag">Our Services in ${city.name}</div>
    <h2 style="font-family:'Anton',sans-serif;font-size:clamp(32px,4vw,52px);letter-spacing:0.01em;color:var(--white);margin-bottom:8px;">What We Fix</h2>
    <p style="font-size:15px;color:rgba(255,255,255,0.45);max-width:500px;">All work is done on-site at your home, office, or parking lot in ${city.name}.</p>
    <div class="cards-grid">
      <div class="info-card">
        <div class="info-card-icon">🚗</div>
        <h3>Bumper Repair</h3>
        <p>Scuffs, cracks, and scrapes on your bumper repaired and resprayed with factory color-match.</p>
        <div class="info-card-price">From $200</div>
      </div>
      <div class="info-card">
        <div class="info-card-icon">✦</div>
        <h3>Scratch Removal</h3>
        <p>Key marks, road debris scratches, and deep paint damage repaired with a seamless blend.</p>
        <div class="info-card-price">From $200</div>
      </div>
      <div class="info-card">
        <div class="info-card-icon">🔧</div>
        <h3>Scuff & Scrape Repair</h3>
        <p>Paint transfer and parking lot scrapes removed and touched up with precision color-matching.</p>
        <div class="info-card-price">From $200</div>
      </div>
      <div class="info-card">
        <div class="info-card-icon">🎨</div>
        <h3>Auto Body Paint</h3>
        <p>Single panel repaints to full vehicle refinishing — all color-matched to your factory code.</p>
        <div class="info-card-price">From $550</div>
      </div>
      <div class="info-card">
        <div class="info-card-icon">⚙️</div>
        <h3>Paintless Dent Repair</h3>
        <p>Door dings and shallow dents popped back into shape without touching the factory paint.</p>
        <div class="info-card-price">From $200</div>
      </div>
    </div>
  </div>
</section>

${ctaBand(`Serving ${city.name}`, `Text us a photo of the damage — we\'ll send a quote within the hour.`)}

<section style="background:var(--bg);padding:56px 48px;">
  <div style="max-width:1200px;margin:0 auto;">
    <div class="section-tag">Also Serving</div>
    <h2 style="font-family:'Anton',sans-serif;font-size:clamp(28px,3vw,42px);letter-spacing:0.01em;color:var(--white);margin-bottom:24px;">Other Areas We Cover</h2>
    <div class="area-grid">
      ${cities.filter(c => c.file !== city.file).map(c => `<a href="${c.file}" class="area-card"><div class="area-card-name">${c.name}</div><div class="area-card-sub">San Diego County</div></a>`).join('\n      ')}
      <a href="service-area.html" class="area-card" style="border-color:var(--red);"><div class="area-card-name" style="color:var(--red);">View All Areas →</div><div class="area-card-sub">Full coverage map</div></a>
    </div>
  </div>
</section>

${footer()}
${navScript()}
</body>
</html>`;
}

// ─── SERVICE AREA PAGE ────────────────────────────────────────────────────────

function serviceAreaPage() {
  const areaCards = cities.map(c => `<a href="${c.file}" class="area-card"><div class="area-card-name">${c.name}</div><div class="area-card-sub">San Diego County</div></a>`).join('\n      ');
  return `${head(
    'Service Area — San Diego County | Auto Paint Fix',
    'Mobile auto paint repair serving all of San Diego County. Carlsbad, La Jolla, Chula Vista, El Cajon, Escondido, and 12 more cities. We come to you.',
    'service-area.html'
  )}
<body>
${nav()}
<section class="page-hero">
  <div class="page-hero-inner">
    <div class="section-tag">Service Area</div>
    <h1 class="page-h"><span style="display:block;">SAN DIEGO</span><span style="display:block;">COUNTY</span></h1>
    <p class="page-desc">We serve all of San Diego County — from Oceanside in the north to Chula Vista in the south, and from the coast to East County. No shop needed: we come to your home, office, or any parking lot.</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap;">
      <a href="${SMS_LINK}" class="btn-primary">📱 Text Us a Photo</a>
      <a href="contact.html" class="btn-ghost">Get a Free Quote →</a>
    </div>
    <div class="trust-row">
      <span class="trust-badge">✓ 17+ Cities Covered</span>
      <span class="trust-badge">✓ Mobile — No Drop-Off</span>
      <span class="trust-badge">✓ Same-Day Quotes</span>
    </div>
  </div>
</section>

<section style="background:var(--bg);padding:72px 48px;">
  <div style="max-width:1200px;margin:0 auto;">
    <div class="section-tag">All Locations</div>
    <h2 style="font-family:'Anton',sans-serif;font-size:clamp(32px,4vw,52px);letter-spacing:0.01em;color:var(--white);margin-bottom:8px;">Where We Work</h2>
    <p style="font-size:15px;color:rgba(255,255,255,0.45);max-width:500px;margin-bottom:8px;">Click any city to see local service details and pricing.</p>
    <div class="area-grid">
      ${areaCards}
    </div>
  </div>
</section>

${ctaBand("Don't See Your City?", "We likely still cover it. Text us your zip code and we'll confirm.")}
${footer()}
${navScript()}
</body>
</html>`;
}

// ─── SERVICES OVERVIEW PAGE ───────────────────────────────────────────────────

function servicesPage() {
  return `${head(
    'Auto Paint Services San Diego | Auto Paint Fix',
    'Mobile auto paint repair services in San Diego — bumper repair, scratch removal, scuff & scrape repair, auto body paint, and paintless dent repair. We come to you.',
    'services.html'
  )}
<body>
${nav()}
<section class="page-hero">
  <div class="page-hero-inner">
    <div class="section-tag">Our Services</div>
    <h1 class="page-h"><span style="display:block;">WHAT WE</span><span style="display:block;">FIX</span></h1>
    <p class="page-desc">From a door ding to a full vehicle repaint — our mobile technicians come to your location anywhere in San Diego County. Text us a photo and we'll quote you the same day.</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap;">
      <a href="${SMS_LINK}" class="btn-primary">📱 Text Us a Photo</a>
      <a href="contact.html" class="btn-ghost">Get a Free Quote →</a>
    </div>
  </div>
</section>

<section style="background:var(--bg);padding:72px 48px;">
  <div style="max-width:1200px;margin:0 auto;">
    <div class="cards-grid">
      <a href="bumper-repair.html" class="info-card" style="text-decoration:none;display:block;transition:border-color 0.2s;" onmouseover="this.style.borderColor='var(--red)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'">
        <div class="info-card-icon">🚗</div>
        <h3>Bumper Repair</h3>
        <p>Scuffs, cracks, and scrapes on your bumper repaired and resprayed with factory color-match. Same-day, on-site.</p>
        <div class="info-card-price">From $200 →</div>
      </a>
      <a href="scratch-removal.html" class="info-card" style="text-decoration:none;display:block;transition:border-color 0.2s;" onmouseover="this.style.borderColor='var(--red)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'">
        <div class="info-card-icon">✦</div>
        <h3>Scratch Removal</h3>
        <p>Clear coat, base coat, or down-to-metal scratches. We assess the depth and repair with a seamless blend.</p>
        <div class="info-card-price">From $200 →</div>
      </a>
      <a href="scuff-scrape-repair.html" class="info-card" style="text-decoration:none;display:block;transition:border-color 0.2s;" onmouseover="this.style.borderColor='var(--red)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'">
        <div class="info-card-icon">🚧</div>
        <h3>Scuff &amp; Scrape Repair</h3>
        <p>Paint transfer, curb rash, and parking lot scrapes — removed, smoothed, and touched up to match.</p>
        <div class="info-card-price">From $200 →</div>
      </a>
      <a href="auto-body-paint.html" class="info-card" style="text-decoration:none;display:block;transition:border-color 0.2s;" onmouseover="this.style.borderColor='var(--red)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'">
        <div class="info-card-icon">🎨</div>
        <h3>Auto Body Paint</h3>
        <p>Single panel, partial, or full vehicle repaints. Precision color-match using your factory paint code.</p>
        <div class="info-card-price">From $550 →</div>
      </a>
      <a href="paintless-dent-repair.html" class="info-card" style="text-decoration:none;display:block;transition:border-color 0.2s;" onmouseover="this.style.borderColor='var(--red)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'">
        <div class="info-card-icon">⚙️</div>
        <h3>Paintless Dent Repair</h3>
        <p>Door dings and hail damage removed without touching the paint — preserves your factory finish and resale value.</p>
        <div class="info-card-price">From $200 →</div>
      </a>
    </div>
  </div>
</section>

${ctaBand('Not Sure What You Need?', "Text us a photo. We'll tell you exactly what it takes and what it costs.")}
${footer()}
${navScript()}
</body>
</html>`;
}

// ─── PRICING PAGE ─────────────────────────────────────────────────────────────

function pricingPage() {
  return `${head(
    'Auto Paint Pricing San Diego | Auto Paint Fix',
    'Transparent auto paint repair pricing in San Diego. Bumper repair from $200, scratch removal from $200, full repaints from $1,620. No hidden fees.',
    'pricing.html'
  )}
<body>
${nav()}
<section class="page-hero">
  <div class="page-hero-inner">
    <div class="section-tag">Pricing</div>
    <h1 class="page-h"><span style="display:block;">TRANSPARENT</span><span style="display:block;">PRICING</span></h1>
    <p class="page-desc">No surprises. We quote the total before we start — and most quotes arrive the same day you text us a photo. Our prices are typically 40–60% less than traditional body shops because we have no overhead.</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap;">
      <a href="${SMS_LINK}" class="btn-primary">📱 Text for a Quote</a>
      <a href="contact.html" class="btn-ghost">Contact Us →</a>
    </div>
  </div>
</section>

<section class="pricing-section">
  <div style="max-width:1200px;margin:0 auto;">
    <div class="section-tag">Repair Pricing</div>
    <h2 style="font-family:'Anton',sans-serif;font-size:clamp(32px,4vw,52px);letter-spacing:0.01em;color:var(--white);margin-bottom:8px;">Common Repairs</h2>
    <p style="font-size:15px;color:rgba(255,255,255,0.45);max-width:500px;margin-bottom:8px;">Starting prices — final quote confirmed after photo review or on-site inspection.</p>
    <div class="pricing-grid">
      <div class="price-card">
        <h4>Touch-Up</h4>
        <div class="price">$200</div>
        <div class="price-sub">Surface scuffs &amp; minor paint transfer</div>
        <div class="price-shop">Shop avg: $675+</div>
      </div>
      <div class="price-card">
        <h4>Scratch Repair</h4>
        <div class="price">$405</div>
        <div class="price-sub">Base coat scratches, spot repairs</div>
        <div class="price-shop">Shop avg: $1,080+</div>
      </div>
      <div class="price-card">
        <h4>Bumper Repaint</h4>
        <div class="price">$605</div>
        <div class="price-sub">Full bumper color-match respray</div>
        <div class="price-shop">Shop avg: $1,620+</div>
      </div>
    </div>
  </div>
</section>

<section style="background:var(--bg);padding:72px 48px;">
  <div style="max-width:1200px;margin:0 auto;">
    <div class="section-tag">Repaint Pricing</div>
    <h2 style="font-family:'Anton',sans-serif;font-size:clamp(32px,4vw,52px);letter-spacing:0.01em;color:var(--white);margin-bottom:8px;">Full Repaint Levels</h2>
    <p style="font-size:15px;color:rgba(255,255,255,0.45);max-width:500px;margin-bottom:8px;">Three tiers based on prep depth, panel count, and finish quality.</p>
    <div class="pricing-grid">
      <div class="price-card" style="border-color:rgba(217,38,38,0.3);">
        <h4>Essential Repaint</h4>
        <div class="price">$1,620</div>
        <div class="price-sub">Full respray, factory color-match</div>
        <div class="price-shop">Shop avg: $3,375+</div>
      </div>
      <div class="price-card" style="border-color:rgba(217,38,38,0.5);">
        <h4>Precision Refinish</h4>
        <div class="price">$3,240</div>
        <div class="price-sub">Deep prep, high-gloss clear coat</div>
        <div class="price-shop">Shop avg: $5,400+</div>
      </div>
      <div class="price-card" style="border-color:rgba(217,38,38,0.7);">
        <h4>Show Finish</h4>
        <div class="price">$4,725+</div>
        <div class="price-sub">Mirror finish, show-quality result</div>
        <div class="price-shop">Shop avg: $8,100+</div>
      </div>
    </div>
  </div>
</section>

<section style="background:var(--bg2);padding:56px 48px;border-top:1px solid rgba(255,255,255,0.07);border-bottom:1px solid rgba(255,255,255,0.07);">
  <div style="max-width:760px;margin:0 auto;">
    <div class="section-tag">How It Works</div>
    <h2 style="font-family:'Anton',sans-serif;font-size:clamp(28px,3vw,44px);letter-spacing:0.01em;color:var(--white);margin-bottom:32px;">Getting a Quote Is Easy</h2>
    <div style="display:flex;flex-direction:column;gap:20px;">
      <div style="display:flex;gap:20px;align-items:flex-start;">
        <div style="width:40px;height:40px;border-radius:50%;background:var(--red);display:flex;align-items:center;justify-content:center;font-family:'Anton',sans-serif;font-size:18px;flex-shrink:0;">1</div>
        <div><div style="font-weight:700;font-size:16px;margin-bottom:4px;">Text us a photo of the damage</div><div style="font-size:14px;color:rgba(255,255,255,0.5);">A clear photo from a foot away is all we need to start the assessment.</div></div>
      </div>
      <div style="display:flex;gap:20px;align-items:flex-start;">
        <div style="width:40px;height:40px;border-radius:50%;background:var(--red);display:flex;align-items:center;justify-content:center;font-family:'Anton',sans-serif;font-size:18px;flex-shrink:0;">2</div>
        <div><div style="font-weight:700;font-size:16px;margin-bottom:4px;">We reply with a price — usually within the hour</div><div style="font-size:14px;color:rgba(255,255,255,0.5);">Our technician reviews the photo and gives you a fixed quote.</div></div>
      </div>
      <div style="display:flex;gap:20px;align-items:flex-start;">
        <div style="width:40px;height:40px;border-radius:50%;background:var(--red);display:flex;align-items:center;justify-content:center;font-family:'Anton',sans-serif;font-size:18px;flex-shrink:0;">3</div>
        <div><div style="font-weight:700;font-size:16px;margin-bottom:4px;">We schedule and come to you</div><div style="font-size:14px;color:rgba(255,255,255,0.5);">Pick a time that works — we show up at your location and handle everything on-site.</div></div>
      </div>
    </div>
  </div>
</section>

${ctaBand('Ready for a Quote?', "Text a photo now — no obligation, reply within the hour.")}
${footer()}
${navScript()}
</body>
</html>`;
}

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────

function contactPage() {
  return `${head(
    'Contact Auto Paint Fix San Diego | Get a Free Quote',
    'Contact Auto Paint Fix in San Diego. Text a photo for a same-day quote, call us, or fill out the form. Mobile auto paint repair across all of San Diego County.',
    'contact.html'
  )}
<body>
${nav()}
<section class="page-hero">
  <div class="page-hero-inner">
    <div class="section-tag">Contact</div>
    <h1 class="page-h"><span style="display:block;">GET A</span><span style="display:block;">FREE QUOTE</span></h1>
    <p class="page-desc">The fastest way to get a price is to text us a photo of the damage. We reply within the hour. You can also call, or fill out the form below.</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap;">
      <a href="${SMS_LINK}" class="btn-primary">📱 Text a Photo</a>
      <a href="tel:+18589880325" class="btn-ghost">📞 Call ${PHONE} →</a>
    </div>
  </div>
</section>

<section style="background:var(--bg);padding:72px 48px;">
  <div style="max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:64px;">
    <div>
      <div class="section-tag">Contact Options</div>
      <h2 style="font-family:'Anton',sans-serif;font-size:clamp(28px,3vw,44px);letter-spacing:0.01em;color:var(--white);margin-bottom:32px;">Reach Us</h2>
      <div style="display:flex;flex-direction:column;gap:24px;">
        <div style="background:var(--bg2);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:24px;">
          <div style="font-size:24px;margin-bottom:10px;">📱</div>
          <div style="font-weight:700;font-size:16px;margin-bottom:6px;">Text a Photo</div>
          <div style="font-size:14px;color:rgba(255,255,255,0.5);margin-bottom:12px;">Fastest way to get a quote. Send a photo of the damage and we'll reply within the hour.</div>
          <a href="${SMS_LINK}" style="display:inline-flex;align-items:center;gap:6px;background:var(--red);color:#fff;padding:10px 20px;border-radius:6px;font-size:14px;font-weight:700;text-decoration:none;">Text Now →</a>
        </div>
        <div style="background:var(--bg2);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:24px;">
          <div style="font-size:24px;margin-bottom:10px;">📞</div>
          <div style="font-weight:700;font-size:16px;margin-bottom:6px;">Call Us</div>
          <div style="font-size:14px;color:rgba(255,255,255,0.5);margin-bottom:12px;">Mon–Fri 7am–7pm, Sat–Sun 8am–5pm</div>
          <a href="tel:+18589880325" style="display:inline-flex;align-items:center;gap:6px;color:var(--red);font-family:'Anton',sans-serif;font-size:20px;text-decoration:none;">${PHONE}</a>
        </div>
        <div style="background:var(--bg2);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:24px;">
          <div style="font-size:24px;margin-bottom:10px;">📍</div>
          <div style="font-weight:700;font-size:16px;margin-bottom:6px;">Service Area</div>
          <div style="font-size:14px;color:rgba(255,255,255,0.5);">We cover all of San Diego County. No shop drop-off — we come to your home, office, or parking lot.</div>
        </div>
      </div>
    </div>
    <div>
      <div class="section-tag">Quick Form</div>
      <h2 style="font-family:'Anton',sans-serif;font-size:clamp(28px,3vw,44px);letter-spacing:0.01em;color:var(--white);margin-bottom:32px;">Send a Message</h2>
      <form action="https://formspree.io/f/contact" method="POST">
        <div class="form-group">
          <label class="form-label">Your Name</label>
          <input class="form-input" type="text" name="name" placeholder="John Smith" required>
        </div>
        <div class="form-group">
          <label class="form-label">Phone Number</label>
          <input class="form-input" type="tel" name="phone" placeholder="(619) 555-0100" required>
        </div>
        <div class="form-group">
          <label class="form-label">City / Area</label>
          <input class="form-input" type="text" name="city" placeholder="La Jolla, San Diego...">
        </div>
        <div class="form-group">
          <label class="form-label">Describe the Damage</label>
          <textarea class="form-input" name="damage" placeholder="e.g. Rear bumper scratch, silver Toyota Camry..."></textarea>
        </div>
        <button type="submit" class="form-submit">Send Message →</button>
        <p style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:12px;text-align:center;">Or text a photo to <a href="${SMS_LINK}" style="color:var(--red);text-decoration:none;">${PHONE}</a> for the fastest reply.</p>
      </form>
    </div>
  </div>
</section>

${footer()}
${navScript()}
<style>
  @media (max-width: 768px) {
    section > div[style*="grid-template-columns:1fr 1fr"] { grid-template-columns: 1fr !important; gap: 40px !important; }
  }
</style>
</body>
</html>`;
}

// ─── WRITE FILES ──────────────────────────────────────────────────────────────

const pages = [];

// Service pages
servicePages.forEach(data => pages.push({ file: data.file, html: servicePage(data) }));

// City pages
cities.forEach(city => pages.push({ file: city.file, html: cityPage(city) }));

// Other pages
pages.push({ file: 'service-area.html', html: serviceAreaPage() });
pages.push({ file: 'services.html',     html: servicesPage() });
pages.push({ file: 'pricing.html',      html: pricingPage() });
pages.push({ file: 'contact.html',      html: contactPage() });

pages.forEach(({ file, html }) => {
  fs.writeFileSync(file, html, 'utf8');
  console.log('✓ ' + file);
});

console.log('\nDone — ' + pages.length + ' pages written.');
