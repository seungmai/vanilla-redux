/* eslint-disable */
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";
//액션타입
const DUST = "DUST";

//액션생성
const dust = createAction(DUST, (dust) => ({ dust }));

//초기값
const initialState = {
  seoul: "16",
  incheon: "63",
  gyeonggi: "85",
  dataTime: "2022-02-13 21:00",
};

const realTimeDustMiddleWare = () => {
  return function (dispatch) {
    apis
      .getCapitalDust()
      .then((res) => {
        dispatch(
          dust({
            realtimedust: res.data.response.body.items[0],
          })
        );
      })
      .catch((err) => {});
  };
};

//리듀서
export default handleActions(
  {
    [DUST]: (state, action) =>
      produce(state, (draft) => {
        draft.seoul = action.payload.dust.realtimedust.seoul;
        draft.incheon = action.payload.dust.realtimedust.incheon;
        draft.gyeonggi = action.payload.dust.realtimedust.gyeonggi;
        draft.dataTime = action.payload.dust.realtimedust.dataTime;
      }),
  },
  initialState
);

const userCreators = {
  realTimeDustMiddleWare,
};

export { userCreators };
