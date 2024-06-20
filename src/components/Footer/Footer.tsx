import { Link, useLocation } from 'react-router-dom';
import NiceGadgets from '../../Images/Icons/NiceGadgets.svg';
import './Footer.scss';

export const Footer = () => {
  const location = useLocation();

  const backToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <Link
        to={{ pathname: location.pathname }}
        className="footer__logo"
      >
        <button
          type="button"
          onClick={backToUp}
          className="logo__image-footer-button"
          aria-label="Back to top"
        >
          <img
            src={NiceGadgets}
            alt="logo"
            className="logo__image-footer"
          />
        </button>
      </Link>

      <nav className="footer__nav nav">
        <Link
          to="https://github.com/JulyaPetrovskaya?tab=repositories"
          className="footer__nav-link nav__link"
        >
          Github
        </Link>
        <Link to="/contacts" className="footer__nav-link nav__link">
          Contacts
        </Link>
        <Link to="/rights" className="footer__nav-link nav__link">
          Rights
        </Link>
      </nav>

      <div className="footer__back-to-top">
        <button
          type="button"
          onClick={backToUp}
          className="footer__back-to-top"
          aria-label="Back to top"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
};
