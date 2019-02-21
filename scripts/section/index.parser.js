import TagManager from "./../tag-manager";

class SectionParser {
  static parse = content => {
    const regex = new RegExp(`\\[section.*?\\].*?\\[\\/section\\]`, "gs");

    const tags = TagManager.getAll(regex, content);

    return tags;
  };

  static parseConfig = tag => {
    const nameRegex = new RegExp(
      `\\[section:(.*?)\\].*?\\[\\/section\\]`,
      "gs"
    );
    const contetnRegex = new RegExp(
      `\\[section.*?\\](.*?)\\[\\/section\\]`,
      "gs"
    );

    const name = TagManager.get(nameRegex, `${tag}`);
    const content = TagManager.get(contetnRegex, `${tag}`);

    return {
      name,
      content
    };
  };
}

export default SectionParser;
