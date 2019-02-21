import fs from "fs";
import ImportComp from "./index.comp";
import ImportParser from "./index.parser";

jest.mock("fs");
fs.readFileSync.mockImplementation(
  () => `var i=0;
aaaaa`
);

test("Import must render correctly", () => {
  const component = new ImportComp();

  const mock = component.render({
    path: "./mock.js"
  });

  expect(mock).toBe(
    `[block:html]
{
 "html": "<script>var i=0;\\naaaaa</script>"
}
[/block]`
  );
});

test("Import must render correctly", () => {
  const component = new ImportComp();

  const mock = component.render({
    path: "https://mock.js"
  });

  expect(mock).toBe(
    `[block:html]
{
 "html": "<script src=\\"https://mock.js\\"></script>"
}
[/block]`
  );
});

test("Import must parse single tag in md text", () => {
  const text = `
[block:api-header]
{
"title": "Select Collector Configuration"
}
[/block]

!INCLUDE "./index.css"

[block:api-header]
{
"title": "Select Collector Configuration"
}
[/block]

`;

  const mock = ImportParser.parse(text);

  expect(mock[0]).toBe(`!INCLUDE "./index.css"`);
});

test("Import must parse multi tag in md text", () => {
  const text = `
[block:api-header]
{
"title": "Select Collector Configuration"
}
[/block]

!INCLUDE  "./index.js"

ddd

[[dddss]]

!INCLUDE "./index.css"
`;

  const mock = ImportParser.parse(text);

  expect(mock[0]).toBe(`!INCLUDE  "./index.js"`);
  expect(mock[1]).toBe(`!INCLUDE "./index.css"`);
});

test("Import must parse config from tag in md text", () => {
  const tag = `!INCLUDE "./index.css"`;

  const mock = ImportParser.parseConfig(tag);
  expect(mock).toEqual({
    path: "./index.css"
  });
});
