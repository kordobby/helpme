import { PropsWithChildren, useEffect, useState } from "react";
import { Link, useNavigation } from "react-router-dom";
import styled from "styled-components";
import * as PAGE from "../../lib/router/constant";
import { useNavigate } from "react-router-dom";
interface UserEntity {
  name: string;
  profileUrl: string;
  id: string;
}

const initialData: UserEntity = {
  name: "YOddON",
  profileUrl: "kk",
  id: "yoon",
};
export function Header() {
  /* 임시 자동 로그인 로직
  useEffect(() => {
    sessionStorage.setItem("userInfo", JSON.stringify(initialData));
  }, []);
 */
  return (
    <StHeader>
      <StSlot />
      <Link to={PAGE.MAIN}>Logo</Link>
      <RtSlot />
    </StHeader>
  );
}

function RtSlot() {
  const navigate = useNavigate();
  const sessionResult = window.sessionStorage.getItem("userInfo");
  const convertedSessionResult = sessionResult === null ? null : sessionResult;
  const [userInfo, setUserInfo] = useState<UserEntity | null>(null);

  const handleLogout = () => {
    sessionStorage.removeItem("userInfo");
    setUserInfo(null);
  };

  useEffect(() => {
    if (convertedSessionResult === null) {
      navigate(PAGE.SIGN_IN);
      setUserInfo(null);
      return;
    }
    setUserInfo(JSON.parse(convertedSessionResult));
  }, [convertedSessionResult, navigate, sessionResult]);

  if (!userInfo) return <Link to={PAGE.SIGN_IN}>로그인/회원가입</Link>;
  return (
    <StSlot>
      <Profile userInfo={userInfo} />
      <button onClick={handleLogout}>🚪</button>
    </StSlot>
  );
}

function Profile({ userInfo }: { userInfo: UserEntity }) {
  const { name } = userInfo;

  return (
    <StProfile>
      <div className="profile_image"></div>
      <span>{name}</span>
    </StProfile>
  );
}

Header.RtSlot = RtSlot;
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

const StSlot = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 33%;
`;
const StProfile = styled.div`
  display: flex;
  align-items: center;
  .profile_image {
    width: 15px;
    height: 15px;
    background-color: blue;
    border-radius: 15px;
`;
