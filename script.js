!function (t, e) { function n(t, e) { for (var n, i = 0, o = (t || []).length; o > i; i++)n = t[i], null != n && e(n, i) === !1 && i--; return t } function i(t, e) { (t.getAttribute("href") == e || t.getAttribute("href")[1] == e) && t.setAttribute("class", "current") } function o(e) { e && e.keyCode && 27 != e.keyCode || (t.removeEventListener("keyup", o), t.removeEventListener("click", o), r.className = "") } function a() { t.addEventListener("keyup", o), t.addEventListener("click", o), r.className = "open" } var c = function (e, n) { return (n || t).querySelectorAll(e) }; n(c("nav a"), function (t) { var e = location.toString().split("/")[4]; i(t, e + "/") }), n(c("#tabs a"), function (t) { var e = location.toString().split("/").slice(4).join("/"); i(t, e) }), e.toc && n(c("#main h2"), function (t) { toc.innerHTML += "<p><a href=" + location.toString() + "#" + t.id + ">" + (t.innerText || t.textContent) + "</a></p>" }), n(c("h2, .apidoc h3"), function (t) { t.onclick = function () { location.hash = t.firstChild.name || t.getAttribute("id") } }); var r = c("#langs")[0], u = c("#current-lang")[0]; u && u.addEventListener("click", function (t) { t.stopPropagation(), t.preventDefault(), r.className ? o() : a() }), docsearch({ apiKey: "711f1dd8a690de1a70dba01cba4ddf9b", indexName: "iamnapo", inputSelector: ".doc-search", debug: !1 }) }(document, window);