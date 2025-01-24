// popup.js
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'getProductNumbers' }, (response) => {
      let modelNumber = response.modelNumber;
      let partNumber = response.partNumber;
  
      // if none logic
      if (modelNumber === 'None') {
        modelNumber = 'None';
      }
  
      if (partNumber === 'None') {
        partNumber = 'None';
      }
  
      // display
      document.getElementById('model-number').textContent = modelNumber;
      document.getElementById('part-number').textContent = partNumber;
  
      // for copy
      const copyModelButton = document.getElementById('copy-model');
      const copyPartButton = document.getElementById('copy-part');
  
      // model copy
      copyModelButton.addEventListener('click', () => {
        const textArea = document.createElement('textarea');
        textArea.value = modelNumber;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Model number copied to clipboard!');
      });
  
      // part copy
      copyPartButton.addEventListener('click', () => {
        const textArea = document.createElement('textarea');
        textArea.value = partNumber;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Part number copied to clipboard!');
      });
    });
  });
  
  