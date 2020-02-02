module.exports = {
  url: process.env.VUE_DEV_SERVER_URL,
  elements: {
    itemSummaries: {
      selector: ".item-summaries"
    }
  },
  sections: {
    firstItemSummary: {
      selector: ".item-summaries > :first-child",
      elements: {
        link: {
          selector: ".item-summaries > :first-child > a"
        }
      }
    }
  }
};
