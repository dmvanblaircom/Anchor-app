# Anchor — Be the Calm in the Storm

Your weekly companion for supporting Laura through her MCDA twin pregnancy.
Built for David. Not for Laura — she has the babies covered.

---

## Install on iPhone

**Option A — Direct file (simplest):**
1. AirDrop or email `index.html` to your iPhone
2. Open it in **Safari** (not Chrome)
3. Tap the Share icon → **Add to Home Screen**
4. Name it **Anchor** → tap Add

**Option B — Local server (full PWA, offline caching):**
1. On your Mac, open Terminal in the unzipped folder
2. Run: `python3 -m http.server 8080`
3. On your iPhone (same WiFi), open Safari → `http://[your Mac's IP]:8080`
4. Share → Add to Home Screen

Option B enables full offline support and the service worker cache. Option A works fine for daily use.

---

## What's in the zip

| File | Purpose |
|------|---------|
| `index.html` | The entire app — all data, all components, self-contained |
| `manifest.json` | PWA metadata (name, icons, theme) |
| `sw.js` | Service worker for offline caching |
| `icon-192.png` | Home screen icon |
| `icon-512.png` | Splash screen icon |
| `README.md` | This file |

---

## Tabs

**Brief** — Your weekly mission. Open this every week. Her emotional reality first, then baby snapshot, then your four-dimension mission, letter prompt, look ahead 2–4 weeks, and Fill Your Cup.

**Her Week** — Deeper reference when you want it: baby development, Laura's body, nutrition, MCDA monitoring logs, OB question templates, full Twin Pregnancy Guide accordion.

**Tasks** — 55+ pre-populated tasks organized by category and target week. Filters: Now · All · Medical · Nursery · Home · Financial · Postpartum · For Laura. Add custom tasks. Track progress.

**Visits** — Appointment tracker with MCDA measurement fields: Baby A/B weight, discordance %, cervical length. Tap-to-add MCDA question templates.

**Report** — Generates a plain-text OB symptom report from logged entries. Copy or share directly to your care team.

---

## The Four Dimensions

Every week's Brief gives you one specific action in each:

- 🧠 **Emotional** — What she needs to feel from you this week
- 🙏 **Spiritual** — How to carry this together in faith
- 💑 **Relational** — How to nurture the marriage in this season
- 💪 **Physical** — Practical things that serve her body

---

## The Letter

Each week surfaces a suggested opening line for a handwritten letter. Write it on paper. Deliver it that week. The app never stores the letter — it's between you and her.

---

## MCDA Configuration

Pre-configured for Laura's confirmed MCDA (mono-chorionic, di-amniotic) identical twin pregnancy:

- Biweekly growth scan tracking from week 16
- TTTS watch window alert active weeks 16–26
- Baby A and Baby B movement logging (separate)
- TTTS warning sign log with OB call prompt
- Discordance % tracking at each appointment
- Cervical length field on every visit

**Due date:** December 2, 2026
**Conception:** March 11, 2026

To change any settings: open the app → ⚙ gear icon (top right).

---

## Data & Privacy

All data stays on your device. Nothing is sent to any server. localStorage keys:

- `anc-config` — settings
- `anc-week` — last viewed week
- `anc-entries` — symptom and movement logs
- `anc-appts` — appointment records
- `anc-tasks` — task list with completion state

To share data between your phone and Laura's (if she wants to log): use the sync export (generates a URL hash) in the app.
