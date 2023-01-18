// components
import { StyledCard } from 'views/MySkills/SkillsCard/SkillsCard.styles';

// types
import { SkillsCardProps } from 'views/MySkills/SkillsCard/SkillsCard.types';

export const SkillsCard = (props: SkillsCardProps) => {
	return <StyledCard {...props}>{props.children}</StyledCard>;
};
