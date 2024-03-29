import styled from "styled-components";

export const Item = styled.li`
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export const Title = styled.h2`
  padding: 5px 10px;
  font-size: 21px;
  color: #42362b;
`;
