import React, { Component } from 'react';
import Chartify from '../../../../index';
import Controls from '../Controls/Controls';
import './chart.css';

export default class Chart extends Component {
	render() {
		return (
			<div className="container">
				<h2>Movies dataset</h2>

				<Chartify data={this.props.data} container="films-container" config={this.props.config} />
				<div className="total-info">{this.props.data.length} films total ( X - mark date, Y - mark )</div>
				<Controls data={this.props.data} chart="films" config={this.props.config} actions={this.props.actions} />

				<br/><br/>

				<h2>Music albums dataset</h2>

				<Chartify data={this.props.itunes} container="songs-container" config={this.props.config_itunes} />
				<div className="total-info">{this.props.itunes.length} music albums total ( X - album release year, Y - times played )</div>
				<Controls data={this.props.itunes} chart="music" config={this.props.config_itunes} actions={this.props.actions} />
			</div>
		);
	}
}
