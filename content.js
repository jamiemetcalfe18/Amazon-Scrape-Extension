//content.js the logic
// content.js
function getProductNumbers() {
    let modelNumber = 'None';
    let partNumber = 'None';
  
    //page model num finder
    const asinElement = document.getElementById('asin');
    if (asinElement) {
      modelNumber = asinElement.textContent.trim();  // Extract the ASIN (model number)
    }
  
    //look elewhere
    const titleElement = document.querySelector('span[id="productTitle"]');
    if (titleElement) {
      modelNumber = titleElement.textContent.trim();
    }
  
    //part num find
    const partNumberElement = document.querySelector('li[data-asin="part_number"] span.a-size-base');
    if (partNumberElement) {
      partNumber = partNumberElement.textContent.trim();
    }
  
    // retun num
    return { modelNumber, partNumber };
  }
  
  // for popup.js
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'getProductNumbers') {
      const productNumbers = getProductNumbers();
      sendResponse({ modelNumber: productNumbers.modelNumber, partNumber: productNumbers.partNumber });
    }
  });
  