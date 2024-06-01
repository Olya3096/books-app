import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #343a40;
  color: #fff;
  text-align: center;
  padding: 1 rem;
  width: 100%;
  bottom: 0;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Katalog Ksiązek. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
