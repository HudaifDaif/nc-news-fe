# Saiddit Frontend

Currently hosted at: https://saiddit.netlify.app/

## Summary

This project aims to mimic a frontend web service similar to Reddit ( a network where articles can receive both positive and negative votes). The data is fetched from the backend API (the code for this can be found at: https://github.com/HudaifDaif/nc-news) and all the rendering is done on the client side.

## Using the app

The main page of this app displays articles, which can be filtered and sorted. Clicking on any article provides the article content and related comments. Articles can be commented on and voted on positively or negatively.

## Installation

### Cloning the repository 

Run the following command in your terminal to clone the repository in the current directory: 

```git clone https://github.com/HudaifDaif/nc-news-fe.git```

Navigate into this directory be running ```cd nc-news-fe```

### Installing dependencies

Run `npm install` within the root directory of this project to install all of the required packages.

### Running the app locally

To run this project locally, you will need to run the following command in the terminal:
    ```npm run dev```

Following this, you will be prompted with the local address you can access the app with, hosted on port 5173 by default.

      VITE v5.0.7  ready in 482 ms

    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
    ➜  press h + enter to show help

## Minimum requirements
- Node - v20.10.0