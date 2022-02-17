import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { userCreators } from "./redux/modules/dust";

const Home = () => {
  const dispatch = useDispatch();
  const realTimeDust = useSelector((state) => state.dust);

  const [dustToggle, setDustToggle] = useState();

  const getCapitalCheck = () => {
    dispatch(userCreators.realTimeDustMiddleWare());
    setDustToggle(!dustToggle);
  };

  React.useEffect(() => {}, [realTimeDust]);

  return (
    <>
      <Wrap>
        <Title>수도권 미세먼지</Title>
        <ButtonGroup>
          <button onClick={getCapitalCheck}>실시간 현황확인</button>
        </ButtonGroup>
        <SecondWrap>
          {dustToggle && (
            <CityDust>
              <ul>
                <li>측정시간 : {realTimeDust.dataTime}</li>
                <li>서울 : {realTimeDust.seoul}</li>
                <li>인천 : {realTimeDust.incheon}</li>
                <li>경기 : {realTimeDust.gyeonggi}</li>
              </ul>
            </CityDust>
          )}
        </SecondWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 1000px;
  height: 100vh;
  margin: auto;
  border: 2px solid gray;
  border-radius: 30px;
  box-shadow: 0px 0px 10px #172d40;
`;

const Title = styled.h1`
  text-align: center;
  background-color: #fff;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
`;

const SecondWrap = styled.div`
  display: flex;
`;

const CityDust = styled.div`
  width: 40%;
  height: 100vh;
  margin: auto;
`;

export default Home;
