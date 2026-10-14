# 221B Baker Street: The Bleaching Dossier
### A BDS Final Year Dental Bleaching Competition Web Application

---

## 🏛️ Project Overview
**The Bleaching Dossier** is an interactive, competition-grade web application created for **dental college festivals and academic tournaments**. Designed with an authentic Victorian **Sherlock Holmes noir** aesthetic, competing student teams investigate forensic cases of vital and non-vital tooth bleaching, diagnostic shade science, bleaching chemistry, and biological complications.

All 48 cases are calibrated specifically for **BDS Final Year** (Conservative Dentistry & Endodontics, Oral Pathology, and Operative Dentistry) following:
- *Sturdevant's Art and Science of Operative Dentistry*
- *Grossman's Endodontic Practice*
- *Ingle's Endodontics*
- *Neville's Oral and Maxillofacial Pathology*

---

## 🔐 Privacy & Owner-Only Leaderboard Architecture

To ensure competition integrity during college fests:
- 👤 **Confidential Personal Results for Students**: Competing teams only see their individual score, accuracy percentage, level breakdown, and personalized **Victorian Certificate of Forensic Competence**. No competing team can view another team's ranking on their terminal.
- 🛡️ **PIN-Protected Chief Inspector Master Leaderboard (Owner & Judges Only)**:
  - Accessible via the **"Owner Portal"** button in the top navigation bar.
  - Guarded by an Organizer Authorization Passcode (**Default PIN: `221B`**).
  - Displays the complete tournament standings across all teams, automatically sorted by score (descending) with Gold, Silver, and Bronze podium highlights.
  - Includes a one-click **"Export Master Tournament CSV"** to generate the final fest standings for prize announcements.
  - Includes **"Add Sample Teams"** for organizers to test the leaderboard before the fest starts, and **"Reset Leaderboard"** to clear data for new rounds.

---

## 🧩 Mixed Question Formats (Concise & Interactive)

To avoid cognitive fatigue while testing real clinical recall:
- **Concise Questions & Punchy Options**: Scenarios and answers are kept short, high-yield, and focused.
- **Multiple Choice Inquiries (Levels 1, 3, 5, 6)**: Tactile wax seal option cards with perfectly balanced answer distributions (exactly 2 A's, 2 B's, 2 C's, and 2 D's per level).
- **Interactive One-Word Typewritten Deductions (Levels 2 & 4)**: 
  - **Level II (The Reagent Laboratory)** and **Level IV (The Scotland Yard Protocols)** require teams to type one-word forensic deductions (e.g., `ammonia`, `oxygen`, `carbopol`, `GIC`, `reservoir`, `scalloped`).
  - Inputs are evaluated case-insensitively with flexible aliases and synonyms.

---

## 🔍 Six Forensic Levels (8 Questions Per Level = 48 Clinical Cases)

1. **Dossier I: The Discoloration Dossier (Multiple Choice)**
   - Etiology, pathology, and diagnosis: pulpal necrosis (iron sulfide FeS), tetracycline critical age windows (birth to 8 years), Dean's Fluorosis Index (Severe pitting), ameloblast targeting, extrinsic pellicle stains, retained sealers/gutta-percha, calcific metamorphosis, and hemosiderin.
2. **Dossier II: The Reagent Laboratory (One-Word Typewritten Deductions)**
   - Bleaching chemistry: ammonia buffering, perhydroxyl radicals ($HO_2^\bullet$), residual oxygen resin inhibition, Carbopol polymer thickener, distilled water safety in walking bleach, double-bond cleavage, critical enamel pH (5.5), and 35% hydrogen peroxide chairside protocols.
3. **Dossier III: Baker Street Diagnostics (Multiple Choice)**
   - Shade evaluation: Vita Classical value order (B1 lightest), dehydration opacity rebound, baseline shade timing before rubber dam placement, yellow-brown aging stain responsiveness, 5,500K daylight lighting, metamerism, and restoration compatibility.
4. **Dossier IV: The Scotland Yard Protocols (One-Word Typewritten Deductions)**
   - Operative execution: Glass Ionomer Cement (GIC) cervical barrier, 2 mm barrier thickness, CEJ leveling, Cavit temporary access seal, stone model reservoirs, liquid dam isolation, and scalloped tray trimming.
5. **Dossier V: Forensic Pathology & Adverse Reactions (Multiple Choice)**
   - Complications & relief: Absence of cervical barrier causing invasive root resorption, 7-14 day composite bonding delay, residual oxygen polymer inhibition, 10% sodium ascorbate (Vitamin C) reversal, Brännström hydrodynamic sensitivity, potassium nitrate nerve depolarization, Vitamin E for soft tissue blanching, and fluoride tubule occlusion.
6. **Dossier VI: The Moriarty Enigma (Multiple Choice)**
   - Complex cases & management: Croll's microabrasion (18% HCl + pumice), white spot lesion blending, 2-6 month extended tetracycline bleaching, rehydration shade stabilization, 48-hour post-bleach white diet, conservative vital bleaching for calcific canal obliteration, and deferral during pregnancy.

---

## 🔎 Detective Lifelines System
- 🔍 **50:50 Loupe**: Eliminates 2 incorrect options in MCQ levels, or reveals word length and first/last letter clues in Type-In levels (-15 pts).
- 🩺 **Dr. Watson's Consultation**: Dr. Watson opens his vintage ruled clinical ledger with a medical pointer (-10 pts).
- 🧪 **221B Chemical Reagent**: Holmes performs a wet-lab chemical assay with a bubbling reaction animation (-20 pts).

---

## 🎭 Victorian Visual & Audio Effects
- **Atmospheric Gaslamp Street Flicker**: Subtle breathing ambient illumination on page vignettes.
- **Animated Rubber Stamp Slam**: Realistic ink stamp slam (`stampSlam` animation with rotation and spring bounce) stamping `VERIFIED` or `REJECTED` upon deduction submission.
- **Dr. Watson's Ruled Medical Ledger**: Authentic ivory paper styling with light blue feint lines and red margin rule.
- **221B Bubbling Chemical Beaker**: Animated glowing emerald reaction flask in the laboratory modal.
- **Pure Web Audio Synthesizer**: Typewriter clicks, carriage return bells, paper rustles, violin chords, and heavy wax seal thuds (100% offline, zero audio asset downloads).

---

## 🚀 Running the Application

### 1. Direct Browser Launch
Open `index.html` in any web browser (Chrome, Safari, Firefox, Edge). It is 100% self-contained with no build steps or npm packages required.

### 2. Local Python Server (Recommended for Fest Displays)
```bash
python3 -m http.server 8000
```
Open `http://localhost:8000` in your browser.

### 3. Fast-Forward Judge Demo Mode
To immediately inspect the final **Certificate of Forensic Competence** and **Master Leaderboard** without manually answering 48 cases, click the **"Judge Demo: Fast-Forward"** button in the hero drawer.

---

*221B Baker Street Forensic Division &bull; Advancing Dental Aesthetics through Rigorous Science.*
