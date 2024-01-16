import { Users } from "../component/Mockdata";
const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    border: "2px solid grey",
    width: 400,
    height: 551,
    borderRadius: 15,
  },
};
const style = {
  Flex: {
    display: "flex",
    justifyContent: "center",
  },
};

const Main = () => {
  const information = Users.map((el) => (
    <div>
      <div style={style.Flex}>
        <div>
          <div style={styles.card} key={el.uid}>
            <div>
              <img src={el.avatar} alt="" />
            </div>
            <div className="information">
              <h5>
                {el.first_name} {el.last_name}
              </h5>
              <div className="hi">
                <p className="emp">{el.employment.title}</p>
                <p className="empp">{el.gender}</p>
              </div>
              <div className="email">
                <p>{el.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return <div>{information}</div>;
};
export default Main;
