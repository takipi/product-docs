import BaseComp from "./../base/BaseComp";

class SectionComp extends BaseComp {
  defaultConfig = {
    name: "",
    content: ""
  };

  render = config => {
    const { content, name } = Object.assign(this.defaultConfig, config);

    return (
      this.html(`<div id="${name}-start"></div>`) +
      "\n" +
      content +
      "\n" +
      this.html(`<div id="${name}-end"></div>`)
    );
  };
}

export default SectionComp;
