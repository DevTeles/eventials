import styled from 'styled-components';
import { darken } from 'polished';

export const Groupcountry = styled.div`
  display: flex;
  flex-direction: row;

  select {
    width: 90%;
    height: 55px;
    font-size: 18px;
  }
`;

export const Divcountry = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    justify-self: center;

    .btnSalvar {
      background: #7159c1;
      width: 400px;
      height: 180px;
      font-size: 65px;
      font-weight: bold;
      margin: 55px 20px 10px 405px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#7159c1')};
      }
    }
  }

  input {
    height: 120px;
    font-size: 78px;
    text-align: center;
    margin-top: 155px;
  }

  button {
    margin-left: 10px;
    height: 55px;
    width: 100px;
    background: #7159c1;
    color: #fff;
    border-radius: 4px;
    font-size: 18px;
    text-align: center;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#7159c1')};
    }
  }

  .btnRemover {
    width: 150px;
  }
`;

export const Rodape = styled.footer`
  display: flex;
  justify-content: space-between;
`;
