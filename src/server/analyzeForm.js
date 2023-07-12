const axios = require("axios");
require("dotenv").config();
const urlRegex = /(https?:\/\/[^\s]+)/g;

async function analyzeForm(req, res) {
  try {
    const { url } = req.body;

    // Make a request to the MeaningCloud API
    const meaningCloudResponse = await axios.get(
      "https://api.meaningcloud.com/sentiment-2.1",
      {
        params: {
          key: process.env.MEANINGCLOUD_API_KEY,
          url: url,
          lang: "en",
        },
      }
    );

    const { sentence_list, subjectivity } = meaningCloudResponse.data;

    // Remove URLs from the text
    const sentences = sentence_list.map((sentence) => {
      const textWithoutURLs = sentence.text.replace(urlRegex, "");
      return {
        text: textWithoutURLs,
        polarity: sentence.score_tag,
        confidence: sentence.confidence,
      };
    });

    // Send the extracted data back to the client
    res.json({ sentences, subjectivity });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
}

module.exports = analyzeForm;
