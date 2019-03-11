if ($) {
  (function($) {
    function osSelect(event) {
      window.SectionManager.hideAll();

      const { value } = event.target;

      if (value == "windows") {
        window.SectionManager.show(`windows-yes`);
      }

      if (value == "linux") {
        $("#proxy-select").niceSelect("clear");

        window.SectionManager.show(`linux-yes`);
      }
    }

    function proxySelect(event) {
      window.SectionManager.add("windows-yes");
      window.SectionManager.add("linux-proxy-yes");
      window.SectionManager.add("linux-proxy-no");

      const { value } = event.target;

      //config.root = event.target.value;

      if (value == "yes") {
        window.SectionManager.hide(`linux-proxy-no`);
        window.SectionManager.show(`linux-proxy-yes`);
      }

      if (value == "no") {
        window.SectionManager.hide(`linux-proxy-yes`);
        window.SectionManager.show(`linux-proxy-no`);
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
      $("#os-select-install-agent").on("change", osSelect);
      $("#proxy-select").on("change", proxySelect);

      window.SectionManager.add("linux-yes");
      window.SectionManager.add("windows-yes");
      window.SectionManager.add("linux-proxy-yes");
      window.SectionManager.add("linux-proxy-no");
      window.SectionManager.hideAll();
    });
  })($);
}
