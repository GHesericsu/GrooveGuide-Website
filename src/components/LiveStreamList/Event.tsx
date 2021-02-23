import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 188px;
  background: #282828;
  border-radius: 15px;
  padding: 10px;
  margin: 10px 0px;
`

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const EventInfoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`

const DateTimeContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`

const FlyerContainer = styled.div`
  width: 20%;
`

const IconsContainer = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
`

const EventName = styled.h3`

`

export const Event = () => (
  <Container>
    <ContentContainer>
      <EventInfoContainer>
        <EventName>
          Move It Or Lose It
        </EventName>
        <p>- Mioli</p>
        <p> Emanate, Dosc</p>
        <p>https://www.twitch.tv/miolimusic</p>
      </EventInfoContainer>
      <DateTimeContainer>
        <p>Start 9pm</p>
        <p>End 10pm</p>
      </DateTimeContainer>
      <FlyerContainer>
        Image
      </FlyerContainer>
      <IconsContainer>
        Icons
      </IconsContainer>
    </ContentContainer>
  </Container>
)