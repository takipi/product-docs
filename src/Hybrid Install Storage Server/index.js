if ($) {
  (function($) {
    function installationLocationSelect(event) {
      window.SectionManager.hideAll();

      const { value } = event.target;

      onSelectStrtegyGeneric(value);
    }

    function onSelectStrtegyGeneric(location) {
      window.SectionManager.show(location);
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
      $("#installation-location-select").on(
        "change",
        installationLocationSelect
      );

      window.SectionManager.add("local-server");
      window.SectionManager.add("docker");
      window.SectionManager.add("kubernetes");
      window.SectionManager.add("aws-s3");
      window.SectionManager.hideAll();
    });
  })($);
}
