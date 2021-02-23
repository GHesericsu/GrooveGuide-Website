import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`

const ListContainer = styled.div`
  width: 85%;
  height: auto;
  background: #1B1717;
`

export const EventList = () => {
  return (
    <Container>
      <ListContainer>
        As you adjust the parameters that define the color, it gets displayed in all three standard Web CSS formats. In addition, based on the currently-selected color, a palette for HSL and HSV, as well as alpha, is generated. The "eyedropper" style color picker box can be toggled between HSL or HSV format. You can also test colors and how they overlap one another by dragging them into the box at the bottom of the tool and moving them over one another. Adjust their relative Z index values to move them forward and behind one another.
      </ListContainer>
    </Container>
  )

}
