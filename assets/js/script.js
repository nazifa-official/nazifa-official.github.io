/* ==========================================================================
   Nazifa Tabassum — Portfolio Scripts (vanilla JS, no jQuery)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    /* ---------- 1. AOS ---------- */
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 750, once: true, offset: 70 });
    }

    const header = document.getElementById('siteHeader');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const backToTop = document.getElementById('backToTop');
    const progress = document.getElementById('scrollProgress');

    /* ---------- 2. Header state, progress bar, back-to-top ---------- */
    function onScroll() {
        const y = window.scrollY || window.pageYOffset;

        if (header) header.classList.toggle('scrolled', y > 40);

        if (backToTop) backToTop.classList.toggle('show', y > 450);

        if (progress) {
            const doc = document.documentElement;
            const max = doc.scrollHeight - doc.clientHeight;
            progress.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
        }

        setActiveNav();
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    /* ---------- 3. Active nav link while scrolling ---------- */
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    const navLinks = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));

    function setActiveNav() {
        const pos = window.scrollY + 160;
        let current = 'home';

        sections.forEach(function (sec) {
            if (sec.offsetTop <= pos) current = sec.id;
        });

        navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    }

    /* ---------- 4. Mobile menu ---------- */
    function closeMenu() {
        if (!navMenu || !navToggle) return;
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    }

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            const open = navMenu.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });

        document.addEventListener('click', function (e) {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) closeMenu();
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeMenu();
        });
    }

    /* ---------- 5. Smooth scrolling with sticky-header offset ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            closeMenu();

            const offset = (header ? header.offsetHeight : 0) + 12;
            const top = Math.max(target.getBoundingClientRect().top + window.pageYOffset - offset, 0);

            window.scrollTo({ top: top, behavior: 'smooth' });
            history.replaceState(null, '', href);
        });
    });

    /* ---------- 6. Back to top ---------- */
    if (backToTop) {
        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---------- 7. Stat counters ---------- */
    const counters = Array.from(document.querySelectorAll('.counter'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function animateCounter(el) {
        const target = parseFloat(el.dataset.count);
        if (isNaN(target)) return;

        if (reduceMotion) { el.textContent = target; return; }

        const duration = 1400;
        const start = performance.now();

        function step(now) {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(eased * target);
            if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    if ('IntersectionObserver' in window && counters.length) {
        const io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: .4 });

        counters.forEach(function (c) { io.observe(c); });
    } else {
        counters.forEach(function (c) { c.textContent = c.dataset.count; });
    }

    /* ---------- 8. Footer year ---------- */
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---------- 9. Initial paint ---------- */
    onScroll();
    window.addEventListener('load', function () {
        if (typeof AOS !== 'undefined') AOS.refresh();
        onScroll();
    });
});
