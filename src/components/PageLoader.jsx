import "./pageLoader.css";
const lotus =
  "https://res.cloudinary.com/dirixa5no/image/upload/f_auto,q_auto,w_400/v1770631074/loadlotus_fig1vx.png";

export default function PageLoader({ reveal }) {
  return (
    <div className={`page-loader ${reveal ? "reveal" : ""}`}>
      <div className="top-bar" />
      <div className="door left" />
      <div className="door right" />

      <div className="lotus-wrap">
        <img src={lotus} alt="loading" />
        <div className="mini-loader" />
      </div>
    </div>
  );
}
