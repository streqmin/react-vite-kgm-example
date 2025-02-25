// 조건부 렌더링 예제
const ConditionalPage = () => {
  const isLogin = true

  return (
    <>
      {isLogin ? (
        <>
          <h2>조건부 렌더링 예시 1번입니다.</h2>
          <div>
            <button style={{ margin: 10 }}>Logout</button>
          </div>
        </>
      ) : (
        <>
          {' '}
          <h2>조건부 렌더링 예시 1번입니다.</h2>
          <div>
            <button style={{ margin: 10 }}>Login</button>
          </div>
        </>
      )}
    </>
  )
}

export default ConditionalPage
