import styled from 'styled-components';

export const LinkText = styled.a`
  color: inherit;
  display: inline-block;
  text-decoration: underline;
  text-underline-position: under;
  overflow-wrap: break-word;
  word-break: break-word;
  &:hover {
    transition: 0.2s;
    transform: scale(1.01);
    cursor: pointer;
    color: #C71E1E;
    text-decoration: none;
  }
`;
