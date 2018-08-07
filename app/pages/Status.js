import React, {Component} from 'react';
import Header from './../status_components/Header';
import Content from './../status_components/StatusContent';
import Loader from './../helpers/Loader';

export default class Status extends Component {

	constructor() {
		super();
		this.state = {data: null};
		this.custormScroll = () => {
			$(".status_content").mCustomScrollbar();
			$(".status_form_wrapper").mCustomScrollbar();
		}
	}

	completeRequest(answer) {

		this.setState({
			data: JSON.parse(answer)
		});
		this.custormScroll();

	}

	componentDidMount() {
		let data = this.state.data;

		if (!data) {

			$.ajax({

				type: 'GET',
				url: '/status',
				success: this.completeRequest.bind(this)

			})

		}

	}

	render() {
		let data = this.state.data;

		return (
			<div className="status_page">
				{
					(data) ?
						[
							<Header key="1"/>,
							<Content key="2" data={data}/>
						] :
						<Loader/>
				}
			</div>
		)

	}

}
