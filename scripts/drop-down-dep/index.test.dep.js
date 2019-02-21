// import DropDownComp from "./index.comp";
// import DropDownParser from "./index.parser";

// test("DropDown must render correctly", () => {
//   const config = {
//     options: [
//       {
//         value: "one",
//         label: "One"
//       }
//     ],
//     onSelect: "select"
//   };

//   const component = new DropDownComp();

//   const mock = component.render(config);

//   expect(mock).toBe(
//     `[block:html]{ \"html\": \"<select onselect=\\\"select(this)\\\"><option value=\\\"one\\\">One</option></select>\"}[/block]`
//   );
// });

// test("DropDown must parse multi tag in md text", () => {
//   const text = `
// [block:api-header]
// {
// "title": "Select Collector Configuration"
// }
// [/block]

// [dropdown]
// {
// "options":
// [
// { "value":"windows", "label":"Windows" },
// { "value":"linux", "label":"Linux" }
// ]
// }
// [/dropdown]

// adas
// asd

// [dropdown]
// {
// "options":
// [
// { "value":"one", "label":"One" },
// { "value":"two", "label":"Two" }
// ]
// }
// [/dropdown]
//   `;

//   const mock = DropDownParser.parse(text);
//   expect(mock[0]).toBe(
//     `[dropdown]
// {
// "options":
// [
// { "value":"windows", "label":"Windows" },
// { "value":"linux", "label":"Linux" }
// ]
// }
// [/dropdown]`
//   );

//   expect(mock[1]).toBe(
//     `[dropdown]
// {
// "options":
// [
// { "value":"one", "label":"One" },
// { "value":"two", "label":"Two" }
// ]
// }
// [/dropdown]`
//   );
// });
