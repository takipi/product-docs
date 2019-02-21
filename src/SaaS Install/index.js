if ($) {
  (function($) {
    const config = {
      os: "",
      root: ""
    };

    function osSelect(event) {
      config.os = event.target.value;
      staregyShowConent();
    }

    function rootSelect(event) {
      config.root = event.target.value;
      staregyShowConent();
    }

    function staregyShowConent() {
      window.SectionManager.hideAll();

      if (config.os == "windows") {
        window.SectionManager.show(`windows-yes`);
        return;
      }

      window.SectionManager.show(`${config.os}-${config.root}`);
    }

    $(document).ready(function() {
      console.log("ready SaaS Installs");

      $("select").niceSelect();
      $("#os-select").on("change", osSelect);
      $("#root-select").on("change", rootSelect);

      window.SectionManager.add("linux-yes");
      window.SectionManager.add("linux-no");
      window.SectionManager.add("windows-yes");
      window.SectionManager.hideAll();
    });
  })($);
}
