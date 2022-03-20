import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut } from './actions/user';

function App() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    // const posts = useSelector((state) => state.posts);

    const onClick = useCallback(() => {
        dispatch(
            logIn({
                id: 'zerocho',
                password: '비밀번호',
            })
        );
    }, []);

    const onLogout = useCallback(() => {
        dispatch(logOut());
    }, []);

    return (
        <>
            {user.isLoggingIn ? <div>로그인 중</div> : user.data ? <div>{user.data.nickname}</div> : '로그인 해주세요'}
            {!user.data ? <button onClick={onClick}>로그인</button> : <button onClick={onLogout}>로그아웃</button>}
        </>
    );
}

export default App;
