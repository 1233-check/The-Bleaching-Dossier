/**
 * 221B Baker Street - The Bleaching Dossier: Clinical Questions Database
 * 100% One-Word Answer Forensic Deduction Quiz
 * Calibrated for College Dental Fest: Clear, high-yield, and easy to deduce with friendly in-line clues.
 * Textbooks: Sturdevant (Operative Dentistry), Grossman (Endodontics), Neville (Oral Pathology)
 * Exactly 6 Levels × 8 Questions = 48 Clinical Cases
 * All 48 questions require single-word, number, or dental term answers.
 * Evaluated case-insensitively with flexible aliases and synonyms.
 */

const QUIZ_LEVELS = [
  {
    id: 1,
    title: "Level I: The Discoloration Dossier",
    subtitle: "Etiology, Pathology & Diagnosis of Tooth Stains",
    badge: "Apprentice Investigator",
    description: "Type one-word forensic deductions on discoloration etiology: pulpal trauma, tetracycline windows, fluorosis, and dentinal pigments.",
    icon: "fa-magnifying-glass"
  },
  {
    id: 2,
    title: "Level II: The Reagent Laboratory",
    subtitle: "Bleaching Chemistry, Radicals & Reaction Kinetics",
    badge: "Forensic Chemist",
    description: "Type one-word chemical deductions: Perhydroxyl radicals, urea ammonia buffering, polymer thickeners, and critical pH.",
    icon: "fa-flask-vial"
  },
  {
    id: 3,
    title: "Level III: Baker Street Diagnostics",
    subtitle: "Shade Selection, Colorimetry & Clinical Planning",
    badge: "Consulting Detective",
    description: "Type one-word diagnostic deductions: Vita value order, dehydration kinetics, color temperatures, and metamerism.",
    icon: "fa-compass-drafting"
  },
  {
    id: 4,
    title: "Level IV: The Scotland Yard Protocols",
    subtitle: "Clinical Procedures, Walking Bleach & Operative Barriers",
    badge: "Chief Inspector",
    description: "Type one-word procedural deductions: Cervical barrier materials, barrier dimensions, CEJ alignment, and tray fabrication.",
    icon: "fa-shield-halved"
  },
  {
    id: 5,
    title: "Level V: Forensic Pathology & Adverse Reactions",
    subtitle: "Complications, Root Resorption & Sensitivity Relief",
    badge: "Forensic Pathologist",
    description: "Type one-word pathological deductions: Cervical root resorption, bonding delay, sodium ascorbate, and nerve depolarization.",
    icon: "fa-skull"
  },
  {
    id: 6,
    title: "Level VI: The Moriarty Enigma",
    subtitle: "Master Scenarios, Enamel Microabrasion & Special Cases",
    badge: "Master Inquisitor",
    description: "Type one-word master deductions: Croll's microabrasion acid, white spot blending, extended tetracycline protocols, and pellicle diet.",
    icon: "fa-chess-king"
  }
];

const QUIZ_QUESTIONS = [
  // =========================================================================
  // LEVEL 1: THE DISCOLORATION DOSSIER (Etiology, Pathology & Diagnosis)
  // =========================================================================
  {
    id: "1.1",
    level: 1,
    caseTitle: "Case #01: Pulpal Necrosis Pigment",
    scenario: "A traumatized incisor turns dark grey 1 year after an untreated sports injury.",
    question: "Which dark iron compound formed from red blood cell breakdown stains the dentin? (Hint: Iron sulfide or FeS)",
    acceptedAnswers: ["iron sulfide", "iron sulphide", "fes", "hemosiderin", "sulfide", "iron"],
    displayAnswer: "Iron Sulfide (FeS)",
    explanation: "Erythrocyte breakdown inside necrotic pulp releases iron from hemoglobin, forming dark iron sulfide (FeS) that diffuses into dentinal tubules (Grossman).",
    watsonClue: "Think of an old bruise inside a tooth: red blood cells release iron, which forms a dark sulfide precipitate.",
    reagentClue: "Reaction: Hemoglobin degradation → Hemosiderin + Hydrogen Sulfide → Iron Sulfide (FeS, dark slate-grey)."
  },
  {
    id: "1.2",
    level: 1,
    caseTitle: "Case #02: Tetracycline Banding Window",
    scenario: "Systemic tetracycline binds to developing teeth during active crown mineralization.",
    question: "Up to what age in years does tetracycline ingestion stain permanent anterior crowns? (Hint: Age 8)",
    acceptedAnswers: ["8", "8 years", "eight", "8 yrs", "7 to 8", "7-8", "age 8"],
    displayAnswer: "8 years",
    explanation: "Crown calcification of permanent anterior teeth completes by approximately 7 to 8 years of age. Tetracycline chelates calcium during active calcification (Sturdevant).",
    watsonClue: "Permanent front tooth crowns finish calcifying around age 8.",
    reagentClue: "Chelation: Tetracycline + Calcium → Tetracycline-calcium orthophosphate complex locked in developing hydroxyapatite."
  },
  {
    id: "1.3",
    level: 1,
    caseTitle: "Case #03: Dean's Fluorosis Index",
    scenario: "A patient presents with widespread brown stains and deep confluent enamel surface pitting.",
    question: "Under Dean's Fluorosis Index, what is the classification for this severe pitting condition? (Hint: Severe)",
    acceptedAnswers: ["severe", "severe fluorosis"],
    displayAnswer: "Severe",
    explanation: "Under Dean's Fluorosis Index, presence of marked brown stains accompanied by confluent pits across the tooth surface defines Severe fluorosis (Neville).",
    watsonClue: "Pitting signifies structural loss of fragile, hypomineralized outer enamel—the highest grade of severity.",
    reagentClue: "Pathology: High fluoride during enamel maturation impairs amelogenin proteolysis, creating porous, fragile, pitted outer enamel."
  },
  {
    id: "1.4",
    level: 1,
    caseTitle: "Case #04: Fluorosis Target Cells",
    scenario: "Excessive fluoride disrupts protein removal during enamel matrix maturation.",
    question: "Which enamel-forming cells are directly damaged by excess systemic fluoride? (Hint: Ameloblasts)",
    acceptedAnswers: ["ameloblast", "ameloblasts"],
    displayAnswer: "Ameloblasts",
    explanation: "Excess fluoride disrupts ameloblast enzymatic function during the maturation stage, leaving retained amelogenin proteins and porous enamel (Sturdevant).",
    watsonClue: "Enamel is formed solely by ameloblasts; excess fluoride cripples their matrix-resorbing enzymes.",
    reagentClue: "Mechanism: Fluoride inhibits enamelysin (MMP-20) and kallikrein-4, preventing complete organic matrix degradation."
  },
  {
    id: "1.5",
    level: 1,
    caseTitle: "Case #05: Extrinsic vs. Intrinsic Stains",
    scenario: "Superficial dark brown stains from heavy black tea and coffee adhere to the enamel pellicle.",
    question: "What category of tooth staining is removable by regular scaling and polishing? (Hint: Extrinsic)",
    acceptedAnswers: ["extrinsic", "extrinsic stain", "extrinsic stains"],
    displayAnswer: "Extrinsic",
    explanation: "Tannins and chromogens adhering to the acquired salivary pellicle on the enamel surface are classified as extrinsic stains and are removable by prophylaxis (Sturdevant).",
    watsonClue: "Stains on the surface pellicle removable by scaling/polishing are extrinsic, not intrinsic.",
    reagentClue: "Pellicle interaction: Dietary polyphenols bond to salivary glycoproteins on the enamel surface."
  },
  {
    id: "1.6",
    level: 1,
    caseTitle: "Case #06: Retained Endodontic Material",
    scenario: "An endodontically treated incisor discolors due to filling material left coronal to the gingiva.",
    question: "Which common pink rubbery root canal filling material should never be left in the pulp chamber? (Hint: Gutta-percha or GP)",
    acceptedAnswers: ["gutta-percha", "guttapercha", "gutta percha", "gp"],
    displayAnswer: "Gutta-percha (GP)",
    explanation: "Failure to clean gutta-percha and root canal sealers below the cervical margin causes progressive coronal staining (Grossman).",
    watsonClue: "The classic pink rubbery core point used in obturation; commonly abbreviated as 'GP'.",
    reagentClue: "Etiology: Gutta-percha and sealers left coronal to the CEJ oxidize within coronal dentinal tubules."
  },
  {
    id: "1.7",
    level: 1,
    caseTitle: "Case #07: Calcific Metamorphosis",
    scenario: "A vital traumatized incisor gradually turns noticeably yellow with canal obliteration.",
    question: "Excessive production of which type of dentin causes this yellow hue in a vital tooth? (Hint: Tertiary or Secondary)",
    acceptedAnswers: ["tertiary", "tertiary dentin", "secondary", "secondary dentin", "reparative", "reparative dentin", "reactionary"],
    displayAnswer: "Tertiary dentin (or Reparative dentin)",
    explanation: "Trauma can stimulate odontoblasts to produce rapid tertiary dentin, obliterating the pulp canal space and giving the tooth an opaque, yellow appearance (Ingle).",
    watsonClue: "The tooth remains vital, but the pulp chamber is choked with thick, dense secondary or tertiary dentin.",
    reagentClue: "Histology: Canal calcification increases dentin thickness, reducing light transmission and reflecting a yellow shade."
  },
  {
    id: "1.8",
    level: 1,
    caseTitle: "Case #08: Hemoglobin Breakdown Pigment",
    scenario: "Pulpal hemorrhage releases erythrocyte pigments that diffuse into dentin tubules.",
    question: "Name the yellow-brown iron-storage pigment complex formed from blood breakdown. (Hint: Hemosiderin)",
    acceptedAnswers: ["hemosiderin", "haemosiderin", "hematoidin"],
    displayAnswer: "Hemosiderin",
    explanation: "Lysis of extravasated red blood cells releases hemoglobin, which converts into hemosiderin and hematoidin, imparting dark intrinsic stains (Neville).",
    watsonClue: "An insoluble brown iron-protein complex produced by macrophage breakdown of blood.",
    reagentClue: "Biochemistry: Ferritin aggregation → Hemosiderin iron granules trapped in tubular lumen."
  },

  // =========================================================================
  // LEVEL 2: THE REAGENT LABORATORY (Bleaching Chemistry & Radicals)
  // =========================================================================
  {
    id: "2.1",
    level: 2,
    caseTitle: "Case #09: Plaque pH Buffering Gas",
    scenario: "Carbamide peroxide decomposes into active hydrogen peroxide and urea.",
    question: "Which alkaline gas formed by urea breakdown raises local plaque pH above 7.0? (Hint: Ammonia or NH3)",
    acceptedAnswers: ["ammonia", "nh3"],
    displayAnswer: "Ammonia (NH3)",
    explanation: "Urea decomposes into ammonia (NH3) and carbon dioxide. Ammonia elevates plaque pH, neutralizing acidic byproducts and preventing enamel demineralization (Sturdevant).",
    watsonClue: "A pungent, common alkaline gas with the chemical formula NH3.",
    reagentClue: "Reaction: (NH2)2CO + H2O → 2 NH3 (Ammonia gas) + CO2."
  },
  {
    id: "2.2",
    level: 2,
    caseTitle: "Case #10: Primary Bleaching Radical",
    scenario: "Hydrogen peroxide dissociates into reactive oxygen species in alkaline media.",
    question: "Name the potent radical ion (HO2•) that serves as the primary active bleaching agent. (Hint: Perhydroxyl)",
    acceptedAnswers: ["perhydroxyl", "perhydroxyl radical", "ho2", "ho2 radical", "perhydroxyl ion"],
    displayAnswer: "Perhydroxyl radical (HO2•)",
    explanation: "In alkaline environments, hydrogen peroxide dissociates into perhydroxyl radicals (HO2•), which have significantly greater oxidation bleaching potential than hydroxyl radicals (Sturdevant).",
    watsonClue: "Begins with 'Per-': the perhydroxyl radical is formed when H2O2 loses a proton.",
    reagentClue: "Equilibrium: H2O2 + H2O ⇌ H3O+ + HO2• (Perhydroxyl radical)."
  },
  {
    id: "2.3",
    level: 2,
    caseTitle: "Case #11: Resin Bonding Inhibitor",
    scenario: "Free radicals lingering in enamel pores inhibit composite resin adhesive polymerization.",
    question: "Which chemical element's trapped free radicals inhibit composite resin bonding? (Hint: Oxygen or O2)",
    acceptedAnswers: ["oxygen", "o2", "residual oxygen"],
    displayAnswer: "Oxygen (O2)",
    explanation: "Residual oxygen free radicals trapped within enamel pores react with resin initiators, preventing normal free-radical polymerization of dental adhesives (Sturdevant).",
    watsonClue: "The vital gas we breathe; trapped in enamel, it inhibits composite curing.",
    reagentClue: "Free radical chemistry: Oxygen scavenges methacrylate radicals, terminating polymer chains."
  },
  {
    id: "2.4",
    level: 2,
    caseTitle: "Case #12: Bleaching Gel Thickener",
    scenario: "Commercial 10% carbamide peroxide gels contain a carboxypolymethylene thickening polymer.",
    question: "What is the commercial name of this polymer that thickens bleaching gels? (Hint: Carbopol)",
    acceptedAnswers: ["carbopol", "carboxypolymethylene", "carbomer"],
    displayAnswer: "Carbopol",
    explanation: "Carbopol (carboxypolymethylene polymer) thickens the gel, increases adhesion to tooth surfaces, and slows oxygen release over hours (Sturdevant).",
    watsonClue: "Starts with 'Carbo-': a familiar high-viscosity pharmaceutical gel base.",
    reagentClue: "Polymer structure: Cross-linked polyacrylic acid polymer known clinically as Carbopol."
  },
  {
    id: "2.5",
    level: 2,
    caseTitle: "Case #13: Safest Walking Bleach Liquid",
    scenario: "Sodium perborate powder is mixed into a paste for walking bleach in non-vital teeth.",
    question: "Which safest, non-irritating liquid is mixed with sodium perborate to prevent root resorption? (Hint: Water or Saline)",
    acceptedAnswers: ["water", "distilled water", "saline", "sterile water", "h2o"],
    displayAnswer: "Distilled Water (or Saline)",
    explanation: "Mixing sodium perborate with sterile distilled water or saline releases peroxide slowly and safely, markedly minimizing the risk of invasive cervical resorption (Grossman).",
    watsonClue: "Plain, sterile H2O is far safer than aggressive 30% hydrogen peroxide.",
    reagentClue: "Hydrolysis: NaBO3 + H2O → Sodium metaborate + controlled physiological H2O2."
  },
  {
    id: "2.6",
    level: 2,
    caseTitle: "Case #14: Chromophore Bond Cleavage",
    scenario: "Peroxide free radicals decolorize complex dark organic stain molecules.",
    question: "What type of chemical bond in chromophores is cleaved by oxidation to lighten color? (Hint: Double bond)",
    acceptedAnswers: ["double", "double bond", "double bonds", "conjugated double bond", "c=c"],
    displayAnswer: "Double bond",
    explanation: "Peroxide radicals oxidize and cleave conjugated carbon-carbon double bonds in chromophores, converting them into single-bonded, lighter compounds (Sturdevant).",
    watsonClue: "Organic color stems from 'double' bonds; oxidation breaks them into single bonds.",
    reagentClue: "Bond cleavage: Conjugated -C=C- double bond systems absorb visible light; breaking them eliminates color."
  },
  {
    id: "2.7",
    level: 2,
    caseTitle: "Case #15: Critical Enamel pH",
    scenario: "Bleaching gels must remain above the threshold for enamel hydroxyapatite dissolution.",
    question: "What is the critical numerical pH below which enamel demineralization begins? (Hint: 5.5)",
    acceptedAnswers: ["5.5", "5.5 ph", "ph 5.5", "five point five"],
    displayAnswer: "5.5",
    explanation: "The critical pH of dental enamel is 5.5. Bleaching products formulated below pH 5.5 cause superficial enamel etching and prism demineralization (Sturdevant).",
    watsonClue: "A classic dental milestone: five point five.",
    reagentClue: "Solubility product: Hydroxyapatite dissolution begins when oral fluid pH drops below 5.5."
  },
  {
    id: "2.8",
    level: 2,
    caseTitle: "Case #16: Chairside Power Bleach Agent",
    scenario: "In-office vital bleaching protocols utilize high concentrations (35%) of an oxidizing agent.",
    question: "Which chemical peroxide compound is applied at 35% concentration for in-office bleaching? (Hint: Hydrogen peroxide or H2O2)",
    acceptedAnswers: ["hydrogen peroxide", "h2o2"],
    displayAnswer: "Hydrogen peroxide (H2O2)",
    explanation: "In-office chairside power bleaching uses 35% to 38% hydrogen peroxide (H2O2) for rapid, supervised aesthetic oxidation (Sturdevant).",
    watsonClue: "The parent peroxide compound containing two hydrogen and two oxygen atoms.",
    reagentClue: "Molecular formula: H2O2 (MW = 34.01 g/mol), applied at 35% w/w."
  },

  // =========================================================================
  // LEVEL 3: BAKER STREET DIAGNOSTICS (Shade Selection & Colorimetry)
  // =========================================================================
  {
    id: "3.1",
    level: 3,
    caseTitle: "Case #17: Lightest Vita Classic Tab",
    scenario: "A clinician organizes the Vita Classical shade guide in order of decreasing lightness (value).",
    question: "Which shade tab represents the highest value (lightest shade) on the Vita Classic guide? (Hint: B1)",
    acceptedAnswers: ["b1", "tab b1", "shade b1"],
    displayAnswer: "B1",
    explanation: "In value-ordered Vita Classical guides, B1 is the highest value (brightest/lightest), whereas C4 is the lowest value (darkest) (Sturdevant).",
    watsonClue: "The classic gold standard benchmark for the whitest natural shade tab.",
    reagentClue: "Vita Value Scale: B1 > A1 > B2 > D2 > A2 > C1 > C2 > D4 > A3 > D3 > B3 > A3.5 > B4 > C3 > A4 > C4."
  },
  {
    id: "3.2",
    level: 3,
    caseTitle: "Case #18: Dehydration Optical Effect",
    scenario: "Dry teeth under isolation trap air in enamel pores, increasing diffuse light reflection.",
    question: "Does moisture loss make the tooth appear artificially darker or lighter? (Hint: Lighter or Whiter)",
    acceptedAnswers: ["lighter", "whiter", "light", "white", "more opaque", "opaque"],
    displayAnswer: "Lighter (or Whiter)",
    explanation: "Loss of moisture replaces water (refractive index 1.33) in enamel pores with air (refractive index 1.00), increasing light scatter and making teeth look artificially white (Sturdevant).",
    watsonClue: "Dry teeth look chalky and lighter than they really are due to air in the enamel pores.",
    reagentClue: "Optics: Air in enamel pores (n=1.0) vs enamel prism (n=1.62) increases refractive discrepancy, causing diffuse reflection."
  },
  {
    id: "3.3",
    level: 3,
    caseTitle: "Case #19: Baseline Shade Timing",
    scenario: "To avoid false dehydration values, baseline tooth shade must be recorded carefully.",
    question: "Should baseline shade matching be performed before or after dental dam isolation? (Hint: Before)",
    acceptedAnswers: ["before", "before isolation", "prior"],
    displayAnswer: "Before isolation",
    explanation: "Shade matching must always be performed at the very beginning of the appointment, before rubber dam isolation or air drying creates false dehydration whiteness (Sturdevant).",
    watsonClue: "Always record shade first thing, while teeth are naturally bathed in saliva.",
    reagentClue: "Protocol rule: Moisture equilibrium is essential for true baseline CIE L*a*b* values."
  },
  {
    id: "3.4",
    level: 3,
    caseTitle: "Case #20: Rapid Responding Stain Color",
    scenario: "Different discoloration hues respond to vital bleaching at vastly different rates.",
    question: "Which natural tooth discoloration hue responds faster to bleaching: yellow or grey? (Hint: Yellow)",
    acceptedAnswers: ["yellow", "yellowish", "yellow-brown", "yellow brown", "brown"],
    displayAnswer: "Yellow (or Yellow-Brown)",
    explanation: "Yellowish-brown stains caused by aging and extrinsic chromogens respond most rapidly and favorably to peroxide bleaching, whereas grey/blue bands take months (Sturdevant).",
    watsonClue: "Yellow-brown aging stains lighten in 1-2 weeks; grey or blue tetracycline takes months.",
    reagentClue: "Prognosis: Yellow/brown chromophores have accessible unsaturated bonds that oxidize quickly."
  },
  {
    id: "3.5",
    level: 3,
    caseTitle: "Case #21: Standard Daylight Kelvin",
    scenario: "Operatory lights must provide a balanced full-spectrum color temperature for shade matching.",
    question: "What standard color temperature (in Kelvin) represents balanced midday daylight? (Hint: 5500 K)",
    acceptedAnswers: ["5500", "5500k", "5500 k", "6500", "6500k", "5000", "5000k"],
    displayAnswer: "5,500 Kelvin (D55/D65)",
    explanation: "Standard daylight color temperature is 5,500K (CIE Standard Illuminant D55/D65 range), providing a balanced full-spectrum white light for shade evaluation (Sturdevant).",
    watsonClue: "Midday northern daylight balances red, green, and blue spectrums at approximately 5,500 Kelvin.",
    reagentClue: "Colorimetry: 5,500K provides a Color Rendering Index (CRI) > 90, minimizing color distortion."
  },
  {
    id: "3.6",
    level: 3,
    caseTitle: "Case #22: Light-Dependent Color Mismatch",
    scenario: "A restoration matches the natural tooth under clinic lights but clashes outdoors in sunlight.",
    question: "What is this optical color phenomenon called? (Hint: Metamerism)",
    acceptedAnswers: ["metamerism", "metameric"],
    displayAnswer: "Metamerism",
    explanation: "Metamerism is the phenomenon where two objects match under one light source but appear distinctly different under another light source (Sturdevant).",
    watsonClue: "Colors matching under indoor fluorescent lighting but clashing in natural sunlight.",
    reagentClue: "Color science: Different spectral reflectance curves producing identical tristimulus values under a specific illuminant."
  },
  {
    id: "3.7",
    level: 3,
    caseTitle: "Case #23: Existing Resin Restorations",
    scenario: "A patient with multiple composite veneers asks for full-mouth vital peroxide bleaching.",
    question: "Will peroxide bleaching lighten existing synthetic composite resin restorations: yes or no? (Hint: No)",
    acceptedAnswers: ["no", "never", "not", "will not"],
    displayAnswer: "No (Peroxides do not lighten restorative resins)",
    explanation: "Bleaching agents do not lighten restorative materials (composite resin, ceramic). The patient must be informed that existing fillings will need replacement post-bleaching (Sturdevant).",
    watsonClue: "Peroxide oxidizes natural tooth organic matrix, not synthetic dimethacrylate resins.",
    reagentClue: "Clinical rule: Inform the patient before treatment that composite fillings will require shade replacement after bleaching."
  },
  {
    id: "3.8",
    level: 3,
    caseTitle: "Case #24: Vita Hue 'B' Category",
    scenario: "The Vita Classical shade guide divides tooth colors into four hue categories: A, B, C, and D.",
    question: "Which primary color hue does Group 'B' represent in the Vita system: yellow or grey? (Hint: Yellow)",
    acceptedAnswers: ["yellow", "yellowish", "reddish-yellow", "reddish yellow"],
    displayAnswer: "Yellow (Reddish-yellow)",
    explanation: "In the Vita Classical guide: A = Reddish-brownish, B = Reddish-yellowish, C = Greyish, D = Reddish-grey (Sturdevant).",
    watsonClue: "A is reddish-brown, B is yellow, C is grey, D is reddish-grey.",
    reagentClue: "Vita Classical coding: Group B tabs represent natural yellow tooth tones."
  },

  // =========================================================================
  // LEVEL 4: THE SCOTLAND YARD PROTOCOLS (Clinical Procedures & Techniques)
  // =========================================================================
  {
    id: "4.1",
    level: 4,
    caseTitle: "Case #25: Cervical Barrier Material",
    scenario: "An adhesive material is placed over gutta-percha before walking bleach.",
    question: "Which dental cement (3-letter abbreviation or name) is most recommended as the cervical barrier? (Hint: GIC)",
    acceptedAnswers: ["gic", "glass ionomer", "glass ionomer cement", "rmgic"],
    displayAnswer: "Glass Ionomer Cement (GIC)",
    explanation: "Glass ionomer cement (GIC) chemically adheres to dentin and provides an impenetrable seal preventing peroxide leakage into the periodontal ligament (Grossman).",
    watsonClue: "Common 3-letter dental abbreviation for Glass Ionomer Cement.",
    reagentClue: "Material science: Polyalkenoate carboxyl groups cross-link with calcium ions in dentin."
  },
  {
    id: "4.2",
    level: 4,
    caseTitle: "Case #26: Cervical Barrier Thickness",
    scenario: "A protective barrier over gutta-percha prevents peroxide leakage into the PDL.",
    question: "What is the recommended minimum thickness in millimeters for this cervical barrier? (Hint: 2 mm)",
    acceptedAnswers: ["2", "2mm", "2 mm", "two", "two mm"],
    displayAnswer: "2 mm",
    explanation: "A minimum thickness of 2.0 mm of barrier material (GIC or composite) is required to prevent hydrogen peroxide diffusion into the periodontal ligament (Grossman, Sturdevant).",
    watsonClue: "Exactly two millimeters are required for an impermeable seal.",
    reagentClue: "Dimension: 2.0 mm prevents perhydroxyl diffusion across the coronal third."
  },
  {
    id: "4.3",
    level: 4,
    caseTitle: "Case #27: Cervical Barrier Junction",
    scenario: "The cervical barrier profile must be aligned with external cervical landmarks.",
    question: "To which anatomical junction line (3-letter abbreviation or name) should the barrier be leveled? (Hint: CEJ)",
    acceptedAnswers: ["cej", "cementoenamel junction", "cemento enamel junction", "cemento-enamel junction"],
    displayAnswer: "CEJ (Cemento-Enamel Junction)",
    explanation: "The barrier should extend to or slightly coronal to the facial cemento-enamel junction (CEJ) to protect cervical dentinal tubules (Ingle).",
    watsonClue: "The 3-letter anatomical abbreviation where crown enamel meets root cementum.",
    reagentClue: "Anatomy: The barrier profile should track the scalloped CEJ line."
  },
  {
    id: "4.4",
    level: 4,
    caseTitle: "Case #28: Walking Bleach Access Seal",
    scenario: "Sodium perborate paste is sealed inside the pulp chamber during walking bleach.",
    question: "Which premixed temporary restorative material is commonly used to seal the access cavity? (Hint: Cavit)",
    acceptedAnswers: ["cavit", "cavit g", "cavit-g", "irm", "intermediate restorative material"],
    displayAnswer: "Cavit (or IRM)",
    explanation: "Cavit (a premixed zinc oxide/calcium sulfate temporary filling) expands slightly upon setting, providing a reliable hermetic seal against saliva leakage (Grossman).",
    watsonClue: "A popular ready-to-use temporary filling material that begins with 'C'.",
    reagentClue: "Material: Cavit hygroscopic setting expansion prevents bacterial microleakage."
  },
  {
    id: "4.5",
    level: 4,
    caseTitle: "Case #29: Gel Reservoir Space",
    scenario: "Custom trays require space on the labial surface to hold sufficient bleaching gel.",
    question: "What is the term for this gel-holding pocket created by block-out resin on stone models? (Hint: Reservoir)",
    acceptedAnswers: ["reservoir", "reservoirs", "gel reservoir"],
    displayAnswer: "Reservoir",
    explanation: "Block-out resin (0.5 mm thick) creates a reservoir on the labial surface of the tray to hold sufficient volume of bleaching gel against the enamel (Sturdevant).",
    watsonClue: "A holding chamber or pool for liquid or gel; begins with 'R'.",
    reagentClue: "Tray specification: 0.5 mm facial reservoir terminates 1 mm short of gingival margins."
  },
  {
    id: "4.6",
    level: 4,
    caseTitle: "Case #30: Gingival Isolation Barrier",
    scenario: "35% hydrogen peroxide causes immediate chemical blanching if it contacts soft tissue.",
    question: "Which protective barrier is light-cured along the gingival margin during power bleach? (Hint: Liquid dam or Rubber dam)",
    acceptedAnswers: ["liquid dam", "rubber dam", "gingival barrier", "resin barrier", "dam"],
    displayAnswer: "Liquid Dam (or Rubber Dam)",
    explanation: "A light-cured resin liquid dam (or rubber dam) is mandatory to isolate gingival papillae and prevent chemical peroxide burns (Sturdevant).",
    watsonClue: "A syringeable blue resin painted on gums and light-cured: 'liquid dam'.",
    reagentClue: "Isolation: Light-cured resin dam polymerizes to form an impermeable protective gasket."
  },
  {
    id: "4.7",
    level: 4,
    caseTitle: "Case #31: Scalloped Tray Border",
    scenario: "A custom tray border is trimmed to follow the curved crest of the gum margins.",
    question: "What architectural adjective describes this wavy, gumline-following tray contour? (Hint: Scalloped)",
    acceptedAnswers: ["scalloped", "scallop", "scalloping"],
    displayAnswer: "Scalloped",
    explanation: "Scalloping the tray 0.25 to 0.5 mm short of the gingival crest prevents bleaching gel from contacting and irritating the gingival tissues (Sturdevant).",
    watsonClue: "Traced like a seashell edge along the cervical margins: 'scalloped'.",
    reagentClue: "Tray design: Scalloped edges isolate gel strictly to enamel surfaces."
  },
  {
    id: "4.8",
    level: 4,
    caseTitle: "Case #32: Abandoned Physical Energy",
    scenario: "Historical bleaching protocols utilized heated heating instruments (thermocatalytic).",
    question: "Which physical energy source applied during thermocatalytic bleach caused cervical root resorption? (Hint: Heat)",
    acceptedAnswers: ["heat", "thermal", "high temperature", "temperature", "hot instrument"],
    displayAnswer: "Heat",
    explanation: "Application of heat accelerated peroxide penetration into the cervical periodontal ligament, triggering inflammatory external root resorption (Grossman).",
    watsonClue: "High temperature / thermal energy applied with a hot metal instrument.",
    reagentClue: "Etiology: Heat + 30% H2O2 denatures cervical cementum proteins."
  },

  // =========================================================================
  // LEVEL 5: FORENSIC PATHOLOGY & ADVERSE REACTIONS (Complications & Relief)
  // =========================================================================
  {
    id: "5.1",
    level: 5,
    caseTitle: "Case #33: Cervical Resorption Hazard",
    scenario: "Peroxide leaking through dentinal tubules into the cervical periodontal ligament activates clastic cells.",
    question: "Which destructive post-bleaching periodontal complication can lead to tooth loss? (Hint: Resorption)",
    acceptedAnswers: ["resorption", "cervical resorption", "root resorption", "external resorption", "invasive cervical resorption", "icr"],
    displayAnswer: "External Cervical Root Resorption",
    explanation: "Failure to place an adequate cervical barrier allows hydrogen peroxide to seep through patent dentinal tubules into the cervical periodontal ligament, triggering osteoclastic root resorption (Grossman).",
    watsonClue: "Without a protective seal, caustic bleach escapes into the gum ligament at the tooth neck.",
    reagentClue: "Pathogenesis: H2O2 + bacterial penetration → Periodontal ligament inflammation → Osteoclastic clastic action."
  },
  {
    id: "5.2",
    level: 5,
    caseTitle: "Case #34: Composite Bonding Delay",
    scenario: "Residual oxygen must dissipate from enamel before composite resin bonding is performed.",
    question: "How many weeks should composite resin bonding be delayed after vital bleaching? (Hint: 1 to 2 weeks)",
    acceptedAnswers: ["1", "1 week", "one", "one week", "1 to 2", "1-2", "2", "two", "7 to 14 days", "7-14 days", "2 weeks"],
    displayAnswer: "1 to 2 weeks (7-14 days)",
    explanation: "Bonding must be delayed 1 to 2 weeks (7-14 days) to allow residual oxygen to dissipate from enamel and allow shade stabilization (Sturdevant).",
    watsonClue: "Wait 1 to 2 weeks for trapped oxygen to clear and for the tooth color to stabilize.",
    reagentClue: "Dissipation kinetics: Free oxygen trapped in enamel hydroxyapatite dissipates over 7-14 days."
  },
  {
    id: "5.3",
    level: 5,
    caseTitle: "Case #35: Oxygen Reversal Antioxidant",
    scenario: "A patient requires emergency composite restoration immediately after in-office bleaching.",
    question: "Which antioxidant vitamin salt (10% solution) neutralizes oxygen to restore bond strength? (Hint: Sodium ascorbate or Vitamin C)",
    acceptedAnswers: ["sodium ascorbate", "ascorbate", "vitamin c", "ascorbic acid"],
    displayAnswer: "Sodium Ascorbate (Vitamin C)",
    explanation: "Application of 10% sodium ascorbate (Vitamin C) for 10 minutes neutralizes residual oxygen radicals in enamel, immediately restoring normal composite bond strength (Sturdevant).",
    watsonClue: "Vitamin C is a potent biological antioxidant that neutralizes oxygen free radicals.",
    reagentClue: "Redox reaction: Sodium ascorbate reduces reactive oxygen species: Ascorbate + [O] → Dehydroascorbate + H2O."
  },
  {
    id: "5.4",
    level: 5,
    caseTitle: "Case #36: Bleaching Sensitivity Theory",
    scenario: "Peroxide osmotic gradients cause rapid fluid movement through dentinal tubules, stimulating nerves.",
    question: "Which famous hydrodynamic theory of dentin sensitivity explains this nerve firing? (Hint: Brännström or Hydrodynamic)",
    acceptedAnswers: ["brannstrom", "brannstrom's", "hydrodynamic", "hydrodynamic theory"],
    displayAnswer: "Brännström's Hydrodynamic Theory",
    explanation: "Brännström's Hydrodynamic Theory states that peroxide penetration and osmotic gradients trigger rapid fluid movement in dentinal tubules, stimulating pulpal A-beta and A-delta nerve endings (Sturdevant).",
    watsonClue: "Fluid movement through microscopic dentin tubes stimulates sensitive pulp nerve fibers.",
    reagentClue: "Hydrodynamic: Peroxide osmotic pressure stimulates dentinal mechanoreceptors and nerve firing."
  },
  {
    id: "5.5",
    level: 5,
    caseTitle: "Case #37: Nerve Desensitizing Ion",
    scenario: "A desensitizing salt diffuses through tubules to depolarize pulpal sensory nerve fibers.",
    question: "Which chemical compound (commonly paired with nitrate) desensitizes nerves by preventing repolarization? (Hint: Potassium)",
    acceptedAnswers: ["potassium", "potassium nitrate", "kno3"],
    displayAnswer: "Potassium nitrate (KNO3)",
    explanation: "Potassium ions (K+) diffuse through dentinal tubules, elevating extracellular potassium around intradental nerves. This depolarizes the nerve membrane and blocks transmission of pain signals (Sturdevant).",
    watsonClue: "Potassium floods nerve membranes so they cannot fire pain impulses.",
    reagentClue: "Neurophysiology: Increased extracellular K+ prevents nerve repolarization, blocking action potentials."
  },
  {
    id: "5.6",
    level: 5,
    caseTitle: "Case #38: Soft Tissue Blanching First Aid",
    scenario: "High-concentration 35% peroxide accidentally touches gingiva, turning it chalky white.",
    question: "Which topical antioxidant oil is applied immediately after water flushing to soothe the chemical burn? (Hint: Vitamin E)",
    acceptedAnswers: ["vitamin e", "vit e", "tocopherol", "alpha-tocopherol"],
    displayAnswer: "Vitamin E oil",
    explanation: "Immediate copious water rinsing removes residual peroxide. Topical application of Vitamin E (alpha-tocopherol) neutralizes tissue radicals and accelerates mucosal recovery (Sturdevant).",
    watsonClue: "Wash it immediately with lots of water and apply Vitamin E oil to soothe the burn.",
    reagentClue: "First aid: Flush with H2O immediately; Vitamin E antioxidant reverses oxidative epithelial blanching."
  },
  {
    id: "5.7",
    level: 5,
    caseTitle: "Case #39: Tubule-Occluding Mineral Agent",
    scenario: "Topical gels precipitate insoluble crystals to physically block open dentinal tubules.",
    question: "Which mineral ion precipitates calcium fluoride crystals to block fluid flow in sensitive dentin? (Hint: Fluoride)",
    acceptedAnswers: ["fluoride", "sodium fluoride", "naf", "f-"],
    displayAnswer: "Fluoride",
    explanation: "Fluoride ions react with ionized calcium in dentinal fluid to precipitate insoluble calcium fluoride (CaF2) crystals, physically plugging open dentinal tubules (Sturdevant).",
    watsonClue: "Fluoride forms microscopic mineral plugs that block the open dentin pores.",
    reagentClue: "Tubule occlusion: 2 F- + Ca2+ → CaF2 (Insoluble precipitate blocking tubular fluid flow)."
  },
  {
    id: "5.8",
    level: 5,
    caseTitle: "Case #40: Location of Bond Inhibition",
    scenario: "Composite resin placed immediately over bleached enamel debonds prematurely.",
    question: "Does trapped oxygen inhibit composite curing at the enamel surface or inside the pulp? (Hint: Enamel surface)",
    acceptedAnswers: ["surface", "enamel", "enamel surface", "interface"],
    displayAnswer: "Enamel surface (Adhesive interface)",
    explanation: "Trapped oxygen at the superficial enamel surface and hybrid layer prevents complete resin monomer polymerization, causing adhesive bond failure (Sturdevant).",
    watsonClue: "Oxygen directly poisons curing right at the enamel bonding interface.",
    reagentClue: "Surface chemistry: Oxygen inhibition layer prevents polymer cross-linking."
  },

  // =========================================================================
  // LEVEL 6: THE MORIARTY ENIGMA (Master Scenarios & Post-Bleach Care)
  // =========================================================================
  {
    id: "6.1",
    level: 6,
    caseTitle: "Case #41: Microabrasion Acid",
    scenario: "Croll's enamel microabrasion technique removes superficial brown fluorosis stains.",
    question: "Which mineral acid (HCl) is mixed with pumice slurry in Croll's microabrasion compound? (Hint: Hydrochloric acid or HCl)",
    acceptedAnswers: ["hydrochloric", "hydrochloric acid", "hcl"],
    displayAnswer: "Hydrochloric acid (HCl)",
    explanation: "Croll's enamel microabrasion technique utilizes an 18% (or 6.6% in modern commercial pastes like Opalustre) hydrochloric acid slurry with pumice applied under slow rotation (Sturdevant).",
    watsonClue: "Hydrochloric acid and pumice slurry rubbed gently across the enamel surface.",
    reagentClue: "Microabrasion: Chemical dissolution (HCl) + mechanical abrasion (pumice) removes up to 100-200 µm of stained enamel."
  },
  {
    id: "6.2",
    level: 6,
    caseTitle: "Case #42: White Spot Lesion Initial Response",
    scenario: "Developmental hypocalcified white spots absorb bleaching gel faster than surrounding enamel.",
    question: "During the first few days of bleaching, do white spots initially look more visible or less visible? (Hint: More)",
    acceptedAnswers: ["more", "more visible", "more noticeable", "brighter", "whiter"],
    displayAnswer: "More visible (temporarily, before blending)",
    explanation: "White spots lighten faster than normal background enamel initially, becoming more apparent in the first few days before the surrounding tooth catches up and blends (Sturdevant).",
    watsonClue: "Warn the patient: white spots stand out more at first, but blend in as the rest of the tooth whitens.",
    reagentClue: "Optical kinetics: Porous hypomineralized areas absorb peroxide faster, showing early exaggerated whiteness."
  },
  {
    id: "6.3",
    level: 6,
    caseTitle: "Case #43: Severe Tetracycline Bleach Timeframe",
    scenario: "Deep dentinal tetracycline chelation bands require extended nightguard vital bleaching.",
    question: "Does severe tetracycline bleaching typically take days, weeks, or months to show results? (Hint: Months)",
    acceptedAnswers: ["months", "month", "2 to 6 months", "several months"],
    displayAnswer: "Months (typically 2 to 6 months)",
    explanation: "While normal stains respond in 1 to 3 weeks, tetracycline staining is deep in dentin and requires extended vital bleaching for 2 to 6 months (Sturdevant).",
    watsonClue: "Tetracycline binds deep inside dentin, requiring months rather than days of treatment.",
    reagentClue: "Clinical guideline: Extended nightguard vital bleaching (ENVB) protocol: 10% CP for 2-6 months."
  },
  {
    id: "6.4",
    level: 6,
    caseTitle: "Case #44: Post-Bleaching White Diet Duration",
    scenario: "The protective acquired enamel pellicle is stripped during bleaching and takes time to reform.",
    question: "For how many hours (minimum) must a staining-free 'white diet' be strictly observed? (Hint: 48 hours)",
    acceptedAnswers: ["48", "48 hours", "48 hrs", "forty eight", "24 to 48", "24-48", "48h"],
    displayAnswer: "48 hours (2 days)",
    explanation: "Enamel pellicle is stripped during bleaching and takes 24 to 48 hours to reform completely. Staining foods must be avoided for at least 48 hours to prevent rapid restaining (Sturdevant).",
    watsonClue: "The protective surface pellicle needs 2 full days (48 hours) to fully rebuild.",
    reagentClue: "Pellicle reformation: Salivary glycoproteins require 24-48 hours to reform an intact protective barrier."
  },
  {
    id: "6.5",
    level: 6,
    caseTitle: "Case #45: Rehydration Shade Rebound Cause",
    scenario: "Teeth appear slightly darker 2 weeks after in-office bleach compared to Day 1.",
    question: "Absorption of which natural oral fluid re-establishes normal enamel translucency? (Hint: Saliva)",
    acceptedAnswers: ["saliva", "water", "oral fluid", "salivary fluid"],
    displayAnswer: "Saliva (Rehydration)",
    explanation: "During in-office bleaching, teeth undergo significant dehydration. Rehydration over the subsequent 1 to 2 weeks restores normal translucency, causing a slight, expected shade rebound (Sturdevant).",
    watsonClue: "The immediate post-bleach shade looks extra white because teeth are parched; rehydration restores natural translucency.",
    reagentClue: "Refractive index: Saliva penetration re-establishes normal optical refraction, showing true final shade."
  },
  {
    id: "6.6",
    level: 6,
    caseTitle: "Case #46: First-Line Calcific Metamorphosis Care",
    scenario: "A vital anterior tooth with calcific canal obliteration exhibits an unaesthetic dark yellow hue.",
    question: "What conservative non-invasive aesthetic treatment should be attempted before cutting a crown? (Hint: Bleaching)",
    acceptedAnswers: ["bleaching", "bleach", "vital bleaching", "external bleaching", "whitening"],
    displayAnswer: "Vital Bleaching (External whitening)",
    explanation: "External vital bleaching is the most conservative first-line treatment for calcific metamorphosis. Prophylactic endodontic treatment is contraindicated unless periapical pathology develops (Ingle).",
    watsonClue: "Do not drill into an obliterated canal if the tooth is asymptomatic; try external vital bleaching first.",
    reagentClue: "Conservative dentistry: Vital bleaching preserves tooth structure; RCT in obliterated canals carries high perforation risk."
  },
  {
    id: "6.7",
    level: 6,
    caseTitle: "Case #47: Over-Bleaching Hue Appearance",
    scenario: "Excessive bleaching past the saturation point degrades the organic enamel matrix.",
    question: "Over-bleached teeth stop lightening and take on a lifeless, translucent appearance in what color hue: grey or gold? (Hint: Grey)",
    acceptedAnswers: ["grey", "gray", "translucent grey", "translucent gray"],
    displayAnswer: "Grey (Translucent-grey)",
    explanation: "Past the saturation point, peroxide begins degrading enamel organic matrix proteins, causing enamel to lose its natural brilliance and appear chalky, brittle, and translucent-grey (Sturdevant).",
    watsonClue: "Over-bleached teeth stop getting whiter; instead, they turn translucent grey and look lifeless.",
    reagentClue: "Matrix degradation: Excess oxidation breaks structural peptide backbones in enamel matrix."
  },
  {
    id: "6.8",
    level: 6,
    caseTitle: "Case #48: Pregnancy Contraindication Status",
    scenario: "A healthy patient in her second trimester requests elective in-office cosmetic whitening.",
    question: "Should elective cosmetic bleaching during pregnancy and nursing be performed or postponed? (Hint: Postponed)",
    acceptedAnswers: ["postponed", "postpone", "deferred", "defer", "avoided", "delayed"],
    displayAnswer: "Postponed (Deferred until after delivery & nursing)",
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
