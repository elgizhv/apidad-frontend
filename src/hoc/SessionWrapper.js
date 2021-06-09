import { observer } from "mobx-react-lite";
import { useEffect, useRef, useState } from "react";
import SplashScreen from "../components/SplashScreen/SplashScreen";
import { AuthProvider } from "../context/AuthContext";
import { useStore } from "../store/RootStore";

function SessionWrapper({ children }) {
  const { generalStore, userStore, categoryStore } = useStore();
  const [loading, setLoading] = useState(true);
  const getData = useRef();

  getData.current = async () => {
    await Promise.all([
      generalStore.fetch(),
      userStore.fetchUser(),
      categoryStore.fetchCategories(),
    ]);
    setLoading(false);
  };

  useEffect(() => {
    getData.current();
  }, []);
  if (loading) return <SplashScreen />;
  else return <AuthProvider>{children}</AuthProvider>;
}

export default observer(SessionWrapper);
