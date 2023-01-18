export interface CustomPaletteModeState {
	light: 'light';
	dark: 'dark';
	fantasy: 'fantasy';
	muiLight: 'muiLight';
	muiDark: 'muiDark';
	emerald: 'emerald';
	nature: 'nature';
	sunset: 'sunset';
	pastel: 'pastel';
	springtime: 'springtime';
	mystical: 'mystical';
	ethereal: 'ethereal';
}

export interface SkillDefinition {
	id: string;
	name: string;
	description: string;
}

export interface CategoryDefinition {
	/**
	 * The key is the skill name
	 */
	[key: string]: SkillDefinition;
}

export interface SkillDefinitions {
	/**
	 * The key is the category name
	 */
	[key: string]: CategoryDefinition;
}

export interface MySkill {
	skill: SkillDefinition;
	relevence: 'relevant' | 'related' | 'other' | 'notRelevant';
	isAdded: boolean;
	level?: string;
	priority?: number;
	workingXp?: number;
}

export interface MySkills {
	/**
	 * The key is the category name
	 */
	[key: string]: MySkill[];
}
