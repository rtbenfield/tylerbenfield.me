---
path: "/projects/abundantia"
title: "Abundantia"
link: "https://abundantia-io.web.app/"
github: "https://github.com/rtbenfield/abundantia"
spoiler: "Abundantia is an app I built for visualizing different loan payment scenarios and planning my mortgage. I found it valuable and thought others could benefit from it as well."
---

One afternoon I was looking for a website or application to help me compare different scenarios for paying off my mortgage faster.
I found a plethora of sites that would show how much additional payments would save on interest,
but none that allowed me to visually compare different scenarios.
I turned to Google Sheets and learned to build an amortization table using the raw formulas rather than the built-in utility functions so that I could account for the additional principal payments.
After completing the spreadsheet I realized the information would be better presented as a web application, so I built Abundantia.
Very much meant to scratch my own itch, Abundantia is limited on features, but I found it very helpful.

Abundantia is free to use and only requires a Google account for authentication.
Your first signin will provision a tenant for you and you can start adding as many loans as you'd like.
Currently only fixed rate with monthly payments is supported, but I may add more options in the future if others find it valuable.
Once you've added a loan, the Explore button will open a dialog where you can create various scenarios and visually compare them with charts.
Each scenario can have multiple payments with varying start and end dates to accurately model how additional payments may fluctuate throughout the life of the loan.
Scenarios are saved to your account so that you can return to them later.

Abundantia is built in React with a Google Firebase backend and hosted as a static site in Firebase.
In addition to being built in React, the frontend leverages Material-UI for pre-built components, JSS for styling, and Recharts for the chart visualizations.
Errors are tracked and logged to Sentry for both the frontend and backend.
Google Analytics is also used to keep tabs on how much traffic the application is getting.
