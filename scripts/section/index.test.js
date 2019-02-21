import SectionComp from "./index.comp";
import SectionParser from "./index.parser";

test("Section must render correctly", () => {
  const config = {
    name: "test",
    content: "content for test"
  };

  const component = new SectionComp();

  const mock = component.render(config);

  expect(mock).toBe(`[block:html]
{
 \"html\": \"<div id=\\"test-start\\"></div>\"
}
[/block]
content for test
[block:html]
{
 "html": "<div id=\\"test-end\\"></div>"
}
[/block]`);
});

test("Section must parse multi tag in md text", () => {
  const text = `
[section:test]
content test
[/section]

[section:test2]
content test 2
[/section]
  `;

  const mock = SectionParser.parse(text);
  expect(mock[0]).toBe(
    `[section:test]
content test
[/section]`
  );

  expect(mock[1]).toBe(
    `[section:test2]
content test 2
[/section]`
  );
});

test("Section must parse config from tag in md text", () => {
  const tag = `[section:test]
content test
[/section]`;

  const recived = SectionParser.parseConfig(tag);
  expect(recived).toEqual({
    name: "test",
    content: `
content test
`
  });
});
