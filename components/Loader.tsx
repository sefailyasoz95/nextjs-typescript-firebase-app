import React from "react";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";

type Props = {
	color: string;
	size: number;
};

const override = css`
	display: block;
	margin: 0 auto;
	border-color: red;
`;

const style: React.CSSProperties = {
	position: "fixed",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
};

const Loader: React.FC<Props> = ({ size, color }) => {
	return (
		<div className='sweet-loading' style={style}>
			<BeatLoader size={size} color={color} css={override} />
		</div>
	);
};

export default Loader;
