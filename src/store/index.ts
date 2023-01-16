import { atom, RecoilState } from 'recoil';

import { THEMES_NAMES } from 'utils/constants';

// types
import { Skill } from 'types';

export const themeState = atom({
	key: 'themeState',
	default: 'dark',
}) as RecoilState<typeof THEMES_NAMES[number]>;

export const isSettingDrawerOpenState = atom({
	key: 'isSettingDrawerOpenState',
	default: false,
}) as RecoilState<boolean>;

export const skillsState = atom({
	key: 'skillsState',
	default: [],
}) as RecoilState<Skill[]> | RecoilState<never[]>;
