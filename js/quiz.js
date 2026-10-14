/**
 * 221B Baker Street - The Bleaching Dossier: Game & Competition Engine
 * Handles:
 *  - Mixed Question Types: MCQs (Levels 1, 3, 5, 6) & One-Word Typewritten Deductions (Levels 2, 4)
 *  - Confidential Personal Results: Users see only their own scorecard, rank & certificate
 *  - PIN-Protected Owner/Judges Portal: Full Master Leaderboard, CSV Export & Controls
 *  - Fast-Forward Judge Demo Mode
 *  - 100% Offline Web Audio Synthesizer Integration
 */

class SherlockBleachingQuiz {
  constructor() {
    this.storageKey = "sherlock_bleaching_quiz_data";
    this.masterLeaderboardKey = "sherlock_bleaching_master_leaderboard";
    this.state = this.loadState() || this.getInitialState();
    this.currentQuestion = null;
    this.eliminatedOptions = [];
    this.isOwnerAuthenticated = false;
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

  // ==========================================
  // EVENT BINDINGS
  // ==========================================
  bindEvents() {
    // 1. Registration Form Submit
    const regForm = document.getElementById("registration-form");
    if (regForm) {
      regForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.startInvestigation();
      });
    }

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

    // 3. View Personal Result / Scorecard
    const viewScorecardBtn = document.getElementById("view-scorecard-btn");
    if (viewScorecardBtn) {
      viewScorecardBtn.addEventListener("click", () => this.viewPersonalResult());
    }

    // Return to Active Case from Scorecard
    const returnToCaseBtn = document.getElementById("return-to-case-btn");
    if (returnToCaseBtn) {
      returnToCaseBtn.addEventListener("click", () => this.returnToActiveCase());
    }

    // 4. Owner Portal Buttons & Forms
    const ownerPortalBtn = document.getElementById("owner-portal-btn");
    if (ownerPortalBtn) {
      ownerPortalBtn.addEventListener("click", () => this.openOwnerPortal());
    }

    const ownerPinForm = document.getElementById("owner-pin-form");
    if (ownerPinForm) {
      ownerPinForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.verifyOwnerPin();
      });
    }

    const submitOwnerPinBtn = document.getElementById("submit-owner-pin-btn");
    if (submitOwnerPinBtn) {
      submitOwnerPinBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.verifyOwnerPin();
      });
    }

    const lockOwnerPortalBtn = document.getElementById("lock-owner-portal-btn");
    if (lockOwnerPortalBtn) {
      lockOwnerPortalBtn.addEventListener("click", () => this.lockOwnerPortal());
    }

    const downloadMasterCsvBtn = document.getElementById("download-master-csv-btn");
    if (downloadMasterCsvBtn) {
      downloadMasterCsvBtn.addEventListener("click", () => this.exportMasterLeaderboardCSV());
    }

    const clearLeaderboardBtn = document.getElementById("clear-leaderboard-btn");
    if (clearLeaderboardBtn) {
      clearLeaderboardBtn.addEventListener("click", () => this.clearMasterLeaderboard());
    }

    const loadSampleDataBtn = document.getElementById("load-sample-data-btn");
    if (loadSampleDataBtn) {
      loadSampleDataBtn.addEventListener("click", () => this.loadSampleLeaderboardData());
    }

    // 5. Judge Demo Fast-Forward Button on Hero Screen
    const demoFastForwardBtn = document.getElementById("demo-fast-forward-btn");
    if (demoFastForwardBtn) {
      demoFastForwardBtn.addEventListener("click", () => this.fastForwardDemo());
    }

    // 6. Modals Close
    document.querySelectorAll(".close-modal-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        audioFX.playPaperShuffle();
        this.closeAllModals();
      });
    });

    // 7. Lifeline Buttons
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

    // 8. Typewriter One-Word Answer Submit Button & Input Keydown
    const submitTextBtn = document.getElementById("submit-text-answer-btn");
    const caseTextInput = document.getElementById("case-text-input");
    if (submitTextBtn) {
      submitTextBtn.addEventListener("click", () => this.submitTextAnswer());
    }
    if (caseTextInput) {
      caseTextInput.addEventListener("keydown", (e) => {
        audioFX.playTypewriter();
        if (e.key === "Enter") {
          e.preventDefault();
          this.submitTextAnswer();
        }
      });
    }

    // 9. Next Case Button
    const nextCaseBtn = document.getElementById("next-case-btn");
    if (nextCaseBtn) {
      nextCaseBtn.addEventListener("click", () => this.advanceToNextCase());
    }

    // 10. Next Level Button
    const nextLevelBtn = document.getElementById("next-level-btn");
    if (nextLevelBtn) {
      nextLevelBtn.addEventListener("click", () => this.advanceToNextLevel());
    }

    // 11. Export Personal CSV
    const exportCsvBtn = document.getElementById("export-csv-btn");
    if (exportCsvBtn) {
      exportCsvBtn.addEventListener("click", () => this.exportScoreReportCSV());
    }

    // 12. Print Certificate
    const printCertBtn = document.getElementById("print-cert-btn");
    if (printCertBtn) {
      printCertBtn.addEventListener("click", () => window.print());
    }

    // 13. Reset Game (Register Next Competitor)
    const resetBtn = document.getElementById("reset-quiz-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => this.confirmResetGame());
    }

    // 14. Interactive Dossier Tabs on Hero Screen
    document.querySelectorAll(".hero-tab-btn").forEach(tab => {
      tab.addEventListener("click", () => {
        const levelId = parseInt(tab.getAttribute("data-level"), 10);
        this.previewHeroLevel(levelId);
        audioFX.playPaperShuffle();
      });
    });

    // 15. Inspect clue button
    const loupeInspectBtn = document.getElementById("inspect-clue-btn");
    if (loupeInspectBtn) {
      loupeInspectBtn.addEventListener("click", () => {
        audioFX.playLoupe();
        const secretClueBox = document.getElementById("hero-secret-clue");
        if (secretClueBox) secretClueBox.classList.toggle("hidden");
      });
    }
  }

  // ==========================================
  // NAVIGATION & DISPLAY
  // ==========================================
  previewHeroLevel(levelId) {
    document.querySelectorAll(".hero-tab-btn").forEach(t => t.classList.remove("active-tab"));
    const selectedTab = document.querySelector(`.hero-tab-btn[data-level="${levelId}"]`);
    if (selectedTab) selectedTab.classList.add("active-tab");

    const levelObj = QUIZ_LEVELS.find(l => l.id === levelId);
    const previewBox = document.getElementById("hero-level-preview");
    if (previewBox && levelObj) {
      const typeLabel = levelObj.type === "text" ? "Type-In One-Word Deduction" : "Multiple Choice Inquiry";
      previewBox.innerHTML = `
        <div class="preview-badge"><i class="fa-solid ${levelObj.icon}"></i> ${levelObj.badge} • ${typeLabel}</div>
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

  // ==========================================
  // QUESTION RENDERING (MCQ vs TYPEWRITER)
  // ==========================================
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
    const typewriterBoxEl = document.getElementById("case-typewriter-input-box");
    const caseTextInput = document.getElementById("case-text-input");
    const submitTextBtn = document.getElementById("submit-text-answer-btn");
    const feedbackBoxEl = document.getElementById("case-feedback-box");
    const nextBtn = document.getElementById("next-case-btn");

    if (caseNumberEl) caseNumberEl.textContent = this.currentQuestion.caseTitle;
    if (levelSubtitleEl) {
      const levelObj = QUIZ_LEVELS.find(l => l.id === this.state.currentLevelId);
      const modeTag = this.currentQuestion.type === "text" ? "[Type-In Deduction]" : "[Multiple Choice]";
      levelSubtitleEl.textContent = `${levelObj.title} • Case ${this.state.currentQuestionIndex + 1} of ${QUIZ_CONFIG.questionsPerLevel} ${modeTag}`;
    }
    if (scenarioBoxEl) scenarioBoxEl.textContent = this.currentQuestion.scenario;
    if (questionTextEl) questionTextEl.textContent = this.currentQuestion.question;

    if (feedbackBoxEl) feedbackBoxEl.classList.add("hidden");
    if (nextBtn) nextBtn.classList.add("hidden");

    // Check Question Type: One-Word Text Input (Levels 2 & 4) vs MCQ (Levels 1, 3, 5, 6)
    if (this.currentQuestion.type === "text") {
      // Show Typewriter Input, Hide MCQ Grid
      if (optionsGridEl) optionsGridEl.classList.add("hidden");
      if (typewriterBoxEl) typewriterBoxEl.classList.remove("hidden");

      if (caseTextInput) {
        caseTextInput.value = "";
        caseTextInput.disabled = false;
        setTimeout(() => caseTextInput.focus(), 100);
      }
      if (submitTextBtn) submitTextBtn.disabled = false;
    } else {
      // Show MCQ Grid, Hide Typewriter Input
      if (typewriterBoxEl) typewriterBoxEl.classList.add("hidden");
      if (optionsGridEl) {
        optionsGridEl.classList.remove("hidden");
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
    }

    // Re-enable lifelines for current question
    const watsonBtn = document.getElementById("lifeline-watson-btn");
    const loupeBtn = document.getElementById("lifeline-loupe-btn");
    const reagentBtn = document.getElementById("lifeline-reagent-btn");

    if (watsonBtn) watsonBtn.disabled = this.state.lifelines.watson <= 0;
    if (loupeBtn) loupeBtn.disabled = this.state.lifelines.loupe <= 0;
    if (reagentBtn) reagentBtn.disabled = this.state.lifelines.reagent <= 0;
  }

  // ==========================================
  // ANSWER SUBMISSION (MCQ & TEXT)
  // ==========================================
  handleOptionSelection(selectedId) {
    if (!this.currentQuestion || this.currentQuestion.type === "text") return;

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
    this.renderFeedbackBox(isCorrect);
  }

  submitTextAnswer() {
    if (!this.currentQuestion || this.currentQuestion.type !== "text") return;

    const input = document.getElementById("case-text-input");
    const submitBtn = document.getElementById("submit-text-answer-btn");
    if (!input) return;

    const rawVal = input.value || "";
    const cleanVal = rawVal.trim().toLowerCase();

    if (!cleanVal) {
      input.focus();
      input.classList.add("shake-error");
      setTimeout(() => input.classList.remove("shake-error"), 500);
      return;
    }

    // Lock input
    input.disabled = true;
    if (submitBtn) submitBtn.disabled = true;

    // Verify against accepted synonyms
    const alphaCleanVal = cleanVal.replace(/[^a-z0-9]/g, '');
    const isCorrect = this.currentQuestion.acceptedAnswers.some(ans => {
      const cleanAns = ans.trim().toLowerCase();
      const alphaCleanAns = cleanAns.replace(/[^a-z0-9]/g, '');
      return cleanVal === cleanAns || alphaCleanVal === alphaCleanAns;
    });

    let pointsAwarded = 0;
    if (isCorrect) {
      pointsAwarded = QUIZ_CONFIG.pointsPerCorrect;
      this.state.totalScore += pointsAwarded;
      this.state.levelScores[this.state.currentLevelId] += pointsAwarded;
      input.style.borderColor = "#34a853";
      input.style.background = "#eefbee";
      audioFX.playCorrect();
    } else {
      input.style.borderColor = "#c0392b";
      input.style.background = "#fde8e8";
      audioFX.playIncorrect();
    }

    // Audit log entry
    this.state.auditLog.push({
      level: this.state.currentLevelId,
      caseNumber: this.state.currentQuestionIndex + 1,
      caseTitle: this.currentQuestion.caseTitle,
      questionId: this.currentQuestion.id,
      selected: rawVal.trim(),
      correct: this.currentQuestion.displayAnswer,
      isCorrect: isCorrect,
      points: pointsAwarded,
      timestamp: new Date().toISOString()
    });

    this.saveState();
    this.updateHeaderStats();
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
      const correctSolution = this.currentQuestion.type === "text"
        ? this.currentQuestion.displayAnswer
        : `Option [${this.currentQuestion.correctAnswer}]`;
      if (feedbackTitle) feedbackTitle.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Flawed Deduction. Correct Answer: ${correctSolution}`;
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
      
      // Automatically record completed tournament run into master leaderboard
      this.recordToMasterLeaderboard();

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

    if (this.currentQuestion.type === "text") {
      // For Text questions: Loupe reveals first & last letters!
      const ans = this.currentQuestion.displayAnswer;
      const cleanWord = ans.split(" ")[0].replace(/[^a-zA-Z0-9]/g, '');
      const firstLetter = cleanWord[0] || "";
      const lastLetter = cleanWord[cleanWord.length - 1] || "";
      
      const modal = document.getElementById("watson-modal");
      const modalContent = document.getElementById("watson-modal-text");
      if (modal && modalContent) {
        modalContent.innerHTML = `
          <div class="watson-diary-entry">
            <h4 style="font-family:var(--font-regal); color:#8c2020; margin-bottom:0.5rem;"><i class="fa-solid fa-magnifying-glass"></i> Loupe Optical Clue</h4>
            <p class="watson-quote">"The forensic keyword starts with <strong>'${firstLetter.toUpperCase()}'</strong> and ends with <strong>'${lastLetter.toUpperCase()}'</strong> (${cleanWord.length} letters)."</p>
            <div class="watson-signature">— 221B Loupe Magnification</div>
          </div>
          <div class="lifeline-deduction-notice">
            <small><i class="fa-solid fa-circle-info"></i> Optical analysis fee (-${QUIZ_CONFIG.deductionPointsPerLifeline.loupe} pts)</small>
          </div>
        `;
        modal.classList.remove("hidden");
      }
    } else {
      // For MCQ: Eliminate 2 wrong choices
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
    }

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
  // PERSONAL RESULTS PRESENTATION (USER VIEW)
  // ==========================================
  viewPersonalResult() {
    audioFX.playPaperShuffle();
    const regScreen = document.getElementById("registration-screen");
    const caseScreen = document.getElementById("case-screen");
    const levelClearedScreen = document.getElementById("level-cleared-screen");
    const finaleScreen = document.getElementById("finale-screen");
    const returnToCaseBtn = document.getElementById("return-to-case-btn");

    [regScreen, caseScreen, levelClearedScreen].forEach(el => {
      if (el) el.classList.add("hidden");
    });

    if (finaleScreen) finaleScreen.classList.remove("hidden");

    // If game is still in progress, show "Resume Active Investigation" button
    if (returnToCaseBtn) {
      returnToCaseBtn.style.display = (this.state.gameStarted && !this.state.gameFinished) ? "inline-flex" : "none";
    }

    this.renderFinaleScreen();
  }

  returnToActiveCase() {
    audioFX.playPaperShuffle();
    this.renderCurrentView();
  }

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

    if (certTeam) certTeam.textContent = this.state.team.name || "Apprentice Detective";
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
        const formatLabel = lvl.type === "text" ? "One-Word Clues" : "Multiple Choice";
        const row = document.createElement("tr");
        row.innerHTML = `
          <td><strong>${lvl.title}</strong></td>
          <td><span style="font-size:0.8rem; color:#bda787;">${formatLabel}</span></td>
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
      ["=== 221B BAKER STREET DENTAL BLEACHING CONFIDENTIAL DOSSIER ==="],
      ["Investigator/Team", this.state.team.name || "Anonymous"],
      ["Started At", this.state.team.startedAt || new Date().toISOString()],
      ["Completed At", this.state.team.completedAt || new Date().toISOString()],
      ["Total Score", this.state.totalScore],
      ["Total Questions", QUIZ_CONFIG.totalQuestions],
      ["Solved Correctly", this.state.auditLog.filter(a => a.isCorrect).length],
      [""],
      ["Level", "Case #", "Case Title", "Selected Deduction", "Correct Solution", "Status", "Points Awarded", "Timestamp"]
    ];

    this.state.auditLog.forEach(item => {
      rows.push([
        `Level ${item.level}`,
        item.caseNumber,
        `"${item.caseTitle.replace(/"/g, '""')}"`,
        `"${String(item.selected).replace(/"/g, '""')}"`,
        `"${String(item.correct).replace(/"/g, '""')}"`,
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
    if (confirm("Register next competitor? (Your personal session will reset, while completed tournament records remain securely stored in the Chief Inspector Master Archive).")) {
      audioFX.playPaperShuffle();
      this.clearState();
      this.renderCurrentView();
    }
  }

  // ==========================================
  // MASTER LEADERBOARD & OWNER PORTAL (PIN PROTECTED)
  // ==========================================
  recordToMasterLeaderboard() {
    if (!this.state.team.name) return;

    try {
      const existingData = localStorage.getItem(this.masterLeaderboardKey);
      const leaderboard = existingData ? JSON.parse(existingData) : [];

      const totalCorrect = this.state.auditLog.filter(a => a.isCorrect).length;
      const accuracyPercent = Math.round((totalCorrect / QUIZ_CONFIG.totalQuestions) * 100);

      let matchedRank = QUIZ_CONFIG.rankTitles[QUIZ_CONFIG.rankTitles.length - 1];
      for (const rank of QUIZ_CONFIG.rankTitles) {
        if (this.state.totalScore >= rank.minScore) {
          matchedRank = rank;
          break;
        }
      }

      // Check if team already recorded; if so, update their best score
      const existingIndex = leaderboard.findIndex(entry => entry.teamName.toLowerCase() === this.state.team.name.toLowerCase());
      const newEntry = {
        teamName: this.state.team.name,
        score: this.state.totalScore,
        solvedCount: totalCorrect,
        totalQuestions: QUIZ_CONFIG.totalQuestions,
        accuracyPct: accuracyPercent,
        rankTitle: matchedRank.title,
        completedAt: this.state.team.completedAt || new Date().toISOString()
      };

      if (existingIndex >= 0) {
        if (newEntry.score >= leaderboard[existingIndex].score) {
          leaderboard[existingIndex] = newEntry;
        }
      } else {
        leaderboard.push(newEntry);
      }

      // Sort descending by score
      leaderboard.sort((a, b) => b.score - a.score);
      localStorage.setItem(this.masterLeaderboardKey, JSON.stringify(leaderboard));
    } catch (e) {
      console.warn("Could not record to master leaderboard:", e);
    }
  }

  openOwnerPortal() {
    audioFX.playPaperShuffle();
    const modal = document.getElementById("owner-modal");
    const authBox = document.getElementById("owner-auth-box");
    const dashboardBox = document.getElementById("owner-dashboard-box");
    const pinInput = document.getElementById("owner-pin-input");
    const pinError = document.getElementById("owner-pin-error");

    if (modal) modal.classList.remove("hidden");
    if (pinError) pinError.classList.add("hidden");

    if (this.isOwnerAuthenticated) {
      if (authBox) authBox.classList.add("hidden");
      if (dashboardBox) dashboardBox.classList.remove("hidden");
      this.renderMasterLeaderboard();
    } else {
      if (authBox) authBox.classList.remove("hidden");
      if (dashboardBox) dashboardBox.classList.add("hidden");
      if (pinInput) {
        pinInput.value = "";
        setTimeout(() => pinInput.focus(), 150);
      }
    }
  }

  verifyOwnerPin() {
    const pinInput = document.getElementById("owner-pin-input");
    const pinError = document.getElementById("owner-pin-error");
    const authBox = document.getElementById("owner-auth-box");
    const dashboardBox = document.getElementById("owner-dashboard-box");

    const enteredPin = pinInput ? pinInput.value.trim().toUpperCase() : "";
    const expectedPin = QUIZ_CONFIG.defaultOwnerPin.toUpperCase();

    if (enteredPin === expectedPin) {
      this.isOwnerAuthenticated = true;
      audioFX.playCorrect();
      if (pinError) pinError.classList.add("hidden");
      if (authBox) authBox.classList.add("hidden");
      if (dashboardBox) dashboardBox.classList.remove("hidden");
      this.renderMasterLeaderboard();
    } else {
      audioFX.playIncorrect();
      if (pinError) pinError.classList.remove("hidden");
      if (pinInput) {
        pinInput.classList.add("shake-error");
        setTimeout(() => pinInput.classList.remove("shake-error"), 500);
      }
    }
  }

  lockOwnerPortal() {
    this.isOwnerAuthenticated = false;
    audioFX.playPaperShuffle();
    this.closeAllModals();
  }

  renderMasterLeaderboard() {
    const tbody = document.getElementById("master-leaderboard-tbody");
    const countBadge = document.getElementById("leaderboard-total-count");
    if (!tbody) return;

    let leaderboard = [];
    try {
      const data = localStorage.getItem(this.masterLeaderboardKey);
      if (data) leaderboard = JSON.parse(data);
    } catch (e) {
      console.warn("Could not load master leaderboard:", e);
    }

    if (countBadge) countBadge.textContent = `${leaderboard.length} Teams Registered`;

    if (leaderboard.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align: center; color: #a48f7a; padding: 2rem;">
            <em>No official entries recorded in the Scotland Yard archive yet. Click 'Add Sample Teams' to preview tournament standings.</em>
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = "";
    leaderboard.forEach((entry, idx) => {
      const rankNum = idx + 1;
      let podiumClass = "";
      let rankBadge = `#${rankNum}`;

      if (rankNum === 1) {
        podiumClass = "podium-rank-1";
        rankBadge = `<span class="rank-badge-gold"><i class="fa-solid fa-crown"></i> 1st</span>`;
      } else if (rankNum === 2) {
        podiumClass = "podium-rank-2";
        rankBadge = `<span class="rank-badge-silver"><i class="fa-solid fa-medal"></i> 2nd</span>`;
      } else if (rankNum === 3) {
        podiumClass = "podium-rank-3";
        rankBadge = `<span class="rank-badge-bronze"><i class="fa-solid fa-award"></i> 3rd</span>`;
      }

      const dateStr = new Date(entry.completedAt).toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit"
      });

      const row = document.createElement("tr");
      row.className = podiumClass;
      row.innerHTML = `
        <td><strong>${rankBadge}</strong></td>
        <td><strong style="color:#fff;">${entry.teamName}</strong></td>
        <td><strong style="color:var(--brass-bright);">${entry.score.toLocaleString()} pts</strong></td>
        <td>${entry.solvedCount} / ${entry.totalQuestions} (${entry.accuracyPct}%)</td>
        <td><span style="font-size:0.8rem; color:#dcd0bf;">${entry.rankTitle}</span></td>
        <td><small style="opacity:0.75;">${dateStr}</small></td>
      `;
      tbody.appendChild(row);
    });
  }

  exportMasterLeaderboardCSV() {
    audioFX.playTypewriter();
    let leaderboard = [];
    try {
      const data = localStorage.getItem(this.masterLeaderboardKey);
      if (data) leaderboard = JSON.parse(data);
    } catch (e) {
      console.warn("Could not load master leaderboard:", e);
    }

    if (leaderboard.length === 0) {
      alert("No tournament entries recorded yet to export.");
      return;
    }

    const rows = [
      ["=== 221B BAKER STREET DENTAL BLEACHING MASTER TOURNAMENT STANDINGS ==="],
      ["Export Date", new Date().toISOString()],
      ["Total Competing Teams", leaderboard.length],
      [""],
      ["Rank", "Team / Investigator Codename", "Total Score", "Cases Solved", "Total Cases", "Accuracy Pct", "Conferred Title", "Timestamp"]
    ];

    leaderboard.forEach((entry, idx) => {
      rows.push([
        idx + 1,
        `"${entry.teamName.replace(/"/g, '""')}"`,
        entry.score,
        entry.solvedCount,
        entry.totalQuestions,
        `${entry.accuracyPct}%`,
        `"${entry.rankTitle.replace(/"/g, '""')}"`,
        entry.completedAt
      ]);
    });

    const csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `master_tournament_leaderboard_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  clearMasterLeaderboard() {
    if (confirm("Are you sure you want to permanently delete all Master Tournament Leaderboard records? This cannot be undone.")) {
      audioFX.playPaperShuffle();
      localStorage.removeItem(this.masterLeaderboardKey);
      this.renderMasterLeaderboard();
    }
  }

  loadSampleLeaderboardData() {
    const sampleTeams = [
      {
        teamName: "GDC Bombay Endodontic Specialists",
        score: 4600,
        solvedCount: 46,
        totalQuestions: 48,
        accuracyPct: 96,
        rankTitle: "The Master Detective (Sherlock Holmes Tier)",
        completedAt: new Date(Date.now() - 3600000).toISOString()
      },
      {
        teamName: "Manipal Pulp & Peroxide Investigators",
        score: 4200,
        solvedCount: 42,
        totalQuestions: 48,
        accuracyPct: 88,
        rankTitle: "Scotland Yard Chief Inspector (Lestrade Tier)",
        completedAt: new Date(Date.now() - 7200000).toISOString()
      },
      {
        teamName: "Maulana Azad Conservative Society",
        score: 3800,
        solvedCount: 38,
        totalQuestions: 48,
        accuracyPct: 79,
        rankTitle: "Consulting Detective (Baker Street Associate)",
        completedAt: new Date(Date.now() - 10800000).toISOString()
      }
    ];

    try {
      localStorage.setItem(this.masterLeaderboardKey, JSON.stringify(sampleTeams));
      audioFX.playCorrect();
      this.renderMasterLeaderboard();
    } catch (e) {
      console.warn("Could not save sample data:", e);
    }
  }

  // Fast-Forward Demo for Judges to test 100% completion in 1 second
  fastForwardDemo() {
    audioFX.playStamp();
    const teamNameInput = document.getElementById("team-name-input");
    const teamName = (teamNameInput && teamNameInput.value.trim()) || "Baker Street BDS Fest Finalists";

    this.state.team = {
      name: teamName,
      startedAt: new Date(Date.now() - 900000).toISOString(),
      completedAt: new Date().toISOString()
    };
    this.state.gameStarted = true;
    this.state.gameFinished = true;
    this.state.totalScore = 4600;
    this.state.currentLevelId = 6;
    this.state.currentQuestionIndex = 7;
    this.state.levelScores = { 1: 800, 2: 800, 3: 700, 4: 800, 5: 700, 6: 800 };
    this.state.levelCompleted = { 1: true, 2: true, 3: true, 4: true, 5: true, 6: true };

    // Fill audit log with 48 realistic entries
    this.state.auditLog = QUIZ_QUESTIONS.map((q, idx) => ({
      level: q.level,
      caseNumber: (idx % 8) + 1,
      caseTitle: q.caseTitle,
      questionId: q.id,
      selected: q.type === "text" ? q.displayAnswer : q.correctAnswer,
      correct: q.type === "text" ? q.displayAnswer : q.correctAnswer,
      isCorrect: idx !== 18 && idx !== 35, // 46 of 48 correct
      points: (idx !== 18 && idx !== 35) ? 100 : 0,
      timestamp: new Date(Date.now() - (48 - idx) * 15000).toISOString()
    }));

    this.saveState();
    this.recordToMasterLeaderboard();
    this.renderCurrentView();
  }
}

// Global initialization
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
