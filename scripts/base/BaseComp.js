class BaseComp {
  attrs = [];

  addAttr = (value, html) => {
    if (value) this.attrs.push(html);
  };

  getAttrs = () => {
    return this.attrs.length > 0 ? " " + this.attrs.join(" ") : "";
  };

  html = content => {
    return `[block:html]\n{\n "html": "${content
      .replace(/(?:\r\n|\r|\n)/g, "\\n")
      .replace(/"/g, '\\"')}"\n}\n[/block]`;
  };
}

export default BaseComp;
