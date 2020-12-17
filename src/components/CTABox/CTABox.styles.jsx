import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { mobileMM } = device;

export const CTABoxContainer = styled.div`
	display: grid;
	grid-template-columns: ${({ orientation }) =>
		orientation === "up" || orientation === "down" ? `100%` : `50% 1fr`};
	grid-template-rows: 55rem;
	direction: ${({ orientation }) => (orientation === "left" ? "ltr" : "rtl")};
	border-radius: 1rem;
	width: 100%;
	overflow: hidden;
	background-color: aliceblue;

	${mobileMM} {
		width: 95%;
	}
`;

export const ContentBox = styled.div`
	${FlexCenter}
	flex-direction: column;
	padding: 4rem;
	text-align: center;

	h2 {
		margin-bottom: 1rem;
	}
`;

export const ImageOuterContainer = styled.div`
	grid-column: 2 / span 1;
	justify-self: center;
	align-self: center;
	width: 90%;
	height: 90%;
	border-radius: 1rem;
	overflow: hidden;
	background-color: red;
	background-image: ${({ imgUrl }) => `url(${imgUrl})`};
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`;
