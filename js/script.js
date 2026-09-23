:root {
  --black: #080808;
  --black-2: #111111;
  --panel: #151515;
  --gold: #f5c542;
  --gold-bright: #ffd75a;
  --white: #f7f7f7;
  --muted: #bdbdbd;
  --border: rgba(245, 197, 66, .28);
  --max: 1450px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--black);
  color: var(--white);
  font-family: Inter, Arial, Helvetica, sans-serif;
  line-height: 1.5;
}

a {
  color: inherit;
  text-decoration: none;
}

.site-header {
  min-height: 74px;
  padding: 0 4%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  background: rgba(8, 8, 8, .97);
  border-bottom: 1px solid var(--gold);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: max-content;
}

.brand-shield {
  width: 44px;
  height: 50px;
  display: grid;
  place-items: center;
  border: 2px solid var(--gold);
  clip-path: polygon(50% 0, 100% 14%, 91% 78%, 50% 100%, 9% 78%, 0 14%);
  color: var(--gold);
  font-size: 21px;
}

.brand-text strong {
  display: block;
  font-size: 25px;
  line-height: 1;
  letter-spacing: 1px;
}

.brand-text em {
  color: var(--gold);
  font-style: normal;
}

.brand-text small {
  display: block;
  color: #ddd;
  font-size: 8px;
  letter-spacing: 2.2px;
  margin-top: 4px;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 27px;
}

.main-nav a {
  position: relative;
  padding: 28px 0;
  color: #ddd;
  font-size: 15px;
  transition: color .2s ease;
}

.main-nav a:hover,
.main-nav a.active {
  color: var(--gold);
}

.main-nav a.active::after {
  content: "";
  position: absolute;
  bottom: 14px;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gold);
}

.main-nav .login-button {
  border: 1px solid var(--gold);
  border-radius: 10px;
  padding: 11px 18px;
  color: var(--gold);
}

.main-nav .login-button:hover {
  background: var(--gold);
  color: #111;
}

.main-nav .login-button.active::after {
  display: none;
}

.menu-toggle {
  display: none;
  background: none;
  border: 0;
  color: var(--gold);
  font-size: 27px;
  cursor: pointer;
}

.hero {
  min-height: 410px;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 75% 40%, rgba(245, 197, 66, .17), transparent 34%),
    linear-gradient(110deg, #090909 0%, #101010 45%, #242018 100%);
  border-bottom: 1px solid var(--gold);
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 0 55%, rgba(245, 197, 66, .08) 55% 56%, transparent 56%);
}

.hero-decoration-left {
  position: absolute;
  left: -45px;
  top: -45px;
  width: 130px;
  height: 130px;
  transform: rotate(45deg);
  border: 25px solid var(--gold);
  opacity: .95;
}

.hero-content {
  width: min(var(--max), 92%);
  margin: auto;
  min-height: 410px;
  display: flex;
  align-items: center;
  gap: 60px;
  position: relative;
  z-index: 1;
}

.hero-emblem {
  width: 270px;
  text-align: center;
  flex: 0 0 270px;
}

.emblem-shield {
  width: 170px;
  height: 205px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  border: 4px solid var(--white);
  clip-path: polygon(50% 0, 100% 12%, 90% 80%, 50% 100%, 10% 80%, 0 12%);
  background: rgba(0, 0, 0, .42);
}

.torch {
  color: var(--gold);
  font-size: 48px;
  transform: rotate(180deg);
}

.emblem-text {
  font-size: 29px;
  font-weight: 900;
  letter-spacing: 5px;
}

.laurel {
  color: var(--gold);
  font-size: 24px;
  margin-top: -18px;
}

.hero-copy {
  max-width: 850px;
}

.eyebrow {
  color: var(--white);
  font-size: 15px;
  letter-spacing: 6px;
  font-weight: 600;
}

.hero h1 {
  margin: 7px 0 4px;
  font-family: Georgia, "Times New Roman", serif;
  text-transform: uppercase;
  font-size: clamp(42px, 6vw, 76px);
  line-height: .98;
  letter-spacing: 1px;
}

.hero h1 span {
  color: var(--gold);
}

.pillars-line {
  color: #ddd;
  letter-spacing: 4px;
  font-size: 14px;
  margin: 15px 0 25px;
}

.pillars-line b {
  color: var(--gold);
  margin: 0 7px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  min-width: 170px;
  padding: 12px 22px;
  border-radius: 10px;
  font-weight: 800;
  transition: transform .2s ease, background .2s ease;
}

.button:hover {
  transform: translateY(-2px);
}

.button-gold {
  background: var(--gold);
  color: #101010;
}

.button-gold:hover {
  background: var(--gold-bright);
}

.button-outline {
  border: 2px solid var(--gold);
  color: var(--gold);
}

.button-outline:hover {
  background: rgba(245, 197, 66, .1);
}

.section {
  width: min(var(--max), 92%);
  margin: auto;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1.7fr .9fr;
  gap: 18px;
  padding-top: 22px;
  padding-bottom: 22px;
}

.panel {
  background: linear-gradient(145deg, #151515, #101010);
  border: 1px solid #2e2e2e;
  border-radius: 12px;
  overflow: hidden;
}

.panel-heading {
  padding: 17px 20px;
  border-bottom: 1px solid #292929;
}

.panel-heading-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.panel-heading h2 {
  font-size: 20px;
}

.panel-heading a {
  color: var(--gold);
  font-size: 13px;
  font-weight: 700;
}

.announcement {
  display: flex;
  gap: 13px;
  padding: 15px 20px;
  border-bottom: 1px solid #292929;
}

.announcement:last-child {
  border-bottom: 0;
}

.announcement-icon {
  flex: 0 0 43px;
  width: 43px;
  height: 43px;
  border: 1px solid #555;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: var(--gold);
  font-weight: 900;
  font-size: 20px;
}

.announcement h3,
.event-info h3 {
  font-size: 15px;
  color: var(--gold);
  margin-bottom: 2px;
}

.announcement p,
.event-info p {
  color: #d0d0d0;
  font-size: 12px;
}

.announcement time {
  color: #8f8f8f;
  font-size: 10px;
}

.event-cards {
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.event-card {
  border: 1px solid #3a3a3a;
  border-radius: 10px;
  overflow: hidden;
  background: #0e0e0e;
}

.event-date {
  min-height: 70px;
  display: grid;
  place-items: center;
  align-content: center;
  background: #050505;
  border-bottom: 1px solid #333;
}

.event-date strong {
  color: var(--gold);
  font-size: 25px;
}

.event-date span {
  color: #999;
  font-size: 9px;
  letter-spacing: 2px;
}

.event-info {
  padding: 13px;
}

.event-info a {
  display: block;
  border: 1px solid var(--gold);
  border-radius: 7px;
  text-align: center;
  color: var(--gold);
  padding: 7px;
  margin-top: 13px;
  font-size: 12px;
  font-weight: 700;
}

.event-info a:hover {
  background: var(--gold);
  color: #111;
}

.quick-links a {
  margin: 0 12px 10px;
  padding: 11px 13px;
  display: grid;
  grid-template-columns: 25px 1fr 15px;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--gold);
  border-radius: 8px;
  color: #eee;
  font-size: 13px;
}

.quick-links a:first-of-type {
  margin-top: 14px;
}

.quick-links a:hover {
  background: rgba(245, 197, 66, .1);
  color: var(--gold);
}

.quick-links b {
  color: var(--gold);
}

.pillars {
  padding: 40px 0 50px;
  position: relative;
}

.pillars::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
}

.section-heading {
  text-align: center;
  max-width: 750px;
  margin: auto;
}

.section-heading .eyebrow {
  color: var(--gold);
  font-size: 11px;
  letter-spacing: 4px;
}

.section-heading h2 {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 32px;
  margin: 3px 0;
}

.section-heading > p:last-child {
  color: #aaa;
  font-size: 13px;
}

.pillar-grid {
  margin-top: 35px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px;
}

.pillar {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.pillar-icon {
  flex: 0 0 62px;
  width: 62px;
  height: 62px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--gold);
  color: #111;
  font-size: 25px;
  font-weight: 900;
}

.pillar h3 {
  font-size: 18px;
  margin-bottom: 5px;
}

.pillar p {
  color: #aaa;
  font-size: 13px;
}

.site-footer {
  border-top: 1px solid var(--gold);
  background: #050505;
}

.footer-main {
  width: min(var(--max), 92%);
  min-height: 115px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1.4fr .5fr 1fr;
  align-items: center;
  gap: 25px;
}

.footer-main > div:first-child strong,
.footer-main > div:first-child span {
  display: block;
}

.footer-main > div:first-child strong {
  font-size: 15px;
}

.footer-main > div:first-child span {
  color: #bbb;
  font-size: 13px;
}

.quote {
  color: #aaa;
  font-family: Georgia, "Times New Roman", serif;
  font-style: italic;
  text-align: center;
  font-size: 13px;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.footer-links a {
  font-size: 25px;
}

.footer-links a:hover {
  color: var(--gold);
}

.school-mark {
  text-align: right;
}

.school-mark strong {
  display: block;
  color: var(--gold);
  font-size: 22px;
  letter-spacing: 2px;
}

.school-mark span {
  font-size: 10px;
  letter-spacing: 3px;
  color: #ddd;
}

.footer-bottom {
  border-top: 1px solid #222;
  padding: 11px 4%;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  color: #777;
  font-size: 10px;
}

.footer-bottom a:hover {
  color: var(--gold);
}

@media (max-width: 1100px) {
  .main-nav {
    gap: 15px;
  }

  .dashboard-grid {
    grid-template-columns: 1fr 1fr;
  }

  .quick-links {
    grid-column: 1 / -1;
  }

  .quick-links a {
    display: inline-grid;
    width: calc(20% - 15px);
    margin: 10px 5px;
  }

  .quick-links .panel-heading {
    display: none;
  }

  .footer-main {
    grid-template-columns: 1fr 1fr;
    padding: 25px 0;
  }

  .school-mark {
    text-align: left;
  }
}

@media (max-width: 820px) {
  .site-header {
    min-height: 65px;
  }

  .menu-toggle {
    display: block;
  }

  .main-nav {
    display: none;
    position: absolute;
    top: 65px;
    left: 0;
    right: 0;
    padding: 10px 5%;
    flex-direction: column;
    align-items: stretch;
    background: #090909;
    border-bottom: 1px solid var(--gold);
  }

  .main-nav.open {
    display: flex;
  }

  .main-nav a,
  .main-nav .login-button {
    padding: 13px;
  }

  .main-nav a.active::after {
    display: none;
  }

  .hero-content {
    padding: 55px 0;
    flex-direction: column;
    text-align: center;
    gap: 25px;
  }

  .hero-emblem {
    flex-basis: auto;
  }

  .hero h1 {
    font-size: clamp(38px, 11vw, 65px);
  }

  .hero-actions {
    justify-content: center;
  }

  .dashboard-grid {
    grid-template-columns: 1fr;
  }

  .quick-links {
    grid-column: auto;
  }

  .quick-links a {
    width: auto;
    display: grid;
    margin: 10px 12px;
  }

  .quick-links .panel-heading {
    display: block;
  }

  .event-cards {
    grid-template-columns: 1fr;
  }

  .pillar-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .brand-text strong {
    font-size: 20px;
  }

  .brand-text small {
    font-size: 6px;
  }

  .brand-shield {
    width: 37px;
    height: 43px;
  }

  .hero-emblem {
    transform: scale(.82);
    margin-bottom: -25px;
  }

  .eyebrow {
    letter-spacing: 3px;
  }

  .pillars-line {
    font-size: 10px;
    letter-spacing: 2px;
  }

  .pillar-grid {
    grid-template-columns: 1fr;
  }

  .footer-main {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .school-mark {
    text-align: center;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
