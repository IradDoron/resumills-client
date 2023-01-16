// components
import { Chip, Typography } from 'shared/core/dataDisplay';
import { Button } from 'shared/core/inputs';
import { Box, Section, Stack } from 'shared/core/layout';
import { Card } from 'shared/core/surfaces';
import { SkillsCard } from 'views/MySkills/SkillsCard';

// data
import { skills } from 'data/skills';

export const getSkillsByCategory = (category: string) => {
	return skills.filter((skill) => skill.category === category);
};

export const MySkills = () => {
	return (
		<Stack
			sx={{
				alignItems: 'center',
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
			<Section
				sx={{
					margin: '0 auto',
				}}
				gap={2}
			>
				<SkillsCard>
					<Typography variant="h2">Relevant Skills</Typography>
					<Box>
						{getSkillsByCategory('relevant').map((skill) => (
							<Chip key={skill.id} label={skill.name} />
						))}
					</Box>
				</SkillsCard>

				<SkillsCard>
					<Typography variant="h2">Related Skills</Typography>
					<Box>
						{getSkillsByCategory('related').map((skill) => (
							<Chip key={skill.id} label={skill.name} />
						))}
					</Box>
				</SkillsCard>
			</Section>
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
				}}
			>
				{'placeholder for skills'}
			</Card>
		</Stack>
	);
};
