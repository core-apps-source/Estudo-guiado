(() => {
  const appKey = "meu-estudo-app-v1";
  const legacyKey = "revisoes_estudos_local_v1";
  const migrationKey = "meu-estudo-clean-v1";
  const timerKeys = [
    "meu-estudo-timer",
    "meu-estudo-review-timer",
    "meu-estudo-exercise-timer",
    "meu-estudo-brute-timer",
  ];

  const emptyAppData = (data) =>
    ["aulas", "metas", "desempenhos", "lembretes", "sessions"].every(
      (key) => !Array.isArray(data?.[key]) || data[key].length === 0
    );

  const hasSeededRevisionShape = (revisions) => {
    if (!Array.isArray(revisions) || revisions.length !== 6) return false;
    const stages = revisions
      .map((revision) => revision?.stage)
      .sort()
      .join(",");
    return stages === "24h,24h,30d,30d,7d,7d";
  };

  try {
    if (localStorage.getItem(migrationKey)) return;

    const appData = JSON.parse(localStorage.getItem(appKey) || "null");
    const appWasSeeded =
      emptyAppData(appData) && hasSeededRevisionShape(appData?.revisoes);

    const legacyData = JSON.parse(localStorage.getItem(legacyKey) || "null");
    const legacyWasSeeded =
      Array.isArray(legacyData?.studies) &&
      legacyData.studies.length === 2 &&
      Array.isArray(legacyData?.revisions) &&
      legacyData.revisions.length === 6;

    if (appWasSeeded) {
      localStorage.removeItem(appKey);
      timerKeys.forEach((key) => localStorage.removeItem(key));
      localStorage.removeItem("meu-estudo-onboarding-v1");
    }

    if (legacyWasSeeded) localStorage.removeItem(legacyKey);
    localStorage.setItem(migrationKey, "1");
  } catch {
    // A storage restriction must not prevent the PWA from loading.
  }
})();
