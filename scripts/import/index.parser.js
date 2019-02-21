import TagManager from "./../tag-manager";

class ImportParser {
  static parse = content => {
    const regex = new RegExp(`\\!INCLUDE\\s+.*$`, "gm");

    const tags = TagManager.getAll(regex, content);

    return tags;
  };

  static parseConfig = tag => {
    const regex = new RegExp(`\\!INCLUDE\\s+"(.*)"$`, "gm");

    const path = TagManager.get(regex, `${tag}`);

    return {
      path
    };
  };
}

export default ImportParser;
