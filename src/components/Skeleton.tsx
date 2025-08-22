'use client';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -450px 0;
  }
  100% {
    background-position: 450px 0;
  }
`;

const SkeletonWrapper = styled.div<{ width?: string; height?: string }>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  background: #333;
  border-radius: 8px;
  position: absolute;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      to right,
      #333 0%,
      #444 20%,
      #333 40%,
      #333 100%
    );
    background-size: 800px 100%;
    animation: ${shimmer} 1.5s infinite;
  }
`;

interface SkeletonProps {
  width?: string;
  height?: string;
}

export const Skeleton = ({ width, height }: SkeletonProps) => {
  return <SkeletonWrapper width={width} height={height} />;
};
