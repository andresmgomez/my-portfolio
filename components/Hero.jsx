import AnimateText from './AnimateText';
import 'animate.css';

export default function Hero() {
	return (
		<section className='hero-area active animate__animated animate__fadeInDown'>
			<div className='hero-wrapper'>
				<div className='hero-content'>
					<h1 className='first-name'>
						Miguel <span className='last-name'>Gomez</span>
					</h1>
					<h3 className='positions'>
						<AnimateText />
					</h3>
				</div>
			</div>
		</section>
	);
}
