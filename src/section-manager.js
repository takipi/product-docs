window.sections = [];

class SectionManager {
  constructor() {}

  add(key) {
    window.sections.push({
      key: key,
      start: `${key}-start`,
      end: `${key}-end`
    });
  }

  hideBetween(start, end, visibility) {
    const init = document.getElementById(start);
    if (init == null) {
      return;
    }

    const startEl = init.parentElement;

    startEl.style.display = visibility;

    var nextSiblingEl = startEl.nextElementSibling;

    while (nextSiblingEl != null) {
      nextSiblingEl.style.display = visibility;
      nextSiblingEl = nextSiblingEl.nextElementSibling;

      if (
        nextSiblingEl == null ||
        nextSiblingEl.querySelector("#" + end) != null
      ) {
        break;
      }
    }
  }

  hide(key) {
    const section = window.sections.find(t => t.key == key);

    if (!section) return;

    this.hideBetween(section.start, section.end, "none");
  }

  hideAll() {
    for (const section of window.sections) {
      this.hide(section.key);
    }
  }

  show(key) {
    const section = window.sections.find(t => t.key == key);

    if (!section) return;

    this.hideBetween(section.start, section.end, "block");
  }
}

window.SectionManager = new SectionManager();
