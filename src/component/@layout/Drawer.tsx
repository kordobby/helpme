import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface DrawerContextType {
  open: boolean;
  setOpen: () => void;
}

const DrawerContext = createContext<DrawerContextType | null>(null);

export function Drawer(props: PropsWithChildren) {
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <DrawerContext.Provider value={{ open, setOpen: handleDrawerOpen }}>
      <StDrawer>{props.children}</StDrawer>
    </DrawerContext.Provider>
  );
}

function Button() {
  const { setOpen } = useDrawerContext();

  return <button onClick={setOpen}>👈🏻</button>;
}

function Sider(props: PropsWithChildren) {
  const { open } = useDrawerContext();

  if (!open) return null;
  return <StSider>{props.children}</StSider>;
}

type MenuItemType = {
  id: string;
  name: string;
  path: string;
};

interface MenuProps {
  data: MenuItemType[];
}
function Menu(props: MenuProps) {
  return (
    <>
      {props.data.map((value) => (
        <Link key={value.id} to={value.path}>
          {value.name}
        </Link>
      ))}
    </>
  );
}
Drawer.Button = Button;
Drawer.Sider = Sider;
Drawer.Menu = Menu;

function useDrawerContext() {
  const context = useContext(DrawerContext);
  if (!context) throw new Error("context 가 없습니다.");

  const { open, setOpen } = context;
  return { open, setOpen };
}

const StDrawer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  top: 0;

  button {
    position: absolute;
    left: 8px;
    top: 8px;
  }
`;

const StSider = styled.div`
  height: 100vh;
  width: 180px;
  background-color: blue;
  left: 0;

  padding: 100px 30px 30px;
  box-sizing: border-box;

  display: flex;
`;
