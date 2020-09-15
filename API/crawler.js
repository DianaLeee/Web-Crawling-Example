const axios = require('axios');
const cheerio = require('cheerio');

const TARGET_URL = "https://na.leagueoflegends.com/ko-kr/champions/";

const getHTML = async (url) => {
  try {
    return await axios.get(url);
  } catch(e) {
    console.log(error);
  }
}

getHTML(TARGET_URL)
  .then((html) => {
    let championNameList = [];

    const $ = cheerio.load(html.data);
    const bodyList = $("div.style__List-ntddd-2.fqjuPM a");

    bodyList.each((idx, item) => {
      championNameList[idx] = {
        name: $(item).find("span.style__Text-sc-12h96bu-3").text(),
      }
    })

    for(idx in championNameList) {
      console.log(championNameList[idx].name);
    }
  })