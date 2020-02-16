import { Slides } from 'components/Slides';
import styled from 'styled-components';

export default function About() {
  return (
    <Container>
      <ProfileSection>
        <ProfileImage src="/profile.jpg" />
      </ProfileSection>
      <ContentSection>
        <Slides />
      </ContentSection>
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const ProfileSection = styled.section`
  align-items: center;
  display: flex;
  height: 600px;
  justify-content: center;
  width: 800px;
`;

const ProfileImage = styled.img`
  height: 400px;
  width: 320px;
`;

const ContentSection = styled.section`
  align-items: center;
  display: flex;
  height: 600px;
  justify-content: center;
  width: 800px;
`;
