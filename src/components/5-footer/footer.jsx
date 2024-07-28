import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
        {/* <li>
          <a href="">Uses</a>
        </li> */}
      </ul>

      <p>© 2024. Created By Ahmed Aioup | All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
