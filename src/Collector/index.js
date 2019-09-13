String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

window.Collector = {
  saasCodeWget: '',
  saasCodeCurl: '',
  onPremiseCode: ''
}




if ($) {
      (function($) { 

    const ID = {
      wgetCurlRadioContainer: 'collector-wgetCurlRadioContainer',
      Wget:                   'collector-Wget',
      cURL:                   'collector-cURL',
      codeSnippetArea:        'collector-codeSnippetArea',
      analysisServerHostname: 'collector-analysisServerHostname',
      installationKey:        'collector-installationKey',
      installationKeySaas:    'collector-installationKeySaas',
      collectorPort:          'collector-collectorPort',
      collectorPortSaas:      'collector-collectorPortSaas',
      saas:                   'collector-saas',
      onPremise:              'collector-onPremise',
      generateButton:         'collector-generateButton',
      copyButton:             'collector-copyButton',
      collectorDivSaas:       'collector-div-saas',
      collectorOnPremise:     'collector-on-premise',
      divCodeSnippetArea:     'collector-code-snippet-area'
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
        window.SectionManager.hide(ID.collectorOnPremise);

        if (radioWget.checked) {
          codeSnippetArea.innerText = window.Collector.saasCodeWget;

        } else {
          codeSnippetArea.innerText = window.Collector.saasCodeCurl;
        }
        window.SectionManager.show(ID.collectorDivSaas);
      }

      if (value == "on-premise") { 
        wgetCurlRadioContainer.style.display = 'none'
        codeSnippetArea.innerText = window.Collector.onPremiseCode;
        window.SectionManager.hide(ID.collectorDivSaas);
        window.SectionManager.show(ID.collectorOnPremise);
      }
    }

    
    const codeSaasWget      = 'wget -O - -o /dev/null http://get.takipi.com | sudo bash /dev/stdin -i --token=<INSTALLATION_KEY> --listen_port=<COLLECTOR_PORT>';
    const codeSaasCurl      = 'curl -sSL http://get.takipi.com | sudo bash /dev/stdin -i --token=<INSTALLATION_KEY> --listen_port=<COLLECTOR_PORT>';
    const codeOnPremiseWget = `wget -O - -o /dev/null "http://<HOSTNAME>:8080/app/download?t=inst" | sudo bash /dev/stdin -i --token=<INSTALLATION_KEY> --s3_url http://<HOSTNAME>:8080/service/png --installer_url "http://<HOSTNAME>:8080/app/download?t=tgz" --base_url http://<HOSTNAME>:8080 --listen_port=<PORT_TO_LISTEN_ON>`;

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

          window.Collector.saasCodeWget = commandContent
        } else {
          commandContent = codeSaasCurl
            .replaceAll('<INSTALLATION_KEY>', inputInstallationKeySaas.value)
            .replaceAll('<COLLECTOR_PORT>', inputCollectorPortSaas.value);

          window.Collector.saasCodeCurl = commandContent
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
        window.Collector.onPremiseCode = commandContent
      }

      codeSnippetArea.innerText = commandContent;

      window.SectionManager.show(ID.divCodeSnippetArea);
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
      getElById(ID.codeSnippetArea).innerText = window.Collector.saasCodeWget;
    }
    function onCurlChange () { 
      getElById(ID.codeSnippetArea).innerText = window.Collector.saasCodeCurl;
    }

    $(document).ready(function() { 
      console.log($); 
  
      $('#' + ID.saas).on("change", onInstallerSelectorChange) 
      $('#' + ID.onPremise).on("change", onInstallerSelectorChange)
      $('#' + ID.Wget).on("change", onWgetChange)
      $('#' + ID.cURL).on("change", onCurlChange) 
      $('#' + ID.generateButton).on("click", onGenerateCodeClick) 
      $('#' + ID.copyButton).on("click", copyToClipboard) 

      getElById(ID.collectorPort).defaultValue = '6060';
      getElById(ID.collectorPortSaas).defaultValue = '6060';
      
 
      window.SectionManager.add(ID.collectorDivSaas);
      window.SectionManager.add(ID.collectorOnPremise);
      window.SectionManager.add(ID.divCodeSnippetArea); 
      window.SectionManager.hideAll();
      window.SectionManager.show(ID.collectorDivSaas)
      window.SectionManager.show(ID.divCodeSnippetArea)
    });
  })($);
}
