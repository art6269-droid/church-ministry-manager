const STORE_KEY = "church-ministry-manager-v4";
const LEGACY_STORE_KEYS = [
  "church-ministry-manager-v3",
  "church-ministry-manager-v2",
  "church-ministry-manager-v1",
  "toddler-sunday-school-scheduler-v6",
  "toddler-sunday-school-scheduler-v5",
  "toddler-sunday-school-scheduler-v4",
  "toddler-sunday-school-scheduler-v3",
  "toddler-sunday-school-scheduler-v2",
  "toddler-sunday-school-scheduler-v1",
];

const ACTIVE_MINISTRY_ID = "toddlerSundaySchool";
const ACTIVE_SERVICE_ID = "first";
const SMALL_GROUP_MINISTRY_ID = "smallGroupSchedule";
const SMALL_GROUP_SERVICE_ID = "main";

const MINISTRY_MODULES = [
  { id: "toddlerSundaySchool", label: "幼兒主日學", implemented: true },
  { id: "smallGroupSchedule", label: "小組服事表", implemented: true },
  { id: "childrenSundaySchool", label: "兒童主日學", implemented: false },
  { id: "youthPastoralZone", label: "青年牧區", implemented: false },
  { id: "hospitalityTeam", label: "招待團", implemented: false },
  { id: "worshipTeam", label: "敬拜團", implemented: false },
  { id: "mediaTeam", label: "媒體團", implemented: false },
  { id: "adminTeam", label: "行政團", implemented: false },
  { id: "otherMinistry", label: "其他事工", implemented: false },
];

const TODDLER_SERVICES = [
  { id: "first", label: "第一堂", timeSlot: "sunday-am-1", implemented: true },
  { id: "second", label: "第二堂", timeSlot: "sunday-am-2", implemented: true },
  { id: "third", label: "第三堂", timeSlot: "sunday-am-3", implemented: true },
];

const MAIN_ROLES = [
  { id: "hospitality", label: "招待事工" },
  { id: "tech", label: "控台事工" },
  { id: "worshipSupport", label: "敬拜（配搭）" },
  { id: "worshipLead", label: "敬拜（主責）" },
  { id: "messageSupport", label: "信息（配搭）" },
  { id: "messageLead", label: "信息（主責）" },
  { id: "host", label: "報告（司會）" },
];

const GROUPS = [
  { id: "toddlers", label: "幼幼班" },
  { id: "small", label: "小班" },
  { id: "middle", label: "中班" },
  { id: "large", label: "大班" },
];

const LEVELS = [
  { id: "new", label: "新進", duties: ["hospitality", "tech", "groupSupport"] },
  { id: "advanced", label: "進階", duties: ["hospitality", "tech", "groupSupport", "worshipSupport", "groupLead"] },
  { id: "senior", label: "資深", duties: ["hospitality", "tech", "groupSupport", "groupLead", "worshipSupport", "worshipLead", "messageSupport"] },
  { id: "leader", label: "領袖", duties: ["hospitality", "tech", "groupSupport", "groupLead", "worshipSupport", "worshipLead", "messageSupport", "messageLead", "host"] },
];

const WORKER_IDENTITIES = [
  { id: "regular", label: "一般同工" },
  { id: "fullTime", label: "全職同工" },
  { id: "special", label: "特殊同工" },
];

const SPECIAL_TYPES = [
  { id: "pastor", label: "區牧" },
  { id: "elder", label: "年長同工" },
  { id: "temp", label: "臨時支援" },
  { id: "trainee", label: "見習同工" },
];

const WORKER_TYPES = WORKER_IDENTITIES;

const FUTURE_FEATURES = [
  { id: "excelExport", label: "Excel 匯出" },
  { id: "lineAnnouncement", label: "LINE 公告產生" },
  { id: "historySearch", label: "歷史月份查詢" },
  { id: "workerStatsReport", label: "同工服事報表" },
];

const GROUP_DUTIES = {
  groupLead: "小組老師（主責）",
  groupSupport: "小組老師（配搭）",
};

const DUTY_LABELS = {
  ...Object.fromEntries(MAIN_ROLES.map((role) => [role.id, role.label])),
  ...GROUP_DUTIES,
};

const BEST_DUTIES = [
  ...MAIN_ROLES.map((role) => ({ id: role.id, label: role.label })),
  { id: "groupSupport", label: GROUP_DUTIES.groupSupport },
  { id: "groupLead", label: GROUP_DUTIES.groupLead },
];

const WORSHIP_ROLE_IDS = ["worshipSupport", "worshipLead"];
const MESSAGE_ROLE_IDS = ["messageSupport", "messageLead"];
const IMPORTANT_ROLE_IDS = [...WORSHIP_ROLE_IDS, ...MESSAGE_ROLE_IDS, "host"];
const OPTIONAL_MAIN_ROLE_IDS = ["tech", "worshipSupport", "messageSupport"];
const TRAINING_SUPPORT_ROLE_IDS = ["worshipSupport", "messageSupport"];
const HOSPITALITY_ROLE_ID = "hospitality";
const HOSPITALITY_MIN = 1;
const HOSPITALITY_TARGET = 3;
const UPGRADE_BACKUP_PREFIX = "church-ministry-manager-backup:";
const GROUP_ROTATION = {
  toddlers: "small",
  small: "middle",
  middle: "large",
  large: "toddlers",
};

const SMALL_GROUP_LEVELS = [
  { id: "new", label: "新進" },
  { id: "regular", label: "一般" },
  { id: "coworker", label: "同工" },
  { id: "leader", label: "領袖" },
];

const SMALL_GROUP_DUTIES = [
  { id: "icebreaker", label: "破冰" },
  { id: "worship", label: "敬拜" },
  { id: "testimony", label: "見證" },
  { id: "word", label: "話語" },
  { id: "snack", label: "點心" },
];
const SMALL_GROUP_LEVEL_DUTY_RULES = {
  new: ["icebreaker", "snack"],
  regular: ["icebreaker", "snack", "testimony"],
  coworker: ["icebreaker", "snack", "testimony", "worship", "word"],
  leader: ["icebreaker", "snack", "testimony", "worship", "word"],
};

const WEEKDAY_OPTIONS = [
  { id: 1, label: "週一", announcement: "一" },
  { id: 2, label: "週二", announcement: "二" },
  { id: 3, label: "週三", announcement: "三" },
  { id: 4, label: "週四", announcement: "四" },
  { id: 5, label: "週五", announcement: "五" },
  { id: 6, label: "週六", announcement: "六" },
  { id: 0, label: "週日", announcement: "日" },
];

const elements = {};
var activeWorkerAlias = null;
let state = loadState();
let selectedMonth = getMonthKey(new Date());
let selectedWeekId = "";
let currentView = "manage";
let toastTimer = null;
let latestNotices = [];
let expandedWorkerId = "";
let rosterSearchTerm = "";
let rosterLevelFilter = "all";
let rosterTypeFilter = "all";
let selectedSmallGroupMeetingId = "";
let expandedSmallGroupWorkerId = "";

document.addEventListener("DOMContentLoaded", () => {
  bindElements();
  selectedWeekId = pickInitialWeek(selectedMonth);
  bindEvents();
  render();
});

function bindElements() {
  elements.monthInput = document.querySelector("#monthInput");
  elements.exportJsonBtn = document.querySelector("#exportJsonBtn");
  elements.importJsonBtn = document.querySelector("#importJsonBtn");
  elements.importJsonFile = document.querySelector("#importJsonFile");
  elements.manageModeBtn = document.querySelector("#manageModeBtn");
  elements.sheetModeBtn = document.querySelector("#sheetModeBtn");
  elements.modeSwitch = document.querySelector(".mode-switch");
  elements.managementView = document.querySelector("#managementView");
  elements.sheetView = document.querySelector("#sheetView");
  elements.smallGroupView = document.querySelector("#smallGroupView");
  elements.modulePanel = document.querySelector("#modulePanel");
  elements.summaryPanel = document.querySelector("#summaryPanel");
  elements.volunteerForm = document.querySelector("#volunteerForm");
  elements.volunteerName = document.querySelector("#volunteerName");
  elements.volunteerNickname = document.querySelector("#volunteerNickname");
  elements.volunteerNote = document.querySelector("#volunteerNote");
  elements.volunteerLevel = document.querySelector("#volunteerLevel");
  elements.volunteerType = document.querySelector("#volunteerType");
  elements.specialTypeField = document.querySelector("#specialTypeField");
  elements.volunteerSpecialType = document.querySelector("#volunteerSpecialType");
  elements.volunteerMostSenior = document.querySelector("#volunteerMostSenior");
  elements.volunteerBestDuties = document.querySelector("#volunteerBestDuties");
  elements.volunteerWeakDuties = document.querySelector("#volunteerWeakDuties");
  elements.volunteerHostCandidate = document.querySelector("#volunteerHostCandidate");
  elements.pastorReserveSettings = document.querySelector("#pastorReserveSettings");
  elements.volunteerReservedRole = document.querySelector("#volunteerReservedRole");
  elements.volunteerMonthlyCount = document.querySelector("#volunteerMonthlyCount");
  elements.fixedDutyEnabled = document.querySelector("#fixedDutyEnabled");
  elements.volunteerFixedRole = document.querySelector("#volunteerFixedRole");
  elements.fixedGroupEnabled = document.querySelector("#fixedGroupEnabled");
  elements.volunteerFixedGroup = document.querySelector("#volunteerFixedGroup");
  elements.allowedPreview = document.querySelector("#allowedPreview");
  elements.workerSearch = document.querySelector("#workerSearch");
  elements.levelFilter = document.querySelector("#levelFilter");
  elements.typeFilter = document.querySelector("#typeFilter");
  elements.volunteerList = document.querySelector("#volunteerList");
  elements.workerCount = document.querySelector("#workerCount");
  elements.autoMonthBtn = document.querySelector("#autoMonthBtn");
  elements.autoMonthAvailabilityBtn = document.querySelector("#autoMonthAvailabilityBtn");
  elements.allAvailableBtn = document.querySelector("#allAvailableBtn");
  elements.clearAvailabilityBtn = document.querySelector("#clearAvailabilityBtn");
  elements.availabilitySummary = document.querySelector("#availabilitySummary");
  elements.availabilityMatrix = document.querySelector("#availabilityMatrix");
  elements.leadPoolList = document.querySelector("#leadPoolList");
  elements.annualUpgradeBtn = document.querySelector("#annualUpgradeBtn");
  elements.restoreUpgradeBtn = document.querySelector("#restoreUpgradeBtn");
  elements.upgradeDialog = document.querySelector("#upgradeDialog");
  elements.cancelUpgradeBtn = document.querySelector("#cancelUpgradeBtn");
  elements.confirmUpgradeBtn = document.querySelector("#confirmUpgradeBtn");
  elements.weekTabs = document.querySelector("#weekTabs");
  elements.selectedWeekTitle = document.querySelector("#selectedWeekTitle");
  elements.saveStatus = document.querySelector("#saveStatus");
  elements.saveWeekBtn = document.querySelector("#saveWeekBtn");
  elements.clearWeekBtn = document.querySelector("#clearWeekBtn");
  elements.mainAssignmentGrid = document.querySelector("#mainAssignmentGrid");
  elements.groupAssignmentGrid = document.querySelector("#groupAssignmentGrid");
  elements.statsList = document.querySelector("#statsList");
  elements.yearStatsList = document.querySelector("#yearStatsList");
  elements.futureList = document.querySelector("#futureList");
  elements.recordsList = document.querySelector("#recordsList");
  elements.sheetTitle = document.querySelector("#sheetTitle");
  elements.mainSheetTable = document.querySelector("#mainSheetTable");
  elements.groupSheetGrid = document.querySelector("#groupSheetGrid");
  elements.smallGroupWeekday = document.querySelector("#smallGroupWeekday");
  elements.smallGroupMonthSpan = document.querySelector("#smallGroupMonthSpan");
  elements.smallGroupIncludeMonthTheme = document.querySelector("#smallGroupIncludeMonthTheme");
  elements.smallGroupIncludeWeekTheme = document.querySelector("#smallGroupIncludeWeekTheme");
  elements.smallGroupIncludeSpeaker = document.querySelector("#smallGroupIncludeSpeaker");
  elements.smallGroupWorkerForm = document.querySelector("#smallGroupWorkerForm");
  elements.smallGroupWorkerName = document.querySelector("#smallGroupWorkerName");
  elements.smallGroupWorkerNickname = document.querySelector("#smallGroupWorkerNickname");
  elements.smallGroupWorkerLevel = document.querySelector("#smallGroupWorkerLevel");
  elements.smallGroupWorkerList = document.querySelector("#smallGroupWorkerList");
  elements.autoSmallGroupScheduleBtn = document.querySelector("#autoSmallGroupScheduleBtn");
  elements.smallGroupScheduleSummary = document.querySelector("#smallGroupScheduleSummary");
  elements.smallGroupScheduleTable = document.querySelector("#smallGroupScheduleTable");
  elements.smallGroupMeetingTabs = document.querySelector("#smallGroupMeetingTabs");
  elements.smallGroupMeetingEditor = document.querySelector("#smallGroupMeetingEditor");
  elements.exportSmallGroupImageBtn = document.querySelector("#exportSmallGroupImageBtn");
  elements.downloadSmallGroupImageBtn = document.querySelector("#downloadSmallGroupImageBtn");
  elements.smallGroupScheduleCanvas = document.querySelector("#smallGroupScheduleCanvas");
  elements.smallGroupImageDownload = document.querySelector("#smallGroupImageDownload");
  elements.smallGroupAnnouncementSettings = document.querySelector("#smallGroupAnnouncementSettings");
  elements.generateSmallGroupAnnouncementBtn = document.querySelector("#generateSmallGroupAnnouncementBtn");
  elements.copySmallGroupAnnouncementBtn = document.querySelector("#copySmallGroupAnnouncementBtn");
  elements.smallGroupAnnouncement = document.querySelector("#smallGroupAnnouncement");
  elements.toast = document.querySelector("#toast");
}

function bindEvents() {
  elements.monthInput.addEventListener("change", () => {
    selectedMonth = elements.monthInput.value || getMonthKey(new Date());
    selectedWeekId = pickInitialWeek(selectedMonth);
    latestNotices = [];
    render();
  });

  elements.exportJsonBtn.addEventListener("click", exportJsonBackup);
  elements.importJsonBtn.addEventListener("click", () => elements.importJsonFile.click());
  elements.importJsonFile.addEventListener("change", importJsonBackup);
  elements.manageModeBtn.addEventListener("click", () => setView("manage"));
  elements.sheetModeBtn.addEventListener("click", () => setView("sheet"));
  elements.modulePanel.addEventListener("click", changeModule);
  elements.volunteerLevel.addEventListener("change", renderFormOptions);
  elements.volunteerType.addEventListener("change", renderFormOptions);
  elements.volunteerSpecialType.addEventListener("change", renderFormOptions);
  elements.fixedDutyEnabled.addEventListener("change", renderFormOptions);
  elements.fixedGroupEnabled.addEventListener("change", renderFormOptions);
  elements.volunteerForm.addEventListener("submit", addVolunteer);
  elements.volunteerList.addEventListener("change", updateWorkerSettings);
  elements.volunteerList.addEventListener("click", moveVolunteer);
  elements.volunteerList.addEventListener("click", toggleWorkerAccordion);
  elements.volunteerList.addEventListener("click", deleteVolunteer);
  elements.workerSearch.addEventListener("input", updateRosterFilters);
  elements.levelFilter.addEventListener("change", updateRosterFilters);
  elements.typeFilter.addEventListener("change", updateRosterFilters);
  elements.allAvailableBtn.addEventListener("click", () => setMonthAvailability("all"));
  elements.clearAvailabilityBtn.addEventListener("click", () => setMonthAvailability("none"));
  elements.availabilityMatrix.addEventListener("click", toggleWorkerMonthAvailability);
  elements.availabilityMatrix.addEventListener("change", updateMonthAvailability);
  elements.leadPoolList.addEventListener("change", updateLeadPool);
  elements.annualUpgradeBtn.addEventListener("click", showUpgradeDialog);
  elements.restoreUpgradeBtn.addEventListener("click", restoreLatestUpgradeBackup);
  elements.cancelUpgradeBtn.addEventListener("click", hideUpgradeDialog);
  elements.confirmUpgradeBtn.addEventListener("click", performAnnualUpgrade);
  elements.upgradeDialog.addEventListener("click", closeUpgradeDialogFromBackdrop);
  elements.weekTabs.addEventListener("click", changeWeek);
  elements.recordsList.addEventListener("click", changeWeek);
  elements.mainAssignmentGrid.addEventListener("change", updateMainAssignment);
  elements.groupAssignmentGrid.addEventListener("change", updateGroupAssignment);
  elements.autoMonthBtn.addEventListener("click", autoScheduleMonth);
  elements.autoMonthAvailabilityBtn.addEventListener("click", autoScheduleMonth);
  elements.saveWeekBtn.addEventListener("click", saveCurrentWeekRecord);
  elements.clearWeekBtn.addEventListener("click", clearCurrentWeek);
  elements.smallGroupWeekday.addEventListener("change", updateSmallGroupSettings);
  elements.smallGroupMonthSpan.addEventListener("change", updateSmallGroupSettings);
  elements.smallGroupIncludeMonthTheme.addEventListener("change", updateSmallGroupSettings);
  elements.smallGroupIncludeWeekTheme.addEventListener("change", updateSmallGroupSettings);
  elements.smallGroupIncludeSpeaker.addEventListener("change", updateSmallGroupSettings);
  elements.smallGroupWorkerForm.addEventListener("submit", addSmallGroupWorker);
  elements.smallGroupWorkerList.addEventListener("change", updateSmallGroupWorkerSettings);
  elements.smallGroupWorkerList.addEventListener("input", updateSmallGroupWorkerSettings);
  elements.smallGroupWorkerList.addEventListener("click", toggleSmallGroupWorkerAccordion);
  elements.smallGroupWorkerList.addEventListener("click", deleteSmallGroupWorker);
  elements.autoSmallGroupScheduleBtn.addEventListener("click", autoGenerateSmallGroupSchedule);
  elements.smallGroupMeetingTabs.addEventListener("click", changeSmallGroupMeeting);
  elements.smallGroupMeetingEditor.addEventListener("input", updateSmallGroupMeeting);
  elements.smallGroupMeetingEditor.addEventListener("change", updateSmallGroupMeeting);
  elements.smallGroupAnnouncementSettings.addEventListener("input", updateSmallGroupMeeting);
  elements.smallGroupAnnouncementSettings.addEventListener("change", updateSmallGroupMeeting);
  elements.exportSmallGroupImageBtn.addEventListener("click", exportSmallGroupScheduleImage);
  elements.downloadSmallGroupImageBtn.addEventListener("click", downloadSmallGroupScheduleImage);
  elements.generateSmallGroupAnnouncementBtn.addEventListener("click", generateSmallGroupAnnouncement);
  elements.copySmallGroupAnnouncementBtn.addEventListener("click", copySmallGroupAnnouncement);
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY));
    if (saved) {
      return normalizeState(saved);
    }

    for (const key of LEGACY_STORE_KEYS) {
      const legacy = JSON.parse(localStorage.getItem(key));
      if (legacy) {
        return normalizeState(legacy);
      }
    }
  } catch {
    return createEmptyState();
  }

  return createEmptyState();
}

function createEmptyState() {
  return bindActiveServiceAliases({
    version: 10,
    ministries: createDefaultMinistries({}, []),
    activeMinistryId: ACTIVE_MINISTRY_ID,
    activeServiceId: ACTIVE_SERVICE_ID,
    futureFeatures: createFutureFeatureState(),
    upgradeBackups: [],
  });
}

function createFutureFeatureState() {
  return FUTURE_FEATURES.reduce((features, feature) => {
    features[feature.id] = { reserved: true, implemented: false, data: {} };
    return features;
  }, {});
}

function normalizeState(saved) {
  const legacyVolunteers = Array.isArray(saved.volunteers)
    ? saved.volunteers
        .filter((worker) => worker?.id && String(worker.name || "").trim())
        .map((worker) => normalizeWorker(worker))
    : [];
  const savedMinistries = saved.ministryModules || saved.ministries;

  return bindActiveServiceAliases({
    version: 10,
    ministries: normalizeMinistries(savedMinistries, saved.schedules, legacyVolunteers),
    activeMinistryId: saved.activeMinistryId || ACTIVE_MINISTRY_ID,
    activeServiceId: saved.activeServiceId || ACTIVE_SERVICE_ID,
    futureFeatures: normalizeFutureFeatures(saved.futureFeatures),
    upgradeBackups: normalizeUpgradeBackups(saved.upgradeBackups),
  });
}

function normalizeWorker(worker) {
  const level = getLevel(worker.level)?.id || "new";
  const fixedMode = worker.fixedMode || inferFixedMode(worker);
  const identity = normalizeWorkerIdentity(worker);
  const specialType = normalizeSpecialType(worker, identity);
  const type = getEffectiveWorkerType({ identity, specialType, type: worker.type });
  const rawBestDuties = Array.isArray(worker.bestDuties)
    ? worker.bestDuties
    : worker.bestDuty
      ? [worker.bestDuty]
      : [];
  const ruleProfile = { level, identity, specialType, type };
  const normalized = {
    id: String(worker.id),
    name: String(worker.name).trim(),
    nickname: String(worker.nickname || "").trim(),
    note: String(worker.note || ""),
    level,
    identity,
    specialType,
    type,
    mostSenior: ["senior", "leader"].includes(level) && Boolean(worker.mostSenior),
    bestDuties: unique(rawBestDuties).filter((dutyId) => getBestDuty(dutyId) && canDoWorker(ruleProfile, dutyId)),
    weakDuties: unique(Array.isArray(worker.weakDuties) ? worker.weakDuties : []).filter((dutyId) => getBestDuty(dutyId)),
    hostCandidate: Boolean(worker.hostCandidate) && canDoWorker(ruleProfile, "host"),
    reservedMainRole: type === "pastor" && getMainRole(worker.reservedMainRole) ? String(worker.reservedMainRole) : "",
    monthlyServiceCount: type === "pastor" ? clampNumber(worker.monthlyServiceCount ?? 1, 0, 5) : 0,
    fixedMainRole: fixedModeAllowsDuty(fixedMode) && getMainRole(worker.fixedMainRole) ? String(worker.fixedMainRole) : "",
    fixedGroup: fixedModeAllowsClass(fixedMode) && getGroup(worker.fixedGroup) ? String(worker.fixedGroup) : "",
    leadGroups: unique(Array.isArray(worker.leadGroups) ? worker.leadGroups : []).filter((groupId) => getGroup(groupId)),
    supportGroups: unique(Array.isArray(worker.supportGroups) ? worker.supportGroups : []).filter((groupId) => getGroup(groupId)),
    createdAt: worker.createdAt || new Date().toISOString(),
  };

  if (!canDoWorker(normalized, "groupLead")) {
    normalized.leadGroups = [];
  }
  if (!canDoWorker(normalized, "groupSupport")) {
    normalized.supportGroups = [];
  }
  if (normalized.fixedGroup) {
    normalized.leadGroups = normalized.leadGroups.filter((groupId) => groupId === normalized.fixedGroup);
    normalized.supportGroups = normalized.supportGroups.filter((groupId) => groupId === normalized.fixedGroup);
  }
  if (normalized.fixedMainRole && !canDoWorker(normalized, normalized.fixedMainRole)) {
    normalized.fixedMainRole = "";
  }
  if (normalized.reservedMainRole && !canDoWorker(normalized, normalized.reservedMainRole)) {
    normalized.reservedMainRole = "";
  }
  return normalized;
}

function normalizeFutureFeatures(savedFeatures = {}) {
  return FUTURE_FEATURES.reduce((features, feature) => {
    features[feature.id] = {
      reserved: true,
      implemented: false,
      data: savedFeatures?.[feature.id]?.data || {},
    };
    return features;
  }, {});
}

function normalizeToddlerWorkers(workers = []) {
  return Array.isArray(workers)
    ? workers
        .filter((worker) => worker?.id && String(worker.name || "").trim())
        .map((worker) => normalizeWorker(worker))
    : [];
}

function dedupeWorkers(workers = []) {
  const seen = new Set();
  return workers.filter((worker) => {
    if (!worker?.id || seen.has(worker.id)) {
      return false;
    }
    seen.add(worker.id);
    return true;
  });
}

function isFullTimeWorker(worker) {
  return normalizeWorkerIdentity(worker) === "fullTime";
}

function normalizeSmallGroupModuleWorkers(workers = []) {
  return Array.isArray(workers)
    ? workers
        .filter((worker) => worker?.id && String(worker.name || "").trim())
        .map((worker) => normalizeSmallGroupWorker(worker))
    : [];
}

function normalizeSmallGroupWorker(worker = {}) {
  return {
    id: String(worker.id),
    name: String(worker.name || "").trim(),
    nickname: String(worker.nickname || "").trim(),
    level: SMALL_GROUP_LEVELS.some((level) => level.id === worker.level) ? worker.level : "regular",
    bestDuties: unique(Array.isArray(worker.bestDuties) ? worker.bestDuties : []).filter((dutyId) => getSmallGroupDuty(dutyId)),
    weakDuties: unique(Array.isArray(worker.weakDuties) ? worker.weakDuties : []).filter((dutyId) => getSmallGroupDuty(dutyId)),
    note: String(worker.note || ""),
    createdAt: worker.createdAt || new Date().toISOString(),
  };
}

function migrateSmallGroupWorkersFromLegacySettings(legacyVolunteers = [], legacySettings = {}) {
  if (!legacySettings || typeof legacySettings !== "object") {
    return [];
  }

  return Object.entries(legacySettings)
    .filter(([, setting]) => setting?.enabled)
    .map(([workerId, setting]) => {
      const legacyWorker = legacyVolunteers.find((worker) => worker.id === workerId);
      if (!legacyWorker) return null;
      return normalizeSmallGroupWorker({
        id: workerId,
        name: legacyWorker.name,
        nickname: legacyWorker.nickname,
        level: setting.level,
        bestDuties: setting.bestDuties,
        weakDuties: setting.weakDuties,
        note: setting.note || legacyWorker.note,
        createdAt: legacyWorker.createdAt,
      });
    })
    .filter(Boolean);
}

function normalizeUpgradeBackups(backups = []) {
  return Array.isArray(backups)
    ? backups
        .filter((backup) => backup?.name && backup?.storageKey)
        .map((backup) => ({
          name: String(backup.name),
          storageKey: String(backup.storageKey),
          createdAt: backup.createdAt || new Date().toISOString(),
        }))
        .slice(0, 10)
    : [];
}

function normalizeSmallGroupSettings(settings = {}) {
  return {
    startMonth: /^\d{4}-\d{2}$/.test(settings.startMonth || "") ? settings.startMonth : getMonthKey(new Date()),
    monthSpan: [1, 2, 3].includes(Number(settings.monthSpan)) ? Number(settings.monthSpan) : 1,
    meetingWeekday: WEEKDAY_OPTIONS.some((item) => item.id === Number(settings.meetingWeekday)) ? Number(settings.meetingWeekday) : 6,
    includeFields: {
      monthTheme: settings.includeFields?.monthTheme ?? true,
      weekTheme: settings.includeFields?.weekTheme ?? true,
      speaker: settings.includeFields?.speaker ?? true,
    },
  };
}

function normalizeSmallGroupMeetings(meetings = {}) {
  if (!meetings || typeof meetings !== "object") {
    return {};
  }
  return Object.entries(meetings).reduce((normalized, [meetingId, meeting]) => {
    if (!meetingId) return normalized;
    normalized[meetingId] = normalizeSmallGroupMeeting(meetingId, meeting);
    return normalized;
  }, {});
}

function normalizeSmallGroupMeeting(meetingId, meeting = {}) {
  const date = /^\d{4}-\d{2}-\d{2}$/.test(meeting.date || "") ? meeting.date : meetingId;
  return {
    id: meetingId,
    date,
    startTime: meeting.startTime || "19:45",
    endTime: meeting.endTime || "21:30",
    location: String(meeting.location || ""),
    monthTheme: String(meeting.monthTheme || ""),
    weekTheme: String(meeting.weekTheme || ""),
    speaker: String(meeting.speaker || ""),
    assignments: SMALL_GROUP_DUTIES.reduce((assignments, duty) => {
      assignments[duty.id] = meeting.assignments?.[duty.id] ? String(meeting.assignments[duty.id]) : "";
      return assignments;
    }, {}),
  };
}

function createSmallGroupAnnouncementTemplate() {
  return {
    reserved: true,
    editable: false,
    opening: "哈利路亞!!\n\n邀請大家預備心，帶著最喜樂的心情一起參加小組囉~",
    closing: "如果家人有需要代禱的都可以貼上來一起禱告喔~",
  };
}

function createDefaultMinistries(legacySchedules = {}, legacyVolunteers = []) {
  return {
    [ACTIVE_MINISTRY_ID]: createToddlerMinistryState(legacySchedules, legacyVolunteers),
    [SMALL_GROUP_MINISTRY_ID]: createSmallGroupMinistryState(),
  };
}

function createToddlerMinistryState(legacySchedules = {}, workers = []) {
  const normalizedWorkers = normalizeToddlerWorkers(workers);
  const fullTimeWorkers = normalizedWorkers.filter(isFullTimeWorker);
  const firstServiceWorkers = normalizedWorkers.filter((worker) => !isFullTimeWorker(worker));
  return {
    id: ACTIVE_MINISTRY_ID,
    label: "幼兒主日學",
    implemented: true,
    workers: [],
    fullTimeWorkers,
    serviceOrder: TODDLER_SERVICES.map((service) => service.id),
    services: TODDLER_SERVICES.reduce((services, service) => {
      services[service.id] = createToddlerServiceState(
        service,
        service.id === ACTIVE_SERVICE_ID ? legacySchedules : {},
        service.id === ACTIVE_SERVICE_ID ? firstServiceWorkers : [],
      );
      return services;
    }, {}),
    rules: createToddlerRulesState(),
  };
}

function createToddlerServiceState(service, legacySchedules = {}, workers = []) {
  return {
    id: service.id,
    label: service.label,
    timeSlot: service.timeSlot,
    implemented: service.implemented,
    workers: normalizeToddlerWorkers(workers).filter((worker) => !isFullTimeWorker(worker)),
    schedules: normalizeSchedules(legacySchedules || {}),
    rules: createToddlerRulesState(),
    futureFeatures: createFutureFeatureState(),
  };
}

function createToddlerRulesState() {
  return {
    levelSystem: "toddlerSundaySchool",
    roleSet: "toddlerSundaySchool",
    groupSet: "toddlerSundaySchool",
    scheduler: "toddlerSundaySchoolFirstService",
  };
}

function createSmallGroupMinistryState() {
  return {
    id: SMALL_GROUP_MINISTRY_ID,
    label: "小組服事表",
    implemented: true,
    workers: [],
    serviceOrder: [SMALL_GROUP_SERVICE_ID],
    services: {
      [SMALL_GROUP_SERVICE_ID]: createSmallGroupServiceState(),
    },
    rules: {
      levelSystem: "smallGroup",
      roleSet: "smallGroup",
      future: ["多個小組", "小組聚會歷史紀錄", "代禱事項紀錄", "出席人數紀錄", "奉獻／點心紀錄", "小組公告模板自訂"],
    },
  };
}

function createSmallGroupServiceState(saved = {}) {
  return {
    id: SMALL_GROUP_SERVICE_ID,
    label: "小組服事表",
    timeSlot: "small-group",
    implemented: true,
    settings: normalizeSmallGroupSettings(saved.settings),
    meetings: normalizeSmallGroupMeetings(saved.meetings),
    scheduleNotices: Array.isArray(saved.scheduleNotices) ? saved.scheduleNotices.map((notice) => String(notice)).slice(0, 80) : [],
    announcementText: String(saved.announcementText || ""),
    announcementTemplate: saved.announcementTemplate || createSmallGroupAnnouncementTemplate(),
    futureFeatures: {
      multipleGroups: { reserved: true, implemented: false, data: {} },
      meetingHistory: { reserved: true, implemented: false, data: {} },
      prayerRequests: { reserved: true, implemented: false, data: {} },
      attendance: { reserved: true, implemented: false, data: {} },
      offeringSnack: { reserved: true, implemented: false, data: {} },
      customAnnouncementTemplates: { reserved: true, implemented: false, data: {} },
    },
  };
}

function normalizeMinistries(savedMinistries, legacySchedules = {}, legacyVolunteers = []) {
  const ministries = createDefaultMinistries(legacySchedules, legacyVolunteers);
  if (!savedMinistries || typeof savedMinistries !== "object") {
    return ministries;
  }

  Object.entries(savedMinistries).forEach(([ministryId, ministry]) => {
    if (ministryId === SMALL_GROUP_MINISTRY_ID) {
      const base = createSmallGroupMinistryState();
      const savedService = ministry.services?.[SMALL_GROUP_SERVICE_ID] || ministry.service || {};
      const migratedWorkers = Array.isArray(ministry.workers)
        ? normalizeSmallGroupModuleWorkers(ministry.workers)
        : migrateSmallGroupWorkersFromLegacySettings(legacyVolunteers, savedService.workers);
      ministries[ministryId] = {
        ...base,
        ...ministry,
        workers: migratedWorkers,
        services: {
          [SMALL_GROUP_SERVICE_ID]: createSmallGroupServiceState(savedService),
        },
        serviceOrder: [SMALL_GROUP_SERVICE_ID],
        rules: { ...base.rules, ...(ministry.rules || {}) },
      };
      return;
    }

    if (ministryId !== ACTIVE_MINISTRY_ID) {
      ministries[ministryId] = ministry;
      return;
    }

    const base = createToddlerMinistryState();
    const legacyMinistryWorkers = Array.isArray(ministry.workers)
      ? normalizeToddlerWorkers(ministry.workers)
      : normalizeToddlerWorkers(legacyVolunteers);
    const savedFullTimeWorkers = normalizeToddlerWorkers(ministry.fullTimeWorkers || []).filter(isFullTimeWorker);
    const fullTimeWorkers = dedupeWorkers([
      ...savedFullTimeWorkers,
      ...legacyMinistryWorkers.filter(isFullTimeWorker),
      ...Object.values(ministry.services || {}).flatMap((service) => normalizeToddlerWorkers(service?.workers || []).filter(isFullTimeWorker)),
    ]);
    const services = { ...base.services };
    Object.entries(ministry.services || {}).forEach(([serviceId, service]) => {
      const template = TODDLER_SERVICES.find((item) => item.id === serviceId) || { id: serviceId, label: service.label || serviceId, timeSlot: service.timeSlot || serviceId, implemented: Boolean(service.implemented) };
      const savedServiceWorkers = normalizeToddlerWorkers(service.workers || []);
      const migratedServiceWorkers = savedServiceWorkers.length
        ? savedServiceWorkers
        : serviceId === ACTIVE_SERVICE_ID
          ? legacyMinistryWorkers.filter((worker) => !isFullTimeWorker(worker))
          : [];
      services[serviceId] = {
        ...createToddlerServiceState(template),
        ...service,
        implemented: template.implemented,
        workers: dedupeWorkers(migratedServiceWorkers).filter((worker) => !isFullTimeWorker(worker)),
        schedules: normalizeSchedules(service.schedules || {}),
        rules: { ...createToddlerRulesState(), ...(service.rules || {}) },
        futureFeatures: normalizeFutureFeatures(service.futureFeatures),
      };
    });
    if (legacyMinistryWorkers.length && !Array.isArray(ministry.services?.[ACTIVE_SERVICE_ID]?.workers)) {
      services[ACTIVE_SERVICE_ID].workers = legacyMinistryWorkers.filter((worker) => !isFullTimeWorker(worker));
    }

    ministries[ministryId] = {
      ...base,
      ...ministry,
      workers: [],
      fullTimeWorkers,
      services,
      serviceOrder: Array.isArray(ministry.serviceOrder) ? ministry.serviceOrder : base.serviceOrder,
      rules: { ...createToddlerRulesState(), ...(ministry.rules || {}) },
    };
  });

  return ministries;
}

function bindActiveServiceAliases(appState) {
  syncActiveWorkerAlias(appState);
  const ministry = appState.ministries?.[appState.activeMinistryId] || appState.ministries?.[ACTIVE_MINISTRY_ID];
  const fallbackServiceId = Array.isArray(ministry?.serviceOrder) ? ministry.serviceOrder[0] : ACTIVE_SERVICE_ID;
  const service = ministry?.services?.[appState.activeServiceId] || ministry?.services?.[fallbackServiceId] || ministry?.services?.[ACTIVE_SERVICE_ID];
  appState.activeMinistryId = ministry?.id || ACTIVE_MINISTRY_ID;
  appState.activeServiceId = service?.id || fallbackServiceId || ACTIVE_SERVICE_ID;
  appState.volunteers = getActiveWorkerAliasList(appState, ministry, service);
  appState.schedules = service?.schedules || {};
  appState.futureFeatures = service?.futureFeatures || appState.futureFeatures || createFutureFeatureState();
  appState.ministryModules = appState.ministries;
  activeWorkerAlias = { ministryId: appState.activeMinistryId, serviceId: appState.activeServiceId };
  return appState;
}

function getActiveWorkerAliasList(appState, ministry, service) {
  if (appState.activeMinistryId === SMALL_GROUP_MINISTRY_ID) {
    if (!Array.isArray(ministry.workers)) ministry.workers = [];
    return ministry.workers;
  }

  ensureToddlerWorkerStores(ministry);
  if (!Array.isArray(service.workers)) service.workers = [];
  return [...service.workers, ...ministry.fullTimeWorkers];
}

function syncActiveWorkerAlias(appState = state) {
  if (!activeWorkerAlias || !Array.isArray(appState.volunteers)) {
    return;
  }

  const ministry = appState.ministries?.[activeWorkerAlias.ministryId];
  const service = ministry?.services?.[activeWorkerAlias.serviceId];
  if (!ministry || !service) {
    return;
  }

  if (activeWorkerAlias.ministryId === SMALL_GROUP_MINISTRY_ID) {
    ministry.workers = normalizeSmallGroupModuleWorkers(appState.volunteers);
    return;
  }

  ensureToddlerWorkerStores(ministry);
  const normalizedWorkers = dedupeWorkers(normalizeToddlerWorkers(appState.volunteers));
  ministry.fullTimeWorkers = normalizedWorkers.filter(isFullTimeWorker);
  service.workers = normalizedWorkers.filter((worker) => !isFullTimeWorker(worker));
  ministry.workers = [];
}

function ensureToddlerWorkerStores(ministry) {
  if (!ministry || ministry.id !== ACTIVE_MINISTRY_ID) {
    return;
  }

  ministry.fullTimeWorkers = dedupeWorkers(normalizeToddlerWorkers(ministry.fullTimeWorkers || [])).filter(isFullTimeWorker);
  ministry.workers = [];
  Object.values(ministry.services || {}).forEach((service) => {
    service.workers = dedupeWorkers(normalizeToddlerWorkers(service.workers || [])).filter((worker) => !isFullTimeWorker(worker));
  });
}

function getActiveMinistryState() {
  return state.ministries[state.activeMinistryId];
}

function getActiveServiceState() {
  return getActiveMinistryState().services[state.activeServiceId];
}

function syncActiveServiceState() {
  syncActiveWorkerAlias(state);
  const ministry = getActiveMinistryState();
  const service = getActiveServiceState();
  if (state.activeMinistryId === SMALL_GROUP_MINISTRY_ID) {
    ministry.workers = Array.isArray(state.volunteers) ? state.volunteers : [];
  }
  service.schedules = state.schedules;
  service.futureFeatures = state.futureFeatures;
  state.ministryModules = state.ministries;
}

function normalizeSchedules(schedules) {
  return Object.entries(schedules).reduce((normalized, [weekId, schedule]) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(weekId)) {
      return normalized;
    }

    normalized[weekId] = {
      available: unique(Array.isArray(schedule?.available) ? schedule.available : []),
      assignments: normalizeAssignments(schedule?.assignments),
      savedAt: schedule?.savedAt || null,
    };
    return normalized;
  }, {});
}

function normalizeAssignments(assignments = {}) {
  const main = createEmptyMainAssignments();
  const mainSource = assignments.main && typeof assignments.main === "object" ? assignments.main : assignments;

  MAIN_ROLES.forEach((role) => {
    main[role.id] = normalizeMainAssignmentValue(role.id, mainSource?.[role.id]);
  });

  const groups = {};
  if (assignments.groups && typeof assignments.groups === "object") {
    Object.entries(assignments.groups).forEach(([workerId, assignment]) => {
      if (getGroup(assignment?.classId) && ["lead", "support"].includes(assignment?.role)) {
        groups[String(workerId)] = {
          classId: assignment.classId,
          role: assignment.role,
        };
      }
    });
  }

  return { main, groups };
}

function saveState() {
  syncActiveServiceState();
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function exportJsonBackup() {
  syncActiveServiceState();
  const payload = {
    exportedAt: new Date().toISOString(),
    app: "Church Ministry Manager",
    storeKey: STORE_KEY,
    data: state,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `church-ministry-manager-backup-${formatBackupTimestamp(new Date())}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("JSON 備份已匯出");
}

function importJsonBackup(event) {
  const file = event.target.files?.[0];
  event.target.value = "";
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result || "{}"));
      const importedState = parsed.data && typeof parsed.data === "object" ? parsed.data : parsed;
      const normalized = normalizeState(importedState);
      const ok = window.confirm("匯入 JSON 備份會更新目前瀏覽器中的教會服事管理系統資料。系統會先建立匯入前備份。是否繼續？");
      if (!ok) return;

      createManualLocalBackup("before-json-import");
      state = normalized;
      bindActiveServiceAliases(state);
      selectedMonth = getMonthKey(new Date());
      selectedWeekId = pickInitialWeek(selectedMonth);
      selectedSmallGroupMeetingId = "";
      latestNotices = ["JSON 備份已匯入"];
      render();
      showToast("JSON 備份已匯入");
    } catch {
      showToast("JSON 檔案格式無法匯入");
    }
  };
  reader.readAsText(file, "utf-8");
}

function createManualLocalBackup(prefix) {
  syncActiveServiceState();
  const name = `${prefix}-${formatBackupTimestamp(new Date())}`;
  localStorage.setItem(`${UPGRADE_BACKUP_PREFIX}${name}`, JSON.stringify(state));
}

function render() {
  bindActiveServiceAliases(state);
  if (isSmallGroupModuleActive()) {
    renderSmallGroupApp();
    return;
  }

  const weeks = getSundaysOfMonth(selectedMonth);
  if (!weeks.includes(selectedWeekId)) {
    selectedWeekId = weeks[0] || "";
  }

  weeks.forEach((weekId) => ensureSchedule(weekId));
  elements.monthInput.value = selectedMonth;
  renderView();
  renderModulePanel();
  renderFormOptions();
  renderRosterFilters();
  renderVolunteerList();
  renderAvailabilityMatrix();
  renderLeadPools();
  renderWeekTabs(weeks);
  renderAssignments();
  renderStats();
  renderYearStats();
  renderFutureList();
  renderRecords(weeks);
  renderSummary();
  renderSheetView();
  saveState();
}

function renderSmallGroupApp() {
  elements.monthInput.value = selectedMonth;
  renderView();
  renderModulePanel();
  renderSmallGroupView();
  saveState();
}

function setView(view) {
  currentView = view;
  renderView();
}

function scrollToSheetView() {
  window.requestAnimationFrame(() => {
    elements.sheetView?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function changeModule(event) {
  const serviceChip = event.target.closest("[data-service-id]");
  if (serviceChip && !isSmallGroupModuleActive()) {
    const service = TODDLER_SERVICES.find((item) => item.id === serviceChip.dataset.serviceId);
    if (!service?.implemented) return;
    state.activeServiceId = service.id;
    currentView = "manage";
    expandedWorkerId = "";
    latestNotices = [];
    render();
    return;
  }

  const chip = event.target.closest("[data-module-id]");
  if (!chip) return;
  const module = MINISTRY_MODULES.find((item) => item.id === chip.dataset.moduleId);
  if (!module?.implemented) return;
  state.activeMinistryId = module.id;
  state.activeServiceId = module.id === SMALL_GROUP_MINISTRY_ID ? SMALL_GROUP_SERVICE_ID : ACTIVE_SERVICE_ID;
  currentView = "manage";
  selectedSmallGroupMeetingId = "";
  latestNotices = [];
  render();
}

function renderView() {
  const isSmallGroup = isSmallGroupModuleActive();
  const isSheet = currentView === "sheet";
  elements.managementView.classList.toggle("hidden", isSheet || isSmallGroup);
  elements.sheetView.classList.toggle("hidden", !isSheet || isSmallGroup);
  elements.smallGroupView.classList.toggle("hidden", !isSmallGroup);
  elements.summaryPanel.classList.toggle("hidden", isSmallGroup);
  elements.modeSwitch.classList.toggle("hidden", isSmallGroup);
  elements.manageModeBtn.classList.toggle("active", !isSheet);
  elements.sheetModeBtn.classList.toggle("active", isSheet);
}

function isSmallGroupModuleActive() {
  return state.activeMinistryId === SMALL_GROUP_MINISTRY_ID;
}

function renderModulePanel() {
  const ministry = getActiveMinistryState();
  const service = getActiveServiceState();
  const ministryChips = MINISTRY_MODULES.map((module) => `
    <span class="module-chip ${module.id === ministry.id ? "active" : ""} ${module.implemented ? "" : "reserved"}" data-module-id="${module.id}">
      ${module.label}${module.implemented ? "" : "（預留）"}
    </span>
  `).join("");
  const serviceChips = isSmallGroupModuleActive()
    ? `<span class="module-chip active">小組服事表</span>`
    : TODDLER_SERVICES.map((item) => `
      <span class="module-chip ${item.id === service.id ? "active" : ""} ${item.implemented ? "" : "reserved"}" data-service-id="${item.id}">
        ${item.label}${item.implemented ? "" : "（預留）"}
      </span>
    `).join("");
  const moduleNote = isSmallGroupModuleActive()
    ? "小組服事表使用本模組同工資料庫，聚會資訊與公告資料獨立儲存。"
    : "幼兒主日學三個堂次獨立管理同工；全職同工可跨堂共用。";
  const serviceTitle = isSmallGroupModuleActive() ? "小組服事表" : "幼兒主日學堂次";

  elements.modulePanel.innerHTML = `
    <div class="module-head">
      <div>
        <p class="eyebrow">Current Module</p>
        <h2>${ministry.label}／${service.label}</h2>
        <p class="module-note">${moduleNote}</p>
      </div>
      <span class="pill">本模組同工資料庫</span>
    </div>
    <div class="module-grid">
      <div>
        <h3>事工模組</h3>
        <div class="module-chip-list">${ministryChips}</div>
      </div>
      <div>
        <h3>${serviceTitle}</h3>
        <div class="module-chip-list">${serviceChips}</div>
      </div>
    </div>
  `;
}

function renderFormOptions() {
  const level = getLevel(elements.volunteerLevel.value)?.id || "new";
  const identity = getWorkerIdentity(elements.volunteerType.value)?.id || "regular";
  const specialType = getSpecialType(elements.volunteerSpecialType.value)?.id || "pastor";
  const type = identity === "special" ? specialType : identity;
  const ruleProfile = { level, identity, specialType, type };
  const fixedRole = elements.fixedDutyEnabled.checked ? elements.volunteerFixedRole.value : "";
  const fixedGroup = elements.fixedGroupEnabled.checked ? elements.volunteerFixedGroup.value : "";
  const reservedRole = elements.volunteerReservedRole.value;

  elements.volunteerLevel.innerHTML = LEVELS.map((item) => `<option value="${item.id}">${item.label}</option>`).join("");
  elements.volunteerType.innerHTML = renderIdentityOptions(identity);
  elements.volunteerSpecialType.innerHTML = renderSpecialTypeOptions(specialType);
  elements.volunteerLevel.value = level;
  elements.volunteerType.value = identity;
  elements.volunteerSpecialType.value = specialType;
  elements.specialTypeField.classList.toggle("hidden", identity !== "special");
  elements.volunteerBestDuties.innerHTML = renderBestDutyCheckboxes(getCheckedBestDuties(elements.volunteerBestDuties), ruleProfile);
  elements.volunteerWeakDuties.innerHTML = renderWeakDutyCheckboxes(getCheckedDuties(elements.volunteerWeakDuties));
  elements.volunteerMostSenior.checked = ["senior", "leader"].includes(level) && elements.volunteerMostSenior.checked;
  elements.volunteerMostSenior.disabled = !["senior", "leader"].includes(level);
  elements.volunteerHostCandidate.checked = canDoWorker(ruleProfile, "host") && elements.volunteerHostCandidate.checked;
  elements.volunteerHostCandidate.disabled = !canDoWorker(ruleProfile, "host");
  elements.pastorReserveSettings.classList.toggle("hidden", type !== "pastor");
  elements.volunteerReservedRole.innerHTML = renderMainRoleOptions(canDoWorker(ruleProfile, reservedRole) ? reservedRole : "", ruleProfile);
  elements.volunteerReservedRole.disabled = type !== "pastor";
  elements.volunteerMonthlyCount.disabled = type !== "pastor";
  elements.volunteerFixedRole.innerHTML = renderMainRoleOptions(canDoWorker(ruleProfile, fixedRole) ? fixedRole : "", ruleProfile);
  elements.volunteerFixedGroup.innerHTML = renderGroupOptions(fixedGroup);
  elements.volunteerFixedRole.disabled = !elements.fixedDutyEnabled.checked;
  elements.volunteerFixedGroup.disabled = !elements.fixedGroupEnabled.checked;
  renderAllowedPreview();
}

function renderAllowedPreview() {
  const worker = {
    level: getLevel(elements.volunteerLevel.value)?.id || "new",
    identity: getWorkerIdentity(elements.volunteerType.value)?.id || "regular",
    specialType: getSpecialType(elements.volunteerSpecialType.value)?.id || "pastor",
  };
  worker.type = getEffectiveWorkerType(worker);
  elements.allowedPreview.innerHTML = getDutyLabelsForWorker(worker)
    .map((label) => `<span class="tag">${escapeHtml(label)}</span>`)
    .join("");
}

function renderRosterFilters() {
  elements.workerSearch.value = rosterSearchTerm;
  elements.levelFilter.innerHTML = [
    `<option value="all">全部等級</option>`,
    ...LEVELS.map((level) => `<option value="${level.id}" ${level.id === rosterLevelFilter ? "selected" : ""}>${level.label}</option>`),
  ].join("");
  elements.typeFilter.innerHTML = [
    `<option value="all">全部身份</option>`,
    ...WORKER_IDENTITIES.map((identity) => `<option value="${identity.id}" ${identity.id === rosterTypeFilter ? "selected" : ""}>${identity.label}</option>`),
  ].join("");
}

function getFilteredWorkers() {
  const keyword = rosterSearchTerm.trim().toLowerCase();
  return state.volunteers.filter((worker) => {
    const matchesName = !keyword || worker.name.toLowerCase().includes(keyword) || (worker.nickname || "").toLowerCase().includes(keyword);
    const matchesLevel = rosterLevelFilter === "all" || worker.level === rosterLevelFilter;
    const matchesType = rosterTypeFilter === "all" || worker.identity === rosterTypeFilter;
    return matchesName && matchesLevel && matchesType;
  });
}

function getWorkerSummary(worker) {
  const pieces = [getLevel(worker.level).label, getWorkerIdentity(worker.identity).label];
  const effectiveType = getEffectiveWorkerType(worker);
  const leadGroups = worker.leadGroups.map((groupId) => getGroup(groupId)?.label).filter(Boolean);
  const supportGroups = worker.supportGroups.map((groupId) => getGroup(groupId)?.label).filter(Boolean);

  if (worker.identity === "special" && worker.specialType) {
    pieces.push(`特殊類型：${getSpecialType(worker.specialType)?.label || worker.specialType}`);
  }

  if (worker.fixedMainRole) {
    pieces.push(`固定職務：${getMainRole(worker.fixedMainRole).label}`);
  }
  if (worker.fixedGroup) {
    pieces.push(`固定班級：${getGroup(worker.fixedGroup).label}`);
  }
  if (worker.bestDuties.length) {
    pieces.push(`最適合：${getBestDutyLabels(worker).join("、")}`);
  }
  if (String(worker.note || "").trim()) {
    pieces.push("有備註");
  }
  if (worker.hostCandidate) {
    pieces.push("報告司會候選人");
  }
  if (worker.mostSenior) {
    pieces.push("最資深同工");
  }
  if (effectiveType === "pastor" && worker.reservedMainRole) {
    pieces.push(`預留：${getMainRole(worker.reservedMainRole).label} ${worker.monthlyServiceCount} 次`);
  }
  if (leadGroups.length) {
    pieces.push(`主責群：${leadGroups.join("、")}`);
  }
  if (supportGroups.length) {
    pieces.push(`配搭群：${supportGroups.join("、")}`);
  }

  return pieces.join("｜");
}

function renderVolunteerList() {
  const filteredWorkers = getFilteredWorkers();
  elements.workerCount.textContent = `${filteredWorkers.length}/${state.volunteers.length} 位`;

  if (state.volunteers.length === 0) {
    elements.volunteerList.innerHTML = `<div class="empty-state">尚無同工</div>`;
    return;
  }

  if (filteredWorkers.length === 0) {
    elements.volunteerList.innerHTML = `<div class="empty-state">沒有符合篩選的同工</div>`;
    return;
  }

  elements.volunteerList.innerHTML = filteredWorkers
    .map((worker) => {
      const isOpen = expandedWorkerId === worker.id;
      const workerIndex = state.volunteers.findIndex((item) => item.id === worker.id);
      const leadGroupOptions = renderWorkerGroupCheckboxes(worker, "lead");
      const supportGroupOptions = renderWorkerGroupCheckboxes(worker, "support");
      const effectiveType = getEffectiveWorkerType(worker);
      const specialTypeControl = worker.identity === "special"
        ? `
          <label>
            <span>特殊類型</span>
            <select data-worker-special-type="${escapeAttribute(worker.id)}">${renderSpecialTypeOptions(worker.specialType)}</select>
          </label>
        `
        : "";
      const hostCandidateControl = canDoWorker(worker, "host")
        ? `
          <label class="toggle-field span-all">
            <input type="checkbox" data-worker-host-candidate="${escapeAttribute(worker.id)}" ${worker.hostCandidate ? "checked" : ""} />
            <span>報告司會候選人</span>
          </label>
        `
        : "";
      const mostSeniorControl = ["senior", "leader"].includes(worker.level)
        ? `
          <label class="toggle-field span-all">
            <input type="checkbox" data-worker-most-senior="${escapeAttribute(worker.id)}" ${worker.mostSenior ? "checked" : ""} />
            <span>最資深同工</span>
          </label>
        `
        : "";
      const pastorReserveControl = effectiveType === "pastor"
        ? `
          <fieldset class="lead-group-field span-all">
            <legend>區牧預留設定</legend>
            <label>
              <span>預留職務</span>
              <select data-worker-reserved-role="${escapeAttribute(worker.id)}">${renderMainRoleOptions(worker.reservedMainRole, worker)}</select>
            </label>
            <label>
              <span>每月服事次數</span>
              <input type="number" min="0" max="5" value="${escapeAttribute(worker.monthlyServiceCount)}" data-worker-monthly-count="${escapeAttribute(worker.id)}" />
            </label>
          </fieldset>
        `
        : "";

      return `
        <article class="worker-row accordion-worker ${isOpen ? "open" : ""}">
          <div class="worker-summary-line">
            <button class="worker-summary" type="button" data-toggle-worker="${escapeAttribute(worker.id)}" aria-expanded="${isOpen}">
              <span class="accordion-arrow">${isOpen ? "▼" : "▶"}</span>
              <span class="worker-name">${escapeHtml(worker.name)}</span>
              <span class="worker-summary-text">${escapeHtml(getWorkerSummary(worker))}</span>
            </button>
            <div class="worker-order-actions" aria-label="調整同工順序">
              <button class="icon-btn" type="button" title="上移" data-move-worker="${escapeAttribute(worker.id)}" data-move-direction="up" ${workerIndex <= 0 ? "disabled" : ""}>↑</button>
              <button class="icon-btn" type="button" title="下移" data-move-worker="${escapeAttribute(worker.id)}" data-move-direction="down" ${workerIndex >= state.volunteers.length - 1 ? "disabled" : ""}>↓</button>
            </div>
          </div>
          <div class="worker-detail ${isOpen ? "" : "hidden"}">
            <div class="worker-controls">
              <label class="span-all">
                <span>暱稱</span>
                <input type="text" maxlength="20" placeholder="可留空" value="${escapeAttribute(worker.nickname || "")}" data-worker-nickname="${escapeAttribute(worker.id)}" />
              </label>
              <label class="span-all">
                <span>備註</span>
                <textarea rows="3" placeholder="可留空" data-worker-note="${escapeAttribute(worker.id)}">${escapeHtml(worker.note || "")}</textarea>
              </label>
              <label>
                <span>等級</span>
                <select data-worker-level="${escapeAttribute(worker.id)}">${renderLevelOptions(worker.level)}</select>
              </label>
              <label>
                <span>同工身份</span>
                <select data-worker-identity="${escapeAttribute(worker.id)}">${renderIdentityOptions(worker.identity)}</select>
              </label>
              ${specialTypeControl}
              ${hostCandidateControl}
              ${mostSeniorControl}
              ${pastorReserveControl}
              <label class="span-all">
                <span>最適合事工</span>
                <div class="best-duty-options compact-options">${renderBestDutyCheckboxes(worker.bestDuties, worker, worker.id)}</div>
              </label>
              <label class="span-all">
                <span>不擅長事工</span>
                <div class="best-duty-options compact-options weak-duty-options">${renderWeakDutyCheckboxes(worker.weakDuties, worker.id)}</div>
              </label>
              <label class="toggle-field span-all">
                <input type="checkbox" data-worker-fixed-duty-enabled="${escapeAttribute(worker.id)}" ${worker.fixedMainRole ? "checked" : ""} />
                <span>固定職務：啟用</span>
              </label>
              <label>
                <span>固定職務</span>
                <select data-worker-fixed-role="${escapeAttribute(worker.id)}" ${worker.fixedMainRole ? "" : "disabled"}>
                  ${renderMainRoleOptions(worker.fixedMainRole, worker)}
                </select>
              </label>
              <label class="toggle-field span-all">
                <input type="checkbox" data-worker-fixed-group-enabled="${escapeAttribute(worker.id)}" ${worker.fixedGroup ? "checked" : ""} />
                <span>固定班級：啟用</span>
              </label>
              <label>
                <span>固定班級</span>
                <select data-worker-fixed-group="${escapeAttribute(worker.id)}" ${worker.fixedGroup ? "" : "disabled"}>
                  ${renderGroupOptions(worker.fixedGroup)}
                </select>
              </label>
              <fieldset class="lead-group-field span-all">
                <legend>主責群設定</legend>
                <div class="worker-lead-groups">${leadGroupOptions}</div>
              </fieldset>
              <fieldset class="lead-group-field span-all">
                <legend>配搭群設定</legend>
                <div class="worker-lead-groups">${supportGroupOptions}</div>
              </fieldset>
              <button class="delete-btn" type="button" data-delete-worker="${escapeAttribute(worker.id)}">刪除同工</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderAvailabilityMatrix() {
  const weeks = getSundaysOfMonth(selectedMonth);
  const checkedCount = weeks.reduce((sum, weekId) => sum + ensureSchedule(weekId).available.length, 0);
  elements.availabilitySummary.textContent = `${checkedCount} 格`;

  if (state.volunteers.length === 0) {
    elements.availabilityMatrix.innerHTML = `<div class="empty-state">尚無同工</div>`;
    return;
  }

  const header = weeks.map((weekId, index) => `<th>第${index + 1}週<small>${formatZhDate(weekId)}</small></th>`).join("");
  const rows = state.volunteers
    .map((worker) => {
      const selectedCount = weeks.filter((weekId) => ensureSchedule(weekId).available.includes(worker.id)).length;
      const isAllSelected = selectedCount === weeks.length;
      const cells = weeks
        .map((weekId) => {
          const checked = ensureSchedule(weekId).available.includes(worker.id) ? "checked" : "";
          return `
            <td>
              <input type="checkbox" data-available-worker="${escapeAttribute(worker.id)}" data-available-week="${weekId}" ${checked} />
            </td>
          `;
        })
        .join("");
      return `
        <tr>
          <td>
            <div class="availability-worker-cell">
              <span>${escapeHtml(worker.name)}</span>
              <button class="mini-action" type="button" data-toggle-availability-worker="${escapeAttribute(worker.id)}">${isAllSelected ? "取消全選" : "全選"}</button>
            </div>
            <small>${getLevel(worker.level).label}</small>
          </td>
          ${cells}
        </tr>
      `;
    })
    .join("");

  elements.availabilityMatrix.innerHTML = `
    <table class="availability-table">
      <thead><tr><th>同工</th>${header}</tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderLeadPools() {
  if (state.volunteers.length === 0) {
    elements.leadPoolList.innerHTML = `<div class="empty-state">新增同工後，可在這裡設定各班主責群與配搭群。</div>`;
    return;
  }

  elements.leadPoolList.innerHTML = GROUPS.map((group) => {
    const leadOptions = renderPoolOptions(group.id, "lead");
    const supportOptions = renderPoolOptions(group.id, "support");
    const leadCount = state.volunteers.filter((worker) => worker.leadGroups.includes(group.id)).length;
    const supportCount = state.volunteers.filter((worker) => worker.supportGroups.includes(group.id)).length;

    return `
      <article class="pool-card">
        <h3>${group.label}</h3>
        <div class="pool-section">
          <div class="pool-label">主責群：${leadCount} 位</div>
          <div class="pool-options">${leadOptions}</div>
        </div>
        <div class="pool-section">
          <div class="pool-label">配搭群：${supportCount} 位</div>
          <div class="pool-options">${supportOptions}</div>
        </div>
      </article>
    `;
  }).join("");
}

function renderWeekTabs(weeks) {
  elements.weekTabs.innerHTML = weeks
    .map((weekId, index) => {
      const schedule = ensureSchedule(weekId);
      const isActive = weekId === selectedWeekId ? "active" : "";
      return `
        <button class="week-tab ${isActive}" type="button" data-week-id="${weekId}">
          <strong>第 ${index + 1} 週</strong>
          <span>${formatZhDate(weekId)} · ${getWeekStatus(schedule)}</span>
        </button>
      `;
    })
    .join("");
}

function renderAssignments() {
  const schedule = ensureSchedule(selectedWeekId);
  elements.selectedWeekTitle.textContent = `${formatZhDate(selectedWeekId)} 調整`;
  elements.saveStatus.textContent = schedule.savedAt ? "已儲存" : "未儲存";
  elements.saveStatus.classList.toggle("saved", Boolean(schedule.savedAt));
  elements.saveStatus.classList.toggle("muted", !schedule.savedAt);
  renderMainAssignments(schedule);
  renderGroupAssignments(schedule);
}

function renderMainAssignments(schedule) {
  elements.mainAssignmentGrid.innerHTML = MAIN_ROLES.map((role) => {
    if (isMultiMainRole(role.id)) {
      const slots = Array.from({ length: getMainRoleTarget(role.id) }, (_, slotIndex) => {
        const currentValue = getMainAssignmentSlotValue(schedule, role.id, slotIndex);
        return `
          <label class="assignment-slot">
            <span>${slotIndex + 1}</span>
            <select data-main-role="${role.id}" data-main-slot="${slotIndex}">${renderMainAssignmentOptions(schedule, role.id, currentValue)}</select>
          </label>
        `;
      }).join("");

      return `
        <div class="assignment-row multi-assignment-row">
          <span class="role-label">${role.label}</span>
          <div class="assignment-slots">${slots}</div>
        </div>
      `;
    }

    const currentValue = getMainAssignmentSlotValue(schedule, role.id);

    return `
      <label class="assignment-row">
        <span class="role-label">${role.label}</span>
        <select data-main-role="${role.id}">${renderMainAssignmentOptions(schedule, role.id, currentValue)}</select>
      </label>
    `;
  }).join("");
}

function renderMainAssignmentOptions(schedule, roleId, currentValue) {
  return [
    `<option value="">${getEmptyMainRoleLabel(roleId)}</option>`,
    ...state.volunteers
      .filter((worker) => schedule.available.includes(worker.id) && canDoWorker(worker, roleId))
      .map((worker) => `<option value="${escapeAttribute(worker.id)}" ${worker.id === currentValue ? "selected" : ""}>${escapeHtml(getDisplayName(worker))}</option>`),
  ].join("");
}

function getEmptyMainRoleLabel(roleId) {
  return getMainRoleEmptyLabel(roleId);
}

function renderGroupAssignments(schedule) {
  const workers = getAvailableWorkers(schedule).filter((worker) => canDoWorker(worker, "groupSupport"));
  if (workers.length === 0) {
    elements.groupAssignmentGrid.innerHTML = `<div class="empty-state">本週沒有可分配小組的同工</div>`;
    return;
  }

  elements.groupAssignmentGrid.innerHTML = workers
    .map((worker) => {
      const assignment = schedule.assignments.groups[worker.id] || { classId: "", role: "support" };
      const mainDuty = getWorkerMainDuty(worker.id, schedule);
      const fixedClass = worker.fixedGroup ? `固定班級：${getGroup(worker.fixedGroup).label}` : "無固定班級";
      return `
        <article class="group-teacher-row" data-group-row="${escapeAttribute(worker.id)}">
          <div class="group-worker-meta">
            <span class="group-worker-name">${escapeHtml(getDisplayName(worker))}</span>
            <span class="main-duty">姓名：${escapeHtml(worker.name)}</span>
            <span class="main-duty">${mainDuty ? `主要職務：${escapeHtml(mainDuty)}` : "無主要職務"}</span>
            <span class="main-duty">${escapeHtml(fixedClass)}</span>
          </div>
          <select data-group-class="${escapeAttribute(worker.id)}">${renderGroupOptions(assignment.classId, "待分配")}</select>
          <select data-group-role="${escapeAttribute(worker.id)}">
            <option value="support" ${assignment.role !== "lead" ? "selected" : ""}>配搭</option>
            ${canDoWorker(worker, "groupLead") ? `<option value="lead" ${assignment.role === "lead" ? "selected" : ""}>主責</option>` : ""}
          </select>
        </article>
      `;
    })
    .join("");
}

function renderStats() {
  if (state.volunteers.length === 0) {
    elements.statsList.innerHTML = `<div class="empty-state">尚無統計</div>`;
    return;
  }

  const stats = getMonthStats(selectedMonth, state.schedules);
  elements.statsList.innerHTML = [...state.volunteers]
    .sort((a, b) => {
      const statA = stats.get(a.id) || createEmptyWorkerStats();
      const statB = stats.get(b.id) || createEmptyWorkerStats();
      return statA.total - statB.total || a.name.localeCompare(b.name, "zh-Hant");
    })
    .map((worker) => {
      const stat = stats.get(worker.id) || createEmptyWorkerStats();
      return `
        <div class="stat-row">
          <span class="stat-name">
            ${escapeHtml(worker.name)}
            <span class="stat-detail">主要 ${stat.main} 次／小組主責 ${stat.groupLead} 次／小組配搭 ${stat.groupSupport} 次</span>
          </span>
          <span class="stat-count">${stat.total} 次</span>
        </div>
      `;
    })
    .join("");
}

function renderYearStats() {
  if (state.volunteers.length === 0) {
    elements.yearStatsList.innerHTML = `<div class="empty-state">尚無統計</div>`;
    return;
  }

  const year = Number(selectedMonth.slice(0, 4));
  const { stats, monthCount } = getYearStats(year, state.schedules);
  elements.yearStatsList.innerHTML = state.volunteers
    .map((worker) => {
      const stat = stats.get(worker.id) || createEmptyWorkerStats();
      const average = monthCount ? stat.total / monthCount : 0;
      return `
        <div class="stat-row year-stat-row">
          <span class="stat-name">
            ${escapeHtml(worker.name)}
            <span class="stat-detail">主要職務：${stat.main} 次／小組主責：${stat.groupLead} 次／小組配搭：${stat.groupSupport} 次</span>
          </span>
          <span class="stat-count">
            今年總服事量：${stat.total} 次
            <small>平均每月服事量：${formatAverage(average)} 次</small>
          </span>
        </div>
      `;
    })
    .join("");
}

function renderFutureList() {
  elements.futureList.innerHTML = FUTURE_FEATURES.map((feature) => `<span class="tag">${feature.label}：資料已預留</span>`).join("");
}

function renderRecords(weeks) {
  elements.recordsList.innerHTML = weeks
    .map((weekId) => {
      const schedule = ensureSchedule(weekId);
      const mainFilled = MAIN_ROLES.reduce((sum, role) => sum + Math.min(getMainAssignmentIds(schedule, role.id).length, getMainRoleTarget(role.id)), 0);
      const mainTarget = MAIN_ROLES.reduce((sum, role) => sum + getMainRoleMinimum(role.id), HOSPITALITY_TARGET - HOSPITALITY_MIN);
      const completeGroups = GROUPS.filter((group) => getGroupRoleCount(schedule, group.id, "lead") >= 1 && getGroupRoleCount(schedule, group.id, "support") >= 1).length;
      return `
        <article class="record-row">
          <span class="record-date">${formatZhDate(weekId)} · ${schedule.savedAt ? "已儲存" : "未儲存"}</span>
          <div class="record-summary">
            <span class="record-chip">主要 ${mainFilled}/${mainTarget}</span>
            <span class="record-chip">小組完整 ${completeGroups}/${GROUPS.length}</span>
            <span class="record-chip">能服事 ${schedule.available.length} 位</span>
          </div>
          <button class="go-week-btn" type="button" data-week-id="${weekId}">查看</button>
        </article>
      `;
    })
    .join("");
}

function renderSummary() {
  const summary = getMonthSummary(selectedMonth);
  const issues = [...latestNotices, ...getCrossServiceConflictNotices(selectedMonth), ...summary.issues].slice(0, 80);
  const issueMarkup = issues.length
    ? `<ul class="issue-list">${issues.map((issue) => `<li>${escapeHtml(issue)}</li>`).join("")}</ul>`
    : `<div class="empty-state">目前沒有缺額內容</div>`;

  elements.summaryPanel.innerHTML = `
    <div class="summary-head">
      <h2>本月排班摘要</h2>
      <span class="pill muted">${getSundaysOfMonth(selectedMonth).length} 個主日</span>
    </div>
    <div class="summary-metrics">
      <div class="metric done"><span>🟢 已完成</span><strong>${summary.done}</strong></div>
      <div class="metric pending"><span>🟡 待補</span><strong>${summary.pending}</strong></div>
      <div class="metric blocked"><span>🔴 無法安排</span><strong>${summary.blocked}</strong></div>
    </div>
    <details class="summary-details">
      <summary>查看詳細缺額內容</summary>
      ${issueMarkup}
    </details>
  `;
}

function renderSheetView() {
  const weeks = getSundaysOfMonth(selectedMonth);
  elements.sheetTitle.textContent = `${selectedMonth} 服事表`;

  const head = weeks.map((weekId, index) => `<th>第${index + 1}週<br>${formatZhDate(weekId)}</th>`).join("");
  const mainRows = MAIN_ROLES.map((role) => {
    const cells = weeks
      .map((weekId) => {
        const workerName = getMainWorkerNames(ensureSchedule(weekId), role.id);
        const emptyLabel = getMainRoleEmptyLabel(role.id);
        return `<td class="${workerName ? "" : "empty-cell"}">${escapeHtml(workerName || emptyLabel)}</td>`;
      })
      .join("");
    return `<tr><td>${role.label}</td>${cells}</tr>`;
  }).join("");

  elements.mainSheetTable.innerHTML = `
    <table class="sheet-table">
      <thead><tr><th>職務</th>${head}</tr></thead>
      <tbody>${mainRows}</tbody>
    </table>
  `;

  elements.groupSheetGrid.innerHTML = GROUPS.map((group) => {
    const rows = ["lead", "support"].map((role) => {
      const roleLabel = role === "lead" ? "主責" : "配搭";
      const cells = weeks
        .map((weekId) => {
          const names = getGroupWorkerNames(ensureSchedule(weekId), group.id, role);
          return `<td class="${names ? "" : "empty-cell"}">${escapeHtml(names || "待補")}</td>`;
        })
        .join("");
      return `<tr><td>${roleLabel}</td>${cells}</tr>`;
    }).join("");

    return `
      <article class="group-sheet">
        <h3>${group.label}</h3>
        <table>
          <thead><tr><th>角色</th>${head}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </article>
    `;
  }).join("");
}

function renderSmallGroupView() {
  const service = getSmallGroupServiceState();
  service.settings.startMonth = selectedMonth;
  ensureSmallGroupMeetings(service);
  renderSmallGroupSettings(service);
  renderSmallGroupWorkers(service);
  renderSmallGroupScheduleSummary(service);
  renderSmallGroupScheduleTable(service);
  renderSmallGroupMeetingTabs(service);
  renderSmallGroupMeetingEditor(service);
  renderSmallGroupAnnouncementSettings(service);
  renderSmallGroupScheduleImage(service);
  elements.smallGroupAnnouncement.value = service.announcementText || "";
}

function renderSmallGroupSettings(service) {
  elements.smallGroupWeekday.innerHTML = WEEKDAY_OPTIONS.map((item) => `<option value="${item.id}" ${item.id === service.settings.meetingWeekday ? "selected" : ""}>${item.label}</option>`).join("");
  elements.smallGroupMonthSpan.value = String(service.settings.monthSpan);
  elements.smallGroupIncludeMonthTheme.checked = Boolean(service.settings.includeFields.monthTheme);
  elements.smallGroupIncludeWeekTheme.checked = Boolean(service.settings.includeFields.weekTheme);
  elements.smallGroupIncludeSpeaker.checked = Boolean(service.settings.includeFields.speaker);
}

function renderSmallGroupWorkers(service) {
  elements.smallGroupWorkerLevel.innerHTML = renderSmallGroupLevelOptions(elements.smallGroupWorkerLevel.value || "regular");

  if (state.volunteers.length === 0) {
    elements.smallGroupWorkerList.innerHTML = `<div class="empty-state">尚無小組同工資料</div>`;
    return;
  }

  elements.smallGroupWorkerList.innerHTML = state.volunteers.map((worker) => {
    const isOpen = expandedSmallGroupWorkerId === worker.id;
    return `
      <article class="small-group-worker-row accordion-worker ${isOpen ? "open" : ""}">
        <div class="worker-summary-line">
          <button class="worker-summary" type="button" data-toggle-small-group-worker="${escapeAttribute(worker.id)}" aria-expanded="${isOpen}">
            <span class="accordion-arrow">${isOpen ? "▼" : "▶"}</span>
            <span class="worker-name">${escapeHtml(worker.name)}</span>
            <span class="worker-summary-text">${escapeHtml(getSmallGroupWorkerSummary(worker))}</span>
          </button>
        </div>
        <div class="worker-detail ${isOpen ? "" : "hidden"}">
          <div class="worker-controls">
            <label class="field">
              <span>暱稱</span>
              <input type="text" value="${escapeAttribute(worker.nickname || "")}" data-small-group-worker-nickname="${escapeAttribute(worker.id)}" />
            </label>
            <label class="field">
              <span>小組服事等級</span>
              <select data-small-group-worker-level="${escapeAttribute(worker.id)}">${renderSmallGroupLevelOptions(worker.level)}</select>
            </label>
            <fieldset class="best-duty-field">
              <legend>最適合小組服事項目</legend>
              <div class="best-duty-options compact-options">${renderSmallGroupDutyCheckboxes(worker.bestDuties, worker.id, "best")}</div>
            </fieldset>
            <fieldset class="best-duty-field">
              <legend>不擅長小組服事項目</legend>
              <div class="best-duty-options compact-options weak-duty-options">${renderSmallGroupDutyCheckboxes(worker.weakDuties, worker.id, "weak")}</div>
            </fieldset>
            <label class="field full-span">
              <span>備註</span>
              <textarea rows="3" data-small-group-worker-note="${escapeAttribute(worker.id)}">${escapeHtml(worker.note)}</textarea>
            </label>
          </div>
          <button class="delete-btn small-btn" type="button" data-delete-small-group-worker="${escapeAttribute(worker.id)}">刪除小組同工</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderSmallGroupScheduleSummary(service) {
  const meetings = getSmallGroupMeetingList(service);
  const totalSlots = meetings.length * SMALL_GROUP_DUTIES.length;
  const filledSlots = meetings.reduce((count, meeting) => {
    return count + SMALL_GROUP_DUTIES.filter((duty) => meeting.assignments?.[duty.id]).length;
  }, 0);
  const notices = Array.isArray(service.scheduleNotices) ? service.scheduleNotices : [];
  const noticeHtml = notices.length
    ? `<details class="small-group-notices" open>
        <summary>${notices.length} 則排班提醒</summary>
        <ul>${notices.map((notice) => `<li>${escapeHtml(notice)}</li>`).join("")}</ul>
      </details>`
    : `<div class="muted-note">目前沒有排班提醒。</div>`;

  elements.smallGroupScheduleSummary.innerHTML = `
    <div class="small-group-summary-grid">
      <div class="metric"><strong>${meetings.length}</strong><span>聚會週次</span></div>
      <div class="metric"><strong>${filledSlots}</strong><span>已安排</span></div>
      <div class="metric"><strong>${Math.max(totalSlots - filledSlots, 0)}</strong><span>待安排</span></div>
    </div>
    ${noticeHtml}
  `;
}

function renderSmallGroupScheduleTable(service) {
  const meetings = getSmallGroupMeetingList(service);
  if (meetings.length === 0) {
    elements.smallGroupScheduleTable.innerHTML = `<div class="empty-state">請先設定聚會月份與星期</div>`;
    return;
  }

  const dutyHeaders = SMALL_GROUP_DUTIES.map((duty) => `<th>${duty.label}</th>`).join("");
  const rows = meetings.map((meeting) => {
    const assignments = SMALL_GROUP_DUTIES.map((duty) => {
      const workerName = getSmallGroupAssignmentName(meeting.assignments?.[duty.id]);
      return `<td class="${workerName ? "" : "empty-cell"}">${escapeHtml(workerName || "待安排")}</td>`;
    }).join("");
    return `
      <tr>
        <td>${escapeHtml(formatSmallGroupDateShort(meeting.date))}</td>
        <td>${escapeHtml(meeting.location || "待填寫")}</td>
        <td>${escapeHtml(formatAnnouncementTimeRange(meeting.startTime, meeting.endTime))}</td>
        ${assignments}
      </tr>
    `;
  }).join("");

  elements.smallGroupScheduleTable.innerHTML = `
    <table class="small-group-schedule-table">
      <thead>
        <tr>
          <th>日期</th>
          <th>地點</th>
          <th>時間</th>
          ${dutyHeaders}
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderSmallGroupMeetingTabs(service) {
  const meetings = getSmallGroupMeetingList(service);
  if (!selectedSmallGroupMeetingId || !service.meetings[selectedSmallGroupMeetingId]) {
    selectedSmallGroupMeetingId = meetings[0]?.id || "";
  }

  elements.smallGroupMeetingTabs.innerHTML = meetings.map((meeting, index) => `
    <button class="week-tab ${meeting.id === selectedSmallGroupMeetingId ? "active" : ""}" type="button" data-small-group-meeting-id="${escapeAttribute(meeting.id)}">
      <strong>第 ${index + 1} 週</strong>
      <span>${formatSmallGroupDate(meeting.date)}</span>
    </button>
  `).join("");
}

function renderSmallGroupMeetingEditor(service) {
  const meeting = service.meetings[selectedSmallGroupMeetingId];
  if (!meeting) {
    elements.smallGroupMeetingEditor.innerHTML = `<div class="empty-state">請先設定聚會月份與星期</div>`;
    return;
  }

  const dutyRows = SMALL_GROUP_DUTIES.map((duty) => `
    <label class="assignment-row">
      <span class="role-label">${duty.label}</span>
      <select data-small-group-duty="${duty.id}">
        <option value="">待安排</option>
        ${renderSmallGroupWorkerOptions(service, meeting.assignments[duty.id], duty.id)}
      </select>
    </label>
  `).join("");

  elements.smallGroupMeetingEditor.innerHTML = `
    <div class="small-group-meeting-fields">
      <label class="field">
        <span>聚會日期</span>
        <input type="date" value="${escapeAttribute(meeting.date)}" data-small-group-field="date" />
      </label>
      <label class="field">
        <span>開始時間</span>
        <input type="time" value="${escapeAttribute(meeting.startTime)}" data-small-group-field="startTime" />
      </label>
      <label class="field">
        <span>結束時間</span>
        <input type="time" value="${escapeAttribute(meeting.endTime)}" data-small-group-field="endTime" />
      </label>
      <label class="field">
        <span>聚會地點</span>
        <input type="text" value="${escapeAttribute(meeting.location)}" data-small-group-field="location" />
      </label>
    </div>
    <div class="schedule-block">
      <div class="block-title">
        <h3>本週服事表</h3>
        <span>可留空</span>
      </div>
      <div class="assignment-grid">${dutyRows}</div>
    </div>
  `;
}

function renderSmallGroupAnnouncementSettings(service) {
  const meeting = service.meetings[selectedSmallGroupMeetingId];
  if (!meeting) {
    elements.smallGroupAnnouncementSettings.innerHTML = "";
    return;
  }

  elements.smallGroupAnnouncementSettings.innerHTML = `
    <div class="small-group-meeting-fields">
      <label class="field">
        <span>本月主題</span>
        <input type="text" value="${escapeAttribute(meeting.monthTheme)}" data-small-group-field="monthTheme" />
      </label>
      <label class="field">
        <span>本週主題</span>
        <input type="text" value="${escapeAttribute(meeting.weekTheme)}" data-small-group-field="weekTheme" />
      </label>
      <label class="field">
        <span>講員／主題分享者</span>
        <input type="text" value="${escapeAttribute(meeting.speaker)}" data-small-group-field="speaker" />
      </label>
    </div>
  `;
}

function updateSmallGroupSettings() {
  const service = getSmallGroupServiceState();
  service.settings.startMonth = selectedMonth;
  service.settings.meetingWeekday = Number(elements.smallGroupWeekday.value);
  service.settings.monthSpan = clampNumber(elements.smallGroupMonthSpan.value, 1, 3);
  service.settings.includeFields.monthTheme = elements.smallGroupIncludeMonthTheme.checked;
  service.settings.includeFields.weekTheme = elements.smallGroupIncludeWeekTheme.checked;
  service.settings.includeFields.speaker = elements.smallGroupIncludeSpeaker.checked;
  selectedSmallGroupMeetingId = "";
  render();
}

function updateSmallGroupWorkerSettings(event) {
  const target = event.target;
  const workerId = target.dataset.smallGroupWorkerNickname || target.dataset.smallGroupWorkerLevel || target.dataset.smallGroupWorkerBest || target.dataset.smallGroupWorkerWeak || target.dataset.smallGroupWorkerNote;
  if (!workerId) return;
  const worker = getWorker(workerId);
  if (!worker) return;

  if (target.dataset.smallGroupWorkerNickname) {
    worker.nickname = target.value;
  }
  if (target.dataset.smallGroupWorkerLevel) {
    worker.level = target.value;
  }
  if (target.dataset.smallGroupWorkerBest) {
    const dutyId = target.dataset.dutyId;
    worker.bestDuties = target.checked ? unique([...worker.bestDuties, dutyId]) : worker.bestDuties.filter((id) => id !== dutyId);
  }
  if (target.dataset.smallGroupWorkerWeak) {
    const dutyId = target.dataset.dutyId;
    worker.weakDuties = target.checked ? unique([...worker.weakDuties, dutyId]) : worker.weakDuties.filter((id) => id !== dutyId);
  }
  if (target.dataset.smallGroupWorkerNote) {
    worker.note = target.value;
  }
  Object.assign(worker, normalizeSmallGroupWorker(worker));
  saveState();
}

function toggleSmallGroupWorkerAccordion(event) {
  const button = event.target.closest("[data-toggle-small-group-worker]");
  if (!button) return;
  expandedSmallGroupWorkerId = expandedSmallGroupWorkerId === button.dataset.toggleSmallGroupWorker ? "" : button.dataset.toggleSmallGroupWorker;
  render();
}

function addSmallGroupWorker(event) {
  event.preventDefault();
  const name = elements.smallGroupWorkerName.value.trim();
  if (!name) {
    showToast("請輸入小組同工姓名");
    return;
  }
  if (state.volunteers.some((worker) => worker.name === name)) {
    showToast("小組服事表已有同名同工");
    return;
  }

  state.volunteers.push(normalizeSmallGroupWorker({
    id: createId(),
    name,
    nickname: elements.smallGroupWorkerNickname.value,
    level: elements.smallGroupWorkerLevel.value,
  }));
  elements.smallGroupWorkerForm.reset();
  expandedSmallGroupWorkerId = "";
  render();
  showToast("小組同工已新增");
}

function deleteSmallGroupWorker(event) {
  const button = event.target.closest("[data-delete-small-group-worker]");
  if (!button) return;
  const workerId = button.dataset.deleteSmallGroupWorker;
  const worker = getWorker(workerId);
  if (!worker) return;
  const ok = window.confirm(`確定要刪除小組同工「${worker.name}」嗎？相關小組服事安排也會清空。`);
  if (!ok) return;

  const service = getSmallGroupServiceState();
  Object.values(service.meetings || {}).forEach((meeting) => {
    SMALL_GROUP_DUTIES.forEach((duty) => {
      if (meeting.assignments?.[duty.id] === workerId) {
        meeting.assignments[duty.id] = "";
      }
    });
  });
  state.volunteers = state.volunteers.filter((item) => item.id !== workerId);
  expandedSmallGroupWorkerId = "";
  render();
  showToast("小組同工已刪除");
}

function autoGenerateSmallGroupSchedule() {
  const service = getSmallGroupServiceState();
  ensureSmallGroupMeetings(service);
  const meetings = getSmallGroupMeetingList(service);
  const workers = state.volunteers.map((worker) => normalizeSmallGroupWorker(worker));

  if (workers.length === 0) {
    showToast("請先新增小組同工");
    return;
  }

  const notices = [];
  const totalCounts = new Map(workers.map((worker) => [worker.id, 0]));
  const dutyCounts = new Map();
  let previousMeeting = null;

  meetings.forEach((meeting) => {
    const previousWorkerIds = new Set(previousMeeting ? Object.values(previousMeeting.assignments || {}).filter(Boolean) : []);
    const usedThisMeeting = new Set();

    SMALL_GROUP_DUTIES.forEach((duty) => {
      const selectedWorker = pickSmallGroupWorkerForDuty(duty.id, workers, {
        totalCounts,
        dutyCounts,
        previousWorkerIds,
        previousDutyWorkerId: previousMeeting?.assignments?.[duty.id] || "",
        usedThisMeeting,
      });

      if (!selectedWorker) {
        meeting.assignments[duty.id] = "";
        notices.push(`${formatSmallGroupDateShort(meeting.date)} ${duty.label} 無可用同工，保留待安排。`);
        return;
      }

      meeting.assignments[duty.id] = selectedWorker.id;
      const currentTotal = totalCounts.get(selectedWorker.id) || 0;
      const dutyKey = `${selectedWorker.id}:${duty.id}`;
      totalCounts.set(selectedWorker.id, currentTotal + 1);
      dutyCounts.set(dutyKey, (dutyCounts.get(dutyKey) || 0) + 1);

      if (previousMeeting?.assignments?.[duty.id] === selectedWorker.id) {
        notices.push(`${formatSmallGroupDateShort(meeting.date)} ${getDisplayName(selectedWorker)} 連續兩週擔任「${duty.label}」，請確認人手是否足夠。`);
      } else if (previousWorkerIds.has(selectedWorker.id)) {
        notices.push(`${formatSmallGroupDateShort(meeting.date)} ${getDisplayName(selectedWorker)} 連續週服事，請確認人手是否足夠。`);
      }
      if (duty.id === "worship" && selectedWorker.level === "regular") {
        notices.push(`${formatSmallGroupDateShort(meeting.date)} 敬拜人力不足，${getDisplayName(selectedWorker)}（一般）支援敬拜。`);
      }
      if (hasSmallGroupWeakDuty(selectedWorker, duty.id)) {
        notices.push(`${getDisplayName(selectedWorker)} 被安排到不擅長小組服事項目：${duty.label}，請確認是否合適。`);
      }
      if (usedThisMeeting.has(selectedWorker.id)) {
        notices.push(`${formatSmallGroupDateShort(meeting.date)} ${getDisplayName(selectedWorker)} 同週支援多項小組服事，請確認是否合適。`);
      }

      usedThisMeeting.add(selectedWorker.id);
    });

    previousMeeting = meeting;
  });

  service.scheduleNotices = unique(notices);
  saveState();
  render();
  showToast("小組服事表已自動生成");
}

function pickSmallGroupWorkerForDuty(dutyId, workers, context) {
  const candidatePools = [
    workers.filter((worker) => canSmallGroupWorkerServeDuty(worker, dutyId, { allowWorshipFallback: false })),
  ];
  if (dutyId === "worship") {
    candidatePools.push(workers.filter((worker) => canSmallGroupWorkerServeDuty(worker, dutyId, { allowWorshipFallback: true })));
  }

  const tiers = [
    (worker) => !context.usedThisMeeting.has(worker.id) && worker.id !== context.previousDutyWorkerId && !context.previousWorkerIds.has(worker.id) && !hasSmallGroupWeakDuty(worker, dutyId),
    (worker) => !context.usedThisMeeting.has(worker.id) && worker.id !== context.previousDutyWorkerId && !hasSmallGroupWeakDuty(worker, dutyId),
    (worker) => !context.usedThisMeeting.has(worker.id) && worker.id !== context.previousDutyWorkerId,
    (worker) => !context.usedThisMeeting.has(worker.id) && !context.previousWorkerIds.has(worker.id) && !hasSmallGroupWeakDuty(worker, dutyId),
    (worker) => !context.usedThisMeeting.has(worker.id),
    (worker) => !hasSmallGroupWeakDuty(worker, dutyId),
    () => true,
  ];

  for (const filter of tiers) {
    for (const pool of candidatePools) {
      const candidates = uniqueWorkers(pool).filter(filter);
      if (candidates.length > 0) {
        return sortSmallGroupCandidates(candidates, dutyId, context)[0];
      }
    }
  }

  return null;
}

function sortSmallGroupCandidates(candidates, dutyId, context) {
  return [...candidates].sort((a, b) => {
    const scoreA = getSmallGroupCandidateScore(a, dutyId, context);
    const scoreB = getSmallGroupCandidateScore(b, dutyId, context);
    if (scoreA !== scoreB) return scoreA - scoreB;
    return a.name.localeCompare(b.name, "zh-Hant");
  });
}

function uniqueWorkers(workers) {
  const seen = new Set();
  return workers.filter((worker) => {
    if (!worker?.id || seen.has(worker.id)) return false;
    seen.add(worker.id);
    return true;
  });
}

function getSmallGroupCandidateScore(worker, dutyId, context) {
  const dutyKey = `${worker.id}:${dutyId}`;
  let score = 0;
  if (!hasSmallGroupBestDuty(worker, dutyId)) score += 40;
  if (["icebreaker", "snack"].includes(dutyId) && worker.level === "new") score -= 18;
  if (dutyId === "worship" && worker.level === "regular") score += 45;
  if (hasSmallGroupWeakDuty(worker, dutyId)) score += 80;
  if (worker.id === context.previousDutyWorkerId) score += 90;
  if (context.previousWorkerIds.has(worker.id)) score += 35;
  if (context.usedThisMeeting.has(worker.id)) score += 60;
  score += (context.totalCounts.get(worker.id) || 0) * 8;
  score += (context.dutyCounts.get(dutyKey) || 0) * 6;
  return score;
}

function changeSmallGroupMeeting(event) {
  const button = event.target.closest("[data-small-group-meeting-id]");
  if (!button) return;
  selectedSmallGroupMeetingId = button.dataset.smallGroupMeetingId;
  render();
}

function updateSmallGroupMeeting(event) {
  const service = getSmallGroupServiceState();
  const meeting = service.meetings[selectedSmallGroupMeetingId];
  if (!meeting) return;
  const field = event.target.dataset.smallGroupField;
  const dutyId = event.target.dataset.smallGroupDuty;
  if (field) {
    meeting[field] = event.target.value;
  }
  if (dutyId) {
    meeting.assignments[dutyId] = event.target.value;
    service.scheduleNotices = [];
  }
  renderSmallGroupScheduleSummary(service);
  renderSmallGroupScheduleTable(service);
  renderSmallGroupScheduleImage(service);
  saveState();
}

function generateSmallGroupAnnouncement() {
  const service = getSmallGroupServiceState();
  const meeting = service.meetings[selectedSmallGroupMeetingId];
  if (!meeting) return;
  service.announcementText = buildSmallGroupAnnouncement(service, meeting);
  elements.smallGroupAnnouncement.value = service.announcementText;
  saveState();
  showToast("LINE 公告已生成");
}

async function copySmallGroupAnnouncement() {
  const service = getSmallGroupServiceState();
  const text = elements.smallGroupAnnouncement.value || service.announcementText || "";
  if (!text.trim()) {
    showToast("目前沒有公告文字");
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    showToast("公告已複製");
  } catch {
    elements.smallGroupAnnouncement.focus();
    elements.smallGroupAnnouncement.select();
    showToast("請手動複製公告文字");
  }
}

function buildSmallGroupAnnouncement(service, meeting) {
  const lines = [service.announcementTemplate.opening, ""];
  if (service.settings.includeFields.monthTheme) {
    lines.push(`本月主題:  『${meeting.monthTheme || "待填寫"}』`, "");
  }
  if (service.settings.includeFields.weekTheme) {
    lines.push(`本周主題:   【${meeting.weekTheme || "待填寫"}】`, "");
  }
  if (service.settings.includeFields.speaker) {
    lines.push(meeting.speaker || "待填寫", "");
  }
  lines.push(`地點: ${meeting.location || "待填寫"}`);
  lines.push(`時間: (${getWeekdayAnnouncementLabel(meeting.date)})${formatAnnouncementTimeRange(meeting.startTime, meeting.endTime)}`, "");
  lines.push(`本週服事表 (${formatSmallGroupDateShort(meeting.date)})`, "");
  SMALL_GROUP_DUTIES.forEach((duty) => {
    lines.push(`${duty.label}：${getSmallGroupAssignmentName(meeting.assignments[duty.id]) || "待安排"}`);
  });
  lines.push("", service.announcementTemplate.closing);
  return lines.join("\n");
}

function exportSmallGroupScheduleImage() {
  renderSmallGroupScheduleImage(getSmallGroupServiceState());
  showToast("服事表圖片已產生，可下載或長按儲存");
}

function downloadSmallGroupScheduleImage() {
  const canvas = elements.smallGroupScheduleCanvas;
  if (!canvas) return;
  renderSmallGroupScheduleImage(getSmallGroupServiceState());
  const link = elements.smallGroupImageDownload;
  link.href = canvas.toDataURL("image/png");
  link.download = `small-group-schedule-${selectedMonth}.png`;
  link.click();
}

function renderSmallGroupScheduleImage(service) {
  const canvas = elements.smallGroupScheduleCanvas;
  if (!canvas?.getContext) return;

  const meetings = getSmallGroupMeetingList(service);
  const columns = [
    { label: "日期", width: 130, value: (meeting) => formatSmallGroupDateShort(meeting.date) },
    { label: "地點", width: 230, value: (meeting) => meeting.location || "待填寫" },
    { label: "時間", width: 180, value: (meeting) => formatAnnouncementTimeRange(meeting.startTime, meeting.endTime) },
    ...SMALL_GROUP_DUTIES.map((duty) => ({
      label: duty.label,
      width: 150,
      value: (meeting) => getSmallGroupAssignmentName(meeting.assignments?.[duty.id]) || "待安排",
    })),
  ];
  const padding = 28;
  const logicalWidth = columns.reduce((sum, column) => sum + column.width, padding * 2);
  const titleHeight = 88;
  const headerHeight = 54;
  const rowHeight = 64;
  const logicalHeight = titleHeight + headerHeight + Math.max(meetings.length, 1) * rowHeight + padding;
  const ratio = Math.max(window.devicePixelRatio || 1, 1);
  const ctx = canvas.getContext("2d");

  canvas.width = logicalWidth * ratio;
  canvas.height = logicalHeight * ratio;
  canvas.style.width = `${logicalWidth}px`;
  canvas.style.height = `${logicalHeight}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, logicalWidth, logicalHeight);

  ctx.fillStyle = "#fffaf1";
  ctx.fillRect(0, 0, logicalWidth, logicalHeight);
  ctx.fillStyle = "#5c4635";
  ctx.font = "800 28px 'Microsoft JhengHei', 'Noto Sans TC', sans-serif";
  ctx.fillText("小組服事表", padding, 42);
  ctx.font = "700 16px 'Microsoft JhengHei', 'Noto Sans TC', sans-serif";
  ctx.fillStyle = "#8a6d50";
  ctx.fillText(`${selectedMonth}｜${meetings.length} 次聚會`, padding, 68);

  let x = padding;
  let y = titleHeight;
  ctx.fillStyle = "#f4e5d0";
  ctx.fillRect(padding, y, logicalWidth - padding * 2, headerHeight);
  ctx.strokeStyle = "#d9c4aa";
  ctx.lineWidth = 1;
  ctx.font = "800 18px 'Microsoft JhengHei', 'Noto Sans TC', sans-serif";
  ctx.fillStyle = "#5c4635";
  columns.forEach((column) => {
    ctx.strokeRect(x, y, column.width, headerHeight);
    ctx.fillText(column.label, x + 12, y + 34);
    x += column.width;
  });

  if (meetings.length === 0) {
    ctx.font = "700 18px 'Microsoft JhengHei', 'Noto Sans TC', sans-serif";
    ctx.fillStyle = "#8a6d50";
    ctx.fillText("請先設定聚會月份與星期", padding + 12, y + headerHeight + 40);
    return;
  }

  y += headerHeight;
  ctx.font = "700 17px 'Microsoft JhengHei', 'Noto Sans TC', sans-serif";
  meetings.forEach((meeting, rowIndex) => {
    x = padding;
    ctx.fillStyle = rowIndex % 2 === 0 ? "#ffffff" : "#fff7e8";
    ctx.fillRect(padding, y, logicalWidth - padding * 2, rowHeight);
    columns.forEach((column) => {
      ctx.strokeStyle = "#d9c4aa";
      ctx.strokeRect(x, y, column.width, rowHeight);
      ctx.fillStyle = "#3f352d";
      drawCanvasTextLines(ctx, column.value(meeting), x + 12, y + 25, column.width - 24, 20, 2);
      x += column.width;
    });
    y += rowHeight;
  });
}

function drawCanvasTextLines(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
  const lines = splitCanvasText(ctx, String(text || ""), maxWidth, maxLines);
  lines.forEach((line, index) => {
    ctx.fillText(line, x, y + index * lineHeight);
  });
}

function splitCanvasText(ctx, text, maxWidth, maxLines = 2) {
  const chars = Array.from(text);
  const lines = [];
  let current = "";

  chars.forEach((char) => {
    const next = `${current}${char}`;
    if (ctx.measureText(next).width <= maxWidth || !current) {
      current = next;
      return;
    }
    lines.push(current);
    current = char;
  });

  if (current) lines.push(current);
  if (lines.length <= maxLines) return lines;

  const clipped = lines.slice(0, maxLines);
  let last = clipped[maxLines - 1];
  while (last.length > 0 && ctx.measureText(`${last}…`).width > maxWidth) {
    last = Array.from(last).slice(0, -1).join("");
  }
  clipped[maxLines - 1] = `${last}…`;
  return clipped;
}

function getSmallGroupServiceState() {
  const ministry = state.ministries[SMALL_GROUP_MINISTRY_ID] || createSmallGroupMinistryState();
  state.ministries[SMALL_GROUP_MINISTRY_ID] = ministry;
  if (!ministry.services?.[SMALL_GROUP_SERVICE_ID]) {
    ministry.services = { ...(ministry.services || {}), [SMALL_GROUP_SERVICE_ID]: createSmallGroupServiceState() };
  }
  return ministry.services[SMALL_GROUP_SERVICE_ID];
}

function ensureSmallGroupMeetings(service) {
  const generatedDates = getSmallGroupGeneratedDates(service.settings.startMonth, service.settings.monthSpan, service.settings.meetingWeekday);
  generatedDates.forEach((dateKey) => {
    if (!service.meetings[dateKey]) {
      service.meetings[dateKey] = normalizeSmallGroupMeeting(dateKey, { date: dateKey });
    }
  });
}

function getSmallGroupGeneratedDates(startMonth, monthSpan, weekday) {
  return getMonthRange(startMonth, monthSpan).flatMap((monthKey) => getDatesForWeekdayInMonth(monthKey, weekday));
}

function getMonthRange(startMonth, monthSpan) {
  const [year, month] = startMonth.split("-").map(Number);
  return Array.from({ length: monthSpan }, (_, index) => getMonthKey(new Date(year, month - 1 + index, 1)));
}

function getDatesForWeekdayInMonth(monthKey, weekday) {
  const [year, month] = monthKey.split("-").map(Number);
  const date = new Date(year, month - 1, 1);
  const dates = [];
  while (date.getMonth() === month - 1) {
    if (date.getDay() === Number(weekday)) {
      dates.push(formatDateKey(date));
    }
    date.setDate(date.getDate() + 1);
  }
  return dates;
}

function getSmallGroupMeetingList(service) {
  const generated = new Set(getSmallGroupGeneratedDates(service.settings.startMonth, service.settings.monthSpan, service.settings.meetingWeekday));
  return Object.values(service.meetings)
    .filter((meeting) => generated.has(meeting.id))
    .sort((a, b) => a.id.localeCompare(b.id));
}

function renderSmallGroupLevelOptions(currentValue) {
  return SMALL_GROUP_LEVELS.map((level) => `<option value="${level.id}" ${level.id === currentValue ? "selected" : ""}>${level.label}</option>`).join("");
}

function getSmallGroupLevel(levelId) {
  return SMALL_GROUP_LEVELS.find((level) => level.id === levelId) || SMALL_GROUP_LEVELS[1];
}

function getSmallGroupWorkerSummary(worker) {
  const pieces = [];
  const nickname = String(worker.nickname || "").trim();
  pieces.push(`暱稱：${nickname || "未填"}`);
  pieces.push(`等級：${getSmallGroupLevel(worker.level).label}`);
  const bestLabels = getSmallGroupDutyLabels(worker.bestDuties);
  pieces.push(`擅長：${bestLabels.length ? bestLabels.join("、") : "未設定"}`);
  if (String(worker.note || "").trim()) {
    pieces.push("有備註");
  }
  return pieces.join("｜");
}

function getSmallGroupDutyLabels(dutyIds = []) {
  return unique(Array.isArray(dutyIds) ? dutyIds : [])
    .map((dutyId) => getSmallGroupDuty(dutyId)?.label)
    .filter(Boolean);
}

function hasSmallGroupBestDuty(worker, dutyId) {
  return Array.isArray(worker?.bestDuties) && worker.bestDuties.includes(dutyId);
}

function hasSmallGroupWeakDuty(worker, dutyId) {
  return Array.isArray(worker?.weakDuties) && worker.weakDuties.includes(dutyId);
}

function canSmallGroupWorkerServeDuty(worker, dutyId, options = {}) {
  if (!worker || !getSmallGroupDuty(dutyId)) return false;
  const level = getSmallGroupLevel(worker.level).id;
  if (SMALL_GROUP_LEVEL_DUTY_RULES[level]?.includes(dutyId)) {
    return true;
  }
  return dutyId === "worship" && options.allowWorshipFallback && level === "regular";
}

function getSmallGroupLevelDutyLabels(levelId) {
  const level = getSmallGroupLevel(levelId);
  return getSmallGroupDutyLabels(SMALL_GROUP_LEVEL_DUTY_RULES[level.id] || []);
}

function renderSmallGroupDutyCheckboxes(currentValues, workerId, kind) {
  const selectedValues = new Set(Array.isArray(currentValues) ? currentValues : []);
  const dataName = kind === "weak" ? "data-small-group-worker-weak" : "data-small-group-worker-best";
  return SMALL_GROUP_DUTIES.map((duty) => `
    <label class="checkbox-line">
      <input type="checkbox" ${dataName}="${escapeAttribute(workerId)}" data-duty-id="${duty.id}" ${selectedValues.has(duty.id) ? "checked" : ""} />
      <span>${duty.label}</span>
    </label>
  `).join("");
}

function renderSmallGroupWorkerOptions(service, currentValue = "", dutyId = "") {
  return state.volunteers
    .filter((worker) => {
      return worker.id === currentValue || canSmallGroupWorkerServeDuty(worker, dutyId, { allowWorshipFallback: true });
    })
    .map((worker) => {
      const isAllowed = canSmallGroupWorkerServeDuty(worker, dutyId, { allowWorshipFallback: true });
      const suffix = isAllowed ? "" : "（等級不符）";
      return `<option value="${escapeAttribute(worker.id)}" ${worker.id === currentValue ? "selected" : ""} ${isAllowed ? "" : "disabled"}>${escapeHtml(getDisplayName(worker) + suffix)}</option>`;
    })
    .join("");
}

function getSmallGroupDuty(dutyId) {
  return SMALL_GROUP_DUTIES.find((duty) => duty.id === dutyId) || null;
}

function getSmallGroupAssignmentName(workerId) {
  return workerId ? getWorkerName(workerId) : "";
}

function formatSmallGroupDate(dateKey) {
  const [, month, day] = dateKey.split("-").map(Number);
  return `${month}/${day}`;
}

function formatSmallGroupDateShort(dateKey) {
  const [, month, day] = dateKey.split("-").map(Number);
  return `${month}/${day}`;
}

function getWeekdayAnnouncementLabel(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return WEEKDAY_OPTIONS.find((item) => item.id === date.getDay())?.announcement || "";
}

function formatAnnouncementTime(timeValue) {
  if (!timeValue) return "待填寫";
  const [hour, minute] = timeValue.split(":").map(Number);
  const period = hour >= 12 ? "pm" : "am";
  const displayHour = hour > 12 ? hour - 12 : hour;
  return `${period}${displayHour}:${pad(minute || 0)}`;
}

function formatAnnouncementTimeRange(startTime, endTime) {
  if (!startTime || !endTime) {
    return "待填寫";
  }
  const start = parseTimeParts(startTime);
  const end = parseTimeParts(endTime);
  if (!start || !end) {
    return "待填寫";
  }
  const startText = `${start.period}${start.hour}:${pad(start.minute)}`;
  const endText = start.period === end.period
    ? `${end.hour}:${pad(end.minute)}`
    : `${end.period}${end.hour}:${pad(end.minute)}`;
  return `${startText}～${endText}`;
}

function parseTimeParts(timeValue) {
  const [rawHour, rawMinute] = String(timeValue || "").split(":").map(Number);
  if (!Number.isFinite(rawHour) || !Number.isFinite(rawMinute)) {
    return null;
  }
  return {
    period: rawHour >= 12 ? "pm" : "am",
    hour: rawHour > 12 ? rawHour - 12 : rawHour,
    minute: rawMinute,
  };
}

function addVolunteer(event) {
  event.preventDefault();
  const name = elements.volunteerName.value.trim();
  if (!name) {
    showToast("請輸入同工姓名");
    return;
  }
  if (state.volunteers.some((worker) => worker.name === name)) {
    showToast("已有同名同工，請加上暱稱或姓氏");
    return;
  }
  const identity = getWorkerIdentity(elements.volunteerType.value)?.id || "regular";
  const specialType = identity === "special" ? getSpecialType(elements.volunteerSpecialType.value)?.id || "pastor" : "";

  const worker = normalizeWorker({
    id: createId(),
    name,
    nickname: elements.volunteerNickname.value,
    note: elements.volunteerNote.value,
    level: elements.volunteerLevel.value,
    identity,
    specialType,
    type: identity === "special" ? specialType : identity,
    mostSenior: elements.volunteerMostSenior.checked,
    bestDuties: getCheckedBestDuties(elements.volunteerBestDuties),
    weakDuties: getCheckedDuties(elements.volunteerWeakDuties),
    hostCandidate: elements.volunteerHostCandidate.checked,
    reservedMainRole: elements.volunteerReservedRole.value,
    monthlyServiceCount: elements.volunteerMonthlyCount.value,
    fixedMainRole: elements.fixedDutyEnabled.checked ? elements.volunteerFixedRole.value : "",
    fixedGroup: elements.fixedGroupEnabled.checked ? elements.volunteerFixedGroup.value : "",
    leadGroups: [],
    supportGroups: [],
  });

  state.volunteers.push(worker);
  elements.volunteerForm.reset();
  expandedWorkerId = "";
  latestNotices = [];
  render();
  showToast("同工已新增");
}

function updateRosterFilters(event) {
  if (event.target === elements.workerSearch) {
    rosterSearchTerm = elements.workerSearch.value;
  }
  if (event.target === elements.levelFilter) {
    rosterLevelFilter = elements.levelFilter.value;
  }
  if (event.target === elements.typeFilter) {
    rosterTypeFilter = elements.typeFilter.value;
  }
  expandedWorkerId = "";
  render();
}

function toggleWorkerAccordion(event) {
  const button = event.target.closest("[data-toggle-worker]");
  if (!button) {
    return;
  }

  const workerId = button.dataset.toggleWorker;
  expandedWorkerId = expandedWorkerId === workerId ? "" : workerId;
  render();
}

function updateWorkerSettings(event) {
  const target = event.target;
  const workerId = target.dataset.workerNickname || target.dataset.workerNote || target.dataset.workerLevel || target.dataset.workerIdentity || target.dataset.workerSpecialType || target.dataset.workerType || target.dataset.workerHostCandidate || target.dataset.workerMostSenior || target.dataset.workerReservedRole || target.dataset.workerMonthlyCount || target.dataset.workerBestDuty || target.dataset.workerWeakDuty || target.dataset.workerFixedDutyEnabled || target.dataset.workerFixedRole || target.dataset.workerFixedGroupEnabled || target.dataset.workerFixedGroup || target.dataset.workerLeadGroup || target.dataset.workerSupportGroup;
  if (!workerId) {
    return;
  }

  const worker = getWorker(workerId);
  if (!worker) {
    return;
  }

  if (target.dataset.workerLevel) {
    worker.level = target.value;
  }
  if (target.dataset.workerNickname) {
    worker.nickname = target.value;
  }
  if (target.dataset.workerNote) {
    worker.note = target.value;
  }
  if (target.dataset.workerIdentity) {
    worker.identity = target.value;
    worker.specialType = target.value === "special" ? worker.specialType || "pastor" : "";
    worker.type = target.value === "special" ? worker.specialType : target.value;
  }
  if (target.dataset.workerSpecialType) {
    worker.identity = "special";
    worker.specialType = target.value;
    worker.type = target.value;
  }
  if (target.dataset.workerType) {
    worker.identity = normalizeWorkerIdentity({ type: target.value });
    worker.specialType = normalizeSpecialType({ type: target.value }, worker.identity);
    worker.type = worker.identity === "special" ? worker.specialType : worker.identity;
  }
  if (target.dataset.workerHostCandidate) {
    worker.hostCandidate = target.checked;
  }
  if (target.dataset.workerMostSenior) {
    worker.mostSenior = target.checked;
  }
  if (target.dataset.workerReservedRole) {
    worker.reservedMainRole = target.value;
  }
  if (target.dataset.workerMonthlyCount) {
    worker.monthlyServiceCount = target.value;
  }
  if (target.dataset.workerBestDuty) {
    const dutyId = target.dataset.dutyId;
    worker.bestDuties = target.checked
      ? unique([...worker.bestDuties, dutyId])
      : worker.bestDuties.filter((id) => id !== dutyId);
  }
  if (target.dataset.workerWeakDuty) {
    const dutyId = target.dataset.dutyId;
    worker.weakDuties = target.checked
      ? unique([...(worker.weakDuties || []), dutyId])
      : (worker.weakDuties || []).filter((id) => id !== dutyId);
  }
  if (target.dataset.workerFixedDutyEnabled) {
    worker.fixedMainRole = target.checked ? getFirstEligibleMainRole(worker.level) : "";
  }
  if (target.dataset.workerFixedRole) {
    worker.fixedMainRole = target.value;
  }
  if (target.dataset.workerFixedGroupEnabled) {
    worker.fixedGroup = target.checked ? GROUPS[0].id : "";
  }
  if (target.dataset.workerFixedGroup) {
    worker.fixedGroup = target.value;
  }
  if (target.dataset.workerLeadGroup) {
    const groupId = target.dataset.leadGroup;
    worker.leadGroups = target.checked
      ? unique([...worker.leadGroups, groupId])
      : worker.leadGroups.filter((id) => id !== groupId);
  }
  if (target.dataset.workerSupportGroup) {
    const groupId = target.dataset.supportGroup;
    worker.supportGroups = target.checked
      ? unique([...worker.supportGroups, groupId])
      : worker.supportGroups.filter((id) => id !== groupId);
  }

  const normalized = normalizeWorker(worker);
  Object.assign(worker, normalized);
  latestNotices = clearInvalidAssignmentsForWorker(worker.id);
  expandedWorkerId = "";
  render();
}

function moveVolunteer(event) {
  const button = event.target.closest("[data-move-worker]");
  if (!button) {
    return;
  }

  const index = state.volunteers.findIndex((worker) => worker.id === button.dataset.moveWorker);
  const direction = button.dataset.moveDirection === "up" ? -1 : 1;
  const targetIndex = index + direction;
  if (index < 0 || targetIndex < 0 || targetIndex >= state.volunteers.length) {
    return;
  }

  const [worker] = state.volunteers.splice(index, 1);
  state.volunteers.splice(targetIndex, 0, worker);
  expandedWorkerId = "";
  latestNotices = [];
  render();
  showToast("同工順序已更新");
}

function deleteVolunteer(event) {
  const button = event.target.closest("[data-delete-worker]");
  if (!button) {
    return;
  }

  const worker = getWorker(button.dataset.deleteWorker);
  if (!worker) {
    return;
  }

  if (!window.confirm(`確定要刪除「${worker.name}」嗎？相關排班會一併清除。`)) {
    return;
  }

  const schedulesToClean = isFullTimeWorker(worker)
    ? Object.values(getActiveMinistryState().services || {}).flatMap((service) => Object.values(service.schedules || {}))
    : Object.values(state.schedules);
  state.volunteers = state.volunteers.filter((item) => item.id !== worker.id);
  schedulesToClean.forEach((schedule) => {
    schedule.available = schedule.available.filter((id) => id !== worker.id);
    removeAssignmentsForWorker(schedule, worker.id);
    schedule.savedAt = null;
  });
  expandedWorkerId = "";
  latestNotices = [];
  render();
  showToast("同工已刪除");
}

function updateMonthAvailability(event) {
  const input = event.target.closest("[data-available-worker]");
  if (!input) {
    return;
  }

  const schedule = ensureSchedule(input.dataset.availableWeek);
  const workerId = input.dataset.availableWorker;
  if (input.checked) {
    schedule.available = unique([...schedule.available, workerId]);
  } else {
    schedule.available = schedule.available.filter((id) => id !== workerId);
    removeAssignmentsForWorker(schedule, workerId);
  }
  schedule.savedAt = null;
  latestNotices = [];
  render();
}

function toggleWorkerMonthAvailability(event) {
  const button = event.target.closest("[data-toggle-availability-worker]");
  if (!button) {
    return;
  }

  const workerId = button.dataset.toggleAvailabilityWorker;
  const weeks = getSundaysOfMonth(selectedMonth);
  const shouldSelectAll = !weeks.every((weekId) => ensureSchedule(weekId).available.includes(workerId));

  weeks.forEach((weekId) => {
    const schedule = ensureSchedule(weekId);
    if (shouldSelectAll) {
      schedule.available = unique([...schedule.available, workerId]);
    } else {
      schedule.available = schedule.available.filter((id) => id !== workerId);
      removeAssignmentsForWorker(schedule, workerId);
    }
    schedule.savedAt = null;
  });

  latestNotices = [];
  render();
  showToast(shouldSelectAll ? "已全選此同工本月能服事" : "已取消此同工本月能服事");
}

function setMonthAvailability(mode) {
  const weeks = getSundaysOfMonth(selectedMonth);
  weeks.forEach((weekId) => {
    const schedule = ensureSchedule(weekId);
    schedule.available = mode === "all" ? state.volunteers.map((worker) => worker.id) : [];
    pruneAssignmentsByAvailability(schedule);
    schedule.savedAt = null;
  });
  latestNotices = [];
  render();
  showToast(mode === "all" ? "本月能服事已全選" : "本月能服事已清空");
}

function updateLeadPool(event) {
  const input = event.target.closest("[data-pool-worker]");
  if (!input) {
    return;
  }

  const worker = getWorker(input.dataset.poolWorker);
  const groupId = input.dataset.poolGroup;
  const poolRole = input.dataset.poolRole === "support" ? "support" : "lead";
  const dutyId = poolRole === "lead" ? "groupLead" : "groupSupport";
  if (!worker || !getGroup(groupId) || !canDoWorker(worker, dutyId) || !canUseGroupPool(worker, groupId)) {
    return;
  }

  if (poolRole === "lead") {
    worker.leadGroups = input.checked
      ? unique([...worker.leadGroups, groupId])
      : worker.leadGroups.filter((id) => id !== groupId);
  } else {
    worker.supportGroups = input.checked
      ? unique([...worker.supportGroups, groupId])
      : worker.supportGroups.filter((id) => id !== groupId);
  }
  latestNotices = [];
  render();
}

function changeWeek(event) {
  const button = event.target.closest("[data-week-id]");
  if (!button) {
    return;
  }

  selectedWeekId = button.dataset.weekId;
  currentView = "manage";
  latestNotices = [];
  render();
}

function updateMainAssignment(event) {
  const select = event.target.closest("[data-main-role]");
  if (!select) {
    return;
  }

  const roleId = select.dataset.mainRole;
  const workerId = select.value;
  const slot = Number(select.dataset.mainSlot || 0);
  const schedule = ensureSchedule(selectedWeekId);
  const previousValue = getMainAssignmentSlotValue(schedule, roleId, slot);

  if (!workerId) {
    clearMainAssignmentSlot(schedule, roleId, slot);
    schedule.savedAt = null;
    latestNotices = [];
    render();
    return;
  }

  clearMainAssignmentSlot(schedule, roleId, slot);
  const result = canAssignMain(workerId, roleId, selectedWeekId, state.schedules);
  if (!result.ok) {
    setMainAssignmentSlot(schedule, roleId, previousValue, slot);
    latestNotices = [result.message];
    render();
    return;
  }

  setMainAssignmentSlot(schedule, roleId, workerId, slot);
  schedule.savedAt = null;
  latestNotices = result.message ? [result.message] : [];
  render();
}

function updateGroupAssignment(event) {
  const select = event.target.closest("[data-group-class], [data-group-role]");
  if (!select) {
    return;
  }

  const row = select.closest("[data-group-row]");
  const workerId = row?.dataset.groupRow;
  const worker = getWorker(workerId);
  const schedule = ensureSchedule(selectedWeekId);
  if (!worker || !schedule.available.includes(workerId)) {
    return;
  }

  const classId = row.querySelector("[data-group-class]").value;
  const role = row.querySelector("[data-group-role]").value === "lead" ? "lead" : "support";

  if (!classId) {
    delete schedule.assignments.groups[workerId];
  } else {
    schedule.assignments.groups[workerId] = { classId, role: role === "lead" && canDoWorker(worker, "groupLead") ? "lead" : "support" };
  }

  schedule.savedAt = null;
  latestNotices = classId ? [getWeakDutyWarning(worker, role === "lead" ? "groupLead" : "groupSupport")].filter(Boolean) : [];
  render();
}

function autoScheduleMonth() {
  if (state.volunteers.length === 0) {
    latestNotices = ["請先新增同工，再進行本月自動排班"];
    render();
    return;
  }

  const weeks = getSundaysOfMonth(selectedMonth);
  const nextSchedules = cloneSchedules(state.schedules);
  const notices = [];

  weeks.forEach((weekId) => {
    const schedule = ensureScheduleIn(nextSchedules, weekId);
    schedule.assignments = createEmptyAssignments();
    schedule.available = schedule.available.filter((workerId) => Boolean(getWorker(workerId)));
    schedule.savedAt = null;
  });

  assignPastorReservedRoles(weeks, nextSchedules, notices);

  weeks.forEach((weekId) => {
    const schedule = ensureScheduleIn(nextSchedules, weekId);
    if (schedule.available.length === 0) {
      notices.push(`${formatZhDate(weekId)} 尚未勾選能服事同工`);
      return;
    }

    assignFixedMainRoles(weekId, nextSchedules, notices);
    MAIN_ROLES.forEach((role) => {
      if (isMainRoleAtCapacity(schedule, role.id)) {
        return;
      }

      while (!isMainRoleAtCapacity(schedule, role.id)) {
        const candidate = chooseMainCandidate(role.id, weekId, nextSchedules);
        if (!candidate) {
          break;
        }
        addMainAssignment(schedule, role.id, candidate.id);
        addMainAssignmentNoticeIfNeeded(candidate, role.id, weekId, nextSchedules, notices);

        if (!isMultiMainRole(role.id)) {
          break;
        }
      }
    });
    assignGroupTeachers(weekId, nextSchedules, notices);
  });

  getActiveServiceState().schedules = nextSchedules;
  state.schedules = nextSchedules;
  addBestDutyNotices(selectedMonth, state.schedules, notices);
  addWorshipToMessageNotices(selectedMonth, state.schedules, notices);
  latestNotices = unique(notices);
  currentView = "sheet";
  render();
  scrollToSheetView();
  showToast(latestNotices.length ? "本月排班完成，摘要中有待確認內容" : "本月排班已完成");
}

function saveCurrentWeekRecord() {
  ensureSchedule(selectedWeekId).savedAt = new Date().toISOString();
  latestNotices = [];
  render();
  showToast("本週排班已儲存");
}

function clearCurrentWeek() {
  const schedule = ensureSchedule(selectedWeekId);
  schedule.assignments = createEmptyAssignments();
  schedule.savedAt = null;
  latestNotices = [];
  render();
  showToast("本週排班已清空");
}

function showUpgradeDialog() {
  elements.upgradeDialog.classList.remove("hidden");
}

function hideUpgradeDialog() {
  elements.upgradeDialog.classList.add("hidden");
}

function closeUpgradeDialogFromBackdrop(event) {
  if (event.target === elements.upgradeDialog) {
    hideUpgradeDialog();
  }
}

function performAnnualUpgrade() {
  const backup = createUpgradeBackup();
  const movedSets = Object.fromEntries(GROUPS.map((group) => [group.id, new Set()]));

  state.volunteers.forEach((worker) => {
    if (worker.fixedGroup && GROUP_ROTATION[worker.fixedGroup]) {
      movedSets[worker.fixedGroup].add(worker.id);
      worker.fixedGroup = GROUP_ROTATION[worker.fixedGroup];
    }

    worker.leadGroups.forEach((groupId) => {
      if (GROUP_ROTATION[groupId]) movedSets[groupId].add(worker.id);
    });
    worker.supportGroups.forEach((groupId) => {
      if (GROUP_ROTATION[groupId]) movedSets[groupId].add(worker.id);
    });

    worker.leadGroups = rotateGroupIds(worker.leadGroups);
    worker.supportGroups = rotateGroupIds(worker.supportGroups);
    Object.assign(worker, normalizeWorker(worker));
  });

  const summaryLines = GROUPS.map((group) => `${group.label} → ${getGroup(GROUP_ROTATION[group.id]).label}：${movedSets[group.id].size} 位老師`);
  latestNotices = [`年度升級完成：備份 ${backup.name}`, ...summaryLines];
  hideUpgradeDialog();
  render();
  showToast("年度升級完成");
}

function restoreLatestUpgradeBackup() {
  const backup = state.upgradeBackups?.[0];
  if (!backup) {
    latestNotices = ["目前沒有可還原的年度升級前備份"];
    render();
    return;
  }

  const rawBackup = localStorage.getItem(backup.storageKey);
  if (!rawBackup) {
    latestNotices = [`找不到備份資料：${backup.name}`];
    render();
    return;
  }

  try {
    const backupState = normalizeState(JSON.parse(rawBackup));
    const backupWorkers = new Map(backupState.volunteers.map((worker) => [worker.id, worker]));
    state.volunteers.forEach((worker) => {
      const previous = backupWorkers.get(worker.id);
      if (!previous) return;
      worker.fixedGroup = previous.fixedGroup;
      worker.leadGroups = [...previous.leadGroups];
      worker.supportGroups = [...previous.supportGroups];
      Object.assign(worker, normalizeWorker(worker));
    });
    latestNotices = [`已還原升級前備份：${backup.name}`];
    render();
    showToast("已還原升級前備份");
  } catch {
    latestNotices = [`備份資料無法讀取：${backup.name}`];
    render();
  }
}

function createUpgradeBackup() {
  syncActiveServiceState();
  const name = `before-upgrade-${formatBackupTimestamp(new Date())}`;
  const storageKey = `${UPGRADE_BACKUP_PREFIX}${name}`;
  const snapshot = JSON.parse(JSON.stringify(state));
  localStorage.setItem(storageKey, JSON.stringify(snapshot));
  const backup = { name, storageKey, createdAt: new Date().toISOString() };
  state.upgradeBackups = [backup, ...(state.upgradeBackups || [])].slice(0, 10);
  return backup;
}

function rotateGroupIds(groupIds) {
  return unique(groupIds.map((groupId) => GROUP_ROTATION[groupId] || groupId).filter((groupId) => getGroup(groupId)));
}

function assignPastorReservedRoles(weeks, schedules, notices) {
  const pastors = state.volunteers.filter((worker) => getEffectiveWorkerType(worker) === "pastor" && worker.reservedMainRole && worker.monthlyServiceCount > 0);

  pastors.forEach((worker) => {
    const role = getMainRole(worker.reservedMainRole);
    if (!role || !canDoWorker(worker, role.id)) {
      notices.push(`${getDisplayName(worker)} 的區牧預留職務不符合等級資格`);
      return;
    }

    const candidateWeeks = [...weeks].sort((a, b) => {
      const availableDiff = Number(ensureScheduleIn(schedules, b).available.includes(worker.id)) - Number(ensureScheduleIn(schedules, a).available.includes(worker.id));
      return availableDiff || a.localeCompare(b);
    });
    let assignedCount = 0;

    candidateWeeks.forEach((weekId) => {
      if (assignedCount >= worker.monthlyServiceCount) {
        return;
      }

      const schedule = ensureScheduleIn(schedules, weekId);
      if (isMainRoleAtCapacity(schedule, role.id)) {
        return;
      }

      schedule.available = unique([...schedule.available, worker.id]);
      addMainAssignment(schedule, role.id, worker.id);
      assignedCount += 1;
    });

    if (assignedCount < worker.monthlyServiceCount) {
      notices.push(`${getDisplayName(worker)} 區牧預留 ${role.label} ${worker.monthlyServiceCount} 次，目前只預留 ${assignedCount} 次`);
    }
  });
}

function assignFixedMainRoles(weekId, schedules, notices) {
  const schedule = ensureScheduleIn(schedules, weekId);
  MAIN_ROLES.forEach((role) => {
    const fixedWorkers = state.volunteers.filter((worker) => worker.fixedMainRole === role.id);
    let assignedCount = 0;

    while (!isMainRoleAtCapacity(schedule, role.id)) {
      const assigned = new Set(getAllMainAssignmentIds(schedule));
      const baseCandidates = fixedWorkers.filter((worker) => schedule.available.includes(worker.id) && canAutoAssignDuty(worker, role.id) && !assigned.has(worker.id));
      const strictCandidates = baseCandidates.filter((worker) => !getMainAssignmentIssue(worker.id, role.id, weekId, schedules, { auto: true, allowHostRepeat: false }));
      const candidates = strictCandidates.length
        ? strictCandidates
        : role.id === "host"
          ? baseCandidates.filter((worker) => !getMainAssignmentIssue(worker.id, role.id, weekId, schedules, { auto: true, allowHostRepeat: true }))
          : [];

      if (fixedWorkers.length > 0 && candidates.length === 0 && assignedCount === 0 && !hasMainAssignment(schedule, role.id)) {
        const issue = baseCandidates
          .map((worker) => getMainAssignmentIssue(worker.id, role.id, weekId, schedules, { auto: true, allowHostRepeat: false }))
          .find(Boolean);
        notices.push(`${formatZhDate(weekId)} ${role.label} 有固定同工，但${issue || "本週沒有可用固定人選"}`);
      }
      if (candidates.length === 0) {
        break;
      }

      candidates.sort((a, b) => compareMainCandidates(a, b, role.id, weekId, schedules));
      addMainAssignment(schedule, role.id, candidates[0].id);
      assignedCount += 1;
      addMainAssignmentNoticeIfNeeded(candidates[0], role.id, weekId, schedules, notices);
      if (candidates.length > 1 && !isMultiMainRole(role.id)) {
        notices.push(`${formatZhDate(weekId)} ${role.label} 有多位固定同工，已安排 ${getDisplayName(candidates[0])}`);
      }
      if (!isMultiMainRole(role.id)) {
        break;
      }
    }
  });
}

function assignGroupTeachers(weekId, schedules, notices) {
  const schedule = ensureScheduleIn(schedules, weekId);
  schedule.assignments.groups = {};
  const workers = getAvailableWorkers(schedule).filter((worker) => canAutoAssignGroupTeacher(worker));

  workers.filter((worker) => worker.fixedGroup && canAutoAssignDuty(worker, "groupSupport")).forEach((worker) => {
    schedule.assignments.groups[worker.id] = { classId: worker.fixedGroup, role: "support" };
  });

  GROUPS.forEach((group) => {
    const candidates = getGroupLeadCandidates(group.id, workers, schedule);
    if (candidates.length === 0) {
      notices.push(`${formatZhDate(weekId)} ${group.label} 缺小組主責`);
      return;
    }

    const rotationCandidates = candidates.filter((worker) => !wasGroupLeadPreviousWeek(worker.id, group.id, weekId, schedules));
    const sortableCandidates = rotationCandidates.length ? rotationCandidates : candidates;
    sortableCandidates.sort((a, b) => compareGroupLeadCandidates(a, b, group.id, weekId, schedules));
    const chosen = sortableCandidates[0];
    const previous = schedule.assignments.groups[chosen.id];
    schedule.assignments.groups[chosen.id] = { classId: group.id, role: "lead" };
    if (!rotationCandidates.length && wasGroupLeadPreviousWeek(chosen.id, group.id, weekId, schedules)) {
      notices.push(`${group.label}主責人力不足，${getDisplayName(chosen)}連續擔任主責。`);
    }
    if (previous && previous.classId !== group.id) {
      notices.push(`${formatZhDate(weekId)} ${getDisplayName(chosen)} 跨班支援 ${group.label} 主責`);
    }
    if (!chosen.leadGroups.includes(group.id)) {
      notices.push(`${formatZhDate(weekId)} ${group.label} 主責群無可用人選，已由 ${getDisplayName(chosen)} 暫代`);
    }
    addDutyAssignmentNoticeIfNeeded(chosen, "groupLead", notices);
  });

  GROUPS.forEach((group) => {
    if (getGroupRoleCount(schedule, group.id, "support") >= 1) {
      return;
    }

    const candidates = getGroupSupportCandidates(group.id, workers, schedule);
    if (candidates.length === 0) {
      notices.push(`${formatZhDate(weekId)} ${group.label} 缺小組配搭`);
      return;
    }

    candidates.sort((a, b) => compareSupportCandidates(a, b, weekId, schedules));
    const chosen = candidates[0];
    const previous = schedule.assignments.groups[chosen.id];
    schedule.assignments.groups[chosen.id] = { classId: group.id, role: "support" };
    if (previous && previous.classId !== group.id) {
      notices.push(`${formatZhDate(weekId)} ${getDisplayName(chosen)} 跨班支援 ${group.label} 配搭`);
    }
    addDutyAssignmentNoticeIfNeeded(chosen, "groupSupport", notices);
  });

  workers.filter((worker) => !schedule.assignments.groups[worker.id] && canAutoAssignDuty(worker, "groupSupport")).forEach((worker) => {
    const target = worker.fixedGroup ? getGroup(worker.fixedGroup) : [...GROUPS].sort((a, b) => getGroupTeacherCount(schedule, a.id) - getGroupTeacherCount(schedule, b.id))[0];
    schedule.assignments.groups[worker.id] = { classId: target.id, role: "support" };
    addDutyAssignmentNoticeIfNeeded(worker, "groupSupport", notices);
  });
}

function getGroupLeadCandidates(groupId, workers, schedule) {
  const sameClassFixedPool = workers.filter((worker) => schedule.assignments.groups[worker.id]?.classId === groupId && worker.leadGroups.includes(groupId) && canAutoAssignDuty(worker, "groupLead"));
  if (sameClassFixedPool.length) return sameClassFixedPool;

  const fixedClassPool = workers.filter((worker) => !schedule.assignments.groups[worker.id] && worker.fixedGroup === groupId && worker.leadGroups.includes(groupId) && canAutoAssignDuty(worker, "groupLead"));
  if (fixedClassPool.length) return fixedClassPool;

  const unassignedPool = workers.filter((worker) => !schedule.assignments.groups[worker.id] && !worker.fixedGroup && worker.leadGroups.includes(groupId) && canAutoAssignDuty(worker, "groupLead"));
  if (unassignedPool.length) return unassignedPool;

  const sameClassAnyLead = workers.filter((worker) => schedule.assignments.groups[worker.id]?.classId === groupId && canAutoAssignDuty(worker, "groupLead"));
  if (sameClassAnyLead.length) return sameClassAnyLead;

  const fixedClassAnyLead = workers.filter((worker) => !schedule.assignments.groups[worker.id] && worker.fixedGroup === groupId && canAutoAssignDuty(worker, "groupLead"));
  if (fixedClassAnyLead.length) return fixedClassAnyLead;

  const unassignedAnyLead = workers.filter((worker) => !schedule.assignments.groups[worker.id] && !worker.fixedGroup && canAutoAssignDuty(worker, "groupLead"));
  if (unassignedAnyLead.length) return unassignedAnyLead;

  return workers.filter((worker) => {
    const assignment = schedule.assignments.groups[worker.id];
    return assignment?.role === "support" && assignment.classId !== groupId && canAutoAssignDuty(worker, "groupLead") && canMoveGroupSupport(schedule, assignment.classId);
  });
}

function getGroupSupportCandidates(groupId, workers, schedule) {
  const fixedSamePool = workers.filter((worker) => !schedule.assignments.groups[worker.id] && worker.fixedGroup === groupId && worker.supportGroups.includes(groupId) && canAutoAssignDuty(worker, "groupSupport"));
  if (fixedSamePool.length) return fixedSamePool;

  const noFixedPool = workers.filter((worker) => !schedule.assignments.groups[worker.id] && !worker.fixedGroup && worker.supportGroups.includes(groupId) && canAutoAssignDuty(worker, "groupSupport"));
  if (noFixedPool.length) return noFixedPool;

  const fixedSame = workers.filter((worker) => !schedule.assignments.groups[worker.id] && worker.fixedGroup === groupId && canAutoAssignDuty(worker, "groupSupport"));
  if (fixedSame.length) return fixedSame;

  const noFixed = workers.filter((worker) => !schedule.assignments.groups[worker.id] && !worker.fixedGroup && canAutoAssignDuty(worker, "groupSupport"));
  if (noFixed.length) return noFixed;

  const fixedOtherPool = workers.filter((worker) => !schedule.assignments.groups[worker.id] && worker.fixedGroup !== groupId && worker.supportGroups.includes(groupId) && canAutoAssignDuty(worker, "groupSupport"));
  if (fixedOtherPool.length) return fixedOtherPool;

  const fixedOther = workers.filter((worker) => !schedule.assignments.groups[worker.id] && worker.fixedGroup !== groupId && canAutoAssignDuty(worker, "groupSupport"));
  if (fixedOther.length) return fixedOther;

  return workers.filter((worker) => {
    const assignment = schedule.assignments.groups[worker.id];
    return assignment?.role === "support" && assignment.classId !== groupId && canAutoAssignDuty(worker, "groupSupport") && canMoveGroupSupport(schedule, assignment.classId);
  });
}

function canMoveGroupSupport(schedule, groupId) {
  return getGroupTeacherCount(schedule, groupId) > 2 && getGroupRoleCount(schedule, groupId, "support") > 1;
}

function chooseMainCandidate(roleId, weekId, schedules) {
  const schedule = ensureScheduleIn(schedules, weekId);
  const assigned = new Set(getAllMainAssignmentIds(schedule));
  const baseCandidates = state.volunteers.filter((worker) => {
    return schedule.available.includes(worker.id) && canAutoAssignDuty(worker, roleId) && !assigned.has(worker.id) && !worker.fixedMainRole;
  });
  const strictCandidates = baseCandidates.filter((worker) => !getMainAssignmentIssue(worker.id, roleId, weekId, schedules, { auto: true, allowHostRepeat: false }));
  const candidates = strictCandidates.length
    ? strictCandidates
    : roleId === "host"
      ? baseCandidates.filter((worker) => !getMainAssignmentIssue(worker.id, roleId, weekId, schedules, { auto: true, allowHostRepeat: true }))
    : [];

  candidates.sort((a, b) => compareMainCandidates(a, b, roleId, weekId, schedules));
  return candidates[0] || null;
}

function canAssignMain(workerId, roleId, weekId, schedules) {
  const issue = getMainAssignmentIssue(workerId, roleId, weekId, schedules, { auto: false, allowHostRepeat: true });
  if (issue) return { ok: false, message: issue };
  const worker = getWorker(workerId);
  const warning = getMainAssignmentWarning(worker, roleId, weekId, schedules);
  return warning ? { ok: true, message: warning } : { ok: true };
}

function getMainAssignmentIssue(workerId, roleId, weekId, schedules, options = {}) {
  const worker = getWorker(workerId);
  const role = getMainRole(roleId);
  const schedule = ensureScheduleIn(schedules, weekId);
  if (!worker || !role) return "找不到這位同工或職務";
  if (!schedule.available.includes(workerId)) return `${getDisplayName(worker)} 本週未勾選能服事`;
  if (options.auto ? !canAutoAssignDuty(worker, roleId) : !canDoWorker(worker, roleId)) return `${getDisplayName(worker)} 的等級或設定不能擔任「${role.label}」`;
  if (!options.auto && worker.fixedMainRole && worker.fixedMainRole !== roleId) return `${getDisplayName(worker)} 已固定「${getMainRole(worker.fixedMainRole).label}」`;

  const duplicatedRole = MAIN_ROLES.find((item) => {
    const assignedIds = getMainAssignmentIds(schedule, item.id);
    if (!assignedIds.includes(workerId)) {
      return false;
    }
    return item.id !== roleId || assignedIds.filter((id) => id === workerId).length > 1;
  });
  if (duplicatedRole) return `${getDisplayName(worker)} 已安排「${duplicatedRole.label}」，主要職務不可重複`;

  const monthKey = weekId.slice(0, 7);
  const countOptions = { excludeWeekId: weekId, excludeRoleId: roleId };
  if (isWorshipRole(roleId) && hasAnyMainRoleInMonth(workerId, MESSAGE_ROLE_IDS, monthKey, schedules, countOptions)) {
    return `${getDisplayName(worker)} 本月已安排信息服事，不能再安排敬拜`;
  }
  if (isMessageRole(roleId) && hasAnyMainRoleInMonth(workerId, WORSHIP_ROLE_IDS, monthKey, schedules, countOptions)) {
    return `${getDisplayName(worker)} 本月已安排敬拜服事，不能再安排信息`;
  }
  if (roleId === "tech" && countMainRoleInMonth(workerId, "tech", monthKey, schedules, countOptions) > 0) {
    return `${getDisplayName(worker)} 本月已擔任控台事工，控台同工同月不重複安排`;
  }
  if (isImportantRole(roleId) && countMainRoleInMonth(workerId, roleId, monthKey, schedules, countOptions) > 0 && !(roleId === "host" && options.allowHostRepeat)) {
    return `${getDisplayName(worker)} 本月已擔任「${role.label}」，重要服事同月不可重複`;
  }

  return "";
}

function getMainAssignmentWarning(worker, roleId, weekId, schedules) {
  if (!worker) {
    return "";
  }
  const warnings = [];
  const monthKey = weekId.slice(0, 7);
  if (roleId === "host") {
    const previousHostCount = countMainRoleInMonth(worker.id, "host", monthKey, schedules, { excludeWeekId: weekId, excludeRoleId: "host" });
    if (previousHostCount > 0) {
      warnings.push(`報告司會候選人不足，${getDisplayName(worker)}本月重複擔任報告司會。`);
    }
  }
  const weakWarning = getWeakDutyWarning(worker, roleId);
  if (weakWarning) {
    warnings.push(weakWarning);
  }
  return warnings.join(" ");
}

function addMainAssignmentNoticeIfNeeded(worker, roleId, weekId, schedules, notices) {
  const warning = getMainAssignmentWarning(worker, roleId, weekId, schedules);
  if (warning) {
    notices.push(warning);
  }
}

function addDutyAssignmentNoticeIfNeeded(worker, dutyId, notices) {
  const warning = getWeakDutyWarning(worker, dutyId);
  if (warning) {
    notices.push(warning);
  }
}

function addBestDutyNotices(monthKey, schedules, notices) {
  state.volunteers.forEach((worker) => {
    const bestDuties = getBestDutyIds(worker);
    if (bestDuties.length === 0 || !hasAvailableWeekInMonth(worker.id, monthKey, schedules)) {
      return;
    }
    if (bestDuties.some((dutyId) => isAssignedToDutyInMonth(worker.id, dutyId, monthKey, schedules))) {
      return;
    }

    notices.push(`${getDisplayName(worker)} 最適合事工為${getBestDutyLabels(worker).join("、")}，本月未能安排`);
  });
}

function addWorshipToMessageNotices(monthKey, schedules, notices) {
  state.volunteers.forEach((worker) => {
    if (!isSeniorWithPreviousMonthWorship(worker, monthKey, schedules) || !hasAvailableWeekInMonth(worker.id, monthKey, schedules)) {
      return;
    }
    if (isAssignedToDutyInMonth(worker.id, "messageSupport", monthKey, schedules)) {
      return;
    }

    notices.push(`${getDisplayName(worker)} 上月有敬拜服事，本月建議安排信息配搭`);
  });
}

function isSeniorWithPreviousMonthWorship(worker, monthKey, schedules) {
  return Boolean(
    worker?.level === "senior"
      && canAutoAssignDuty(worker, "messageSupport")
      && hadWorshipInMonth(worker.id, getPreviousMonthKey(monthKey), schedules),
  );
}

function hadWorshipInMonth(workerId, monthKey, schedules) {
  return getSundaysOfMonth(monthKey).some((weekId) => {
    return getMainAssignmentIds(schedules[weekId], "worshipLead").includes(workerId)
      || getMainAssignmentIds(schedules[weekId], "worshipSupport").includes(workerId);
  });
}

function countMainRoleInMonth(workerId, roleId, monthKey, schedules, options = {}) {
  return getSundaysOfMonth(monthKey).filter((weekId) => {
    if (weekId === options.excludeWeekId && roleId === options.excludeRoleId) {
      return false;
    }
    return getMainAssignmentIds(schedules[weekId], roleId).includes(workerId);
  }).length;
}

function hasAnyMainRoleInMonth(workerId, roleIds, monthKey, schedules, options = {}) {
  return getSundaysOfMonth(monthKey).some((weekId) => {
    const assignments = schedules[weekId]?.assignments?.main || {};
    return roleIds.some((roleId) => {
      if (weekId === options.excludeWeekId && roleId === options.excludeRoleId) {
        return false;
      }
      return getMainAssignmentIds({ main: assignments }, roleId).includes(workerId);
    });
  });
}

function hasAvailableWeekInMonth(workerId, monthKey, schedules) {
  return getSundaysOfMonth(monthKey).some((weekId) => schedules[weekId]?.available?.includes(workerId));
}

function isAssignedToDutyInMonth(workerId, dutyId, monthKey, schedules) {
  return getSundaysOfMonth(monthKey).some((weekId) => {
    const schedule = schedules[weekId];
    if (!schedule?.assignments) {
      return false;
    }
    if (isMainDuty(dutyId)) {
      return getMainAssignmentIds(schedule, dutyId).includes(workerId);
    }

    const groupAssignment = schedule.assignments.groups?.[workerId];
    if (dutyId === "groupLead") {
      return groupAssignment?.role === "lead";
    }
    if (dutyId === "groupSupport") {
      return groupAssignment?.role === "support";
    }
    return false;
  });
}

function getMonthSummary(monthKey) {
  const weeks = getSundaysOfMonth(monthKey);
  const summary = { done: 0, pending: 0, blocked: 0, issues: [] };

  weeks.forEach((weekId) => {
    const schedule = ensureSchedule(weekId);
    MAIN_ROLES.forEach((role) => {
      const workerIds = getMainAssignmentIds(schedule, role.id).filter((workerId) => isValidMainAssignment(workerId, role.id, weekId, schedule));
      if (isMultiMainRole(role.id)) {
        if (workerIds.length >= getMainRoleMinimum(role.id)) {
          summary.done += workerIds.length;
          const missingPreferred = getMainRoleTarget(role.id) - workerIds.length;
          if (missingPreferred > 0 && findPossibleMainCandidate(role.id, weekId, schedule)) {
            summary.pending += missingPreferred;
            summary.issues.push(`${formatZhDate(weekId)} ${role.label} 建議再補 ${missingPreferred} 位`);
          }
        } else {
          const hasCandidate = Boolean(findPossibleMainCandidate(role.id, weekId, schedule));
          summary[hasCandidate ? "pending" : "blocked"] += 1;
          summary.issues.push(`${formatZhDate(weekId)} ${role.label} ${hasCandidate ? "待補" : "無法安排"}`);
        }
        return;
      }

      if (workerIds.length > 0) {
        summary.done += 1;
      } else if (!isOptionalMainRole(role.id)) {
        const hasCandidate = Boolean(findPossibleMainCandidate(role.id, weekId, schedule));
        summary[hasCandidate ? "pending" : "blocked"] += 1;
        summary.issues.push(`${formatZhDate(weekId)} ${role.label} ${hasCandidate ? "待補" : "無法安排"}`);
      }
    });

    GROUPS.forEach((group) => {
      const leadCount = getGroupRoleCount(schedule, group.id, "lead");
      const supportCount = getGroupRoleCount(schedule, group.id, "support");
      if (leadCount >= 1) {
        summary.done += 1;
      } else {
        const hasLead = hasPossibleGroupLead(group.id, schedule);
        summary[hasLead ? "pending" : "blocked"] += 1;
        summary.issues.push(`${formatZhDate(weekId)} ${group.label} 主責 ${hasLead ? "待補" : "無法安排"}`);
      }
      if (supportCount >= 1) {
        summary.done += 1;
      } else {
        const hasSupport = hasPossibleGroupSupport(schedule);
        summary[hasSupport ? "pending" : "blocked"] += 1;
        summary.issues.push(`${formatZhDate(weekId)} ${group.label} 配搭 ${hasSupport ? "待補" : "無法安排"}`);
      }
    });
  });

  return summary;
}

function getCrossServiceConflictNotices(monthKey) {
  const ministry = getActiveMinistryState();
  const currentService = getActiveServiceState();
  const weeks = getSundaysOfMonth(monthKey);
  const notices = [];

  Object.values(ministry.services || {}).forEach((service) => {
    if (service.id === currentService.id || service.timeSlot !== currentService.timeSlot) {
      return;
    }

    weeks.forEach((weekId) => {
      const currentAssignments = collectAssignedWorkerIds(currentService.schedules?.[weekId]);
      const otherAssignments = collectAssignedWorkerIds(service.schedules?.[weekId]);
      currentAssignments.forEach((workerId) => {
        if (otherAssignments.has(workerId)) {
          notices.push(`${getWorkerName(workerId)} 已安排於 ${currentService.label}，與 ${service.label} 時間衝突`);
        }
      });
    });
  });

  return unique(notices);
}

function collectAssignedWorkerIds(schedule) {
  const ids = new Set();
  if (!schedule?.assignments) {
    return ids;
  }
  getAllMainAssignmentIds(schedule).forEach((workerId) => workerId && ids.add(workerId));
  Object.keys(schedule.assignments.groups || {}).forEach((workerId) => ids.add(workerId));
  return ids;
}

function findPossibleMainCandidate(roleId, weekId, schedule) {
  const assigned = new Set(getAllMainAssignmentIds(schedule));
  return state.volunteers.find((worker) => {
    if (!schedule.available.includes(worker.id) || !canAutoAssignDuty(worker, roleId) || assigned.has(worker.id)) {
      return false;
    }
    return !getMainAssignmentIssue(worker.id, roleId, weekId, state.schedules, { auto: true, allowHostRepeat: roleId === "host" });
  });
}

function hasPossibleGroupLead(groupId, schedule) {
  return state.volunteers.some((worker) => schedule.available.includes(worker.id) && canAutoAssignDuty(worker, "groupLead") && canUseGroupPool(worker, groupId) && (worker.leadGroups.includes(groupId) || !worker.fixedGroup || worker.fixedGroup === groupId));
}

function hasPossibleGroupSupport(schedule) {
  return state.volunteers.some((worker) => schedule.available.includes(worker.id) && canAutoAssignDuty(worker, "groupSupport"));
}

function isValidMainAssignment(workerId, roleId, weekId, schedule) {
  const worker = getWorker(workerId);
  if (!worker || !schedule.available.includes(workerId) || !canDoWorker(worker, roleId)) return false;
  if (MAIN_ROLES.filter((role) => getMainAssignmentIds(schedule, role.id).includes(workerId)).length > 1) return false;
  return !getMainAssignmentIssue(workerId, roleId, weekId, state.schedules, { auto: false, allowHostRepeat: true });
}

function compareMainCandidates(a, b, roleId, weekId, schedules) {
  const monthKey = weekId.slice(0, 7);
  const monthStats = getMonthStats(monthKey, schedules);
  const allStats = getAllTimeStats(schedules);
  const aMonth = monthStats.get(a.id) || createEmptyWorkerStats();
  const bMonth = monthStats.get(b.id) || createEmptyWorkerStats();
  const aAll = allStats.get(a.id) || createEmptyWorkerStats();
  const bAll = allStats.get(b.id) || createEmptyWorkerStats();
  const aNeedsMessageSupport = isSeniorWithPreviousMonthWorship(a, monthKey, schedules);
  const bNeedsMessageSupport = isSeniorWithPreviousMonthWorship(b, monthKey, schedules);
  const hostCandidateDiff = roleId === "host" ? Number(b.hostCandidate) - Number(a.hostCandidate) : 0;
  const firstWeekSeniorRole = isFirstWeekSeniorLeadRole(roleId, weekId);
  const firstWeekSeniorDiff = firstWeekSeniorRole ? Number(b.mostSenior) - Number(a.mostSenior) : 0;
  const previousMonthLeadDiff = firstWeekSeniorRole
    ? Number(hadMainRoleInMonth(a.id, roleId, getPreviousMonthKey(monthKey), schedules)) - Number(hadMainRoleInMonth(b.id, roleId, getPreviousMonthKey(monthKey), schedules))
    : 0;
  const typeDiff = getAutoTypePriority(a, roleId) - getAutoTypePriority(b, roleId);
  const importantRoleCountDiff = isImportantRole(roleId)
    ? countMainRoleInMonth(a.id, roleId, monthKey, schedules) - countMainRoleInMonth(b.id, roleId, monthKey, schedules)
    : 0;
  const bestDutyDiff = Number(hasBestDuty(b, roleId)) - Number(hasBestDuty(a, roleId));
  const weakDutyDiff = Number(hasWeakDuty(a, roleId)) - Number(hasWeakDuty(b, roleId));
  const worshipToMessageDiff = roleId === "messageSupport"
    ? Number(bNeedsMessageSupport) - Number(aNeedsMessageSupport)
    : Number(aNeedsMessageSupport) - Number(bNeedsMessageSupport);
  const consecutiveDiff = Number(hadSameMainRolePreviousWeek(a.id, roleId, weekId, schedules)) - Number(hadSameMainRolePreviousWeek(b.id, roleId, weekId, schedules));
  return hostCandidateDiff || firstWeekSeniorDiff || previousMonthLeadDiff || typeDiff || bestDutyDiff || weakDutyDiff || worshipToMessageDiff || importantRoleCountDiff || consecutiveDiff || aMonth.total - bMonth.total || aMonth.main - bMonth.main || aAll.total - bAll.total || a.name.localeCompare(b.name, "zh-Hant");
}

function isFirstWeekSeniorLeadRole(roleId, weekId) {
  return ["worshipLead", "messageLead"].includes(roleId) && getSundaysOfMonth(weekId.slice(0, 7))[0] === weekId;
}

function hadMainRoleInMonth(workerId, roleId, monthKey, schedules) {
  return getSundaysOfMonth(monthKey).some((weekId) => getMainAssignmentIds(schedules[weekId], roleId).includes(workerId));
}

function compareGroupLeadCandidates(a, b, groupId, weekId, schedules) {
  const monthKey = weekId.slice(0, 7);
  const monthStats = getMonthStats(monthKey, schedules);
  const aMonth = monthStats.get(a.id) || createEmptyWorkerStats();
  const bMonth = monthStats.get(b.id) || createEmptyWorkerStats();
  const consecutiveDiff = Number(wasGroupLeadPreviousWeek(a.id, groupId, weekId, schedules)) - Number(wasGroupLeadPreviousWeek(b.id, groupId, weekId, schedules));
  const fixedDiff = Number(a.fixedGroup && a.fixedGroup !== groupId) - Number(b.fixedGroup && b.fixedGroup !== groupId);
  const typeDiff = getAutoTypePriority(a, "groupLead") - getAutoTypePriority(b, "groupLead");
  const bestDutyDiff = Number(hasBestDuty(b, "groupLead")) - Number(hasBestDuty(a, "groupLead"));
  const weakDutyDiff = Number(hasWeakDuty(a, "groupLead")) - Number(hasWeakDuty(b, "groupLead"));
  return fixedDiff || typeDiff || bestDutyDiff || weakDutyDiff || consecutiveDiff || countWorkerGroupLeadInClassMonth(a.id, groupId, monthKey, schedules) - countWorkerGroupLeadInClassMonth(b.id, groupId, monthKey, schedules) || aMonth.groupLead - bMonth.groupLead || aMonth.total - bMonth.total || a.name.localeCompare(b.name, "zh-Hant");
}

function compareSupportCandidates(a, b, weekId, schedules) {
  const monthStats = getMonthStats(weekId.slice(0, 7), schedules);
  const aMonth = monthStats.get(a.id) || createEmptyWorkerStats();
  const bMonth = monthStats.get(b.id) || createEmptyWorkerStats();
  const typeDiff = getAutoTypePriority(a, "groupSupport") - getAutoTypePriority(b, "groupSupport");
  const bestDutyDiff = Number(hasBestDuty(b, "groupSupport")) - Number(hasBestDuty(a, "groupSupport"));
  const weakDutyDiff = Number(hasWeakDuty(a, "groupSupport")) - Number(hasWeakDuty(b, "groupSupport"));
  return typeDiff || bestDutyDiff || weakDutyDiff || aMonth.total - bMonth.total || aMonth.groupSupport - bMonth.groupSupport || a.name.localeCompare(b.name, "zh-Hant");
}

function getMonthStats(monthKey, schedules) {
  const stats = new Map(state.volunteers.map((worker) => [worker.id, createEmptyWorkerStats()]));
  getSundaysOfMonth(monthKey).forEach((weekId) => addScheduleStats(stats, schedules[weekId]));
  return stats;
}

function getAllTimeStats(schedules) {
  const stats = new Map(state.volunteers.map((worker) => [worker.id, createEmptyWorkerStats()]));
  Object.values(schedules).forEach((schedule) => addScheduleStats(stats, schedule));
  return stats;
}

function getYearStats(year, schedules) {
  const stats = new Map(state.volunteers.map((worker) => [worker.id, createEmptyWorkerStats()]));
  const months = new Set();

  Object.entries(schedules).forEach(([weekId, schedule]) => {
    if (!weekId.startsWith(`${year}-`) || !hasScheduleAssignments(schedule)) {
      return;
    }
    months.add(weekId.slice(0, 7));
    addScheduleStats(stats, schedule);
  });

  return { stats, monthCount: months.size };
}

function hasScheduleAssignments(schedule) {
  return Boolean(
    schedule?.assignments
      && (getAllMainAssignmentIds(schedule).length > 0 || Object.keys(schedule.assignments.groups || {}).length > 0),
  );
}

function addScheduleStats(stats, schedule) {
  if (!schedule?.assignments) return;
  getAllMainAssignmentIds(schedule).forEach((workerId) => workerId && incrementWorkerStat(stats, workerId, "main"));
  Object.entries(schedule.assignments.groups || {}).forEach(([workerId, assignment]) => incrementWorkerStat(stats, workerId, assignment.role === "lead" ? "groupLead" : "groupSupport"));
}

function incrementWorkerStat(stats, workerId, key) {
  if (!stats.has(workerId)) stats.set(workerId, createEmptyWorkerStats());
  const stat = stats.get(workerId);
  stat[key] += 1;
  stat.total += 1;
}

function createEmptyWorkerStats() {
  return { main: 0, groupLead: 0, groupSupport: 0, total: 0 };
}

function countWorkerGroupLeadInClassMonth(workerId, groupId, monthKey, schedules) {
  return getSundaysOfMonth(monthKey).filter((weekId) => {
    const assignment = schedules[weekId]?.assignments?.groups?.[workerId];
    return assignment?.classId === groupId && assignment?.role === "lead";
  }).length;
}

function hadSameMainRolePreviousWeek(workerId, roleId, weekId, schedules) {
  return getMainAssignmentIds(schedules[shiftDate(weekId, -7)], roleId).includes(workerId);
}

function wasGroupLeadPreviousWeek(workerId, groupId, weekId, schedules) {
  const assignment = schedules[shiftDate(weekId, -7)]?.assignments?.groups?.[workerId];
  return assignment?.classId === groupId && assignment?.role === "lead";
}

function clearInvalidAssignmentsForWorker(workerId) {
  const worker = getWorker(workerId);
  const notices = [];
  if (!worker) return notices;

  Object.entries(state.schedules).forEach(([weekId, schedule]) => {
    MAIN_ROLES.forEach((role) => {
      if (getMainAssignmentIds(schedule, role.id).includes(workerId) && !canAssignMain(workerId, role.id, weekId, state.schedules).ok) {
        if (isMultiMainRole(role.id)) {
          schedule.assignments.main[role.id] = getMainAssignmentIds(schedule, role.id).filter((id) => id !== workerId);
        } else {
          schedule.assignments.main[role.id] = "";
        }
        notices.push(`${formatZhDate(weekId)} ${role.label} 已清空，因 ${getDisplayName(worker)} 設定已變更`);
      }
    });
    const groupAssignment = schedule.assignments.groups[workerId];
    if (groupAssignment?.role === "lead" && !canDoWorker(worker, "groupLead")) {
      schedule.assignments.groups[workerId].role = "support";
      notices.push(`${formatZhDate(weekId)} ${getDisplayName(worker)} 已改為小組配搭`);
    }
    schedule.savedAt = null;
  });

  return notices;
}

function removeAssignmentsForWorker(schedule, workerId) {
  MAIN_ROLES.forEach((role) => {
    if (isMultiMainRole(role.id)) {
      schedule.assignments.main[role.id] = getMainAssignmentIds(schedule, role.id).filter((id) => id !== workerId);
    } else if (schedule.assignments.main[role.id] === workerId) {
      schedule.assignments.main[role.id] = "";
    }
  });
  delete schedule.assignments.groups[workerId];
}

function pruneAssignmentsByAvailability(schedule) {
  MAIN_ROLES.forEach((role) => {
    if (isMultiMainRole(role.id)) {
      schedule.assignments.main[role.id] = getMainAssignmentIds(schedule, role.id).filter((workerId) => schedule.available.includes(workerId));
    } else if (schedule.assignments.main[role.id] && !schedule.available.includes(schedule.assignments.main[role.id])) {
      schedule.assignments.main[role.id] = "";
    }
  });
  Object.keys(schedule.assignments.groups).forEach((workerId) => {
    if (!schedule.available.includes(workerId)) delete schedule.assignments.groups[workerId];
  });
}

function ensureSchedule(weekId) {
  return ensureScheduleIn(state.schedules, weekId);
}

function ensureScheduleIn(schedules, weekId) {
  if (!schedules[weekId]) {
    schedules[weekId] = { available: [], assignments: createEmptyAssignments(), savedAt: null };
  }
  if (!Array.isArray(schedules[weekId].available)) schedules[weekId].available = [];
  schedules[weekId].available = unique(schedules[weekId].available).filter((workerId) => Boolean(getWorker(workerId)));
  schedules[weekId].assignments = normalizeAssignments(schedules[weekId].assignments);
  pruneAssignmentsByAvailability(schedules[weekId]);
  return schedules[weekId];
}

function createEmptyAssignments() {
  return { main: createEmptyMainAssignments(), groups: {} };
}

function createEmptyMainAssignments() {
  return MAIN_ROLES.reduce((assignments, role) => {
    assignments[role.id] = isMultiMainRole(role.id) ? [] : "";
    return assignments;
  }, {});
}

function normalizeMainAssignmentValue(roleId, value) {
  if (isMultiMainRole(roleId)) {
    const values = Array.isArray(value) ? value : value ? [value] : [];
    return unique(values.map((workerId) => String(workerId)).filter(Boolean)).slice(0, getMainRoleTarget(roleId));
  }
  return value ? String(value) : "";
}

function isMultiMainRole(roleId) {
  return roleId === HOSPITALITY_ROLE_ID;
}

function isOptionalMainRole(roleId) {
  return OPTIONAL_MAIN_ROLE_IDS.includes(roleId);
}

function getMainRoleEmptyLabel(roleId) {
  if (roleId === "tech") {
    return "中央支援／待確認";
  }
  if (TRAINING_SUPPORT_ROLE_IDS.includes(roleId)) {
    return "本週無配搭";
  }
  return "待補";
}

function getMainRoleTarget(roleId) {
  return isMultiMainRole(roleId) ? HOSPITALITY_TARGET : 1;
}

function getMainRoleMinimum(roleId) {
  return isMultiMainRole(roleId) ? HOSPITALITY_MIN : isOptionalMainRole(roleId) ? 0 : 1;
}

function getMainAssignmentIds(scheduleOrAssignments, roleId) {
  const main = scheduleOrAssignments?.assignments?.main || scheduleOrAssignments?.main || scheduleOrAssignments || {};
  const value = main[roleId];
  return isMultiMainRole(roleId)
    ? normalizeMainAssignmentValue(roleId, value)
    : value
      ? [String(value)]
      : [];
}

function getAllMainAssignmentIds(schedule) {
  return MAIN_ROLES.flatMap((role) => getMainAssignmentIds(schedule, role.id));
}

function hasMainAssignment(schedule, roleId) {
  return getMainAssignmentIds(schedule, roleId).length > 0;
}

function isMainRoleAtCapacity(schedule, roleId) {
  return getMainAssignmentIds(schedule, roleId).length >= getMainRoleTarget(roleId);
}

function addMainAssignment(schedule, roleId, workerId) {
  if (isMultiMainRole(roleId)) {
    const nextIds = unique([...getMainAssignmentIds(schedule, roleId), workerId]).slice(0, getMainRoleTarget(roleId));
    schedule.assignments.main[roleId] = nextIds;
  } else {
    schedule.assignments.main[roleId] = workerId;
  }
}

function clearMainAssignmentSlot(schedule, roleId, slot = 0) {
  if (isMultiMainRole(roleId)) {
    const nextIds = getMainAssignmentIds(schedule, roleId);
    nextIds[Number(slot) || 0] = "";
    schedule.assignments.main[roleId] = nextIds.filter(Boolean);
  } else {
    schedule.assignments.main[roleId] = "";
  }
}

function setMainAssignmentSlot(schedule, roleId, workerId, slot = 0) {
  if (isMultiMainRole(roleId)) {
    const nextIds = getMainAssignmentIds(schedule, roleId);
    nextIds[Number(slot) || 0] = workerId;
    schedule.assignments.main[roleId] = unique(nextIds.filter(Boolean)).slice(0, getMainRoleTarget(roleId));
  } else {
    schedule.assignments.main[roleId] = workerId;
  }
}

function getMainAssignmentSlotValue(schedule, roleId, slot = 0) {
  return getMainAssignmentIds(schedule, roleId)[Number(slot) || 0] || "";
}

function getAvailableWorkers(schedule) {
  return state.volunteers.filter((worker) => schedule.available.includes(worker.id));
}

function getGroupTeacherCount(schedule, groupId) {
  return Object.values(schedule.assignments.groups).filter((assignment) => assignment.classId === groupId).length;
}

function getGroupRoleCount(schedule, groupId, role) {
  return Object.values(schedule.assignments.groups).filter((assignment) => assignment.classId === groupId && assignment.role === role).length;
}

function getWorkerMainDuty(workerId, schedule) {
  return MAIN_ROLES.find((role) => getMainAssignmentIds(schedule, role.id).includes(workerId))?.label || "";
}

function getGroupWorkerNames(schedule, groupId, role) {
  return Object.entries(schedule.assignments.groups)
    .filter(([, assignment]) => assignment.classId === groupId && assignment.role === role)
    .map(([workerId]) => getWorkerName(workerId))
    .filter(Boolean)
    .join("、");
}

function getMainWorkerNames(schedule, roleId) {
  return getMainAssignmentIds(schedule, roleId)
    .map((workerId) => getWorkerName(workerId))
    .filter(Boolean)
    .join("、");
}

function getWorkerName(workerId) {
  const worker = getWorker(workerId);
  return worker ? getDisplayName(worker) : "";
}

function getDisplayName(worker) {
  if (!worker) {
    return "";
  }

  const nickname = String(worker.nickname || "").trim();
  if (nickname) {
    return nickname;
  }

  const name = String(worker.name || "").trim();
  if (name.length <= 2) {
    return name;
  }

  return name.slice(-2);
}

function getWeekStatus(schedule) {
  if (schedule.savedAt) return "已儲存";
  if (getAllMainAssignmentIds(schedule).length > 0 || Object.keys(schedule.assignments.groups).length > 0) return "排班中";
  if (schedule.available.length > 0) return "已設定可服事";
  return "尚未設定";
}

function renderLevelOptions(currentValue) {
  return LEVELS.map((level) => `<option value="${level.id}" ${level.id === currentValue ? "selected" : ""}>${level.label}</option>`).join("");
}

function renderTypeOptions(currentValue) {
  return renderIdentityOptions(normalizeWorkerIdentity({ type: currentValue }));
}

function renderIdentityOptions(currentValue) {
  return WORKER_IDENTITIES.map((identity) => `<option value="${identity.id}" ${identity.id === currentValue ? "selected" : ""}>${identity.label}</option>`).join("");
}

function renderSpecialTypeOptions(currentValue) {
  return SPECIAL_TYPES.map((type) => `<option value="${type.id}" ${type.id === currentValue ? "selected" : ""}>${type.label}</option>`).join("");
}

function renderMainRoleOptions(currentValue, worker) {
  const profile = getWorkerRuleProfile(worker);
  return [
    `<option value="">請選擇</option>`,
    ...MAIN_ROLES.map((role) => `<option value="${role.id}" ${role.id === currentValue ? "selected" : ""} ${canDoWorker(profile, role.id) ? "" : "disabled"}>${role.label}</option>`),
  ].join("");
}

function renderBestDutyCheckboxes(currentValues, worker, workerId = "") {
  const profile = getWorkerRuleProfile(worker);
  const selectedValues = new Set(Array.isArray(currentValues) ? currentValues : currentValues ? [currentValues] : []);
  return BEST_DUTIES.map((duty) => {
    const isAllowed = canDoWorker(profile, duty.id);
    const dataAttributes = workerId
      ? `data-worker-best-duty="${escapeAttribute(workerId)}" data-duty-id="${duty.id}"`
      : "";
    return `
      <label class="checkbox-line">
        <input type="checkbox" value="${duty.id}" ${dataAttributes} ${selectedValues.has(duty.id) && isAllowed ? "checked" : ""} ${isAllowed ? "" : "disabled"} />
        <span>${duty.label}</span>
      </label>
    `;
  }).join("");
}

function renderWeakDutyCheckboxes(currentValues, workerId = "") {
  const selectedValues = new Set(Array.isArray(currentValues) ? currentValues : currentValues ? [currentValues] : []);
  return BEST_DUTIES.map((duty) => {
    const dataAttributes = workerId
      ? `data-worker-weak-duty="${escapeAttribute(workerId)}" data-duty-id="${duty.id}"`
      : "";
    return `
      <label class="checkbox-line">
        <input type="checkbox" value="${duty.id}" ${dataAttributes} ${selectedValues.has(duty.id) ? "checked" : ""} />
        <span>${duty.label}</span>
      </label>
    `;
  }).join("");
}

function getCheckedBestDuties(container) {
  return getCheckedDuties(container);
}

function getCheckedDuties(container) {
  if (!container) {
    return [];
  }
  return [...container.querySelectorAll('input[type="checkbox"]:checked')].map((input) => input.value);
}

function renderWorkerGroupCheckboxes(worker, role) {
  const dutyId = role === "lead" ? "groupLead" : "groupSupport";
  const datasetName = role === "lead" ? "data-worker-lead-group" : "data-worker-support-group";
  const groupDatasetName = role === "lead" ? "data-lead-group" : "data-support-group";
  const selectedGroups = role === "lead" ? worker.leadGroups : worker.supportGroups;
  const availableGroups = GROUPS.filter((group) => canUseGroupPool(worker, group.id));

  if (availableGroups.length === 0) {
    return `<div class="empty-state compact-empty">沒有可設定的班級</div>`;
  }

  return availableGroups.map((group) => `
    <label class="checkbox-line">
      <input type="checkbox" ${datasetName}="${escapeAttribute(worker.id)}" ${groupDatasetName}="${group.id}" ${selectedGroups.includes(group.id) ? "checked" : ""} ${canDoWorker(worker, dutyId) ? "" : "disabled"} />
      <span>${group.label}</span>
    </label>
  `).join("");
}

function renderPoolOptions(groupId, role) {
  const dutyId = role === "lead" ? "groupLead" : "groupSupport";
  const selectedKey = role === "lead" ? "leadGroups" : "supportGroups";
  const candidates = state.volunteers.filter((worker) => canDoWorker(worker, dutyId) && canUseGroupPool(worker, groupId));

  if (candidates.length === 0) {
    return `<div class="empty-state compact-empty">目前沒有可選同工</div>`;
  }

  return candidates.map((worker) => `
    <label>
      <input type="checkbox" data-pool-worker="${escapeAttribute(worker.id)}" data-pool-group="${groupId}" data-pool-role="${role}" ${worker[selectedKey].includes(groupId) ? "checked" : ""} />
      ${escapeHtml(worker.name)}
    </label>
  `).join("");
}

function renderGroupOptions(currentValue, emptyLabel = "請選擇") {
  return [
    `<option value="">${emptyLabel}</option>`,
    ...GROUPS.map((group) => `<option value="${group.id}" ${group.id === currentValue ? "selected" : ""}>${group.label}</option>`),
  ].join("");
}

function getDutyLabelsForLevel(levelId) {
  const level = getLevel(levelId) || LEVELS[0];
  return level.id === "leader" ? ["所有職務"] : level.duties.map((duty) => DUTY_LABELS[duty]);
}

function getDutyLabelsForWorker(worker) {
  if (getEffectiveWorkerType(worker) === "trainee") {
    return ["招待事工", "控台事工", GROUP_DUTIES.groupSupport];
  }
  return getDutyLabelsForLevel(worker.level);
}

function getFirstEligibleMainRole(levelId) {
  return MAIN_ROLES.find((role) => canDoLevel(levelId, role.id))?.id || "";
}

function inferFixedMode(worker) {
  if (worker.fixedMainRole && worker.fixedGroup) return "both";
  if (worker.fixedMainRole) return "duty";
  if (worker.fixedGroup) return "class";
  return "none";
}

function fixedModeAllowsDuty(modeId) {
  return modeId === "duty" || modeId === "both";
}

function fixedModeAllowsClass(modeId) {
  return modeId === "class" || modeId === "both";
}

function getLevel(levelId) {
  return LEVELS.find((level) => level.id === levelId) || null;
}

function getWorkerIdentity(identityId) {
  return WORKER_IDENTITIES.find((identity) => identity.id === identityId) || WORKER_IDENTITIES[0];
}

function getSpecialType(typeId) {
  return SPECIAL_TYPES.find((type) => type.id === typeId) || null;
}

function getWorkerType(typeId) {
  return WORKER_IDENTITIES.find((type) => type.id === typeId) || SPECIAL_TYPES.find((type) => type.id === typeId) || null;
}

function normalizeWorkerType(typeId) {
  if (typeId === "special") {
    return "elder";
  }
  return getWorkerType(typeId)?.id || "regular";
}

function normalizeWorkerIdentity(worker) {
  const rawIdentity = typeof worker === "string" ? worker : worker?.identity || worker?.type;
  if (rawIdentity === "special" || getSpecialType(rawIdentity)) {
    return "special";
  }
  return getWorkerIdentity(rawIdentity).id;
}

function normalizeSpecialType(worker, identity = normalizeWorkerIdentity(worker)) {
  if (identity !== "special") {
    return "";
  }
  const rawType = typeof worker === "string" ? worker : worker?.specialType || worker?.type;
  if (rawType === "special") {
    return "elder";
  }
  return getSpecialType(rawType)?.id || "pastor";
}

function getEffectiveWorkerType(worker) {
  const identity = normalizeWorkerIdentity(worker);
  const specialType = normalizeSpecialType(worker, identity);
  return identity === "special" ? specialType : identity;
}

function getWorkerRuleProfile(worker = {}) {
  const identity = normalizeWorkerIdentity(worker);
  const specialType = normalizeSpecialType(worker, identity);
  return {
    ...worker,
    level: worker?.level || "new",
    identity,
    specialType,
    type: identity === "special" ? specialType : identity,
  };
}

function getMainRole(roleId) {
  return MAIN_ROLES.find((role) => role.id === roleId) || null;
}

function getBestDuty(dutyId) {
  return BEST_DUTIES.find((duty) => duty.id === dutyId) || null;
}

function getBestDutyIds(worker) {
  return unique(Array.isArray(worker?.bestDuties) ? worker.bestDuties : worker?.bestDuty ? [worker.bestDuty] : [])
    .filter((dutyId) => getBestDuty(dutyId) && canDoWorker(worker, dutyId));
}

function getBestDutyLabels(worker) {
  return getBestDutyIds(worker).map((dutyId) => getBestDuty(dutyId).label);
}

function hasBestDuty(worker, dutyId) {
  return getBestDutyIds(worker).includes(dutyId);
}

function getWeakDutyIds(worker) {
  return unique(Array.isArray(worker?.weakDuties) ? worker.weakDuties : [])
    .filter((dutyId) => getBestDuty(dutyId));
}

function hasWeakDuty(worker, dutyId) {
  return getWeakDutyIds(worker).includes(dutyId);
}

function getWeakDutyWarning(worker, dutyId) {
  const duty = getBestDuty(dutyId);
  return worker && duty && hasWeakDuty(worker, dutyId)
    ? `${getDisplayName(worker)} 被安排到不擅長事工：${duty.label}，請確認是否合適。`
    : "";
}

function isMainDuty(dutyId) {
  return MAIN_ROLES.some((role) => role.id === dutyId);
}

function isImportantRole(roleId) {
  return IMPORTANT_ROLE_IDS.includes(roleId);
}

function isWorshipRole(roleId) {
  return WORSHIP_ROLE_IDS.includes(roleId);
}

function isMessageRole(roleId) {
  return MESSAGE_ROLE_IDS.includes(roleId);
}

function getGroup(groupId) {
  return GROUPS.find((group) => group.id === groupId) || null;
}

function getWorker(workerId) {
  return state.volunteers.find((worker) => worker.id === workerId) || null;
}

function canDoWorker(worker, dutyId) {
  const profile = getWorkerRuleProfile(worker);
  if (!worker || !canDoLevel(profile.level, dutyId)) {
    return false;
  }
  if (profile.type === "trainee") {
    return ["hospitality", "tech", "groupSupport"].includes(dutyId);
  }
  return true;
}

function canAutoAssignDuty(worker, dutyId) {
  if (!canDoWorker(worker, dutyId)) {
    return false;
  }
  if (TRAINING_SUPPORT_ROLE_IDS.includes(dutyId) && worker.fixedMainRole !== dutyId && !hasBestDuty(worker, dutyId)) {
    return false;
  }
  const type = getEffectiveWorkerType(worker);
  if (type === "pastor") {
    return false;
  }
  if (type !== "fullTime") {
    if (type === "elder") {
      if (isMainDuty(dutyId)) {
        return worker.fixedMainRole === dutyId;
      }
      return ["groupSupport", "groupLead"].includes(dutyId) && Boolean(worker.fixedGroup);
    }
    return true;
  }
  return hasBestDuty(worker, dutyId);
}

function canAutoAssignGroupTeacher(worker) {
  const type = getEffectiveWorkerType(worker);
  if (type === "pastor") {
    return false;
  }
  if (type === "fullTime") {
    return hasBestDuty(worker, "groupSupport") || hasBestDuty(worker, "groupLead");
  }
  if (type === "elder") {
    return Boolean(worker.fixedGroup) && (canDoWorker(worker, "groupSupport") || canDoWorker(worker, "groupLead"));
  }
  return canAutoAssignDuty(worker, "groupSupport") || canAutoAssignDuty(worker, "groupLead");
}

function canUseGroupPool(worker, groupId) {
  return !worker?.fixedGroup || worker.fixedGroup === groupId;
}

function getAutoTypePriority(worker, dutyId) {
  const type = getEffectiveWorkerType(worker);
  if (type === "fullTime" && hasBestDuty(worker, dutyId)) return 0;
  if (type === "regular") return 1;
  if (type === "trainee") return 2;
  if (type === "elder") return 3;
  if (type === "temp") return 4;
  return 9;
}

function canDoLevel(levelId, dutyId) {
  return Boolean(getLevel(levelId)?.duties.includes(dutyId));
}

function getSundaysOfMonth(monthKey) {
  const [year, month] = monthKey.split("-").map(Number);
  const date = new Date(year, month - 1, 1);
  const weeks = [];
  while (date.getMonth() === month - 1) {
    if (date.getDay() === 0) weeks.push(formatDateKey(date));
    date.setDate(date.getDate() + 1);
  }
  return weeks;
}

function pickInitialWeek(monthKey) {
  const weeks = getSundaysOfMonth(monthKey);
  const todayKey = formatDateKey(new Date());
  return weeks.find((weekId) => weekId >= todayKey) || weeks[0] || "";
}

function getMonthKey(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}`;
}

function getPreviousMonthKey(monthKey) {
  const [year, month] = monthKey.split("-").map(Number);
  return getMonthKey(new Date(year, month - 2, 1));
}

function formatDateKey(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function formatZhDate(weekId) {
  const [, month, day] = weekId.split("-").map(Number);
  return `${month}/${day}（日）`;
}

function formatBackupTimestamp(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}-${pad(date.getHours())}${pad(date.getMinutes())}`;
}

function shiftDate(weekId, days) {
  const [year, month, day] = weekId.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + days);
  return formatDateKey(date);
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function formatAverage(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function clampNumber(value, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number)) {
    return min;
  }
  return Math.min(max, Math.max(min, Math.round(number)));
}

function cloneSchedules(schedules) {
  return normalizeSchedules(JSON.parse(JSON.stringify(schedules)));
}

function unique(values) {
  return [...new Set(values.filter(Boolean).map(String))];
}

function createId() {
  return window.crypto?.randomUUID ? window.crypto.randomUUID() : `worker-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => elements.toast.classList.remove("show"), 2400);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}
