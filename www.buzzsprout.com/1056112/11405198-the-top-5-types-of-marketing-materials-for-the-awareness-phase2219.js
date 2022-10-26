
  var containerId = "buzzsprout-player-11405198"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1056112/11405198-the-top-5-types-of-marketing-content-for-the-awareness-phase?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1056112%2F11405198-the-top-5-types-of-marketing-materials-for-the-awareness-phase.js%3Fcontainer_id%3Dbuzzsprout-player-11405198%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"Industrial Marketer, The Top 5 Types of Marketing Content for the Awareness Phase\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

