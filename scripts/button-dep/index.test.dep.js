// import ButtonComp from "./index.comp";
// import ButtonParser from "./index.parser";

// test("Button must render correctly", () => {
//   const component = new ButtonComp();

//   const mock = component.render({
//     label: "Test",
//     onClick: "test"
//   });

//   expect(mock).toBe(
//     `<button class="overops-button" onclick="test(this)">Test</button>`
//   );

//   const mockWithCustomClass = component.render({
//     label: "Test",
//     onClick: "test",
//     className: "test"
//   });

//   expect(mockWithCustomClass).toBe(
//     `<button class="test" onclick="test(this)">Test</button>`
//   );
// });

// test("Button must parse single tag in md text", () => {
//   const text = `
// [block:api-header]
// {
// "title": "Select Collector Configuration"
// }
// [/block]

// [button]
// {
// "label":"Add",
// "onClick":"add"
// }
// [/button]
// `;

//   const mock = ButtonParser.parse(text);

//   expect(mock[0]).toBe(
//     `[button]
// {
// "label":"Add",
// "onClick":"add"
// }
// [/button]`
//   );
// });

// test("DropDown must parse multi tag in md text", () => {
//   const text = `
// [block:api-header]
// {
// "title": "Select Collector Configuration"
// }
// [/block]

// [button]
// {
// "label":"Add",
// "onClick":"add"
// }
// [/button]

// ddd

// [button]
// {
// "label":"Nav",
// "onClick":"add"
// }
// [/button]
//   `;

//   const mock = ButtonParser.parse(text);
//   expect(mock[0]).toBe(
//     `[button]
// {
// "label":"Add",
// "onClick":"add"
// }
// [/button]`
//   );

//   expect(mock[1]).toBe(
//     `[button]
// {
// "label":"Nav",
// "onClick":"add"
// }
// [/button]`
//   );
// });
