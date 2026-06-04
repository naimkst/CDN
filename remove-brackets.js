(function () {
  console.log("In.....");
  function cleanK3Brackets() {
    document.querySelectorAll("*").forEach((el) => {
      if (
        el.children.length === 0 &&
        el.textContent &&
        el.textContent.trim().startsWith("[") &&
        el.textContent.trim().endsWith("]")
      ) {
        el.textContent = el.textContent
          .replace(/^\s*\[/, "")
          .replace(/\]\s*$/, "");
      }
    });
  }

  cleanK3Brackets();

  new MutationObserver(cleanK3Brackets).observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
