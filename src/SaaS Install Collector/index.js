if ($) {
  (function($) {
    function osSelect(event) {
      window.SectionManager.hideAll();

      const { value } = event.target;

      if (value == "windows") {
        window.SectionManager.show(`windows-yes`);
      }

      if (value == "docker") {
        window.SectionManager.show(`docker`);
      }

      if (value == "kubernetes") {
        window.SectionManager.show(`kubernetes`);
      }

      if (value == "linux") {
        $("#root-select").niceSelect("clear");

        window.SectionManager.show(`linux-yes`);
      }
    }

    function rootSelect(event) {
      window.SectionManager.add("windows-yes");
      window.SectionManager.add("linux-root-yes");
      window.SectionManager.add("linux-root-no");

      const { value } = event.target;

      //config.root = event.target.value;

      if (value == "yes") {
        window.SectionManager.hide(`linux-root-no`);
        window.SectionManager.show(`linux-root-yes`);
      }

      if (value == "no") {
        window.SectionManager.hide(`linux-root-yes`);
        window.SectionManager.show(`linux-root-no`);
      }
    }

    // function staregyShowConent() {
    //   window.SectionManager.hideAll();

    //   if (config.os == "windows") {
    //     window.SectionManager.show(`windows-yes`);
    //     return;
    //   }

    //   if (config.os == "linux") {
    //     window.SectionManager.show(`linux-yes`);
    //   }

    //   return;
    // }

    $(document).ready(function() {
      console.log("ready SaaS Installs");

      $("select").niceSelect();
      $("#os-select").on("change", osSelect);
      $("#root-select").on("change", rootSelect);

      window.SectionManager.add("docker");
      window.SectionManager.add("kubernetes");
      window.SectionManager.add("linux-yes");
      window.SectionManager.add("windows-yes");
      window.SectionManager.add("linux-root-yes");
      window.SectionManager.add("linux-root-no");
      window.SectionManager.hideAll();
    });
  })($);
}
