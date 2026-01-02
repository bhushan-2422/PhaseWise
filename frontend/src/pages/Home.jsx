import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
const Home = () => {
  const {user, signoutUser} = useUser()

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>ProjectFlow | AI-Powered Project Management</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        /* ===== RESET & BASE STYLES ===== */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    /* Color Palette */\n    --primary-color: #667eea;\n    --primary-dark: #5a67d8;\n    --secondary-color: #764ba2;\n    --accent-color: #f093fb;\n    --success-color: #10b981;\n    --warning-color: #f59e0b;\n    --error-color: #ef4444;\n    --info-color: #3b82f6;\n    \n    /* Background Colors */\n    --dark-bg: #0f172a;\n    --dark-bg-light: #1e293b;\n    --card-bg: rgba(30, 41, 59, 0.7);\n    --card-bg-light: rgba(30, 41, 59, 0.4);\n    \n    /* Text Colors */\n    --text-primary: #ffffff;\n    --text-secondary: #cbd5e1;\n    --text-muted: #94a3b8;\n    \n    /* Border & Shadows */\n    --border-color: rgba(255, 255, 255, 0.1);\n    --border-light: rgba(255, 255, 255, 0.05);\n    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.2);\n    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3);\n    --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.4);\n    --shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.5);\n    \n    /* Gradients */\n    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n    --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);\n    --gradient-success: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);\n    --gradient-warning: linear-gradient(135deg, #fa709a 0%, #fee140 100%);\n    --gradient-light: linear-gradient(135deg, #667eea20 0%, #764ba220 100%);\n    \n    /* Borders */\n    --border-radius-sm: 8px;\n    --border-radius: 12px;\n    --border-radius-lg: 20px;\n    --border-radius-xl: 30px;\n    \n    /* Spacing */\n    --spacing-xs: 4px;\n    --spacing-sm: 8px;\n    --spacing-md: 16px;\n    --spacing-lg: 24px;\n    --spacing-xl: 32px;\n    --spacing-2xl: 48px;\n    --spacing-3xl: 64px;\n    \n    /* Transitions */\n    --transition-fast: 150ms ease;\n    --transition: 300ms ease;\n    --transition-slow: 500ms ease;\n}\n\nbody {\n    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n    background: var(--dark-bg);\n    color: var(--text-primary);\n    line-height: 1.6;\n    overflow-x: hidden;\n    min-height: 100vh;\n}\n\n.container {\n    width: 100%;\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 0 var(--spacing-lg);\n}\n\n/* ===== TYPOGRAPHY ===== */\nh1, h2, h3, h4, h5, h6 {\n    font-family: 'Poppins', sans-serif;\n    font-weight: 700;\n    line-height: 1.2;\n    margin-bottom: var(--spacing-md);\n}\n\nh1 {\n    font-size: 3.5rem;\n}\n\nh2 {\n    font-size: 2.5rem;\n}\n\nh3 {\n    font-size: 1.75rem;\n}\n\nh4 {\n    font-size: 1.5rem;\n}\n\np {\n    margin-bottom: var(--spacing-md);\n    color: var(--text-secondary);\n}\n\n.gradient-text {\n    background: var(--gradient-primary);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n}\n\n.text-center {\n    text-align: center;\n}\n\n/* ===== BUTTONS ===== */\n.btn {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--spacing-sm);\n    padding: var(--spacing-md) var(--spacing-xl);\n    font-family: 'Inter', sans-serif;\n    font-size: 1rem;\n    font-weight: 600;\n    border: none;\n    border-radius: var(--border-radius);\n    cursor: pointer;\n    transition: all var(--transition);\n    text-decoration: none;\n    position: relative;\n    overflow: hidden;\n}\n\n.btn:hover {\n    transform: translateY(-2px);\n}\n\n.btn:active {\n    transform: translateY(0);\n}\n\n.btn-primary {\n    background: var(--gradient-primary);\n    color: white;\n}\n\n.btn-primary:hover {\n    box-shadow: var(--shadow-lg);\n}\n\n.btn-outline {\n    background: transparent;\n    color: var(--text-primary);\n    border: 2px solid var(--border-color);\n}\n\n.btn-outline:hover {\n    background: rgba(255, 255, 255, 0.05);\n    border-color: rgba(255, 255, 255, 0.2);\n}\n\n.btn-text {\n    background: transparent;\n    color: var(--text-secondary);\n    padding: var(--spacing-sm) var(--spacing-md);\n}\n\n.btn-text:hover {\n    color: var(--text-primary);\n    background: rgba(255, 255, 255, 0.05);\n}\n\n.btn-lg {\n    padding: var(--spacing-lg) var(--spacing-2xl);\n    font-size: 1.1rem;\n}\n\n.btn-block {\n    width: 100%;\n}\n\n.btn-icon {\n    padding: var(--spacing-sm);\n    width: 40px;\n    height: 40px;\n}\n\n/* ===== NAVIGATION ===== */\n.navbar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    background: rgba(15, 23, 42, 0.95);\n    backdrop-filter: blur(10px);\n    border-bottom: 1px solid var(--border-color);\n    z-index: 1000;\n}\n\n.nav-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: var(--spacing-lg) 0;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-sm);\n    text-decoration: none;\n    font-size: 1.5rem;\n    font-weight: 700;\n    color: var(--text-primary);\n}\n\n.logo-icon {\n    width: 40px;\n    height: 40px;\n    background: var(--gradient-primary);\n    border-radius: var(--border-radius-sm);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.nav-menu {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-xl);\n}\n\n.nav-link {\n    color: var(--text-secondary);\n    text-decoration: none;\n    font-weight: 500;\n    transition: color var(--transition);\n    position: relative;\n    padding: var(--spacing-sm) 0;\n}\n\n.nav-link:hover {\n    color: var(--text-primary);\n}\n\n.nav-link::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 0;\n    height: 2px;\n    background: var(--gradient-primary);\n    transition: width var(--transition);\n}\n\n.nav-link:hover::after {\n    width: 100%;\n}\n\n.mobile-menu-btn {\n    display: none;\n    background: none;\n    border: none;\n    color: var(--text-primary);\n    font-size: 1.5rem;\n    cursor: pointer;\n    padding: var(--spacing-sm);\n}\n\n/* ===== HERO SECTION ===== */\n.hero {\n    padding: 160px 0 100px;\n    position: relative;\n    overflow: hidden;\n}\n\n.hero::before {\n    content: '';\n    position: absolute;\n    top: -50%;\n    right: -20%;\n    width: 800px;\n    height: 800px;\n    background: var(--gradient-light);\n    border-radius: 50%;\n    filter: blur(100px);\n    opacity: 0.3;\n    z-index: -1;\n}\n\n.hero .container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: var(--spacing-3xl);\n    align-items: center;\n}\n\n.hero-content {\n    animation: fadeInUp 1s ease;\n}\n\n.hero-badge {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--spacing-sm);\n    background: var(--gradient-light);\n    border: 1px solid rgba(102, 126, 234, 0.3);\n    padding: var(--spacing-sm) var(--spacing-lg);\n    border-radius: 50px;\n    margin-bottom: var(--spacing-xl);\n    font-size: 0.9rem;\n    font-weight: 500;\n}\n\n.hero-title {\n    margin-bottom: var(--spacing-lg);\n    animation: fadeInUp 1s ease 0.2s both;\n}\n\n.hero-subtitle {\n    font-size: 1.2rem;\n    margin-bottom: var(--spacing-2xl);\n    max-width: 90%;\n    animation: fadeInUp 1s ease 0.4s both;\n}\n\n.hero-cta {\n    display: flex;\n    gap: var(--spacing-lg);\n    margin-bottom: var(--spacing-3xl);\n    animation: fadeInUp 1s ease 0.6s both;\n}\n\n.hero-stats {\n    display: flex;\n    gap: var(--spacing-2xl);\n    animation: fadeInUp 1s ease 0.8s both;\n}\n\n.stat {\n    text-align: center;\n}\n\n.stat-number {\n    font-size: 2.5rem;\n    font-weight: 800;\n    background: var(--gradient-primary);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    margin-bottom: var(--spacing-xs);\n}\n\n.stat-label {\n    color: var(--text-muted);\n    font-size: 0.9rem;\n}\n\n/* ===== DASHBOARD PREVIEW ===== */\n.hero-visual {\n    position: relative;\n    animation: fadeInUp 1s ease 0.4s both;\n}\n\n.dashboard-preview {\n    background: var(--card-bg);\n    backdrop-filter: blur(10px);\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius-lg);\n    overflow: hidden;\n    box-shadow: var(--shadow-xl);\n    transform: perspective(1000px) rotateY(-10deg);\n    transition: transform var(--transition);\n}\n\n.dashboard-preview:hover {\n    transform: perspective(1000px) rotateY(-5deg);\n}\n\n.preview-header {\n    padding: var(--spacing-lg);\n    background: rgba(0, 0, 0, 0.2);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: 1px solid var(--border-color);\n}\n\n.preview-dots {\n    display: flex;\n    gap: var(--spacing-sm);\n}\n\n.dot {\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n}\n\n.dot.red { background: #ff5f57; }\n.dot.yellow { background: #ffbd2e; }\n.dot.green { background: #28ca42; }\n\n.preview-title {\n    font-weight: 600;\n}\n\n.spin {\n    animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n    from { transform: rotate(0deg); }\n    to { transform: rotate(360deg); }\n}\n\n.preview-content {\n    padding: var(--spacing-xl);\n}\n\n.phase-row {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: var(--spacing-lg);\n    margin-bottom: var(--spacing-sm);\n    background: rgba(255, 255, 255, 0.03);\n    border-radius: var(--border-radius);\n    transition: background var(--transition);\n}\n\n.phase-row:hover {\n    background: rgba(255, 255, 255, 0.05);\n}\n\n.phase-row.completed {\n    background: rgba(16, 185, 129, 0.1);\n}\n\n.phase-row.active {\n    background: rgba(102, 126, 234, 0.1);\n}\n\n.phase-info {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-md);\n    font-weight: 500;\n}\n\n.phase-progress {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-lg);\n}\n\n.progress-bar {\n    width: 100px;\n    height: 6px;\n    background: rgba(255, 255, 255, 0.1);\n    border-radius: 3px;\n    overflow: hidden;\n}\n\n.progress-fill {\n    height: 100%;\n    background: var(--gradient-primary);\n    border-radius: 3px;\n    transition: width var(--transition-slow);\n}\n\n.progress-text {\n    font-size: 0.9rem;\n    color: var(--text-muted);\n    min-width: 35px;\n    text-align: right;\n}\n\n.preview-footer {\n    padding: var(--spacing-lg) var(--spacing-xl);\n    background: rgba(0, 0, 0, 0.2);\n    border-top: 1px solid var(--border-color);\n}\n\n.ai-badge {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--spacing-sm);\n    background: var(--gradient-light);\n    padding: var(--spacing-sm) var(--spacing-lg);\n    border-radius: 50px;\n    font-size: 0.9rem;\n}\n\n/* ===== SECTIONS COMMON ===== */\nsection {\n    padding: var(--spacing-3xl) 0;\n}\n\n.section-header {\n    text-align: center;\n    margin-bottom: var(--spacing-3xl);\n}\n\n.section-subtitle {\n    display: inline-block;\n    background: var(--gradient-primary);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    font-weight: 600;\n    margin-bottom: var(--spacing-md);\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    font-size: 0.9rem;\n}\n\n.section-description {\n    max-width: 600px;\n    margin: 0 auto;\n    font-size: 1.1rem;\n}\n\n/* ===== FEATURES SECTION ===== */\n.features {\n    background: var(--dark-bg-light);\n}\n\n.features-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: var(--spacing-xl);\n}\n\n.feature-card {\n    background: var(--card-bg);\n    backdrop-filter: blur(10px);\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius-lg);\n    padding: var(--spacing-2xl) var(--spacing-xl);\n    text-align: center;\n    transition: all var(--transition);\n}\n\n.feature-card:hover {\n    transform: translateY(-10px);\n    border-color: rgba(102, 126, 234, 0.3);\n    box-shadow: var(--shadow-xl);\n}\n\n.feature-icon {\n    width: 70px;\n    height: 70px;\n    background: var(--gradient-primary);\n    border-radius: var(--border-radius);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto var(--spacing-xl);\n    font-size: 1.8rem;\n}\n\n.feature-card h3 {\n    margin-bottom: var(--spacing-md);\n}\n\n/* ===== HOW IT WORKS ===== */\n.how-it-works {\n    position: relative;\n}\n\n.how-it-works::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: var(--gradient-light);\n    opacity: 0.1;\n    z-index: -1;\n}\n\n.steps-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: var(--spacing-2xl);\n}\n\n.step {\n    text-align: center;\n    padding: var(--spacing-2xl);\n    position: relative;\n}\n\n.step-number {\n    width: 80px;\n    height: 80px;\n    background: var(--gradient-primary);\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.8rem;\n    font-weight: 700;\n    margin: 0 auto var(--spacing-xl);\n    color: white;\n}\n\n.step h3 {\n    margin-bottom: var(--spacing-md);\n}\n\n/* ===== CTA SECTION ===== */\n.cta-section {\n    padding: var(--spacing-3xl) 0;\n    background: var(--gradient-primary);\n    position: relative;\n    overflow: hidden;\n}\n\n.cta-section::before {\n    content: '';\n    position: absolute;\n    top: -50%;\n    left: -20%;\n    width: 800px;\n    height: 800px;\n    background: rgba(255, 255, 255, 0.1);\n    border-radius: 50%;\n}\n\n.cta-card {\n    background: var(--card-bg);\n    backdrop-filter: blur(10px);\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: var(--border-radius-lg);\n    padding: var(--spacing-3xl);\n    text-align: center;\n    position: relative;\n    z-index: 1;\n}\n\n.cta-card h2 {\n    margin-bottom: var(--spacing-lg);\n}\n\n.cta-card p {\n    max-width: 600px;\n    margin: 0 auto var(--spacing-2xl);\n    font-size: 1.2rem;\n}\n\n/* ===== FOOTER ===== */\n.footer {\n    background: rgba(15, 23, 42, 0.95);\n    border-top: 1px solid var(--border-color);\n    padding: var(--spacing-3xl) 0 var(--spacing-xl);\n}\n\n.footer-content {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    gap: var(--spacing-3xl);\n    margin-bottom: var(--spacing-2xl);\n}\n\n.footer-brand .logo {\n    margin-bottom: var(--spacing-lg);\n}\n\n.footer-brand p {\n    max-width: 300px;\n}\n\n.footer-links {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: var(--spacing-2xl);\n}\n\n.footer-column h4 {\n    font-size: 1.1rem;\n    margin-bottom: var(--spacing-lg);\n    font-weight: 600;\n}\n\n.footer-column a {\n    display: block;\n    color: var(--text-secondary);\n    text-decoration: none;\n    margin-bottom: var(--spacing-md);\n    transition: color var(--transition);\n}\n\n.footer-column a:hover {\n    color: var(--text-primary);\n}\n\n.footer-bottom {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: var(--spacing-xl);\n    border-top: 1px solid var(--border-color);\n    color: var(--text-muted);\n    font-size: 0.9rem;\n}\n\n.social-links {\n    display: flex;\n    gap: var(--spacing-lg);\n}\n\n.social-links a {\n    color: var(--text-secondary);\n    font-size: 1.2rem;\n    transition: color var(--transition);\n}\n\n.social-links a:hover {\n    color: var(--text-primary);\n}\n\n/* ===== FORMS ===== */\n.form-group {\n    margin-bottom: var(--spacing-lg);\n}\n\n.form-group label {\n    display: block;\n    margin-bottom: var(--spacing-sm);\n    font-weight: 500;\n    color: var(--text-primary);\n}\n\n.input-group {\n    position: relative;\n}\n\n.input-group .input-icon {\n    position: absolute;\n    left: var(--spacing-md);\n    top: 50%;\n    transform: translateY(-50%);\n    color: var(--text-muted);\n    z-index: 1;\n}\n\n.input-group input,\n.input-group select,\n.input-group textarea {\n    width: 100%;\n    padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 45px;\n    background: rgba(255, 255, 255, 0.05);\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius);\n    color: var(--text-primary);\n    font-family: 'Inter', sans-serif;\n    font-size: 1rem;\n    transition: all var(--transition);\n}\n\n.input-group textarea {\n    min-height: 120px;\n    resize: vertical;\n    padding: var(--spacing-md);\n}\n\n.input-group input:focus,\n.input-group select:focus,\n.input-group textarea:focus {\n    outline: none;\n    border-color: rgba(102, 126, 234, 0.5);\n    background: rgba(255, 255, 255, 0.08);\n}\n\n.password-toggle {\n    position: absolute;\n    right: var(--spacing-md);\n    top: 50%;\n    transform: translateY(-50%);\n    background: none;\n    border: none;\n    color: var(--text-muted);\n    cursor: pointer;\n    padding: var(--spacing-xs);\n}\n\n.form-hint {\n    display: block;\n    margin-top: var(--spacing-xs);\n    font-size: 0.85rem;\n    color: var(--text-muted);\n}\n\n.form-row {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: var(--spacing-lg);\n}\n\n.form-group.full-width {\n    grid-column: 1 / -1;\n}\n\n.form-options {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: var(--spacing-lg);\n}\n\n.checkbox {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-sm);\n    cursor: pointer;\n    color: var(--text-secondary);\n}\n\n.checkbox input {\n    display: none;\n}\n\n.checkmark {\n    width: 20px;\n    height: 20px;\n    border: 2px solid rgba(255, 255, 255, 0.2);\n    border-radius: 4px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: var(--transition);\n}\n\n.checkbox input:checked + .checkmark {\n    background: var(--gradient-primary);\n    border-color: transparent;\n}\n\n.checkbox input:checked + .checkmark::after {\n    content: '✓';\n    color: white;\n    font-size: 0.8rem;\n}\n\n.forgot-password {\n    color: var(--text-muted);\n    text-decoration: none;\n    font-size: 0.9rem;\n    transition: color var(--transition);\n}\n\n.forgot-password:hover {\n    color: var(--text-primary);\n}\n\n.auth-divider {\n    display: flex;\n    align-items: center;\n    margin: var(--spacing-xl) 0;\n    color: var(--text-muted);\n}\n\n.auth-divider::before,\n.auth-divider::after {\n    content: '';\n    flex: 1;\n    height: 1px;\n    background: var(--border-color);\n}\n\n.auth-divider span {\n    padding: 0 var(--spacing-md);\n}\n\n.auth-footer {\n    text-align: center;\n    margin-top: var(--spacing-xl);\n    padding-top: var(--spacing-xl);\n    border-top: 1px solid var(--border-color);\n    color: var(--text-secondary);\n}\n\n.auth-footer a {\n    color: inherit;\n    text-decoration: none;\n    font-weight: 600;\n}\n\n.auth-footer a:hover {\n    text-decoration: underline;\n}\n\n/* ===== USER HOME / DASHBOARD ===== */\n.user-header {\n    background: var(--card-bg);\n    backdrop-filter: blur(10px);\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius-lg);\n    padding: var(--spacing-2xl);\n    margin: 120px 0 var(--spacing-2xl);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: var(--spacing-lg);\n}\n\n.user-info {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-lg);\n}\n\n.user-avatar {\n    width: 80px;\n    height: 80px;\n    background: var(--gradient-primary);\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 2rem;\n}\n\n.user-email {\n    color: var(--text-secondary);\n}\n\n.stats-cards {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: var(--spacing-xl);\n    margin-bottom: var(--spacing-2xl);\n}\n\n.stat-card {\n    background: var(--card-bg);\n    backdrop-filter: blur(10px);\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius-lg);\n    padding: var(--spacing-xl);\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-lg);\n    transition: all var(--transition);\n}\n\n.stat-card:hover {\n    transform: translateY(-5px);\n    border-color: rgba(102, 126, 234, 0.3);\n}\n\n.stat-icon {\n    width: 60px;\n    height: 60px;\n    background: var(--gradient-primary);\n    border-radius: var(--border-radius);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n}\n\n.stat-info h3 {\n    font-size: 2.5rem;\n    font-weight: 800;\n    margin-bottom: var(--spacing-xs);\n}\n\n.stat-info p {\n    color: var(--text-secondary);\n    font-size: 0.9rem;\n    margin: 0;\n}\n\n/* ===== PROJECTS GRID ===== */\n.projects-section {\n    margin-bottom: var(--spacing-3xl);\n}\n\n.section-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: var(--spacing-xl);\n    flex-wrap: wrap;\n    gap: var(--spacing-md);\n}\n\n.view-options {\n    display: flex;\n    gap: var(--spacing-sm);\n    background: rgba(255, 255, 255, 0.05);\n    padding: var(--spacing-xs);\n    border-radius: var(--border-radius);\n}\n\n.view-option {\n    padding: var(--spacing-sm) var(--spacing-lg);\n    border: none;\n    background: transparent;\n    color: var(--text-secondary);\n    border-radius: var(--border-radius-sm);\n    cursor: pointer;\n    font-weight: 500;\n    transition: all var(--transition);\n}\n\n.view-option.active {\n    background: rgba(102, 126, 234, 0.2);\n    color: var(--text-primary);\n}\n\n.projects-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: var(--spacing-xl);\n}\n\n.project-card {\n    background: var(--card-bg);\n    backdrop-filter: blur(10px);\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius-lg);\n    padding: var(--spacing-xl);\n    transition: all var(--transition);\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n}\n\n.project-card:hover {\n    transform: translateY(-5px);\n    border-color: rgba(102, 126, 234, 0.3);\n    box-shadow: var(--shadow-lg);\n}\n\n.project-card::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 4px;\n    height: 100%;\n    background: var(--gradient-primary);\n}\n\n.project-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-bottom: var(--spacing-lg);\n}\n\n.project-header h3 {\n    font-size: 1.3rem;\n    font-weight: 600;\n    margin: 0;\n    flex: 1;\n}\n\n.project-status {\n    font-size: 0.8rem;\n    padding: var(--spacing-xs) var(--spacing-md);\n    border-radius: 50px;\n    font-weight: 500;\n}\n\n.status-active {\n    background: rgba(59, 130, 246, 0.2);\n    color: #3b82f6;\n}\n\n.status-completed {\n    background: rgba(34, 197, 94, 0.2);\n    color: #22c55e;\n}\n\n.project-tech {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-sm);\n    color: var(--text-secondary);\n    font-size: 0.9rem;\n    margin-bottom: var(--spacing-md);\n}\n\n.project-description {\n    font-size: 0.95rem;\n    margin-bottom: var(--spacing-lg);\n    line-height: 1.6;\n}\n\n.project-progress {\n    margin: var(--spacing-xl) 0;\n}\n\n.progress-info {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: var(--spacing-sm);\n    font-size: 0.9rem;\n}\n\n.project-meta {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--spacing-md);\n    font-size: 0.85rem;\n    color: var(--text-muted);\n}\n\n.project-actions {\n    display: flex;\n    gap: var(--spacing-sm);\n    margin-top: var(--spacing-lg);\n    opacity: 0;\n    transition: opacity var(--transition);\n}\n\n.project-card:hover .project-actions {\n    opacity: 1;\n}\n\n.project-actions .btn-text {\n    padding: var(--spacing-xs);\n}\n\n.no-projects {\n    grid-column: 1 / -1;\n    text-align: center;\n    padding: var(--spacing-3xl) var(--spacing-lg);\n    color: var(--text-muted);\n}\n\n.no-projects i {\n    font-size: 3rem;\n    margin-bottom: var(--spacing-lg);\n    opacity: 0.5;\n}\n\n.no-projects h3 {\n    margin-bottom: var(--spacing-sm);\n    color: var(--text-primary);\n}\n\n/* ===== CREATE PROJECT FORM ===== */\n.create-project-header {\n    background: var(--card-bg);\n    backdrop-filter: blur(10px);\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius-lg);\n    padding: var(--spacing-2xl);\n    margin: 120px 0 var(--spacing-2xl);\n    text-align: center;\n}\n\n.create-project-header h1 {\n    margin: var(--spacing-lg) 0 var(--spacing-sm);\n}\n\n.project-form {\n    background: var(--card-bg);\n    backdrop-filter: blur(10px);\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius-lg);\n    padding: var(--spacing-2xl);\n    margin-bottom: var(--spacing-3xl);\n}\n\n.form-section {\n    margin-bottom: var(--spacing-2xl);\n    padding-bottom: var(--spacing-xl);\n    border-bottom: 1px solid var(--border-color);\n}\n\n.form-section:last-child {\n    border-bottom: none;\n    margin-bottom: 0;\n    padding-bottom: 0;\n}\n\n.form-section h3 {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-sm);\n    margin-bottom: var(--spacing-xl);\n    font-size: 1.3rem;\n    font-weight: 600;\n}\n\n.form-actions {\n    display: flex;\n    justify-content: flex-end;\n    gap: var(--spacing-lg);\n    margin-top: var(--spacing-2xl);\n}\n\n/* ===== PROJECT DASHBOARD ===== */\n.dashboard-header {\n    background: var(--card-bg);\n    backdrop-filter: blur(10px);\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius-lg);\n    padding: var(--spacing-2xl);\n    margin: 120px 0 var(--spacing-xl);\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    gap: var(--spacing-lg);\n}\n\n.dashboard-header h1 {\n    font-size: 2rem;\n    margin-bottom: var(--spacing-sm);\n}\n\n.project-meta {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--spacing-lg);\n    margin-top: var(--spacing-md);\n}\n\n.project-meta span {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-sm);\n    color: var(--text-secondary);\n}\n\n.header-actions {\n    display: flex;\n    gap: var(--spacing-md);\n}\n\n.progress-summary {\n    background: var(--card-bg);\n    backdrop-filter: blur(10px);\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius-lg);\n    padding: var(--spacing-2xl);\n    margin-bottom: var(--spacing-2xl);\n}\n\n.progress-bar-container {\n    margin-bottom: var(--spacing-xl);\n}\n\n.progress-info {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: var(--spacing-md);\n    font-size: 1rem;\n}\n\n.progress-stats {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    gap: var(--spacing-lg);\n}\n\n.progress-stat {\n    text-align: center;\n    padding: var(--spacing-lg);\n    background: rgba(255, 255, 255, 0.05);\n    border-radius: var(--border-radius);\n}\n\n.stat-label {\n    display: block;\n    color: var(--text-secondary);\n    font-size: 0.9rem;\n    margin-bottom: var(--spacing-sm);\n}\n\n.stat-value {\n    display: block;\n    font-size: 1.8rem;\n    font-weight: 700;\n}\n\n/* ===== PHASES ===== */\n.phases-container {\n    margin-bottom: var(--spacing-2xl);\n}\n\n.phase-card {\n    background: var(--card-bg);\n    backdrop-filter: blur(10px);\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius-lg);\n    margin-bottom: var(--spacing-lg);\n    overflow: hidden;\n}\n\n.phase-header {\n    padding: var(--spacing-xl);\n    background: rgba(255, 255, 255, 0.05);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    cursor: pointer;\n    transition: background var(--transition);\n}\n\n.phase-header:hover {\n    background: rgba(255, 255, 255, 0.08);\n}\n\n.phase-header.active {\n    background: rgba(102, 126, 234, 0.15);\n}\n\n.phase-title {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-md);\n}\n\n.phase-status {\n    font-size: 0.8rem;\n    padding: var(--spacing-xs) var(--spacing-md);\n    border-radius: 50px;\n    font-weight: 500;\n}\n\n.status-not-started {\n    background: rgba(239, 68, 68, 0.2);\n    color: #ef4444;\n}\n\n.status-in-progress {\n    background: rgba(245, 158, 11, 0.2);\n    color: #f59e0b;\n}\n\n.status-completed {\n    background: rgba(34, 197, 94, 0.2);\n    color: #22c55e;\n}\n\n.phase-progress {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-md);\n}\n\n.phase-body {\n    padding: var(--spacing-xl);\n    background: rgba(0, 0, 0, 0.2);\n    border-top: 1px solid var(--border-color);\n}\n\n.phase-description {\n    margin-bottom: var(--spacing-xl);\n}\n\n.tasks-list {\n    list-style: none;\n}\n\n.task-item {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-md);\n    padding: var(--spacing-lg);\n    background: rgba(255, 255, 255, 0.03);\n    border-radius: var(--border-radius);\n    margin-bottom: var(--spacing-md);\n    transition: background var(--transition);\n}\n\n.task-item:hover {\n    background: rgba(255, 255, 255, 0.05);\n}\n\n.task-item.completed {\n    opacity: 0.7;\n}\n\n.task-checkbox {\n    width: 24px;\n    height: 24px;\n    border: 2px solid rgba(255, 255, 255, 0.2);\n    border-radius: 6px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    transition: all var(--transition);\n}\n\n.task-checkbox.checked {\n    background: var(--gradient-primary);\n    border-color: transparent;\n}\n\n.task-checkbox.checked i {\n    color: white;\n    font-size: 0.8rem;\n}\n\n.task-content {\n    flex: 1;\n}\n\n.task-title {\n    font-weight: 500;\n    margin-bottom: var(--spacing-xs);\n}\n\n.task-description {\n    color: var(--text-secondary);\n    font-size: 0.9rem;\n    line-height: 1.5;\n}\n\n.task-meta {\n    display: flex;\n    gap: var(--spacing-md);\n    margin-top: var(--spacing-sm);\n    font-size: 0.85rem;\n}\n\n.task-priority {\n    padding: 2px 10px;\n    border-radius: 50px;\n    font-weight: 500;\n}\n\n.priority-low {\n    background: rgba(34, 197, 94, 0.2);\n    color: #22c55e;\n}\n\n.priority-medium {\n    background: rgba(245, 158, 11, 0.2);\n    color: #f59e0b;\n}\n\n.priority-high {\n    background: rgba(239, 68, 68, 0.2);\n    color: #ef4444;\n}\n\n.task-actions {\n    display: flex;\n    gap: var(--spacing-sm);\n    opacity: 0;\n    transition: opacity var(--transition);\n}\n\n.task-item:hover .task-actions {\n    opacity: 1;\n}\n\n.task-actions button {\n    background: none;\n    border: none;\n    color: var(--text-muted);\n    cursor: pointer;\n    padding: var(--spacing-xs);\n    border-radius: 4px;\n    transition: all var(--transition);\n}\n\n.task-actions button:hover {\n    background: rgba(255, 255, 255, 0.1);\n    color: var(--text-primary);\n}\n\n.no-tasks {\n    text-align: center;\n    padding: var(--spacing-2xl);\n    color: var(--text-muted);\n    font-style: italic;\n}\n\n/* ===== PROJECT NOTES ===== */\n.project-notes {\n    background: var(--card-bg);\n    backdrop-filter: blur(10px);\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius-lg);\n    padding: var(--spacing-2xl);\n    margin-bottom: var(--spacing-3xl);\n}\n\n.project-notes h3 {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-sm);\n    margin-bottom: var(--spacing-xl);\n    font-size: 1.3rem;\n    font-weight: 600;\n}\n\n.notes-actions {\n    display: flex;\n    justify-content: flex-end;\n    margin-top: var(--spacing-lg);\n}\n\n/* ===== MODALS ===== */\n.modal {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.8);\n    z-index: 2000;\n    align-items: center;\n    justify-content: center;\n    backdrop-filter: blur(5px);\n}\n\n.modal.active {\n    display: flex;\n}\n\n.modal-content {\n    background: var(--card-bg);\n    backdrop-filter: blur(10px);\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius-lg);\n    width: 90%;\n    max-width: 500px;\n    max-height: 90vh;\n    overflow-y: auto;\n    animation: slideUp 0.3s ease;\n}\n\n@keyframes slideUp {\n    from {\n        transform: translateY(50px);\n        opacity: 0;\n    }\n    to {\n        transform: translateY(0);\n        opacity: 1;\n    }\n}\n\n.modal-header {\n    padding: var(--spacing-xl);\n    border-bottom: 1px solid var(--border-color);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.close-modal {\n    background: none;\n    border: none;\n    font-size: 1.8rem;\n    cursor: pointer;\n    color: var(--text-muted);\n    line-height: 1;\n    padding: 0;\n    width: 30px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    transition: all var(--transition);\n}\n\n.close-modal:hover {\n    background: rgba(255, 255, 255, 0.1);\n    color: var(--text-primary);\n}\n\n.modal-actions {\n    display: flex;\n    justify-content: flex-end;\n    gap: var(--spacing-md);\n    margin-top: var(--spacing-xl);\n}\n\n/* ===== LOADING OVERLAY ===== */\n.loading-overlay {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(15, 23, 42, 0.95);\n    z-index: 3000;\n    align-items: center;\n    justify-content: center;\n    backdrop-filter: blur(10px);\n}\n\n.loading-overlay.active {\n    display: flex;\n}\n\n.loading-content {\n    background: var(--card-bg);\n    backdrop-filter: blur(10px);\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius-lg);\n    padding: var(--spacing-2xl);\n    text-align: center;\n    max-width: 500px;\n}\n\n.loading-spinner {\n    width: 80px;\n    height: 80px;\n    border: 3px solid rgba(255, 255, 255, 0.1);\n    border-top: 3px solid var(--gradient-primary);\n    border-radius: 50%;\n    animation: spin 1s linear infinite;\n    margin: 0 auto var(--spacing-xl);\n}\n\n.loading-content h3 {\n    margin-bottom: var(--spacing-md);\n}\n\n.loading-dots {\n    display: flex;\n    justify-content: center;\n    gap: var(--spacing-sm);\n    margin-top: var(--spacing-xl);\n}\n\n.loading-dots span {\n    width: 12px;\n    height: 12px;\n    background: var(--gradient-primary);\n    border-radius: 50%;\n    animation: bounce 1.4s infinite ease-in-out;\n}\n\n.loading-dots span:nth-child(1) {\n    animation-delay: -0.32s;\n}\n\n.loading-dots span:nth-child(2) {\n    animation-delay: -0.16s;\n}\n\n@keyframes bounce {\n    0%, 80%, 100% {\n        transform: scale(0);\n    }\n    40% {\n        transform: scale(1);\n    }\n}\n\n/* ===== ANIMATIONS ===== */\n@keyframes fadeInUp {\n    from {\n        opacity: 0;\n        transform: translateY(30px);\n    }\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@keyframes pulse {\n    0% {\n        box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.4);\n    }\n    70% {\n        box-shadow: 0 0 0 10px rgba(102, 126, 234, 0);\n    }\n    100% {\n        box-shadow: 0 0 0 0 rgba(102, 126, 234, 0);\n    }\n}\n\n.animate-visible {\n    animation: fadeInUp 0.6s ease forwards;\n}\n\n.pulse {\n    animation: pulse 2s infinite;\n}\n\n/* ===== NOTIFICATIONS ===== */\n.notification {\n    position: fixed;\n    top: 20px;\n    right: 20px;\n    background: var(--card-bg);\n    backdrop-filter: blur(10px);\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius);\n    padding: var(--spacing-lg) var(--spacing-xl);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    min-width: 300px;\n    max-width: 400px;\n    z-index: 9999;\n    transform: translateX(400px);\n    transition: transform var(--transition);\n    box-shadow: var(--shadow-xl);\n}\n\n.notification.show {\n    transform: translateX(0);\n}\n\n.notification-content {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-md);\n    flex: 1;\n}\n\n.notification-success {\n    border-left: 4px solid var(--success-color);\n}\n\n.notification-error {\n    border-left: 4px solid var(--error-color);\n}\n\n.notification-warning {\n    border-left: 4px solid var(--warning-color);\n}\n\n.notification-info {\n    border-left: 4px solid var(--info-color);\n}\n\n.notification-close {\n    background: none;\n    border: none;\n    color: var(--text-muted);\n    font-size: 1.2rem;\n    cursor: pointer;\n    padding: 0;\n    width: 24px;\n    height: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    transition: all var(--transition-fast);\n}\n\n.notification-close:hover {\n    background: rgba(255, 255, 255, 0.1);\n    color: var(--text-primary);\n}\n\n.notification i {\n    font-size: 1.2rem;\n}\n\n.notification-success i { color: var(--success-color); }\n.notification-error i { color: var(--error-color); }\n.notification-warning i { color: var(--warning-color); }\n.notification-info i { color: var(--info-color); }\n\n/* ===== RESPONSIVE DESIGN ===== */\n@media (max-width: 1200px) {\n    .container {\n        max-width: 100%;\n    }\n}\n\n@media (max-width: 992px) {\n    .hero .container {\n        grid-template-columns: 1fr;\n        text-align: center;\n        gap: var(--spacing-2xl);\n    }\n    \n    .hero-title {\n        font-size: 2.8rem;\n    }\n    \n    .hero-subtitle {\n        max-width: 100%;\n    }\n    \n    .hero-cta {\n        justify-content: center;\n    }\n    \n    .dashboard-preview {\n        max-width: 500px;\n        margin: 0 auto;\n    }\n    \n    .footer-content {\n        grid-template-columns: 1fr;\n        gap: var(--spacing-2xl);\n    }\n}\n\n@media (max-width: 768px) {\n    .nav-menu {\n        display: none;\n        flex-direction: column;\n        position: absolute;\n        top: 100%;\n        left: 0;\n        width: 100%;\n        background: rgba(15, 23, 42, 0.98);\n        backdrop-filter: blur(10px);\n        padding: var(--spacing-lg);\n        gap: var(--spacing-md);\n        border-bottom: 1px solid var(--border-color);\n    }\n    \n    .nav-menu.active {\n        display: flex;\n    }\n    \n    .mobile-menu-btn {\n        display: block;\n    }\n    \n    .hero {\n        padding: 140px 0 80px;\n    }\n    \n    .hero-title {\n        font-size: 2.2rem;\n    }\n    \n    .hero-subtitle {\n        font-size: 1.1rem;\n    }\n    \n    .hero-cta {\n        flex-direction: column;\n        align-items: center;\n    }\n    \n    .btn {\n        width: 100%;\n        max-width: 300px;\n    }\n    \n    .hero-stats {\n        flex-direction: column;\n        gap: var(--spacing-xl);\n    }\n    \n    .section-title {\n        font-size: 2rem;\n    }\n    \n    .features-grid {\n        grid-template-columns: 1fr;\n    }\n    \n    .steps-container {\n        grid-template-columns: 1fr;\n    }\n    \n    .footer-links {\n        grid-template-columns: 1fr;\n        gap: var(--spacing-xl);\n    }\n    \n    .user-header {\n        flex-direction: column;\n        align-items: flex-start;\n    }\n    \n    .dashboard-header {\n        flex-direction: column;\n        align-items: flex-start;\n    }\n    \n    .header-actions {\n        width: 100%;\n        justify-content: flex-start;\n    }\n    \n    .projects-grid {\n        grid-template-columns: 1fr;\n    }\n    \n    .form-row {\n        grid-template-columns: 1fr;\n    }\n    \n    .modal-content {\n        width: 95%;\n        margin: var(--spacing-md);\n    }\n}\n\n@media (max-width: 576px) {\n    h1 {\n        font-size: 2.5rem;\n    }\n    \n    h2 {\n        font-size: 2rem;\n    }\n    \n    .hero-badge {\n        font-size: 0.8rem;\n    }\n    \n    .stat-number {\n        font-size: 2rem;\n    }\n    \n    .create-project-header,\n    .dashboard-header,\n    .progress-summary,\n    .project-notes {\n        padding: var(--spacing-xl);\n    }\n    \n    .notification {\n        min-width: auto;\n        max-width: calc(100vw - 40px);\n        left: 20px;\n        right: 20px;\n    }\n}\n\n/* ===== UTILITY CLASSES ===== */\n.mb-1 { margin-bottom: var(--spacing-xs); }\n.mb-2 { margin-bottom: var(--spacing-sm); }\n.mb-3 { margin-bottom: var(--spacing-md); }\n.mb-4 { margin-bottom: var(--spacing-lg); }\n.mb-5 { margin-bottom: var(--spacing-xl); }\n\n.mt-1 { margin-top: var(--spacing-xs); }\n.mt-2 { margin-top: var(--spacing-sm); }\n.mt-3 { margin-top: var(--spacing-md); }\n.mt-4 { margin-top: var(--spacing-lg); }\n.mt-5 { margin-top: var(--spacing-xl); }\n\n.text-sm { font-size: 0.875rem; }\n.text-md { font-size: 1rem; }\n.text-lg { font-size: 1.125rem; }\n.text-xl { font-size: 1.25rem; }\n\n.font-light { font-weight: 300; }\n.font-normal { font-weight: 400; }\n.font-medium { font-weight: 500; }\n.font-semibold { font-weight: 600; }\n.font-bold { font-weight: 700; }\n\n.opacity-50 { opacity: 0.5; }\n.opacity-75 { opacity: 0.75; }\n.opacity-90 { opacity: 0.9; }\n\n.hidden { display: none; }\n.block { display: block; }\n.flex { display: flex; }\n.grid { display: grid; }\n\n.items-center { align-items: center; }\n.justify-center { justify-content: center; }\n.justify-between { justify-content: space-between; }\n\n.gap-1 { gap: var(--spacing-xs); }\n.gap-2 { gap: var(--spacing-sm); }\n.gap-3 { gap: var(--spacing-md); }\n.gap-4 { gap: var(--spacing-lg); }\n.gap-5 { gap: var(--spacing-xl); }\n\n.w-full { width: 100%; }\n.h-full { height: 100%; }\n\n.cursor-pointer { cursor: pointer; }\n.pointer-events-none { pointer-events: none; }\n\n.relative { position: relative; }\n.absolute { position: absolute; }\n.fixed { position: fixed; }\n.sticky { position: sticky; }\n\n.z-10 { z-index: 10; }\n.z-20 { z-index: 20; }\n.z-30 { z-index: 30; }\n.z-40 { z-index: 40; }\n.z-50 { z-index: 50; }\n    ",
        }}
      />
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">
            <div className="logo-icon">
              <i className="fas fa-project-diagram" />
            </div>
            <span className="logo-text">
              Project<span className="gradient-text">Flow</span>
            </span>
          </div>
          <div className="nav-menu">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#how-it-works" className="nav-link">
              How It Works
            </a>
            <a href="#testimonials" className="nav-link">
              Testimonials
            </a>

            {!user && (
              <>
                <Link to="/signin" className="btn btn-outline" id="loginBtn">
                  Login
                </Link>
                <br />
                <Link to="/signup" className="btn btn-primary" id="signupBtn">
                  Signup
                </Link>
              </>
            )}

            {user && (
              <>
                <Link to="/userhome">Go to Dashboard</Link>
                <br />
                <button onClick={signoutUser}>Logout</button>
              </>
            )}
          </div>
          <button className="mobile-menu-btn">
            <i className="fas fa-bars" />
          </button>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <i className="fas fa-brain" />
              <span>AI-Powered Project Planning</span>
            </div>
            <h1 className="hero-title">
              Build <span className="gradient-text">Smarter</span> Projects with
              AI
            </h1>
            <p className="hero-subtitle">
              Transform your ideas into structured project plans. Let AI
              generate your roadmap, then track and complete tasks phase by
              phase with intelligent guidance.
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary btn-lg" id="getStartedBtn">
                <i className="fas fa-rocket" />
                Get Started Free
              </button>
              <button className="btn btn-outline btn-lg" id="demoBtn">
                <i className="fas fa-play-circle" />
                Watch Demo
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Projects Planned</div>
              </div>
              <div className="stat">
                <div className="stat-number">95%</div>
                <div className="stat-label">Completion Rate</div>
              </div>
              <div className="stat">
                <div className="stat-number">4.9★</div>
                <div className="stat-label">User Rating</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="dashboard-preview">
              <div className="preview-header">
                <div className="preview-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span className="preview-title">Project Dashboard</span>
                <i className="fas fa-sync-alt spin" />
              </div>
              <div className="preview-content">
                <div className="phase-row completed">
                  <div className="phase-info">
                    <i className="fas fa-check-circle" />
                    <span>Planning Phase</span>
                  </div>
                  <div className="phase-progress">
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <span className="progress-text">100%</span>
                  </div>
                </div>
                <div className="phase-row active">
                  <div className="phase-info">
                    <i className="fas fa-spinner fa-spin" />
                    <span>Backend Setup</span>
                  </div>
                  <div className="phase-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: "75%" }} />
                    </div>
                    <span className="progress-text">75%</span>
                  </div>
                </div>
                <div className="phase-row">
                  <div className="phase-info">
                    <i className="far fa-circle" />
                    <span>Frontend Development</span>
                  </div>
                  <div className="phase-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: "30%" }} />
                    </div>
                    <span className="progress-text">30%</span>
                  </div>
                </div>
                <div className="phase-row">
                  <div className="phase-info">
                    <i className="far fa-circle" />
                    <span>Testing &amp; Deployment</span>
                  </div>
                  <div className="phase-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: "0%" }} />
                    </div>
                    <span className="progress-text">0%</span>
                  </div>
                </div>
              </div>
              <div className="preview-footer">
                <div className="ai-badge">
                  <i className="fas fa-brain" />
                  <span>AI-Generated Plan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Why Choose Us</span>
            <h2 className="section-title">
              Smart Features for{" "}
              <span className="gradient-text">Smart Projects</span>
            </h2>
            <p className="section-description">
              Everything you need to plan, track, and complete projects
              efficiently
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-brain" />
              </div>
              <h3>AI-Powered Planning</h3>
              <p>
                Gemini AI analyzes your requirements and generates structured
                plans with actionable tasks.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-tasks" />
              </div>
              <h3>Phase-Based Tracking</h3>
              <p>
                Work systematically through phases, completing each before
                moving to the next.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-bolt" />
              </div>
              <h3>Real-Time Updates</h3>
              <p>
                Firebase-powered real-time sync ensures your progress is always
                current.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-chart-line" />
              </div>
              <h3>Progress Analytics</h3>
              <p>
                Visual tracking with detailed insights into your project's
                health.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Simple Process</span>
            <h2 className="section-title">
              How <span className="gradient-text">ProjectFlow</span> Works
            </h2>
            <p className="section-description">
              Four simple steps from idea to completion
            </p>
          </div>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">01</div>
              <h3>Describe Your Project</h3>
              <p>
                Tell us what you want to build - tech stack, features, and
                timeline.
              </p>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <h3>AI Generates Plan</h3>
              <p>
                Our AI creates a structured 4-5 phase plan with specific tasks.
              </p>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <h3>Work Phase by Phase</h3>
              <p>
                Complete tasks in order, track progress, and stay organized.
              </p>
            </div>
            <div className="step">
              <div className="step-number">04</div>
              <h3>Complete &amp; Learn</h3>
              <p>Finish successfully and develop project management skills.</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to Build Your Next Project?</h2>
            <p>
              Join thousands of developers who are already building smarter with
              AI-powered planning
            </p>
            <button className="btn btn-primary btn-lg" id="ctaSignup">
              <i className="fas fa-magic" />
              Start Free Trial
            </button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <div className="logo-icon">
                  <i className="fas fa-project-diagram" />
                </div>
                <span className="logo-text">
                  Project<span className="gradient-text">Flow</span>
                </span>
              </div>
              <p>AI-powered project management for developers and students</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">API</a>
                <a href="#">Documentation</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
                <a href="#">Contact</a>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 ProjectFlow. All rights reserved.</p>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-github" />
              </a>
              <a href="#">
                <i className="fab fa-discord" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
