import Head from "next/head";
import {useRouter} from "next/router";
import {formatRoute} from "../../utils/formatRoute";

export const Header = () => {
  const {route} = useRouter();
  const formattedRoute = formatRoute(route);

  return (
    <Head>
      <title>
        {formattedRoute === "/" ? "Home" : formattedRoute} - AustinOS
      </title>
      <meta
        name="description"
        content="Austin's personal website to tinker with new technologies"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
