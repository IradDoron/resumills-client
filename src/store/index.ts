import { atom, RecoilState } from 'recoil';

import { THEMES_NAMES } from 'utils/constants';

// types
import { MySkills } from 'types';

export const themeState = atom({
	key: 'themeState',
	default: 'springtime',
}) as RecoilState<typeof THEMES_NAMES[number]>;

export const isSettingDrawerOpenState = atom({
	key: 'isSettingDrawerOpenState',
	default: false,
}) as RecoilState<boolean>;

export const skillsState: RecoilState<MySkills> = atom({
	key: 'mySkillsState',
	default: [] as any, // TODO: fix this
});
