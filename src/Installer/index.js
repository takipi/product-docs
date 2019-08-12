if ($) {
  (function($) {
        $.fn.niceSelect = function(method) {
          // Methods
      if (typeof method == "string") {
            if (method == "update") {
              this.each(function() {
                var $select = $(this);
            var $dropdown = $(this).next(".nice-select");
            var open = $dropdown.hasClass("open");

            if ($dropdown.length) {
                  $dropdown.remove();
              create_nice_select($select);

              if (open) {
                    $select.next().trigger("click");
              }
            }
          });
        } else if (method == "destroy") {
              this.each(function() {
                var $select = $(this);
            var $dropdown = $(this).next(".nice-select");

            if ($dropdown.length) {
                  $dropdown.remove();
              $select.css("display", "");
            }
          });
          if ($(".nice-select").length == 0) {
                $(document).off(".nice_select");
          }
        } else if (method == "clear") {
              this.each(function() {
                var $select = $(this);
            $select.val("none");
            var $dropdown = $(this).next(".nice-select");

            if ($dropdown.length) {
                  $dropdown.remove();
              create_nice_select($select);
            }
          });
        } else {
              console.log('Method "' + method + '" does not exist.');
        }
        return this;
      }
      this.hide();

      // Create custom markup
      this.each(function() {
            var $select = $(this);

        if (!$select.next().hasClass("nice-select")) {
              create_nice_select($select);
        }
      });

      function create_nice_select($select) {
            $select.after(
              $("<div></div>")
            .addClass("nice-select")
            .addClass($select.attr("class") || "")
            .addClass($select.attr("disabled") ? "disabled" : "")
            .attr("tabindex", $select.attr("disabled") ? null : "0")
            .html('<span class="current"></span><ul class="list"></ul>')
        );

        var $dropdown = $select.next();
        var $options = $select.find("option");
        var $selected = $select.find("option:selected");

        $dropdown
          .find(".current")
          .html($selected.data("display") || $selected.text());

        $options.each(function(i) {
              var $option = $(this);
          var display = $option.data("display");

          $dropdown.find("ul").append(
                $("<li></li>")
              .attr("data-value", $option.val())
              .attr("data-display", display || null)
              .addClass(
                    "option" +
                  ($option.is(":selected") ? " selected" : "") +
                  ($option.is(":disabled") ? " disabled" : "")
              )
              .html($option.text())
          );
        });
      }

      /* Event listeners */

      // Unbind existing events in case that the plugin has been initialized before
      $(document).off(".nice_select");

      // Open/close
      $(document).on("click.nice_select", ".nice-select", function(event) {
            var $dropdown = $(this);

        $(".nice-select")
          .not($dropdown)
          .removeClass("open");
        $dropdown.toggleClass("open");

        if ($dropdown.hasClass("open")) {
              $dropdown.find(".option");
          $dropdown.find(".focus").removeClass("focus");
          $dropdown.find(".selected").addClass("focus");
        } else {
              $dropdown.focus();
        }
      });

      // Close when clicking outside
      $(document).on("click.nice_select", function(event) {
            if ($(event.target).closest(".nice-select").length === 0) {
              $(".nice-select")
            .removeClass("open")
            .find(".option");
        }
      });

      // Option click
      $(document).on(
            "click.nice_select",
        ".nice-select .option:not(.disabled)",
        function(event) {
              var $option = $(this);
          var $dropdown = $option.closest(".nice-select");

          $dropdown.find(".selected").removeClass("selected");
          $option.addClass("selected");

          var text = $option.data("display") || $option.text();
          $dropdown.find(".current").text(text);

          $dropdown
            .prev("select")
            .val($option.data("value"))
            .trigger("change");
        }
      );

      // Keyboard events
      $(document).on("keydown.nice_select", ".nice-select", function(event) {
            var $dropdown = $(this);
        var $focused_option = $(
              $dropdown.find(".focus") || $dropdown.find(".list .option.selected")
        );

        // Space or Enter
        if (event.keyCode == 32 || event.keyCode == 13) {
              if ($dropdown.hasClass("open")) {
                $focused_option.trigger("click");
          } else {
                $dropdown.trigger("click");
          }
          return false;
          // Down
        } else if (event.keyCode == 40) {
              if (!$dropdown.hasClass("open")) {
                $dropdown.trigger("click");
          } else {
                var $next = $focused_option
              .nextAll(".option:not(.disabled)")
              .first();
            if ($next.length > 0) {
                  $dropdown.find(".focus").removeClass("focus");
              $next.addClass("focus");
            }
          }
          return false;
          // Up
        } else if (event.keyCode == 38) {
              if (!$dropdown.hasClass("open")) {
                $dropdown.trigger("click");
          } else {
                var $prev = $focused_option
              .prevAll(".option:not(.disabled)")
              .first();
            if ($prev.length > 0) {
                  $dropdown.find(".focus").removeClass("focus");
              $prev.addClass("focus");
            }
          }
          return false;
          // Esc
        } else if (event.keyCode == 27) {
              if ($dropdown.hasClass("open")) {
                $dropdown.trigger("click");
          }
          // Tab
        } else if (event.keyCode == 9) {
              if ($dropdown.hasClass("open")) {
                return false;
          }
        }
      });

      // Detect CSS pointer-events support, for IE <= 10. From Modernizr.
      var style = document.createElement("a").style;
      style.cssText = "pointer-events:auto";
      if (style.pointerEvents !== "auto") {
            $("html").addClass("no-csspointerevents");
      }

      return this;
    };
  })($);
}


window.sections = [];

class SectionManager {
      constructor() {}

  add(key) {
        window.sections.push({
          key: key,
          start: `${key}-start`,
      end: `${key}-end`
    });
  }

  hideBetween(start, end, visibility) {
    const init = document.getElementById(start);
    if (init == null) {
      return;
    }

    const startEl = init.parentElement;

    startEl.style.display = visibility;

    var nextSiblingEl = startEl.nextElementSibling;

    while (nextSiblingEl != null) {
          nextSiblingEl.style.display = visibility;
          nextSiblingEl = nextSiblingEl.nextElementSibling;
    
          if (
            nextSiblingEl == null ||
            nextSiblingEl.querySelector("#" + end) != null
      ) {
            break;
      }
    }
  }

  hide(key) {
        const section = window.sections.find(t => t.key == key);
    
        if (!section) return;
    
        this.hideBetween(section.start, section.end, "none");
  }

  hideAll() {
        for (const section of window.sections) {
          this.hide(section.key);
    }
  }

  show(key) {
        const section = window.sections.find(t => t.key == key);
    
        if (!section) return;
    
        this.hideBetween(section.start, section.end, "block");
  }
}

window.SectionManager = new SectionManager();



if ($) {
      (function($) {
        const config = {
          os: "",
      root: ""
    };

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
        window.SectionManager.show(`installer-saas`);
      }

      if (value == "no") {
        window.SectionManager.hide(`linux-root-yes`);
        window.SectionManager.show(`linux-root-no`);
      }
    }

    function installerSelector(event) {
      const { value } = event.target;

      //config.root = event.target.value;

      if (value == "saas") {
        window.SectionManager.hide(`installer-on-premise`);
        window.SectionManager.show(`installer-saas`);
      }

      if (value == "on-premise") {
        window.SectionManager.hide(`installer-saas`);
        window.SectionManager.show(`installer-on-premise`);
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

    function onGenerateCode() {
      window.SectionManager.show(`code-snippet-area`);
    }

    $(document).ready(function() {
      console.log("ready SaaS Installs");

      $("select").niceSelect();
      $("#os-select").on("change", osSelect);
      $("#root-select").on("change", rootSelect); 
      $('#saas').on("change", installerSelector)
      $('#onPremise').on("change", installerSelector) 
      $('#generateButton').on("click", onGenerateCode) 

      window.SectionManager.add("docker");
      window.SectionManager.add("kubernetes");
      window.SectionManager.add("linux-yes");
      window.SectionManager.add("windows-yes");
      window.SectionManager.add("linux-root-yes");
      window.SectionManager.add("linux-root-no");
      window.SectionManager.add("installer-saas");
      window.SectionManager.add("installer-on-premise");
      window.SectionManager.add("code-snippet-area"); 
      window.SectionManager.hideAll();
    });
  })($);
}
