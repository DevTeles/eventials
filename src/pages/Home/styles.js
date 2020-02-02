import styled from 'styled-components';
import { darken } from 'polished';

export const Groupcountry = styled.div`
  display: flex;
  flex-direction: row;

  select {
    width: 80%;
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
      background: green;
      width: 400px;
      height: 200px;
      font-size: 65px;
      font-weight: bold;
      margin: 55px 20px 155px 405px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, 'green')};
      }
    }
  }

  input {
    height: 155px;
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
