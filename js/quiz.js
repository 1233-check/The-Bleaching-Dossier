/**
 * 221B Baker Street - The Bleaching Dossier: Game & Competition Engine
 * Handles team registration, lifelines, scoring, level progression, and CSV export.
 * Built for BDS Final Year Dental Fest Competition.
 */

class SherlockBleachingQuiz {
  constructor() {
    this.storageKey = "sherlock_bleaching_quiz_data";
    this.state = this.loadState() || this.getInitialState();
    this.currentQuestion = null;
    this.eliminatedOptions = [];
    this.bindEvents();
    this.renderCurrentView();
  }

  getInitialState() {
    return {
      team: {
        name: "",
        startedAt: null,
        completedAt: null
      },
      currentLevelId: 1,
      currentQuestionIndex: 0,
      totalScore: 0,
      levelScores: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
      levelCompleted: { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false },
      lifelines: {
        watson: 6,
        loupe: 6,
        reagent: 6
      },
      auditLog: [],
      gameStarted: false,
      gameFinished: false
    };
  }

  loadState() {
    try {
      const data = localStorage.getItem(this.storageKey);
      if (!data) return null;
      const parsed = JSON.parse(data);
      if (!parsed || !parsed.team || typeof parsed.currentLevelId !== 'number' || !parsed.levelScores) {
        return null;
      }
      return parsed;
    } catch (e) {
      console.warn("Could not load state:", e);
      return null;
    }
  }

  saveState() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    } catch (e) {
      console.warn("Could not save state:", e);
    }
  }

  clearState() {
    localStorage.removeItem(this.storageKey);
    this.state = this.getInitialState();
  }

  bindEvents() {
    // 1. Registration Form Submit
    const regForm = document.getElementById("registration-form");
    if (regForm) {
      regForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.startInvestigation();
      });
    }

    // Direct Quick Start Button if clicked outside form
    const startBtn = document.getElementById("start-investigation-btn");
    if (startBtn) {
      startBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.startInvestigation();
      });
    }

    // 2. Sound Toggle
    const soundBtn = document.getElementById("sound-toggle-btn");
    if (soundBtn) {
      soundBtn.addEventListener("click", () => {
        const isMuted = audioFX.toggleMute();
        soundBtn.innerHTML = isMuted 
          ? '<i class="fa-solid fa-volume-xmark"></i> Sound Off' 
          : '<i class="fa-solid fa-volume-high"></i> Sound On';
        soundBtn.classList.toggle("muted", isMuted);
      });
    }

    // 3. Modals Close
    document.querySelectorAll(".close-modal-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        audioFX.playPaperShuffle();
        this.closeAllModals();
      });
    });

    // 4. Lifeline Buttons
    const watsonBtn = document.getElementById("lifeline-watson-btn");
    if (watsonBtn) {
      watsonBtn.addEventListener("click", () => this.useWatsonLifeline());
    }

    const loupeBtn = document.getElementById("lifeline-loupe-btn");
    if (loupeBtn) {
      loupeBtn.addEventListener("click", () => this.useLoupeLifeline());
    }

    const reagentBtn = document.getElementById("lifeline-reagent-btn");
    if (reagentBtn) {
      reagentBtn.addEventListener("click", () => this.useReagentLifeline());
    }

    // 5. Next Case Button
    const nextCaseBtn = document.getElementById("next-case-btn");
    if (nextCaseBtn) {
      nextCaseBtn.addEventListener("click", () => this.advanceToNextCase());
    }

    // 6. Next Level Button
    const nextLevelBtn = document.getElementById("next-level-btn");
    if (nextLevelBtn) {
      nextLevelBtn.addEventListener("click", () => this.advanceToNextLevel());
    }

    // 7. Export CSV
    const exportCsvBtn = document.getElementById("export-csv-btn");
    if (exportCsvBtn) {
      exportCsvBtn.addEventListener("click", () => this.exportScoreReportCSV());
    }

    // 8. Print Certificate
    const printCertBtn = document.getElementById("print-cert-btn");
    if (printCertBtn) {
      printCertBtn.addEventListener("click", () => window.print());
    }

    // 9. Reset Game
    const resetBtn = document.getElementById("reset-quiz-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => this.confirmResetGame());
    }

    // 10. Interactive Dossier Tabs on Hero Screen
    document.querySelectorAll(".hero-tab-btn").forEach(tab => {
      tab.addEventListener("click", (e) => {
        const levelId = parseInt(tab.getAttribute("data-level"), 10);
        this.previewHeroLevel(levelId);
        audioFX.playPaperShuffle();
      });
    });

    // Interactive magnifying glass inspection on Hero
    const loupeInspectBtn = document.getElementById("inspect-clue-btn");
    if (loupeInspectBtn) {
      loupeInspectBtn.addEventListener("click", () => {
        audioFX.playLoupe();
        const secretClueBox = document.getElementById("hero-secret-clue");
        if (secretClueBox) secretClueBox.classList.toggle("hidden");
      });
    }
  }

  previewHeroLevel(levelId) {
    document.querySelectorAll(".hero-tab-btn").forEach(t => t.classList.remove("active-tab"));
    const selectedTab = document.querySelector(`.hero-tab-btn[data-level="${levelId}"]`);
    if (selectedTab) selectedTab.classList.add("active-tab");

    const levelObj = QUIZ_LEVELS.find(l => l.id === levelId);
    const previewBox = document.getElementById("hero-level-preview");
    if (previewBox && levelObj) {
      previewBox.innerHTML = `
        <div class="preview-badge"><i class="fa-solid ${levelObj.icon}"></i> ${levelObj.badge}</div>
        <h4>${levelObj.title}</h4>
        <p class="preview-sub">${levelObj.subtitle}</p>
        <p class="preview-desc">${levelObj.description}</p>
      `;
    }
  }

  startInvestigation() {
    const teamNameInput = document.getElementById("team-name-input");
    const teamName = teamNameInput ? teamNameInput.value.trim() : "";

    if (!teamName) {
      if (teamNameInput) {
        teamNameInput.focus();
        teamNameInput.classList.add("shake-error");
        setTimeout(() => teamNameInput.classList.remove("shake-error"), 600);
      }
      return;
    }

    this.state.team = {
      name: teamName,
      startedAt: new Date().toISOString(),
      completedAt: null
    };
    this.state.gameStarted = true;
    this.state.currentLevelId = 1;
    this.state.currentQuestionIndex = 0;
    this.saveState();

    audioFX.playStamp();
    audioFX.playPaperShuffle();
    this.renderCurrentView();
  }

  renderCurrentView() {
    const regScreen = document.getElementById("registration-screen");
    const caseScreen = document.getElementById("case-screen");
    const levelClearedScreen = document.getElementById("level-cleared-screen");
    const finaleScreen = document.getElementById("finale-screen");

    // Hide all main containers
    [regScreen, caseScreen, levelClearedScreen, finaleScreen].forEach(el => {
      if (el) el.classList.add("hidden");
    });

    // Update global header stats
    this.updateHeaderStats();

    if (!this.state.gameStarted) {
      if (regScreen) regScreen.classList.remove("hidden");
      return;
    }

    if (this.state.gameFinished) {
      if (finaleScreen) finaleScreen.classList.remove("hidden");
      this.renderFinaleScreen();
      return;
    }

    // Render active question
    if (caseScreen) {
      caseScreen.classList.remove("hidden");
      this.renderCaseQuestion();
    }
  }

  updateHeaderStats() {
    const teamNameDisplay = document.getElementById("display-team-name");
    const scoreDisplay = document.getElementById("display-score");
    const dossierLevelDisplay = document.getElementById("display-level-badge");

    if (teamNameDisplay) teamNameDisplay.textContent = this.state.team.name || "Unregistered Detective";
    if (scoreDisplay) scoreDisplay.textContent = this.state.totalScore.toLocaleString();

    const currentLevelObj = QUIZ_LEVELS.find(l => l.id === this.state.currentLevelId);
    if (dossierLevelDisplay && currentLevelObj) {
      dossierLevelDisplay.textContent = `Dossier ${this.state.currentLevelId} of 6`;
    }

    // Update lifeline button counters
    const watsonBadge = document.getElementById("watson-count-badge");
    const loupeBadge = document.getElementById("loupe-count-badge");
    const reagentBadge = document.getElementById("reagent-count-badge");

    if (watsonBadge) watsonBadge.textContent = this.state.lifelines.watson;
    if (loupeBadge) loupeBadge.textContent = this.state.lifelines.loupe;
    if (reagentBadge) reagentBadge.textContent = this.state.lifelines.reagent;

    // Lifeline button disabled state
    const watsonBtn = document.getElementById("lifeline-watson-btn");
    const loupeBtn = document.getElementById("lifeline-loupe-btn");
    const reagentBtn = document.getElementById("lifeline-reagent-btn");

    if (watsonBtn) watsonBtn.disabled = this.state.lifelines.watson <= 0;
    if (loupeBtn) loupeBtn.disabled = this.state.lifelines.loupe <= 0;
    if (reagentBtn) reagentBtn.disabled = this.state.lifelines.reagent <= 0;

    // Update progress tracker pills (Level 1-6)
    this.updateLevelTrackerPills();
  }

  updateLevelTrackerPills() {
    for (let i = 1; i <= QUIZ_CONFIG.totalLevels; i++) {
      const pill = document.getElementById(`track-pill-${i}`);
      if (!pill) continue;
      pill.classList.remove("active", "completed", "locked");
      if (this.state.levelCompleted[i]) {
        pill.classList.add("completed");
      } else if (i === this.state.currentLevelId) {
        pill.classList.add("active");
      } else {
        pill.classList.add("locked");
      }
    }
  }

  getLevelQuestions(levelId) {
    return QUIZ_QUESTIONS.filter(q => q.level === levelId);
  }

  renderCaseQuestion() {
    const levelQuestions = this.getLevelQuestions(this.state.currentLevelId);
    this.currentQuestion = levelQuestions[this.state.currentQuestionIndex];
    this.eliminatedOptions = [];

    if (!this.currentQuestion) {
      console.error("Question not found for level", this.state.currentLevelId, "index", this.state.currentQuestionIndex);
      return;
    }

    // Set header labels
    const caseNumberEl = document.getElementById("case-number-title");
    const levelSubtitleEl = document.getElementById("case-level-subtitle");
    const scenarioBoxEl = document.getElementById("case-scenario-text");
    const questionTextEl = document.getElementById("case-question-text");
    const optionsGridEl = document.getElementById("case-options-grid");
    const feedbackBoxEl = document.getElementById("case-feedback-box");
    const nextBtn = document.getElementById("next-case-btn");

    if (caseNumberEl) caseNumberEl.textContent = this.currentQuestion.caseTitle;
    if (levelSubtitleEl) {
      const levelObj = QUIZ_LEVELS.find(l => l.id === this.state.currentLevelId);
      levelSubtitleEl.textContent = `${levelObj.title} • Case ${this.state.currentQuestionIndex + 1} of ${QUIZ_CONFIG.questionsPerLevel}`;
    }
    if (scenarioBoxEl) scenarioBoxEl.textContent = this.currentQuestion.scenario;
    if (questionTextEl) questionTextEl.textContent = this.currentQuestion.question;

    if (feedbackBoxEl) feedbackBoxEl.classList.add("hidden");
    if (nextBtn) nextBtn.classList.add("hidden");

    // Render 4 options
    if (optionsGridEl) {
      optionsGridEl.innerHTML = "";
      this.currentQuestion.options.forEach(opt => {
        const optCard = document.createElement("button");
        optCard.className = "option-card";
        optCard.id = `option-btn-${opt.id}`;
        optCard.setAttribute("data-option-id", opt.id);
        optCard.innerHTML = `
          <div class="option-seal">${opt.id}</div>
          <div class="option-text">${opt.text}</div>
        `;
        optCard.addEventListener("click", () => this.handleOptionSelection(opt.id));
        optionsGridEl.appendChild(optCard);
      });
    }

    // Re-enable lifelines for current question
    const watsonBtn = document.getElementById("lifeline-watson-btn");
    const loupeBtn = document.getElementById("lifeline-loupe-btn");
    const reagentBtn = document.getElementById("lifeline-reagent-btn");

    if (watsonBtn) watsonBtn.disabled = this.state.lifelines.watson <= 0;
    if (loupeBtn) loupeBtn.disabled = this.state.lifelines.loupe <= 0;
    if (reagentBtn) reagentBtn.disabled = this.state.lifelines.reagent <= 0;
  }

  handleOptionSelection(selectedId) {
    if (!this.currentQuestion) return;

    // Lock all options
    const allOptionCards = document.querySelectorAll(".option-card");
    allOptionCards.forEach(card => card.disabled = true);

    const isCorrect = (selectedId === this.currentQuestion.correctAnswer);
    const selectedCard = document.getElementById(`option-btn-${selectedId}`);
    const correctCard = document.getElementById(`option-btn-${this.currentQuestion.correctAnswer}`);

    let pointsAwarded = 0;
    if (isCorrect) {
      pointsAwarded = QUIZ_CONFIG.pointsPerCorrect;
      this.state.totalScore += pointsAwarded;
      this.state.levelScores[this.state.currentLevelId] += pointsAwarded;
      if (selectedCard) selectedCard.classList.add("correct-deduction");
      audioFX.playCorrect();
    } else {
      if (selectedCard) selectedCard.classList.add("flawed-deduction");
      if (correctCard) correctCard.classList.add("correct-deduction");
      audioFX.playIncorrect();
    }

    // Audit log entry
    this.state.auditLog.push({
      level: this.state.currentLevelId,
      caseNumber: this.state.currentQuestionIndex + 1,
      caseTitle: this.currentQuestion.caseTitle,
      questionId: this.currentQuestion.id,
      selected: selectedId,
      correct: this.currentQuestion.correctAnswer,
      isCorrect: isCorrect,
      points: pointsAwarded,
      timestamp: new Date().toISOString()
    });

    this.saveState();
    this.updateHeaderStats();

    // Render Forensic Case Breakdown
    this.renderFeedbackBox(isCorrect);
  }

  renderFeedbackBox(isCorrect) {
    const feedbackBox = document.getElementById("case-feedback-box");
    const feedbackStamp = document.getElementById("feedback-stamp");
    const feedbackTitle = document.getElementById("feedback-title");
    const feedbackText = document.getElementById("feedback-explanation-text");
    const nextBtn = document.getElementById("next-case-btn");

    if (!feedbackBox) return;

    feedbackBox.classList.remove("hidden", "correct-box", "flawed-box");
    if (isCorrect) {
      feedbackBox.classList.add("correct-box");
      if (feedbackStamp) {
        feedbackStamp.textContent = "VERIFIED";
        feedbackStamp.className = "forensic-stamp stamp-verified";
      }
      if (feedbackTitle) feedbackTitle.innerHTML = `<i class="fa-solid fa-circle-check"></i> Sound Deduction, Detective (+${QUIZ_CONFIG.pointsPerCorrect} pts)`;
    } else {
      feedbackBox.classList.add("flawed-box");
      if (feedbackStamp) {
        feedbackStamp.textContent = "REJECTED";
        feedbackStamp.className = "forensic-stamp stamp-rejected";
      }
      if (feedbackTitle) feedbackTitle.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Flawed Deduction. Correct Option: [${this.currentQuestion.correctAnswer}]`;
    }

    if (feedbackText) {
      feedbackText.innerHTML = `<p>${this.currentQuestion.explanation}</p>`;
    }

    if (nextBtn) {
      nextBtn.classList.remove("hidden");
      const isLastCaseInLevel = (this.state.currentQuestionIndex + 1 >= QUIZ_CONFIG.questionsPerLevel);
      nextBtn.innerHTML = isLastCaseInLevel 
        ? `<i class="fa-solid fa-folder-closed"></i> Conclude Dossier ${this.state.currentLevelId}`
        : `<i class="fa-solid fa-arrow-right"></i> Next Case (#${this.state.currentQuestionIndex + 2})`;
    }

    feedbackBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  advanceToNextCase() {
    audioFX.playPaperShuffle();
    if (this.state.currentQuestionIndex + 1 < QUIZ_CONFIG.questionsPerLevel) {
      this.state.currentQuestionIndex++;
      this.saveState();
      this.renderCurrentView();
    } else {
      this.concludeCurrentLevel();
    }
  }

  concludeCurrentLevel() {
    this.state.levelCompleted[this.state.currentLevelId] = true;
    audioFX.playLevelComplete();

    const caseScreen = document.getElementById("case-screen");
    const clearedScreen = document.getElementById("level-cleared-screen");

    if (caseScreen) caseScreen.classList.add("hidden");
    if (clearedScreen) clearedScreen.classList.remove("hidden");

    const levelObj = QUIZ_LEVELS.find(l => l.id === this.state.currentLevelId);
    const correctCount = this.state.auditLog.filter(a => a.level === this.state.currentLevelId && a.isCorrect).length;
    const levelScore = this.state.levelScores[this.state.currentLevelId];

    const titleEl = document.getElementById("cleared-level-title");
    const summaryEl = document.getElementById("cleared-level-summary");
    const scoreBadgeEl = document.getElementById("cleared-level-score");
    const nextLevelBtn = document.getElementById("next-level-btn");

    if (titleEl) titleEl.textContent = `${levelObj.title} Cleared!`;
    if (summaryEl) {
      summaryEl.innerHTML = `
        <div class="cleared-stat-row">
          <span>Cases Solved:</span>
          <strong>${correctCount} of ${QUIZ_CONFIG.questionsPerLevel} (${Math.round((correctCount / QUIZ_CONFIG.questionsPerLevel) * 100)}%)</strong>
        </div>
        <div class="cleared-stat-row">
          <span>Points Accumulated:</span>
          <strong>+${levelScore} pts</strong>
        </div>
        <div class="cleared-stat-row">
          <span>Conferred Rank:</span>
          <strong class="gold-badge">${levelObj.badge}</strong>
        </div>
      `;
    }

    if (scoreBadgeEl) scoreBadgeEl.textContent = `+${levelScore} PTS`;

    if (nextLevelBtn) {
      if (this.state.currentLevelId >= QUIZ_CONFIG.totalLevels) {
        nextLevelBtn.innerHTML = `<i class="fa-solid fa-award"></i> Present Final Scotland Yard Dossier`;
      } else {
        const nextLevelObj = QUIZ_LEVELS.find(l => l.id === this.state.currentLevelId + 1);
        nextLevelBtn.innerHTML = `<i class="fa-solid fa-folder-open"></i> Unlock ${nextLevelObj.title}`;
      }
    }
  }

  advanceToNextLevel() {
    if (this.state.currentLevelId >= QUIZ_CONFIG.totalLevels) {
      this.state.gameFinished = true;
      this.state.team.completedAt = new Date().toISOString();
      this.saveState();
      this.renderCurrentView();
    } else {
      this.state.currentLevelId++;
      this.state.currentQuestionIndex = 0;
      this.saveState();
      audioFX.playStamp();
      audioFX.playPaperShuffle();
      this.renderCurrentView();
    }
  }

  // ==========================================
  // LIFELINES
  // ==========================================
  useWatsonLifeline() {
    if (this.state.lifelines.watson <= 0 || !this.currentQuestion) return;

    this.state.lifelines.watson--;
    this.state.totalScore = Math.max(0, this.state.totalScore - QUIZ_CONFIG.deductionPointsPerLifeline.watson);
    this.saveState();
    this.updateHeaderStats();

    audioFX.playWatson();

    const modal = document.getElementById("watson-modal");
    const modalContent = document.getElementById("watson-modal-text");
    if (modal && modalContent) {
      modalContent.innerHTML = `
        <div class="watson-diary-entry">
          <p class="watson-quote">"${this.currentQuestion.watsonClue}"</p>
          <div class="watson-signature">— Dr. John H. Watson, M.D.</div>
        </div>
        <div class="lifeline-deduction-notice">
          <small><i class="fa-solid fa-circle-info"></i> Consultation recorded (-${QUIZ_CONFIG.deductionPointsPerLifeline.watson} pts)</small>
        </div>
      `;
      modal.classList.remove("hidden");
    }

    const btn = document.getElementById("lifeline-watson-btn");
    if (btn) btn.disabled = true;
  }

  useLoupeLifeline() {
    if (this.state.lifelines.loupe <= 0 || !this.currentQuestion) return;

    this.state.lifelines.loupe--;
    this.state.totalScore = Math.max(0, this.state.totalScore - QUIZ_CONFIG.deductionPointsPerLifeline.loupe);
    this.saveState();
    this.updateHeaderStats();

    audioFX.playLoupe();

    const incorrectOptions = this.currentQuestion.options.filter(o => o.id !== this.currentQuestion.correctAnswer);
    const toEliminate = incorrectOptions.sort(() => 0.5 - Math.random()).slice(0, 2);

    toEliminate.forEach(opt => {
      this.eliminatedOptions.push(opt.id);
      const optBtn = document.getElementById(`option-btn-${opt.id}`);
      if (optBtn) {
        optBtn.classList.add("eliminated-by-loupe");
        optBtn.disabled = true;
        optBtn.innerHTML = `
          <div class="option-seal strikethrough-seal"><i class="fa-solid fa-xmark"></i></div>
          <div class="option-text strikethrough-text">${opt.text} <em style="font-size:0.8rem; opacity:0.7;">(Eliminated)</em></div>
        `;
      }
    });

    const btn = document.getElementById("lifeline-loupe-btn");
    if (btn) btn.disabled = true;
  }

  useReagentLifeline() {
    if (this.state.lifelines.reagent <= 0 || !this.currentQuestion) return;

    this.state.lifelines.reagent--;
    this.state.totalScore = Math.max(0, this.state.totalScore - QUIZ_CONFIG.deductionPointsPerLifeline.reagent);
    this.saveState();
    this.updateHeaderStats();

    audioFX.playReagent();

    const modal = document.getElementById("reagent-modal");
    const modalContent = document.getElementById("reagent-modal-text");
    if (modal && modalContent) {
      modalContent.innerHTML = `
        <div class="reagent-lab-strip">
          <div class="reagent-header"><i class="fa-solid fa-flask"></i> 221B Chemical Assay</div>
          <div class="reagent-formula">${this.currentQuestion.reagentClue}</div>
        </div>
        <div class="lifeline-deduction-notice">
          <small><i class="fa-solid fa-circle-info"></i> Chemical test fee (-${QUIZ_CONFIG.deductionPointsPerLifeline.reagent} pts)</small>
        </div>
      `;
      modal.classList.remove("hidden");
    }

    const btn = document.getElementById("lifeline-reagent-btn");
    if (btn) btn.disabled = true;
  }

  closeAllModals() {
    document.querySelectorAll(".modal-overlay").forEach(m => m.classList.add("hidden"));
  }

  // ==========================================
  // FINALE & SCORECARD PRESENTATION
  // ==========================================
  renderFinaleScreen() {
    const totalCorrect = this.state.auditLog.filter(a => a.isCorrect).length;
    const accuracyPercent = Math.round((totalCorrect / QUIZ_CONFIG.totalQuestions) * 100);

    let matchedRank = QUIZ_CONFIG.rankTitles[QUIZ_CONFIG.rankTitles.length - 1];
    for (const rank of QUIZ_CONFIG.rankTitles) {
      if (this.state.totalScore >= rank.minScore) {
        matchedRank = rank;
        break;
      }
    }

    const certTeam = document.getElementById("cert-team-name");
    const certScore = document.getElementById("cert-total-score");
    const certAccuracy = document.getElementById("cert-accuracy-pct");
    const certRank = document.getElementById("cert-rank-title");
    const certVerdict = document.getElementById("cert-rank-verdict");
    const certDate = document.getElementById("cert-date-stamp");

    if (certTeam) certTeam.textContent = this.state.team.name;
    if (certScore) certScore.textContent = `${this.state.totalScore.toLocaleString()} / 4,800`;
    if (certAccuracy) certAccuracy.textContent = `${totalCorrect} / ${QUIZ_CONFIG.totalQuestions} (${accuracyPercent}%)`;
    if (certRank) certRank.textContent = matchedRank.title;
    if (certVerdict) certVerdict.textContent = matchedRank.verdict;
    if (certDate) {
      const now = new Date();
      certDate.textContent = now.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
    }

    const tableBody = document.getElementById("level-breakdown-tbody");
    if (tableBody) {
      tableBody.innerHTML = "";
      QUIZ_LEVELS.forEach(lvl => {
        const lvlCorrect = this.state.auditLog.filter(a => a.level === lvl.id && a.isCorrect).length;
        const lvlScore = this.state.levelScores[lvl.id] || 0;
        const row = document.createElement("tr");
        row.innerHTML = `
          <td><strong>${lvl.title}</strong></td>
          <td>${lvlCorrect} / ${QUIZ_CONFIG.questionsPerLevel}</td>
          <td><strong>${lvlScore} pts</strong></td>
          <td><span class="status-pill status-solved">VERIFIED</span></td>
        `;
        tableBody.appendChild(row);
      });
    }
  }

  exportScoreReportCSV() {
    audioFX.playTypewriter();
    const rows = [
      ["=== 221B BAKER STREET DENTAL BLEACHING TOURNAMENT REPORT ==="],
      ["Investigator/Team", this.state.team.name],
      ["Started At", this.state.team.startedAt],
      ["Completed At", this.state.team.completedAt || new Date().toISOString()],
      ["Total Score", this.state.totalScore],
      ["Total Questions", QUIZ_CONFIG.totalQuestions],
      ["Solved Correctly", this.state.auditLog.filter(a => a.isCorrect).length],
      [""],
      ["Level", "Case #", "Case Title", "Selected", "Correct", "Result", "Points", "Timestamp"]
    ];

    this.state.auditLog.forEach(item => {
      rows.push([
        `Level ${item.level}`,
        item.caseNumber,
        `"${item.caseTitle.replace(/"/g, '""')}"`,
        item.selected,
        item.correct,
        item.isCorrect ? "CORRECT" : "FLAWED",
        item.points,
        item.timestamp
      ]);
    });

    const csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    const safeTeamName = (this.state.team.name || "detective").replace(/[^a-z0-9]/gi, '_').toLowerCase();
    link.setAttribute("download", `bleaching_dossier_${safeTeamName}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  confirmResetGame() {
    if (confirm("Reset current investigation and start fresh for the next competitor?")) {
      audioFX.playPaperShuffle();
      this.clearState();
      this.renderCurrentView();
    }
  }
}

// Global initialization: safe whether DOM is loading or already loaded
function initQuizApp() {
  if (!window.quizApp) {
    window.quizApp = new SherlockBleachingQuiz();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initQuizApp);
} else {
  initQuizApp();
}
