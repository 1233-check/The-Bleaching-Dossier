/**
 * 221B Baker Street - The Bleaching Dossier: Clinical Questions Database
 * Topic: Dental Bleaching (Vital & Non-Vital Tooth Whitening)
 * Calibrated specifically for BDS Final Year / Dental Fest Competition Standard
 * Textbooks: Sturdevant (Operative Dentistry), Grossman (Endodontics), Neville (Oral Pathology)
 * Exactly 6 Levels × 8 Questions = 48 Clinical Cases
 * Structure:
 *   - Levels 1, 3, 5, 6: Multiple Choice Questions (MCQ, Balanced Answer Key: 2 A, 2 B, 2 C, 2 D per level)
 *   - Levels 2, 4: Interactive One-Word Typewritten Deductions (type: "text", case-insensitive with synonyms)
 */

const QUIZ_LEVELS = [
  {
    id: 1,
    title: "Level I: The Discoloration Dossier",
    subtitle: "Etiology, Pathology & Diagnosis of Tooth Stains",
    badge: "Apprentice Investigator",
    type: "mcq",
    description: "Investigate primary causes of tooth discoloration: trauma, pulpal necrosis, tetracycline, fluorosis, and aging.",
    icon: "fa-magnifying-glass"
  },
  {
    id: 2,
    title: "Level II: The Reagent Laboratory",
    subtitle: "Bleaching Chemistry & One-Word Chemical Cyphers",
    badge: "Forensic Chemist",
    type: "text",
    description: "Type one-word forensic deductions: Hydrogen peroxide, carbamide breakdown, urea buffering, and oxidation reactions.",
    icon: "fa-flask-vial"
  },
  {
    id: 3,
    title: "Level III: Baker Street Diagnostics",
    subtitle: "Shade Selection, Colorimetry & Case Planning",
    badge: "Consulting Detective",
    type: "mcq",
    description: "Examine shade analysis: Vita Classical Value order, dehydration rebound, lighting conditions, and existing restorations.",
    icon: "fa-compass-drafting"
  },
  {
    id: 4,
    title: "Level IV: The Scotland Yard Protocols",
    subtitle: "Clinical Procedures & One-Word Protocol Clues",
    badge: "Chief Inspector",
    type: "text",
    description: "Type one-word procedural answers: Walking bleach, cervical barriers, tray fabrication, and gingival isolation.",
    icon: "fa-shield-halved"
  },
  {
    id: 5,
    title: "Level V: Forensic Pathology & Adverse Reactions",
    subtitle: "Complications, Resorption & Sensitivity Management",
    badge: "Forensic Pathologist",
    type: "mcq",
    description: "Analyze complications: Invasive cervical root resorption, delayed composite bonding, sodium ascorbate, and sensitivity relief.",
    icon: "fa-skull"
  },
  {
    id: 6,
    title: "Level VI: The Moriarty Enigma",
    subtitle: "Master Clinical Scenarios & Special Cases",
    badge: "Master Inquisitor",
    type: "mcq",
    description: "Solve complex clinical dilemmas: Croll's microabrasion, white spot lesions, calcific metamorphosis, and diet protocols.",
    icon: "fa-chess-king"
  }
];

const QUIZ_QUESTIONS = [
  // =========================================================================
  // LEVEL 1: THE DISCOLORATION DOSSIER (MCQ, Balanced: 2 A, 2 B, 2 C, 2 D)
  // =========================================================================
  {
    id: "1.1",
    level: 1,
    type: "mcq",
    caseTitle: "Case #01: Pulpal Necrosis Pigment",
    scenario: "A traumatized anterior tooth turns dark grey 1 year after an untreated injury.",
    question: "Which iron compound is primarily responsible for this dark discoloration?",
    options: [
      { id: "A", text: "Calcium phosphate" },
      { id: "B", text: "Salivary mucin" },
      { id: "C", text: "Iron sulfide (FeS)" },
      { id: "D", text: "Calcium fluorapatite" }
    ],
    correctAnswer: "C",
    explanation: "Erythrocyte breakdown inside necrotic pulp releases iron from hemoglobin, forming dark iron sulfide (FeS) that diffuses into dentinal tubules (Grossman).",
    watsonClue: "Think of an old bruise inside a tooth: red blood cells release iron, which forms a dark sulfide precipitate.",
    reagentClue: "Reaction: Hemoglobin degradation → Hemosiderin + Hydrogen Sulfide → Iron Sulfide (FeS, dark slate-grey)."
  },
  {
    id: "1.2",
    level: 1,
    type: "mcq",
    caseTitle: "Case #02: Tetracycline Banding Window",
    scenario: "A patient presents with bilateral horizontal brown bands on all permanent anterior teeth.",
    question: "Up to what age does tetracycline ingestion affect permanent anterior crowns?",
    options: [
      { id: "A", text: "Birth to 8 years of age" },
      { id: "B", text: "12 to 16 years of age" },
      { id: "C", text: "Only in the first 3 months of life" },
      { id: "D", text: "Any time after 21 years of age" }
    ],
    correctAnswer: "A",
    explanation: "Crown calcification of permanent anterior teeth completes by approximately 7 to 8 years of age. Tetracycline chelates calcium during active calcification (Sturdevant).",
    watsonClue: "Tetracycline binds during active enamel/dentin mineralization. Permanent front tooth crowns finish calcifying around age 8.",
    reagentClue: "Chelation: Tetracycline + Calcium → Tetracycline-calcium orthophosphate complex locked in developing hydroxyapatite."
  },
  {
    id: "1.3",
    level: 1,
    type: "mcq",
    caseTitle: "Case #03: Dean's Fluorosis Index",
    scenario: "A patient from a high-fluoride region has widespread brown stains and deep enamel pits.",
    question: "How is fluorosis with distinct pitting classified under Dean's Index?",
    options: [
      { id: "A", text: "Questionable" },
      { id: "B", text: "Very mild" },
      { id: "C", text: "Mild" },
      { id: "D", text: "Severe" }
    ],
    correctAnswer: "D",
    explanation: "Under Dean's Fluorosis Index, presence of marked brown stains accompanied by confluent pits across the tooth surface defines Severe fluorosis (Neville).",
    watsonClue: "Pitting signifies structural loss of fragile, hypomineralized outer enamel—the highest grade of severity.",
    reagentClue: "Pathology: High fluoride during enamel maturation impairs amelogenin proteolysis, creating porous, fragile, pitted outer enamel."
  },
  {
    id: "1.4",
    level: 1,
    type: "mcq",
    caseTitle: "Case #04: Fluorosis Target Cells",
    scenario: "Excessive systemic fluoride impairs enamel mineralization during crown formation.",
    question: "Which cells are directly damaged by excess fluoride during enamel maturation?",
    options: [
      { id: "A", text: "Odontoblasts" },
      { id: "B", text: "Ameloblasts" },
      { id: "C", text: "Cementoblasts" },
      { id: "D", text: "Fibroblasts" }
    ],
    correctAnswer: "B",
    explanation: "Excess fluoride disrupts ameloblast enzymatic function during the maturation stage, leaving retained amelogenin proteins and porous enamel (Sturdevant).",
    watsonClue: "Enamel is formed solely by ameloblasts; excess fluoride cripples their matrix-resorbing enzymes.",
    reagentClue: "Mechanism: Fluoride inhibits enamelysin (MMP-20) and kallikrein-4, preventing complete organic matrix degradation."
  },
  {
    id: "1.5",
    level: 1,
    type: "mcq",
    caseTitle: "Case #05: Extrinsic vs. Intrinsic Stains",
    scenario: "A heavy tea drinker exhibits dark brown stains located strictly on the outer enamel surface.",
    question: "How is this external enamel surface staining classified?",
    options: [
      { id: "A", text: "Intrinsic stain" },
      { id: "B", text: "Extrinsic stain" },
      { id: "C", text: "Metabolic dystrophia" },
      { id: "D", text: "Calcific metamorphosis" }
    ],
    correctAnswer: "B",
    explanation: "Tannins and chromogens adhering to the acquired salivary pellicle on the enamel surface are classified as extrinsic stains and are removable by prophylaxis (Sturdevant).",
    watsonClue: "Stains on the surface pellicle removable by scaling/polishing are extrinsic, not intrinsic.",
    reagentClue: "Pellicle interaction: Dietary polyphenols bond to salivary glycoproteins on the enamel surface."
  },
  {
    id: "1.6",
    level: 1,
    type: "mcq",
    caseTitle: "Case #06: Non-Vital Canal Discoloration",
    scenario: "An endodontically treated incisor turns yellow-orange several years post-obturation.",
    question: "What is the common clinical cause of this discoloration after root canal therapy?",
    options: [
      { id: "A", text: "Sealer or gutta-percha left in the pulp chamber" },
      { id: "B", text: "Excessive salivary amylase penetration" },
      { id: "C", text: "Complete enamel calcification" },
      { id: "D", text: "Pellicle demineralization" }
    ],
    correctAnswer: "A",
    explanation: "Failure to clean gutta-percha and root canal sealers (especially eugenol or silver-containing sealers) below the cervical margin causes progressive coronal staining (Grossman).",
    watsonClue: "The endodontic filling material was not cleaned down below the gingival level.",
    reagentClue: "Etiology: Zinc oxide-eugenol and resin sealers oxidize over time within coronal dentinal tubules."
  },
  {
    id: "1.7",
    level: 1,
    type: "mcq",
    caseTitle: "Case #07: Calcific Metamorphosis",
    scenario: "A vital maxillary central incisor appears noticeably yellow 3 years after a sports trauma.",
    question: "What internal process produces this yellow hue in a vital traumatized tooth?",
    options: [
      { id: "A", text: "Internal resorption" },
      { id: "B", text: "Enamel hypoplasia" },
      { id: "C", text: "Excessive tertiary dentin obliteration" },
      { id: "D", text: "Erythrocyte hemolysis" }
    ],
    correctAnswer: "C",
    explanation: "Trauma can stimulate odontoblasts to produce rapid tertiary dentin, obliterating the pulp canal space and giving the tooth an opaque, yellow appearance (Ingle).",
    watsonClue: "The tooth remains vital, but the pulp chamber is choked with thick, dense secondary dentin.",
    reagentClue: "Histology: Canal calcification increases dentin thickness, reducing light transmission and reflecting a yellow shade."
  },
  {
    id: "1.8",
    level: 1,
    type: "mcq",
    caseTitle: "Case #08: Hemosiderin Staining",
    scenario: "Acute trauma causes massive pulpal hemorrhage into coronal dentinal tubules.",
    question: "Which iron-storage complex derived from hemoglobin stains the dentin matrix?",
    options: [
      { id: "A", text: "Bilirubin alone" },
      { id: "B", text: "Sodium bicarbonate" },
      { id: "C", text: "Calcium carbonate" },
      { id: "D", text: "Hemosiderin" }
    ],
    correctAnswer: "D",
    explanation: "Lysis of extravasated red blood cells releases hemoglobin, which converts into hemosiderin and hematoidin, imparting dark intrinsic stains (Neville).",
    watsonClue: "An insoluble brown iron-protein complex produced by macrophage breakdown of blood.",
    reagentClue: "Biochemistry: Ferritin aggregation → Hemosiderin iron granules trapped in tubular lumen."
  },

  // =========================================================================
  // LEVEL 2: THE REAGENT LABORATORY (One-Word Typewritten Deductions)
  // User types 1-word answer. Evaluated case-insensitively with synonyms.
  // =========================================================================
  {
    id: "2.1",
    level: 2,
    type: "text",
    caseTitle: "Case #09: Plaque pH Buffering Gas",
    scenario: "Carbamide peroxide decomposes into active hydrogen peroxide and urea.",
    question: "Which alkaline gas formed by urea breakdown raises local plaque pH above 7.0?",
    acceptedAnswers: ["ammonia", "nh3"],
    displayAnswer: "Ammonia (NH3)",
    explanation: "Urea decomposes into ammonia (NH3) and carbon dioxide. Ammonia elevates plaque pH, neutralizing acidic byproducts and preventing enamel demineralization (Sturdevant).",
    watsonClue: "A pungent, common alkaline gas with the chemical formula NH3.",
    reagentClue: "Reaction: (NH2)2CO + H2O → 2 NH3 (Ammonia gas) + CO2."
  },
  {
    id: "2.2",
    level: 2,
    type: "text",
    caseTitle: "Case #10: Primary Bleaching Radical",
    scenario: "Hydrogen peroxide dissociates into reactive oxygen species in alkaline media.",
    question: "Name the potent radical ion (HO2•) that serves as the primary active bleaching agent.",
    acceptedAnswers: ["perhydroxyl", "perhydroxyl radical", "ho2", "ho2 radical", "perhydroxyl ion"],
    displayAnswer: "Perhydroxyl radical (HO2•)",
    explanation: "In alkaline environments, hydrogen peroxide dissociates into perhydroxyl radicals (HO2•), which have significantly greater oxidation bleaching potential than hydroxyl radicals (Sturdevant).",
    watsonClue: "Begins with 'Per-': the perhydroxyl radical is formed when H2O2 loses a proton.",
    reagentClue: "Equilibrium: H2O2 + H2O ⇌ H3O+ + HO2• (Perhydroxyl radical)."
  },
  {
    id: "2.3",
    level: 2,
    type: "text",
    caseTitle: "Case #11: Resin Bonding Inhibitor",
    scenario: "Free radicals lingering in enamel pores inhibit composite resin adhesive polymerization.",
    question: "Which chemical element's trapped free radicals inhibit composite resin bonding?",
    acceptedAnswers: ["oxygen", "o2", "residual oxygen"],
    displayAnswer: "Oxygen (O2)",
    explanation: "Residual oxygen free radicals trapped within enamel pores react with resin initiators, preventing normal free-radical polymerization of dental adhesives (Sturdevant).",
    watsonClue: "The vital gas we breathe; trapped in enamel, it inhibits composite curing.",
    reagentClue: "Free radical chemistry: Oxygen scavenges methacrylate radicals, terminating polymer chains."
  },
  {
    id: "2.4",
    level: 2,
    type: "text",
    caseTitle: "Case #12: Bleaching Gel Thickener",
    scenario: "Commercial 10% carbamide peroxide gels contain a carboxypolymethylene thickening polymer.",
    question: "What is the proprietary commercial name of this polymer that sustains oxygen release?",
    acceptedAnswers: ["carbopol", "carboxypolymethylene", "carbomer"],
    displayAnswer: "Carbopol",
    explanation: "Carbopol (carboxypolymethylene polymer) thickens the gel, increases adhesion to tooth surfaces, and slows oxygen release over hours (Sturdevant).",
    watsonClue: "Starts with 'Carbo-': a familiar high-viscosity pharmaceutical gel base.",
    reagentClue: "Polymer structure: Cross-linked polyacrylic acid polymer known clinically as Carbopol."
  },
  {
    id: "2.5",
    level: 2,
    type: "text",
    caseTitle: "Case #13: Safest Walking Bleach Liquid",
    scenario: "Sodium perborate powder is mixed into a paste for walking bleach in non-vital teeth.",
    question: "Which safest, non-irritating liquid is mixed with sodium perborate to prevent cervical root resorption?",
    acceptedAnswers: ["water", "distilled water", "saline", "sterile water", "h2o"],
    displayAnswer: "Distilled Water (or Saline)",
    explanation: "Mixing sodium perborate with sterile distilled water or saline releases peroxide slowly and safely, markedly minimizing the risk of invasive cervical resorption (Grossman).",
    watsonClue: "Plain, sterile H2O is far safer than aggressive 30% hydrogen peroxide.",
    reagentClue: "Hydrolysis: NaBO3 + H2O → Sodium metaborate + controlled physiological H2O2."
  },
  {
    id: "2.6",
    level: 2,
    type: "text",
    caseTitle: "Case #14: Chromophore Bond Cleavage",
    scenario: "Peroxide free radicals decolorize complex dark organic stain molecules.",
    question: "What type of chemical bond in chromophores is cleaved by oxidation to lighten color?",
    acceptedAnswers: ["double", "double bond", "double bonds", "conjugated double bond", "c=c"],
    displayAnswer: "Double bond",
    explanation: "Peroxide radicals oxidize and cleave conjugated carbon-carbon double bonds in chromophores, converting them into single-bonded, lighter compounds (Sturdevant).",
    watsonClue: "Organic color stems from 'double' bonds; oxidation breaks them into single bonds.",
    reagentClue: "Bond cleavage: Conjugated -C=C- double bond systems absorb visible light; breaking them eliminates color."
  },
  {
    id: "2.7",
    level: 2,
    type: "text",
    caseTitle: "Case #15: Critical Enamel pH",
    scenario: "Bleaching gels must remain above the threshold for enamel hydroxyapatite dissolution.",
    question: "What is the critical numerical pH below which enamel demineralization begins?",
    acceptedAnswers: ["5.5", "5.5 ph", "ph 5.5", "five point five"],
    displayAnswer: "5.5",
    explanation: "The critical pH of dental enamel is 5.5. Bleaching products formulated below pH 5.5 cause superficial enamel etching and prism demineralization (Sturdevant).",
    watsonClue: "A classic dental milestone: five point five.",
    reagentClue: "Solubility product: Hydroxyapatite dissolution begins when oral fluid pH drops below 5.5."
  },
  {
    id: "2.8",
    level: 2,
    type: "text",
    caseTitle: "Case #16: Chairside Power Bleach Agent",
    scenario: "In-office vital bleaching protocols utilize high concentrations (35%) of an oxidizing agent.",
    question: "Which chemical peroxide compound is applied at 35% concentration for in-office bleaching?",
    acceptedAnswers: ["hydrogen peroxide", "h2o2"],
    displayAnswer: "Hydrogen peroxide (H2O2)",
    explanation: "In-office chairside power bleaching uses 35% to 38% hydrogen peroxide (H2O2) for rapid, supervised aesthetic oxidation (Sturdevant).",
    watsonClue: "The parent peroxide compound containing two hydrogen and two oxygen atoms.",
    reagentClue: "Molecular formula: H2O2 (MW = 34.01 g/mol), applied at 35% w/w."
  },

  // =========================================================================
  // LEVEL 3: BAKER STREET DIAGNOSTICS (MCQ, Balanced: 2 A, 2 B, 2 C, 2 D)
  // =========================================================================
  {
    id: "3.1",
    level: 3,
    type: "mcq",
    caseTitle: "Case #17: Lightest Vita Classic Tab",
    scenario: "A dentist arranges Vita Classical shade tabs in order of decreasing lightness (value).",
    question: "Which shade tab represents the highest value (lightest shade) on the Vita Classical guide?",
    options: [
      { id: "A", text: "C4" },
      { id: "B", text: "B1" },
      { id: "C", text: "A3.5" },
      { id: "D", text: "D4" }
    ],
    correctAnswer: "B",
    explanation: "In value-ordered Vita Classical guides, B1 is the highest value (brightest/lightest), whereas C4 is the lowest value (darkest) (Sturdevant).",
    watsonClue: "The classic gold standard benchmark for the whitest natural shade tab.",
    reagentClue: "Vita Value Scale: B1 > A1 > B2 > D2 > A2 > C1 > C2 > D4 > A3 > D3 > B3 > A3.5 > B4 > C3 > A4 > C4."
  },
  {
    id: "3.2",
    level: 3,
    type: "mcq",
    caseTitle: "Case #18: Dehydration Rebound",
    scenario: "During an initial checkup, teeth are isolated under dry cotton rolls for 15 minutes.",
    question: "How does dehydration affect the initial visual shade of a tooth?",
    options: [
      { id: "A", text: "It makes teeth appear artificially whiter and more opaque" },
      { id: "B", text: "It makes teeth look dark grey" },
      { id: "C", text: "It makes teeth completely transparent" },
      { id: "D", text: "It produces no optical difference" }
    ],
    correctAnswer: "A",
    explanation: "Loss of moisture replaces water (refractive index 1.33) in enamel pores with air (refractive index 1.00), increasing light scatter and making teeth look artificially white (Sturdevant).",
    watsonClue: "Dry teeth look chalky and lighter than they really are due to air in the enamel pores.",
    reagentClue: "Optics: Air in enamel pores (n=1.0) vs enamel prism (n=1.62) increases refractive discrepancy, causing diffuse reflection."
  },
  {
    id: "3.3",
    level: 3,
    type: "mcq",
    caseTitle: "Case #19: Timing of Baseline Shade",
    scenario: "A dental competition team prepares to measure baseline tooth color before bleaching.",
    question: "When should baseline tooth shade recording always be conducted?",
    options: [
      { id: "A", text: "After 30 minutes of rubber dam placement" },
      { id: "B", text: "At the start of the appointment before teeth dehydrate" },
      { id: "C", text: "Immediately after enamel microabrasion" },
      { id: "D", text: "After the first in-office peroxide cycle" }
    ],
    correctAnswer: "B",
    explanation: "Shade matching must always be performed at the very beginning of the appointment, before rubber dam isolation or air drying creates false dehydration whiteness (Sturdevant).",
    watsonClue: "Always record shade first thing, while teeth are naturally bathed in saliva.",
    reagentClue: "Protocol rule: Moisture equilibrium is essential for true baseline CIE L*a*b* values."
  },
  {
    id: "3.4",
    level: 3,
    type: "mcq",
    caseTitle: "Case #20: Fastest Responding Stains",
    scenario: "A dentist evaluates several patients seeking vital tooth whitening.",
    question: "Which type of tooth discoloration has the best and most rapid prognosis with vital bleaching?",
    options: [
      { id: "A", text: "Blue-grey cervical tetracycline banding" },
      { id: "B", text: "Fluorosis with deep brown pits" },
      { id: "C", text: "Yellow-brown aging and dietary stains" },
      { id: "D", text: "Amalgam tattoo discoloration" }
    ],
    correctAnswer: "C",
    explanation: "Yellowish-brown stains caused by aging and extrinsic chromogens respond most rapidly and favorably to peroxide bleaching (Sturdevant).",
    watsonClue: "Yellow-brown aging stains lighten in 1-2 weeks; grey or blue tetracycline takes months.",
    reagentClue: "Prognosis: Yellow/brown chromophores have accessible unsaturated bonds that oxidize quickly."
  },
  {
    id: "3.5",
    level: 3,
    type: "mcq",
    caseTitle: "Case #21: Standard Color Temperature",
    scenario: "A dental clinic equips operatory lights for precise clinical shade matching.",
    question: "What is the recommended color temperature for standardized dental shade matching?",
    options: [
      { id: "A", text: "1,500 Kelvin (candlelight)" },
      { id: "B", text: "3,000 Kelvin (warm incandescent)" },
      { id: "C", text: "5,500 Kelvin (standard daylight)" },
      { id: "D", text: "10,000 Kelvin (blue sky)" }
    ],
    correctAnswer: "C",
    explanation: "Standard daylight color temperature is 5,500K (CIE Standard Illuminant D55/D65 range), providing a balanced full-spectrum white light for shade evaluation (Sturdevant).",
    watsonClue: "Midday northern daylight balances red, green, and blue spectrums at approximately 5,500 Kelvin.",
    reagentClue: "Colorimetry: 5,500K provides a Color Rendering Index (CRI) > 90, minimizing color distortion."
  },
  {
    id: "3.6",
    level: 3,
    type: "mcq",
    caseTitle: "Case #22: Metamerism Optical Phenomenon",
    scenario: "A bleached tooth and a porcelain veneer match under clinic LED lights but look mismatched outdoors.",
    question: "What is this optical illusion of light-source-dependent color matching called?",
    options: [
      { id: "A", text: "Fluorescence" },
      { id: "B", text: "Opalescence" },
      { id: "C", text: "Translucency" },
      { id: "D", text: "Metamerism" }
    ],
    correctAnswer: "D",
    explanation: "Metamerism is the phenomenon where two objects match under one light source but appear distinctly different under another light source (Sturdevant).",
    watsonClue: "Colors matching under indoor fluorescent lighting but clashing in natural sunlight.",
    reagentClue: "Color science: Different spectral reflectance curves producing identical tristimulus values under a specific illuminant."
  },
  {
    id: "3.7",
    level: 3,
    type: "mcq",
    caseTitle: "Case #23: Existing Resin Restorations",
    scenario: "A patient with anterior composite fillings inquires about vital bleaching.",
    question: "How will vital peroxide bleaching affect the patient's existing composite restorations?",
    options: [
      { id: "A", text: "It will whiten the composite just like enamel" },
      { id: "B", text: "It will dissolve the composite completely" },
      { id: "C", text: "It will turn the composite black" },
      { id: "D", text: "It will not lighten the composite restorations" }
    ],
    correctAnswer: "D",
    explanation: "Bleaching agents do not lighten restorative materials (composite resin, ceramic). The patient must be informed that existing fillings will need replacement post-bleaching (Sturdevant).",
    watsonClue: "Peroxide oxidizes natural tooth organic matrix, not synthetic dimethacrylate resins.",
    reagentClue: "Clinical rule: Inform the patient before treatment that composite fillings will require shade replacement after bleaching."
  },
  {
    id: "3.8",
    level: 3,
    type: "mcq",
    caseTitle: "Case #24: Vita Hue 'A' Classification",
    scenario: "A clinician selects a Vita Classic shade guide tab in group 'A'.",
    question: "What color hue does group 'A' represent in the Vita Classical system?",
    options: [
      { id: "A", text: "Reddish-brownish" },
      { id: "B", text: "Reddish-yellowish" },
      { id: "C", text: "Greyish" },
      { id: "D", text: "Reddish-grey" }
    ],
    correctAnswer: "A",
    explanation: "In the Vita Classical guide: A = Reddish-brownish, B = Reddish-yellowish, C = Greyish, D = Reddish-grey (Sturdevant).",
    watsonClue: "A is reddish-brown, B is yellow, C is grey, D is reddish-grey.",
    reagentClue: "Vita Classical coding: Group A is the most prevalent natural tooth hue category (~70-80% of patients)."
  },

  // =========================================================================
  // LEVEL 4: THE SCOTLAND YARD PROTOCOLS (One-Word Typewritten Deductions)
  // User types 1-word answer. Evaluated case-insensitively with synonyms.
  // =========================================================================
  {
    id: "4.1",
    level: 4,
    type: "text",
    caseTitle: "Case #25: Cervical Barrier Material",
    scenario: "A protective barrier is placed in the access cavity before walking bleach.",
    question: "Which adhesive dental cement (abbreviation or name) is most recommended as the cervical barrier?",
    acceptedAnswers: ["gic", "glass ionomer", "glass ionomer cement", "rmgic"],
    displayAnswer: "Glass Ionomer Cement (GIC)",
    explanation: "Glass ionomer cement (GIC) chemically adheres to dentin and provides an impenetrable seal preventing peroxide leakage into the periodontal ligament (Grossman).",
    watsonClue: "Common 3-letter dental abbreviation for Glass Ionomer Cement.",
    reagentClue: "Material science: Polyalkenoate carboxyl groups cross-link with calcium ions in dentin."
  },
  {
    id: "4.2",
    level: 4,
    type: "text",
    caseTitle: "Case #26: Cervical Barrier Thickness",
    scenario: "A protective barrier over gutta-percha prevents peroxide leakage into the PDL.",
    question: "What is the recommended minimum thickness in millimeters for this cervical barrier?",
    acceptedAnswers: ["2", "2mm", "2 mm", "two", "two mm"],
    displayAnswer: "2 mm",
    explanation: "A minimum thickness of 2.0 mm of barrier material (GIC or composite) is required to prevent hydrogen peroxide diffusion into the periodontal ligament (Grossman, Sturdevant).",
    watsonClue: "Exactly two millimeters are required for an impermeable seal.",
    reagentClue: "Dimension: 2.0 mm prevents perhydroxyl diffusion across the coronal third."
  },
  {
    id: "4.3",
    level: 4,
    type: "text",
    caseTitle: "Case #27: Cervical Barrier Junction",
    scenario: "The cervical barrier profile must be aligned with external cervical landmarks.",
    question: "To which anatomical junction line (abbreviation or name) should the barrier be leveled?",
    acceptedAnswers: ["cej", "cementoenamel junction", "cemento enamel junction", "cemento-enamel junction"],
    displayAnswer: "CEJ (Cemento-Enamel Junction)",
    explanation: "The barrier should extend to or slightly coronal to the facial cemento-enamel junction (CEJ) to protect cervical dentinal tubules (Ingle).",
    watsonClue: "The 3-letter anatomical abbreviation where crown enamel meets root cementum.",
    reagentClue: "Anatomy: The barrier profile should track the scalloped CEJ line."
  },
  {
    id: "4.4",
    level: 4,
    type: "text",
    caseTitle: "Case #28: Walking Bleach Access Seal",
    scenario: "Walking bleach paste of sodium perborate is sealed in the pulp chamber.",
    question: "Which temporary restorative material is commonly used to hermetically seal the access cavity?",
    acceptedAnswers: ["cavit", "cavit g", "cavit-g", "irm", "intermediate restorative material"],
    displayAnswer: "Cavit (or IRM)",
    explanation: "Cavit (a premixed zinc oxide/calcium sulfate temporary filling) expands slightly upon setting, providing a reliable hermetic seal against saliva leakage (Grossman).",
    watsonClue: "A popular ready-to-use temporary filling material that begins with 'C'.",
    reagentClue: "Material: Cavit hygroscopic setting expansion prevents bacterial microleakage."
  },
  {
    id: "4.5",
    level: 4,
    type: "text",
    caseTitle: "Case #29: Gel Reservoir Space",
    scenario: "Custom nightguard trays require space on the labial surface for bleaching gel.",
    question: "What is the dental term for this gel-holding space created by block-out resin on the stone model?",
    acceptedAnswers: ["reservoir", "reservoirs", "gel reservoir"],
    displayAnswer: "Reservoir",
    explanation: "Block-out resin (0.5 mm thick) creates a reservoir on the labial surface of the tray to hold sufficient volume of bleaching gel against the enamel (Sturdevant).",
    watsonClue: "A holding chamber or pool for liquid or gel; begins with 'R'.",
    reagentClue: "Tray specification: 0.5 mm facial reservoir terminates 1 mm short of gingival margins."
  },
  {
    id: "4.6",
    level: 4,
    type: "text",
    caseTitle: "Case #30: Gingival Isolation Barrier",
    scenario: "35% hydrogen peroxide causes immediate chemical blanching if it touches mucosa.",
    question: "Which protective resin barrier is painted and light-cured along the gingival margin?",
    acceptedAnswers: ["liquid dam", "rubber dam", "gingival barrier", "resin barrier", "dam"],
    displayAnswer: "Liquid Dam (or Rubber Dam)",
    explanation: "A light-cured resin liquid dam (or rubber dam) is mandatory to isolate gingival papillae and prevent chemical peroxide burns (Sturdevant).",
    watsonClue: "A syringeable blue resin painted on gums and light-cured: 'liquid dam'.",
    reagentClue: "Isolation: Light-cured resin dam polymerizes to form an impermeable protective gasket."
  },
  {
    id: "4.7",
    level: 4,
    type: "text",
    caseTitle: "Case #31: Tray Border Contour",
    scenario: "Custom trays can be trimmed to avoid contacting the gingival tissue.",
    question: "What design adjective describes a tray border trimmed along the curved crest of the gum margins?",
    acceptedAnswers: ["scalloped", "scallop", "scalloping"],
    displayAnswer: "Scalloped",
    explanation: "Scalloping the tray 0.25 to 0.5 mm short of the gingival crest prevents bleaching gel from contacting and irritating the gingival tissues (Sturdevant).",
    watsonClue: "Traced like a seashell edge along the cervical margins: 'scalloped'.",
    reagentClue: "Tray design: Scalloped edges isolate gel strictly to enamel surfaces."
  },
  {
    id: "4.8",
    level: 4,
    type: "text",
    caseTitle: "Case #32: Abandoned Physical Element",
    scenario: "Historical bleaching protocols utilized heated heating instruments (thermocatalytic).",
    question: "Which physical energy source applied during thermocatalytic bleach caused cervical root resorption?",
    acceptedAnswers: ["heat", "thermal", "high temperature", "hot instrument"],
    displayAnswer: "Heat",
    explanation: "Application of heat accelerated peroxide penetration into the cervical periodontal ligament, triggering inflammatory external root resorption (Grossman).",
    watsonClue: "High temperature / thermal energy applied with a hot metal instrument.",
    reagentClue: "Etiology: Heat + 30% H2O2 denatures cervical cementum proteins."
  },

  // =========================================================================
  // LEVEL 5: FORENSIC PATHOLOGY & ADVERSE REACTIONS (MCQ, Balanced: 2 A, 2 B, 2 C, 2 D)
  // =========================================================================
  {
    id: "5.1",
    level: 5,
    type: "mcq",
    caseTitle: "Case #33: Cervical Resorption Risk Factor",
    scenario: "A patient develops invasive cervical root resorption 2 years after non-vital internal bleaching.",
    question: "Which clinical factor is most strongly associated with post-bleaching cervical resorption?",
    options: [
      { id: "A", text: "Absence of an adequate cervical barrier" },
      { id: "B", text: "Using 10% carbamide peroxide with a tray" },
      { id: "C", text: "Using a soft toothbrush" },
      { id: "D", text: "Applying fluoride gel" }
    ],
    correctAnswer: "A",
    explanation: "Failure to place an adequate cervical barrier allows hydrogen peroxide to seep through patent dentinal tubules into the cervical periodontal ligament, triggering osteoclastic root resorption (Grossman).",
    watsonClue: "Without a protective seal, caustic bleach escapes into the gum ligament at the tooth neck.",
    reagentClue: "Pathogenesis: H2O2 + bacterial penetration → Periodontal ligament inflammation → Osteoclastic clastic action."
  },
  {
    id: "5.2",
    level: 5,
    type: "mcq",
    caseTitle: "Case #34: Composite Bonding Delay",
    scenario: "A patient completes vital bleaching and requests immediate composite resin veneers.",
    question: "How long should composite resin bonding be delayed following vital tooth bleaching?",
    options: [
      { id: "A", text: "1 hour" },
      { id: "B", text: "7 to 14 days (1 to 2 weeks)" },
      { id: "C", text: "6 months" },
      { id: "D", text: "2 years" }
    ],
    correctAnswer: "B",
    explanation: "Bonding must be delayed 1 to 2 weeks (7-14 days) to allow residual oxygen to dissipate from enamel and allow shade stabilization (Sturdevant).",
    watsonClue: "Wait 1 to 2 weeks for trapped oxygen to clear and for the tooth color to stabilize.",
    reagentClue: "Dissipation kinetics: Free oxygen trapped in enamel hydroxyapatite dissipates over 7-14 days."
  },
  {
    id: "5.3",
    level: 5,
    type: "mcq",
    caseTitle: "Case #35: Inhibited Resin Polymerization",
    scenario: "Composite resin placed immediately after bleaching fails with poor bond strength.",
    question: "What is the biochemical reason for reduced resin bond strength immediately after bleaching?",
    options: [
      { id: "A", text: "Enamel hydroxyapatite turns into liquid" },
      { id: "B", text: "Residual oxygen inhibits composite resin polymerization" },
      { id: "C", text: "Dentinal tubules get blocked by calcium crystals" },
      { id: "D", text: "Collagen fibers disappear completely" }
    ],
    correctAnswer: "B",
    explanation: "Residual oxygen trapped in the enamel and dentin pores inhibits the free-radical polymerization of dental adhesive resins, causing premature bond failure (Sturdevant).",
    watsonClue: "Oxygen is a potent inhibitor of free-radical composite curing.",
    reagentClue: "Polymer chemistry: Peroxide-derived oxygen scavenges free radicals, preventing monomer cross-linking."
  },
  {
    id: "5.4",
    level: 5,
    type: "mcq",
    caseTitle: "Case #36: Sodium Ascorbate Reversal",
    scenario: "A patient requires urgent composite restoration immediately after in-office bleaching.",
    question: "Which antioxidant solution applied to enamel can immediately reverse oxygen inhibition?",
    options: [
      { id: "A", text: "37% Phosphoric acid" },
      { id: "B", text: "5% Sodium hypochlorite" },
      { id: "C", text: "10% Sodium ascorbate (Vitamin C)" },
      { id: "D", text: "Chlorhexidine gluconate" }
    ],
    correctAnswer: "C",
    explanation: "Application of 10% sodium ascorbate (Vitamin C) for 10 minutes neutralizes residual oxygen radicals in enamel, immediately restoring normal composite bond strength (Sturdevant).",
    watsonClue: "Vitamin C is a potent biological antioxidant that neutralizes oxygen free radicals.",
    reagentClue: "Redox reaction: Sodium ascorbate reduces reactive oxygen species: Ascorbate + [O] → Dehydroascorbate + H2O."
  },
  {
    id: "5.5",
    level: 5,
    type: "mcq",
    caseTitle: "Case #37: Hydrodynamic Sensitivity",
    scenario: "A vital bleaching patient complains of sharp, transient sensitivity to cold liquids.",
    question: "What is the primary mechanism of transient bleaching tooth sensitivity according to Brännström?",
    options: [
      { id: "A", text: "Bacterial invasion of the pulp" },
      { id: "B", text: "Microfracture of the alveolar bone" },
      { id: "C", text: "Rapid fluid movement in dentinal tubules" },
      { id: "D", text: "Irreversible pulp necrosis" }
    ],
    correctAnswer: "C",
    explanation: "Brännström's Hydrodynamic Theory states that peroxide penetration and osmotic gradients trigger rapid fluid movement in dentinal tubules, stimulating pulpal A-beta and A-delta nerve endings (Sturdevant).",
    watsonClue: "Fluid movement through microscopic dentin tubes stimulates sensitive pulp nerve fibers.",
    reagentClue: "Hydrodynamic: Peroxide osmotic pressure stimulates dentinal mechanoreceptors and nerve firing."
  },
  {
    id: "5.6",
    level: 5,
    type: "mcq",
    caseTitle: "Case #38: Potassium Nitrate Mechanism",
    scenario: "A patient uses a desensitizing toothpaste containing potassium nitrate during bleaching.",
    question: "How does potassium nitrate desensitize pulpal nerve fibers?",
    options: [
      { id: "A", text: "By dissolving outer enamel prisms" },
      { id: "B", text: "By killing oral microflora" },
      { id: "C", text: "By chemically etching dentin" },
      { id: "D", text: "By depolarizing nerve membranes and preventing repolarization" }
    ],
    correctAnswer: "D",
    explanation: "Potassium ions (K+) diffuse through dentinal tubules, elevating extracellular potassium around intradental nerves. This depolarizes the nerve membrane and blocks transmission of pain signals (Sturdevant).",
    watsonClue: "Potassium floods nerve membranes so they cannot fire pain impulses.",
    reagentClue: "Neurophysiology: Increased extracellular K+ prevents nerve repolarization, blocking action potentials."
  },
  {
    id: "5.7",
    level: 5,
    type: "mcq",
    caseTitle: "Case #39: Accidental Gingival Blanching",
    scenario: "During 35% in-office bleaching, peroxide accidentally touches the gingival margin, turning it chalky white.",
    question: "What is the immediate clinical first-aid management for this peroxide soft-tissue blanching?",
    options: [
      { id: "A", text: "Copious water flushing followed by topical Vitamin E oil application" },
      { id: "B", text: "Application of 37% phosphoric acid" },
      { id: "C", text: "Immediate surgical gingivectomy" },
      { id: "D", text: "Electrocautery of the white tissue" }
    ],
    correctAnswer: "A",
    explanation: "Immediate copious water rinsing removes residual peroxide. Topical application of Vitamin E (alpha-tocopherol) neutralizes tissue radicals and accelerates mucosal recovery (Sturdevant).",
    watsonClue: "Wash it immediately with lots of water and apply Vitamin E oil to soothe the burn.",
    reagentClue: "First aid: Flush with H2O immediately; Vitamin E antioxidant reverses oxidative epithelial blanching."
  },
  {
    id: "5.8",
    level: 5,
    type: "mcq",
    caseTitle: "Case #40: Fluoride Desensitization",
    scenario: "Neutral sodium fluoride gel is applied in a tray to alleviate post-bleaching sensitivity.",
    question: "How does topical fluoride reduce dentin sensitivity after bleaching?",
    options: [
      { id: "A", text: "By bleaching the pulp tissue directly" },
      { id: "B", text: "By dissolving the enamel smear plugs" },
      { id: "C", text: "By paralyzing facial muscles" },
      { id: "D", text: "By precipitating calcium fluoride crystals to occlude dentinal tubules" }
    ],
    correctAnswer: "D",
    explanation: "Fluoride ions react with ionized calcium in dentinal fluid to precipitate insoluble calcium fluoride (CaF2) crystals, physically plugging open dentinal tubules (Sturdevant).",
    watsonClue: "Fluoride forms microscopic mineral plugs that block the open dentin pores.",
    reagentClue: "Tubule occlusion: 2 F- + Ca2+ → CaF2 (Insoluble precipitate blocking tubular fluid flow)."
  },

  // =========================================================================
  // LEVEL 6: THE MORIARTY ENIGMA (MCQ, Balanced: 2 A, 2 B, 2 C, 2 D)
  // =========================================================================
  {
    id: "6.1",
    level: 6,
    type: "mcq",
    caseTitle: "Case #41: Croll's Microabrasion Compound",
    scenario: "A patient has superficial brown fluorosis stains confined to the outer 0.1 mm of enamel.",
    question: "Which chemical mixture is traditionally used in Croll's enamel microabrasion technique?",
    options: [
      { id: "A", text: "18% Hydrochloric acid mixed with pumice slurry" },
      { id: "B", text: "Concentrated sulfuric acid with glass beads" },
      { id: "C", text: "Bleach powder with hydrogen gas" },
      { id: "D", text: "Phosphoric acid with diamond paste" }
    ],
    correctAnswer: "A",
    explanation: "Croll's enamel microabrasion technique utilizes an 18% (or 6.6% in modern commercial pastes like Opalustre) hydrochloric acid slurry with pumice applied under slow rotation (Sturdevant).",
    watsonClue: "Hydrochloric acid and pumice slurry rubbed gently across the enamel surface.",
    reagentClue: "Microabrasion: Chemical dissolution (HCl) + mechanical abrasion (pumice) removes up to 100-200 µm of stained enamel."
  },
  {
    id: "6.2",
    level: 6,
    type: "mcq",
    caseTitle: "Case #42: White Spot Lesions During Bleach",
    scenario: "A patient has white developmental enamel hypocalcifications on anterior teeth.",
    question: "How do white spot lesions typically appear during the first several days of bleaching?",
    options: [
      { id: "A", text: "They vanish completely on Day 1" },
      { id: "B", text: "They become temporarily brighter and more noticeable before blending" },
      { id: "C", text: "They immediately turn dark brown" },
      { id: "D", text: "They dissolve into cavity pits" }
    ],
    correctAnswer: "B",
    explanation: "White spots lighten faster than normal background enamel initially, becoming more apparent in the first few days before the surrounding tooth catches up and blends (Sturdevant).",
    watsonClue: "Warn the patient: white spots stand out more at first, but blend in as the rest of the tooth whitens.",
    reagentClue: "Optical kinetics: Porous hypomineralized areas absorb peroxide faster, showing early exaggerated whiteness."
  },
  {
    id: "6.3",
    level: 6,
    type: "mcq",
    caseTitle: "Case #43: Tetracycline Bleach Duration",
    scenario: "A patient presents with moderate grey-brown tetracycline staining of the anterior dentition.",
    question: "How long does home carbamide peroxide bleaching typically take to improve tetracycline stains?",
    options: [
      { id: "A", text: "2 days" },
      { id: "B", text: "1 week only" },
      { id: "C", text: "2 to 6 months of extended treatment" },
      { id: "D", text: "5 continuous years" }
    ],
    correctAnswer: "C",
    explanation: "While normal stains respond in 1 to 3 weeks, tetracycline staining is deep in dentin and requires extended vital bleaching for 2 to 6 months (Sturdevant).",
    watsonClue: "Tetracycline binds deep inside dentin, requiring months rather than days of treatment.",
    reagentClue: "Clinical guideline: Extended nightguard vital bleaching (ENVB) protocol: 10% CP for 2-6 months."
  },
  {
    id: "6.4",
    level: 6,
    type: "mcq",
    caseTitle: "Case #44: Apparent Color Rebound",
    scenario: "Teeth appear slightly darker 1 to 2 weeks after in-office bleaching compared to the immediate post-op day.",
    question: "What is the primary cause of this early apparent shade rebound?",
    options: [
      { id: "A", text: "Severe secondary caries" },
      { id: "B", text: "Permanent loss of enamel thickness" },
      { id: "C", text: "Rehydration of enamel and loss of transient dehydration whiteness" },
      { id: "D", text: "Expansion of pulp chamber size" }
    ],
    correctAnswer: "C",
    explanation: "During in-office bleaching, teeth undergo significant dehydration. Rehydration over the subsequent 1 to 2 weeks restores normal translucency, causing a slight, expected shade rebound (Sturdevant).",
    watsonClue: "The immediate post-bleach shade looks extra white because teeth are parched; rehydration restores natural translucency.",
    reagentClue: "Refractive index: Saliva penetration re-establishes normal optical refraction, showing true final shade."
  },
  {
    id: "6.5",
    level: 6,
    type: "mcq",
    caseTitle: "Case #45: The 48-Hour White Diet",
    scenario: "A patient successfully completes chairside power bleaching.",
    question: "For how long should a 'white diet' (avoiding tea, coffee, wine, and turmeric) be maintained post-bleach?",
    options: [
      { id: "A", text: "48 hours (2 days)" },
      { id: "B", text: "6 months" },
      { id: "C", text: "1 year" },
      { id: "D", text: "10 minutes" }
    ],
    correctAnswer: "A",
    explanation: "Enamel pellicle is stripped during bleaching and takes 24 to 48 hours to reform completely. Staining foods must be avoided for at least 48 hours to prevent rapid restaining (Sturdevant).",
    watsonClue: "The protective surface pellicle needs 2 full days (48 hours) to fully rebuild.",
    reagentClue: "Pellicle reformation: Salivary glycoproteins require 24-48 hours to reform an intact protective barrier."
  },
  {
    id: "6.6",
    level: 6,
    type: "mcq",
    caseTitle: "Case #46: Calcific Canal Obliteration Treatment",
    scenario: "A vital tooth with calcific canal obliteration exhibits an aesthetically displeasing yellow hue.",
    question: "What is the recommended first-line conservative aesthetic approach for this vital tooth?",
    options: [
      { id: "A", text: "Immediate root canal treatment and crown preparation" },
      { id: "B", text: "External vital nightguard bleaching" },
      { id: "C", text: "Surgical apicoectomy" },
      { id: "D", text: "Extraction and immediate implant" }
    ],
    correctAnswer: "B",
    explanation: "External vital bleaching is the most conservative first-line treatment for calcific metamorphosis. Prophylactic endodontic treatment is contraindicated unless periapical pathology develops (Ingle).",
    watsonClue: "Do not drill into an obliterated canal if the tooth is asymptomatic; try external vital bleaching first.",
    reagentClue: "Conservative dentistry: Vital bleaching preserves tooth structure; RCT in obliterated canals carries high perforation risk."
  },
  {
    id: "6.7",
    level: 6,
    type: "mcq",
    caseTitle: "Case #47: Saturation Point & Over-Bleaching",
    scenario: "A patient insists on continuous aggressive bleaching well beyond the natural shade potential.",
    question: "What optical defect occurs when enamel is over-bleached past its saturation point?",
    options: [
      { id: "A", text: "Enamel turns metallic gold" },
      { id: "B", text: "Enamel turns fluorescent green" },
      { id: "C", text: "Enamel turns jet black" },
      { id: "D", text: "Enamel becomes chalky, lifeless, and unnaturally translucent-grey" }
    ],
    correctAnswer: "D",
    explanation: "Past the saturation point, peroxide begins degrading enamel organic matrix proteins, causing enamel to lose its natural brilliance and appear chalky, brittle, and translucent-grey (Sturdevant).",
    watsonClue: "Over-bleached teeth stop getting whiter; instead, they turn translucent grey and look lifeless.",
    reagentClue: "Matrix degradation: Excess oxidation breaks structural peptide backbones in enamel matrix."
  },
  {
    id: "6.8",
    level: 6,
    type: "mcq",
    caseTitle: "Case #48: Pregnancy & Elective Bleaching",
    scenario: "A healthy patient in her second trimester requests elective in-office power bleaching.",
    question: "What is the standard professional dental recommendation regarding elective bleaching during pregnancy?",
    options: [
      { id: "A", text: "Double the peroxide concentration" },
      { id: "B", text: "Bleach under general anesthesia" },
      { id: "C", text: "Bleach with ultraviolet light only" },
      { id: "D", text: "Postpone elective bleaching until after delivery and nursing" }
    ],
    correctAnswer: "D",
    explanation: "The ADA and professional guidelines recommend deferring all elective cosmetic bleaching procedures until after pregnancy and nursing, as a prudent safety measure (Sturdevant).",
    watsonClue: "Elective cosmetic procedures should always wait until after baby is born and nursing finishes.",
    reagentClue: "Safety protocol: ADA guideline: Defer elective cosmetic bleaching during pregnancy and lactation."
  }
];

// Configuration constants for scoring & lifelines
const QUIZ_CONFIG = {
  totalLevels: 6,
  questionsPerLevel: 8,
  totalQuestions: 48,
  pointsPerCorrect: 100,
  defaultOwnerPin: "221B",
  deductionPointsPerLifeline: {
    watson: 10,
    loupe: 15,
    reagent: 20
  },
  rankTitles: [
    { minScore: 4600, title: "The Master Detective (Sherlock Holmes Tier)", verdict: "Deductive Perfection. Scotland Yard bows to your peerless clinical acumen." },
    { minScore: 4000, title: "Scotland Yard Chief Inspector (Lestrade Tier)", verdict: "Forensically Outstanding. You solved the most complex bleaching anomalies with distinction." },
    { minScore: 3200, title: "Consulting Detective (Baker Street Associate)", verdict: "Strong Clinical Judgment. You navigated peroxide chemistry and vital techniques with expertise." },
    { minScore: 2400, title: "Dr. Watson's Clinical Colleague", verdict: "Promising Investigator. Sound medical foundations, but review cervical barriers and resorption pathology." },
    { minScore: 0, title: "Baker Street Cadet", verdict: "Case Unsolved. Review Sturdevant & Grossman before attempting the next forensic inquiry." }
  ]
};
