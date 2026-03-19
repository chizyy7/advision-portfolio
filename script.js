"use strict";

/* ============================================================
   ADVISION — script.js
   All interactive features — no frameworks, no imports
   ============================================================ */

/* ── 1. PORTFOLIO PROJECT DATA ── */
const portfolioProjects = [
  {
    title: '"Just Run" Digital Campaign',
    client: 'Nike',
    metric: '+340%',
    metricSub: 'Engagement Increase',
    tags: ['Instagram', 'TikTok', 'Digital', '6 weeks'],
    gradient: 'linear-gradient(135deg,#111,#333)',
    strategy:
      'We partnered with 40 micro-influencers and used dynamic retargeting ads paired with user-generated content. The "Just Run" challenge went viral on TikTok with 80M+ challenge views. Each city leg produced authentic short-form footage that was repurposed across Instagram Reels, Stories, and paid placements — delivering a +340% engagement lift against the pre-campaign baseline.'
  },
  {
    title: '"Refresh Your World"',
    client: 'Coca-Cola',
    metric: '5M',
    metricSub: 'Impressions',
    tags: ['Billboard', 'Social Media', 'OOH', '8 weeks'],
    gradient: 'linear-gradient(135deg,#F40009,#880004)',
    strategy:
      'We mapped high-traffic locations in 15 cities and synced digital ad timing with billboard placements. A/B tested 12 ad variants resulting in 34% higher recall than previous campaigns. Unified visual language was extended across bus stops, airports, and paid social — all shooting the same color palette and typography, creating a seamless world-building experience the audience couldn\'t escape.'
  },
  {
    title: '"Drive the Future" YouTube Pre-roll',
    client: 'Tesla',
    metric: '12% CTR',
    metricSub: '2M Views',
    tags: ['YouTube', 'Pre-roll', 'Video', '4 weeks'],
    gradient: 'linear-gradient(135deg,#1a1a1a,#CC0000)',
    strategy:
      'We targeted tech early-adopters aged 28–45 across YouTube and connected TV. The silent opening delivered a 68% view-through rate (industry average: 31%). The 12% click-through rate crushed the 2% industry benchmark by 6×. Key creative insight: the absence of music made viewers lean in, and the subtle engine hum created an ASMR-like intimacy that kept retention unusually high.'
  },
  {
    title: '"Glow Up" Influencer Campaign',
    client: 'NovaSkin',
    metric: '3× Sales',
    metricSub: '800K Reach',
    tags: ['Instagram', 'Influencer', 'UGC', '10 weeks'],
    gradient: 'linear-gradient(135deg,#8B5CF6,#6D28D9)',
    strategy:
      'We recruited 25 nano-influencers (10K–50K followers) with high engagement rates and strict "no filter" briefs. Authentic before/after content outperformed polished ads by 4× in conversion. The honest, unedited skin journeys resonated deeply — comments drove additional organic reach, and a dedicated hashtag campaign generated 12K+ pieces of owned UGC that continued delivering impressions long after the paid phase ended.'
  },
  {
    title: '"Your Playlist, Your Story"',
    client: 'Spotify',
    metric: '4M',
    metricSub: 'Streams',
    tags: ['In-App', 'Social Media', 'Personalized', '12 weeks'],
    gradient: 'linear-gradient(135deg,#1DB954,#0d7a36)',
    strategy:
      'We used Spotify\'s first-party listening data to create 500+ dynamic ad variants matched to listener mood and time of day. Each variant felt personal — "You\'ve been listening to a lot of late-night lo-fi. Here\'s a playlist that understands 2 AM." Result: 4× higher engagement than generic ads, with in-app saves increasing 280% during the campaign window. The personalized creative framework was adopted as a new internal standard.'
  },
  {
    title: '"Own the Street" TikTok',
    client: 'UrbanThreads',
    metric: 'Sold Out',
    metricSub: '1.2M Views · 3 Days',
    tags: ['TikTok', 'UGC', 'Street', '3 weeks'],
    gradient: 'linear-gradient(135deg,#F97316,#c2410c)',
    strategy:
      'We created a #OwnTheStreet challenge with a custom sound track. The campaign was seeded with 10 anchor influencers who collectively activated 200+ organic creator participants. The challenge spread to 47 cities in 7 days. Earned media value was 10× the paid ad spend. A sold-out collection in 3 days demonstrated the power of identity-driven content — people weren\'t buying a hoodie, they were buying a badge of belonging.'
  }
];

/* ── 2. DOM READY ── */
document.addEventListener('DOMContentLoaded', function () {
  initNavbar();
  initHamburger();
  initStatsCountUp();
  initBrandCardTilt();
  initServiceCardTilt();
  initPortfolioModal();
  initTestimonialsCarousel();
  initContactForm();
  initScrollReveal();
});

/* ── 3. NAVBAR: scroll class + active link ── */
function initNavbar() {
  const navbar  = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  const sections = [];

  navLinks.forEach(function (link) {
    var sectionId = link.getAttribute('data-section');
    var el = document.getElementById(sectionId);
    if (el && !sections.find(function (s) { return s.id === sectionId; })) {
      sections.push({ id: sectionId, el: el });
    }
  });

  // Scroll class
  function onScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveLink();
  }

  function updateActiveLink() {
    var scrollMid = window.scrollY + window.innerHeight * 0.4;
    var current = '';

    sections.forEach(function (s) {
      if (s.el.offsetTop <= scrollMid) {
        current = s.id;
      }
    });

    navLinks.forEach(function (link) {
      if (link.getAttribute('data-section') === current) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── 4. HAMBURGER MENU ── */
function initHamburger() {
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobile-nav');
  var mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    hamburger.classList.add('open');
    mobileNav.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileNav.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    if (hamburger.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close on link click
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on backdrop click (outside nav links)
  mobileNav.addEventListener('click', function (e) {
    if (e.target === mobileNav) closeMenu();
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      closeMenu();
      hamburger.focus();
    }
  });
}

/* ── 5. STATS COUNT-UP ── */
function initStatsCountUp() {
  var statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (!statNumbers.length) return;

  var hasAnimated = false;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach(function (el) {
          animateCount(el);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  var statsBar = document.getElementById('stats');
  if (statsBar) observer.observe(statsBar);

  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1800;
    var startTime = null;

    function easeOutExpo(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var eased = easeOutExpo(progress);
      var current = Math.round(eased * target);
      el.textContent = current + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }
}

/* ── 6. 3D TILT EFFECT (shared)
   Uses CSS custom properties to avoid repeated reflow triggers.
   CSS picks up --tilt-x / --tilt-y on the card via a data-tilt selector.
── */
function applyTilt(cards, maxTilt) {
  maxTilt = maxTilt ?? 12;
  cards.forEach(function (card) {
    // Mark the card so its CSS transform reads the custom props
    card.setAttribute('data-tilt', '');

    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x  = e.clientX - rect.left;
      var y  = e.clientY - rect.top;
      var cx = rect.width  / 2;
      var cy = rect.height / 2;
      var rotX = (((y - cy) / cy) * -maxTilt).toFixed(2);
      var rotY = (((x - cx) / cx) *  maxTilt).toFixed(2);
      // Batch property updates to a single style.setProperty call per axis
      card.style.setProperty('--tilt-x', rotX + 'deg');
      card.style.setProperty('--tilt-y', rotY + 'deg');
      card.style.setProperty('--tilt-active', '1');
    });

    card.addEventListener('mouseleave', function () {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
      card.style.setProperty('--tilt-active', '0');
    });
  });
}

function initBrandCardTilt() {
  applyTilt(document.querySelectorAll('.brand-card'), 10);
}

function initServiceCardTilt() {
  applyTilt(document.querySelectorAll('.service-card'), 8);
}

/* ── 7. PORTFOLIO MODAL ── */
function initPortfolioModal() {
  var overlay    = document.getElementById('modal-overlay');
  var modal      = document.getElementById('modal');
  var closeBtn   = document.getElementById('modal-close');
  var titleEl    = document.getElementById('modal-title');
  var clientEl   = document.getElementById('modal-client-name');
  var tagsEl     = document.getElementById('modal-tags');
  var metricEl   = document.getElementById('modal-metric-value');
  var metricSub  = document.getElementById('modal-metric-sub');
  var strategyEl = document.getElementById('modal-strategy-text');
  var modalHeader = document.getElementById('modal-header');

  if (!overlay) return;

  var focusableSelectors = 'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';
  var previousFocus = null;

  function openModal(projectIndex) {
    var project = portfolioProjects[projectIndex];
    if (!project) return;

    // Populate content
    titleEl.textContent    = project.title;
    clientEl.textContent   = 'Client: ' + project.client;
    metricEl.textContent   = project.metric;
    metricSub.textContent  = project.metricSub || 'Key Result';
    strategyEl.textContent = project.strategy;
    modalHeader.style.background = project.gradient;

    // Tags
    tagsEl.innerHTML = '';
    project.tags.forEach(function (tag) {
      var span = document.createElement('span');
      span.className = 'modal-tag';
      span.textContent = tag;
      tagsEl.appendChild(span);
    });

    // Show
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus trap setup
    previousFocus = document.activeElement;
    setTimeout(function () {
      closeBtn.focus();
    }, 50);
  }

  function closeModal() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (previousFocus) previousFocus.focus();
  }

  // Open on "View Case Study" clicks
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.btn-case-study');
    if (!btn) return;
    var card = btn.closest('.portfolio-card');
    if (!card) return;
    var idx = parseInt(card.getAttribute('data-project'), 10);
    if (!isNaN(idx)) {
      e.stopPropagation();
      openModal(idx);
    }
  });

  // Close buttons
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });

  // Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeModal();
    }
    // Focus trap
    if (e.key === 'Tab' && overlay.classList.contains('open')) {
      var focusable = Array.from(modal.querySelectorAll(focusableSelectors));
      if (!focusable.length) { e.preventDefault(); return; }
      var first = focusable[0];
      var last  = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  });
}

/* ── 8. TESTIMONIALS CAROUSEL ── */
function initTestimonialsCarousel() {
  var track   = document.getElementById('testimonials-track');
  var wrapper = document.getElementById('testimonials-wrapper');
  var dots    = document.querySelectorAll('.testimonials-dots .dot');
  if (!track || !wrapper || !dots.length) return;

  var current  = 0;
  var total    = dots.length;
  var autoTimer = null;
  var isCarouselMode = false;

  function setupCarousel() {
    isCarouselMode = true;
    track.style.display = 'flex';
    track.style.flexWrap = 'nowrap';
    goTo(current, false);
  }

  function teardownCarousel() {
    isCarouselMode = false;
    track.style.display = '';
    track.style.flexWrap = '';
    track.style.transform = '';
    clearInterval(autoTimer);
  }

  function goTo(index, animate) {
    animate = animate !== false;
    current = ((index % total) + total) % total;
    track.style.transition = animate ? 'transform 0.5s cubic-bezier(0.4,0,0.2,1)' : 'none';
    track.style.transform  = 'translateX(-' + (current * 100) + '%)';
    dots.forEach(function (dot, i) {
      dot.classList.toggle('active', i === current);
    });
  }

  function startAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(function () {
      if (isCarouselMode) goTo(current + 1, true);
    }, 4000);
  }

  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      var idx = parseInt(dot.getAttribute('data-index'), 10);
      goTo(idx, true);
      if (isCarouselMode) startAuto();
    });
  });

  function checkMode() {
    if (window.innerWidth < 768) {
      if (!isCarouselMode) { setupCarousel(); startAuto(); }
    } else {
      if (isCarouselMode) { teardownCarousel(); }
    }
  }

  checkMode();
  window.addEventListener('resize', debounce(checkMode, 200));
}

/* ── 9. CONTACT FORM ── */
function initContactForm() {
  var form      = document.getElementById('contact-form');
  var submitBtn = document.getElementById('btn-submit');
  var successEl = document.getElementById('form-success');
  if (!form) return;

  var rules = {
    'full-name':     { required: true, label: 'Full name' },
    'company-name':  { required: true, label: 'Company name' },
    'email':         { required: true, label: 'Email address', email: true },
    'campaign-type': { required: true, label: 'Campaign type' },
    'budget':        { required: true, label: 'Budget' },
    'message':       { required: true, label: 'Message', minLength: 10 }
  };

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function getError(id, value) {
    var rule = rules[id];
    if (!rule) return '';
    if (rule.required && !value.trim()) return rule.label + ' is required.';
    if (rule.email && value && !EMAIL_RE.test(value)) return 'Please enter a valid email address.';
    if (rule.minLength && value.trim().length < rule.minLength) {
      return 'Please enter at least ' + rule.minLength + ' characters.';
    }
    return '';
  }

  function showError(input, msg) {
    input.classList.add('is-error');
    var errEl = input.parentElement.querySelector('.form-error');
    if (errEl) errEl.textContent = msg;
  }

  function clearError(input) {
    input.classList.remove('is-error');
    var errEl = input.parentElement.querySelector('.form-error');
    if (errEl) errEl.textContent = '';
  }

  function validateAll() {
    var valid = true;
    Object.keys(rules).forEach(function (id) {
      var input = form.elements[id] || document.getElementById(id);
      if (!input) return;
      var err = getError(id, input.value);
      if (err) { showError(input, err); valid = false; }
      else { clearError(input); }
    });
    return valid;
  }

  // Live validation on blur
  Object.keys(rules).forEach(function (id) {
    var input = form.elements[id] || document.getElementById(id);
    if (!input) return;
    input.addEventListener('blur', function () {
      var err = getError(id, input.value);
      if (err) showError(input, err);
      else clearError(input);
    });
    input.addEventListener('input', function () {
      if (input.classList.contains('is-error')) {
        var err = getError(id, input.value);
        if (!err) clearError(input);
      }
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validateAll()) return;

    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    var formData = new FormData(form);
    var action = form.getAttribute('action');

    fetch(action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
      .then(function (res) {
        if (res.ok) {
          showSuccess();
        } else {
          return res.json().then(function (data) {
            throw new Error(data.error || 'Submission failed. Please try again.');
          });
        }
      })
      .catch(function (err) {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        // Show a generic error near the button
        var errMsg = err && err.message ? err.message : 'Something went wrong. Please try again.';
        var existingErr = form.querySelector('.form-submit-error');
        if (!existingErr) {
          var errDiv = document.createElement('p');
          errDiv.className = 'form-error form-submit-error';
          errDiv.style.textAlign = 'center';
          errDiv.style.marginTop = '0.5rem';
          errDiv.textContent = errMsg;
          submitBtn.insertAdjacentElement('afterend', errDiv);
        } else {
          existingErr.textContent = errMsg;
        }
      });
  });

  function showSuccess() {
    form.style.display = 'none';
    successEl.hidden = false;
    successEl.focus();
  }
}

/* ── 10. SCROLL REVEAL ── */
function initScrollReveal() {
  var revealEls = document.querySelectorAll('[data-reveal]');
  if (!revealEls.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(function (el) {
    observer.observe(el);
  });
}

/* ── 11. UTILITY: DEBOUNCE ── */
function debounce(fn, delay) {
  var timer;
  return function () {
    clearTimeout(timer);
    var args = arguments;
    var ctx = this;
    timer = setTimeout(function () { fn.apply(ctx, args); }, delay);
  };
}
