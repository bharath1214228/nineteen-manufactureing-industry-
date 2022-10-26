
  var containerId = "buzzsprout-player-10864396"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1056112/10864396-5-best-practices-for-industrial-website-design-in-2022?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1056112%2F10864396-5-best-practices-for-industrial-website-design-in-2022.js%3Fcontainer_id%3Dbuzzsprout-player-10864396%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"Industrial Marketer, 5 Best Practices for Industrial Website Design in 2022\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

