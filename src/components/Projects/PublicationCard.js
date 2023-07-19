import React from "react";

import {
	CardLink,
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	Col,
} from "reactstrap";
import { Fade } from 'react-reveal';

const WorkExp = ({ data }) => {
	return (
		<Col lg="6">
			<Fade left duration={2000}>
				
				<Card

					style={{ flex: 1 }}
					className="project-card-view"
				>
				
					<CardBody className="">
				
                           
					<a href={data.link}>
					<CardTitle tag="h4" className="mb-2">
							{data.title}
						</CardTitle></a>
						<CardSubtitle tag="h5" className="mb-2">
							{data.place}
						</CardSubtitle>
						<CardSubtitle>{data.date}</CardSubtitle>
						<CardText
							tag="div"
							className="description my-3 text-left"
						>
                            {data.desc}
							<ul>
								{/* {data.descBullets
									? data.descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null} */}
							</ul>
						</CardText>
					</CardBody>
					
					
					
				</Card>
			</Fade>
		</Col>
	);
};

export default WorkExp;