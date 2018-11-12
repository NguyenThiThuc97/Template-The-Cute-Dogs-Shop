import React, {Component} from 'react'
import Banner from './banner'
import ContactArea from './ContactArea'

class Contact extends Component
{
	render()
	{
		return(
			<div>
				<Banner/>
				<ContactArea/>
			</div>
			)
	}
}
export default Contact