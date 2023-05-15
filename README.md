# <span style="font-size:larger-xl;">Project Description</span>


This project consists of a React application that fetches data from the Terribly Tiny Tales API and analyzes the text data to count word occurrences. It provides a user-friendly interface for viewing the word occurrences and visualizing them on a histogram.

The WordCount component is the core functionality of the application. It takes a text input, splits it into individual words, and counts the occurrences of each word. The results are displayed in a list format, showing each word and its corresponding count. Additionally, the component provides an option to view the 20 most occurring words on a histogram.

The Main component serves as the entry point of the application. It fetches data from the Terribly Tiny Tales API and renders the WordCount component with the fetched data. The fetched data is displayed in a sectioned format, making it easy to read and navigate through the content.

The Histogram component utilizes the Chart.js library to generate a bar chart visualizing the word occurrences. It dynamically updates the chart when the word count data changes, ensuring the chart remains up to date with the latest word occurrences.

The ExportHistogramData component enhances the project by providing an option to export the histogram data as a CSV file. This allows users to download the data and use it for further analysis or data processing.

Overall, this project demonstrates the use of React components, data fetching, data analysis, and visualization techniques. It provides a useful tool for analyzing word occurrences in a given text and presents the results in an intuitive and visually appealing manner.

# <span style="font-size:larger;">Deployed Link</span>

#`https://6461d1578bb22116cd851cb4--ephemeral-alfajores-4b8aea.netlify.app/`



# <span style="font-size:larger;">Components</span>

<span style="font-size:medium;">WordCount Component</span>
The WordCount component is a React component that counts the occurrences of each word in a given text and displays the results. It also provides an option to visualize the 20 most occurring words on a histogram.

### Usage

To use these components in your React application, follow these steps:

Install the required dependencies by running npm install axios chart.js react-chartjs-2 in your project directory.

Copy the provided component files (WordCount.js, Histogram.js, ExportHistogramData.js, and Content.js) into your project's component directory.

Import the necessary components into your desired React component files.

Use the WordCount component by passing the textData prop containing the text you want to analyze.

Customize the components as needed by modifying the CSS classes and styling.

Run your React application using npm start and view the results.


## The component has two main states:
![Screenshot (384)](https://github.com/Manishagupta766/Tales/assets/84488866/ce4a6155-3ecc-405b-90c8-52cca5923460)


### Main Component
The Main component renders the WordCount component and fetches data from the Terribly Tiny Tales API. It displays the fetched data in a sectioned format, with each section having a header and body.


![Screenshot (386)](https://github.com/Manishagupta766/Tales/assets/84488866/1d687b5a-06f7-43a0-98fd-6bac190cd25d)
### Counting Word Occurrences: 
Initially, when no word count data is available, the component displays a button to count the occurrences of words in the provided text. Clicking the "Count Occurrences" button triggers the counting process, and the results are displayed in a list.

![Screenshot (388)](https://github.com/Manishagupta766/Tales/assets/84488866/60711505-abbf-4198-bb21-8134a76edbf7)

#### Histogram Visualization:
 After the word occurrences have been counted, the component provides a button to show a histogram of the 20 most occurring words. Clicking the "Show Histogram" button reveals a bar chart visualizing the word occurrences. Additionally, an export button is available to download the histogram data as a CSV file.



### Histogram Component
The Histogram component is responsible for rendering a bar chart using Chart.js library. It takes the word count data as a prop and dynamically updates the chart when the data changes. The top 20 most occurring words are displayed in the chart.

![Screenshot (390)](https://github.com/Manishagupta766/Tales/assets/84488866/9f70f757-ca56-49a1-8d20-1ab10fff4522)

#### ExportHistogramData Component
The ExportHistogramData component is a button that, when clicked, generates a CSV file containing the data used to generate the histogram. Clicking the button triggers a download of the CSV file.



### export default App;
In the example above, the WordCount component is used to count the word occurrences in the provided text, while the Content component fetches data from an API and displays it in sections.

### Acknowledgments
The components in this repository were developed using React, Chart.js, and Axios libraries. The project was created as a demonstration of word count and histogram functionalities for educational purposes.






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




