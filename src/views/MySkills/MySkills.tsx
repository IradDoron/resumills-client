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
	status: 'added' | 'notStarted' | 'inProgress',
	skills: MySkillsType
) => {
	const skillsInCategory = skills[category];
	const filteredSkills = skillsInCategory.filter(
		(skill) => skill.status === status
	);
	return filteredSkills;
};

export const onlyAddedSkills = (skills: MySkillsType) => {
	const skillsKeys = Object.keys(skills);
	const addedSkills = skillsKeys.map((category) => {
		return {
			category,
			skills: getSkillsByCategoryAndIsAdded(category, 'added', skills),
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
	const addedSkills = skills.filter((skill) => skill.status === 'added');
	return addedSkills;
};

export const getSkillsByStatus = (
	skills: MySkill[],
	status: 'added' | 'inProgress' | 'notStarted'
) => {
	const skillsByStatus = skills.filter((skill) => skill.status === status);
	return skillsByStatus;
};

export const getNotAddedSkills = (skills: MySkill[]) => {
	const notAddedSkills = skills.filter(
		(skill) => skill.status === 'notStarted'
	);
	return notAddedSkills;
};

export const getFormattedSkillsForCopy = (skills: MySkillsType) => {
	let formattedSkills = '';
	const skillsArray = convertSkillsObjectToArray(skills);
	skillsArray.forEach((category) => {
		const { skills, category: currCategory } = category;
		const addedSkills = getAddedSkills(skills);
		if (addedSkills.length === 0) return;
		const formattedCategory = stringHelpers.formatString(
			currCategory,
			'Regular case only first letter capital'
		);
		let categoryTextBlock = '';

		categoryTextBlock += `${formattedCategory}: \n`;

		addedSkills.forEach((skill) => {
			const { name } = skill.skill;
			categoryTextBlock += `- ${name} \n`;
		});

		formattedSkills += `${categoryTextBlock} \n`;
	});
	return formattedSkills;
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
								{stringHelpers.formatString(currCategory, 'Regular Case')}
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
										{getSkillsByStatus(skills, 'added').map((skill) => {
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
										In Progress
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
										{getSkillsByStatus(skills, 'inProgress').map((skill) => {
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
										Not Started
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
										{getSkillsByStatus(skills, 'notStarted').map((skill) => {
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

			<Card
				sx={{
					margin: '0 auto',
					padding: '12px 24px',
					width: '60%',
					position: 'relative',
				}}
			>
				<Button
					variant="outlined"
					sx={{
						position: 'absolute',
						top: '8px',
						right: '8px',
					}}
					onClick={() => {
						navigator.clipboard.writeText(getFormattedSkillsForCopy(mySkills));
					}}
				>
					<Typography variant="h3" sx={{ fontSize: '1.2rem' }}>
						Copy
					</Typography>
				</Button>
				<Stack spacing={2}>
					{onlyAddedSkills(mySkills).map((category) => {
						const { category: currCategory, skills } = category;
						const formatedCategory = `${stringHelpers.formatString(
							currCategory,
							'Regular case only first letter capital'
						)}:`;

						return (
							<Stack
								key={currCategory}
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
									{formatedCategory}
								</Typography>

								{skills.map((skill) => {
									const { name } = skill.skill;
									const formatedSkill = `- ${name}`;

									return <Typography key={name}>{formatedSkill}</Typography>;
								})}
							</Stack>
						);
					})}
				</Stack>
			</Card>
		</Stack>
	);
};
