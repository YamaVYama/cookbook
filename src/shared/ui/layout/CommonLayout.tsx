import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { APP_ROUTES } from "@shared/routes";

import { Outlet, NavLink } from "react-router";

export const CommonLayout = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 150,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavLink to={APP_ROUTES.MAIN}>Main</NavLink>
        <NavLink to={APP_ROUTES.RECIPE}>Recipe</NavLink>
        <NavLink to={APP_ROUTES.PROFILE}>Profile</NavLink>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
