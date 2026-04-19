/*!
 * ============================================================================
 * Amerigroup International — Main JavaScript
 * ============================================================================
 * @copyright  Copyright (c) 2023-2025 Amerigroup International.
 *             All rights reserved.
 * @owner      Amerigroup International
 * @website    https://www.amerigroupint.net
 *
 * SOURCE ATTRIBUTION
 * ------------------
 * This script is part of the official WordPress theme for Amerigroup
 * International, produced by mirroring and converting the live site at
 * https://www.amerigroupint.net into a WordPress theme package.
 *
 * All interactive behaviour (sticky header, mobile nav, scroll animations,
 * AJAX contact form) was engineered to replicate the original site experience.
 *
 * LICENSE: PROPRIETARY & CONFIDENTIAL
 * This file may only be used within Amerigroup International's own WordPress
 * installation. Redistribution or third-party use is prohibited without
 * express written permission.
 * ============================================================================
 */

/**
 * Amerigroup International — main.js
 */
(function () {
    'use strict';

    /* ---------------------------------------------------------------
       STICKY HEADER
    --------------------------------------------------------------- */
    const header = document.getElementById('site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 20);
        }, { passive: true });
    }

    /* ---------------------------------------------------------------
       MOBILE NAV TOGGLE
    --------------------------------------------------------------- */
    const toggle = document.getElementById('nav-toggle');
    const nav    = document.getElementById('primary-nav');
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('open');
            toggle.setAttribute('aria-expanded', isOpen.toString());
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!header.contains(e.target)) {
                nav.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /* ---------------------------------------------------------------
       SMOOTH SCROLL for anchor links
    --------------------------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* ---------------------------------------------------------------
       CONTACT FORM — AJAX SUBMIT
    --------------------------------------------------------------- */
    const form    = document.getElementById('ag-contact-form');
    const msgBox  = document.getElementById('ag-form-message');

    if (form && msgBox && typeof agData !== 'undefined') {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submit = form.querySelector('.btn-submit');
            submit.disabled    = true;
            submit.textContent = 'Sending…';

            const data = new FormData(form);
            data.append('action', 'ag_contact');
            data.append('nonce',  agData.nonce);

            try {
                const resp   = await fetch(agData.ajaxurl, { method: 'POST', body: data });
                const result = await resp.json();

                msgBox.style.display      = 'block';
                msgBox.style.background   = result.success ? 'rgba(46,204,113,.2)' : 'rgba(231,76,60,.2)';
                msgBox.style.color        = result.success ? '#27ae60' : '#e74c3c';
                msgBox.textContent        = result.data?.message || (result.success ? 'Sent!' : 'Error.');

                if (result.success) form.reset();
            } catch (err) {
                msgBox.style.display    = 'block';
                msgBox.style.background = 'rgba(231,76,60,.2)';
                msgBox.style.color      = '#e74c3c';
                msgBox.textContent      = 'Connection error. Please try again.';
            } finally {
                submit.disabled    = false;
                submit.textContent = 'Submit';
            }
        });
    }

    /* ---------------------------------------------------------------
       INTERSECTION OBSERVER — fade-in on scroll
    --------------------------------------------------------------- */
    const fadeEls = document.querySelectorAll('.service-card, .team-card, .project-card, .value-card, .partner-logo, .tech-item');
    if ('IntersectionObserver' in window && fadeEls.length) {
        fadeEls.forEach(el => {
            el.style.opacity   = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity .5s ease, transform .5s ease';
        });

        const obs = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity   = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, i * 80);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        fadeEls.forEach(el => obs.observe(el));
    }
})();
