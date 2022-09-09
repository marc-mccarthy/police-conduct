<div id="top"></div>

<!-- PROJECT SHIELDS -->

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]](https://linkedin.com/in/dalelotts)

<!-- PROJECT LOGO -->

<br />
<div align="center">
  <a href="https://github.com/marc-mccarthy/police-conduct">
    <img src="./public/favicon.ico" alt="Logo" width="120" height="120">
  </a>

<!-- PROJECT DETAILS -->

  <h3 align="center">PoliceConduct.org</h3>

  <p align="center">
    👨🏻‍✈️ A citizen public records platform where you can view, edit, modify and delete details for your very own police incidents, good or bad.
    <br />
    <a href="https://police-conduct.herokuapp.com">View Demo</a>
    <br />
    <a href="https://github.com/marc-mccarthy/police-conduct"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/marc-mccarthy/police-conduct/issues">Report Bug</a>
    <a href="https://github.com/marc-mccarthy/police-conduct/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#helpful">Helpful Tools & Resources</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Submitting a report on an interaction you had with a specific police officer is not a user friendly process. It involves physically going into a precinct and filing a report, which comes with its own complications and challenges.

PoliceConduct.org is an online application that allows citizens to easily complete a report on an interaction they had with a specific police officer. It’s a simple, easy, user friendly option that streamlines this process. The platform is inherently unbiased - it does not care whether the interaction you are reporting was good or bad. It presents you with the steps you need to submit a report and can allow this data to become public.

![PoliceConduct.org Wireframe](./wireframes/wireframe.gif)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- TECHNOLOGY USED -->

### Built With

- [![React][react.js]][react-url]
- [![Redux][redux.js]][redux-url]
- [![Redux-Saga][redux-saga.js]][redux-saga-url]
- [![PostgreSQL][postgresql]][postgresql-url]
- [![Material-UI][material-ui]][material-ui-url]
- [![Express][express.js]][express-url]
- [![Node][node.js]][node-url]
- [![Markdown][markdown]][markdown-url]
- [![React-Router][react-router]][react-router-url]
- [![Heroku][heroku]][heroku-url]
- [![NPM][npm]][npm-url]

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED & INSTALLING -->

## Getting Started

### Prerequisites

0. This project was tested using Chromium browsers.
1. Create a database named 'prime_police'. The project is built on Postgres, so you will need to make sure to have that installed. Using Postico is recommended to run queries as that was used to create the test queries.
2. Setup a free or paid account on [SendGrid API](https://sendgrid.com).
3. Clone the repo by HTTPS:

    ```sh
    git clone https://github.com/marc-mccarthy/police-conduct.git
    ```
    or via SSH:
    ```sh
    git clone git@github.com:marc-mccarthy/police-conduct.git
    ```
    or by CLI:
    ```sh
    git clone gh repo clone marc-mccarthy/police-conduct
    ```

4. Enter all your credentials into your '.env' file (Don't include quotes):
    - Server Session Secret
    ```dotenv
    SERVER_SESSION_SECRET='A RANDOM PHRASE OVER 8 CHARACTERS'
    ```
    - SendGrid API
    ```dotenv
    SENDGRID_API_KEY='KEY SUPPLIED BY SENDGRID UPON REGISTRATION'
    SENDGRID_API_KEY_EMAIL='EMAIL ADDRESS THAT YOU WANT EMAILS SENT TO'
    ```
    - Heroku Deployment (Optional)
    ```dotenv
    DATABASE_URL=postgres://username:password@host:port/database_name
    ```
    Helpful Links:
    - [Heroku Deployment](https://www.freecodecamp.org/news/how-to-deploy-an-application-to-heroku)
    - [Heroku Postgres](https://devcenter.heroku.com/articles/heroku-postgresql)
    - [Heroku Environment Variables](https://catalins.tech/heroku-environment-variables)
    <br/><br/><br/>

### Installation

1. Install dependencies by running:
    ```sh
    npm install
    ```
2. Run the app with the commands:
    ```sh
    npm run server
    npm run client
    ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### You can create a user and login to the platform:
  ![mobile-view](./wireframes/register.png)
<br/><br/><br/>

### You can create login directly as a previous user:
  ![mobile-view](./wireframes/login.png)
<br/><br/><br/>

### Sidebar navigation of pages:
  ![mobile-view](./wireframes/sidebar-navigation.png)
<br/><br/><br/>

### Create new report:
  ![mobile-view](./wireframes/create-report.png)
<br/><br/><br/>

### View public reports:
  ![mobile-view](./wireframes/public-reports.png)
<br/><br/><br/>

### View details of public report:
  ![mobile-view](./wireframes/public-report-view.png)
<br/><br/><br/>

### View only current user reports:
  ![mobile-view](./wireframes/profile-reports.png)
<br/><br/><br/>

### Edit and delete of current user report:
  ![mobile-view](./wireframes/user-report-view.png)
<br/><br/><br/>

### Administrator user for toggling public/private reports:
  ![mobile-view](./wireframes/admin-toggle.png)
<br/><br/><br/>

### SendGrid API for Administrator tracking new reports:
  ![mobile-view](./wireframes/new-report-sendgrid.png)
<br/><br/><br/>

### SendGrid API for Administrator tracking updated reports:
  ![mobile-view](./wireframes/updated-report-sendgrid.png)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Hand off to Dale for future development
- [ ] Dale inherits repo at current state
- [ ] Future Task #3
- [ ] Future Task #4
- [ ] Future Task #5

See the [open issues](https://github.com/marc-mccarthy/police-conduct/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make this community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Dale Lotts - [LinkedIn](https://linkedin.com/in/dalelotts)

Project Link: [PoliceConduct.org](https://github.com/marc-mccarthy/police-conduct)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- HELPFUL TOOLS & RESOURCES -->

## Helpful

- [README.md Composing](https://www.welcometothejungle.com/en/articles/btc-readme-documentation-best-practices)
- [Stack Overflow](https://stackoverflow.com/)
- [Material UI Documentation](https://mui.com/material-ui/getting-started/learn/)
- [SendGrid API Documentation](https://docs.sendgrid.com)
- [Flaticon](https://www.flaticon.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Creator: Dale Lotts
Developers: Frank Raso, Marc McCarthy, Pete Hall and Robert Thao
Prime Digital Academy

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://linkedin.com/in/the-marc-mccarthy
[gmail-shield]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[gmail-url]: mailto:marstheory20@gmail.com
[product-screenshot]: images/screenshot.png
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[redux.js]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[redux-url]: https://redux.js.org/
[postgresql]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[postgresql-url]: https://www.postgresql.org/
[redux-saga.js]: https://img.shields.io/badge/Redux%20saga-86D46B?style=for-the-badge&logo=redux%20saga&logoColor=999999
[redux-saga-url]: https://redux-saga.js.org/
[markdown]: https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white
[markdown-url]: https://duckduckgo.com/?q=markdown&t=brave&ia=web
[material-ui]: https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white
[material-ui-url]: https://mui.com/
[heroku]: https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white
[heroku-url]: https://heroku.com
[node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[node-url]: https://nodejs.org/en/
[express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[express-url]: https://expressjs.com/
[npm]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[npm-url]: https://www.npmjs.com
[react-router]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[react-router-url]: https://react-router.js.org/
