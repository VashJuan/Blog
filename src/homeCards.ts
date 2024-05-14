// https://getbootstrap.comhttps://tailwindcss.com/docs/5.3/components/card/

interface Button {
  name: string;
  class: string;
  label: string;
  href: string;
}

interface Card {
  header: string;
  image: string;
  imageAlt: string;
  body: string;
  buttons: Button[];
  footer: string;
}

const cards: Card[] = [
  {
    header: 'RangerTrak',

    image: './assets/imgs/site/rangertrak.png',
    imageAlt: 'RangerTrak Logo',
    body: 'RangerTrak is an open-source tool to map and track ranging search and rescue personnel providing updates via radio or other voice technology.',
    buttons: [
      {
        name: 'button1',
        class: 'btn btn-sm btn-warning',
        label: 'Try it out!',
        href: 'https://rangertrak.com',
      },
      {
        name: 'button2',
        class: 'btn btn-sm btn-warning',
        label: 'Download the program!',
        href: 'https://eoconline.github.io',
      },
    ],
    footer: 'RangerTrak(tm)',
  },
  {
    header: 'OpenFemaNgClient',
    image: './assets/imgs/site/OpenFemaNgClient.png',
    imageAlt: 'OpenFemaNgClient Logo',
    body: 'A TypeScript & Angular Client for the openFEMA datasets/APIs',
    buttons: [
      {
        name: 'button1',
        class: 'btn btn-sm btn-warning',
        label: 'Learn More',
        href: 'https://github.com/EOCOnline/openFemaNgClient',
      },
      {
        name: 'button2',
        class: 'btn btn- sm btn - warning',
        label: 'Try it out(HTTP only)',
        href: 'http://eocsw.org',
      },
    ],
    footer: 'openFemaNgClient(tm)',
  },
  {
    header: 'EOC Skillset Crosswalk',
    image: './assets/imgs/site/Skillset.png',
    imageAlt: 'EOC Skillset screenshot',
    body: 'FEMA’s list of Skillsets (& associated Skills/Tasks) help Emergency Operation Centers (EOCs) qualify personnel. Common Skillsets suggest training & provide a standardized vocabulary to specify personnel skills between EOCs. ',
    buttons: [
      {
        name: 'button1',
        class: 'btn btn-sm btn-warning',
        label: 'Excel Crosswalk',
        href: 'https://github.com/EOCOnline/EOC-Skillsets',
      },
      {
        name: 'button2',
        class: 'btn btn-sm btn-warning',
        label: 'Skillsets, Skills & Tasks Listing - in 1 place',
        href: 'https://github.com/EOCOnline/EOC-Skillsets',
      },
    ],
    footer: '',
  },
];
