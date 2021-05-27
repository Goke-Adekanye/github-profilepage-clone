// PAGE SCROLL EVENT LISTENER
window.addEventListener("scroll", () => {
  //STICK SUBNAV__FULL-SCREEN TO TOP
  if (window.pageYOffset > 86) {
    document.getElementById("sub-nav__full-screen").classList.add("fixed");
  } else if (window.pageYOffset < 86) {
    document.getElementById("sub-nav__full-screen").classList.remove("fixed");
  }

  //SHOW USER-DETAILS ON SUBNAV ON PAGE-SCROLL
  if (window.pageYOffset > 300) {
    document.getElementById("sub-nav__user-details").classList.add("show");
  } else if (window.pageYOffset < 300) {
    document.getElementById("sub-nav__user-details").classList.remove("show");
  }

  //STICK SUBNAV__SMALL-SCREEN TO TOP
  if (window.pageYOffset > 320) {
    document.getElementById("sub-nav__small-screen").classList.add("fixed");
  } else if (window.pageYOffset < 320) {
    document.getElementById("sub-nav__small-screen").classList.remove("fixed");
  }
});

//GITHUB REPOSITORY API
const git = {
  repositories: {
    nodes: [
      {
        name: "react-online-store",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum aut incidunt consequuntur",
        url: "https://github.com/Goke-Adekanye/react-online-store",
        updatedAt: "2019-10-13T14:32:31Z",
        forkCount: 10,
        stargazers: {
          totalCount: 5,
        },
        primaryLanguage: {
          name: "JavaScript",
        },
      },
      {
        name: "react-social-app",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum aut incidunt consequuntur",
        url: "https://github.com/Goke-Adekanye/react-social-app",
        updatedAt: "2019-11-10T10:14:52Z",
        forkCount: 0,
        stargazers: {
          totalCount: 0,
        },
        primaryLanguage: {
          name: "JavaScript",
        },
      },
      {
        name: "node-express-socialapp-backend",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum aut incidunt consequuntur",
        url: "https://github.com/Goke-Adekanye/node-express-socialapp-backend",
        updatedAt: "2019-11-12T02:07:48Z",
        forkCount: 0,
        stargazers: {
          totalCount: 0,
        },
        primaryLanguage: {
          name: "JavaScript",
        },
      },
      {
        name: "aws-dynamodb-tutorial",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum aut incidunt consequuntur",
        url: "https://github.com/Goke-Adekanye/aws-dynamodb-tutorial",
        updatedAt: "2020-05-05T12:35:17Z",
        forkCount: 0,
        stargazers: {
          totalCount: 0,
        },
        primaryLanguage: {
          name: "Ruby",
        },
      },
      {
        name: "serverless-stack-api",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum aut incidunt consequuntur",
        url: "https://github.com/Goke-Adekanye/serverless-stack-api",
        updatedAt: "2020-05-15T09:06:30Z",
        forkCount: 0,
        stargazers: {
          totalCount: 0,
        },
        primaryLanguage: {
          name: "JavaScript",
        },
      },
      {
        name: "serverless-stack-client",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum aut incidunt consequuntur",
        url: "https://github.com/Goke-Adekanye/serverless-stack-client",
        updatedAt: "2020-05-21T15:27:43Z",
        forkCount: 0,
        stargazers: {
          totalCount: 0,
        },
        primaryLanguage: {
          name: "JavaScript",
        },
      },
      {
        name: "Research-question",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum aut incidunt consequuntur",
        url: "https://github.com/Goke-Adekanye/Research-question",
        updatedAt: "2020-09-24T20:14:29Z",
        forkCount: 0,
        stargazers: {
          totalCount: 0,
        },
        primaryLanguage: {
          name: "JavaScript",
        },
      },
      {
        name: "portfolio",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum aut incidunt consequuntur",
        url: "https://github.com/Goke-Adekanye/portfolio",
        updatedAt: "2021-04-01T07:58:00Z",
        forkCount: 0,
        stargazers: {
          totalCount: 0,
        },
        primaryLanguage: {
          name: "JavaScript",
        },
      },
      {
        name: "netfixclone",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum aut incidunt consequuntur",
        url: "https://github.com/Goke-Adekanye/netfixclone",
        updatedAt: "2021-05-21T04:06:48Z",
        forkCount: 0,
        stargazers: {
          totalCount: 0,
        },
        primaryLanguage: {
          name: "JavaScript",
        },
      },
      {
        name: "backend-mongoose-node",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum aut incidunt consequuntur",
        url: "https://github.com/Goke-Adekanye/backend-mongoose-node",
        updatedAt: "2021-03-27T15:14:16Z",
        forkCount: 0,
        stargazers: {
          totalCount: 0,
        },
        primaryLanguage: {
          name: "JavaScript",
        },
      },
      {
        name: "reactjs-interview-questions",
        description:
          "List of top 500 ReactJS Interview Questions & Answers....Coding exercise questions are coming soon!!",
        url: "https://github.com/Goke-Adekanye/reactjs-interview-questions",
        updatedAt: "2021-03-29T09:04:40Z",
        forkCount: 0,
        stargazers: {
          totalCount: 0,
        },
        primaryLanguage: {
          name: "HTML",
        },
      },
      {
        name: "Front-end-Developer-Interview-Questions",
        description:
          "A list of helpful front-end related questions you can use to interview potential candidates, test yourself or completely ignore.",
        url: "https://github.com/Goke-Adekanye/Front-end-Developer-Interview-Questions",
        updatedAt: "2021-03-29T09:07:07Z",
        forkCount: 0,
        stargazers: {
          totalCount: 0,
        },
        primaryLanguage: {
          name: "HTML",
        },
      },
      {
        name: "linkedin-desktop-uiclone",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum aut incidunt consequuntur",
        url: "https://github.com/Goke-Adekanye/linkedin-desktop-uiclone",
        updatedAt: "2021-03-31T08:06:22Z",
        forkCount: 0,
        stargazers: {
          totalCount: 0,
        },
        primaryLanguage: {
          name: "JavaScript",
        },
      },
      {
        name: "HaliMart",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum aut incidunt consequuntur",
        url: "https://github.com/Goke-Adekanye/HaliMart",
        updatedAt: "2021-05-11T15:03:57Z",
        forkCount: 0,
        stargazers: {
          totalCount: 0,
        },
        primaryLanguage: {
          name: "JavaScript",
        },
      },
      {
        name: "react-testing-cc",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum aut incidunt consequuntur",
        url: "https://github.com/Goke-Adekanye/react-testing-cc",
        updatedAt: "2021-05-20T03:13:07Z",
        forkCount: 0,
        stargazers: {
          totalCount: 0,
        },
        primaryLanguage: {
          name: "JavaScript",
        },
      },
      {
        name: "Mart-mongodb",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum aut incidunt consequuntur",
        url: "https://github.com/Goke-Adekanye/Mart-mongodb",
        updatedAt: "2021-05-25T09:25:29Z",
        forkCount: 0,
        stargazers: {
          totalCount: 0,
        },
        primaryLanguage: {
          name: "JavaScript",
        },
      },
    ],
  },
};

const repositories = git.repositories.nodes;
repositories.map((file) => {
  const repositoriesContainer = document.getElementById(
    "repositories-container"
  );

  let markUp = "";
  markUp += `
  <div className="repo-container">
  <div className="repo__title-container">
      <a href=${file.url}>
              <h3>${file.name}</h3>
            </a>
      ${file.description ? `<p>${file.description}</p>` : ""}
  
  <button>
  <img src="./icons/star-icon.svg" alt="image" />
  <span>Star</span>
  </button>
  </div>

  <ul class="repo-details">

        <li class="repo-details__language-tags">
            <span class="repo-details__language-color yellow"></span>
            <span class="repo-details__language">
              ${file.primaryLanguage.name}
            </span>
      </li>

      ${
        file.stargazers.totalCount > 0
          ? `<li class="repo__star">
                    <img src="./icons/star-icon.svg" alt="image" />
                <span>${file.stargazers.totalCount}</span>
              </li>`
          : ""
      }

      ${
        file.forkCount > 0
          ? `<li class="repo__fork">
                <img src="./icons/fork-icon.svg" alt="image" />
                <span>${file.forkCount}</span>
              </li>`
          : ""
      }

      <li>
      <span>Updated ${dayjs(file.updatedAt).format(
        "h:mm a, MMMM DD YYYY"
      )}</span>
    </li>
  </ul>
  </div>
  <hr/>
  `;

  repositoriesContainer.innerHTML += markUp;
});
