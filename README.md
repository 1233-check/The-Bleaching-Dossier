# 221B Baker Street: The Bleaching Dossier
### A BDS Final Year Dental Bleaching Competition Web Application

---

## 🏛️ Project Overview
**The Bleaching Dossier** is an interactive, competition-grade web quiz application designed for **college dental fests**. Set in a Victorian **Sherlock Holmes / 221B Baker Street noir** theme, competing teams investigate mystery cases of enamel and dentin dyschromias, solving clinical dilemmas across vital and non-vital tooth bleaching.

The questions are meticulously calibrated to **BDS Final Year** difficulty (Conservative Dentistry & Endodontics, Oral Pathology, and Operative Dentistry), referencing standard authorities:
- *Sturdevant's Art and Science of Operative Dentistry*
- *Grossman's Endodontic Practice*
- *Ingle's Endodontics*
- *Neville's Oral and Maxillofacial Pathology*

---

## 🔍 Six Forensic Levels (8 Cases Per Level = 48 Clinical Cases)

1. **Dossier I: The Discoloration Dossier**
   - Etiology, histopathology, and diagnosis of tooth stains.
   - Intrinsic vs. extrinsic chromophores, erythrocyte hemolysis (FeS), tetracycline critical age windows, Dean's Fluorosis Index, minocycline adult chelation, calcific metamorphosis, and Dentinogenesis Imperfecta.

2. **Dossier II: The Reagent Laboratory**
   - Bleaching chemistry, decomposition kinetics, and reactive oxygen radicals.
   - 10% Carbamide Peroxide stoichiometry (3.35% HP + 6.65% urea), urea ammonia buffering, perhydroxyl radical ($HO_2^-$) kinetics, sodium perborate tetrahydrate, Carbopol thixotropy, bleaching saturation points, and Zach & Cohen's pulpal thermal threshold ($5.5^\circ\text{C}$).

3. **Dossier III: Baker Street Diagnostics**
   - Shade evaluation, color science, and pre-bleaching clinical planning.
   - Vita Classical shade guide Value arrangement (B1 to C4), CIELAB color parameters ($L^*, a^*, b^*$), dehydration rebound mechanics (refractive index disparity), incisal edge translucency shadows, craze lines vs. fractures (transillumination), and restoration compatibility.

4. **Dossier IV: The Scotland Yard Protocols**
   - Clinical techniques and operative execution.
   - Spasser's non-vital walking bleach (sodium perborate + water), cervical barrier (coronal plug: 2 mm thickness, 1-2 mm sub-CEJ, scalloped contour), gutta-percha reduction depth, Haywood & Heymann's 1989 nightguard vital bleaching protocol, tray reservoir controversy, and emergency management of gingival peroxide blanching with Vitamin E oil.

5. **Dossier V: Forensic Pathology & Adverse Reactions**
   - Biological complications, resorption, and sensitivity management.
   - External Invasive Cervical Root Resorption (ICR), Choquet's 10% CEJ gap, thermocatalytic hazards (Heithersay survey), residual oxygen inhibition of composite polymerization, 7-14 day restorative delay, Lai's 10% sodium ascorbate reversal protocol, neurogenic pulpal sensitivity, and potassium nitrate / fluoride mechanisms.

6. **Dossier VI: The Moriarty Enigma**
   - Master clinical cases, trauma dilemmas, and sequencing protocols.
   - Asymptomatic calcific metamorphosis (PCO) conservative vital bleaching vs. aggressive canal drilling, Croll's enamel microabrasion technique (18% HCl + pumice) for fluorosis, extended nightguard bleaching (ENVB) for Jordan-Boksman Grade III/IV tetracycline stains, post-orthodontic white spot lesion sequencing, and long-term touch-up retention.

---

## 🔎 Detective Lifelines System
Teams have access to three forensic lifelines:
- 🔍 **The Magnifying Loupe (50:50)**: Disables two misleading distractors with strikethrough animation (-15 reputation points).
- 🩺 **Dr. Watson's Consultation**: Dr. Watson provides a clinical/pathological medical pointer (-10 reputation points).
- 🧪 **221B Chemical Reagent Test**: Sherlock Holmes reveals a biochemical assay, formula, or reaction hint (-20 reputation points).

---

## 🏆 College Fest Features
- **Team Registration**: Captures Team Name, Dental College / Institution, and Lead Investigator.
- **Untimed, Deduction-Focused Scoring**: Eliminates time anxiety and rewards deep clinical reasoning and accuracy.
- **Pure Web Audio API**: Atmospheric Victorian typewriter clicks, paper dossier rustling, violin stings, and wax seal stamp thuds (zero external audio file dependencies, 100% offline).
- **Official Score Report Export (CSV)**: Organizers can download an instant spreadsheet containing the team's score, accuracy percentage, and case-by-case audit trail.
- **Victorian Certificate of Forensic Competence**: Printable / PDF-exportable certificate customized with the team's name, college, score, accuracy, and conferred rank title (e.g., *The Master Detective - Sherlock Holmes Tier*).
- **Offline Capable & Portable**: Single folder containing standard HTML, CSS, and vanilla JS. Requires no server build steps, databases, or npm dependencies.

---

## 🚀 How to Run the Quiz

### Option A: Direct Browser Launch (Fastest)
Simply double-click `index.html` or drag it into any modern web browser (Google Chrome, Safari, Firefox, Microsoft Edge).

### Option B: Local Python Server (Recommended for Fest Projectors)
Open your terminal, navigate to the folder, and run:
```bash
python3 -m http.server 8000
```
Then open:
```
http://localhost:8000
```

---

*221B Baker Street Forensic Division &bull; Advancing Dental Aesthetics through Rigorous Science.*
