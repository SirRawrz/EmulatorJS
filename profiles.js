const profiles = window.profiles || [
  { name: "David",  image: "./Profiles/David.jpg" },
  { name: "Justin", image: "./Profiles/Justin.jpg" },
  { name: "Guest",  image: "./Profiles/Guest.jpg" }
];
// Example: window._customServerTitle = "Family Media Library";
window._customServerTitle = "Justin and David's Library";

(function setServerTitle(){
  const el = document.getElementById('siteTitle');
  if (!el) return;
  const img = el.querySelector('img');
  const imgHtml = img ? img.outerHTML : '';
  const safeTitle = (typeof window._customServerTitle === 'string' && window._customServerTitle.length)
    ? window._customServerTitle
    : "";
  el.innerHTML = safeTitle + ' ' + imgHtml;
  try { document.title = safeTitle; } catch(e){}
})();