// types
import { SkillDefinitions } from 'types';

export const skillsDefinitions: SkillDefinitions = {
	frontendFrameworks: {
		React: {
			id: '1',
			name: 'React',
			description:
				'React is a JavaScript library for building user interfaces.',
		},
		Angular: {
			id: '2',
			name: 'Angular',
			description:
				'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.',
		},
		'Vue.js': {
			id: '3',
			name: 'Vue.js',
			description:
				'Vue.js is an open-source model–view–viewmodel front end JavaScript framework.',
		},
		'Next.js': {
			id: '4',
			name: 'Next.js',
			description:
				'Next.js is an open-source React front-end development web framework.',
		},
	},
	reactLibraries: {
		'React Router': {
			id: '1',
			name: 'React Router',
			description: 'React Router is a collection of navigational components.',
		},
		Redux: {
			id: '2',
			name: 'Redux',
			description:
				'Redux is an open-source JavaScript library for managing application state.',
		},
		Recoil: {
			id: '3',
			name: 'Recoil',
			description:
				'Recoil is an experimental state management library for React apps.',
		},
		i18next: {
			id: '4',
			name: 'i18next',
			description:
				'i18next is an internationalization-framework written in and for JavaScript.',
		},
		Axios: {
			id: '5',
			name: 'Axios',
			description: 'Axios is a promise-based HTTP client for JavaScript.',
		},
		Formik: {
			id: '6',
			name: 'Formik',
			description:
				'Formik is a small group of React components and hooks for building forms.',
		},
		Lodash: {
			id: '7',
			name: 'Lodash',
			description:
				'Lodash is a JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm.',
		},
		'Moment.js': {
			id: '8',
			name: 'Moment.js',
			description:
				'Moment.js is a JavaScript library that parses, validates, manipulates, and displays dates and times.',
		},
		'React Spring': {
			id: '9',
			name: 'React Spring',
			description:
				'React Spring is a spring-physics based animation library for React.',
		},
		'React Beautiful DnD': {
			id: '10',
			name: 'React Beautiful DnD',
			description:
				'React Beautiful DnD is a set of React components to make beautiful and accessible drag and drop for lists with React.',
		},

		'Tone.js': {
			id: '12',
			name: 'Tone.js',
			description:
				'Tone.js is a Web Audio framework for creating interactive music in the browser.',
		},
		abcjs: {
			id: '13',
			name: 'abcjs',
			description:
				'abcjs is a JavaScript library for rendering music notation.',
		},
		'Tonal.js': {
			id: '14',
			name: 'Tonal.js',
			description: 'Tonal.js is a collection of music theory functions.',
		},
	},
	backendFrameworks: {
		'Node.js': {
			id: '1',
			name: 'Node.js',
			description:
				'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment.',
		},
		'Express.js': {
			id: '2',
			name: 'Express.js',
			description:
				'Express.js, or simply Express, is a back end web application framework for Node.js.',
		},
		'Nest.js': {
			id: '3',
			name: 'Nest.js',
			description:
				'Nest.js is a framework for building efficient, scalable Node.js server-side applications.',
		},
		Django: {
			id: '4',
			name: 'Django',
			description:
				'Django is a Python-based free and open-source web framework.',
		},
	},
	backendLibraries: {
		'TensorFlow.js': {
			id: '1',
			name: 'TensorFlow.js',
			description:
				'TensorFlow.js is a JavaScript library for machine learning.',
		},
		'Socket.io': {
			id: '2',
			name: 'Socket.io',
			description:
				'Socket.io enables real-time, bidirectional and event-based communication.',
		},
	},
	databases: {
		MongoDB: {
			id: '1',
			name: 'MongoDB',
			description:
				'MongoDB is a cross-platform document-oriented database program.',
		},
		MySQL: {
			id: '2',
			name: 'MySQL',
			description:
				'MySQL is an open-source relational database management system.',
		},
		PostgreSQL: {
			id: '3',
			name: 'PostgreSQL',
			description:
				'PostgreSQL is a free and open-source relational database management system emphasizing extensibility and SQL compliance.',
		},
		Firebase: {
			id: '4',
			name: 'Firebase',
			description:
				'Firebase is a platform developed by Google for creating mobile and web applications.',
		},
	},
	programmingLanguages: {
		JavaScript: {
			id: '1',
			name: 'JavaScript',
			description:
				'JavaScript is a high-level, interpreted programming language.',
		},
		TypeScript: {
			id: '2',
			name: 'TypeScript',
			description:
				'TypeScript is a superset of JavaScript that compiles to clean JavaScript output.',
		},
		Python: {
			id: '3',
			name: 'Python',
			description:
				'Python is an interpreted, high-level, general-purpose programming language.',
		},
		'C#': {
			id: '4',
			name: 'C#',
			description:
				'C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.',
		},
		Java: {
			id: '5',
			name: 'Java',
			description:
				'Java is a general-purpose, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
		},
		'C++': {
			id: '6',
			name: 'C++',
			description:
				'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes".',
		},
		PHP: {
			id: '7',
			name: 'PHP',
			description:
				'PHP is a general-purpose scripting language especially suited to web development.',
		},
		C: {
			id: '8',
			name: 'C',
			description:
				'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.',
		},
		SQL: {
			id: '9',
			name: 'SQL',
			description:
				'SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.',
		},
	},
	frontend: {
		HTML: {
			id: '1',
			name: 'HTML',
			description:
				'HTML is the standard markup language for creating Web pages.',
		},
		CSS: {
			id: '2',
			name: 'CSS',
			description:
				'CSS is a style sheet language used for describing the presentation of a document written in a markup language like HTML.',
		},
		Sass: {
			id: '3',
			name: 'Sass',
			description:
				'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.',
		},
		Bootstrap: {
			id: '4',
			name: 'Bootstrap',
			description:
				'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.',
		},
		'Material-UI': {
			id: '5',
			name: 'Material-UI',
			description: `Material-UI is a React component library that implements Google's Material Design.`,
		},
		'Tailwind CSS': {
			id: '6',
			name: 'Tailwind CSS',
			description:
				'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
		},
		'Styled Components': {
			id: '7',
			name: 'Styled Components',
			description:
				'Styled Components is a CSS-in-JS library that is the result of wondering how we could enhance CSS for styling React component systems.',
		},
		'React Bootstrap': {
			id: '8',
			name: 'React Bootstrap',
			description:
				'React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.',
		},
		Reactstrap: {
			id: '9',
			name: 'Reactstrap',
			description:
				'Reactstrap is a library of Bootstrap 4 components that have been built with React.',
		},
		'Ant Design': {
			id: '10',
			name: 'Ant Design',
			description:
				'Ant Design is a React UI library that contains a set of high quality components and demos for building rich, interactive user interfaces.',
		},
		'Semantic UI': {
			id: '11',
			name: 'Semantic UI',
			description:
				'Semantic is a development framework that helps create beautiful, responsive layouts using human-friendly HTML.',
		},
		Materialize: {
			id: '12',
			name: 'Materialize',
			description:
				'Materialize is a modern responsive CSS framework based on Material Design by Google.',
		},
		Bulma: {
			id: '13',
			name: 'Bulma',
			description:
				'Bulma is a free, open source CSS framework based on Flexbox and used by more than 100,000 developers.',
		},
		Foundation: {
			id: '14',
			name: 'Foundation',
			description:
				'Foundation is a family of responsive front-end frameworks that make it easy to design beautiful responsive websites, apps and emails that look amazing on any device.',
		},
		'Chakra UI': {
			id: '15',
			name: 'Chakra UI',
			description:
				'Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.',
		},
		Grommet: {
			id: '16',
			name: 'Grommet',
			description:
				'Grommet is a react-based framework that provides accessibility, modularity, responsiveness, and theming in a tidy package.',
		},
		'React Native Elements': {
			id: '17',
			name: 'React Native Elements',
			description:
				'React Native Elements is a cross-platform React Native UI toolkit.',
		},
		'React Native Paper': {
			id: '18',
			name: 'React Native Paper',
			description:
				'React Native Paper is a high-quality, standard-compliant Material Design library that has you covered in all major use-cases.',
		},
		Emotion: {
			id: '19',
			name: 'Emotion',
			description: `Emotion is a performant and flexible CSS-in-JS library.`,
		},
	},
	developmentTools: {
		Git: {
			id: '1',
			name: 'Git',
			description:
				'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
		},
		GitHub: {
			id: '2',
			name: 'GitHub',
			description:
				'GitHub is a web-based hosting service for version control using Git.',
		},
		GitLab: {
			id: '3',
			name: 'GitLab',
			description:
				'GitLab is a web-based DevOps lifecycle tool that provides a Git-repository manager providing wiki, issue-tracking and continuous integration and deployment pipeline features, using an open-source license, developed by GitLab Inc.',
		},
		Bitbucket: {
			id: '4',
			name: 'Bitbucket',
			description:
				'Bitbucket is a web-based version control repository hosting service owned by Atlassian, for source code and development projects that use either Mercurial or Git revision control systems.',
		},
		'Visual Studio Code': {
			id: '5',
			name: 'Visual Studio Code',
			description:
				'Visual Studio Code is a source-code editor made by Microsoft for Windows, Linux and macOS.',
		},
		Atom: {
			id: '6',
			name: 'Atom',
			description:
				'Atom is a free and open-source text and source code editor for macOS, Linux, and Microsoft Windows with support for plug-ins written in Node.js, and embedded Git Control, developed by GitHub.',
		},
		'Sublime Text': {
			id: '7',
			name: 'Sublime Text',
			description:
				'Sublime Text is a proprietary cross-platform source code editor with a Python application programming interface.',
		},
		Brackets: {
			id: '8',
			name: 'Brackets',
			description:
				'Brackets is a lightweight, yet powerful, modern text editor.',
		},
		WebStorm: {
			id: '9',
			name: 'WebStorm',
			description:
				'WebStorm is a cross-platform integrated development environment (IDE) developed by JetBrains for web development.',
		},
	},
	deploymentTools: {
		Netlify: {
			id: '1',
			name: 'Netlify',
			description:
				'Netlify is a cloud computing company that offers hosting and serverless backend services for static websites.',
		},
		Vercel: {
			id: '2',
			name: 'Vercel',
			description:
				'Vercel is a cloud platform for static sites and Serverless Functions.',
		},
		Surge: {
			id: '3',
			name: 'Surge',
			description: 'Surge is a static web publishing for Front-End Developers.',
		},
		Heroku: {
			id: '4',
			name: 'Heroku',
			description:
				'Heroku is a cloud platform as a service supporting several programming languages.',
		},
		Now: {
			id: '5',
			name: 'Now',
			description: 'Now is a cloud platform for serverless deployment.',
		},
	},
	webServices: {
		'Amazon Web Services': {
			id: '1',
			name: 'Amazon Web Services',
			description:
				'Amazon Web Services is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.',
		},
		Shopify: {
			id: '2',
			name: 'Shopify',
			description:
				'Shopify is a cloud-based, multi-channel commerce platform for high-growth and enterprise businesses.',
		},
		'Google Cloud Platform': {
			id: '3',
			name: 'Google Cloud Platform',
			description:
				'Google Cloud Platform is a suite of cloud computing services.',
		},
	},
	cms: {
		Strapi: {
			id: '1',
			name: 'Strapi',
			description: 'Strapi is a free and open-source headless CMS.',
		},
		WordPress: {
			id: '2',
			name: 'WordPress',
			description:
				'WordPress is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database.',
		},
	},
	testingTools: {
		Jest: {
			id: '1',
			name: 'Jest',
			description:
				'Jest is a delightful JavaScript Testing Framework with a focus on simplicity.',
		},
		'React Testing Library': {
			id: '2',
			name: 'React Testing Library',
			description:
				'React Testing Library is a very light-weight solution for testing React components.',
		},
		Enzyme: {
			id: '3',
			name: 'Enzyme',
			description:
				"Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output.",
		},
		Cypress: {
			id: '4',
			name: 'Cypress',
			description:
				'Cypress is a next generation front end testing tool built for the modern web.',
		},
		Selenium: {
			id: '5',
			name: 'Selenium',
			description:
				'Selenium is a portable framework for testing web applications.',
		},
	},
	dataVisualization: {
		'React Chart.js 2': {
			id: '1',
			name: 'React Chart.js 2',
			description: 'React Chart.js 2 is a wrapper for Chart.js.',
		},
		amCharts: {
			id: '2',
			name: 'amCharts',
			description: 'amCharts is a JavaScript charting library.',
		},
		'D3.js': {
			id: '3',
			name: 'D3.js',
			description:
				'D3.js is a JavaScript library for manipulating documents based on data.',
		},
	},
	UiUx: {
		'Adobe XD': {
			id: '1',
			name: 'Adobe XD',
			description:
				'Adobe XD is a vector-based user experience design tool for web apps and mobile apps, developed and published by Adobe Inc.',
		},
		'Adobe Photoshop': {
			id: '2',
			name: 'Adobe Photoshop',
			description:
				'Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc.',
		},
		'Adobe Illustrator': {
			id: '3',
			name: 'Adobe Illustrator',
			description:
				'Adobe Illustrator is a vector graphics editor developed and marketed by Adobe Inc.',
		},
		'Adobe InDesign': {
			id: '4',
			name: 'Adobe InDesign',
			description:
				'Adobe InDesign is a desktop publishing software application produced by Adobe Inc.',
		},
		'Adobe After Effects': {
			id: '5',
			name: 'Adobe After Effects',
			description:
				'Adobe After Effects is a digital visual effects, motion graphics, and compositing application developed by Adobe Inc.',
		},
		'Adobe Premiere Pro': {
			id: '6',
			name: 'Adobe Premiere Pro',
			description:
				'Adobe Premiere Pro is a timeline-based video editing software application developed by Adobe Inc.',
		},
		'Adobe Lightroom': {
			id: '7',
			name: 'Adobe Lightroom',
			description:
				'Adobe Lightroom is a family of image organization and image manipulation software developed by Adobe Inc.',
		},
		'Adobe Animate': {
			id: '8',
			name: 'Adobe Animate',
			description:
				'Adobe Animate is a multimedia authoring and computer animation program developed by Adobe Inc.',
		},
		'Adobe Audition': {
			id: '9',
			name: 'Adobe Audition',
			description:
				'Adobe Audition is a digital audio editor originally created by Cool Edit Inc.',
		},
		'Adobe Dreamweaver': {
			id: '10',
			name: 'Adobe Dreamweaver',
			description:
				'Adobe Dream Weaver is a proprietary web development tool developed by Adobe Inc.',
		},
		'Adobe Muse': {
			id: '11',
			name: 'Adobe Muse',
			description:
				'Adobe Muse is a discontinued WYSIWYG web editor developed by Adobe Inc.',
		},
		'Adobe Spark': {
			id: '12',
			name: 'Adobe Spark',
			description:
				'Adobe Spark is a suite of web and mobile apps developed by Adobe Inc.',
		},
		'Adobe Dimension': {
			id: '13',
			name: 'Adobe Dimension',
			description:
				'Adobe Dimension is a 3D design and compositing software developed by Adobe Inc.',
		},
		Figma: {
			id: '14',
			name: 'Figma',
			description:
				'Figma is a vector graphics editor and prototyping tool which is primarily web-based.',
		},
	},
	microsoftOffice: {
		'Microsoft Word': {
			id: '1',
			name: 'Microsoft Word',
			description: 'Microsoft Word is a word processor developed by Microsoft.',
		},
		'Microsoft Excel': {
			id: '2',
			name: 'Microsoft Excel',
			description: 'Microsoft Excel is a spreadsheet developed by Microsoft.',
		},
		'Microsoft PowerPoint': {
			id: '3',
			name: 'Microsoft PowerPoint',
			description:
				'Microsoft PowerPoint is a presentation program developed by Microsoft.',
		},
	},
	computerScience: {
		'Object Oriented Programming': {
			id: '1',
			name: 'Object Oriented Programming',
			description:
				'Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data, in the form of fields, often known as attributes; and code, in the form of procedures, often known as methods.',
		},
		'Design Patterns': {
			id: '2',
			name: 'Design Patterns',
			description:
				'Design patterns are typical solutions to common problems in software design. Each pattern is like a blueprint that you can customize to solve a particular design problem in your code.',
		},
		'Algorithms and Data Structures': {
			id: '3',
			name: 'Algorithms and Data Structures',
			description: 'Algorithms and Data Structures',
		},
	},
};
