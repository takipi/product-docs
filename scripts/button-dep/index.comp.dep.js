// import BaseComp from "./../base/BaseComp";

// class ButtonComp extends BaseComp {
//   defaultConfig = {
//     label: "",
//     onClick: "",
//     className: "overops-button"
//   };

//   render = config => {
//     const { label, className, onClick } = Object.assign(
//       this.defaultConfig,
//       config
//     );

//     this.addAttr(onClick, `onclick="${onClick}(this)"`);
//     this.addAttr(className, `class="${className}"`);

//     const button = `<button${this.getAttrs()}>${label}</button>`;

//     return this.makeHmlBlock(button);
//   };
// }

// export default ButtonComp;
