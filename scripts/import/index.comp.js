import np from "path";
import fs from "fs";
import BaseComp from "./../base/BaseComp";

class ImportComp extends BaseComp {
  defaultConfig = {
    content: ""
  };

  render = config => {
    const { path } = Object.assign(this.defaultConfig, config);
    console.log(path)
    if (/^(https?:\/\/)/g.test(path))
      return this.html(`<script src="${path}"></script>`);

    var content = fs.readFileSync(path, "utf8");
    var extension = np.extname(path);

    if (extension == ".js") return this.html(`<script>${content}</script>`);
    if (extension == ".css") return this.html(`<style>${content}</style>`);
    if (extension == ".html") return this.html(content);
    if (extension == ".md") return content;

    return this.html(``);
  };
}

export default ImportComp;
