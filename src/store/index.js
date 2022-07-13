import { createStore } from "vuex";

export default createStore({
  state: {
    about: {
      introLine: `I am a student pursuing B.Tech in Computer Science & Engineering from Graphic Era Hill University (Dehradun).
                  I also have specialization in Artifical Intelligence and Machine Learning. I have secured an average CGPA
                  of 8.59 (out of 10).`,
      info: {
        workExperience: `A Software Engineering Intern @Uber working with the Customer Obsession Team. I was also a Research Intern
                              @Samsung (SRIB) where I was reponsible for handling Samsung Verification System for Camera Sensors.`,
        interests: `A tech enthusiast with a learn & grow attitude. I like to explore & learn about various tech stacks and have developed projects
                      with the tech stacks I have come across. Also I have a keen interest is solving problems with the existing knowledge of programming that I 
                      possess.`,
        otherHobbies: `Apart from all of this, I really enjoy listening to music & playing Call of Duty: Mobile (Asia Rank 78 )`,
      },
    },

    workExperience: {
      introLine: `I have worked with some of the well known organizations as well as a startup. Internships have played a crucial role 
                  in exposing me to the industry standards. Internships have not only helped me get hands-on experience with
                  the cutting edge tech stacks but also I have got the honor to interact with some of the industry experts and 
                  brilliant minds across the country.`,
      uber: {
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
        point5: `Duration August 2021 - November 2022`,
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
      "https://drive.google.com/file/d/1FzSGEnbVQgwGfmv8GJ5COpJzY42TKgut/view?usp=sharing",
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

    getUberInternDetails(state) {
      return state.workExperience.uber;
    },

    getSamsungInternDetails(state) {
      return state.workExperience.samsung;
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
  },
  mutations: {},
  actions: {},
  modules: {},
});
