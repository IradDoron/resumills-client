// types
import { MySkills } from 'types';

// data
import { skillsDefinitions } from 'data/skillsDefinitions';

export const mySkills: MySkills = {
	frontendFrameworks: [
		{
			skill: skillsDefinitions.frontendFrameworks.React,
			relevence: 'relevant',
			status: 'added',
		},
		{
			skill: skillsDefinitions.frontendFrameworks['Angular'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.frontendFrameworks['Vue.js'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.frontendFrameworks['Next.js'],
			relevence: 'relevant',
			status: 'notStarted',
		},
	],
	backendFrameworks: [
		{
			skill: skillsDefinitions.backendFrameworks['Node.js'],
			relevence: 'relevant',
			status: 'added',
		},
		{
			skill: skillsDefinitions.backendFrameworks['Express.js'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.backendFrameworks['Nest.js'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.backendFrameworks['Django'],
			relevence: 'relevant',
			status: 'notStarted',
		},
	],
	backendLibraries: [
		{
			skill: skillsDefinitions.backendLibraries['TensorFlow.js'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.backendLibraries['Socket.io'],
			relevence: 'relevant',
			status: 'notStarted',
		},
	],
	reactLibraries: [
		{
			skill: skillsDefinitions.reactLibraries['React Router'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.reactLibraries['Redux'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.reactLibraries['Recoil'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.reactLibraries['i18next'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.reactLibraries['Axios'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.reactLibraries['Formik'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.reactLibraries['Lodash'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.reactLibraries['Moment.js'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.reactLibraries['React Spring'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.reactLibraries['React Beautiful DnD'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.reactLibraries['Tone.js'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.reactLibraries['abcjs'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.reactLibraries['Tonal.js'],
			relevence: 'relevant',
			status: 'notStarted',
		},
	],
	databases: [
		{
			skill: skillsDefinitions.databases['MongoDB'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.databases['MySQL'],
			relevence: 'relevant',
			status: 'inProgress',
		},
		{
			skill: skillsDefinitions.databases['PostgreSQL'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.databases['Firebase'],
			relevence: 'relevant',
			status: 'notStarted',
		},
	],
	programmingLanguages: [
		{
			skill: skillsDefinitions.programmingLanguages['JavaScript'],
			relevence: 'relevant',
			status: 'added',
		},
		{
			skill: skillsDefinitions.programmingLanguages['TypeScript'],
			relevence: 'relevant',
			status: 'added',
		},
		{
			skill: skillsDefinitions.programmingLanguages['Python'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.programmingLanguages['C#'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.programmingLanguages['SQL'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.programmingLanguages['PHP'],
			relevence: 'relevant',
			status: 'notStarted',
		},
	],
	frontend: [
		{
			skill: skillsDefinitions.frontend['HTML'],
			relevence: 'relevant',
			status: 'added',
		},
		{
			skill: skillsDefinitions.frontend['CSS'],
			relevence: 'relevant',
			status: 'added',
		},
		{
			skill: skillsDefinitions.frontend['Sass'],
			relevence: 'relevant',
			status: 'added',
		},
		{
			skill: skillsDefinitions.frontend['Bootstrap'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.frontend['Material-UI'],
			relevence: 'relevant',
			status: 'added',
		},
		{
			skill: skillsDefinitions.frontend['Styled Components'],
			relevence: 'relevant',
			status: 'added',
		},
		{
			skill: skillsDefinitions.frontend['Emotion'],
			relevence: 'relevant',
			status: 'notStarted',
		},
	],
	developmentTools: [
		{
			skill: skillsDefinitions.developmentTools['Git'],
			relevence: 'relevant',
			status: 'added',
		},
		{
			skill: skillsDefinitions.developmentTools['Visual Studio Code'],
			relevence: 'relevant',
			status: 'added',
		},
	],
	deploymentTools: [
		{
			skill: skillsDefinitions.deploymentTools['Netlify'],
			relevence: 'relevant',
			status: 'added',
		},
		{
			skill: skillsDefinitions.deploymentTools['Heroku'],
			relevence: 'relevant',
			status: 'added',
		},
	],
	webServices: [
		{
			skill: skillsDefinitions.webServices['Amazon Web Services'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.webServices['Google Cloud Platform'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.webServices['Shopify'],
			relevence: 'relevant',
			status: 'notStarted',
		},
	],
	testingTools: [
		{
			skill: skillsDefinitions.testingTools['Jest'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.testingTools['React Testing Library'],
			relevence: 'relevant',
			status: 'notStarted',
		},
	],
	cms: [
		{
			skill: skillsDefinitions.cms['Strapi'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.cms['WordPress'],
			relevence: 'relevant',
			status: 'notStarted',
		},
	],
	dataVisualization: [
		{
			skill: skillsDefinitions.dataVisualization['D3.js'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.dataVisualization['amCharts'],
			relevence: 'relevant',
			status: 'inProgress',
		},
		{
			skill: skillsDefinitions.dataVisualization['React Chart.js 2'],
			relevence: 'relevant',
			status: 'notStarted',
		},
	],
	UiUx: [
		{
			skill: skillsDefinitions.UiUx['Adobe XD'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.UiUx['Adobe Photoshop'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.UiUx['Adobe Illustrator'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.UiUx['Adobe InDesign'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.UiUx['Adobe Dimension'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.UiUx['Figma'],
			relevence: 'relevant',
			status: 'notStarted',
		},
	],
	microsoftOffice: [
		{
			skill: skillsDefinitions.microsoftOffice['Microsoft Word'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.microsoftOffice['Microsoft Excel'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.microsoftOffice['Microsoft PowerPoint'],
			relevence: 'relevant',
			status: 'notStarted',
		},
	],
	computerScience: [
		{
			skill: skillsDefinitions.computerScience['Object Oriented Programming'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill: skillsDefinitions.computerScience['Design Patterns'],
			relevence: 'relevant',
			status: 'notStarted',
		},
		{
			skill:
				skillsDefinitions.computerScience['Algorithms and Data Structures'],
			relevence: 'relevant',
			status: 'notStarted',
		},
	],
};
