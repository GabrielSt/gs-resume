module.exports = {
  siteTitle: 'Gabriel Santos Resume', // <title>
  manifestName: 'Resume',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-resume/`, // This path is subpath of your hosting https://domain/portfolio
  firstName: 'Gabriel',
  lastName: 'Santos',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/GabrielSt',
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/gabriel-santos-aba22452/',
    },
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/onlyanubhav',
    },
    {
      icon: 'fa-facebook-f',
      name: 'Facebook',
      url: 'https://www.facebook.com/gabriel.pereira.75054',
    },
  ],
  experiences: [
    {
      company: {
        name: 'Metyis',
        logo: 'Metyis.jpg',
      },
      position: 'Software Engineer Front-end',
      description:
        'Working as a Front-end developer on several projects inside the company.\nTechnologies: React / React Native, Typescript, Redux, Styled components, Tailwind, sass.',
      startDate: '01/08/2021',
      endDate: 'Present',
    },
    {
      company: {
        name: 'Capgemini Engineering',
        logo: 'Capgemini.jpg',
      },
      position: 'Software Engineer Front-end',
      description:
        'Fullstack development at farfetch acting as a consultant - Altran\n\nTechnologies used:\n  Front - React\n  Back - .net/node\n\nGloboplay product development acting as consultant - Altran - (06/19 - 10/19)\n\nTechnologies used:\n  Front - React, Redux, SCSS, Jest, Apollo.\n  Back - Node, GraphQL, Redis.',
      startDate: '01/06/2019',
      endDate: '01/08/2021',
    },
    {
      company: {
        name: 'Concrete Solutions',
        logo: 'Concrete.jpg',
      },
      position: 'Software Engineer fullstack',
      description:
        'Description test of a software engineer developing the core products of the company using stunning technologies to improve the user experience.',
      startDate: '01/07/2015',
      endDate: '01/06/2019',
    },
    {
      company: {
        name: 'Stone Pagamentos',
        logo: 'Stone.jpg',
      },
      position: 'Software Engineer',
      description:
        'Description test of a software engineer developing the core products of the company using stunning technologies to improve the user experience.',
      startDate: '01/01/2015',
      endDate: '01/07/2015',
    },
  ],
  education: [
    {
      institution: 'Centro universitário La Salle',
      formation: 'Bachelor',
      area: 'Software engineering',
      description: 'Description test of a education.',
      startDate: '01/01/2011',
      endDate: '01/01/2015',
    },
  ],
  email: 'xgabriel.st@gmail.com',
  phone: '+351 915 604 127',
  address: 'Porto, Portugal',
};
