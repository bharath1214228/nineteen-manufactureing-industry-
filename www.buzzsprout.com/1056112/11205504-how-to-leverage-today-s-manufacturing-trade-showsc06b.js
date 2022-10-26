
  var containerId = "buzzsprout-player-11205504"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1056112/11205504-how-to-leverage-today-s-manufacturing-trade-shows?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1056112%2F11205504-how-to-leverage-today-s-manufacturing-trade-shows.js%3Fcontainer_id%3Dbuzzsprout-player-11205504%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"Industrial Marketer, How to Leverage Today&#39;s Manufacturing Trade Shows\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

