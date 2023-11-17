import { PropsWithChildren } from "react";
import styled from "styled-components";

export function Layout(props: PropsWithChildren) {
  return <StLayout>{props.children}</StLayout>;
}

const StLayout = styled.div`
  padding: 0;
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  position: relative;
`;
