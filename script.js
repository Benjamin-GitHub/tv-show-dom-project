//You can edit ALL of the code here
const rootElem = document.getElementById("root");

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  episodeList.forEach(createCard);
}

function createCard(episode) {

  // console.log(episode.name);
  // console.log(episode.season);
  // console.log(episode.number);
  // console.log(episode.image.medium);
  // console.log(episode.summary);

  let card = document.createElement("span");

  let cardTitle = document.createElement("h2");
  let cardSeason = Math.floor(episode.season).toString().padStart(2, "0");
  let cardEpisode = Math.floor(episode.number).toString().padStart(2,"0");
  let details = `S${cardSeason}${cardEpisode}`;
  cardTitle.innerText = episode.name + " - " + details;
  card.appendChild(cardTitle);

  let cardImage = document.createElement("img");
  cardImage.src = episode.image.medium;
  cardImage.alt = episode.name;
  card.appendChild(cardImage);

  let cardSummary = document.createElement("p");
  cardSummary.innerHTML = episode.summary;
  card.appendChild(cardSummary);

  rootElem.appendChild(card);
}

window.onload = setup;
