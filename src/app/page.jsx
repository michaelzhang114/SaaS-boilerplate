import Hero from "@components/Hero";
import React from "react";
import Nav from "@components/Nav";

const Home = () => {
	return (
		<section>
			<Nav></Nav>
			<Hero />
			<Hero />
			<Hero />
			<Hero />
		</section>
	);
};

export default Home;
