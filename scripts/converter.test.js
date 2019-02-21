import convert from "./converter";

test("Converter must convert dropdown correctly", () => {});

// test("Converter must convert dropdown correctly", () => {
//   const result = convert(`
// [block:api-header]
// {
//   "title": "Select Collector Configuration"
// }
// [/block]
// [dropdown]
// {
// "options": [
// { "value":"windows", "label":"Windows" },
// { "value":"linux", "label":"Linux" }
// ]
// }
// [/dropdown]
// `);

//   console.log(result);
//   expect(result).toBe(`
// [block:api-header]
// {
//   "title": "Select Collector Configuration"
// }
// [/block]
// [block:html]
// {
//  "html": "<select><option value=\\"windows\\">Windows</option><option value=\\"linux\\">Linux</option></select>"
// }
// [/block]
// `);
// });

// test("Converter must convert button correctly", () => {
//   const result = convert(`
// [block:api-header]
// {
//   "title": "Select Collector Configuration"
// }
// [/block]
// [button]
// {
// "label":"Add"
// }
// [/button]
// [button]
// {
// "label":"Create"
// }
// [/button]
// `);

//   console.log(result);
//   expect(result).toBe(`
// [block:api-header]
// {
//   "title": "Select Collector Configuration"
// }
// [/block]
// [block:html]
// {
//  "html": "<button class=\\"overops-button\\" >Add</button>"
// }
// [/block]
// [block:html]
// {
//  "html": "<button class=\\"overops-button\\" >Create</button>"
// }
// [/block]
// `);
// });
