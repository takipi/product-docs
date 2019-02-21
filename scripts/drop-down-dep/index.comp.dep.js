// import BaseComp from "./../base/BaseComp";

// class ButtonComp extends BaseComp {
//   defaultConfig = {
//     label: "",
//     onSelect: "",
//     className: ""
//   };

//   renderOption = option => {
//     return `<option value="${option.value}">${option.label}</option>`;
//   };

//   render = config => {
//     const { options, className, onSelect } = Object.assign(
//       this.defaultConfig,
//       config
//     );

//     this.addAttr(onSelect, `onselect="${onSelect}(this)"`);
//     this.addAttr(className, `class="${className}"`);

//     const optionsHtml = options.map(this.renderOption).join("");

//     const select = `<select${this.getAttrs()}>${optionsHtml}</select>`;

//     return this.makeHmlBlock(select);
//   };
// }

// export default ButtonComp;
