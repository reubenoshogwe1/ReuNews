(function () {
  "use strict";

  var D = window.REUNEWS;
  if (!D) return;

  var LENSES = [
    { key: "individuals", label: "Individuals", lensTitle: "For individuals" },
    { key: "investors", label: "Investors", lensTitle: "For investors" },
    { key: "businesses", label: "Businesses", lensTitle: "For businesses" },
  ];
  var EFFECT = {
    up: { sym: "▲", word: "Helps" },
    down: { sym: "▼", word: "Hurts" },
    mixed: { sym: "◆", word: "Mixed" },
  };
  var CONVICTION = ["", "Low", "Medium", "High"];

  var state = {
    lens: readStore("reunews-lens", "individuals"),
    sort: { key: "value", dir: "desc" },
  };
  if (!LENSES.some(function (l) { return l.key === state.lens; })) state.lens = "individuals";

  // ---------- Helpers ----------

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }

  function $all(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function readStore(key, fallback) {
    try {
      return localStorage.getItem(key) || fallback;
    } catch (e) {
      return fallback;
    }
  }

  function writeStore(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {}
  }

  function parseDate(iso) {
    var p = iso.split("-");
    return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
  }

  function formatDay(iso) {
    return parseDate(iso).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
  }

  function formatValue(millions) {
    if (millions == null) return "Undisclosed";
    if (millions >= 1000) return "$" + String(Number((millions / 1000).toFixed(2))) + "B";
    return "$" + millions + "M";
  }

  function lensInfo(key) {
    return LENSES.filter(function (l) { return l.key === key; })[0];
  }

  // ---------- Hero ----------

  function renderHero() {
    $("#edition-label").textContent = "Edition · " + D.edition.label;
    $("#footer-edition").textContent = D.edition.label;
    $("#data-note").textContent = D.edition.dataNote;

    var lines = D.hero.headline;
    $("#hero-title").innerHTML = lines
      .map(function (line, i) {
        var text = esc(line);
        return i === lines.length - 1 ? '<span><span class="hl">' + text + "</span></span>" : "<span>" + text + "</span>";
      })
      .join("");
    $("#hero-lede").textContent = D.hero.lede;

    $("#big-picture").innerHTML = D.hero.bigPicture
      .map(function (b) {
        return "<li><h2>" + esc(b.title) + "</h2><p>" + esc(b.text) + "</p></li>";
      })
      .join("");

    $("#tape").innerHTML = D.snapshot
      .map(function (s) {
        return (
          "<li>" +
          '<span class="t-label">' + esc(s.label) + "</span>" +
          '<span class="t-value">' + esc(s.value) + "</span>" +
          '<span class="t-change" data-dir="' + esc(s.dir) + '">' + esc(s.change) + "</span>" +
          '<span class="t-asof">' + esc(s.asOf) + "</span>" +
          "</li>"
        );
      })
      .join("");
    $("#tape-note").textContent = "Snapshot figures are rounded and taken from public reports. They are not live prices.";
  }

  // ---------- Pulse ----------

  function renderPulse() {
    $("#pulse-grid").innerHTML = D.pulse
      .map(function (p) {
        return (
          '<article class="pulse-item">' +
          '<span class="chip" data-tone="' + esc(p.tone) + '">' + esc(p.status) + "</span>" +
          "<h3>" + esc(p.region) + "</h3>" +
          '<span class="pulse-metric">' + esc(p.metric) + "</span>" +
          "<p>" + esc(p.note) + "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  // ---------- Calendar ----------

  function renderCalendar() {
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

    $("#calendar").innerHTML = D.calendar
      .map(function (day) {
        var t = parseDate(day.date).getTime();
        var when = t === today ? "today" : t < today ? "past" : "upcoming";
        var label = when === "today" ? "Today" : when === "past" ? "Done" : "Upcoming";
        return (
          '<li data-when="' + when + '">' +
          '<time class="cal-date" datetime="' + esc(day.date) + '">' + esc(formatDay(day.date)) + "</time>" +
          '<ul class="cal-items">' +
          day.items.map(function (item) { return "<li>" + esc(item) + "</li>"; }).join("") +
          "</ul>" +
          '<span class="cal-status">' + label + "</span>" +
          "</li>"
        );
      })
      .join("");
  }

  // ---------- Stories ----------

  function storyHTML(s, wide) {
    var lens = lensInfo(state.lens);
    var figures = (s.figures || [])
      .map(function (f) {
        return '<div><span class="fig-label">' + esc(f.label) + '</span><span class="fig-value">' + esc(f.value) + "</span></div>";
      })
      .join("");

    var impact = LENSES.map(function (l) {
      var effect = s.impact[l.key];
      var e = EFFECT[effect];
      return (
        '<li data-agent="' + l.key + '" data-effect="' + esc(effect) + '"' + (l.key === state.lens ? ' class="is-active"' : "") + ">" +
        "<b>" + l.label + "</b>" +
        '<span class="sym" aria-hidden="true">' + e.sym + "</span>" +
        "<span>" + e.word + "</span>" +
        "</li>"
      );
    }).join("");

    var sources = (s.sources || [])
      .map(function (src) {
        return '<li><a href="' + esc(src.url) + '" target="_blank" rel="noopener noreferrer">' + esc(src.name) + "</a></li>";
      })
      .join("");

    return (
      '<article class="story' + (wide ? " is-wide" : "") + '" id="story-' + esc(s.id) + '">' +
      '<div class="story-meta"><span class="tag">' + esc(s.region) + '</span><span class="story-date">' + esc(s.date) + "</span></div>" +
      "<h3>" + esc(s.title) + "</h3>" +
      '<div class="story-body">' +
      '<div class="story-col">' +
      '<p class="summary">' + esc(s.summary) + "</p>" +
      '<div class="figures">' + figures + "</div>" +
      "</div>" +
      '<div class="story-col">' +
      '<div class="analysis"><p class="block-label">Why it matters</p><p>' + esc(s.analysis) + "</p></div>" +
      (s.disclosure ? '<p class="disclosure">' + esc(s.disclosure) + "</p>" : "") +
      '<div class="lens-box" data-story="' + esc(s.id) + '">' +
      '<p class="block-label" data-lens-title>' + esc(lens.lensTitle) + "</p>" +
      "<p data-lens-text>" + esc(s.lens[state.lens]) + "</p>" +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="story-foot">' +
      '<ul class="impact" aria-label="Who this helps or hurts">' + impact + "</ul>" +
      (sources ? '<details class="sources"><summary>Sources (' + s.sources.length + ")</summary><ul>" + sources + "</ul></details>" : "") +
      "</div>" +
      "</article>"
    );
  }

  function renderStories(key) {
    var list = D[key] || [];
    var oddCount = list.length % 2 === 1;
    $("#stories-" + key).innerHTML = list
      .map(function (s, i) {
        return storyHTML(s, oddCount && i === 0);
      })
      .join("");
  }

  function storyById(id) {
    var all = [].concat(D.economy, D.finance, D.business);
    return all.filter(function (s) { return s.id === id; })[0];
  }

  // ---------- Lens ----------

  function renderLensControls() {
    $all("[data-lens-control]").forEach(function (holder, i) {
      var labelId = "lens-label-" + i;
      holder.innerHTML =
        '<div class="lens">' +
        '<span class="lens-label" id="' + labelId + '">Read it as</span>' +
        '<div class="segmented" role="group" aria-labelledby="' + labelId + '">' +
        LENSES.map(function (l) {
          return (
            '<button type="button" data-lens="' + l.key + '" aria-pressed="' + (l.key === state.lens) + '">' + l.label + "</button>"
          );
        }).join("") +
        "</div></div>";
    });
  }

  function setLens(key) {
    if (key === state.lens) return;
    state.lens = key;
    writeStore("reunews-lens", key);
    var info = lensInfo(key);

    $all("[data-lens]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lens") === key));
    });
    $all(".lens-box").forEach(function (box) {
      var s = storyById(box.getAttribute("data-story"));
      if (!s) return;
      $("[data-lens-title]", box).textContent = info.lensTitle;
      $("[data-lens-text]", box).textContent = s.lens[key];
    });
    $all(".impact li").forEach(function (li) {
      li.classList.toggle("is-active", li.getAttribute("data-agent") === key);
    });
  }

  // ---------- Deals ----------

  function renderDeals() {
    var key = state.sort.key;
    var dir = state.sort.dir === "asc" ? 1 : -1;
    var rows = D.deals.slice().sort(function (a, b) {
      var av = a[key];
      var bv = b[key];
      if (key === "value") {
        // Undisclosed values always sort last.
        if (av == null && bv == null) return 0;
        if (av == null) return 1;
        if (bv == null) return -1;
        return (av - bv) * dir;
      }
      return String(av).localeCompare(String(bv)) * dir;
    });

    $("#deals tbody").innerHTML = rows
      .map(function (d) {
        return (
          "<tr>" +
          "<td><b>" + esc(d.acquirer) + "</b></td>" +
          "<td>" + esc(d.target) + "</td>" +
          "<td>" + esc(d.sector) + "</td>" +
          '<td class="num">' + esc(formatValue(d.value)) + (d.valueNote ? '<span class="sub">' + esc(d.valueNote) + "</span>" : "") + "</td>" +
          '<td><span class="state" data-state="' + esc(d.state) + '">' + esc(d.status) + "</span></td>" +
          "</tr>"
        );
      })
      .join("");

    $all("#deals th").forEach(function (th) {
      var k = th.getAttribute("data-key");
      th.setAttribute("aria-sort", k === key ? (dir === 1 ? "ascending" : "descending") : "none");
      var btn = $("button", th);
      var arrow = k === key ? (dir === 1 ? " ↑" : " ↓") : "";
      btn.textContent = btn.textContent.replace(/ [↑↓]$/, "") + arrow;
    });
  }

  function bindDeals() {
    $all("#deals th button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var key = btn.parentNode.getAttribute("data-key");
        if (state.sort.key === key) {
          state.sort.dir = state.sort.dir === "asc" ? "desc" : "asc";
        } else {
          state.sort.key = key;
          state.sort.dir = key === "value" ? "desc" : "asc";
        }
        renderDeals();
      });
    });
  }

  // ---------- Agents ----------

  function renderAgents() {
    $("#agents").innerHTML = D.agents
      .map(function (a) {
        return (
          '<article class="agent">' +
          '<span class="chip" data-tone="' + esc(a.tone) + '">' + esc(a.state) + "</span>" +
          "<h3>" + esc(a.name) + "</h3>" +
          "<p>" + esc(a.now) + "</p>" +
          '<p class="consider"><b>Worth considering:</b> ' + esc(a.consider) + "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  // ---------- Picks ----------

  function renderPicks() {
    var W = D.watchlist;
    $("#picks-intro").textContent = W.intro;

    $("#ideas").innerHTML = W.ideas
      .map(function (idea) {
        var dots = [1, 2, 3]
          .map(function (n) { return '<i class="' + (n <= idea.conviction ? "on" : "") + '"></i>'; })
          .join("");
        return (
          '<article class="idea">' +
          '<div class="idea-top">' +
          '<span class="idea-role">' + esc(idea.role) + "</span>" +
          '<span class="conviction" aria-label="Conviction: ' + CONVICTION[idea.conviction] + '">' + dots + " " + CONVICTION[idea.conviction] + "</span>" +
          "</div>" +
          "<h3>" + esc(idea.name) + "</h3>" +
          '<ul class="examples" aria-label="Types of investment">' +
          idea.examples.map(function (ex) { return "<li>" + esc(ex) + "</li>"; }).join("") +
          "</ul>" +
          "<dl>" +
          "<div><dt>Why now</dt><dd>" + esc(idea.why) + "</dd></div>" +
          "<div><dt>Main risks</dt><dd>" + esc(idea.risk) + "</dd></div>" +
          "<div><dt>What would change my mind</dt><dd>" + esc(idea.changeMind) + "</dd></div>" +
          "</dl>" +
          '<div class="idea-foot"><span>Horizon: ' + esc(idea.horizon) + '</span><span class="nfa-tag">Not financial advice</span></div>' +
          "</article>"
        );
      })
      .join("");

    $("#alloc").innerHTML = W.allocation
      .map(function (a) {
        return (
          '<li tabindex="0">' +
          '<span class="alloc-name">' + esc(a.name) + "</span>" +
          '<span class="alloc-track" aria-hidden="true"><span class="alloc-bar" style="width:' + Number(a.pct) + '%"></span></span>' +
          '<span class="alloc-pct">' + Number(a.pct) + "%</span>" +
          '<span class="alloc-tip" role="tooltip">' + Number(a.pct) + "% of my illustrative split</span>" +
          "</li>"
        );
      })
      .join("");

    $("#avoid").innerHTML = W.avoid
      .map(function (a) {
        return '<li><span class="x" aria-hidden="true">✕</span><div><b>' + esc(a.name) + "</b><span>" + esc(a.why) + "</span></div></li>";
      })
      .join("");

    $("#rules").innerHTML = W.rules.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("");
    $("#conflict").textContent = W.conflictNote;
    $("#holdings").textContent = W.holdingsNote;
  }

  // ---------- Theme ----------

  function effectiveTheme() {
    var set = document.documentElement.getAttribute("data-theme");
    if (set === "light" || set === "dark") return set;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function syncThemeButton() {
    var btn = $("#theme-toggle");
    var dark = effectiveTheme() === "dark";
    btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    btn.setAttribute("data-mode", dark ? "dark" : "light");
  }

  function bindTheme() {
    $("#theme-toggle").addEventListener("click", function () {
      var next = effectiveTheme() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      writeStore("reunews-theme", next);
      syncThemeButton();
    });
    if (window.matchMedia) {
      var mq = window.matchMedia("(prefers-color-scheme: dark)");
      if (mq.addEventListener) mq.addEventListener("change", syncThemeButton);
    }
    // The host page may also set data-theme on the root element.
    new MutationObserver(syncThemeButton).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    syncThemeButton();
  }

  // ---------- Nav highlighting and progress ----------

  function bindScroll() {
    var nav = $(".nav");
    var links = $all(".nav a");
    var sections = links
      .map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); })
      .filter(Boolean);

    if ("IntersectionObserver" in window) {
      var visible = {};
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            visible[e.target.id] = e.isIntersecting;
          });
          var current = sections.filter(function (s) { return visible[s.id]; })[0];
          links.forEach(function (a) {
            if (current && a.getAttribute("href") === "#" + current.id) {
              a.setAttribute("aria-current", "true");
              // On narrow screens the nav scrolls sideways; keep the active link visible.
              if (nav.scrollWidth > nav.clientWidth) {
                var left = a.getBoundingClientRect().left - nav.getBoundingClientRect().left + nav.scrollLeft - 16;
                nav.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
              }
            } else {
              a.removeAttribute("aria-current");
            }
          });
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );
      sections.forEach(function (s) { io.observe(s); });
    }

    var bar = $("#progress");
    var ticking = false;
    function update() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      bar.style.transform = "scaleX(" + ratio + ")";
      ticking = false;
    }
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(update);
        }
      },
      { passive: true }
    );
    update();
  }

  // ---------- Boot ----------

  renderHero();
  renderPulse();
  renderCalendar();
  renderLensControls();
  renderStories("economy");
  renderStories("finance");
  renderStories("business");
  renderDeals();
  renderAgents();
  renderPicks();

  document.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest("[data-lens]");
    if (btn) setLens(btn.getAttribute("data-lens"));
  });
  bindDeals();
  bindTheme();
  bindScroll();
})();
