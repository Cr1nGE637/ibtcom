import styled from "styled-components";

export const PrivacyPolicyContainer = styled.div`
  display: flex;
  text-align: justify;
  width: 100%;
  max-width: 1000px;
  flex-direction: column;
  padding: 0 20px 15px 20px;
  border-bottom: 1px solid black;
  gap: 30px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 20px;
    padding: 0 15px 12px 15px;
  }

  @media (max-width: 480px) {
    gap: 16px;
    padding: 0 10px 10px 10px;
  }
`