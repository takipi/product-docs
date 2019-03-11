if ($) {
  (function($) {
    function typeSelect(event) {
      window.SectionManager.hideAll();

      const { value } = event.target;

      onSelectStrtegyGeneric(value);
    }

    function onSelectStrtegyGeneric(agent) {
      window.SectionManager.hideAll();
      window.SectionManager.show("sw-container-no");
      window.SectionManager.show(agent);
      window.SectionManager.show("testInstallation");
    }

    function swContainerSelect(event) {
      window.SectionManager.hideAll();
      window.SectionManager.add("sw-container-yes");
      window.SectionManager.add("sw-container-no");

      const { value } = event.target;

      if (value == "yes") {
        $("#jvm-environments-select").niceSelect("clear");
        window.SectionManager.hide(`sw-container-no`);
        window.SectionManager.show(`sw-container-yes`);
      }

      if (value == "no") {
        $("#type-select").niceSelect("clear");
        window.SectionManager.hide(`sw-container-yes`);
        window.SectionManager.show(`sw-container-no`);
      }
    }

    function environmentsSelect(event) {
      window.SectionManager.add("environments-kubernetes");
      window.SectionManager.add("environments-docker");

      const { value } = event.target;

      //config.root = event.target.value;

      if (value == "kubernetes") {
        window.SectionManager.hide(`environments-docker`);
        window.SectionManager.show(`environments-kubernetes`);
        window.SectionManager.show("testInstallation");
      }

      if (value == "docker") {
        window.SectionManager.hide(`environments-kubernetes`);
        window.SectionManager.show(`environments-docker`);
        window.SectionManager.show("testInstallation");
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
      $("#type-select").on("change", typeSelect);
      $("#sw-container-select").on("change", swContainerSelect);
      $("#jvm-environments-select").on("change", environmentsSelect);

      window.SectionManager.add("testInstallation");
      window.SectionManager.add("environments-kubernetes");
      window.SectionManager.add("environments-docker");
      window.SectionManager.add("sw-container-yes");
      window.SectionManager.add("sw-container-no");
      window.SectionManager.add("CloudFoundry");
      window.SectionManager.add("eclipse");
      window.SectionManager.add("Glassfish");
      window.SectionManager.add("intelliJ");
      window.SectionManager.add("JBoss-Wildfly");
      window.SectionManager.add("jetty");
      window.SectionManager.add("Mule");
      window.SectionManager.add("netbeans");
      window.SectionManager.add("play-framework");
      window.SectionManager.add("scala");
      window.SectionManager.add("standalone-jvm");
      window.SectionManager.add("tomcat");
      window.SectionManager.add("WebLogic");
      window.SectionManager.add("websphere");
      window.SectionManager.hideAll();
    });
  })($);
}
