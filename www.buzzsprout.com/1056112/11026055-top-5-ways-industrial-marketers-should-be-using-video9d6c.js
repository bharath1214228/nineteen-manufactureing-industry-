
  var containerId = "buzzsprout-player-11026055"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/1056112/11026055-5-ways-industrial-companies-can-benefit-from-marketing-with-video?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1056112%2F11026055-top-5-ways-industrial-marketers-should-be-using-video.js%3Fcontainer_id%3Dbuzzsprout-player-11026055%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"Industrial Marketer, 5 Ways Industrial Companies Can Benefit from Marketing with Video\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

