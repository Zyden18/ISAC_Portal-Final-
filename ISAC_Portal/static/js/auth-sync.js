(function () {
  const signalKey = "isac-auth-session-changed";
  const url = new URL(window.location.href);

  if (url.searchParams.has("auth_changed")) {
    url.searchParams.delete("auth_changed");
    window.history.replaceState(
      null,
      "",
      `${url.pathname}${url.search}${url.hash}`
    );
    window.localStorage.setItem(signalKey, String(Date.now()));
  }

  window.addEventListener("storage", (event) => {
    if (event.key === signalKey && event.newValue) {
      window.location.reload();
    }
  });
})();
