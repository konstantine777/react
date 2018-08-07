import React, {Component} from 'react';

export default class Statistics extends Component {


	componentDidMount() {

		let TESTER = document.getElementById('plotly');
		Plotly.plot(TESTER, [{
			x: [1, 2, 3, 4, 5],
			y: [1, 2, 4, 8, 16]
		}], {
			margin: {t: 0}
		});

	}

	render() {

		return (
			<div className="status_statistics">
				<p className="status_statistics_title">Statistics</p>
				<div className="status_statistics_info">
					<p>Uptime: <span>10 days</span></p>
					<p>Open Orders: <span>1</span></p>
					<p>Completed orders: <span>10</span></p>
				</div>
				<div className="status_plot">
					<div className="status_plot_head">
						<button>RAM</button>
						<button>CPU</button>
						<button>GPU</button>
						<button>HDD</button>
					</div>
					<div id="plotly" className="status_plot_content">

					</div>
				</div>
			</div>
		)

	}

}

