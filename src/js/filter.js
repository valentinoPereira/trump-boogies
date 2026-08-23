/* =========================================================
   Trump Boogies — client-side filter for year + free text
   ========================================================= */
(function () {
  "use strict";

  var list = document.getElementById("lie-list");
  var yearFilter = document.getElementById("year-filter");
  var textFilter = document.getElementById("text-filter");
  var resetBtn = document.getElementById("reset-filters");
  var visibleCount = document.getElementById("visible-count");
  var totalCount = document.getElementById("total-count");
  var noResults = document.getElementById("no-results");

  if (!list || !yearFilter || !textFilter) {
    return;
  }

  var items = Array.prototype.slice.call(list.querySelectorAll(".lie-item"));
  if (totalCount) {
    totalCount.textContent = String(items.length);
  }

  function applyFilters() {
    var year = yearFilter.value;
    var query = textFilter.value.trim().toLowerCase();
    var shown = 0;

    items.forEach(function (item) {
      var itemYear = item.getAttribute("data-year") || "";
      var itemSearch = item.getAttribute("data-search") || "";

      var yearOk = year === "all" || itemYear === year;
      var textOk = query === "" || itemSearch.indexOf(query) !== -1;

      if (yearOk && textOk) {
        item.hidden = false;
        shown += 1;
      } else {
        item.hidden = true;
      }
    });

    if (visibleCount) {
      visibleCount.textContent = String(shown);
    }
    if (noResults) {
      noResults.hidden = shown !== 0;
    }
  }

  function resetFilters() {
    yearFilter.value = "all";
    textFilter.value = "";
    applyFilters();
    textFilter.focus();
  }

  yearFilter.addEventListener("change", applyFilters);
  textFilter.addEventListener("input", applyFilters);
  if (resetBtn) {
    resetBtn.addEventListener("click", resetFilters);
  }
})();
