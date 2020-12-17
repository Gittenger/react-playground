// import React, { useState, useEffect, useCallback, Component } from "react";
import React from "react";

import {
	CTABoxContainer,
	ContentBox,
	ImageOuterContainer,
} from "./CTABox.styles.jsx";

const CTABox = ({ title, image, height, orientation, Component, ...props }) => {
	// const [isMobile, setIsMobile] = useState(false);

	// const checkForMobileSize = useCallback(() => {
	// 	if (window.screen.width <= 740) {
	// 		setIsMobile(true);
	// 	} else setIsMobile(false);
	// }, []);

	// useEffect(() => {
	// 	if (window.screen.width <= 740) {
	// 		setIsMobile(true);
	// 	}
	// 	window.addEventListener("resize", checkForMobileSize);

	// 	return () => {
	// 		window.removeEventListener("resize", checkForMobileSize);
	// 	};
	// }, [checkForMobileSize]);

	const isMobile = false;

	return (
		<CTABoxContainer orientation={isMobile ? "up" : orientation}>
			<ContentBox>
				<h2>{title}</h2>
				<Component {...props} />
			</ContentBox>
			<ImageOuterContainer imgUrl={image}></ImageOuterContainer>
		</CTABoxContainer>
	);
};

export default CTABox;
