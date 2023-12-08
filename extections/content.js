chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "modifyHeadlines") {
      const headlines = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
      headlines.forEach((headline) => {
        const originalText = headline.textContent;
        const modifiedText = generateRhyme(originalText);
        headline.textContent = modifiedText;
      });
  
      // const articles = document.querySelectorAll("article, div");
      // articles.forEach((article) => {
      //   const biasSummary = analyzeBias(article.textContent);
      //   appendBiasSummary(article, biasSummary);
      // });
    }
  });

  
  function generateRhyme(text) {
    // Implement your rhyme generation logic
    // This could be a simple implementation or use external libraries
    // For simplicity, let's reverse the text
    return text.split("").reverse().join("");
  }
  
  // function analyzeBias(text) {
  //   // Implement your bias analysis logic
  //   // This could involve checking for specific keywords or sentiments
  //   // For simplicity, let's assume all articles are unbiased
  //   return "Unbiased";
  // }
  
  // function appendBiasSummary(article, biasSummary) {
  //   const summaryElement = document.createElement("p");
  //   summaryElement.textContent = `Bias: ${biasSummary}`;
  //   article.appendChild(summaryElement);
  // }
  