(() => {
  const currentScript = document.currentScript;
  const measurementId = (currentScript?.dataset.gaMeasurementId || "").trim();
  const isGa4MeasurementId = /^G-[A-Z0-9]{4,}$/i.test(measurementId);

  if (!isGa4MeasurementId) {
    document.documentElement.dataset.analytics = "disabled";
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("consent", "default", {
    ad_storage: "denied",
    analytics_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    allow_ad_personalization_signals: false
  });

  const googleTagScript = document.createElement("script");
  googleTagScript.async = true;
  googleTagScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.append(googleTagScript);

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-analytics-event]");

    if (!link) {
      return;
    }

    window.gtag("event", link.dataset.analyticsEvent, {
      event_category: link.dataset.analyticsCategory || "engagement",
      event_label: link.dataset.analyticsLabel || link.textContent.trim(),
      link_url: link.href
    });
  });
})();
