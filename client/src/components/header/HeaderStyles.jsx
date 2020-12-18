import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 13px 20px 0 rgba(0, 0, 0, 0.05);
  padding: 40px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  position: relative;
  top: -20px;
  .logo {
    font-weight: 700;
    font-size: 42px;
    .first-letter {
      color: #fe7c7f;
    }
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
