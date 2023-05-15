# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

![Screenshot (384)](https://github.com/Manishagupta766/Tales/assets/84488866/ce4a6155-3ecc-405b-90c8-52cca5923460)

![Screenshot (386)](https://github.com/Manishagupta766/Tales/assets/84488866/1d687b5a-06f7-43a0-98fd-6bac190cd25d)

###Word Count and Histogram Components###
This repository contains React components for counting word occurrences and displaying a histogram of the most frequently occurring words in a text. The components are designed to be used within a larger React application.

**`Components`**
WordCount
The WordCount component takes a textData prop, which is the input text to be analyzed. It displays the occurrences of each word in the text and provides a button to count the occurrences. Once the occurrences are counted, it offers another button to show a histogram of the 20 most occurring words.
![Screenshot (388)](https://github.com/Manishagupta766/Tales/assets/84488866/60711505-abbf-4198-bb21-8134a76edbf7)

###Histogram
The Histogram component displays a bar chart representing the 20 most frequently occurring words. It takes a wordCount prop, which is an object containing word occurrences. The component uses the Chart.js library to render the chart.
![Screenshot (390)](https://github.com/Manishagupta766/Tales/assets/84488866/9f70f757-ca56-49a1-8d20-1ab10fff4522)


#ExportHistogramData
The ExportHistogramData component is a button that allows users to export the histogram data as a CSV file. It takes labels and data props, which represent the labels (words) and corresponding data (occurrence count) for the histogram. Clicking the button generates a CSV file with the word and occurrence count information.

###Content
The Content component serves as a container for the WordCount component and displays the fetched text data from an external API. It uses the axios library to fetch data from https://www.terriblytinytales.com/test.txt and passes the data to the WordCount component for analysis. It also renders the fetched text in a sectioned format.

###Usage
To use these components in your React application, follow these steps:

Install the required dependencies by running npm install axios chart.js react-chartjs-2 in your project directory.

Copy the provided component files (WordCount.js, Histogram.js, ExportHistogramData.js, and Content.js) into your project's component directory.

Import the necessary components into your desired React component files.

Use the WordCount component by passing the textData prop containing the text you want to analyze.

Customize the components as needed by modifying the CSS classes and styling.

Run your React application using npm start and view the results.



###export default App;
In the example above, the WordCount component is used to count the word occurrences in the provided text, while the Content component fetches data from an API and displays it in sections.

###Acknowledgments
The components in this repository were developed using React, Chart.js, and Axios libraries. The project was created as a demonstration of word count and histogram functionalities for educational purposes.

License
This project is licensed under the MIT License. See the LICENSE file for more information.






