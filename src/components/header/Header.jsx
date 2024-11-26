import './header.css'

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Unlock the </span>
        <span className="headerTitleLg">World of Blogging Here.</span>
      </div>
      <img
        className="headerImg"
        src="Img\arnel-hasanovic-MNd-Rka1o0Q-unsplash.jpg"
        alt=""
      />
    </div>
  );
}
