import styled from "styled-components";

export const Card = styled.div`
  background-color: #272727;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Avatar = styled.div`
  margin: 10px;
  background-image: url("");
  background-size: 80%;
  background-position: center;
  border-radius: 50%;
  border: 2px solid #48e5c2;
  box-shadow: 0 10px 6px -6px #0a0a0a;
  height: 130px;
  width: 130px;
`;

export const Username = styled.h2`
  font-family: "Playfair Display", "Times New Roman", Times, serif;
  height: 40px;
  width: 80%;
  color: #fafcf9;
  font-size: 1.25rem;
  text-align: center;
  border-bottom: 1px solid #666;
`;

export const ContentInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 15px;
`;

export const ItemGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.h4`
  font-size: 1rem;
  color: #d6d6d6;
`;

export const NumLabel = styled.p`
  font-family: "Playfair Display", "Times New Roman", Times, serif;
  font-size: 2.5rem;
  font-weight: bold;
  color: #48e5c2;
  text-shadow: 2px 1px 2px #0a0a0a;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fcfaf9;
  padding: 80px;
  height: 100vh;
  width: 100vw;
`;

export const SvgContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg.notes {
    height: 750px;
    width: 750px;
    z-index: 1;
    position: absolute;
    top: 200px;
  }

  svg.backdrop {
    height: 700px;
    width: 700px;

    z-index: 0;
    position: absolute;
    right: 185px;
    top: -15px;
  }
`;

export const StyledInput = styled.input`
  height: 60px;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid #d6d6d6;
  background-color: #fcfaf9;

  font-size: 1.25em;
  display: inline-block;

  &:focus {
    outline: none;
    box-shadow: 0 10px 6px -6px #858585;
  }
`;

export const FormContainer = styled.div`
  padding: 30px;
  height: 100%;
  width: 40%;
  border-radius: 30px;
  background-color: #f9e8dd;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .heading-cta {
    grid-column: 1 / span 8;
    grid-row: 1 / span 1;
    margin: 0 15px;

    h2 {
      font-size: 3rem;
      font-family: "Playfair Display", "Times New Roman", Times, serif;
      margin-bottom: 5px;
      color: #141414;
    }

    h4 {
      color: #666;
    }
  }

  .formik {
    height: 100%;
    width: 100%;
  }
`;

export const StyledForm = styled.form`
  padding-top: 60px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  width: 100%;
  height: 100%;
  color: #333;

  input {
    margin: 0 15px;
  }

  .error {
    margin: 5px 15px 0 25px;
    color: #eb6583;
    font-style: italic;
  }

  .form-btns {
    margin: 0 15px;
    height: 60px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    background: #333;
    color: #48e5c2;
    font-size: 1.5rem;
    box-shadow: 0 10px 6px -6px #858585;
    transition: background-color 0.2s ease-in-out;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        font-size: 1rem;
        margin: 20px;
      }
    }

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: #474747;
    }
  }

  #google-btn {
    grid-column: 1 / span 4;
    grid-row: 1 / span 1;
  }

  #facebook-btn {
    grid-column: 5 / span 4;
    grid-row: 1 / span 1;
  }

  #submit-btn {
    grid-column: 1 / span 4;
    grid-row: 7 / span 1;
    background: #48e5c2;
    color: #292929;
    font-size: 1.25rem;

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: #82edd6;
    }
  }

  .name-label {
    grid-column: 1 / span 2;
    grid-row: 2 / span 1;
    display: flex;
    align-items: flex-end;
    margin: 0 15px 5px 25px;
  }

  #name {
    grid-column: 1 / span 4;
    grid-row: 3 / span 1;
  }

  #name-error {
    grid-column: 1 / span 4;
    grid-row: 4 / span 1;
  }
  .email-label {
    grid-column: 5 / span 2;
    grid-row: 2 / span 1;
    display: flex;
    align-items: flex-end;
    margin: 0 15px 5px 25px;
  }

  #email {
    grid-column: 5 / span 4;
    grid-row: 3 / span 1;
  }

  #email-error {
    grid-column: 5 / span 4;
    grid-row: 4 / span 1;
  }

  .pw-label {
    grid-column: 1 / span 2;
    grid-row: 4 / span 1;
    display: flex;
    align-items: flex-end;
    margin: 0 15px 5px 25px;
  }

  #password {
    grid-column: 1 / span 8;
    grid-row: 5 / span 1;
  }

  #pw-error {
    grid-column: 1 / span 8;
    grid-row: 6 / span 1;
  }

  #existing-user {
    grid-column: 1 / span 4;
    grid-row: 8 / span 1;
    font-size: 0.85rem;
    margin: 15px;

    #sign-in {
      color: #333;
      font-weight: bold;
    }
  }
`;
