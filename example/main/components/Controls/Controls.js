import React, { Component } from 'react';
import * as util from '../../util/util';
import './controls.css';

export default class Controls extends Component {
	refreshData = () => {
		const { data } = this.props;
		let newItems = data.map(item => {
			item.sortValue = Math.random().toFixed(5);
			return item;
		}).sort((a,b) => a.sortValue > b.sortValue ? 1 : -1);
		this.props.actions.updateChart(newItems, this.props.config, this.props.chart);
	}

	changeTheme = () => {
		const themes = {0:'default', 1:'blue', 2:'grey', 3:'white'};
		let curr = 1;

		Object.values(themes).forEach((val, i) => {
			if (this.props.config.theme == val) {
				curr = i;
			}
		});

		let next = curr < Object.keys(themes).length - 1 ? curr + 1 : 0;

		this.props.actions.updateChart(this.props.data, {
			...this.props.config,
			line_only: false,
			theme: themes[next]
		}, this.props.chart);
	}

	toggleLine = () => {
		this.props.actions.updateChart(this.props.data, {
			...this.props.config,
			line_only: false,
			line: !this.props.config.line
		}, this.props.chart);
	}

	toggleBordered = () => {
		this.props.actions.updateChart(this.props.data, {
			...this.props.config,
			line_only: false,
			bordered: !this.props.config.bordered
		}, this.props.chart);
	}

	toggleBoxRadius = () => {
		let radiuses = [0, 5, 8, 10];
		let num = radiuses.indexOf(this.props.config.box_radius);
		num = num == 3 ? 0 : ++num;

		this.props.actions.updateChart(this.props.data, {
			...this.props.config,
			line_only: false,
			box_radius: radiuses[num]
		}, this.props.chart);
	}

	toggleBlink = () => {
		this.props.actions.updateChart(this.props.data, {
			...this.props.config,
			line_only: false,
			blink: !this.props.config.blink
		}, this.props.chart);
	}

	toggleLineOnly = () => {
		this.props.actions.updateChart(this.props.data, {
			...this.props.config,
			line_only: !this.props.config.line_only
		}, this.props.chart);
	}

	render() {
		return (
			<div className="control-block">
				<button type="button" onClick={this.toggleLine}>
					Toggle line
				</button>

				<button type="button" onClick={this.toggleBordered}>
					Toggle borders
				</button>

				<button type="button" onClick={this.toggleBoxRadius}>
					Toggle box radius
				</button>

				<button type="button" onClick={this.refreshData}>
					Refresh data
				</button>

				<button type="button" onClick={this.changeTheme}>
					Change theme
				</button>

				<button type="button" onClick={this.toggleBlink}>
					Toggle blink
				</button>

				<button type="button" onClick={this.toggleLineOnly}>
					Toggle line-only
				</button>
			</div>
		);
	}
}
