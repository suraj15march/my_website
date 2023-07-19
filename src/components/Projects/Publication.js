import React from "react";
import { pub } from "./experience.js";
import { Container, Row } from "reactstrap";
import PublicationCard from "./PublicationCard.js"
import { Fade } from "react-reveal";

import WorkExp from "./WorkExp";

const WorkExpMain = () => {
	return (
		<section className="section section-lg">
			<Container >
				<div className="d-flex p-4">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<i className="ni ni-briefcase-24 text-info" />
						</div>
					</div>
					<div className="pl-4">
					<h4 className="experience-heading" >
         Publication </h4>
					</div>
				</div>
				<Row className="row-grid align-items-start">
					{pub.map((data, i) => {
						return <PublicationCard key={i} data={data} />;
					})}
				</Row>
			</Container>
		</section>
	);
};

export default WorkExpMain;