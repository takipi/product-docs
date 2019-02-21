if ($) {
  (function($) {
    function deploymentModelSelect(event) {
      window.SectionManager.hideAll();
      window.SectionManager.show(event.target.value);
    }

    $(document).ready(function() {
      console.log("ready before-installing-overops");

      $("select").niceSelect();
      $("#deployment-model-select").on("change", deploymentModelSelect);

      window.SectionManager.add("saas");
      window.SectionManager.add("hybrid");
      window.SectionManager.add("premises");
      window.SectionManager.hideAll();
    });
  })($);
}
