import { NavLink } from 'react-router-dom';
import styles from './nav-link-custom.module.scss';

interface INavLinkProps {
  isActive: boolean
}

interface INavLinkCustom {
  to: string,
  title: string,
}

const setActive = ({ isActive }: INavLinkProps) => (isActive
  ? `${styles['nav-link']} ${styles['nav-link__active']}`
  : styles['nav-link']);

function NavLinkCustom({ to, title }: INavLinkCustom) {
  return (
    <NavLink className={setActive} to={to}>{title}</NavLink>
  );
}

export default NavLinkCustom;
