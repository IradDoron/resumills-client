const isIncludeCapitalLetter = (str: string): boolean => {
	return str.toLowerCase() !== str;
};

const convertStringToLowerCaseArrayOfWords = (str: string): string[] => {
	let words = [];

	if (str.includes(' ') || str.includes('-') || str.includes('_')) {
		// deal with kebab-case, snake_case, and regular case
		words = str.split(/[-_\s]/);
	} else if (isIncludeCapitalLetter(str)) {
		// deal with camelCase and PascalCase
		const newStr = str.replace(/([A-Z])/g, ' $1');
		words = newStr.split(' ');
	} else {
		words.push(str);
	}

	return words.map((word) => word.toLowerCase());
};

const toKebabCase = (str: string): string => {
	const words = convertStringToLowerCaseArrayOfWords(str);
	return words.join('-');
};

const toCamelCase = (str: string): string => {
	const words = convertStringToLowerCaseArrayOfWords(str);
	return words
		.map((word, index) => {
			if (index === 0) {
				return word;
			} else {
				return word.charAt(0).toUpperCase() + word.slice(1);
			}
		})
		.join('');
};

const toSnakeCase = (str: string): string => {
	const words = convertStringToLowerCaseArrayOfWords(str);
	return words.join('_');
};

const toPascalCase = (str: string): string => {
	const words = convertStringToLowerCaseArrayOfWords(str);
	return words
		.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join('');
};

const toTrainCase = (str: string): string => {
	const words = convertStringToLowerCaseArrayOfWords(str);
	return words
		.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join('-');
};

const toScreamingSnakeCase = (str: string): string => {
	const words = convertStringToLowerCaseArrayOfWords(str);
	return words.join('_').toUpperCase();
};

const toRegularCase = (str: string): string => {
	const words = convertStringToLowerCaseArrayOfWords(str);
	return words
		.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join(' ');
};

const toRegularCaseOnlyFirstLetterCapital = (str: string): string => {
	const words = convertStringToLowerCaseArrayOfWords(str);
	return words
		.map((word, index) => {
			if (index === 0) {
				return word.charAt(0).toUpperCase() + word.slice(1);
			} else {
				return word;
			}
		})
		.join(' ');
};

type StringsFormat =
	| 'kebab-case'
	| 'snake_case'
	| 'camelCase'
	| 'PascalCase'
	| 'train-case'
	| 'SCREAMING_SNAKE_CASE'
	| 'Regular Case'
	| 'Regular case only first letter capital';

const formatString = (str: string, format: StringsFormat): string => {
	switch (format) {
		case 'kebab-case':
			return toKebabCase(str);
		case 'snake_case':
			return toSnakeCase(str);
		case 'camelCase':
			return toCamelCase(str);
		case 'PascalCase':
			return toPascalCase(str);
		case 'train-case':
			return toTrainCase(str);
		case 'SCREAMING_SNAKE_CASE':
			return toScreamingSnakeCase(str);
		case 'Regular Case':
			return toRegularCase(str);
		case 'Regular case only first letter capital':
			return toRegularCaseOnlyFirstLetterCapital(str);
		default:
			return str;
	}
};

export const stringHelpers = {
	formatString,
};
