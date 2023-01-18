// imports from 3rd party libraries
import { useRecoilValue } from 'recoil';

// components
import { Chip, Typography } from 'shared/core/dataDisplay';
import { Button } from 'shared/core/inputs';
import { Box, Stack } from 'shared/core/layout';
import { Card } from 'shared/core/surfaces';
import { SkillsCard } from 'views/MySkills/SkillsCard';

// store
import { skillsState } from 'store';

// types
import { MySkill, MySkills as MySkillsType } from 'types';

// helpers
import { stringHelpers } from 'utils/helpers/stringHelpers';

export const getSkillsByCategoryAndIsAdded = (
	category: string,
	isAdded: boolean,
	skills: MySkillsType
) => {
	const skillsInCategory = skills[category];
	const filteredSkills = skillsInCategory.filter(
		(skill) => skill.isAdded === isAdded
	);
	return filteredSkills;
};

export const onlyAddedSkills = (skills: MySkillsType) => {
	const skillsKeys = Object.keys(skills);
	const addedSkills = skillsKeys.map((category) => {
		return {
			category,
			skills: getSkillsByCategoryAndIsAdded(category, true, skills),
		};
	});
	const removedEmptyCategories = addedSkills.filter(
		(category) => category.skills.length > 0
	);

	return removedEmptyCategories;
};

export const convertSkillsObjectToArray = (skills: MySkillsType) => {
	const skillsKeys = Object.keys(skills);
	const skillsArray = skillsKeys.map((category) => {
		return { category, skills: skills[category] };
	});
	return skillsArray;
};

export const getAddedSkills = (skills: MySkill[]) => {
	const addedSkills = skills.filter((skill) => skill.isAdded);
	return addedSkills;
};

export const getNotAddedSkills = (skills: MySkill[]) => {
	const notAddedSkills = skills.filter((skill) => !skill.isAdded);
	return notAddedSkills;
};

export const MySkills = () => {
	const mySkills = useRecoilValue(skillsState);

	return (
		<Stack
			sx={{
				alignItems: 'center',
				padding: '0 24px',
			}}
			spacing={4}
		>
			<Typography variant="h1">My Skills</Typography>
			<Button
				variant="contained"
				color="primary"
				sx={{
					margin: '0 auto',
				}}
			>
				Add Skill
			</Button>
			<Stack spacing={3}>
				{convertSkillsObjectToArray(mySkills).map((category) => {
					const { skills, category: currCategory } = category;
					return (
						<SkillsCard key={currCategory}>
							<Typography
								variant="h2"
								sx={{
									fontSize: '2.5rem',
								}}
							>
								{stringHelpers.toRegularCaseOnlyFirstLetterCapital(
									currCategory
								)}
							</Typography>
							<Stack
								sx={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									width: '100%',
								}}
							>
								<Box
									sx={{
										width: '50%',
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
									}}
								>
									<Typography
										variant="h3"
										sx={{
											fontSize: '1.5rem',
											marginBottom: '12px',
										}}
									>
										Added
									</Typography>
									<Box
										sx={{
											display: 'flex',
											flexDirection: 'row',
											flexWrap: 'wrap',
											justifyContent: 'center',
											alignItems: 'center',
											gap: '12px',
										}}
									>
										{getAddedSkills(skills).map((skill) => {
											const { skill: skillDefintion } = skill;
											const { name } = skillDefintion;

											return <Chip key={name} label={name} />;
										})}
									</Box>
								</Box>
								<Box
									sx={{
										width: '50%',
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
									}}
								>
									<Typography
										variant="h3"
										sx={{
											fontSize: '1.5rem',
											marginBottom: '12px',
										}}
									>
										Not added
									</Typography>
									<Box
										sx={{
											display: 'flex',
											flexDirection: 'row',
											flexWrap: 'wrap',
											justifyContent: 'center',
											alignItems: 'center',
											gap: '12px',
										}}
									>
										{getNotAddedSkills(skills).map((skill) => {
											const { skill: skillDefintion } = skill;
											const { name } = skillDefintion;

											return <Chip key={name} label={name} />;
										})}
									</Box>
								</Box>
							</Stack>
						</SkillsCard>
					);
				})}
			</Stack>

			<Button
				variant="contained"
				color="secondary"
				sx={{
					margin: '0 auto',
				}}
			>
				Format Skills
			</Button>
			<Card
				sx={{
					margin: '0 auto',
					padding: '12px 24px',
					width: '60%',
					border: '1px solid green',
				}}
			>
				<Stack spacing={2}>
					{onlyAddedSkills(mySkills).map((category) => {
						const { category: currCategory, skills } = category;

						return (
							<Stack
								sx={{
									alignItems: 'flex-start',
								}}
							>
								<Typography
									variant="h3"
									sx={{
										fontSize: '1.4rem',
									}}
								>
									{`${stringHelpers.toRegularCase(currCategory)}:`}
								</Typography>

								{skills.map((skill, index, array) => {
									const { name } = skill.skill;
									console.log(name);
									return <Typography>{`- ${name}`}</Typography>;
								})}
							</Stack>
						);
					})}
				</Stack>
			</Card>
		</Stack>
	);
};
