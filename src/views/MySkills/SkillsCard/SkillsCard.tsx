// components
import { StyledCard } from 'views/MySkills/SkillsCard/SkillsCard.styles';

// types
import { SkillsCardProps } from 'views/MySkills/SkillsCard/SkillsCard.types';

export const SkillsCard = ({ children }: SkillsCardProps) => {
	return <StyledCard>{children}</StyledCard>;
};
