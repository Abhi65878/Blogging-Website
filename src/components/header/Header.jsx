import './header.css'
import Home_Image from "/src/assets/Img/Home_Image.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Unlock the </span>
        <span className="headerTitleLg">World of Blogging Here.</span>
      </div>
      <img
        className="headerImg"
        src={Home_Image}
        alt=""
      />
    </div>
  );
}
