import React, {Component} from 'react';

export default class GPUElement extends Component {

	constructor() {
		super();
	}

	render() {
		let gpu = this.props.gpu;

		return (
			<div className="gpu_item">
				<div className="status_item_info">
					<p>name: <span>{gpu.name}</span></p>
					<p>Available memory: <span>{(gpu.memory_mb).toFixed(4)} Mb</span></p>
					<p>Available perfomance:<span>90%</span></p>
				</div>
				<div className="forma_group checkbox">
					<div className={`indication ${(gpu.primary) ? 'active' : 'not_available'}`}>
						<span/>
						&#160;Available for orders
					</div>
				</div>
				<div className="forma_group checkbox">
					<div className={`indication ${(gpu.enabled) ? 'active' : 'not_available'}`}>
						<span/>
						&#160;In use
					</div>
				</div>
			</div>
		)

	}

}