import styled from 'styled-components';

export const LinkText = styled.a`
  color: inherit;
  text-decoration: underline;
  text-underline-position: under;
  &:hover {
    transition: 0.2s;
    transform: rotate(5deg) scale(1.3);
    cursor: pointer;
    color: #C71E1E;
    text-decoration: none;
  }
`;
