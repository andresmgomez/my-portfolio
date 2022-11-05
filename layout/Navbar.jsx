import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
	return (
		<navbar className='top-navbar'>
			<nav className='wrapper-nav'>
				<div className='logo-nav'>
					<Image src='https://via.placeholder.com/100x100/' width={100} height={100} />
				</div>
				<div className='menu-nav'>
					<ul>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							<Link href='#about'>About</Link>
						</li>
						<li>
							<Link href='#portfolio'>Portfolio</Link>
						</li>
						<li>
							<Link href='#resume'>Resume</Link>
						</li>
						<li>
							<Link href='#contact'>Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		</navbar>
	);
}
