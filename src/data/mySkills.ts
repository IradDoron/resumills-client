// types
import { MySkills } from 'types';

// data
import { skillsDefinitions } from 'data/skillsDefinitions';

export const mySkills: MySkills = {
	frontendFrameworks: [
		{
			skill: skillsDefinitions.frontendFrameworks.React,
			relevence: 'relevant',
			isAdded: true,
		},
		{
			skill: skillsDefinitions.frontendFrameworks['Angular'],
			relevence: 'relevant',
			isAdded: false,
		},
		{
			skill: skillsDefinitions.frontendFrameworks['Vue.js'],
			relevence: 'relevant',
			isAdded: false,
		},
		{
			skill: skillsDefinitions.frontendFrameworks['Next.js'],
			relevence: 'relevant',
			isAdded: false,
		},
	],
	backendFrameworks: [
		{
			skill: skillsDefinitions.backendFrameworks['Node.js'],
			relevence: 'relevant',
			isAdded: true,
		},
		{
			skill: skillsDefinitions.backendFrameworks['Express.js'],
			relevence: 'relevant',
			isAdded: false,
		},
		{
			skill: skillsDefinitions.backendFrameworks['Nest.js'],
			relevence: 'relevant',
			isAdded: false,
		},
	],
	databases: [
		{
			skill: skillsDefinitions.databases['MongoDB'],
			relevence: 'relevant',
			isAdded: false,
		},
		{
			skill: skillsDefinitions.databases['MySQL'],
			relevence: 'relevant',
			isAdded: false,
		},
		{
			skill: skillsDefinitions.databases['PostgreSQL'],
			relevence: 'relevant',
			isAdded: false,
		},
		{
			skill: skillsDefinitions.databases['Firebase'],
			relevence: 'relevant',
			isAdded: false,
		},
	],
	programmingLanguages: [
		{
			skill: skillsDefinitions.programmingLanguages['JavaScript'],
			relevence: 'relevant',
			isAdded: true,
		},
		{
			skill: skillsDefinitions.programmingLanguages['TypeScript'],
			relevence: 'relevant',
			isAdded: true,
		},
		{
			skill: skillsDefinitions.programmingLanguages['Python'],
			relevence: 'relevant',
			isAdded: false,
		},
		{
			skill: skillsDefinitions.programmingLanguages['C#'],
			relevence: 'relevant',
			isAdded: false,
		},
		{
			skill: skillsDefinitions.programmingLanguages['SQL'],
			relevence: 'relevant',
			isAdded: false,
		},
		{
			skill: skillsDefinitions.programmingLanguages['PHP'],
			relevence: 'relevant',
			isAdded: false,
		},
	],
	frontend: [
		{
			skill: skillsDefinitions.frontend['HTML'],
			relevence: 'relevant',
			isAdded: true,
		},
		{
			skill: skillsDefinitions.frontend['CSS'],
			relevence: 'relevant',
			isAdded: true,
		},
		{
			skill: skillsDefinitions.frontend['Sass'],
			relevence: 'relevant',
			isAdded: true,
		},
		{
			skill: skillsDefinitions.frontend['Bootstrap'],
			relevence: 'relevant',
			isAdded: false,
		},
		{
			skill: skillsDefinitions.frontend['Material-UI'],
			relevence: 'relevant',
			isAdded: true,
		},
		{
			skill: skillsDefinitions.frontend['Styled Components'],
			relevence: 'relevant',
			isAdded: true,
		},
		{
			skill: skillsDefinitions.frontend['Emotion'],
			relevence: 'relevant',
			isAdded: false,
		},
	],
	developmentTools: [
		{
			skill: skillsDefinitions.developmentTools['Git'],
			relevence: 'relevant',
			isAdded: true,
		},
		{
			skill: skillsDefinitions.developmentTools['Visual Studio Code'],
			relevence: 'relevant',
			isAdded: true,
		},
	],
	deploymentTools: [
		{
			skill: skillsDefinitions.deploymentTools['Netlify'],
			relevence: 'relevant',
			isAdded: true,
		},
		{
			skill: skillsDefinitions.deploymentTools['Heroku'],
			relevence: 'relevant',
			isAdded: true,
		},
	],
	testingTools: [
		{
			skill: skillsDefinitions.testingTools['Jest'],
			relevence: 'relevant',
			isAdded: false,
		},
		{
			skill: skillsDefinitions.testingTools['React Testing Library'],
			relevence: 'relevant',
			isAdded: false,
		},
	],
	UiUx: [
		{
			skill: skillsDefinitions.UiUx['Adobe XD'],
			relevence: 'relevant',
			isAdded: false,
		},
		{
			skill: skillsDefinitions.UiUx['Adobe Photoshop'],
			relevence: 'relevant',
			isAdded: false,
		},
		{
			skill: skillsDefinitions.UiUx['Adobe Illustrator'],
			relevence: 'relevant',
			isAdded: false,
		},
		{
			skill: skillsDefinitions.UiUx['Adobe InDesign'],
			relevence: 'relevant',
			isAdded: false,
		},
		{
			skill: skillsDefinitions.UiUx['Adobe Dimension'],
			relevence: 'relevant',
			isAdded: false,
		},
		{
			skill: skillsDefinitions.UiUx['Figma'],
			relevence: 'relevant',
			isAdded: false,
		},
	],
	microsoftOffice: [
		{
			skill: skillsDefinitions.microsoftOffice['Microsoft Word'],
			relevence: 'relevant',
			isAdded: false,
		},
		{
			skill: skillsDefinitions.microsoftOffice['Microsoft Excel'],
			relevence: 'relevant',
			isAdded: false,
		},
		{
			skill: skillsDefinitions.microsoftOffice['Microsoft PowerPoint'],
			relevence: 'relevant',
			isAdded: false,
		},
	],
	computerScience: [
		{
			skill: skillsDefinitions.computerScience['Object Oriented Programming'],
			relevence: 'relevant',
			isAdded: false,
		},
		{
			skill: skillsDefinitions.computerScience['Design Patterns'],
			relevence: 'relevant',
			isAdded: false,
		},
		{
			skill:
				skillsDefinitions.computerScience['Algorithms and Data Structures'],
			relevence: 'relevant',
			isAdded: false,
		},
	],
};
