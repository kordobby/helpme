import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as PAGE from "../../lib/router/constant";

export function Header() {
  return (
    <StHeader>
      <div />
      <Link to={PAGE.MAIN}>Logo</Link>
      <div>
        <Link to={PAGE.SIGN_IN}>로그인/회원가입</Link>
      </div>
    </StHeader>
  );
}

const StHeader = styled.div`
  height: 70px;
  width: 100%;
  background-color: #eef5ff;
  padding: 10px 30px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
