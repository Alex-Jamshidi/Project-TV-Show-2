// ======================================================
// ----- DOMS
// ======================================================
const episodes = document.getElementById("episodes");

// ======================================================
// ----- Runs on page load
// ======================================================

function setup() {
  const allEpisodes = getAllEpisodes();
  showAllEpisodes(allEpisodes);
}

// ======================================================
// ----- Episode Cards
// ======================================================

// Creates and displays episodes
function showAllEpisodes(allEpisodes) {
  const episodeCards = allEpisodes.map(createEpisodeCard);
  episodes.append(...episodeCards);
}

// Creates single episode card
function createEpisodeCard(episode) {
  const episodeCode = createEpisodeCode(episode);
  const episodeCard = document
    .getElementById("episode-card-template")
    .content.cloneNode(true);
  episodeCard.querySelector("img").src = episode.image.medium;
  episodeCard.querySelector("h3").textContent =
    `${episodeCode} - ${episode.name}`;
  episodeCard.querySelector("p").textContent = episode.summary;

  return episodeCard;
}

// creates episode code as a string e.g. S01E05
function createEpisodeCode(episode) {
  const seasonNum = String(episode.season);
  const episodeNum = String(episode.number);
  return `S${seasonNum.padStart(2, 0)}E${episodeNum.padStart(2, 0)}`;
}

// ======================================================
// ----- Page Loader
// ======================================================
window.onload = setup;
