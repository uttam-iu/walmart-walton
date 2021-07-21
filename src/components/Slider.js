import React from 'react';
import phone1 from '../resources/image/phone-1.jpg';
import phone3 from '../resources/image/phone-3.jpg';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

let slideIndex = 1;

class Slider extends React.Component {
	constructor(props) {
		super(props);
		this.interval = null;
	}

	componentDidMount() {
		this.showSlides(slideIndex);
		this.interval = setInterval(() => {
			slideIndex = slideIndex + 1;
			if (slideIndex === 3)
				slideIndex = 1;
			this.showSlides(slideIndex);
		}, 5000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	// Next/previous controls
	plusSlides = (n) => {
		this.showSlides(slideIndex += n);
	}

	showSlides = (n = slideIndex) => {
		let i;
		let slides = document.getElementsByClassName("mySlides");
		let dots = document.getElementsByClassName("dot");
		if (n > slides.length) { slideIndex = 1 }
		if (n < 1) { slideIndex = slides.length }

		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}

		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}

		slides[slideIndex - 1].style.display = "block";
		dots[slideIndex - 1].className += " active";
	}

	render() {
		const { sliderItem } = this.props;

		return (<div>
			<div className="slideshow-container">
				{sliderItem.map((itm, i) => (
					<div key={i} className="mySlides fade">
						<div className="numbertext">{(i + 1) + ' / ' + sliderItem.length}</div>
						<div className="text">
							<Box style={{ color: '#e0310d', fontSize: '12px' }}>{itm.category}</Box>
							<Box pt={1} fontWeight='600' style={{ color: '#fff', fontSize: '28px' }}>{itm.title}</Box>
							<Box pt={1} style={{ color: '#fff', fontSize: '10px' }}>{itm.subTitle}</Box>
							<Box pt={1} style={{ color: '#fff', fontSize: '12px' }}>{'$' + itm.actualPrice} <span style={{ color: '#e0310d', fontSize: '20px', paddingLeft: '16px' }}>{'$' + itm.discountedPrice}</span></Box>
							<Button variant="contained" style={{ marginTop: '12px', background: 'rgb(250, 212, 3)' }}>
								start buying
							</Button>
						</div>
						<img src={i % 2 === 0 ? phone1 : phone3} alt='slider-1' style={{ width: '100%', height: '400px' }} />
					</div>
				))}
				<Box>
					<span className="dot" />
					<span className="dot" />
				</Box>
				<a className="prev" href='/#' onClick={() => this.plusSlides(-1)}>&#10094;</a>
				<a className="next" href='/#' onClick={() => this.plusSlides(1)}>&#10095;</a>

			</div>
			<br />
		</div>);
	}
}

Slider.propTypes = {
	sliderItem: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Slider;
