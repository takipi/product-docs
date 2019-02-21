class TagManager {
  getAll = (regex, text) => {
    const match = text.match(regex);
    return match || [];
  };

  get = (regex, text) => {
    const exec = regex.exec(`${text}`);
    return exec ? exec[1] : "";
  };
}

export default new TagManager();
