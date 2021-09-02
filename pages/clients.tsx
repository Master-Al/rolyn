import { useEffect, useState } from "react";
import Layout from "../components/layout";

export default function clients() {
  const [subscribers, setSubscribers] = useState(6000);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubscribers((subs) => subs + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <Layout>Clients</Layout>;
}
