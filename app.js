/**
 * EduMaster Learning Hub - Core Application Logic (v2.0 Refined)
 * Interactive Quizzing, Audio Synthesis, LocalStorage, Two-way Sync & Modals
 */

// Application State
const AppState = {
    currentView: 'dashboard', // 'dashboard', 'module', 'flashcards', 'exam'
    currentModuleId: null,
    examMode: 'practice', // 'practice' (instant feedback) or 'exam' (timed/test)
    answers: {}, // { [questionKey]: selectedOptionIndex }
    submitted: false,
    timerInterval: null,
    timeRemaining: 0,
    startTime: null,
    passageFontSize: 1.02,
    userStats: {
        totalAnswered: 0,
        totalCorrect: 0,
        streakDays: 3,
        scorePoints: 120,
        moduleScores: {},
        bookmarkedQuestions: []
    },
    currentFlashcardIndex: 0
};

// Web Audio API Synthesizer (Zero External Assets Required)
class SoundFX {
    constructor() {
        this.ctx = null;
        this.enabled = true;
    }

    init() {
        if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioCtx();
        }
    }

    playCorrect() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        
        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(587.33, now); // D5
            osc.frequency.setValueAtTime(880, now + 0.08); // A5

            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.3);
        } catch (e) {
            console.warn('Audio playback error', e);
        }
    }

    playIncorrect() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;

        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(260, now);
            osc.frequency.setValueAtTime(196, now + 0.1);

            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.28);
        } catch (e) {
            console.warn('Audio playback error', e);
        }
    }

    playCelebration() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;

        try {
            const notes = [523.25, 659.25, 783.99, 1046.50]; // C E G C
            notes.forEach((freq, idx) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                const start = this.ctx.currentTime + (idx * 0.09);

                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, start);

                gain.gain.setValueAtTime(0.14, start);
                gain.gain.exponentialRampToValueAtTime(0.01, start + 0.35);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(start);
                osc.stop(start + 0.35);
            });
        } catch (e) {
            console.warn('Celebration audio error', e);
        }
    }
}

const soundFX = new SoundFX();

// Toast Notifications
function showToast(message, icon = '💡') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.innerHTML = `<span style="font-size: 1.15rem;">${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ==========================================================================
// Initialization & Storage
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    loadUserStats();
    initTheme();
    initSound();
    renderNavigation();
    renderDashboard();
    setupEventListeners();
});

function loadUserStats() {
    try {
        const saved = localStorage.getItem('edumaster_stats');
        if (saved) {
            AppState.userStats = Object.assign(AppState.userStats, JSON.parse(saved));
        }
    } catch (e) {
        console.error('Failed to load stats', e);
    }
    updateTopBarStats();
}

function saveUserStats() {
    try {
        localStorage.setItem('edumaster_stats', JSON.stringify(AppState.userStats));
    } catch (e) {
        console.error('Failed to save stats', e);
    }
    updateTopBarStats();
}

function updateTopBarStats() {
    const streakEl = document.getElementById('user-streak');
    const scoreEl = document.getElementById('user-score');
    if (streakEl) streakEl.innerText = `${AppState.userStats.streakDays || 1} Ngày`;
    if (scoreEl) scoreEl.innerText = `${AppState.userStats.scorePoints || 0} XP`;
}

// Sound Preference
function initSound() {
    const saved = localStorage.getItem('edumaster_sound');
    soundFX.enabled = saved !== null ? saved === 'true' : true;
    updateSoundButtonUI();
}

function toggleSound() {
    soundFX.enabled = !soundFX.enabled;
    localStorage.setItem('edumaster_sound', soundFX.enabled);
    updateSoundButtonUI();
    showToast(soundFX.enabled ? 'Đã bật âm thanh hiệu ứng 🔊' : 'Đã tắt âm thanh hiệu ứng 🔇', soundFX.enabled ? '🔊' : '🔇');
}

function updateSoundButtonUI() {
    const btn = document.getElementById('sound-toggle-btn');
    if (btn) {
        btn.innerText = soundFX.enabled ? '🔊 Âm Thanh: Bật' : '🔇 Âm Thanh: Tắt';
    }
}

// Theme Toggle
function initTheme() {
    const currentTheme = localStorage.getItem('edumaster_theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.innerText = currentTheme === 'dark' ? '☀️' : '🌙';
    }
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('edumaster_theme', next);
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.innerText = next === 'dark' ? '☀️' : '🌙';
    }
    showToast(next === 'dark' ? 'Đã chuyển sang Giao diện Tối 🌙' : 'Đã chuyển sang Giao diện Sáng ☀️', next === 'dark' ? '🌙' : '☀️');
}

// ==========================================================================
// Navigation & Views
// ==========================================================================

function renderNavigation() {
    const navContainer = document.getElementById('sidebar-nav-list');
    if (!navContainer) return;

    let html = `
        <div class="nav-section-title">Chính</div>
        <div class="nav-item ${AppState.currentView === 'dashboard' ? 'active' : ''}" onclick="navigateTo('dashboard')">
            <span class="nav-icon">🏠</span>
            <span>Tổng Quan & Khóa Học</span>
        </div>
        
        <div class="nav-section-title">Các Chuyên Đề Học Tập</div>
    `;

    COURSE_DATA.modules.forEach(mod => {
        const isActive = AppState.currentView === 'module' && AppState.currentModuleId === mod.id;
        const iconMap = {
            'grammar-vocab': '📝',
            'signs-notices': '🪧',
            'cloze-test': '🕳️',
            'reading-comp': '📖'
        };
        const icon = iconMap[mod.id] || '📚';
        const score = AppState.userStats.moduleScores[mod.id];
        const badgeText = score ? `${score.percent}%` : mod.badge.split(' ')[0] + ' câu';

        html += `
            <div class="nav-item ${isActive ? 'active' : ''}" onclick="openModule('${mod.id}')">
                <span class="nav-icon">${icon}</span>
                <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${mod.title.split('-')[0]}</span>
                <span class="nav-badge">${badgeText}</span>
            </div>
        `;
    });

    html += `
        <div class="nav-section-title">Công Cụ Bổ Trợ</div>
        <div class="nav-item ${AppState.currentView === 'flashcards' ? 'active' : ''}" onclick="navigateTo('flashcards')">
            <span class="nav-icon">💡</span>
            <span>Sổ Tay Từ Vựng & Cấu Trúc</span>
            <span class="nav-badge">${COURSE_DATA.flashcards.length} thẻ</span>
        </div>
        <div class="nav-item" onclick="openExamSimulation()">
            <span class="nav-icon">⏱️</span>
            <span>Thi Thử Tổng Hợp (30 Phút)</span>
            <span class="nav-badge" style="background: #f59e0b; color: white;">HOT</span>
        </div>
        <div class="nav-item" onclick="openMistakeReview()">
            <span class="nav-icon">🎯</span>
            <span>Ôn Tập Lỗi Sai & Đã Lưu</span>
        </div>
    `;

    navContainer.innerHTML = html;
}

function navigateTo(viewName) {
    AppState.currentView = viewName;
    if (viewName !== 'module') {
        AppState.currentModuleId = null;
    }
    stopTimer();
    renderNavigation();

    const contentArea = document.getElementById('main-content');
    if (!contentArea) return;

    if (viewName === 'dashboard') {
        renderDashboard();
    } else if (viewName === 'flashcards') {
        renderFlashcards();
    }
    
    // Close mobile sidebar if open
    closeMobileSidebar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeMobileSidebar() {
    document.getElementById('app-sidebar')?.classList.remove('open');
    document.getElementById('sidebar-backdrop')?.classList.remove('show');
}

// ==========================================================================
// Dashboard View
// ==========================================================================

function renderDashboard() {
    const content = document.getElementById('main-content');
    if (!content) return;

    // Calculate aggregated stats
    let totalQuestionsCount = 0;
    COURSE_DATA.modules.forEach(m => {
        if (m.subSections) {
            m.subSections.forEach(s => totalQuestionsCount += s.questions.length);
        } else if (m.questions) {
            totalQuestionsCount += m.questions.length;
        }
    });

    const completedModulesCount = Object.keys(AppState.userStats.moduleScores).length;

    content.innerHTML = `
        <div class="hero-banner">
            <div class="hero-content">
                <div class="hero-badge">✨ Cổng Học & Luyện Thi Tiếng Anh Đột Phá</div>
                <h1 class="hero-title">Chinh Phục Ngữ Pháp & Đọc Hiểu Toàn Diện</h1>
                <p class="hero-desc">
                    Hệ thống tích hợp 4 chuyên đề chuẩn quốc tế: Trắc nghiệm ngữ pháp nâng cao, đọc hiểu biển báo thực tế, đục lỗ khảo cổ học và các bài đọc phân tích chuyên sâu.
                </p>
                <div class="hero-actions">
                    <button class="btn-primary-hero" onclick="openModule('grammar-vocab')">
                        🚀 Bắt Đầu Học Ngay
                    </button>
                    <button class="btn-secondary-hero" onclick="openExamSimulation()">
                        ⏱️ Làm Bài Thi Thử Tổng Hợp
                    </button>
                    <button class="btn-secondary-hero" onclick="navigateTo('flashcards')">
                        💡 Xem Sổ Tay Flashcards
                    </button>
                </div>
            </div>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon-wrap blue">📚</div>
                <div class="stat-info">
                    <h3>${totalQuestionsCount}</h3>
                    <p>Tổng Số Câu Hỏi</p>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon-wrap green">✅</div>
                <div class="stat-info">
                    <h3>${AppState.userStats.totalAnswered}</h3>
                    <p>Câu Đã Luyện Tập</p>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon-wrap amber">🔥</div>
                <div class="stat-info">
                    <h3>${AppState.userStats.streakDays || 3} Ngày</h3>
                    <p>Chuỗi Học Liên Tục</p>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon-wrap purple">🏆</div>
                <div class="stat-info">
                    <h3>${completedModulesCount} / ${COURSE_DATA.modules.length}</h3>
                    <p>Chuyên Đề Hoàn Thành</p>
                </div>
            </div>
        </div>

        <div class="section-header">
            <h2>🎯 Lộ Trình 4 Chuyên Đề Trọng Điểm</h2>
            <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">Hỗ trợ 2 chế độ: Luyện tập & Thi tính giờ</span>
        </div>

        <div class="modules-grid">
            ${COURSE_DATA.modules.map(mod => renderModuleCard(mod)).join('')}
        </div>

        <div class="section-header" style="margin-top: 24px;">
            <h2>💡 Bí Quyết Học Hiệu Quả</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
            <div style="background: var(--bg-card); padding: 22px; border-radius: var(--radius-lg); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm);">
                <div style="font-size: 1.5rem; margin-bottom: 8px;">🎧</div>
                <h3 style="font-size: 1.05rem; margin-bottom: 6px; color: var(--text-primary);">Chế Độ Luyện Tập Thông Minh</h3>
                <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.55;">Nhấp chọn đáp án để nhận ngay phản hồi âm thanh và lời giải thích ngữ pháp chi tiết. Thích hợp để củng cố kiến thức mỗi ngày.</p>
            </div>
            <div style="background: var(--bg-card); padding: 22px; border-radius: var(--radius-lg); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm);">
                <div style="font-size: 1.5rem; margin-bottom: 8px;">⏱️</div>
                <h3 style="font-size: 1.05rem; margin-bottom: 6px; color: var(--text-primary);">Chế Độ Thi Thử Tính Giờ</h3>
                <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.55;">Thử sức với áp lực thời gian thực, ẩn lời giải cho đến khi bấm nộp bài để đánh giá chính xác năng lực bản thân.</p>
            </div>
            <div style="background: var(--bg-card); padding: 22px; border-radius: var(--radius-lg); border: 1px solid var(--border-color); box-shadow: var(--shadow-sm);">
                <div style="font-size: 1.5rem; margin-bottom: 8px;">🎓</div>
                <h3 style="font-size: 1.05rem; margin-bottom: 6px; color: var(--text-primary);">Cấp Chứng Nhận Danh Dự</h3>
                <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.55;">Đạt từ 80% trở lên ở các bài thi để nhận chứng chỉ hoàn thành học phần với thiết kế sang trọng để in hoặc lưu PDF.</p>
            </div>
        </div>
    `;
}

function renderModuleCard(mod) {
    const iconMap = {
        'grammar-vocab': '📝',
        'signs-notices': '🪧',
        'cloze-test': '🕳️',
        'reading-comp': '📖'
    };
    const icon = iconMap[mod.id] || '📚';
    const score = AppState.userStats.moduleScores[mod.id];
    const scoreDisplay = score 
        ? `<span style="color: var(--success); font-weight: 700;">Đã làm: ${score.percent}% (${score.score}/${score.total})</span>`
        : `<span style="color: var(--text-muted);">Chưa hoàn thành</span>`;

    return `
        <div class="module-card" onclick="openModule('${mod.id}')">
            <div>
                <div class="module-top">
                    <div class="module-icon">${icon}</div>
                    <span class="module-tag">${mod.category}</span>
                </div>
                <h3 class="module-title">${mod.title}</h3>
                <div class="module-subtitle">${mod.subtitle}</div>
                <p class="module-desc">${mod.description}</p>
            </div>
            <div class="module-footer">
                <div class="module-progress-text">${scoreDisplay}</div>
                <button class="btn-start-module">
                    ${score ? 'Làm Lại' : 'Bắt Đầu'} ➜
                </button>
            </div>
        </div>
    `;
}

// ==========================================================================
// Quiz & Module Execution View
// ==========================================================================

function openModule(moduleId, forcedMode = null) {
    AppState.currentView = 'module';
    AppState.currentModuleId = moduleId;
    AppState.examMode = forcedMode || 'practice';
    AppState.answers = {};
    AppState.submitted = false;

    renderNavigation();
    renderQuizView();
}

function setQuizMode(mode) {
    AppState.examMode = mode;
    AppState.answers = {};
    AppState.submitted = false;
    showToast(mode === 'practice' ? 'Đã bật Chế độ Luyện Tập (Hiện giải thích ngay)' : 'Đã bật Chế độ Thi Thử (Tính giờ kiểm tra)', '⚙️');
    renderQuizView();
}

function renderQuizView() {
    const content = document.getElementById('main-content');
    if (!content) return;

    const mod = COURSE_DATA.modules.find(m => m.id === AppState.currentModuleId);
    if (!mod) {
        navigateTo('dashboard');
        return;
    }

    // Determine all questions for this module
    let allQuestions = [];
    if (mod.subSections) {
        mod.subSections.forEach(sub => {
            sub.questions.forEach(q => allQuestions.push({ ...q, sectionTitle: sub.title }));
        });
    } else {
        allQuestions = mod.questions;
    }

    const isSplit = mod.id === 'cloze-test' || mod.id === 'reading-comp';

    // Start timer if exam mode
    if (AppState.examMode === 'exam') {
        startTimer(allQuestions.length * 90); // 1.5 minutes per question
    } else {
        stopTimer();
    }

    content.innerHTML = `
        <div class="quiz-view-header">
            <div class="quiz-header-info">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                    <span style="cursor: pointer; color: var(--primary); font-weight: 700;" onclick="navigateTo('dashboard')">← Dashboard</span>
                    <span style="color: var(--text-muted);">/</span>
                    <span style="font-size: 0.82rem; background: var(--primary-light); color: var(--primary); padding: 2px 8px; border-radius: 4px; font-weight: 700;">${mod.category}</span>
                </div>
                <h2>${mod.title}</h2>
                <p>${mod.subtitle}</p>
            </div>

            <div class="quiz-controls-group">
                <div class="mode-toggle">
                    <button class="mode-btn ${AppState.examMode === 'practice' ? 'active' : ''}" onclick="setQuizMode('practice')">
                        <span>💡</span> Luyện Tập (Hiện Đáp Án Ngay)
                    </button>
                    <button class="mode-btn ${AppState.examMode === 'exam' ? 'active' : ''}" onclick="setQuizMode('exam')">
                        <span>⏱️</span> Thi Thử (Tính Giờ)
                    </button>
                </div>

                <div id="exam-timer-badge" class="exam-timer" style="${AppState.examMode === 'exam' ? 'display: inline-flex;' : 'display: none;'}">
                    ⏱️ <span id="timer-display">00:00</span>
                </div>
            </div>
        </div>

        <div class="quiz-progress-track">
            <div class="quiz-progress-bar" id="quiz-progress-bar"></div>
        </div>

        <div class="${isSplit ? 'split-view-container' : 'single-column-container'}">
            ${isSplit ? renderPassageColumn(mod) : ''}
            <div class="questions-list" id="questions-list-container">
                ${renderQuestionsList(mod, allQuestions)}
            </div>
        </div>

        <div class="quiz-actions-footer">
            <div class="quiz-quick-nav" id="quiz-quick-nav">
                ${allQuestions.map((q, idx) => `
                    <div class="nav-dot" id="nav-dot-${q.id}" onclick="scrollToQuestion('question-${q.id}')">${idx + 1}</div>
                `).join('')}
            </div>

            <div class="footer-btn-group">
                <button class="btn-reset-quiz" onclick="resetCurrentQuiz()">
                    🔄 Làm Lại
                </button>
                <button class="btn-submit-quiz" onclick="submitQuiz()">
                    ✅ Nộp Bài & Xem Điểm
                </button>
            </div>
        </div>
    `;

    updateProgressBar(allQuestions.length);
}

function renderPassageColumn(mod) {
    if (mod.id === 'cloze-test') {
        return `
            <div class="passage-card">
                <div class="passage-header">
                    <div>
                        <h3 class="passage-title">📖 ${mod.passageTitle}</h3>
                        <div class="passage-meta">Vườn Quốc Gia Wollemi, Úc • Bấm vào [ ... ] để chọn từ</div>
                    </div>
                    <div class="passage-tools">
                        <button class="font-size-btn" onclick="adjustPassageFontSize(-0.05)" title="Giảm cỡ chữ">A-</button>
                        <button class="font-size-btn" onclick="adjustPassageFontSize(0.05)" title="Tăng cỡ chữ">A+</button>
                    </div>
                </div>
                <div class="passage-content">
                    ${mod.passage.replace(/\n\n/g, '<br><br>')}
                </div>
            </div>
        `;
    } else if (mod.id === 'reading-comp') {
        return `
            <div class="passage-card" id="reading-passages-container">
                <div class="passage-header">
                    <div>
                        <h3 class="passage-title">📖 Đọc Hiểu Chuyên Sâu</h3>
                        <div class="passage-meta">Bấm tab dưới để nhảy nhanh đến bài đọc tương ứng</div>
                    </div>
                    <div class="passage-tools">
                        <button class="font-size-btn" onclick="adjustPassageFontSize(-0.05)" title="Giảm cỡ chữ">A-</button>
                        <button class="font-size-btn" onclick="adjustPassageFontSize(0.05)" title="Tăng cỡ chữ">A+</button>
                    </div>
                </div>
                <div style="display: flex; gap: 8px; margin-bottom: 18px; flex-wrap: wrap;">
                    <button class="action-btn" style="padding: 4px 10px; font-size: 0.8rem;" onclick="jumpToReadingText('passage-sub-text-16')">📄 Text 16: Madonna</button>
                    <button class="action-btn" style="padding: 4px 10px; font-size: 0.8rem;" onclick="jumpToReadingText('passage-sub-text-17')">🎸 Text 17: Paul Staples</button>
                </div>
                ${mod.subSections.map(sub => `
                    <div id="passage-sub-${sub.id}" style="margin-bottom: 36px; padding-bottom: 24px; border-bottom: 2px dashed var(--border-color); transition: background-color 0.4s ease; border-radius: 8px; padding: 12px 6px;">
                        <h4 style="font-size: 1.15rem; color: var(--primary); font-weight: 800; margin-bottom: 4px;">${sub.title}</h4>
                        <div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; margin-bottom: 12px;">${sub.author}</div>
                        <div class="passage-content">
                            ${sub.passage}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    return '';
}

function adjustPassageFontSize(delta) {
    AppState.passageFontSize = Math.min(1.35, Math.max(0.85, AppState.passageFontSize + delta));
    const passage = document.querySelector('.passage-card');
    if (passage) {
        passage.style.fontSize = `${AppState.passageFontSize}rem`;
    }
    showToast(`Cỡ chữ bài đọc: ${Math.round(AppState.passageFontSize * 100)}%`, '🔍');
}

function jumpToReadingText(elementId) {
    const el = document.getElementById(elementId);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        el.style.backgroundColor = 'var(--primary-light)';
        setTimeout(() => el.style.backgroundColor = 'transparent', 1200);
    }
}

function renderQuestionsList(mod, questions) {
    let html = '';

    if (mod.subSections) {
        // Grouped by section
        mod.subSections.forEach(sub => {
            html += `<h3 style="font-size: 1.15rem; color: var(--primary); margin: 20px 0 10px; border-left: 4px solid var(--primary); padding-left: 10px; font-weight: 800;">${sub.title}</h3>`;
            sub.questions.forEach(q => {
                html += renderSingleQuestion(q);
            });
        });
    } else {
        questions.forEach(q => {
            html += renderSingleQuestion(q);
        });
    }

    return html;
}

function renderSingleQuestion(q) {
    const isBookmarked = AppState.userStats.bookmarkedQuestions.includes(String(q.id));

    return `
        <div class="question-card" id="question-${q.id}" onclick="handleQuestionCardClick('${q.id}')">
            <div class="question-meta-bar">
                <span class="question-badge">Câu ${q.id} ${q.category ? '• ' + q.category : ''}</span>
                <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" onclick="event.stopPropagation(); toggleBookmark('${q.id}')" title="Lưu câu hỏi">
                    ★
                </button>
            </div>

            ${q.sign ? `
                <div class="sign-box-display">
                    <span>📌</span>
                    <span>${q.sign}</span>
                </div>
            ` : ''}

            <div class="question-prompt">
                ${q.text}
            </div>

            <div class="options-stack" id="options-for-${q.id}">
                ${q.options.map((opt, optIndex) => `
                    <div class="option-item" id="opt-${q.id}-${optIndex}" onclick="event.stopPropagation(); handleOptionSelect('${q.id}', ${optIndex})">
                        <div class="option-letter">${String.fromCharCode(65 + optIndex)}</div>
                        <div class="option-text">${opt}</div>
                        <span class="option-status-icon" id="status-icon-${q.id}-${optIndex}"></span>
                    </div>
                `).join('')}
            </div>

            <div class="explanation-box" id="explanation-${q.id}">
                💡 <b>Giải thích chi tiết:</b> ${q.explanation}
            </div>
        </div>
    `;
}

function handleQuestionCardClick(qId) {
    const q = findQuestionById(qId);
    if (q && q.blankNum) {
        // Highlight corresponding blank in passage
        document.querySelectorAll('.cloze-blank').forEach(b => b.classList.remove('active'));
        const activeBlank = document.querySelector(`.cloze-blank[data-blank="${q.blankNum}"]`);
        if (activeBlank) {
            activeBlank.classList.add('active');
            activeBlank.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

// Option selection handler
function handleOptionSelect(questionId, optionIndex) {
    if (AppState.submitted) return;

    AppState.answers[questionId] = optionIndex;

    // Visual selection update
    const container = document.getElementById(`options-for-${questionId}`);
    if (container) {
        const items = container.querySelectorAll('.option-item');
        items.forEach(el => el.classList.remove('selected'));
        const target = document.getElementById(`opt-${questionId}-${optionIndex}`);
        if (target) target.classList.add('selected');
    }

    // Dot update
    const dot = document.getElementById(`nav-dot-${questionId}`);
    if (dot) dot.classList.add('answered');

    // Update cloze blank in passage if applicable
    const q = findQuestionById(questionId);
    if (q && q.blankNum) {
        const blank = document.querySelector(`.cloze-blank[data-blank="${q.blankNum}"]`);
        if (blank) {
            blank.innerHTML = `(${q.blankNum}) <u>${q.options[optionIndex]}</u>`;
            if (AppState.examMode === 'practice') {
                blank.style.background = (optionIndex === q.correct) ? 'var(--success)' : 'var(--error)';
                blank.style.color = 'white';
            }
        }
    }

    // Practice mode instant feedback
    if (AppState.examMode === 'practice') {
        revealQuestionFeedback(questionId, optionIndex);
    }

    // Update progress bar
    const totalCount = Object.keys(document.querySelectorAll('.question-card')).length;
    updateProgressBar(totalCount);
}

function revealQuestionFeedback(questionId, selectedIndex) {
    const q = findQuestionById(questionId);
    if (!q) return;

    const isCorrect = selectedIndex === q.correct;
    const targetOpt = document.getElementById(`opt-${questionId}-${selectedIndex}`);
    const correctOpt = document.getElementById(`opt-${questionId}-${q.correct}`);
    const expBox = document.getElementById(`explanation-${questionId}`);
    const dot = document.getElementById(`nav-dot-${questionId}`);

    if (isCorrect) {
        soundFX.playCorrect();
        if (targetOpt) {
            targetOpt.classList.add('correct');
            const icon = targetOpt.querySelector('.option-status-icon');
            if (icon) icon.innerText = '✓';
        }
        if (dot) {
            dot.classList.add('correct');
            dot.classList.remove('incorrect');
        }
    } else {
        soundFX.playIncorrect();
        if (targetOpt) {
            targetOpt.classList.add('incorrect');
            const icon = targetOpt.querySelector('.option-status-icon');
            if (icon) icon.innerText = '✕';
        }
        if (correctOpt) {
            correctOpt.classList.add('correct');
            const icon = correctOpt.querySelector('.option-status-icon');
            if (icon) icon.innerText = '✓';
        }
        if (dot) {
            dot.classList.add('incorrect');
            dot.classList.remove('correct');
        }
    }

    if (expBox) expBox.classList.add('show');
}

function findQuestionById(qId) {
    for (const mod of COURSE_DATA.modules) {
        if (mod.subSections) {
            for (const sub of mod.subSections) {
                const found = sub.questions.find(q => String(q.id) === String(qId));
                if (found) return found;
            }
        } else if (mod.questions) {
            const found = mod.questions.find(q => String(q.id) === String(qId));
            if (found) return found;
        }
    }
    return null;
}

function updateProgressBar(total) {
    const answeredCount = Object.keys(AppState.answers).length;
    const pct = total > 0 ? Math.round((answeredCount / total) * 100) : 0;
    const bar = document.getElementById('quiz-progress-bar');
    if (bar) bar.style.width = `${pct}%`;
}

function scrollToQuestion(elementId) {
    const el = document.getElementById(elementId);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('highlight');
        setTimeout(() => el.classList.remove('highlight'), 1200);
    }
}

function focusQuestion(code) {
    const q = findQuestionById(code.replace('cloze-', ''));
    if (q) {
        scrollToQuestion(`question-${q.id}`);
        // Highlight active blank
        document.querySelectorAll('.cloze-blank').forEach(b => b.classList.remove('active'));
        const activeBlank = document.querySelector(`.cloze-blank[data-blank="${q.blankNum}"]`);
        if (activeBlank) activeBlank.classList.add('active');
    }
}

// ==========================================================================
// Exam Mode & Timer
// ==========================================================================

function startTimer(seconds) {
    stopTimer();
    AppState.timeRemaining = seconds;
    updateTimerDisplay();

    AppState.timerInterval = setInterval(() => {
        AppState.timeRemaining--;
        updateTimerDisplay();

        if (AppState.timeRemaining <= 120) {
            document.getElementById('exam-timer-badge')?.classList.add('urgent');
        }

        if (AppState.timeRemaining <= 0) {
            stopTimer();
            alert('⏰ Đã hết thời gian làm bài! Hệ thống sẽ tự động nộp bài thi của bạn.');
            submitQuiz();
        }
    }, 1000);
}

function stopTimer() {
    if (AppState.timerInterval) {
        clearInterval(AppState.timerInterval);
        AppState.timerInterval = null;
    }
}

function updateTimerDisplay() {
    const el = document.getElementById('timer-display');
    if (!el) return;
    const mins = Math.floor(AppState.timeRemaining / 60);
    const secs = AppState.timeRemaining % 60;
    el.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Full Exam Simulation
function openExamSimulation() {
    const examQuestions = [];

    const modGrammar = COURSE_DATA.modules.find(m => m.id === 'grammar-vocab');
    if (modGrammar) examQuestions.push(...modGrammar.questions.slice(0, 8));

    const modSigns = COURSE_DATA.modules.find(m => m.id === 'signs-notices');
    if (modSigns) examQuestions.push(...modSigns.questions.slice(0, 5));

    const modCloze = COURSE_DATA.modules.find(m => m.id === 'cloze-test');
    if (modCloze) examQuestions.push(...modCloze.questions.slice(0, 5));

    const mockExam = {
        id: 'full-mock-exam',
        title: 'BÀI THI THỬ TỔNG HỢP (MOCK EXAM 2026)',
        subtitle: 'Thời gian làm bài: 25 phút • Đánh giá năng lực toàn diện',
        category: 'Đề Thi Thử',
        badge: '18 Câu hỏi',
        description: 'Đề thi tổng hợp đầy đủ các phần: Ngữ pháp, Biển báo, Điền từ và Đọc hiểu.',
        questions: examQuestions
    };

    AppState.currentView = 'module';
    AppState.currentModuleId = 'full-mock-exam';
    AppState.examMode = 'exam';
    AppState.answers = {};
    AppState.submitted = false;

    if (!COURSE_DATA.modules.find(m => m.id === 'full-mock-exam')) {
        COURSE_DATA.modules.push(mockExam);
    }

    renderNavigation();
    renderQuizView();
}

// ==========================================================================
// Submission, Results & Modal
// ==========================================================================

function submitQuiz() {
    stopTimer();
    AppState.submitted = true;

    const mod = COURSE_DATA.modules.find(m => m.id === AppState.currentModuleId);
    if (!mod) return;

    let allQuestions = [];
    if (mod.subSections) {
        mod.subSections.forEach(s => allQuestions.push(...s.questions));
    } else {
        allQuestions = mod.questions;
    }

    let correctCount = 0;
    allQuestions.forEach(q => {
        const userAns = AppState.answers[q.id];
        const isCorrect = userAns === q.correct;
        if (isCorrect) correctCount++;

        // Reveal visual cues
        const targetOpt = document.getElementById(`opt-${q.id}-${userAns}`);
        const correctOpt = document.getElementById(`opt-${q.id}-${q.correct}`);
        const expBox = document.getElementById(`explanation-${q.id}`);
        const dot = document.getElementById(`nav-dot-${q.id}`);

        if (correctOpt) {
            correctOpt.classList.add('correct');
            const icon = correctOpt.querySelector('.option-status-icon');
            if (icon) icon.innerText = '✓';
        }
        if (userAns !== undefined && !isCorrect && targetOpt) {
            targetOpt.classList.add('incorrect');
            const icon = targetOpt.querySelector('.option-status-icon');
            if (icon) icon.innerText = '✕';
        }

        if (dot) {
            dot.className = `nav-dot ${isCorrect ? 'correct' : 'incorrect'}`;
        }

        // Color blanks in cloze passage
        if (q.blankNum) {
            const blank = document.querySelector(`.cloze-blank[data-blank="${q.blankNum}"]`);
            if (blank) {
                if (isCorrect) {
                    blank.innerHTML = `(${q.blankNum}) <u>${q.options[q.correct]}</u>`;
                    blank.style.background = 'var(--success)';
                    blank.style.color = 'white';
                } else {
                    const userWord = userAns !== undefined ? q.options[userAns] : '...';
                    blank.innerHTML = `(${q.blankNum}) <s style="opacity:0.8;">${userWord}</s> <b>${q.options[q.correct]}</b>`;
                    blank.style.background = 'var(--error)';
                    blank.style.color = 'white';
                }
            }
        }

        if (expBox) expBox.classList.add('show');
    });

    const total = allQuestions.length;
    const percentage = Math.round((correctCount / total) * 100);

    // Save user stats
    AppState.userStats.totalAnswered += Object.keys(AppState.answers).length;
    AppState.userStats.totalCorrect += correctCount;
    AppState.userStats.scorePoints += correctCount * 10;
    AppState.userStats.moduleScores[mod.id] = {
        score: correctCount,
        total: total,
        percent: percentage,
        date: new Date().toLocaleDateString('vi-VN')
    };
    saveUserStats();

    if (percentage >= 70) {
        soundFX.playCelebration();
    } else {
        soundFX.playCorrect();
    }

    const firstQId = allQuestions.length > 0 ? allQuestions[0].id : '1';
    showResultModal(correctCount, total, percentage, mod.title, firstQId);
}

function showResultModal(score, total, percent, title, firstQId) {
    let msgTitle = "💪 Cần Cố Gắng Hơn!";
    let msgDesc = "Hãy xem lại các câu giải thích chi tiết bên dưới để củng cố ngữ pháp nhé.";

    if (percent >= 90) {
        msgTitle = "🌟 Xuất Sắc Tuyệt Đối!";
        msgDesc = "Bạn nắm rất vững các cấu trúc ngữ pháp và từ vựng của bài học này!";
    } else if (percent >= 70) {
        msgTitle = "🎉 Kết Quả Rất Tốt!";
        msgDesc = "Bạn đã vượt qua bài kiểm tra với điểm số ấn tượng.";
    }

    const modalHtml = `
        <div class="modal-backdrop show" id="result-modal" onclick="if (event.target === this) closeModal('result-modal')">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Kết Quả Bài Làm</h3>
                    <button class="modal-close-btn" onclick="closeModal('result-modal')">✕</button>
                </div>
                <div class="modal-body">
                    <div class="result-score-circle">
                        <h2>${percent}%</h2>
                        <span>${score}/${total} Đúng</span>
                    </div>
                    <h3 class="result-message-title">${msgTitle}</h3>
                    <p class="result-message-desc">${msgDesc}</p>

                    <div class="result-metrics">
                        <div class="metric-box correct">
                            <div class="num">${score}</div>
                            <div class="label">Câu Đúng</div>
                        </div>
                        <div class="metric-box incorrect">
                            <div class="num">${total - score}</div>
                            <div class="label">Câu Sai / Bỏ Qua</div>
                        </div>
                        <div class="metric-box time">
                            <div class="num">+${score * 10}</div>
                            <div class="label">Điểm XP Thưởng</div>
                        </div>
                    </div>

                    ${percent >= 80 ? `
                        <button class="action-btn" style="background: var(--primary-light); color: var(--primary); margin: 0 auto 10px;" onclick="generateCertificate('${title}', ${percent})">
                            🎓 Xem & Tải Chứng Chỉ Hoàn Thành
                        </button>
                    ` : ''}
                </div>
                <div class="modal-footer">
                    <button class="btn-reset-quiz" onclick="closeModal('result-modal'); scrollToQuestion('question-${firstQId}');">
                        Xem Lại Chi Tiết
                    </button>
                    <button class="btn-submit-quiz" onclick="closeModal('result-modal'); navigateTo('dashboard');">
                        Về Trang Chủ
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function resetCurrentQuiz() {
    AppState.answers = {};
    AppState.submitted = false;
    showToast('Đã làm mới bài thi 🔄');
    renderQuizView();
}

function closeModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) el.remove();
}

// ==========================================================================
// Certificate Modal
// ==========================================================================

function generateCertificate(courseTitle, scorePercent) {
    closeModal('result-modal');
    const today = new Date().toLocaleDateString('vi-VN');

    const certHtml = `
        <div class="modal-backdrop show" id="cert-modal" onclick="if (event.target === this) closeModal('cert-modal')">
            <div class="modal-content" style="max-width: 680px;">
                <div class="modal-header">
                    <h3 class="modal-title">🏆 Chứng Nhận Hoàn Thành Khóa Học</h3>
                    <button class="modal-close-btn" onclick="closeModal('cert-modal')">✕</button>
                </div>
                <div class="modal-body">
                    <div class="certificate-preview" id="certificate-print-area">
                        <div style="font-size: 2.2rem; margin-bottom: 8px;">🎓</div>
                        <h2>CERTIFICATE OF ACHIEVEMENT</h2>
                        <p style="text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem; color: #64748b;">EduMaster English Academy</p>
                        <p style="margin-top: 14px;">Chứng nhận bạn học viên xuất sắc đã hoàn thành chuyên đề:</p>
                        <h3 style="font-size: 1.3rem; color: #4f46e5; margin: 10px 0;">${courseTitle}</h3>
                        <div class="certificate-name">HỌC VIÊN CHĂM CHỈ</div>
                        <p style="margin-top: 10px; font-weight: 600;">Điểm số xuất sắc: <span style="color: #10b981;">${scorePercent}%</span></p>
                        <div style="display: flex; justify-content: space-between; margin-top: 24px; font-size: 0.8rem; color: #64748b;">
                            <div>Ngày cấp: ${today}</div>
                            <div>Mã định danh: EDUMASTER-${Math.floor(100000 + Math.random() * 900000)}</div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="action-btn" onclick="window.print()">
                        🖨️ In / Lưu PDF
                    </button>
                    <button class="btn-submit-quiz" onclick="closeModal('cert-modal')">
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', certHtml);
}

// ==========================================================================
// Bookmarks & Mistake Review
// ==========================================================================

function toggleBookmark(questionId) {
    const index = AppState.userStats.bookmarkedQuestions.indexOf(String(questionId));
    let isAdded = false;
    if (index === -1) {
        AppState.userStats.bookmarkedQuestions.push(String(questionId));
        isAdded = true;
    } else {
        AppState.userStats.bookmarkedQuestions.splice(index, 1);
    }
    saveUserStats();

    const targetQCard = document.getElementById(`question-${questionId}`);
    if (targetQCard) {
        const btn = targetQCard.querySelector('.bookmark-btn');
        if (btn) btn.classList.toggle('active');
    }

    showToast(isAdded ? `Đã lưu Câu ${questionId} vào sổ tay yêu thích ⭐` : `Đã bỏ lưu Câu ${questionId}`, '⭐');
}

function openMistakeReview() {
    const bookmarkedIds = AppState.userStats.bookmarkedQuestions;
    if (bookmarkedIds.length === 0) {
        alert('⭐ Bạn chưa lưu câu hỏi nào! Hãy bấm ngôi sao ở góc câu hỏi khi luyện tập để đưa câu hỏi vào danh sách này nhé.');
        return;
    }

    const reviewQuestions = [];
    bookmarkedIds.forEach(id => {
        const q = findQuestionById(id);
        if (q) reviewQuestions.push(q);
    });

    const reviewMod = {
        id: 'review-mod',
        title: 'Ôn Tập Câu Hỏi Đã Đánh Dấu (Favorites)',
        subtitle: `Bạn đang ôn tập lại ${reviewQuestions.length} câu hỏi đã lưu`,
        category: 'Sổ Tay Lỗi Sai',
        badge: `${reviewQuestions.length} câu`,
        questions: reviewQuestions
    };

    AppState.currentView = 'module';
    AppState.currentModuleId = 'review-mod';
    AppState.examMode = 'practice';
    AppState.answers = {};
    AppState.submitted = false;

    if (!COURSE_DATA.modules.find(m => m.id === 'review-mod')) {
        COURSE_DATA.modules.push(reviewMod);
    }

    renderNavigation();
    renderQuizView();
}

// ==========================================================================
// Flashcards View
// ==========================================================================

function renderFlashcards() {
    const content = document.getElementById('main-content');
    if (!content) return;

    AppState.currentFlashcardIndex = 0;
    renderFlashcardUI();
}

function renderFlashcardUI() {
    const content = document.getElementById('main-content');
    if (!content) return;

    const cards = COURSE_DATA.flashcards;
    const card = cards[AppState.currentFlashcardIndex];

    content.innerHTML = `
        <div style="max-width: 800px; margin: 0 auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; flex-wrap: wrap; gap: 10px;">
                <div>
                    <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--text-primary); letter-spacing: -0.3px;">💡 Sổ Tay Từ Vựng & Cấu Trúc Trọng Điểm</h2>
                    <p style="font-size: 0.9rem; color: var(--text-muted);">Lật thẻ để ghi nhớ các cụm từ (Collocations) và mẫu câu hay gặp trong đề thi.</p>
                </div>
                <div style="font-weight: 800; color: var(--primary); background: var(--primary-light); padding: 4px 12px; border-radius: 9999px;">
                    ${AppState.currentFlashcardIndex + 1} / ${cards.length}
                </div>
            </div>

            <div class="flashcard-container" onclick="flipCard(this)">
                <div class="flashcard" id="active-flashcard">
                    <div class="card-face front">
                        <span style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 1px; margin-bottom: 8px; font-weight: 700;">Cấu trúc / Thành ngữ</span>
                        <h3>${card.front}</h3>
                        <div class="card-hint">👆 Chạm hoặc Nhấp chuột để lật xem nghĩa & ví dụ</div>
                    </div>
                    <div class="card-face back">
                        <span style="font-size: 0.8rem; text-transform: uppercase; color: var(--primary); letter-spacing: 1px; margin-bottom: 8px; font-weight: 700;">Ý nghĩa & Cách dùng</span>
                        <h4>${card.back}</h4>
                        <div class="card-example">
                            <b>Ví dụ:</b> "${card.example}"
                        </div>
                    </div>
                </div>
            </div>

            <div class="flashcard-nav">
                <button class="flashcard-btn" onclick="prevFlashcard()" title="Thẻ trước">
                    ←
                </button>
                <button class="action-btn" onclick="flipCard(document.querySelector('.flashcard-container'))">
                    🔄 Lật Thẻ
                </button>
                <button class="flashcard-btn" onclick="nextFlashcard()" title="Thẻ tiếp theo">
                    →
                </button>
            </div>

            <div style="margin-top: 48px; background: var(--bg-card); border-radius: var(--radius-lg); padding: 26px; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm);">
                <h3 style="font-size: 1.15rem; margin-bottom: 16px; color: var(--text-primary); font-weight: 800;">📋 Bảng Tra Cứu Toàn Bộ Cấu Trúc</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 12px;">
                    ${cards.map((c, i) => `
                        <div style="padding: 14px; background: var(--bg-card-subtle); border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s; border: 1px solid var(--border-color);" onclick="jumpToFlashcard(${i})">
                            <div style="font-weight: 800; color: var(--primary); font-size: 0.95rem;">${c.front}</div>
                            <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 4px; line-height: 1.4;">${c.back}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function flipCard(container) {
    const card = container.querySelector('.flashcard') || document.getElementById('active-flashcard');
    if (card) {
        card.classList.toggle('flipped');
        soundFX.playCorrect();
    }
}

function prevFlashcard() {
    if (AppState.currentFlashcardIndex > 0) {
        AppState.currentFlashcardIndex--;
        renderFlashcardUI();
    }
}

function nextFlashcard() {
    if (AppState.currentFlashcardIndex < COURSE_DATA.flashcards.length - 1) {
        AppState.currentFlashcardIndex++;
        renderFlashcardUI();
    }
}

function jumpToFlashcard(idx) {
    AppState.currentFlashcardIndex = idx;
    renderFlashcardUI();
    window.scrollTo({ top: 120, behavior: 'smooth' });
}

// ==========================================================================
// Event Listeners & Global Helpers
// ==========================================================================

function setupEventListeners() {
    // Menu toggle for mobile
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const sidebar = document.getElementById('app-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');

    if (toggleBtn && sidebar && backdrop) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            backdrop.classList.toggle('show');
        });

        backdrop.addEventListener('click', () => {
            sidebar.classList.remove('open');
            backdrop.classList.remove('show');
        });
    }

    // Keyboard shortcuts: left/right for flashcards
    window.addEventListener('keydown', (e) => {
        if (AppState.currentView === 'flashcards') {
            if (e.key === 'ArrowRight') nextFlashcard();
            if (e.key === 'ArrowLeft') prevFlashcard();
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                flipCard(document.querySelector('.flashcard-container'));
            }
        }
    });
}
