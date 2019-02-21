// import * as Button from "./button";
// import * as DropDown from "./drop-down";
import * as Import from "./import";
import * as Section from "./section";

const makeHmlBlock = html => {
  return `[block:html]\n{\n "html": "${html
    .replace(/(?:\r\n|\r|\n)/g, "\\n")
    .replace(/"/g, '\\"')}"\n}\n[/block]`;
};

const register = () => {
  return [
    // {
    //   parser: Button.Parser,
    //   component: new Button.Component()
    // },
    // {
    //   parser: DropDown.Parser,
    //   component: new DropDown.Component()
    // },
    {
      parser: Import.Parser,
      component: new Import.Component()
    },
    {
      parser: Section.Parser,
      component: new Section.Component()
    }
  ];
};

const convert = content => {
  let result = content;

  const items = register();
  for (const { parser, component } of items) {
    const mdTags = parser.parse(result);

    for (const tag of mdTags) {
      const config = parser.parseConfig(tag);
      const html = component.render(config);

      result = result.replace(tag, html);
    }
  }

  return result;
};

export default convert;
