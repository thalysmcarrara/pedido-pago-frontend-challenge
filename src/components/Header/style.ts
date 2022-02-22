import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  position: sticky;
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;
  background: var(--white);
  height: 61px;
  border-bottom: 1px solid var(--gray-100);
  justify-content: space-between;
`

export const LogoContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100px;
  align-items: center;
  justify-content: center;
`

export const UserInfoContainer = styled.div`
  display: grid;
  height: 100%;
  width: 219px;
  gap: 0.5rem;
  padding: 0 0 0 14px;
  grid-template-columns: 1fr 3fr;
  border-left: 1px solid var(--gray-100);
  align-items: center;
  justify-content: center;

  div:first-child {
    height: 32px;
    width: 32px;
    display: flex;
    background: var(--cyan-100);
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  div + div {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border-radius: 0;
    align-items: baseline;
    justify-content: center;

    strong {
      font-weight: 600;
      font-size: 0.94rem;
      line-height: 0.94rem;
      color: var(--black-600);
    }

    span {
      font-weight: 400;
      font-size: 0.8rem;
      line-height: 0.96rem;
      color: var(--black-100);
    }
  }
`