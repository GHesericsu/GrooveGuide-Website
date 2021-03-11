/* eslint-disable arrow-body-style */
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 400px;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const NextButton = styled.button`
  border-radius: 0px 15px 15px 0px;
  margin-left: 10px;
  display: block;
  height: 45px;
  width: 170px;
  cursor: pointer;
  background-color: var(--dark-gray);
  color: inherit;
  font-family: inherit;
  font-weight: 700;
  font-size: 1.05em;
  text-align: center;
  outline: none;
  border: 2px solid var(--white);
  transition: all 0.2s;
  &:hover {
    color: var(--red);
    border: 3px solid var(--red);
    transition: all 0.2s;
    background-color: var(--black);
  }

  &:focus {
    color: var(--red);
    border: 3px solid var(--red);
    box-shadow: 0 0 0 1px var(--red);
    transition: all 0.2s;
    background-color: var(--black);
  }


  &:active {
    outline: none;
    box-shadow: 0 0 0 5px var(--red);
    color: var(--red);
    border: 3px solid var(--red);
    transition: all 0.2s;
    background-color: var(--black);
  }
 

`;

const PreviousButton = styled(NextButton)`
  border-radius: 15px 0px 0px 15px;
  margin-right: 10px;
`;

interface ChangeWeekProps {
  handleChangeDate: (number: number) => void;
}

export const ChangeWeekButtons = ({ handleChangeDate }: ChangeWeekProps): JSX.Element => {
  return (
    <Container>
      <Wrapper>
        <PreviousButton onClick={() => {
          handleChangeDate(-7);
        }}
        >
          Previous Week
        </PreviousButton>
        <NextButton onClick={() => {
          handleChangeDate(7);
        }}
        >
          Next Week
        </NextButton>
      </Wrapper>
    </Container>
  );
};
