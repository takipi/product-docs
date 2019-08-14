String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

window.Installer = {
  saasCodeWget: '',
  saasCodeCurl: '',
  onPremiseCode: ''
}

const ID = {
  wgetCurlRadioContainer: 'wgetCurlRadioContainer',
  Wget:                   'Wget',
  codeSnippetArea:        'codeSnippetArea',
  analysisServerHostname: 'analysisServerHostname',
  installationKey:        'installationKey',
  installationKeySaas:    'installationKeySaas',
  collectorPort:          'collectorPort',
  collectorPortSaas:      'collectorPortSaas',
  saas:                   'saas',
}


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

    function getElById (id) {
      return document.getElementById(id)
    }

    function onInstallerSelectorChange(event) {
      const { value } = event.target;
      
      const wgetCurlRadioContainer = getElById(ID.wgetCurlRadioContainer);
      const radioWget              = getElById(ID.Wget); 
      const codeSnippetArea        = getElById(ID.codeSnippetArea); 

      if (value == "saas") {
        wgetCurlRadioContainer.style.display = 'flex'
        window.SectionManager.hide(`installer-on-premise`);

        if (radioWget.checked) {
          codeSnippetArea.innerText = window.Installer.saasCodeWget;

        } else {
          codeSnippetArea.innerText = window.Installer.saasCodeCurl;
        }
        window.SectionManager.show(`installer-saas`);
      }

      if (value == "on-premise") { 
        wgetCurlRadioContainer.style.display = 'none'
        codeSnippetArea.innerText = window.Installer.onPremiseCode;
        window.SectionManager.hide(`installer-saas`);
        window.SectionManager.show(`installer-on-premise`);
      }
    }

    
    const codeSaasWget      = 'wget -O - -o /dev/null http://get.takipi.com | sudo bash /dev/stdin -i --sk=<INSTALLATION_KEY> --listen_port=<COLLECTOR_PORT>';
    const codeSaasCurl      = 'curl -sSL http://get.takipi.com | sudo bash /dev/stdin -i --sk=<INSTALLATION_KEY> --listen_port=<COLLECTOR_PORT>';
    const codeOnPremiseWget = `wget -O - -o /dev/null "http://<HOSTNAME>:8080/app/download?t=inst" | sudo bash /dev/stdin -i --sk=<INSTALLATION_KEY> --s3_url http://<HOSTNAME>:8080/service/png --installer_url "http://<HOSTNAME>:8080/app/download?t=tgz" --base_url http://<HOSTNAME>:8080 --listen_port=<PORT_TO_LISTEN_ON>`;

    function onGenerateCodeClick() {
      const inputAnalysisServerHostname = getElById(ID.analysisServerHostname);
      const inputInstallationKey        = getElById(ID.installationKey);
      const inputInstallationKeySaas    = getElById(ID.installationKeySaas);
      const inputCollectorPort          = getElById(ID.collectorPort); 
      const inputCollectorPortSaas      = getElById(ID.collectorPortSaas); 
      const codeSnippetArea             = getElById(ID.codeSnippetArea); 
      
  
      const radioSaaS    = getElById(ID.saas);
      const radioWget    = getElById(ID.Wget); 
      let commandContent = '';

      // SaaS section 
      if (radioSaaS.checked) {

        // set default value in case input empty
        if (!inputCollectorPortSaas.value) {
          inputCollectorPortSaas.value = '6060' 
        }

        if (radioWget.checked) {
          commandContent = codeSaasWget
            .replaceAll('<INSTALLATION_KEY>', inputInstallationKeySaas.value)
            .replaceAll('<COLLECTOR_PORT>', inputCollectorPortSaas.value);

          window.Installer.saasCodeWget = commandContent
        } else {
          commandContent = codeSaasCurl
            .replaceAll('<INSTALLATION_KEY>', inputInstallationKeySaas.value)
            .replaceAll('<COLLECTOR_PORT>', inputCollectorPortSaas.value);

          window.Installer.saasCodeCurl = commandContent
        }


      // On-Premises section
      } else {

        if (!inputCollectorPort.value) {
          inputCollectorPort.value = '6060';
        }
  
        commandContent = codeOnPremiseWget
          .replaceAll('<INSTALLATION_KEY>', inputInstallationKey.value)
          .replaceAll('<PORT_TO_LISTEN_ON>', inputCollectorPort.value)
          .replaceAll('<HOSTNAME>', inputAnalysisServerHostname.value);
        window.Installer.onPremiseCode = commandContent
      }

      codeSnippetArea.innerText = commandContent;

      window.SectionManager.show(`code-snippet-area`);
    }


    function copyToClipboard () {
      var codeSnippetArea = getElById(ID.codeSnippetArea)

      const input = document.createElement('input');
      input.style.opacity = 0; 
      input.style.height = 0; 
      document.body.appendChild(input);
      input.value = codeSnippetArea.innerText;

      input.select();
       
      document.execCommand('copy');
       
      document.body.removeChild(input)
    }

    function onWgetChange () {
      getElById(ID.codeSnippetArea).innerText = window.Installer.saasCodeWget;
    }
    function onCurlChange () {
      getElById(ID.codeSnippetArea).innerText = window.Installer.saasCodeCurl;
    }

    $(document).ready(function() {
      console.log("ready SaaS Installs");

      $("select").niceSelect();
      $("#os-select").on("change", osSelect);
      $("#root-select").on("change", rootSelect); 
      $('#saas').on("change", onInstallerSelectorChange)
      $('#Wget').on("change", onWgetChange)
      $('#cURL').on("change", onCurlChange)
      $('#onPremise').on("change", onInstallerSelectorChange) 
      $('#generateButton').on("click", onGenerateCodeClick) 
      $('#copyButton').on("click", copyToClipboard) 

      getElById(ID.collectorPort).defaultValue = '6060';
      getElById(ID.collectorPortSaas).defaultValue = '6060';

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
