import { createStore } from "vuex";
import axios from "axios";

const leetcodeApi = "https://leetcode-stats-api.herokuapp.com/1nnOcent";
const githubApi = "https://api.github.com/users/Abhishek-Dobliyal";
const codeStudioApi =
  "https://api.codingninjas.com/api/v3/public_section/levels/progress?uuid=403a5dcc-77eb-41fb-90de-9b2d46c73de6";

// Need this to work with CORS (only with Hackerrank)
const corsProxy = "https://api.codetabs.com/v1/proxy?quest="; // Only supports GET requests
const hackerrankApi = {
  badges: "https://www.hackerrank.com/rest/hackers/abhishek_1512/badges",
  certificates:
    "https://www.hackerrank.com/community/v1/test_results/hacker_certificate?username=abhishek_1512",
};
const statisticsApi = {
  getStats: "http://localhost:8000/get-stats",
  updateStats: "http://localhost:8000/update-stats",
};

export default createStore({
  state: {
    about: {
      introLine: `I completed my B.Tech in Computer Science & Engineering from Graphic Era Hill University (Dehradun). During my studies, I specialized in Artificial Intelligence and Machine Learning. I achieved an overall CGPA of 8.2 out of 10. With a strong focus on Backend Development, Data Structures and Algorithms, and a solid foundation in various computer science courses, I possess the technical and analytical aptitude necessary to excel in this role. I am a passionate learner who constantly explores different tech stacks, which enhances my ability to analyze complex problems and quickly adapt to new technologies.`,
      info: {
        workExperience: `Currently serving as a Software Engineer at Uber. Prior to that, I held internships as a Software Engineer at both Uber and Zuma (YC'21). At Uber, I was a part of the Customer Obsession Proactive team, while at Zuma, I contributed to the integrations team. Additionally, I served as a Research Intern at Samsung (SRIB) and was responsible for managing the Samsung Verification System for Camera Sensors.`,
        interests: `A tech enthusiast with a learn & grow attitude. I like to explore & learn about various tech stacks and have developed projects
                      with the tech stacks I have come across. Also I have a keen interest is solving problems with the existing knowledge of programming that I 
                      possess.`,
        otherHobbies: `Apart from all of this, I really enjoy listening to music, watching horror movies & playing Call of Duty: Mobile (Asia Rank 78, Season 2). I am also into football and table tennis.`,
      },
    },

    workExperience: {
      introLine: `I have worked with some of the well known organizations as well as a startup. Internships have played a crucial role 
                  in exposing me to the industry standards. Internships have not only helped me get hands-on experience with
                  the cutting edge tech stacks but also I have got the honor to interact with some of the industry experts and 
                  brilliant minds across the country.`,
      uberFTE: {
        point1: `Developed a migration pipeline for 56 CDS datasets (10 TB, ORC to Parquet) for seamless data management.`,
        point2: `Designed and implemented a retrieval workflow from Terrablob to HDFS, achieving an 85% reduction in retrieval time.`,
        point3: `Transformed the Airports intermediate dataset into a reporting dataset for better insights into global airport trips.`,
        point4: `Worked on various engineering excellence items like FTDQ automation for CDS and improving custom partition range sensors.`,
        point5: `Duration June 2023 - Present`,
      },
      uberIntern: {
        point1: `Worked with the Customer Obsession team to proactively resolve cancellation issues of Early Lifecycle Riders.`,
        point2: `Integrated the Proactive Outreach platform with the Policy Engine service to automate the process of outreach resolution.`,
        point3: `Developed Deterministic Trigger Controller from scratch to check for automation existence & integrated it with the.`,
        point4: `Developed a workflow to automatically target the desired riders.`,
        point5: `Duration May 2022 - July 2022`,
      },

      samsung: {
        point1: `Worked on Samsung Verification System for Camera Sensors.`,
        point2: `Experimented with UX documents files as well as camera source files validation and parsing techniques.`,
        point3: `Developed a GUI interface for the validation of camera source files and UX document files.`,
        point4: `Incorporated report generation scripts and log parsing scripts within the desktop application.`,
        point5: `Duration August 2021 - April 2022`,
      },
      zuma: {
        point1: `Developed a TourTypes API from the ground up to retrieve all tour types for a particular community.`,
        point2: `Integrated UIF client services to facilitate seamless interaction with external third-party services.`,
        point3:
          "Implemented the CancelLead API from scratch to automatically cancel the stale leads.",
        point4: `Written essential unit tests for key packages in the Yardi Integrations service`,
        point5: `Duration May 2023 - July 2023`,
      },
    },

    skills: {
      introLine: `I possess the right combination of both technical skills and soft skills. Talking about my technical skills, I have hands-on experience 
                  in various domains as in Web Development, Mobile Development, Machine Learning etc. These skills have not only helped me improve my problem
                  solving ability but have also helped me realize the importance of programming in solving real world problems.`,
    },

    projects: {
      introLine: `What good would it be to learn about a technology if one hasn't done any projects using it? Projects not only help
                  to build a software that can solve real-world problems but they also help in showcasing one\'s experience with a certain
                  technology. I have made certain projects in the domain of Web/App Development & Machine Learning. Here are few of them :`,

      calculationPad: {
        desc: "Jot down any mathematical expression as you would on a paper, Let Machine Learning take care of the rest.",
        info: {
          point1: `Trained Convolutionsl Neural Networks to predict handwritten digits/symbols 
                   and combine them to evaluate the result. Trained model has 97% accuracy.`,
          point2: `Developed both desktop as well as web application that provide a seamless user experience`,
          point3: `Technology Stack Utilized: Python, Tkinter, Streamlit, Tensorflow, Keras, OpenCV.`,
        },
      },

      neuralStyle: {
        desc: "Style your snaps with the power of Deep Learning.",
        info: {
          point1: `Transfer the style of one image to another without losing on the details of the image.`,
          point2: `Used transfer learning (VGG19) model as the baseline for fast yet accurate results.`,
          point3: `Developed web application for an enjoyable user experience. Users have the ability to set the content as well as style ratio.`,
          point4: `Technology Stack Utilized: Python, Javascript, HTML/CSS, VueJS, FastAPI, Tensorflow, Keras.`,
        },
      },

      falcon: {
        desc: "Remotely monitor any system through simple HTTP requests.",
        info: {
          point1: `Provides an interactive web portal to the admin. The admin can monitor the client\'s system through this portal.`,
          point2: `Supports taking web cam snaps, screenshots and more on the client\’s system.`,
          point3: `Technology Stack Utilized: Python, Javascript, HTML/CSS, Flask, Bootstrap, MongoDB.`,
        },
      },
    },
    linkToResume:
      "https://drive.google.com/file/d/1bs8fuvi1jBWzJGZlbdHA62YJRyBH2wno/view?usp=sharing",

    profiles: {
      introLine:
        "The learning curve has been full of ups and down. Exploring and Practicing on various platforms has helped me absorb every concept to the core. The profile cards below shall convey the same",
    },

    statistics: {
      introLine:
        "Showcasing key metrics indicators, providing insights into various aspects of my journey. Understanding these statistics is essential for tracking progress and enhancing user experience.",
      stats: {},
    },

    profileStats: {
      leetcode: {},
      hackerrank: {},
      codestudio: {},
      github: {},
    },
  },
  getters: {
    getAboutMeIntroLine(state) {
      return state.about.introLine;
    },
    getAboutMeListPoints(state) {
      return state.about.info;
    },
    getWorkExperienceIntroLine(state) {
      return state.workExperience.introLine;
    },
    getUberFTEDetails(state) {
      return state.workExperience.uberFTE;
    },
    getUberInternDetails(state) {
      return state.workExperience.uberIntern;
    },
    getSamsungInternDetails(state) {
      return state.workExperience.samsung;
    },
    getZumaInternDetails(state) {
      return state.workExperience.zuma;
    },
    getSkillsIntroLine(state) {
      return state.skills.introLine;
    },
    getProjectDetails(state) {
      return state.projects;
    },
    getProjectsIntroLine(state) {
      return state.projects.introLine;
    },
    getLinkResume(state) {
      return state.linkToResume;
    },
    getProfilesIntroLine(state) {
      return state.profiles.introLine;
    },
    getLeetcodeProfile(state) {
      return state.profiles.leetcode;
    },
    getProfileStats(state) {
      return state.profileStats;
    },
    getStatisticsIntroLine(state) {
      return state.statistics.introLine;
    },
    getStatistics(state) {
      return state.statistics.stats;
    },
  },
  mutations: {
    setLeetcodeStats(state, payload) {
      state.profileStats.leetcode = payload;
    },
    setGithubStats(state, payload) {
      state.profileStats.github = payload;
    },
    setHackerrankStats(state, payload) {
      state.profileStats.hackerrank = payload;
    },
    setCodestudioStats(state, payload) {
      state.profileStats.codestudio = payload;
    },
    setStatistics(state, payload) {
      state.statistics.stats = payload;
    },
  },
  actions: {
    async fetchLeetcodeStats(state) {
      let stats = {};
      await axios
        .get(leetcodeApi)
        .then((res) => {
          stats.solved = res.data.totalSolved ?? "N/A";
          stats.acceptance = (res.data.acceptanceRate ?? "N/A") + " %";
          stats.ranking = res.data.ranking ?? "N/A";
        })
        .catch((err) => {
          console.log("Error:", err);
          stats.solved = "750+";
          stats.acceptance = "55.4 %";
          stats.ranking = "N/A";
        });

      state.commit("setLeetcodeStats", stats);
    },
    async fetchGithubStats(state) {
      let stats = {};
      await axios
        .get(githubApi)
        .then((res) => {
          stats.username = res.data.login ?? "N/A";
          stats.followers = res.data.followers ?? "N/A";
          stats.repositories = res.data.public_repos ?? "N/A";
        })
        .catch((err) => {
          console.log("Error:", err);
          stats.username = "Abhishek-Dobliyal";
          stats.followers = "9";
          stats.repositories = "30+";
        });

      state.commit("setGithubStats", stats);
    },
    async fetchCodestudioStats(state) {
      let stats = {};
      await axios
        .get(codeStudioApi)
        .then((res) => {
          stats.score = res.data.data.current_level.score ?? "N/A";
          stats.title = res.data.data.current_level.name ?? "N/A";
          stats.level = res.data.data.current_level.level ?? "N/A";
        })
        .catch((err) => {
          console.error("Error:", err);
          stats.username = "Abhishek-Dobliyal";
          stats.followers = "9";
          stats.repositories = "30+";
        });

      state.commit("setCodestudioStats", stats);
    },
    async fetchHackerrankStats(state) {
      let stats = {};
      let numBadges = 0,
        numCertificates = 0;
      console.log(numBadges, numCertificates);
      await axios
        .get(corsProxy + hackerrankApi.badges)
        .then((res) => {
          console.log(res.data);
          for (let obj of res.data.models) {
            // Badges earned
            numBadges += obj.current_points > 0;
          }
        })
        .catch((err) => {
          console.log("Error: ", err);
          numBadges = 8; // Default value for badges
        });
      await axios
        .get(corsProxy + hackerrankApi.certificates)
        .then((res) => {
          console.log(res.data);
          for (let obj of res.data.data) {
            // Certificates acquired
            numCertificates += obj.attributes.alloted_at !== null;
          }
        })
        .catch((err) => {
          console.log("Error:", err);
          numCertificates = 9;
        });

      stats.username = "abhishek_1512";
      stats.badges = numBadges;
      stats.certificates = numCertificates;

      state.commit("setHackerrankStats", stats);
    },
    async fetchStatistics(state) {
      await axios
        .get(statisticsApi.getStats)
        .then((resp) => {
          state.commit("setStatistics", resp.data.data);
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    },
    async updateStatistics(state) {
      await axios
        .post(statisticsApi.updateStats, state.getters.getStatistics)
        .then((resp) => {
          console.log(resp.data);
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    },
  },
  modules: {},
});
