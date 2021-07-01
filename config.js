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
        name: 'Capgemini Engineering',
        logo:
          'https://media-exp1.licdn.com/dms/image/C4D0BAQGcNoU1nVm4Wg/company-logo_100_100/0/1617853380354?e=1630540800&v=beta&t=8FyboqFiugn4i7T-sGlNmS-9TRuL8nFnrT9PgdV72rg',
      },
      position: 'Software Engineer Front-end',
      description:
        'Description test of a software engineer developing the core products of the company using stunning technologies to improve the user experience.',
      startDate: '01/06/2019',
      endDate: 'Present',
    },
    {
      company: {
        name: 'Concrete Solutions',
        logo:
          'https://media-exp1.licdn.com/dms/image/C4E0BAQFD-9uEfCvDsw/company-logo_100_100/0/1530194425611?e=1630540800&v=beta&t=GRHXqkEHyqoyO6rNMH9EmlBjscaaJCZPbdhzmkMEE8I',
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
        logo:
          'https://media-exp1.licdn.com/dms/image/C4D0BAQFLjZHjNCzjFg/company-logo_100_100/0/1604492502959?e=1630540800&v=beta&t=cq8qryH_8fErB4MmSg4N0BXKqa6-wGVz7QylFJzucfo',
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
