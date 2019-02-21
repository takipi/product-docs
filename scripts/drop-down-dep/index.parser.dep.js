// import TagManager from "./../tag-manager";

// class DropDownParser {
//   static parse = content => {
//     const regex = new RegExp(`\\[dropdown\\].*?\\[\\/dropdown\\]`, "gs");

//     const tags = TagManager.getAll(regex, content);

//     return tags;
//   };

//   static parseConfig = tag => {
//     const regex = new RegExp(`\\[dropdown\\](.*?)\\[\\/dropdown\\]`, "gs");

//     const content = TagManager.get(regex, tag);

//     return JSON.parse(content);
//   };
// }

// export default DropDownParser;
