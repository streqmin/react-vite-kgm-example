import styled from 'styled-components'

const StyledComponentPage = () => {
  const StyledDiv = styled.div`
    color: green;
  `

  let 박스 = styled.div`
    color: yellow;
    padding: 20px;
    background-color: red;
  `

  const 제목 = styled.h4`
    color: blue;
    font-size: 35px;
  `

  return (
    <>
      <StyledDiv>
        <p>스타일드 컴포넌트입니다</p>
      </StyledDiv>
      <박스>
        <제목>styled components 로 만든 태그</제목>
      </박스>
    </>
  )
}

export default StyledComponentPage
