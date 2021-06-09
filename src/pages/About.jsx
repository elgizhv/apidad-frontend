import { observer } from "mobx-react-lite";
import Card from "../components/Card/Card";
import { useStore } from "../store/RootStore";

function About() {
  const { userStore } = useStore();
  console.log(userStore);

  const setUser = () => {
    userStore.setUser({ name: "Elgiz" });
  };
  const onHandle = () => {
    console.log("ALO");
  };
  return (
    <div>
      <h1>About {userStore.user?.name}</h1>
      <Card title="Firengiz" onHandle={onHandle}></Card>
      <button onClick={setUser}>setUser</button>
    </div>
  );
}

export default observer(About);
