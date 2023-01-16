// imports from 3rd party libraries
import { Route, Routes } from 'react-router-dom';

// components
import { About } from 'views/About';
import { Contact } from 'views/Contact';
import { Home } from 'views/Home';
import { MySkills } from 'views/MySkills';
import { NotFound } from 'views/NotFound';
import { SearchSkills } from 'views/SearchSkills';

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/my-skills" element={<MySkills />} />
			<Route path="/search-skills" element={<SearchSkills />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
