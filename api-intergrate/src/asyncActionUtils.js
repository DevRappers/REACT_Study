export default function createAsyncDispatcher(type, promiseFn){
    const SUCCESS = `${type}_SUCCESS`;
    const ERROR = `${type}_ERROR`;

    async function actionHandler(dispatch, ...rest){
        dispatch({type});
        try{
            const data = await promiseFn(...rest);
            dispatch({
                type: SUCCESS,
                data
            });
        }catch(e){
            dispatch({
                type: ERROR,
                error: e
            });
        }
    }

    return actionHandler;
}

export const initialAsyncState = {
    loading: false,
    data:null,
    error: null
};

// 로딩중일 때 바뀔 상태 객체
const loadingState = {
    loading: true,
    data: null,
    error: null
  };
  
  // 성공했을 때의 상태 만들어주는 함수
  const success = data => ({
    loading: false,
    data,
    error: null
  });
  
  // 실패했을 때의 상태 만들어주는 함수
  const error = error => ({
    loading: false,
    data: null,
    error: error
  });

  export function createAsyncHandler(type, key){
    const SUCCESS = `${type}_SUCCESS`;
    const ERROR = `${type}_ERROR`;

    function handler(state,action){
        switch(action.type){
            case type:
                return {
                    ...state,
                    [key]: loadingState
                };
            case SUCCESS:
                return {
                    ...state,
                    [key]: success(action.data)
                };
            case ERROR:
                return{
                    ...state,
                    [key]: error(action.error)
                }
            default:
                return state;
        }
    }

    return handler;
  }