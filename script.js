const rootElem = document.getElementById("root");

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  episodeList.forEach((episode) => {
    let cardWrapper = document.createElement("div");
    rootElem.append(cardWrapper);
    cardWrapper.className = "card-wrapper";

    let cardTitle = document.createElement("span");
    cardTitle.className = "card-title"
    let cardSeason = Math.floor(episode.season).toString().padStart(2, "0");

    let cardEpisode = Math.floor(episode.number).toString().padStart(2, "0");
    let details = `S${cardSeason}${cardEpisode}`;
    cardTitle.innerText = episode.name + " - " + details;
    cardWrapper.append(cardTitle);

    let episodeImage = document.createElement("img");
    episodeImage.src = episode.image.medium;
    episodeImage.style.width = "100%";
    cardWrapper.append(episodeImage);

    let episodeSummary = document.createElement("p");
    episodeSummary.innerHTML = episode.summary;
    episodeSummary.style.padding = "0 10px";
    cardWrapper.append(episodeSummary);
  });
}

window.onload = setup;
