import styled from 'styled-components';

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 2rem;
  font-family: 'Inter', sans-serif;
  font-size: 1.35rem;
  font-weight: 300;
`;

const Category = styled.a`
  color: #111;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color:rgb(205, 170, 192);
  }
`;

const Categories = () => (
  <CategoriesContainer>
    <Category href="#graphics">Growth</Category>
    <Category href="#interactive">Marketing</Category>
    <Category href="#art">BD</Category>
  </CategoriesContainer>
);

export default Categories; 