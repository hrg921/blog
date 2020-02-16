import styled from 'styled-components';

export default function About() {
  return (
    <div>
      <ProfileImage src="/profile.jpg" />
      <p>This is the about page</p>
    </div>
  );
}

const ProfileImage = styled.img`
  height: 200px;
  width: 160px;
`;
