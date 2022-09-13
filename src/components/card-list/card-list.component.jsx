import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ monsters, id }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card mons={monster} />;
    })}
  </div>
);

export default CardList;
