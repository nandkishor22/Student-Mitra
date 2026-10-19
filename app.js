/**
 * Student Mitra - Ground Reality & College Decision Guide
 * Core JavaScript Engine
 */

// Initial Seed Database: Real-world Archetypes of Colleges
const DEFAULT_COLLEGES = [
  {
    id: "col-1",
    name: "Maharashtra Institute of Advanced Technology (MIAT)",
    city: "Pune",
    type: "Autonomous",
    groundScore: 88,
    metrics: {
      safety: 9,      // Campus safety & substance-free
      skillPush: 9,   // Teacher encouragement for skills & hackathons
      labs: 8,        // Working lab equipment & practicals
      events: 9,      // Tech fests, GDSC, coding culture
      fairExams: 9    // Internal marks fairness & transparent grading
    },
    substanceRating: "clean", // clean, moderate, high-risk
    attendancePolicy: "75% mandatory on paper, but liberal leave granted for national hackathons and verified remote internships.",
    redFlags: [
      "Hostel mess food quality drops significantly after the first semester.",
      "High competition inside coding clubs makes project team selection stressful."
    ],
    greenFlags: [
      "Zero alcohol or cigarette shops within 1.5 km of campus gates (strictly enforced zone).",
      "Professors actively mentor for Smart India Hackathon and sponsor entry fees.",
      "Computer labs open till 11 PM during exam & hackathon weeks with 1 Gbps fiber.",
      "Autonomous syllabus gets revised every 2 years with industry tech leaders."
    ],
    seniorQuotes: [
      {
        quote: "Teachers won't stop you from doing an off-campus internship if you show your offer letter. They care about real placements, not just assignment copies.",
        batch: "TE Comp, Batch of 2025"
      },
      {
        quote: "No ragging or senior bullying at all. The seniors actually took our mock interviews for free before placements.",
        batch: "BE IT, Batch of 2024"
      }
    ]
  },
  {
    id: "col-2",
    name: "City Metro Institute of Engineering (CMIE)",
    city: "Mumbai Suburbs",
    type: "University Affiliated",
    groundScore: 54,
    metrics: {
      safety: 5,
      skillPush: 4,
      labs: 5,
      events: 4,
      fairExams: 5
    },
    substanceRating: "high-risk",
    attendancePolicy: "Strict 80% biometric attendance; defaulters get debarred without warning. No relaxation for internships.",
    redFlags: [
      "Heavy smoking and drinking tapris located 50 meters outside the back gate.",
      "Teachers threaten students with internal marks if they attend hackathons instead of regular theory lectures.",
      "Labs have 10-year-old PCs with slow CPUs and non-working oscilloscopes in electronics lab.",
      "Internal viva marks depend heavily on personal rapport with faculty."
    ],
    greenFlags: [
      "Centrally located near local train station (easy commute).",
      "One decent annual cultural fest organized by student council."
    ],
    seniorQuotes: [
      {
        quote: "Don't expect any coding culture. We spend 3 hours a day copying old manual journals just to get faculty signatures.",
        batch: "BE Electronics, Batch of 2025"
      },
      {
        quote: "University paper checking is extremely unpredictable. Half the class gets KT in Maths-2 despite writing well.",
        batch: "TE Mech, Batch of 2025"
      }
    ]
  },
  {
    id: "col-3",
    name: "Government College of Engineering & Technology",
    city: "Bangalore",
    type: "Autonomous / Govt",
    groundScore: 91,
    metrics: {
      safety: 9,
      skillPush: 9,
      labs: 8,
      events: 10,
      fairExams: 9
    },
    substanceRating: "clean",
    attendancePolicy: "Relaxed 70% attendance. Extreme freedom for self-learning, startups, and open-source contributions.",
    redFlags: [
      "Infrastructure is old heritage style; hostel washrooms need maintenance.",
      "Bureaucracy is slow for library book clearance and administrative paperwork."
    ],
    greenFlags: [
      "Massive student-run club ecosystem (ACM, IEEE, Linux User Group, Robotics).",
      "Hostels are completely gated with 24/7 biometric security and zero tolerance for bullying.",
      "Professors never interfere with students working on open source or freelance projects.",
      "High ROI: Nominal government fees with strong alumni-driven hiring."
    ],
    seniorQuotes: [
      {
        quote: "You have complete freedom to build your career. Nobody pesters you with useless handwritten assignments.",
        batch: "BE CSE, Batch of 2024"
      }
    ]
  },
  {
    id: "col-4",
    name: "Apex Silicon Hills Technical Campus",
    city: "Delhi NCR",
    type: "Private Autonomous",
    groundScore: 68,
    metrics: {
      safety: 7,
      skillPush: 6,
      labs: 8,
      events: 7,
      fairExams: 6
    },
    substanceRating: "moderate",
    attendancePolicy: "75% attendance mandatory. Strict gate security but high pressure for internal mid-terms.",
    redFlags: [
      "Brochure promises 40 LPA placement, but 85% of batch gets placed in mass-recruiter 3.6 LPA roles.",
      "Hostel in-time is rigid (8 PM for girls, 9:30 PM for boys) with hefty fines.",
      "Faculty turnover is high; junior teachers keep changing mid-semester."
    ],
    greenFlags: [
      "High-end air-conditioned computer labs with Apple iMac lab and GPU workstations.",
      "Great sports ground and vibrant sports fest held every winter.",
      "Modern campus with clean food courts and hygienic mess."
    ],
    seniorQuotes: [
      {
        quote: "Campus looks like a 5-star hotel, but don't fall for the marketing. Build your own peer circle for coding early on.",
        batch: "B.Tech CSE, Batch of 2025"
      }
    ]
  },
  {
    id: "col-5",
    name: "Greenfield Valley College of Engineering",
    city: "Pune Rural",
    type: "University Affiliated",
    groundScore: 61,
    metrics: {
      safety: 7,
      skillPush: 5,
      labs: 6,
      events: 5,
      fairExams: 6
    },
    substanceRating: "clean",
    attendancePolicy: "Strict 75%. Good discipline, but lack of modern tech industry connections.",
    redFlags: [
      "Located far from main city; public transport connectivity after 6 PM is poor.",
      "Almost zero hackathons or developer conferences happen on campus.",
      "Core branch labs have basic equipment, but advanced research tools are locked up."
    ],
    greenFlags: [
      "Peaceful, lush green environment with fresh air and zero substance nuisance.",
      "Teachers are genuinely polite and helpful with academic curriculum doubts.",
      "Low tuition fees and very affordable nearby rental accommodation."
    ],
    seniorQuotes: [
      {
        quote: "Good college if you want a quiet, disciplined degree without distractions. But if you want to be a top tech coder, you must learn online.",
        batch: "BE ENTC, Batch of 2024"
      }
    ]
  }
];

// App State
let colleges = [];
let compareList = [];
let currentFilter = 'all';
let searchQuery = '';

// Senior Canteen Checklist Items
const CANTEEN_QUESTIONS = [
  {
    id: "cq-1",
    question: "Walk around the outer boundary & gates. Are there active cigarette or alcohol tapris crowded with students?",
    detail: "A healthy campus has clean surroundings and security guards ensuring no substance hot-spots right where students hang out.",
    category: "Safety & Culture"
  },
  {
    id: "cq-2",
    question: "Ask a 3rd-year student: 'If I get an internship or attend an off-campus hackathon, will teachers give attendance?'",
    detail: "If the senior laughs and says 'they will fail your internals', you know faculty values rote attendance over your future career.",
    category: "Teacher Mentorship"
  },
  {
    id: "cq-3",
    question: "Inspect the computer / hardware labs directly. Do the machines actually turn on and have internet?",
    detail: "Many colleges showcase shiny labs during admission, but during practicals, 3 students share 1 non-working PC or broken multimeter.",
    category: "Lab Reality"
  },
  {
    id: "cq-4",
    question: "Ask: 'Are internal marks given based on actual performance, or teacher buttering and favoritism?'",
    detail: "In toxic departments, internal marks are used as an extortion tool to force students to do personal faculty errands.",
    category: "Exam Fairness"
  },
  {
    id: "cq-5",
    question: "How active are student developer clubs (GDSC, Hackathons, Robotics, ACM)?",
    detail: "Check if the college has student-run coding communities, or if events are just formal speeches by administrative directors.",
    category: "Events & Vibe"
  },
  {
    id: "cq-6",
    question: "What is the true reality of hostel in-times, security, and mess food hygiene?",
    detail: "Ask hostelite seniors if they frequently fall sick or have to order outside food every weekend.",
    category: "Campus Living"
  },
  {
    id: "cq-7",
    question: "Is the college Autonomous or Affiliated? How long does university re-evaluation take?",
    detail: "University-affiliated colleges often face delayed results, rigid outdated syllabus, and harsh centralized paper checking.",
    category: "Academics"
  },
  {
    id: "cq-8",
    question: "Do teachers teach hands-on coding/modern tools, or just read old PowerPoint slides?",
    detail: "Know whether faculty pushes modern industry skills or if you'll have to self-teach 100% of your engineering.",
    category: "Teacher Mentorship"
  }
];

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  loadColleges();
  renderColleges();
  setupAuditorInteractive();
  renderChecklist();
  setupEventListeners();
  updateCompareDrawer();
});

// Load colleges from LocalStorage or seed data
function loadColleges() {
  const saved = localStorage.getItem("student_mitra_colleges");
  if (saved) {
    try {
      colleges = JSON.parse(saved);
    } catch (e) {
      colleges = DEFAULT_COLLEGES;
    }
  } else {
    colleges = DEFAULT_COLLEGES;
    localStorage.setItem("student_mitra_colleges", JSON.stringify(colleges));
  }
}

// Render Colleges Grid
function renderColleges() {
  const grid = document.getElementById("colleges-grid");
  if (!grid) return;

  const filtered = colleges.filter(col => {
    const matchSearch = col.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        col.city.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchSearch) return false;

    if (currentFilter === 'all') return true;
    if (currentFilter === 'substance-clean') return col.substanceRating === 'clean';
    if (currentFilter === 'high-skill') return col.metrics.skillPush >= 8;
    if (currentFilter === 'active-events') return col.metrics.events >= 8;
    if (currentFilter === 'autonomous') return col.type.toLowerCase().includes('autonomous');
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 48px; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 8px;">No colleges match your filter.</p>
        <p style="font-size: 0.9rem;">Try adjusting your search query or reset filters.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(col => {
    const isAddedToCompare = compareList.some(item => item.id === col.id);
    const scoreColorClass = col.groundScore >= 80 ? 'high' : (col.groundScore >= 65 ? 'medium' : 'low');
    
    return `
      <div class="college-card" id="${col.id}">
        <div class="card-top">
          <div>
            <div class="college-badge-group">
              <span class="mini-badge ${col.type.toLowerCase().includes('autonomous') ? 'autonomous' : ''}">${col.type}</span>
              <span class="mini-badge ${col.substanceRating === 'clean' ? 'substance-clean' : 'substance-warn'}">
                ${col.substanceRating === 'clean' ? '🛡️ Clean Campus Zone' : '⚠️ Substance Hotspots Near Gate'}
              </span>
            </div>
            <h3 class="college-name">${col.name}</h3>
            <span class="college-loc">📍 ${col.city}</span>
          </div>

          <div class="reality-score-badge ${scoreColorClass}">
            <strong>${col.groundScore}</strong>
            <span>Reality Score</span>
          </div>
        </div>

        <div class="metrics-list">
          <div class="metric-row">
            <span class="metric-name">👨‍🏫 Teacher Skill-Push</span>
            <div class="metric-bar-wrap">
              <div class="metric-bar-fill" style="width: ${col.metrics.skillPush * 10}%; background: #6366f1;"></div>
            </div>
            <span class="metric-val">${col.metrics.skillPush}/10</span>
          </div>
          <div class="metric-row">
            <span class="metric-name">🧪 Working Labs & Practicals</span>
            <div class="metric-bar-wrap">
              <div class="metric-bar-fill" style="width: ${col.metrics.labs * 10}%; background: #06b6d4;"></div>
            </div>
            <span class="metric-val">${col.metrics.labs}/10</span>
          </div>
          <div class="metric-row">
            <span class="metric-name">🚀 Hackathons & Tech Events</span>
            <div class="metric-bar-wrap">
              <div class="metric-bar-fill" style="width: ${col.metrics.events * 10}%; background: #a855f7;"></div>
            </div>
            <span class="metric-val">${col.metrics.events}/10</span>
          </div>
          <div class="metric-row">
            <span class="metric-name">⚖️ Internal Marks Fairness</span>
            <div class="metric-bar-wrap">
              <div class="metric-bar-fill" style="width: ${col.metrics.fairExams * 10}%; background: #10b981;"></div>
            </div>
            <span class="metric-val">${col.metrics.fairExams}/10</span>
          </div>
        </div>

        <div class="card-flags">
          <div class="card-flag-item green">
            <span>✅</span>
            <span>${col.greenFlags[0]}</span>
          </div>
          <div class="card-flag-item red">
            <span>🚩</span>
            <span>${col.redFlags[0]}</span>
          </div>
        </div>

        <div class="card-actions">
          <button class="btn-card-action" onclick="openCollegeModal('${col.id}')">
            🔍 Full Ground Audit
          </button>
          <button class="btn-card-action compare-toggle ${isAddedToCompare ? 'added' : ''}" onclick="toggleCompare('${col.id}')">
            ${isAddedToCompare ? '✓ Compared' : '+ Compare'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Open Detailed College Modal
function openCollegeModal(collegeId) {
  const col = colleges.find(c => c.id === collegeId);
  if (!col) return;

  const modal = document.getElementById("college-modal");
  const modalContent = document.getElementById("modal-detail-content");

  const scoreClass = col.groundScore >= 80 ? 'high' : (col.groundScore >= 65 ? 'medium' : 'low');

  modalContent.innerHTML = `
    <div class="modal-header">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
        <div>
          <div class="college-badge-group">
            <span class="mini-badge autonomous">${col.type}</span>
            <span class="mini-badge ${col.substanceRating === 'clean' ? 'substance-clean' : 'substance-warn'}">
              ${col.substanceRating === 'clean' ? '🛡️ Verified Substance-Free Surroundings' : '⚠️ Substance Hotspots Reported Near Gates'}
            </span>
          </div>
          <h2>${col.name}</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">📍 ${col.city} • Ground Reality Verification</p>
        </div>
        <div class="reality-score-badge ${scoreClass}" style="padding: 10px 16px;">
          <strong style="font-size: 1.8rem;">${col.groundScore}</strong>
          <span>Ground Score / 100</span>
        </div>
      </div>
    </div>

    <div class="modal-body">
      <!-- 5 Factor Scores Breakdown -->
      <div class="modal-section">
        <h4 class="modal-section-title">📊 The 5 Ground Reality Factors</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 20px;">
          <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px; border: 1px solid var(--border-subtle);">
            <div style="font-size: 0.8rem; color: var(--text-muted);">Campus Safety & Cleanliness</div>
            <div style="font-size: 1.2rem; font-weight: 700; color: #10b981;">${col.metrics.safety} / 10</div>
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px; border: 1px solid var(--border-subtle);">
            <div style="font-size: 0.8rem; color: var(--text-muted);">Teacher Skill-Push</div>
            <div style="font-size: 1.2rem; font-weight: 700; color: #6366f1;">${col.metrics.skillPush} / 10</div>
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px; border: 1px solid var(--border-subtle);">
            <div style="font-size: 0.8rem; color: var(--text-muted);">Working Labs & Equipment</div>
            <div style="font-size: 1.2rem; font-weight: 700; color: #06b6d4;">${col.metrics.labs} / 10</div>
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px; border: 1px solid var(--border-subtle);">
            <div style="font-size: 0.8rem; color: var(--text-muted);">Tech Events & Hackathons</div>
            <div style="font-size: 1.2rem; font-weight: 700; color: #a855f7;">${col.metrics.events} / 10</div>
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px; border: 1px solid var(--border-subtle);">
            <div style="font-size: 0.8rem; color: var(--text-muted);">Fair Internal Grading</div>
            <div style="font-size: 1.2rem; font-weight: 700; color: #f59e0b;">${col.metrics.fairExams} / 10</div>
          </div>
        </div>
      </div>

      <!-- Attendance & Policy Reality -->
      <div class="modal-section">
        <h4 class="modal-section-title">⏱️ Attendance & Freedom Reality</h4>
        <div style="background: rgba(0,0,0,0.3); padding: 14px 18px; border-radius: 8px; border: 1px solid var(--border-subtle); font-size: 0.92rem;">
          ${col.attendancePolicy}
        </div>
      </div>

      <!-- Red & Green Flags -->
      <div class="modal-section">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <h4 class="modal-section-title" style="color: #34d399;">✅ Verified Green Flags</h4>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${col.greenFlags.map(gf => `
                <div style="background: var(--green-bg); border: 1px solid var(--green-border); padding: 10px 14px; border-radius: 8px; font-size: 0.85rem; color: #d1fae5;">
                  ✓ ${gf}
                </div>
              `).join('')}
            </div>
          </div>

          <div>
            <h4 class="modal-section-title" style="color: #f87171;">🚩 Honest Red Flags</h4>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${col.redFlags.map(rf => `
                <div style="background: var(--red-bg); border: 1px solid var(--red-border); padding: 10px 14px; border-radius: 8px; font-size: 0.85rem; color: #fecaca;">
                  ⚠️ ${rf}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- Unfiltered Senior Voices -->
      <div class="modal-section">
        <h4 class="modal-section-title">🗣️ Unfiltered Canteen Testimonials</h4>
        ${col.seniorQuotes.map(sq => `
          <div class="senior-quote-box">
            "${sq.quote}"
            <span class="senior-quote-author">— Senior Student, ${sq.batch}</span>
          </div>
        `).join('')}
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 24px;">
        <button class="btn-secondary" onclick="closeModal('college-modal')">Close</button>
        <button class="btn-primary" onclick="toggleCompare('${col.id}'); closeModal('college-modal');">
          ${compareList.some(i => i.id === col.id) ? 'Remove from Compare' : 'Add to Reality Compare'}
        </button>
      </div>
    </div>
  `;

  modal.classList.add("open");
}

// Close generic modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("open");
}

// Compare System Logic
function toggleCompare(collegeId) {
  const col = colleges.find(c => c.id === collegeId);
  if (!col) return;

  const index = compareList.findIndex(c => c.id === collegeId);
  if (index > -1) {
    compareList.splice(index, 1);
  } else {
    if (compareList.length >= 3) {
      alert("You can compare up to 3 colleges side-by-side at a time.");
      return;
    }
    compareList.push(col);
  }

  updateCompareDrawer();
  renderColleges();
}

function removeCompareItem(collegeId) {
  compareList = compareList.filter(c => c.id !== collegeId);
  updateCompareDrawer();
  renderColleges();
}

function updateCompareDrawer() {
  const drawer = document.getElementById("compare-drawer");
  const countEl = document.getElementById("compare-count");
  const chipsContainer = document.getElementById("drawer-chips");

  if (countEl) countEl.innerText = compareList.length;

  if (compareList.length > 0) {
    drawer.classList.add("open");
    chipsContainer.innerHTML = compareList.map(c => `
      <div class="compare-chip">
        <span>${c.name.split(' ')[0]}... (${c.city})</span>
        <span class="compare-chip-remove" onclick="removeCompareItem('${c.id}')">&times;</span>
      </div>
    `).join('');
  } else {
    drawer.classList.remove("open");
  }
}

// Open Full Compare Matrix Modal
function openCompareModal() {
  if (compareList.length < 2) {
    alert("Please select at least 2 colleges to compare.");
    return;
  }

  const modal = document.getElementById("compare-modal");
  const body = document.getElementById("compare-modal-content");

  body.innerHTML = `
    <div class="modal-header">
      <h2>⚖️ Head-to-Head Ground Reality Comparison</h2>
      <p style="color: var(--text-muted); font-size: 0.9rem;">Comparing strictly on non-brochure factors: Safety, faculty attitude, labs, and exam fairness.</p>
    </div>

    <div class="modal-body" style="overflow-x: auto;">
      <table class="compare-table">
        <thead>
          <tr>
            <th style="width: 25%;">Ground Factor</th>
            ${compareList.map(c => `
              <th style="width: ${75 / compareList.length}%;">
                <div style="font-size: 1.1rem; color: #fff;">${c.name}</div>
                <div style="font-size: 0.78rem; color: var(--text-muted);">${c.city} • ${c.type}</div>
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Overall Ground Reality Score</strong></td>
            ${compareList.map(c => `
              <td>
                <span class="reality-score-badge ${c.groundScore >= 80 ? 'high' : 'medium'}" style="display: inline-block;">
                  <strong>${c.groundScore} / 100</strong>
                </span>
              </td>
            `).join('')}
          </tr>
          <tr>
            <td><strong>Campus Surroundings & Safety</strong></td>
            ${compareList.map(c => `
              <td>
                <div style="font-weight: 700; color: ${c.substanceRating === 'clean' ? '#10b981' : '#ef4444'};">
                  ${c.substanceRating === 'clean' ? '🛡️ Safe & Clean' : '⚠️ Substance Hotspots Nearby'}
                </div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Score: ${c.metrics.safety}/10</div>
              </td>
            `).join('')}
          </tr>
          <tr>
            <td><strong>Teacher Skill-Push & Hackathons</strong></td>
            ${compareList.map(c => `
              <td>
                <div style="font-weight: 700; color: ${c.metrics.skillPush >= 8 ? '#10b981' : '#f59e0b'};">
                  ${c.metrics.skillPush >= 8 ? '🚀 Pro-Skills & Mentorship' : '📖 Rote / Textbook Focused'}
                </div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Score: ${c.metrics.skillPush}/10</div>
              </td>
            `).join('')}
          </tr>
          <tr>
            <td><strong>Working Labs & Equipment</strong></td>
            ${compareList.map(c => `
              <td>
                <div style="font-weight: 700;">${c.metrics.labs}/10</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">${c.metrics.labs >= 8 ? 'Modern working gear' : 'Average / outdated PCs'}</div>
              </td>
            `).join('')}
          </tr>
          <tr>
            <td><strong>Attendance Policy Reality</strong></td>
            ${compareList.map(c => `
              <td style="font-size: 0.82rem; line-height: 1.5;">${c.attendancePolicy}</td>
            `).join('')}
          </tr>
          <tr>
            <td><strong>Major Red Flag</strong></td>
            ${compareList.map(c => `
              <td style="color: #fca5a5; font-size: 0.82rem;">🚩 ${c.redFlags[0]}</td>
            `).join('')}
          </tr>
          <tr>
            <td><strong>Major Green Flag</strong></td>
            ${compareList.map(c => `
              <td style="color: #86efac; font-size: 0.82rem;">✅ ${c.greenFlags[0]}</td>
            `).join('')}
          </tr>
        </tbody>
      </table>

      <div style="text-align: right; margin-top: 24px;">
        <button class="btn-primary" onclick="closeModal('compare-modal')">Done Reviewing</button>
      </div>
    </div>
  `;

  modal.classList.add("open");
}

// Interactive Campus Reality Auditor Tool Logic
const auditState = {
  collegeName: "Target College",
  substanceSurroundings: 2, // 2: Clean, 1: Moderate, 0: Toxic
  teacherSkillPush: 2,      // 2: Encourages, 1: Neutral, 0: Attendance Threats
  labHardware: 2,           // 2: Working/New, 1: Average, 0: Dead/Copy journals
  examPolitics: 2,          // 2: Fair/Autonomous, 1: Strict Central, 0: Biased internals
  techClubs: 2,             // 2: Very Active, 1: Formal Only, 0: Dead
  attendancePressure: 2     // 2: Lenient for Skills, 1: Strict 75%, 0: 85% Prison
};

function setupAuditorInteractive() {
  const options = document.querySelectorAll(".audit-btn-option");
  options.forEach(btn => {
    btn.addEventListener("click", () => {
      const group = btn.dataset.group;
      const value = parseInt(btn.dataset.value);

      // Deselect siblings in same group
      document.querySelectorAll(`.audit-btn-option[data-group="${group}"]`).forEach(b => {
        b.classList.remove("selected");
      });

      btn.classList.add("selected");
      auditState[group] = value;
      calculateAuditScore();
    });
  });

  const nameInput = document.getElementById("audit-college-name");
  if (nameInput) {
    nameInput.addEventListener("input", (e) => {
      auditState.collegeName = e.target.value.trim() || "Target College";
      calculateAuditScore();
    });
  }

  // Initial calculation
  calculateAuditScore();
}

function calculateAuditScore() {
  // Max points = 2 * 6 = 12
  const totalPoints = 
    auditState.substanceSurroundings +
    auditState.teacherSkillPush +
    auditState.labHardware +
    auditState.examPolitics +
    auditState.techClubs +
    auditState.attendancePressure;

  // Scale to 100
  const score = Math.round((totalPoints / 12) * 100);

  // Update UI Elements
  const circle = document.getElementById("audit-score-circle");
  const scoreNum = document.getElementById("audit-score-num");
  const verdictTitle = document.getElementById("audit-verdict-title");
  const verdictDesc = document.getElementById("audit-verdict-desc");
  const flagsContainer = document.getElementById("audit-flags-container");

  if (!circle || !scoreNum) return;

  scoreNum.innerText = score;
  circle.style.setProperty("--score-pct", score);

  let color = "#10b981"; // green
  let glow = "rgba(16, 185, 129, 0.4)";
  let verdict = "✨ Skill & Culture Heaven";
  let desc = `${auditState.collegeName} exhibits outstanding signs of modern mentorship, high campus safety, and practical-first learning.`;

  if (score < 50) {
    color = "#ef4444";
    glow = "rgba(239, 68, 68, 0.4)";
    verdict = "🚨 High-Risk / Toxic Environment Alert";
    desc = `${auditState.collegeName} shows critical warning signs: heavy substance/toxicity risk, hostile attendance policies, or dead practical labs. Proceed with extreme caution.`;
  } else if (score < 75) {
    color = "#f59e0b";
    glow = "rgba(245, 158, 11, 0.4)";
    verdict = "⚠️ Typical Rote Academic Campus";
    desc = `${auditState.collegeName} is decent for basic degree completion, but will require you to rely heavily on self-learning and personal vigilance.`;
  }

  circle.style.setProperty("--score-color", color);
  circle.style.setProperty("--score-glow", glow);
  verdictTitle.innerText = verdict;
  verdictTitle.style.color = color;
  verdictDesc.innerText = desc;

  // Generate Red & Green Flags based on user's exact selections
  const flags = [];

  // Substance
  if (auditState.substanceSurroundings === 2) {
    flags.push({ type: 'green', title: "Safe Campus Perimeter", text: "Zero tapris or illegal substance spots near student entrance." });
  } else if (auditState.substanceSurroundings === 0) {
    flags.push({ type: 'red', title: "Substance Hotspot Warning", text: "Heavy cigarette/alcohol hangouts right outside gate can create peer pressure." });
  }

  // Teacher Skill Push
  if (auditState.teacherSkillPush === 2) {
    flags.push({ type: 'green', title: "Mentorship Driven Faculty", text: "Teachers actively support internships, hackathons & open source." });
  } else if (auditState.teacherSkillPush === 0) {
    flags.push({ type: 'red', title: "Attendance Slavery Reported", text: "Teachers penalize students who build real-world skills outside textbooks." });
  }

  // Labs
  if (auditState.labHardware === 0) {
    flags.push({ type: 'red', title: "Broken / Outdated Equipment", text: "Practicals are just copy-paste manual journals without real learning." });
  } else if (auditState.labHardware === 2) {
    flags.push({ type: 'green', title: "Hands-on Modern Labs", text: "Students get individual working hardware and fast internet." });
  }

  // Exam Politics
  if (auditState.examPolitics === 0) {
    flags.push({ type: 'red', title: "Internal Marks Politics", text: "Scores awarded based on favoritism rather than merit." });
  }

  // Attendance Pressure
  if (auditState.attendancePressure === 0) {
    flags.push({ type: 'red', title: "Rigid Jail-like Rules", text: "Strict debarment culture without medical or project leniency." });
  }

  if (flagsContainer) {
    flagsContainer.innerHTML = flags.map(f => `
      <div class="flag-box ${f.type}">
        <span class="flag-icon">${f.type === 'red' ? '🚨' : '✅'}</span>
        <div class="flag-text">
          <strong>${f.title}</strong>
          ${f.text}
        </div>
      </div>
    `).join('');
  }
}

// Senior Canteen Checklist Logic
function renderChecklist() {
  const container = document.getElementById("checklist-items-grid");
  if (!container) return;

  const savedChecks = JSON.parse(localStorage.getItem("student_mitra_canteen_checks") || "{}");

  container.innerHTML = CANTEEN_QUESTIONS.map(q => {
    const isChecked = !!savedChecks[q.id];
    return `
      <div class="check-item ${isChecked ? 'completed' : ''}" onclick="toggleCheckItem('${q.id}')">
        <div class="custom-checkbox">✓</div>
        <div class="check-item-content">
          <span class="check-category-pill">${q.category}</span>
          <h4>${q.question}</h4>
          <p>${q.detail}</p>
        </div>
      </div>
    `;
  }).join('');

  updateChecklistProgress();
}

function toggleCheckItem(id) {
  const savedChecks = JSON.parse(localStorage.getItem("student_mitra_canteen_checks") || "{}");
  savedChecks[id] = !savedChecks[id];
  localStorage.setItem("student_mitra_canteen_checks", JSON.stringify(savedChecks));
  renderChecklist();
}

function updateChecklistProgress() {
  const savedChecks = JSON.parse(localStorage.getItem("student_mitra_canteen_checks") || "{}");
  const completedCount = Object.values(savedChecks).filter(Boolean).length;
  const total = CANTEEN_QUESTIONS.length;

  const countEl = document.getElementById("canteen-progress-count");
  if (countEl) {
    countEl.innerText = `${completedCount}/${total}`;
  }
}

function resetChecklist() {
  if (confirm("Reset your campus visit checklist progress?")) {
    localStorage.removeItem("student_mitra_canteen_checks");
    renderChecklist();
  }
}

// Submit Anonymous Ground Truth Modal Logic
function openSubmitReportModal() {
  const modal = document.getElementById("submit-report-modal");
  if (modal) modal.classList.add("open");
}

function handleReportSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("rep-college-name").value.trim();
  const city = document.getElementById("rep-city").value.trim();
  const type = document.getElementById("rep-type").value;
  const safety = parseInt(document.getElementById("rep-safety").value);
  const skill = parseInt(document.getElementById("rep-skill").value);
  const labs = parseInt(document.getElementById("rep-labs").value);
  const events = parseInt(document.getElementById("rep-events").value);
  const exams = parseInt(document.getElementById("rep-exams").value);
  const greenFlag = document.getElementById("rep-greenflag").value.trim();
  const redFlag = document.getElementById("rep-redflag").value.trim();
  const quote = document.getElementById("rep-quote").value.trim();
  const batch = document.getElementById("rep-batch").value.trim() || "Current Senior";

  const averageScore = Math.round(((safety + skill + labs + events + exams) / 50) * 100);

  const newCollege = {
    id: "user-col-" + Date.now(),
    name: name,
    city: city,
    type: type,
    groundScore: averageScore,
    metrics: {
      safety: safety,
      skillPush: skill,
      labs: labs,
      events: events,
      fairExams: exams
    },
    substanceRating: safety >= 7 ? "clean" : "high-risk",
    attendancePolicy: "Reported by senior: " + (skill >= 7 ? "Flexible for genuine skills & projects." : "Strict attendance enforcement."),
    redFlags: [redFlag || "High attendance pressure reported by students."],
    greenFlags: [greenFlag || "Strong student community camaraderie."],
    seniorQuotes: [
      {
        quote: quote || "Honest ground observation submitted by verified senior student.",
        batch: batch
      }
    ]
  };

  colleges.unshift(newCollege);
  localStorage.setItem("student_mitra_colleges", JSON.stringify(colleges));
  
  closeModal("submit-report-modal");
  renderColleges();
  alert("🎉 Thank you! Your ground reality audit has been added anonymously to help upcoming students.");
}

// Global Event Listeners
function setupEventListeners() {
  // Search bar
  const searchInput = document.getElementById("college-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderColleges();
    });
  }

  // Filter Buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderColleges();
    });
  });

  // Modal Backdrop click to close
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("open");
      }
    });
  });

  // Report Form Submit
  const reportForm = document.getElementById("ground-report-form");
  if (reportForm) {
    reportForm.addEventListener("submit", handleReportSubmit);
  }
}
