const lines = document.querySelectorAll('.page-tracker .line');
const spans = document.querySelectorAll('.page-tracker .tracker span');
const sections = document.querySelectorAll('.section-01, .section-02, .section-03');

function getBoundingClientRectTop(el) {
  if (!el) return Number.MIN_SAFE_INTEGER;
  const rect = el.getBoundingClientRect();
  return rect.top;
}

document.addEventListener("scroll", () => {
  lines.forEach((line) => line.classList.remove('active-line'));
  spans.forEach((span) => span.classList.remove('active-text'));

  let activeSection;
  let activeSectionIndex;

  sections.forEach((section, sectionIndex) => {
    if (getBoundingClientRectTop(section) > 100 ) return;
    if (getBoundingClientRectTop(activeSection) <= getBoundingClientRectTop(section)) {
      activeSection = section;
      activeSectionIndex = sectionIndex;
      console.log('találat', activeSectionIndex)
    }
  });

  if (activeSectionIndex >= 0){
    lines[activeSectionIndex].classList.add('active-line');
    spans[activeSectionIndex].classList.add('active-text');
  }
});
