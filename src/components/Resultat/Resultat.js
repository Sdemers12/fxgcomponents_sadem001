import { Button as ButtonAntd, Result as ResultAntd } from "antd";
import React from "react";
import PropTypes from "prop-types";

export const Resultats = ({ status, title, subTitle, type, key }) => {
	return (
		<>
			<ResultAntd status={status} title={title} subTitle={subTitle} extra={[<ButtonAntd type={type} key={key}></ButtonAntd>]} />
		</>
	);
};

Resultats.propTypes = {
	status: PropTypes.string,
	title: PropTypes.string,
	subTitle: PropTypes.string,
	type: PropTypes.string,
	key: PropTypes.string,
};
