/**
 * 221B Baker Street - The Bleaching Dossier: Clinical Questions Database
 * Topic: Dental Bleaching (Vital & Non-Vital Tooth Whitening)
 * Calibrated specifically for BDS Final Year / Dental Fest Competition Standard
 * Textbooks Referenced: Sturdevant (Operative Dentistry), Grossman & Ingle (Endodontics), Neville (Oral Pathology)
 * Exactly 6 Levels × 8 Questions = 48 Clinical Cases
 */

const QUIZ_LEVELS = [
  {
    id: 1,
    title: "Level I: The Discoloration Dossier",
    subtitle: "Etiology, Pathology & Diagnosis of Tooth Stains",
    badge: "Apprentice Investigator",
    description: "Investigate the primary causes of tooth discoloration: extrinsic stains, fluorosis, tetracycline banding, trauma, and pulpal necrosis.",
    icon: "fa-magnifying-glass"
  },
  {
    id: 2,
    title: "Level II: The Reagent Laboratory",
    subtitle: "Bleaching Chemistry, Peroxides & Mechanisms",
    badge: "Forensic Chemist",
    description: "Master the biochemical reagents: Hydrogen Peroxide, Carbamide Peroxide breakdown, Urea buffering, and radical oxidation reactions.",
    icon: "fa-flask-vial"
  },
  {
    id: 3,
    title: "Level III: Baker Street Diagnostics",
    subtitle: "Shade Selection, Colorimetry & Case Planning",
    badge: "Consulting Detective",
    description: "Examine shade analysis: Vita Classical Value order, CIELAB color parameters, dehydration rebound, and craze lines.",
    icon: "fa-compass-drafting"
  },
  {
    id: 4,
    title: "Level IV: The Scotland Yard Protocols",
    subtitle: "Clinical Procedures: Walking, In-Office & Home Bleach",
    badge: "Chief Inspector",
    description: "Execute clinical protocols: Spasser's walking bleach, cervical barrier placement, custom tray fabrication, and gingival isolation.",
    icon: "fa-shield-halved"
  },
  {
    id: 5,
    title: "Level V: Forensic Pathology & Adverse Reactions",
    subtitle: "Complications, Resorption & Sensitivity Management",
    badge: "Forensic Pathologist",
    description: "Analyze complications: Invasive cervical root resorption, composite bond strength reduction, sodium ascorbate reversal, and sensitivity relief.",
    icon: "fa-skull"
  },
  {
    id: 6,
    title: "Level VI: The Moriarty Enigma",
    subtitle: "Master Clinical Scenarios & Complex Management",
    badge: "Master Inquisitor",
    description: "Solve Moriarty's toughest clinical dilemmas: calcific metamorphosis, Croll's microabrasion sequencing, and severe tetracycline protocols.",
    icon: "fa-chess-king"
  }
];

const QUIZ_QUESTIONS = [
  // =========================================================================
  // LEVEL 1: THE DISCOLORATION DOSSIER (BDS Final Year - Etiology & Diagnosis)
  // =========================================================================
  {
    id: "1.1",
    level: 1,
    caseTitle: "Case #01: The Darkened Pulp Chamber",
    scenario: "A 22-year-old patient reports to Baker Street with a single dark greyish-brown maxillary central incisor. History reveals trauma during a sports event 2 years ago. The tooth is non-vital on electric pulp testing and thermal testing.",
    question: "What is the primary histopathological cause of discoloration following traumatic pulpal necrosis?",
    options: [
      { id: "A", text: "Precipitation of salivary amylase and mucin into the apical third of the pulp canal" },
      { id: "B", text: "Hyperactive odontoblasts producing excessive amounts of transparent tertiary dentin" },
      { id: "C", text: "Hemolysis of red blood cells releasing hemoglobin, which degrades into hemosiderin and iron sulfide that diffuse into dentinal tubules" },
      { id: "D", text: "Complete crystallization of enamel hydroxyapatite into black calcium fluorapatite" }
    ],
    correctAnswer: "C",
    explanation: "Following trauma, pulp tissue necrosis leads to autolysis and erythrocyte hemolysis. Hemoglobin breaks down into hematoidin, hemosiderin, and iron sulfide (FeS). These iron-containing degradation products diffuse into the open dentinal tubules, staining the dentin matrix dark brown to slate grey (Grossman's Endodontic Practice).",
    watsonClue: "Think of a deep bruise trapped inside the tooth: red blood cells break down, liberating iron pigments that permeate into the dentin tubes.",
    reagentClue: "Biochemical breakdown: Hemoglobin → Heme + Globin → Hemosiderin + Iron Sulfide (FeS). FeS gives the classic dark slate-grey discoloration."
  },
  {
    id: "1.2",
    level: 1,
    caseTitle: "Case #02: The Tetracycline Critical Window",
    scenario: "Holmes inspects a patient with generalized bilateral horizontal grey-brown bands across all permanent anterior teeth. Medical records confirm systemic antibiotic administration during childhood.",
    question: "What is the critical developmental age window during which administration of systemic tetracycline causes permanent staining of the permanent anterior crowns?",
    options: [
      { id: "A", text: "From the 4th month in utero (2nd trimester) through approximately 8 years of age" },
      { id: "B", text: "Between 12 and 16 years of age during pubertal growth" },
      { id: "C", text: "Only between birth and 6 months of age" },
      { id: "D", text: "Only during adult secondary dentinogenesis after 21 years of age" }
    ],
    correctAnswer: "A",
    explanation: "Calcification of primary teeth begins at around the 14th to 16th week in utero. Calcification of permanent anterior teeth begins at birth and continues until about 7 to 8 years of age (when the crowns of maxillary and mandibular anterior teeth are completely formed). Tetracycline chelates with calcium orthophosphate during active calcification, so administration between the second trimester of pregnancy and 8 years of age causes permanent intrinsic dyschromia (Sturdevant, Chapter on Tooth Bleaching).",
    watsonClue: "Tetracycline binds only to teeth actively laying down mineral crystals. For permanent front teeth, crown calcification completes around 7 to 8 years of age.",
    reagentClue: "Chelation: Tetracycline + Calcium → Tetracycline-calcium orthophosphate complex incorporated into developing hydroxyapatite crystal lattices."
  },
  {
    id: "1.3",
    level: 1,
    caseTitle: "Case #03: The Enamel Fluorosis Index",
    scenario: "A patient raised in an area with 3.5 ppm fluoride in drinking water presents with white chalky opaque flecks and discrete brown pit defects across the labial surfaces of maxillary incisors.",
    question: "According to Dean's Fluorosis Index, how is fluorosis classified when the enamel shows marked brown stains and distinct pitting over more than 50% of the tooth surface?",
    options: [
      { id: "A", text: "Moderate fluorosis without surface loss" },
      { id: "B", text: "Very mild fluorosis" },
      { id: "C", text: "Questionable fluorosis" },
      { id: "D", text: "Severe fluorosis" }
    ],
    correctAnswer: "D",
    explanation: "Under Dean's Fluorosis Index: Normal (0); Questionable (0.5); Very Mild (<25% white flecks); Mild (<50% white opaque areas); Moderate (all enamel surfaces affected with brown stains and marked attrition); and Severe (all enamel surfaces affected with confluent pitting, deep brown staining, and corroded appearance). Extensive pitting and marked brown discoloration is categorized as 'Severe' (Oral Pathology by Neville).",
    watsonClue: "Pitting indicates widespread loss of fragile, hypomineralized outer enamel. On Dean's classic scale, this represents the highest grade of severity.",
    reagentClue: "Histopathology: High fluoride during the maturation phase impairs ameloblast protease function, leaving retained porous amelogenins that readily pick up extrinsic dietary stains."
  },
  {
    id: "1.4",
    level: 1,
    caseTitle: "Case #04: The Minocycline Adult Anomaly",
    scenario: "A 25-year-old medical student with fully formed permanent teeth receives minocycline (100 mg daily) for 18 months for chronic facial acne. He is alarmed to notice a progressive blue-grey discoloration appearing at the cervical and incisal thirds of his teeth.",
    question: "Why does minocycline cause intrinsic tooth discoloration in adults with fully erupted, mature permanent dentition, unlike conventional tetracycline?",
    options: [
      { id: "A", text: "Minocycline activates salivary streptococci to secrete black melanin pigments onto enamel" },
      { id: "B", text: "Minocycline is lipophilic, enters the gingival crevicular fluid, chelates iron (hemosiderin), and binds to collagen in ongoing secondary dentin formation and alveolar bone" },
      { id: "C", text: "Minocycline causes irreversible necrosis of all pulp tissue within 48 hours" },
      { id: "D", text: "Minocycline dissolves the entire outer enamel layer through an acidic etching mechanism" }
    ],
    correctAnswer: "B",
    explanation: "Minocycline is a semisynthetic tetracycline derivative with high lipid solubility. Unlike classic tetracyclines (which only bind during active crown calcification in childhood), minocycline can discolor fully developed teeth in adults. It reaches high concentrations in saliva and GCF, chelates with ferric iron derived from pulpal or gingival blood, and binds to collagen in active secondary dentin and alveolar bone (Neville's Oral Pathology).",
    watsonClue: "The teeth were already formed years ago! The clue lies in minocycline's unique affinity for iron and mature collagen in living secondary dentin.",
    reagentClue: "Forensic test: Minocycline binds Fe³⁺ ions forming insoluble black coordination complexes, visible in both dentin and underlying alveolar bone ('black bone disease')."
  },
  {
    id: "1.5",
    level: 1,
    caseTitle: "Case #05: The Yellow Post-Traumatic Enigma",
    scenario: "A 24-year-old boxer presents with a solitary, deeply yellow-amber maxillary central incisor. Trauma occurred 6 years ago. The tooth is asymptomatic, responds normally to percussion, and radiographs show total obliteration of the pulp chamber and root canal.",
    question: "What is this condition called, and what is the underlying biological process creating the deep yellow color?",
    options: [
      { id: "A", text: "Calcific Metamorphosis (Pulp Canal Obliteration); excessive, accelerated secondary/tertiary dentin deposition by surviving, stimulated odontoblasts" },
      { id: "B", text: "Erythroblastosis fetalis; bile pigment precipitation along the cementoenamel junction" },
      { id: "C", text: "Dentinogenesis Imperfecta Type I; generalized failure of type I collagen synthesis" },
      { id: "D", text: "Internal root resorption; multinucleated odontoclasts destroying the pulp chamber walls" }
    ],
    correctAnswer: "A",
    explanation: "Calcific Metamorphosis (Pulp Canal Obliteration / PCO) is a common pulpal response to dental concussive trauma. The surviving, hyperactive odontoblasts deposit massive amounts of secondary and tertiary dentin, eventually obliterating the pulp chamber and canal. Because dentin has a natural yellow hue and is now significantly thicker, the tooth appears deeply yellow and opaque compared to adjacent teeth (Grossman's Endodontic Practice).",
    watsonClue: "The tooth has not died—quite the reverse! The pulp has barricaded itself behind a massive wall of solid yellow dentin.",
    reagentClue: "Histology: Concentric layers of reparative and secondary dentin with reduced tubular density. The pulp remains vital in >85% of cases despite negative thermal response."
  },
  {
    id: "1.6",
    level: 1,
    caseTitle: "Case #06: The Opalescent Crown Phenomenon",
    scenario: "A patient presents with all teeth exhibiting an unusual amber-brown to purplish-opalescent translucency. Radiographs reveal short, blunt roots and total premature obliteration of pulp chambers. The enamel readily fractures off the underlying soft dentin.",
    question: "What hereditary dental condition is responsible for this classic clinical and radiographic appearance?",
    options: [
      { id: "A", text: "Amelogenesis Imperfecta (Hypoplastic type)" },
      { id: "B", text: "Fluorosis (Dean's Moderate grade)" },
      { id: "C", text: "Dentinogenesis Imperfecta" },
      { id: "D", text: "Erythropoietic Porphyria" }
    ],
    correctAnswer: "C",
    explanation: "Dentinogenesis Imperfecta (Shields Classification) is an autosomal dominant condition characterized by opalescent, amber or greyish-brown teeth. Radiographically, the teeth display bulbous crowns, marked cervical constriction, short roots, and obliterated pulp chambers. Because the dentinoenamel junction (DEJ) lacks normal microscopic scalloping, the enamel easily chips away, exposing the softer dentin to rapid attrition. Bleaching is ineffective (Oral Pathology by Neville).",
    watsonClue: "Notice the bulbous, tulip-shaped crowns and obliterated pulp spaces on the X-ray, along with the telltale opalescent amber color.",
    reagentClue: "Genetic clue: Mutations in the DSPP gene (dentin sialophosphoprotein) lead to structurally abnormal, hypomineralized dentin matrix with ~60% water content."
  },
  {
    id: "1.7",
    level: 1,
    caseTitle: "Case #07: The Green Teeth of Infancy",
    scenario: "A 4-year-old child presents with dark green to bluish-green primary incisors. The mother's medical history reveals severe Rh incompatibility (Erythroblastosis Fetalis) requiring exchange transfusion at birth.",
    question: "What specific breakdown pigment is incorporated into the calcifying primary teeth to cause this distinctive green discoloration (chlorodontia)?",
    options: [
      { id: "A", text: "Hemosiderin" },
      { id: "B", text: "Biliverdin (oxidation product of bilirubin)" },
      { id: "C", text: "Uroporphyrin I" },
      { id: "D", text: "Melanin" }
    ],
    correctAnswer: "B",
    explanation: "In Erythroblastosis Fetalis (Rh isoimmunization), severe postnatal hemolysis causes massive unconjugated and conjugated hyperbilirubinemia. Bilirubin and its green oxidation product, biliverdin, are incorporated into the hard dental tissues undergoing active calcification at that time, primarily in the primary dentition, producing green-stained teeth known as chlorodontia (Neville's Oral Pathology).",
    watsonClue: "Recall your systemic pathology: massive breakdown of fetal red blood cells generates biliverdin, which imparts an unmistakable green hue to developing tooth buds.",
    reagentClue: "Pigment analysis: Biliverdin is a tetrapyrrolic green bile pigment with peak absorption in the blue spectrum (376 nm) and red spectrum (666 nm)."
  },
  {
    id: "1.8",
    level: 1,
    caseTitle: "Case #08: Extrinsic Stains and the Smear Layer",
    scenario: "Holmes examines a patient with dark brown and black superficial stains along the cervical third of the lingual surfaces of mandibular incisors. The patient drinks four cups of black tea daily and uses a 0.12% chlorhexidine mouthrinse.",
    question: "How do extrinsic stains caused by chlorhexidine and dietary tannins bind to the tooth surface?",
    options: [
      { id: "A", text: "They result from irreversible chemical chelation with alveolar bone osteocytes" },
      { id: "B", text: "They cross the dentinal tubules directly into the pulp via active transport" },
      { id: "C", text: "They permanently alter the atomic lattice of enamel hydroxyapatite into barium titanate" },
      { id: "D", text: "They bind to the salivary acquired pellicle via electrostatic interactions with protein-bound polyphenols and dietary chromogens" }
    ],
    correctAnswer: "D",
    explanation: "Extrinsic stains are external surface discolorations located within the acquired pellicle. Chlorhexidine is a cationic bisbiguanide; it adsorbs onto the anionic tooth pellicle and subsequently binds anionic dietary chromogens (tannins and polyphenols found in tea, coffee, and wine). These stains are purely superficial and can be removed by scaling, polishing, or external bleaching (Sturdevant's Art and Science of Operative Dentistry).",
    watsonClue: "The stain sits entirely on the surface! Chlorhexidine acts as a chemical bridge between the salivary coating and the dark tannins in tea.",
    reagentClue: "Surface chemistry: Cationic chlorhexidine binds to negative phosphate groups of the pellicle, precipitating colored iron-tannate and polyphenol complexes."
  },

  // =========================================================================
  // LEVEL 2: THE REAGENT LABORATORY (BDS Final Year - Bleaching Chemistry)
  // =========================================================================
  {
    id: "2.1",
    level: 2,
    caseTitle: "Case #09: The 10% Carbamide Peroxide Ratio",
    scenario: "Holmes holds up a 10% carbamide peroxide syringe used for nightguard vital bleaching. He asks Watson to specify its active decomposition components upon contact with oral saliva.",
    question: "When 10% Carbamide Peroxide dissociates in the presence of water, what are the precise percentages of Hydrogen Peroxide and Urea produced?",
    options: [
      { id: "A", text: "1.0% Hydrogen Peroxide and 9.0% Urea" },
      { id: "B", text: "Approximately 3.35% (to 3.5%) Hydrogen Peroxide and 6.65% (to 6.5%) Urea" },
      { id: "C", text: "7.0% Hydrogen Peroxide and 3.0% Urea" },
      { id: "D", text: "5.0% Hydrogen Peroxide and 5.0% Urea" }
    ],
    correctAnswer: "B",
    explanation: "Carbamide peroxide (CH₆N₂O₃) has a molecular weight of 94, whereas hydrogen peroxide (H₂O₂) has a molecular weight of 34 and urea has a molecular weight of 60. Therefore, a 10% carbamide peroxide solution dissociates into roughly 3.35% to 3.5% hydrogen peroxide and 6.65% to 6.5% urea. Thus, 10% CP is approximately one-third the strength of pure H₂O₂ (Sturdevant, Chapter on Tooth Whitening).",
    watsonClue: "A standard board examination rule of thumb: carbamide peroxide delivers roughly one-third of its concentration as active hydrogen peroxide.",
    reagentClue: "Stoichiometry: MW ratio = 34 / 94 ≈ 36.2%. 10% × 0.362 = 3.62% max theoretical yield of H₂O₂, with the remainder being urea (CO(NH₂)₂)."
  },
  {
    id: "2.2",
    level: 2,
    caseTitle: "Case #10: The Beneficial Role of Urea",
    scenario: "A dental student questions why carbamide peroxide is favored over pure hydrogen peroxide for overnight at-home nightguard vital bleaching.",
    question: "What critical physiological effect does the urea component of carbamide peroxide have in the oral environment during bleaching?",
    options: [
      { id: "A", text: "Urea acts as a permanent nerve poison that numbs the dental pulp permanently" },
      { id: "B", text: "Urea completely crystallizes into fluorapatite within 5 minutes of contact with saliva" },
      { id: "C", text: "Urea acts as an acid etchant, lowering plaque pH below 4.5 to dissolve outer enamel rods" },
      { id: "D", text: "Urea is broken down by salivary urease into ammonia and CO₂, elevating pH to 7.5-8.0 and protecting enamel from acid demineralization" }
    ],
    correctAnswer: "D",
    explanation: "Urea decomposes into ammonia (NH₃) and carbon dioxide (CO₂). Ammonia is a basic compound that raises the local pH of the bleaching gel and saliva to between 7.5 and 8.5 within 15 minutes of application. This alkaline shift prevents acid demineralization of enamel and provides an anticariogenic effect while optimizing perhydroxyl radical formation (Sturdevant's Operative Dentistry).",
    watsonClue: "Ammonia is an alkaline base. By raising the pH, it acts as a protective chemical shield against enamel erosion during hours of overnight wear.",
    reagentClue: "Enzymatic reaction: CO(NH₂)₂ + H₂O → 2 NH₃ + CO₂. The released ammonia elevates oral micro-environmental pH."
  },
  {
    id: "2.3",
    level: 2,
    caseTitle: "Case #11: The Primary Bleaching Radical",
    scenario: "In the 221B chemical laboratory, Holmes measures the dissociation of hydrogen peroxide: H₂O₂ ⇌ H⁺ + HO₂⁻. He notes that under alkaline conditions, one specific reactive oxygen species drives the breakdown of organic chromophores.",
    question: "Which reactive oxygen species is primarily responsible for the oxidation and cleavage of conjugated double bonds in organic dental stains under alkaline conditions?",
    options: [
      { id: "A", text: "Perhydroxyl radical / ion (HO₂⁻)" },
      { id: "B", text: "Nitric oxide radical (NO•)" },
      { id: "C", text: "Hypochlorite ion (OCl⁻)" },
      { id: "D", text: "Carbonate radical (CO₃•⁻)" }
    ],
    correctAnswer: "A",
    explanation: "Under slightly alkaline conditions (pH 7.5 - 9.5), hydrogen peroxide dissociates to produce the perhydroxyl ion/radical (HO₂⁻). The perhydroxyl ion is a potent nucleophile that attacks and cleaves the electron-deficient conjugated double bonds of organic pigment molecules (chromophores), transforming them into smaller, lighter, or colorless hydrophilic compounds that diffuse out of the tooth (Sturdevant & Grossman).",
    watsonClue: "Look for the perhydroxyl intermediate! It is the specialized radical that selectively chops dark conjugated double bonds into harmless light-colored fragments.",
    reagentClue: "Radical kinetics: H₂O₂ ⇌ H⁺ + HO₂⁻ (pKa = 11.6). In alkaline buffers, [HO₂⁻] increases, driving nucleophilic epoxidation and ring-cleavage of quinones."
  },
  {
    id: "2.4",
    level: 2,
    caseTitle: "Case #12: The Sodium Perborate Varieties",
    scenario: "Inspector Lestrade asks which chemical form of sodium perborate is the standard compound utilized in dental clinics for the walking bleach technique.",
    question: "Which form of sodium perborate is most commonly used in endodontics, and approximately how much available oxygen does it release?",
    options: [
      { id: "A", text: "Sodium perborate octahydrate, containing 0.1% available oxygen" },
      { id: "B", text: "Sodium hypochlorite monohydrate, containing 50% available oxygen" },
      { id: "C", text: "Sodium perborate tetrahydrate (NaBO₃·4H₂O), containing approximately 10% available oxygen" },
      { id: "D", text: "Sodium perborate anhydrous, containing 90% available oxygen" }
    ],
    correctAnswer: "C",
    explanation: "Sodium perborate exists as a monohydrate, trihydrate, or tetrahydrate. Sodium perborate tetrahydrate (NaBO₃·4H₂O) is the standard preparation used in dentistry. It is stable in dry powder form, but when mixed with water or saline, it decomposes into sodium metaborate, hydrogen peroxide, and nascent oxygen, releasing approximately 9.5% to 10% available oxygen (Grossman's Endodontic Practice).",
    watsonClue: "The tetrahydrate formulation is the white powder sitting on the endodontic shelf—stable in the bottle, but liberating oxygen the moment water touches it.",
    reagentClue: "Decomposition: NaBO₃·4H₂O + H₂O ⇌ NaBO₂ + H₂O₂ + 3 H₂O. Yields ~10% available active oxygen for intracoronal walking bleach."
  },
  {
    id: "2.5",
    level: 2,
    caseTitle: "Case #13: The Carbopol Thickener Secret",
    scenario: "Watson inspects the ingredient list of a 10% carbamide peroxide gel and notices the additive 'Carbopol' (carboxypolymethylene).",
    question: "What is the primary clinical purpose of adding Carbopol to carbamide peroxide bleaching gels?",
    options: [
      { id: "A", text: "It accelerates peroxide decomposition so that 100% of the active agent is spent within 2 minutes" },
      { id: "B", text: "It chemically stains enamel white through titanium dioxide precipitation" },
      { id: "C", text: "It causes rapid chemical explosion to blast away surface calculus" },
      { id: "D", text: "It increases gel viscosity and bioadhesion, extending active peroxide release time up to 8-10 hours in the custom tray" }
    ],
    correctAnswer: "D",
    explanation: "Carbopol (carboxypolymethylene) is a high-molecular-weight polyacrylic acid polymer added as a thickening agent. It imparts high viscosity and thixotropy, preventing the bleaching gel from running out of the tray or being washed away by saliva. Furthermore, it slows the release of hydrogen peroxide, allowing active bleaching to continue for 8 to 10 hours overnight (Sturdevant's Art and Science of Operative Dentistry).",
    watsonClue: "Without Carbopol, the runny liquid would wash down the patient's throat within minutes! Carbopol turns it into a sticky gel that clings through the night.",
    reagentClue: "Polymer kinetics: Polyacrylic acid networks create a diffusion barrier. Studies by Matis show active peroxide remains available for up to 10 hours with Carbopol vs 1-2 hours without it."
  },
  {
    id: "2.6",
    level: 2,
    caseTitle: "Case #14: The Bleaching Saturation Point",
    scenario: "A patient continues to bleach their teeth daily for 4 months despite reaching a brilliant white shade at week 3. The teeth now look unnaturally chalky, translucent, and slightly greyish.",
    question: "What is the 'Bleaching Saturation Point' in operative dentistry?",
    options: [
      { id: "A", text: "The point where the tooth absorbs 100 grams of pure oxygen and doubles in size" },
      { id: "B", text: "The point where all oxidizable chromophore double bonds have been cleaved; continuing beyond this degrades the organic matrix of enamel and dentin" },
      { id: "C", text: "The point where enamel prisms fuse together into solid diamond crystals" },
      { id: "D", text: "The moment saliva permanently turns blue due to peroxide saturation" }
    ],
    correctAnswer: "B",
    explanation: "The bleaching saturation point is the maximum aesthetic threshold where all accessible organic chromophoric double bonds have been oxidized into colorless linear chains. Any bleaching carried out beyond this point yields no additional lightening; instead, the oxidizing radicals begin breaking down the essential non-chromophoric organic protein matrix of enamel (amelogenins/enamelins) and dentin (collagen), leading to brittle, chalky, greyish, and over-bleached teeth (Sturdevant's Operative Dentistry).",
    watsonClue: "When there are no more stains left to burn, the chemical fire starts consuming the structural timber of the tooth itself!",
    reagentClue: "Biochemical marker: Beyond saturation, loss of matrix proteins leads to increased prism porosity, reduced microhardness, and an unnatural loss of optical value."
  },
  {
    id: "2.7",
    level: 2,
    caseTitle: "Case #15: Zach and Cohen's Pulpal Thermal Limit",
    scenario: "A practitioner attempts to speed up in-office power bleaching by applying a heated metal instrument and unshielded heat lamp to the facial enamel of a vital incisor.",
    question: "According to the landmark dental study by Zach and Cohen (1965), what is the critical intrapulpal temperature rise that results in a 15% incidence of irreversible pulpal necrosis?",
    options: [
      { id: "A", text: "5.5°C (10°F)" },
      { id: "B", text: "15.0°C (27°F)" },
      { id: "C", text: "25.0°C (45°F)" },
      { id: "D", text: "1.0°C (1.8°F)" }
    ],
    correctAnswer: "A",
    explanation: "Zach and Cohen's classic 1965 investigation demonstrated that an intrapulpal temperature rise of 5.5°C (10°F) above the baseline 37°C body temperature caused irreversible pulpal damage and necrosis in 15% of teeth. A rise of 11.1°C (20°F) caused 60% pulpal necrosis. This is why heating devices during vital power bleaching are strictly avoided in modern practice (Grossman's Endodontic Practice).",
    watsonClue: "A classic dental entrance exam number: five point five degrees Celsius is the critical tipping point for pulpal microcirculation survival.",
    reagentClue: "Thermal physiology: ΔT = 5.5°C causes thrombosis of pulpal venules and capillary collapse; ΔT = 11.1°C causes extensive coagulation necrosis."
  },
  {
    id: "2.8",
    level: 2,
    caseTitle: "Case #16: In-Office Hydrogen Peroxide Concentrations",
    scenario: "Holmes compares commercial in-office power bleaching products against at-home nightguard systems.",
    question: "What is the typical concentration of Hydrogen Peroxide used for professionally administered in-office power bleaching?",
    options: [
      { id: "A", text: "70% to 85% Hydrogen Peroxide" },
      { id: "B", text: "1% to 2% Hydrogen Peroxide" },
      { id: "C", text: "30% to 38% Hydrogen Peroxide" },
      { id: "D", text: "100% Anhydrous Hydrogen Peroxide" }
    ],
    correctAnswer: "C",
    explanation: "Professionally administered in-office power bleaching gels typically contain high-concentration hydrogen peroxide in the range of 30% to 38% (most commonly 35%). Because of its caustic nature and potential to cause severe soft tissue burns, it requires strict soft tissue isolation with rubber dam or light-cured resin liquid dam (Sturdevant's Art and Science of Operative Dentistry).",
    watsonClue: "In-office bleaching relies on concentrated power: thirty to thirty-eight percent is the recognized dental standard.",
    reagentClue: "Safety profile: 35% H₂O₂ is caustic and causes immediate tissue blanching and ulceration upon mucosal contact; requires resin barrier protection."
  },

  // =========================================================================
  // LEVEL 3: BAKER STREET DIAGNOSTICS (BDS Final Year - Colorimetry & Planning)
  // =========================================================================
  {
    id: "3.1",
    level: 3,
    caseTitle: "Case #17: The Vita Classical Value Hierarchy",
    scenario: "Dr. Watson arranges the Vita Classical shade guide in alphabetical groups (A1-A4, B1-B4, C1-C4, D2-D4) to monitor bleaching progress. Holmes intervenes: 'Bleaching primarily changes Value, Watson! Re-order the tabs from highest to lowest lightness!'",
    question: "What is the highest value (lightest) shade tab in the standard Vita Classical shade guide?",
    options: [
      { id: "A", text: "A4" },
      { id: "B", text: "C4" },
      { id: "C", text: "D3" },
      { id: "D", text: "B1" }
    ],
    correctAnswer: "D",
    explanation: "When the 16 tabs of the Vita Classical shade guide are rearranged according to Value (lightness from highest to lowest), B1 is the highest value (lightest) tab, followed by A1, B2, D2, A2, and so forth, down to C4, which is the lowest value (darkest) tab. Evaluating bleaching efficacy requires this value-ordered scale (Sturdevant, Chapter on Color and Bleaching).",
    watsonClue: "Every dental student remembers B1 as the gold standard of brightness on the classic Vita guide!",
    reagentClue: "Value scale sequence: B1 → A1 → B2 → D2 → A2 → C1 → C2 → D4 → A3 → D3 → B3 → A3.5 → B4 → C3 → A4 → C4. B1 has the highest luminous reflectance."
  },
  {
    id: "3.2",
    level: 3,
    caseTitle: "Case #18: The CIELAB Color Space Coordinates",
    scenario: "Holmes utilizes a spectrophotometer to evaluate tooth color changes following vital bleaching. The coordinates are plotted in the CIE L*a*b* 3D color system.",
    question: "What do the L*, a*, and b* parameters represent in the CIELAB color space, and how do they typically change after successful vital bleaching?",
    options: [
      { id: "A", text: "L* represents Lightness (Value), a* represents green-red, and b* represents blue-yellow; successful bleaching causes L* to increase (whiter) and b* to decrease (less yellow)" },
      { id: "B", text: "L* represents Length, a* represents Area, and b* represents Breadth; all three values double after bleaching" },
      { id: "C", text: "L* represents Liquid volume, a* represents Acidity, and b* represents Basicity" },
      { id: "D", text: "L* represents Lipid content, a* represents Amelogenin, and b* represents Bacteria; all values drop to zero" }
    ],
    correctAnswer: "A",
    explanation: "In the CIELAB color space: L* measures Lightness/Value from 0 (black) to 100 (diffuse white); a* represents the green-red chromatic axis (-a* is green, +a* is red); b* represents the blue-yellow chromatic axis (-b* is blue, +b* is yellow). Successful tooth bleaching characteristically increases L* (making teeth brighter/lighter) and decreases b* (reducing yellow saturation) (Sturdevant's Operative Dentistry).",
    watsonClue: "L is for Lightness! A successful bleaching case moves towards higher L* (brighter) and lower b* (less yellow).",
    reagentClue: "Formula: ΔE*ab = √[(ΔL*)² + (Δa*)² + (Δb*)²]. Bleaching efficacy is driven primarily by +ΔL* and -Δb*."
  },
  {
    id: "3.3",
    level: 3,
    caseTitle: "Case #19: The Dehydration Rebound Phenomenon",
    scenario: "Immediately after 45 minutes of in-office power bleaching under rubber dam isolation, the patient's teeth appear brilliantly white (Vita 0M1). However, at the 48-hour follow-up appointment, the shade appears noticeably darker.",
    question: "What is the primary physical and optical reason for this immediate post-operative 'hyper-white' appearance and subsequent 48-hour relapse?",
    options: [
      { id: "A", text: "The rubber dam dissolves the outer 1 mm of enamel, which regenerates within 48 hours" },
      { id: "B", text: "Bacterial plaque coats the teeth in black pigments within 12 hours" },
      { id: "C", text: "Enamel dehydration during isolation replaces interprismatic water with air, causing diffuse surface light scattering; normal translucency returns upon salivary rehydration" },
      { id: "D", text: "The hydrogen peroxide permanently leaves the tooth through the root canal" }
    ],
    correctAnswer: "C",
    explanation: "Enamel is porous and contains water. Under rubber dam or cotton roll isolation, enamel dehydrates rapidly. Water has a refractive index (n ≈ 1.33) close to hydroxyapatite (n ≈ 1.62), but air has a refractive index of 1.0. When air replaces water in interprismatic spaces, the large refractive difference causes intense diffuse white light scattering, making the teeth appear artificially chalky and hyper-white. Once teeth rehydrate from saliva over 24-48 hours, true translucency returns (Sturdevant's Operative Dentistry).",
    watsonClue: "Think of dry chalk or a dried sponge: when moisture evaporates, it appears chalky white, but wet it with water and it immediately darkens again.",
    reagentClue: "Refractive indices: Enamel (1.62), Water (1.33), Air (1.00). Δn_dry = 0.62 vs Δn_wet = 0.29. Rehydration takes 24-48 hours to stabilize."
  },
  {
    id: "3.4",
    level: 3,
    caseTitle: "Case #20: The Translucent Incisal Edge Dilemma",
    scenario: "A 20-year-old female with thin incisal enamel and natural incisal translucency undergoes vital bleaching. Post-operatively, she complains that her incisal edges look darker and greyish.",
    question: "Why does vital bleaching of teeth with thin incisal enamel sometimes cause the incisal edges to appear darker or more grey?",
    options: [
      { id: "A", text: "Peroxide converts incisal calcium into black carbon soot" },
      { id: "B", text: "Incisal edges lack underlying dentin; bleaching increases enamel translucency, allowing incident light to transmit straight into the dark oral cavity rather than reflecting forward" },
      { id: "C", text: "The pulp horn extends all the way into the incisal edge and undergoes gangrene" },
      { id: "D", text: "Bleaching triggers melanin deposition in incisal enamel rods" }
    ],
    correctAnswer: "B",
    explanation: "Tooth color is largely determined by the underlying yellow dentin core reflecting light forward through translucent enamel. Incisal edges consist solely of enamel with no underlying dentin. When bleaching clears organic stains, it increases enamel translucency. Light passing through the incisal edge travels straight into the dark shadows of the oral cavity rather than bouncing back to the observer's eye, resulting in a dark, greyish appearance (Sturdevant's Art and Science of Operative Dentistry).",
    watsonClue: "Look through a clean window into a dark, unlit room: without a reflective wall behind it, the clear glass appears dark and shadowy.",
    reagentClue: "Optics: Reflectance R = I_reflected / I_incident. Without retro-reflective dentin, increased light transmission (T) directly lowers reflected luminance (L*)."
  },
  {
    id: "3.5",
    level: 3,
    caseTitle: "Case #21: Craze Lines vs Vertical Fractures",
    scenario: "Holmes shines a fiber-optic transillumination (FOTI) light wand across the facial surface of a maxillary central incisor before bleaching. He observes multiple fine vertical lines, but the light passes completely through the tooth without casting a dark shadow.",
    question: "What does this transillumination pattern indicate, and what is its clinical significance for bleaching?",
    options: [
      { id: "A", text: "They indicate severe internal resorption extending to the outer enamel" },
      { id: "B", text: "They prove the tooth is non-vital and must undergo root canal therapy" },
      { id: "C", text: "They are superficial enamel craze lines that do not disrupt the dentin core, but may allow rapid peroxide diffusion and transient sensitivity" },
      { id: "D", text: "They represent complete vertical root fractures requiring immediate tooth extraction" }
    ],
    correctAnswer: "C",
    explanation: "Fiber-optic transillumination (FOTI) distinguishes craze lines from true fractures: when light traverses across a craze line, the entire crown illuminates uniformly because the crack is confined to enamel. In a true structural fracture through dentin, the light beam is interrupted, illuminating one half of the tooth while the other half remains dark. Craze lines are common and benign, but they serve as pathways for rapid peroxide diffusion, increasing post-bleaching sensitivity (Ingle's Endodontics & Sturdevant).",
    watsonClue: "If the light travels freely without casting a shadow, the crack is merely a superficial craze line in the enamel glaze.",
    reagentClue: "FOTI optics: Intact light transmission = Enamel craze line. Abrupt light stoppage and shadow = True fracture line through dentin."
  },
  {
    id: "3.6",
    level: 3,
    caseTitle: "Case #22: Existing Tooth-Colored Restorations",
    scenario: "A patient with multiple Class III and Class V composite resin restorations asks to have her teeth bleached to a bright B1 shade.",
    question: "What must the clinician inform the patient regarding existing composite restorations prior to initiating bleaching therapy?",
    options: [
      { id: "A", text: "Composite resin naturally changes its chemical shade to match whatever enamel color is achieved" },
      { id: "B", text: "Bleaching peroxides will completely dissolve all composite fillings within 10 minutes" },
      { id: "C", text: "Existing composite restorations will turn twice as bright as the natural enamel" },
      { id: "D", text: "Bleaching peroxides will NOT lighten existing composite restorations; restorations will appear darker by comparison and must be replaced 1-2 weeks post-bleach" }
    ],
    correctAnswer: "D",
    explanation: "Peroxide bleaching agents act on organic chromophores within natural dental hard tissues (enamel and dentin). They do NOT lighten restorative materials such as composite resins, glass ionomers, or ceramics. Consequently, after the natural tooth structure is bleached, existing restorations will appear distinctly darker and mismatched, and the patient must be informed beforehand that restorations will need replacement 1 to 2 weeks after bleaching stabilizes (Sturdevant's Operative Dentistry).",
    watsonClue: "Bleaching reagents only work on natural tooth structure! Synthetic resin fillings will stay their original color, looking mismatched after the teeth brighten.",
    reagentClue: "Material chemistry: Methacrylate polymers and inorganic silanized silica fillers lack oxidizable biological chromophores and are resistant to shade change from peroxides."
  },
  {
    id: "3.7",
    level: 3,
    caseTitle: "Case #23: The Recommended Pre-Bleaching Sequence",
    scenario: "A patient presents requesting immediate in-office tooth whitening. Clinical examination reveals subgingival calculus, marginal gingivitis, and an active cavitated carious lesion on the mesial surface of tooth #8.",
    question: "What is the proper clinical sequencing of dental treatment prior to initiating vital bleaching?",
    options: [
      { id: "A", text: "Apply high-concentration acid etch to all carious lesions without removing decay" },
      { id: "B", text: "Perform scaling/prophylaxis, excavate caries and place a sound temporary restoration, and resolve gingival inflammation prior to bleaching" },
      { id: "C", text: "Bleach immediately over active caries to sterilize the bacteria with hydrogen peroxide" },
      { id: "D", text: "Perform root canal treatment on all anterior teeth prior to bleaching" }
    ],
    correctAnswer: "B",
    explanation: "Vital bleaching should only be performed on a healthy, clean oral foundation. Active caries allows concentrated peroxide to penetrate directly into the deep dentin and pulp chamber, provoking severe pulpitis and pain. Subgingival calculus and plaque prevent uniform gel contact. Therefore, scaling, oral prophylaxis, caries excavation, and placement of a sealed provisional restoration must precede any bleaching procedure (Sturdevant's Art and Science of Operative Dentistry).",
    watsonClue: "Never pour bleach into an open carious cavity! Repair the active decay and clean the gingival margin before cosmetic whitening.",
    reagentClue: "Clinical guideline: Active dentinal caries provides zero diffusion barrier; 35% H₂O₂ in open decay causes immediate chemical pulpal necrosis."
  },
  {
    id: "3.8",
    level: 3,
    caseTitle: "Case #24: Absolute Contraindications for Vital Bleaching",
    scenario: "Holmes reviews patient consultation files to determine who is an unsuitable candidate for elective vital tooth bleaching.",
    question: "Which of the following clinical scenarios represents an absolute or strong contraindication to vital tooth bleaching?",
    options: [
      { id: "A", text: "Pregnant and lactating women, patients with known peroxide allergy, and teeth with severe untreated hypersensitivity or extensive cracks" },
      { id: "B", text: "Patients with mild tea or coffee stains" },
      { id: "C", text: "Patients desiring a lighter shade for an upcoming social event" },
      { id: "D", text: "Patients who brush their teeth twice daily with fluoridated toothpaste" }
    ],
    correctAnswer: "A",
    explanation: "Strong contraindications to vital tooth bleaching include: (1) Pregnant and nursing mothers (due to lack of safety data on fetal exposure to free radicals); (2) Known allergy to peroxides or tray components; (3) Severe, unmanageable dentin hypersensitivity; and (4) Extensive structural cracks extending into the pulp. Mild extrinsic stains are prime indications for bleaching (Sturdevant's Operative Dentistry).",
    watsonClue: "Elective aesthetic treatments should never be performed during pregnancy or lactation, or on teeth with exposed, agonizingly sensitive nerves.",
    reagentClue: "ADA Council on Scientific Affairs: Safety has not been established in pregnant or lactating patients; elective peroxide therapy is contraindicated."
  },

  // =========================================================================
  // LEVEL 4: THE SCOTLAND YARD PROTOCOLS (BDS Final Year - Clinical Execution)
  // =========================================================================
  {
    id: "4.1",
    level: 4,
    caseTitle: "Case #25: Spasser's Walking Bleach Regimen",
    scenario: "Dr. Watson is preparing to perform an intracoronal walking bleach on an endodontically treated discolored central incisor. He reaches for 30% Superoxol to mix with sodium perborate. Holmes stops him, citing Spasser's 1979 protocol.",
    question: "Why does modern endodontic practice (and the AAE) mandate mixing sodium perborate with sterile water or saline rather than 30% hydrogen peroxide?",
    options: [
      { id: "A", text: "Sodium perborate mixed with water achieves equivalent aesthetic results with significantly lower risk of external cervical root resorption" },
      { id: "B", text: "Water instantly solidifies the sodium perborate into permanent composite resin" },
      { id: "C", text: "Water causes the tooth to bleach to pure white within 5 seconds" },
      { id: "D", text: "30% hydrogen peroxide is completely non-reactive with sodium perborate" }
    ],
    correctAnswer: "A",
    explanation: "In 1979, Spasser introduced mixing sodium perborate with water instead of 30% hydrogen peroxide (Superoxol, Nutting & Poe 1963). Long-term endodontic trials have proven that sodium perborate mixed with sterile water or saline achieves the exact same aesthetic whitening success, but dramatically reduces the incidence of destructive external invasive cervical root resorption (Grossman's Endodontic Practice & Ingle).",
    watsonClue: "Why invite cervical root damage with concentrated Superoxol when plain sterile water provides all the whitening power needed safely?",
    reagentClue: "AAE consensus: Mixing sodium perborate with water or saline releases adequate, gentle hydrogen peroxide without excessive radicular pressure or tubule leakage."
  },
  {
    id: "4.2",
    level: 4,
    caseTitle: "Case #26: The Cervical Barrier Gold Standard",
    scenario: "Watson is placing a protective cervical barrier (coronal plug) in a root-filled incisor prior to walking bleach. He asks Holmes for the recommended thickness, location, and shape.",
    question: "What are the proper dimensions, location, and contour of the cervical barrier for internal walking bleach?",
    options: [
      { id: "A", text: "1.0 mm thickness, placed level with the incisal edge of the crown" },
      { id: "B", text: "0.2 mm thickness, placed at the incisal edge, perfectly flat, using zinc oxide eugenol" },
      { id: "C", text: "2.0 mm thickness, placed 1-2 mm apical to the CEJ, scalloped to match the facial and interproximal contour of the CEJ, using Glass Ionomer Cement (GIC)" },
      { id: "D", text: "5.0 mm thickness, placed at the radiographic apex of the root" }
    ],
    correctAnswer: "C",
    explanation: "The cervical barrier is crucial for preventing peroxide from leaking into the root canal filling and reaching the cervical periodontal ligament. The gold standard requires: (1) Minimum thickness of 2.0 mm; (2) Placement 1-2 mm apical to the Cementoenamel Junction (CEJ); (3) Scalloped contour matching the interproximal and facial curvature of the CEJ; and (4) Material: Glass Ionomer Cement (GIC), Resin-Modified GIC, or Cavit (Grossman's Endodontic Practice & Sturdevant).",
    watsonClue: "Two millimeters thick, placed two millimeters below the CEJ, and carefully scalloped to follow the curvature of the gingival attachment!",
    reagentClue: "Microleakage studies: Cavit or GIC thickness <2 mm allows up to 80% peroxide dye penetration through gutta-percha to the periapical tissues."
  },
  {
    id: "4.3",
    level: 4,
    caseTitle: "Case #27: Gutta-Percha Removal Depth",
    scenario: "Before placing the cervical barrier for walking bleach, the practitioner must reduce the coronal gutta-percha obturation.",
    question: "To what anatomical depth must gutta-percha be removed apical to the cementoenamel junction (CEJ) before placing the protective barrier?",
    options: [
      { id: "A", text: "Gutta-percha must never be removed from the pulp chamber" },
      { id: "B", text: "2.0 mm apical to the labial and interproximal CEJ (verified with a periodontal probe)" },
      { id: "C", text: "At the level of the incisal edge" },
      { id: "D", text: "10 mm apical to the radiographic apex" }
    ],
    correctAnswer: "B",
    explanation: "To accommodate a 2.0 mm cervical barrier that protects the dentinal tubules communicating with the periodontal ligament, gutta-percha must be removed with a heated plugger to a depth of 2 mm apical to the facial and proximal CEJ. The depth should be verified using a calibrated periodontal probe (Grossman's Endodontic Practice).",
    watsonClue: "Use your periodontal probe as a measuring rod: two millimeters below the cervical margin provides the exact space for the protective plug.",
    reagentClue: "Landmark rule: 2 mm gutta-percha reduction + 2 mm GIC barrier seal = complete coverage of patent cervical dentinal tubules."
  },
  {
    id: "4.4",
    level: 4,
    caseTitle: "Case #28: Nightguard Vital Bleaching Protocol",
    scenario: "Holmes reviews the original Nightguard Vital Bleaching (NGVB) protocol described by Van Haywood and Harald Heymann in their landmark 1989 paper.",
    question: "What bleaching agent, concentration, and delivery mechanism were originally introduced by Haywood and Heymann in 1989?",
    options: [
      { id: "A", text: "Sodium perborate powder sprinkled onto a dry toothbrush" },
      { id: "B", text: "50% Hydrochloric acid scrubbed with an orange-wood stick" },
      { id: "C", text: "35% Hydrogen Peroxide applied directly with a camel-hair brush" },
      { id: "D", text: "10% Carbamide Peroxide delivered in a custom-fitted, vacuum-formed plastic tray" }
    ],
    correctAnswer: "D",
    explanation: "In 1989, Van Haywood and Harald Heymann published the seminal paper introducing 'Nightguard Vital Bleaching' using 10% carbamide peroxide in a custom-fitted, vacuum-formed plastic matrix. This technique revolutionized aesthetic dentistry as a safe, patient-applied, dentist-supervised tooth whitening system (Sturdevant's Art and Science of Operative Dentistry).",
    watsonClue: "Haywood and Heymann 1989: ten percent carbamide peroxide in a custom plastic nightguard tray—the cornerstone of modern home bleaching.",
    reagentClue: "Haywood & Heymann (1989) Quintessence Int: 10% CP in custom tray achieved reliable, safe whitening with high patient compliance."
  },
  {
    id: "4.5",
    level: 4,
    caseTitle: "Case #29: The Tray Reservoir Debate",
    scenario: "A dental technician asks whether he must place block-out resin spacers on dental stone models to create 'reservoirs' in custom bleaching trays for 10% carbamide peroxide.",
    question: "According to randomized clinical trials in operative dentistry, what is the effect of custom tray reservoirs on the bleaching efficacy of 10% carbamide peroxide?",
    options: [
      { id: "A", text: "Reservoirs cause catastrophic negative suction that extracts dental pulp tissue" },
      { id: "B", text: "Reservoirs do not produce any statistically significant difference in whitening rate or final shade outcome" },
      { id: "C", text: "Without reservoirs, 10% carbamide peroxide completely fails to whiten teeth" },
      { id: "D", text: "Reservoirs make the teeth bleach 10 times faster with zero relapse" }
    ],
    correctAnswer: "B",
    explanation: "Clinical trials by Haywood, Matis, and Curtis have demonstrated that bleaching trays with reservoirs and trays without reservoirs achieve the exact same rate and final degree of shade lightening when using 10% carbamide peroxide. A well-fitted, reservoir-free tray is equally effective, uses less gel, and minimizes excess gel extrusion onto the gingival tissues (Sturdevant's Operative Dentistry).",
    watsonClue: "The evidence is clear: split-mouth clinical trials show teeth bleach just as beautifully without those labor-intensive tray spacers.",
    reagentClue: "Clinical trial data: Matis et al. (2002): ΔE shade change showed p > 0.05 between reservoir and non-reservoir arches using 10% CP."
  },
  {
    id: "4.6",
    level: 4,
    caseTitle: "Case #30: Emergency Management of Peroxide Gingival Blanching",
    scenario: "During an in-office 35% HP bleaching procedure, a small bead of gel seeps past the gingival barrier onto the interdental papilla. Within 30 seconds, the tissue turns chalky white ('blanching') and the patient reports acute stinging pain.",
    question: "What is the immediate clinical management protocol for accidental peroxide-induced soft tissue chemical burn/blanching?",
    options: [
      { id: "A", text: "Immediately suction and rinse copiously with water spray, then apply topical Vitamin E (alpha-tocopherol) oil" },
      { id: "B", text: "Apply 37% phosphoric acid to etch away the burned surface" },
      { id: "C", text: "Instruct the patient to hold hot coffee in the mouth for 10 minutes" },
      { id: "D", text: "Perform immediate surgical excision of the blanched gingiva with a scalpel" }
    ],
    correctAnswer: "A",
    explanation: "Concentrated 35% hydrogen peroxide causes rapid epithelial dehydration, oxygen effervescence inside capillary beds, and localized microvascular spasm (blanching). Management: Immediately aspirate the gel, flush the area copiously with water spray for several minutes, and apply Vitamin E (alpha-tocopherol) oil. Vitamin E is a potent antioxidant that neutralizes reactive free radicals, soothes the tissue, and restores normal pink vascular perfusion within minutes (Sturdevant's Operative Dentistry).",
    watsonClue: "Water to wash the caustic agent away, followed by Vitamin E oil to neutralize the free radicals and restore pink blood flow!",
    reagentClue: "Toxicology: H₂O₂ causes lipid peroxidation of mucosal membranes. Topical Vitamin E (alpha-tocopherol) terminates radical chain reactions and relieves stinging."
  },
  {
    id: "4.7",
    level: 4,
    caseTitle: "Case #31: Temporary Restoration for Walking Bleach",
    scenario: "After sealing sodium perborate and water inside the pulp chamber, Watson asks what temporary filling material should be placed in the access cavity between appointments.",
    question: "Which temporary restorative material provides the most reliable hermetic seal against bacterial ingress during walking bleach appointments?",
    options: [
      { id: "A", text: "A dry cotton pellet placed loose in the cavity without any cement" },
      { id: "B", text: "Wax paper folded into the access cavity" },
      { id: "C", text: "0.5 mm of soft gutta-percha" },
      { id: "D", text: "A minimum of 3.0 to 4.0 mm of Cavit, IRM, or Glass Ionomer Cement (GIC)" }
    ],
    correctAnswer: "D",
    explanation: "A dependable coronal seal is critical to prevent oral bacteria and saliva from leaking into the pulp chamber, and to prevent bleaching chemicals from leaking into the mouth. A minimum thickness of 3 to 4 mm of Cavit, IRM, or Glass Ionomer Cement (GIC) placed directly over the cavity margins provides an effective barrier between appointments (Grossman's Endodontic Practice).",
    watsonClue: "A flimsy seal is an open door for oral bacteria. Ensure at least three to four millimeters of sound temporary cement like Cavit or GIC.",
    reagentClue: "Microbiology: Cavit expands hygroscopically upon setting in saliva, providing an excellent seal when placed at ≥3.5 mm thickness."
  },
  {
    id: "4.8",
    level: 4,
    caseTitle: "Case #32: Auxiliary Light Activation Evidence",
    scenario: "A dental salesman claims that adding an expensive blue LED light to 35% in-office hydrogen peroxide increases whitening by 500% and guarantees zero sensitivity.",
    question: "According to systematic reviews and American Dental Association (ADA) reports, what is the scientific consensus regarding auxiliary light activation during in-office bleaching?",
    options: [
      { id: "A", text: "Auxiliary lights completely eliminate all tooth sensitivity" },
      { id: "B", text: "Auxiliary lights are mandatory; without them, hydrogen peroxide remains chemically inert" },
      { id: "C", text: "Auxiliary lights do NOT significantly improve long-term shade outcomes, but significantly increase the risk of tooth sensitivity due to photothermal heating" },
      { id: "D", text: "Lights turn the tooth into permanent porcelain within 20 minutes" }
    ],
    correctAnswer: "C",
    explanation: "Extensive systematic reviews (including Cochrane Systematic Reviews) and ADA reports conclude that light activation (halogen, LED, or plasma arc) does not produce a statistically significant or clinically meaningful difference in long-term tooth shade (at 1 to 6 months) compared to the same bleaching gel used without light. However, lights generate heat, which elevates intrapulpal temperature and significantly increases the incidence and severity of tooth sensitivity (Sturdevant & ADA Reports).",
    watsonClue: "The lights provide great theater for the patient in the dental chair, but clinical trials show they add no extra long-term whitening while making teeth more sensitive!",
    reagentClue: "Cochrane Systematic Review: Risk Ratio (RR) for tooth sensitivity is significantly higher with light activation, while long-term ΔE differences are clinically negligible."
  },

  // =========================================================================
  // LEVEL 5: FORENSIC PATHOLOGY & ADVERSE REACTIONS (BDS Final Year)
  // =========================================================================
  {
    id: "5.1",
    level: 5,
    caseTitle: "Case #33: Invasive Cervical Root Resorption",
    scenario: "Holmes reviews a case of severe Invasive Cervical Resorption (ICR) that developed 2 years after intracoronal non-vital bleaching. Histological inspection reveals clastic odontoclasts destroying the cervical root dentin just below the epithelial attachment.",
    question: "What anatomical anomaly present at the Cementoenamel Junction (CEJ) in approximately 10% of human teeth predisposes them to external cervical root resorption?",
    options: [
      { id: "A", text: "Cementum overlapping the enamel by 5 mm" },
      { id: "B", text: "A fusion of the root directly to the alveolar bone" },
      { id: "C", text: "A distinct gap between enamel and cementum leaving exposed, patent dentinal tubules" },
      { id: "D", text: "An enamel pearl embedded in the furcation" }
    ],
    correctAnswer: "C",
    explanation: "According to classic dental histology (Choquet / Hopewell-Smith): in 60-65% of teeth, cementum overlaps enamel; in 30%, enamel and cementum meet edge-to-edge; and in approximately 10% (5-10%) of teeth, there is an anatomical GAP where cementum and enamel fail to meet, leaving exposed dentinal tubules. If bleaching chemicals leak through an inadequate cervical barrier, they diffuse through these patent tubules into the cervical periodontal ligament, denaturing dentin proteins and triggering clastic odontoclasts that cause Invasive Cervical Resorption (Grossman's Endodontic Practice).",
    watsonClue: "In ten percent of human teeth, nature leaves a gap at the neck where enamel and cementum fail to meet. Peroxide leaks through this gap straight into the periodontal ligament.",
    reagentClue: "Histology: 10% of teeth have a CEJ gap. Peroxide radicular diffusion activates osteoclast differentiation via the RANKL pathway, leading to progressive root resorption."
  },
  {
    id: "5.2",
    level: 5,
    caseTitle: "Case #34: Thermocatalytic Bleaching Hazard",
    scenario: "Holmes examines G.S. Heithersay's landmark 1999 survey of 257 cases of Invasive Cervical Resorption. In the cohort associated with non-vital bleaching, over 80% had one specific factor in common.",
    question: "Which historical non-vital bleaching method was identified as the primary culprit driving external cervical resorption, leading to its abandonment?",
    options: [
      { id: "A", text: "Walking bleach with sodium perborate and water" },
      { id: "B", text: "Thermocatalytic bleaching using 30-35% hydrogen peroxide with heated metal instruments or lamps" },
      { id: "C", text: "At-home nightguard bleaching with 10% carbamide peroxide" },
      { id: "D", text: "Enamel microabrasion with pumice slurry" }
    ],
    correctAnswer: "B",
    explanation: "Heithersay's landmark 1999 study revealed that the vast majority of non-vital bleaching cases resulting in Invasive Cervical Resorption were treated with the 'thermocatalytic technique' (Superoxol heated inside the pulp chamber with hot metal instruments). Heat conducts rapidly down root dentin, causing thermal coagulation necrosis of the periodontal ligament and denuding cementum at the cervical margin, triggering aggressive clastic resorption (Grossman's Endodontic Practice).",
    watsonClue: "Heating concentrated Superoxol inside the tooth scalds the delicate cervical ligament cells to death, inviting the body's scavenger cells to destroy the root.",
    reagentClue: "Heithersay (1999) Endod Dent Traumatol: Thermocatalytic bleaching causes thermal denaturation of cementoblasts and PDL fibers, inducing an aseptic resorptive inflammatory response."
  },
  {
    id: "5.3",
    level: 5,
    caseTitle: "Case #35: Oxygen Inhibition of Composite Bonding",
    scenario: "Immediately after an in-office 35% HP bleaching session, a dentist bonds a Class IV composite restoration. At 48 hours, the entire composite restoration debonds cleanly without any mechanical resistance.",
    question: "What is the exact biochemical mechanism causing composite resin bonding failure immediately following peroxide bleaching?",
    options: [
      { id: "A", text: "Hydrogen peroxide permanently dissolves 100% of enamel hydroxyapatite crystals" },
      { id: "B", text: "Peroxide converts composite resin into water within 2 hours" },
      { id: "C", text: "The bonding agent evaporates instantly due to high dental light radiation" },
      { id: "D", text: "Residual oxygen free radicals trapped within enamel pores and dentinal tubules inhibit the free-radical polymerization of adhesive resin monomers" }
    ],
    correctAnswer: "D",
    explanation: "During bleaching, reactive oxygen species and nascent oxygen molecules diffuse into and remain dissolved within the porous enamel spaces and dentinal tubule fluid. When composite resin bonding is attempted immediately, this residual oxygen acts as a potent free-radical scavenger. It reacts with initiating amine/camphorquinone radicals to form stable peroxy radicals, prematurely terminating addition polymerization and leaving an unpolymerized, weakened bonding interface (Sturdevant's Operative Dentistry).",
    watsonClue: "Composite resin cures via free-radical addition polymerization. Rogue oxygen radicals trapped in the tooth act as fire extinguishers, quenching the cure!",
    reagentClue: "Polymer chemistry: R• + O₂ → ROO• (inactive peroxy radical). Trapped oxygen scavenges initiating free radicals, preventing resin tag cross-linking and dropping bond strength by >50%."
  },
  {
    id: "5.4",
    level: 5,
    caseTitle: "Case #36: The Post-Bleaching Bonding Delay",
    scenario: "Watson asks how long a clinician must wait following the completion of vital or non-vital bleaching before placing definitive composite resin restorations or porcelain veneers.",
    question: "What is the evidence-based minimum waiting period required after bleaching before performing adhesive composite bonding?",
    options: [
      { id: "A", text: "7 to 14 days (1 to 2 weeks)" },
      { id: "B", text: "6 months" },
      { id: "C", text: "3 years" },
      { id: "D", text: "15 minutes" }
    ],
    correctAnswer: "A",
    explanation: "Dental literature and textbook consensus dictate waiting a minimum of 7 to 14 days (1 to 2 weeks) following the completion of bleaching before placing adhesive composite restorations or veneers. This waiting period serves two vital purposes: (1) It allows all residual trapped oxygen to diffuse out of the tooth structure so composite bond strengths return to normal baseline; and (2) It allows shade stabilization after initial dehydration rebound (Sturdevant's Art and Science of Operative Dentistry).",
    watsonClue: "Remember the standard rule of one to two weeks! It gives oxygen time to leave and allows the true, rehydrated tooth shade to settle.",
    reagentClue: "Bond strength recovery: Enamel and dentin microtensile bond strength returns to 100% of control values after 7 to 14 days of water/salivary storage."
  },
  {
    id: "5.5",
    level: 5,
    caseTitle: "Case #37: The Sodium Ascorbate Rapid Reversal",
    scenario: "An emergency patient broke an anterior tooth on the day bleaching was completed and cannot wait 14 days for a composite restoration. Holmes reaches for a 10% topical solution.",
    question: "According to dental research (Lai et al.), what antioxidant agent, concentration, and application time can immediately reverse the adverse effects of bleaching and restore composite bond strength?",
    options: [
      { id: "A", text: "70% Isopropyl alcohol rubbed for 5 seconds" },
      { id: "B", text: "Sodium hypochlorite soaked for 1 hour" },
      { id: "C", text: "37% Phosphoric acid left unrinsed for 30 minutes" },
      { id: "D", text: "10% Sodium Ascorbate solution applied to the tooth surface for 10 minutes" }
    ],
    correctAnswer: "D",
    explanation: "Landmark research by Lai, Titley, and colleagues showed that topical application of 10% Sodium Ascorbate (an antioxidant salt of Vitamin C) for 10 minutes to peroxide-treated enamel and dentin completely neutralizes residual oxygen free radicals. By disarming the entrapped oxidizing agents, 10% sodium ascorbate completely restores shear and microtensile composite bond strength to control baseline levels, allowing immediate bonding (Sturdevant's Operative Dentistry).",
    watsonClue: "Vitamin C is nature's classic antioxidant! Ten percent sodium ascorbate applied for ten minutes neutralizes the trapped oxygen instantly.",
    reagentClue: "Redox titration: Ascorbic acid reduces residual peroxide radicals: Ascorbate + 2 RO• → Dehydroascorbate + 2 ROH, completely reversing polymerization inhibition."
  },
  {
    id: "5.6",
    level: 5,
    caseTitle: "Case #38: The Mechanism of Bleaching Tooth Sensitivity",
    scenario: "A patient undergoing at-home 10% carbamide peroxide bleaching reports sharp, shooting sensitivity to cold drinks. Dr. Watson wonders about the physiological mechanism.",
    question: "What is the biological mechanism underlying transient tooth sensitivity during vital bleaching?",
    options: [
      { id: "A", text: "Permanent fracture of the apical third of the root" },
      { id: "B", text: "Invasion of oral bacteria through cracked enamel directly into pulpal vessels" },
      { id: "C", text: "Rapid diffusion of low-molecular-weight (34 Da) H₂O₂ through enamel prisms and dentinal tubules into the pulp chamber, causing transient mild reversible pulpal inflammation and sensory nerve excitation" },
      { id: "D", text: "Complete liquefaction and death of the entire dental pulp" }
    ],
    correctAnswer: "C",
    explanation: "Hydrogen peroxide is a minuscule, highly permeable molecule with a molecular weight of only 34 Da. Studies demonstrate that peroxide molecules easily permeate through enamel interprismatic spaces and patent dentinal tubules, reaching the pulp chamber within 15 to 30 minutes. The peroxide causes mild, transient, reversible neurogenic pulpal inflammation, exciting intradental sensory nerve fibers and producing transient hypersensitivity (Sturdevant's Operative Dentistry).",
    watsonClue: "Because the peroxide molecule is tiny—scarcely larger than water—it slips straight through the tooth into the pulp chamber within minutes, tickling the nerve endings.",
    reagentClue: "Diffusion rate: H₂O₂ (MW 34) traverses 2-3 mm of tooth structure in under 30 minutes. Intradental A-delta and C nerve fibers undergo transient depolarization."
  },
  {
    id: "5.7",
    level: 5,
    caseTitle: "Case #39: Management of Bleaching Hypersensitivity",
    scenario: "A patient develops moderate tooth sensitivity during at-home bleaching. The dentist decides to provide active desensitizing therapy.",
    question: "Which two active desensitizing agents are commonly used to treat or prevent bleaching-induced tooth sensitivity, and how do they function?",
    options: [
      { id: "A", text: "Potassium Nitrate (which depolarizes nerve cell membranes, blocking pain transmission) and Sodium Fluoride (which occludes open dentinal tubules)" },
      { id: "B", text: "Aspirin and Codeine rubbed directly onto the gingiva" },
      { id: "C", text: "Zinc oxide eugenol placed directly on the tongue" },
      { id: "D", text: "Hydrochloric acid and Pumice to grind down the sensitive areas" }
    ],
    correctAnswer: "A",
    explanation: "The two primary desensitizing agents used in bleaching are: (1) Potassium Nitrate (usually 5%): potassium ions diffuse into the pulp and increase extracellular potassium concentration, depolarizing nerve membranes and preventing repolarization, thereby blocking transmission of pain impulses; and (2) Sodium Fluoride: precipitates calcium fluoride crystals inside patent dentinal tubules, physically occluding tubular fluid flow (Sturdevant's Operative Dentistry).",
    watsonClue: "Potassium nitrate calms the nerve fibers directly, while fluoride plugs up the microscopic tubes to stop fluid movement.",
    reagentClue: "Neurophysiology: K⁺ ions prevent transmission of action potentials along pulpal nerve fibers; Fluoride precipitates CaF₂ micro-plugs, reducing hydrodynamic fluid flow."
  },
  {
    id: "5.8",
    level: 5,
    caseTitle: "Case #40: Effect on Enamel Microhardness",
    scenario: "A laboratory study measures the Knoop and Vickers surface microhardness of human enamel before and after a standard 14-day 10% carbamide peroxide bleaching regimen.",
    question: "What is the typical effect of proper vital bleaching with 10% carbamide peroxide on enamel surface microhardness and mineral content?",
    options: [
      { id: "A", text: "Enamel becomes completely soft like rubber and can be wiped off with a napkin" },
      { id: "B", text: "A slight, transient decrease in surface microhardness that is completely restored to baseline within 7-14 days by salivary remineralization" },
      { id: "C", text: "Permanent, irreversible loss of 80% of all enamel mineral content" },
      { id: "D", text: "Enamel microhardness triples and becomes harder than tungsten carbide" }
    ],
    correctAnswer: "B",
    explanation: "Multiple independent studies demonstrate that proper vital bleaching using 10% carbamide peroxide produces only a minor, transient, superficial reduction in enamel microhardness. Because human saliva is naturally supersaturated with calcium and phosphate ions, normal salivary exposure completely remineralizes the surface, restoring baseline microhardness within 7 to 14 days without any permanent structural damage (Sturdevant's Art and Science of Operative Dentistry).",
    watsonClue: "Saliva is nature's remineralizing bath: any minor loss of surface hardness is swiftly repaired by salivary minerals within a week or two.",
    reagentClue: "Remineralization equilibrium: Salivary statherin and proline-rich proteins maintain Ca²⁺ and PO₄³⁻ supersaturation, remineralizing etched prism boundaries."
  },

  // =========================================================================
  // LEVEL 6: THE MORIARTY ENIGMA (BDS Final Year - Master Clinical Scenarios)
  // =========================================================================
  {
    id: "6.1",
    level: 6,
    caseTitle: "Case #41: The Calcific Metamorphosis Management Dilemma",
    scenario: "A 23-year-old athlete presents with an asymptomatic, deeply yellow maxillary central incisor 7 years after sports trauma. Radiographs confirm complete pulp chamber and canal obliteration (PCO), normal periodontal ligament, and no periapical lesion. EPT is weakly responsive.",
    question: "According to American Association of Endodontists (AAE) guidelines and endodontic evidence, what is the correct primary conservative treatment of choice?",
    options: [
      { id: "A", text: "Immediate surgical apicoectomy with retro-filling" },
      { id: "B", text: "External nightguard vital bleaching with 10% carbamide peroxide; prophylactic endodontic treatment is contraindicated as canal scouting carries severe perforation risk" },
      { id: "C", text: "Immediate tooth extraction and implant placement" },
      { id: "D", text: "Aggressive drilling with high-speed burs to find the obliterated canal for walking bleach" }
    ],
    correctAnswer: "B",
    explanation: "In Calcific Metamorphosis (PCO), the tooth turns yellow due to excessive tertiary dentin deposition, but the pulp remains vital in over 85% of cases. The American Association of Endodontists (AAE) explicitly advises that prophylactic root canal treatment is NOT indicated for asymptomatic teeth with PCO without periapical pathosis, as negotiating an obliterated canal carries a very high risk of root perforation. External nightguard vital bleaching with 10% carbamide peroxide is the primary treatment of choice and reliably whitens the yellow tooth (Grossman & AAE Guidelines).",
    watsonClue: "Do not drill into an obliterated canal looking for trouble! The pulp is vital and asymptomatic; external nightguard bleaching will brighten the thick yellow dentin safely.",
    reagentClue: "AAE Guidelines: Conservative approach is external 10% CP nightguard vital bleaching. Peroxide penetrates through enamel and ox-cleaves dense dentinal pigments."
  },
  {
    id: "6.2",
    level: 6,
    caseTitle: "Case #42: Croll's Enamel Microabrasion Technique",
    scenario: "A 16-year-old patient presents with unsightly superficial brown fluorosis stains and chalky white patches on the labial surfaces of maxillary incisors. Holmes decides on a chemical-mechanical approach.",
    question: "What is the classic composition of Croll's enamel microabrasion compound, and how much enamel is typically removed per application cycle?",
    options: [
      { id: "A", text: "10% Sodium hydroxide with baking soda; removes zero enamel" },
      { id: "B", text: "Pure hydrofluoric acid applied for 30 minutes without pumice" },
      { id: "C", text: "50% Sulfuric acid with diamond powder; removes 2 mm of enamel per cycle" },
      { id: "D", text: "18% Hydrochloric acid (or modern 6.6% HCl) mixed with fine pumice; removes approximately 10 to 25 µm of superficial enamel per 10-second cycle" }
    ],
    correctAnswer: "D",
    explanation: "Enamel microabrasion, developed by Theodore Croll in 1986, originally combined 18% hydrochloric acid with fine pumice (modern commercial products like Opalustre use ~6.6% HCl with silicon carbide micro-particles). Applied with a slow-speed rubber cup under firm pressure for 10-second intervals, it erodes and abrades approximately 10 to 25 µm of enamel per application (total removal should remain under 100-200 µm). It permanently removes superficial enamel dyschromias confined to the outer 0.2 mm (Sturdevant's Operative Dentistry).",
    watsonClue: "Hydrochloric acid plus pumice: the classic Croll slurry that rubs away the outer few microns of stained enamel while leaving a smooth, lustrous glaze.",
    reagentClue: "Croll (1986, 1989): Chemo-mechanical abrasion. Acid softens outer enamel mineral while pumice rubs it away, creating a smooth prism-free surface glaze."
  },
  {
    id: "6.3",
    level: 6,
    caseTitle: "Case #43: Severe Tetracycline Staining (Jordan-Boksman)",
    scenario: "A 35-year-old female presents with severe dark bluish-purple horizontal bands across the cervical third of all anterior teeth (Jordan and Boksman Grade III/IV). She desires a non-invasive option before veneers.",
    question: "What is the evidence-based, minimally invasive extended bleaching protocol developed by Van Haywood for severe Grade III and IV tetracycline staining?",
    options: [
      { id: "A", text: "Extended Nightguard Vital Bleaching (ENVB) using 10% carbamide peroxide nightly for 3 to 12 months with periodic clinical monitoring" },
      { id: "B", text: "Drilling access cavities into all vital anterior teeth for walking bleach" },
      { id: "C", text: "A single 5-minute session of 40% hydrogen peroxide" },
      { id: "D", text: "Subgingival surgical curettage and bleaching the root surface directly" }
    ],
    correctAnswer: "A",
    explanation: "Severe tetracycline discoloration (Jordan & Boksman Grade III and IV) involves deep, insoluble dentinal staining that does not respond to short 2-week bleaching regimens. Landmark long-term studies by Van Haywood demonstrated that Extended Nightguard Vital Bleaching (ENVB) using 10% carbamide peroxide nightly for 3 to 12 months (and up to 15 months in severe cases) produces dramatic, long-lasting aesthetic lightening, often eliminating the need for invasive porcelain crowns or veneers (Sturdevant's Art and Science of Operative Dentistry).",
    watsonClue: "Patience wins the case! Tetracycline buried deep in the dentin cannot be shifted in two weeks; it requires months of steady, low-concentration nightguard bleaching.",
    reagentClue: "Haywood et al. (1997, 2005): Long-term 10% CP nightly for 3-12 months showed successful lightening in >80% of severe tetracycline cases with safe pulpal follow-up."
  },
  {
    id: "6.4",
    level: 6,
    caseTitle: "Case #44: The Relapse of Non-Vital Bleaching",
    scenario: "An endodontically treated tooth successfully whitened with walking bleach 3 years ago presents with a gradual dark greyish relapse. Radiographs show a sound root canal filling and no apical pathology.",
    question: "What is the most common cause of aesthetic relapse following successful non-vital walking bleach, and how is it addressed?",
    options: [
      { id: "A", text: "The tooth absorbing black lead from the patient's dental amalgam in another quadrant" },
      { id: "B", text: "Regeneration of a necrotic pulp with fresh gangrene" },
      { id: "C", text: "Micro-leakage of oral fluids and chromogens around a defective coronal restoration; managed by replacing the restoration and repeating a conservative walking bleach cycle" },
      { id: "D", text: "Spontaneous conversion of gutta-percha into coal" }
    ],
    correctAnswer: "C",
    explanation: "Aesthetic relapse occurs in approximately 10% to 25% of non-vital bleached teeth after 1 to 5 years. The primary cause of relapse is coronal micro-leakage around a defective composite or amalgam access restoration, allowing oral pigments, tannins, and saliva to re-infiltrate the dentinal tubules. Treatment involves removing the old restoration, repeating a brief walking bleach procedure, and placing a fresh, well-sealed composite restoration (Grossman's Endodontic Practice).",
    watsonClue: "A leaking roof lets the rain back in! If the temporary or permanent filling at the back of the tooth leaks, oral stains seep back into the dentin.",
    reagentClue: "Long-term endodontic follow-up: Holmstrup & Weiger reported ~80% success at 5 years. Marginal micro-leakage of composite access restorations is the primary predictor of relapse."
  },
  {
    id: "6.5",
    level: 6,
    caseTitle: "Case #45: Bleaching Teeth with White Spot Lesions",
    scenario: "An 18-year-old post-orthodontic patient presents with chalky white demineralized 'white spot lesions' around former bracket locations. The patient insists on immediate in-office power bleaching.",
    question: "Why should immediate in-office power bleaching be avoided, and what is the proper sequential management for white spot lesions?",
    options: [
      { id: "A", text: "Bleaching initially whitens the surrounding enamel, making the chalky white spots stand out even more; the sequence requires remineralization (fluoride/CPP-ACP) or resin infiltration (Icon) first, followed by conservative vital bleaching" },
      { id: "B", text: "White spots are malignant tumors that spread when exposed to peroxide" },
      { id: "C", text: "Power bleaching turns all white spots bright orange" },
      { id: "D", text: "Power bleaching dissolves the white spots, leaving giant cavernous holes in the teeth" }
    ],
    correctAnswer: "A",
    explanation: "White spot lesions are subsurface hypomineralizations that scatter light diffusely. If high-concentration power bleaching is performed immediately, the surrounding normal enamel lightens and the porous white spots dehydrate severely, dramatically exaggerating their contrast and making them look glaringly worse. The proper sequence: Remineralization therapy (CPP-ACP / fluoride varnish) for 2-3 months or resin infiltration (Icon) to match refractive index, followed by gentle vital bleaching to blend the entire smile uniformly (Sturdevant's Operative Dentistry).",
    watsonClue: "If you paint a white wall around a white chalk mark, the chalk mark looks even more glaring! Blend the porous lesion first before whitening the background.",
    reagentClue: "Optical refractive matching: Porous enamel scatters light. Resin infiltration (n = 1.52) or remineralization eliminates optical opacity before background lightening."
  },
  {
    id: "6.6",
    level: 6,
    caseTitle: "Case #46: Brown vs White Fluorosis Sequencing",
    scenario: "A 20-year-old patient from an endemic fluorosis district presents with a combination of dark brown fluorosis patches on the central incisors and generalized white opaque striations across all anterior teeth.",
    question: "What is the recommended clinical sequence to treat this combination of brown and white fluorosis?",
    options: [
      { id: "A", text: "Apply silver diamine fluoride to stain the entire dentition black" },
      { id: "B", text: "Perform enamel microabrasion first to remove superficial brown dyschromia, allow remineralization for 2-4 weeks, then perform vital bleaching to lighten background enamel and camouflage white lesions" },
      { id: "C", text: "Perform power bleaching for 10 hours continuously, then grind the teeth with diamond burs" },
      { id: "D", text: "Extract all anterior teeth and place immediate full dentures" }
    ],
    correctAnswer: "B",
    explanation: "Brown fluorosis stains are superficial extrinsic/intrinsic chromogens located in the outer porous 100-200 µm of enamel, which are readily removed by enamel microabrasion (Croll's technique). In contrast, white fluorosis lesions represent deeper subsurface hypomineralization that cannot be scrubbed away. The correct sequence: Microabrasion is performed first to eradicate brown stains; the teeth are allowed to remineralize for 2-4 weeks; then at-home vital bleaching is performed to lighten the darker background enamel, effectively blending and camouflaging the white patches (Sturdevant's Operative Dentistry).",
    watsonClue: "First scrub off the brown surface crust with microabrasion! Once clear, gentle vital bleaching brightens the background enamel to blend the white patches.",
    reagentClue: "Sequencing protocol: Microabrasion (HCl + pumice) removes outer 50-100 µm brown stains. Subsequent 10% CP bleaching raises background L* value to blend white opacities."
  },
  {
    id: "6.7",
    level: 6,
    caseTitle: "Case #47: Residual Endodontic Sealer Discoloration",
    scenario: "Holmes investigates why a maxillary incisor with a technically adequate root canal filling turned dark slate grey within 6 months. Examination of the pulp chamber reveals gutta-percha and sealer remnants left in the pulp horns coronal to the gingival margin.",
    question: "Which components of historical root canal sealers (such as Rickert's or Grossman's sealer) undergo oxidation and cause severe coronal tooth discoloration if left in the pulp chamber?",
    options: [
      { id: "A", text: "Sodium chloride crystals that evaporate into chlorine gas" },
      { id: "B", text: "Pure calcium hydroxide that dissolves the pulp horns" },
      { id: "C", text: "Silver particles or heavy metal radio-opacifiers (bismuth oxide, barium sulfate) in the sealer that oxidize upon exposure to light and oral fluids" },
      { id: "D", text: "Gutta-percha latex that spontaneously turns into liquid charcoal" }
    ],
    correctAnswer: "C",
    explanation: "Endodontic sealers containing silver particles (e.g., Rickert's Kerr sealer) or heavy metal radio-opacifiers (such as bismuth oxide or barium sulfate in Grossman's sealer or AH26) cause severe coronal discoloration if left inside the pulp chamber coronal to the CEJ. These metallic elements oxidize into dark silver sulfides or bismuth compounds that penetrate deeply into coronal dentinal tubules. Thorough debridement of all sealer and gutta-percha from the pulp chamber below the CEJ is mandatory during obturation (Grossman's Endodontic Practice).",
    watsonClue: "A careless operator left silver-bearing sealer in the pulp horns! Those heavy metals oxidize and turn the crown as dark as a lead pencil.",
    reagentClue: "Oxidation chemistry: Bismuth oxide (Bi₂O₃) and silver in sealers react with sulfides and light, forming dark Bi-complexes and Ag₂S, producing deep radicular and coronal staining."
  },
  {
    id: "6.8",
    level: 6,
    caseTitle: "Case #48: Post-Bleaching Shade Relapse & Touch-Up Regimen",
    scenario: "A patient who completed vital nightguard bleaching asks Holmes how long her new bright smile will last and what maintenance regimen is recommended in operative dentistry.",
    question: "According to long-term clinical retention studies, what is the typical longevity of vital bleaching, and what is the standard touch-up maintenance protocol?",
    options: [
      { id: "A", text: "Whitening is completely permanent for 100 years with zero shade change" },
      { id: "B", text: "Teeth relapse 100% back to their original dark shade within 48 hours in all patients" },
      { id: "C", text: "The patient must never drink water or eat food again to maintain the shade" },
      { id: "D", text: "Significant whitening is retained for 1 to 3 years; touch-up maintenance consists of wearing the existing custom tray with 10% carbamide peroxide for 1 to 2 nights every 6-12 months" }
    ],
    correctAnswer: "D",
    explanation: "Long-term clinical trials by Van Haywood, Leonard, and Swift show that the aesthetic results of vital nightguard bleaching are remarkably stable: approximately 70% to 80% of patients retain acceptable shade lightening after 1 to 3 years (and many for over 5-10 years). For patients who consume staining foods (coffee, tea, red wine), touch-up maintenance involves using their original custom bleaching tray with 10% carbamide peroxide for just 1 or 2 nights every 6 to 12 months (Sturdevant's Art and Science of Operative Dentistry).",
    watsonClue: "The results are remarkably long-lasting! A brief touch-up for a single night or two once a year keeps the patient's smile as radiant as the day it was cracked.",
    reagentClue: "Clinical retention: Swift et al. & Ritter et al.: At 3-year follow-up, >75% of patients retained significant shade improvement without touch-up; 1-2 nights of 10% CP restores peak lightness."
  }
];

// Helper utilities for the quiz
const QUIZ_CONFIG = {
  totalLevels: 6,
  questionsPerLevel: 8,
  totalQuestions: 48,
  pointsPerCorrect: 100,
  deductionPointsPerLifeline: {
    watson: 10,
    loupe: 15,
    reagent: 20
  },
  rankTitles: [
    { minScore: 4400, title: "The Master Detective (Sherlock Holmes Tier)", verdict: "Deductive Perfection! Scotland Yard and the Dental Council bow to your peerless clinical acumen." },
    { minScore: 3700, title: "Chief Inspector of Scotland Yard", verdict: "Exceptional Forensic Mastery! You cracked the toughest bleaching cases across all 48 dossiers." },
    { minScore: 3000, title: "Consulting Dental Specialist", verdict: "Commendable Forensic Acumen. A solid BDS final-year performance with minor evidentiary slips." },
    { minScore: 2000, title: "Baker Street Irregular", verdict: "Promising Deductions. Further review of Sturdevant & Grossman is recommended." },
    { minScore: 0, title: "Inspector Lestrade's Apprentice", verdict: "Case Cold. Return to the laboratory bench and re-examine the basic chemical reagents." }
  ]
};
