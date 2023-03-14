import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Construction Marketplace Recommendation System</span>
        <span className="headerTitleLg">Homination</span>
      </div>
      <img
        className="headerImg"
        src="https://images.freecreatives.com/wp-content/uploads/2015/07/wall-art-design.jpg"
        alt=""
      />
    </div>
  );
}
