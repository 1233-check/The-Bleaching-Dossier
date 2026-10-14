# 221B Baker Street: The Bleaching Dossier
### A BDS Final Year Dental Bleaching Competition Web Application (100% One-Word Answer Engine)

---

## 🏛️ Project Overview
**The Bleaching Dossier** is an interactive, competition-grade web application created for **dental college festivals and academic tournaments**. Designed with an authentic Victorian **Sherlock Holmes noir** aesthetic, competing student teams investigate forensic cases of vital and non-vital tooth bleaching, diagnostic shade science, bleaching chemistry, and biological complications.

All 48 cases are calibrated specifically for **BDS Final Year** (Conservative Dentistry & Endodontics, Oral Pathology, and Operative Dentistry) following:
- *Sturdevant's Art and Science of Operative Dentistry*
- *Grossman's Endodontic Practice*
- *Ingle's Endodontics*
- *Neville's Oral and Maxillofacial Pathology*

---

## 🔑 Admin / Organizer Authorization PIN
- **Master Authorization PIN**: `20261014` (Private to Fest Organizers & Judges).
- **Hidden & Masked in UI**: The passcode is completely hidden from the web interface (masked as `••••••••` in a password field, with no on-screen display of the PIN) to prevent participants from seeing it during live competitions.
- Access the Admin Portal by clicking the **"Owner Portal"** button in the top navigation bar and entering `20261014`.
- Only fest organizers/judges with this PIN can unlock the **Master Tournament Leaderboard** and export standings.

---

## 🔐 Privacy & Owner-Only Leaderboard Architecture

To ensure competition integrity during college fests:
- 👤 **Confidential Personal Results for Students**: Competing teams only see their individual score, accuracy percentage, level breakdown, and personalized **Victorian Certificate of Forensic Competence**. No competing team can view another team's ranking on their terminal.
- 🛡️ **PIN-Protected Chief Inspector Master Leaderboard (Owner & Judges Only)**:
  - Accessible via the **"Owner Portal"** button in the top navigation bar.
  - Guarded by the Organizer Authorization Passcode (**PIN: `20261014`**, masked input).
  - Displays the complete tournament standings across all teams, automatically sorted by score (descending) with Gold, Silver, and Bronze podium highlights.
  - Includes a one-click **"Export Master Tournament CSV"** to generate the final fest standings for prize announcements.
  - Includes **"Add Sample Teams"** for organizers to test the leaderboard before the fest starts, and **"Reset Leaderboard"** to clear data for new rounds.

---

## ⌨️ 100% One-Word Answer Forensic Deduction Format

All multiple choice options have been removed in favor of a fast, intuitive **One-Word Forensic Deduction** format across all 48 cases:
- **Fast, Intuitive, and Focused**: Each question features a clinical scenario and a direct inquiry without giving away the answer in the prompt text.
- **Three Strategic Lifelines**: Competitors can consult Dr. Watson's Medical Notes, request a 221B Chemical Reagent Analysis, or use the Baker Street Loupe Clue (reveals word length and letter hints without spoiling the answer).
- **Flexible Answer Matching**: Answers are evaluated case-insensitively, automatically trimming whitespace and accepting standard medical/chemical abbreviations, numbers, and common clinical synonyms.
- **Typewriter Input Interface**: Competing teams type their single-word answer into an aged parchment typewriter field with interactive mechanical typing clatter and carriage return sounds.

---

## 🔍 Six Forensic Levels (8 Questions Per Level = 48 One-Word Cases)

1. **Dossier I: The Discoloration Dossier**
   - Etiology, pathology, and diagnosis: Iron sulfide (`FeS`), tetracycline window (`8` years), Dean's index (`Severe`), target cells (`Ameloblasts`), surface stains (`Extrinsic`), root canal core point (`Gutta-percha`), pulp obliteration (`Tertiary` dentin), and blood pigment (`Hemosiderin`).
2. **Dossier II: The Reagent Laboratory**
   - Bleaching chemistry: Buffering gas (`Ammonia`), primary bleaching radical (`Perhydroxyl`), curing inhibitor (`Oxygen`), polymer thickener (`Carbopol`), safe vehicle (`Water`), chromophore bond (`Double`), critical pH (`5.5`), and 35% agent (`Hydrogen peroxide`).
3. **Dossier III: Baker Street Diagnostics**
   - Shade evaluation: Whitest tab (`B1`), dehydration effect (`Lighter`), baseline timing (`Before`), rapid-responding hue (`Yellow`), daylight temperature (`5500`), optical mismatch (`Metamerism`), resin bleaching (`No`), and Hue B (`Yellow`).
4. **Dossier IV: The Scotland Yard Protocols**
   - Operative execution: Cervical barrier cement (`GIC`), barrier thickness (`2` mm), landmark junction (`CEJ`), temporary seal (`Cavit`), gel space (`Reservoir`), soft tissue dam (`Liquid dam`), tray contour (`Scalloped`), and abandoned physical agent (`Heat`).
5. **Dossier V: Forensic Pathology & Adverse Reactions**
   - Biological complications: Destructive hazard (`Resorption`), bonding wait time (`1 to 2` weeks), oxygen neutralizer (`Sodium ascorbate` / `Vitamin C`), sensitivity theory (`Hydrodynamic`), desensitizing ion (`Potassium`), chemical burn first aid (`Vitamin E`), tubule blocker (`Fluoride`), and inhibition site (`Surface`).
6. **Dossier VI: The Moriarty Enigma**
   - Master cases & special care: Microabrasion acid (`Hydrochloric`), initial white spot appearance (`More` visible), tetracycline timeframe (`Months`), pellicle white diet (`48` hours), rehydration fluid (`Saliva`), calcific metamorphosis therapy (`Bleaching`), over-bleaching hue (`Grey`), and pregnancy guideline (`Postponed`).

---

## 🔎 Detective Lifelines System
- 🔍 **Loupe Magnification**: Reveals character count and first/last letter clues, and automatically pre-fills the first letter in the typewriter input (-15 pts).
- 🩺 **Dr. Watson's Consultation**: Dr. Watson opens his vintage ruled clinical ledger with a medical pointer (-10 pts).
- 🧪 **221B Chemical Reagent**: Holmes performs a wet-lab chemical assay with a bubbling reaction animation (-20 pts).

---

## 🎭 Victorian Visual & Audio Effects
- **Gaslamp Street Flicker**: Subtle breathing ambient illumination on page vignettes and aged parchment.
- **Animated Rubber Stamp Slam (`stampSlam`)**: High-impact 3D rubber stamp slam animation that bounces and stamps `VERIFIED` (green) or `REJECTED` (red) onto the case file.
- **Dr. Watson's Ruled Medical Ledger**: Modal styled with ivory paper, feint light blue notebook rules, and a double red vertical margin line.
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
To immediately inspect the final **Certificate of Forensic Competence** and **Master Leaderboard** without manually typing 48 cases, click the **"Judge Demo: Fast-Forward"** button in the hero drawer.

---

*221B Baker Street Forensic Division &bull; Advancing Dental Aesthetics through Rigorous Science.*
