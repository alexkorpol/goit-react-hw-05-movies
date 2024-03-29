import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const ButtonTag = styled(NavLink)`
  position: absolute;
  top: 100px;
  left: 5%;
  padding: 10px 15px;
  border-radius: 2px;
  background-color: #6981e3;

  font-size: 18px;
  font-weight: 700;
  color: #fff;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  transition: color 150ms linear;

  &:hover,
  &:focus {
    color: #42362b;
  }
`;
