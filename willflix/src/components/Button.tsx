import styled from "styled-components";

interface IButtonFlix {
    width?: string;
}
const ButtonFlix = styled.button<IButtonFlix>`
  background-color: #e50914; 
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: 12px 24px;
  border: none;
  width: ${(props) => props.width || '250px'};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #f40612; 
    transform: scale(1.05);
  }

  &:active {
    background-color: #b20710;
    transform: scale(0.98);
  }
`;

export default function Button({ text, width }: { text: string, width?: string }, ) {
  return (
      <ButtonFlix width={width}>{text}</ButtonFlix>
  );
}
