import React, { useCallback, useState } from 'react';
import { animated, AnimatedValue, useTransition } from 'react-spring';
import styled, { css } from 'styled-components';

const SLIDES = [
  ({ style }: AnimatedValue<any>) => (
    <Slide style={{ ...style }}>GeonHo Tony Han</Slide>
  ),
  ({ style }: AnimatedValue<any>) => (
    <Slide style={{ ...style }}>Software Engineer</Slide>
  ),
  ({ style }: AnimatedValue<any>) => (
    <Slide style={{ ...style }}>Knowledge Holic</Slide>
  )
];

export const Slides = () => {
  const [index, setIndex] = useState(0);
  const handleClick = useCallback(() => setIndex(state => (state + 1) % 3), []);
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translate3d(0,100%,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0%,0)" },
    leave: {
      opacity: 0,
      transform: "translate3d(0,-100%,0)"
    }
  });

  return (
    <Container onClick={handleClick}>
      {transitions.map(({ item, props, key, state }) => {
        const Page = SLIDES[item];
        console.log(state, state === "leave", item);

        return <Page key={key} style={props} isLeaving={state === "leave"} />;
      })}
    </Container>
  );
};

const Container = styled.section`
  height: 100%;
  /* overflow: hidden; */
  width: 100%;
`;

const leavingSlideStyle = css`
  font-size: 100%;
  top: -100%;
`;

const Slide = styled(animated.div)<{ isLeaving?: boolean }>`
  ${props => (props.isLeaving ? leavingSlideStyle : "")};
  align-items: center;
  display: flex;
  font-size: 20px;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
  will-change: transform, opacity;
`;
