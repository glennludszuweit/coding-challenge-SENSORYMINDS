const a1 = ['Delphi', 'React', 'C'];
const a2 = ['C++', 'SASS', 'ChartJS'];
const a3 = ['Haskell', 'Bootstrap', 'Pascal'];
const a4 = ['Go', 'AWS', 'MVC'];
const a5 = ['Javascript', 'Apollo', 'Github'];

const b1 = ['PHP', 'Composer', 'NPM'];
const b2 = ['C#', 'Symphony', '.Net'];
const b3 = ['MaterialUI', 'Redux', 'Axios'];
const b4 = ['Java', 'MobX', 'Maven'];
const b5 = ['SQL', 'PostgreSQL', 'MongoDB'];

const c1 = ['Python', 'Linux', 'Angular'];
const c2 = ['Scala', 'Vuex', 'Ionic'];
const c3 = ['💣', '😵', '🤖'];
const c4 = ['Typescript', 'SAP', 'openUI'];
const c5 = ['SocketIO', 'Flutter', 'Heroku'];

const d1 = ['Perl', 'Apache', 'GraphQL'];
const d2 = ['ASP', 'Styled Components', 'jQuery'];
const d3 = ['Ruby', 'D3JS', 'RxJS'];
const d4 = ['CSS', 'Pixi', 'Gulp'];
const d5 = ['VB', 'Dojo', 'Laravel'];

const e1 = ['NodeJS', 'NginX', 'ThreeJS'];
const e2 = ['Webpack', 'XML', 'NextJS'];
const e3 = ['Django', 'Swift', 'Spring'];
const e4 = ['GatsbyJS', 'Velocity', 'ABAP'];
const e5 = ['Elixir', 'Flask', 'Deno'];

export const languages = [
  { id: 'a1', name: a1[Math.floor(Math.random() * 3)] },
  { id: 'a2', name: a2[Math.floor(Math.random() * 3)] },
  { id: 'a3', name: a3[Math.floor(Math.random() * 3)] },
  { id: 'a4', name: a4[Math.floor(Math.random() * 3)] },
  { id: 'a5', name: a5[Math.floor(Math.random() * 3)] },

  { id: 'b1', name: b1[Math.floor(Math.random() * 3)] },
  { id: 'b2', name: b2[Math.floor(Math.random() * 3)] },
  { id: 'b3', name: b3[Math.floor(Math.random() * 3)] },
  { id: 'b4', name: b4[Math.floor(Math.random() * 3)] },
  { id: 'b5', name: b5[Math.floor(Math.random() * 3)] },

  { id: 'c1', name: c1[Math.floor(Math.random() * 3)] },
  { id: 'c2', name: c2[Math.floor(Math.random() * 3)] },
  { id: 'c3', name: c3[Math.floor(Math.random() * 3)] },
  { id: 'c4', name: c4[Math.floor(Math.random() * 3)] },
  { id: 'c5', name: c5[Math.floor(Math.random() * 3)] },

  { id: 'd1', name: d1[Math.floor(Math.random() * 3)] },
  { id: 'd2', name: d2[Math.floor(Math.random() * 3)] },
  { id: 'd3', name: d3[Math.floor(Math.random() * 3)] },
  { id: 'd4', name: d4[Math.floor(Math.random() * 3)] },
  { id: 'd5', name: d5[Math.floor(Math.random() * 3)] },

  { id: 'e1', name: e1[Math.floor(Math.random() * 3)] },
  { id: 'e2', name: e2[Math.floor(Math.random() * 3)] },
  { id: 'e3', name: e3[Math.floor(Math.random() * 3)] },
  { id: 'e4', name: e4[Math.floor(Math.random() * 3)] },
  { id: 'e5', name: e5[Math.floor(Math.random() * 3)] },
];

export const winningCombo = [
  ['a1', 'a2', 'a3', 'a4', 'a5'],
  ['b1', 'b2', 'b3', 'b4', 'b5'],
  ['c1', 'c2', 'c3', 'c4', 'c5'],
  ['d1', 'd2', 'd3', 'd4', 'd5'],
  ['e1', 'e2', 'e3', 'e4', 'e5'],
  ['a1', 'b1', 'c1', 'd1', 'e1'],
  ['a2', 'b2', 'c2', 'd2', 'e2'],
  ['a3', 'b3', 'c3', 'd3', 'e3'],
  ['a4', 'b4', 'c4', 'd4', 'e4'],
  ['a5', 'b5', 'c5', 'd5', 'e5'],
  ['a1', 'b2', 'c3', 'd4', 'e5'],
  ['a5', 'b4', 'c3', 'd2', 'e1'],
];
