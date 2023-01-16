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

export interface Skill {
	id: string;
	name: string;
	category: 'relevant' | 'related';
	level?: string;
	description?: string;
	priority?: number;
	workingXp?: number;
	isAdded?: boolean;
}
