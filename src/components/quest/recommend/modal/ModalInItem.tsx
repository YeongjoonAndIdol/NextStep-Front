import styled from "styled-components";

const ModalInItem = () => {
  return (
    <Wrapper>
      <div className='ItemHead'>
        <p id='id'>1</p>
        <p id='title'>. 아침에 1km 조깅하기</p>
        <p id='exp'>+ 565 Exp</p>
      </div>
      <div className='Description'>
        아침에 조깅을 하면 정신이 맑아지고 다이어트에 큰 효과가 있습니다. :)
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100px;
  .ItemHead {
    display: flex;
    align-items: center;
    #id {
      color: ${({ theme }) => theme.color.main};
      font-size: ${({ theme }) => theme.font_size.SF_Pro16};
      font-weight: 590;
    }
    #title {
      color: ${({ theme }) => theme.color.main};
      font-size: ${({ theme }) => theme.font_size.SF_Pro16};
      font-weight: 590;
    }
    #exp {
      padding-left: 12px;
      color: ${({ theme }) => theme.color.main};
      font-size: ${({ theme }) => theme.font_size.SF_Pro14};
      font-weight: 590;
    }
  }
  .Description {
    color: ${({ theme }) => theme.color.main};
    font-size: ${({ theme }) => theme.font_size.SF_Pro12};
    font-weight: 590;
  }
`;

export default ModalInItem;
