import SelectUser from '../SelectUser/SelectUser';
import styles from './Header.module.css';
import { useState } from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

const logos = ['/logo.svg', '/vite.svg'];
function Header() {
  const [logoIndex, setLogoIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(0);

	const toggleLogo = () => {
		setLogoIndex(state => Number(!state));
		setSecondIndex(i => i + 1);
		console.log(secondIndex);
	};
  
	return (
		<>
			<Logo image={logos[logoIndex]} />
			<SelectUser />
      <Button onClick={toggleLogo}>Сменить лого</Button>
		</>
	);
}

export default Header;