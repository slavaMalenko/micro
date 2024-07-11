import type { FC } from "react";

import { Link, useNavigate } from "react-router-dom";

const routes = [
  { name: "Микрофронт 1", link: "/remoteAppOne" },
  { name: "Микрофронт 2", link: "/remoteAppTwo" },
  { name: "Микрофронт 3", link: "/remoteAppThree" },
];

export const Header: FC<{
  selectedRoute: string;
  setSelectedRoute: React.Dispatch<React.SetStateAction<string>>;
}> = ({ selectedRoute, setSelectedRoute }) => {
  const navigate = useNavigate();
  return (
    <>
      {routes.map(({ name, link }) => (
        <Link
          key={`${name}${link}`}
          to={link}
          onClick={() => {
            navigate(link);
            setSelectedRoute(link);
          }}
          className={link === selectedRoute ? "isActive" : ""}
        >
          {name}
        </Link>
      ))}
    </>
  );
};
