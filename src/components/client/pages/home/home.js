import React, {Component} from 'react';

import SlideHome from './slide'
import ArrivalArea from './arrivalArea'
import BlogArea from './blogArea'
import FeaturedArea from './featuredArea'
import NewLetterArea from './newsletterArea'
import TestimonialArea from './testimonialArea'

class Home extends Component
{
	render()
	{
		return (
			<div>
                <SlideHome/>
				<ArrivalArea/>
				<FeaturedArea/>
				<NewLetterArea/>
				<BlogArea/>
				<TestimonialArea/>
			</div>
			)
	}
}
export default Home;