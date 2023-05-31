async function getRecommendationsAnime() {
  const request = await fetch('https://api.jikan.moe/v4/recommendations/anime');
  const response = await request.json();
  return response.data;
}

async function getRandomAnime() {
  const request = await fetch('https://api.jikan.moe/v4/random/anime');
  const response = await request.json();
  return response.data;
}

async function getAnimeBySeason(year, season) {
  const url = `https://api.jikan.moe/v4/seasons/${year}/${season}`;
  const request = await fetch(url);
  const response = await request.json();
  return response.data;
}

export {
  getRecommendationsAnime,
  getRandomAnime,
  getAnimeBySeason
}