# NLP Web Tool

This project is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. The NLP system analyzes the content and provides information about its subjectivity, tone, and sentiment. To achieve this, the project utilizes an external API called MeaningCloud.

## Introduction to Natural Language Processing

Natural Language Processing (NLP) is a field of artificial intelligence that focuses on enabling computers to understand and process human language, both written and oral. NLP utilizes machine learning and deep learning techniques to analyze vast amounts of data and derive rules and nuances present in human speech.

## NLP on Human Voice

NLP plays a significant role in voice command systems like Alexa and Google Assistant. These systems continually improve by collecting and interpreting voice data. Deciphering verbal interactions can be challenging due to factors such as sarcasm, tone, regional accents, and linguistic variations across languages.

## NLP on Text

NLP is also applied to text-based applications. For instance, Grammarly, an editing tool, employs NLP to analyze written text and suggest improvements in tone and professionalism. Similarly, Gmail's Smart Compose feature utilizes NLP to propose relevant words and statements based on the current context.

## Project Prerequisites

To set up and run this project, you'll need the following:

- Webserver: Node.js
- Web application framework for routing: Express.js
- Build tool: Webpack (configurations for development and production environments)
- External script: Service Worker
- External API: MeaningCloud (provides the NLP system)

## Getting Started

Follow these steps to get the project up and running:

1. Clone the project repository.
2. Install Node.js if you don't have it already.
3. Install project dependencies by running `npm install`.
4. Set up the MeaningCloud API by signing up for an account and obtaining an API key.
5. Create a file named `.env` in the project's root folder (same directory as the `package.json` file).
6. Open the `.env` file and add the following line: `MEANINGCLOUD_API_KEY=your-api-key`. Replace `your-api-key` with the actual API key obtained from MeaningCloud.
7. Save the `.env` file.
8. Build the project using Webpack by running `npm run build-dev` for development mode or `npm run build-prod` for production mode.
9. Start the web server by running `npm start`.
10. Access the web tool in your browser at `http://localhost:3000`.

## Project Structure

The project's file structure is organized as follows:

- `README.md`: This file provides an overview of the project and its setup instructions.
- `package.json`: Contains the project metadata and dependencies.
- `src/`: Directory containing the source code.
  - `client/`: Directory containing the client-side code.
    - `js/`: Directory for JavaScript files.
    - `styles/`: Directory for SCSS files.
    - `views/`: Directory for HTML view templates.
      - `index.html`: Main HTML file for the web tool, including the Service Worker code.
    - `index.js`: Entry point for the client-side code.
  - `server/`: Directory containing the server-side code.
    - `analyzeForm.js`: File for analyzing the submitted form data.
    - `index.js`: Entry point for the server-side code.
- `webpack.dev.js`: Configuration file for Webpack in development mode.
- `webpack.prod.js`: Configuration file for Webpack in production mode.

## License

The project is licensed under the [MIT]. See the [LICENSE](LICENSE) file for more details.

## Contributing

Contributions to this project are welcome. To contribute, please follow the guidelines outlined in [CONTRIBUTING.md](CONTRIBUTING.md). By participating in this project, you agree to abide by the [code of conduct](CODE_OF_CONDUCT.md).

## Conclusion

With the help of MeaningCloud's NLP API, this project allows users to perform NLP analysis on articles or blogs from other websites. By understanding the subjectivity, tone, and sentiment of the content, users can gain valuable insights. Feel free to explore and enhance the project further based on your requirements!
