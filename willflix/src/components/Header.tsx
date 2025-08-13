'use client'
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications } from 'react-icons/md';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: linear-gradient(to bottom, rgba(0,0,0,0.7), transparent);
  position: fixed;
  width: 100%;
  z-index: 10;
`;

export default function Header() {
  return (
    <Container>
      <h1 style={{ color: '#e50914' }}>WillFlix</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <AiOutlineSearch size={24} />
        <MdNotifications size={24} />
      </div>
    </Container>
  );
}
