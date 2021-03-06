import styled from 'styled-components';
import { mobile, tablet } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: '25vh' })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${tablet({
    // background: 'pink'
  })}
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  ${tablet({
    // background: 'green',
    flex: 2,
    alignItems: 'end',
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center'
  })}
`;

const ButtonContainer = styled.div`
  ${tablet({
    // background: 'red',
    flex: 1,
    alignItems: 'start',
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center'
  })}
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <ButtonContainer>
            <Button>SHOP NOW</Button>
          </ButtonContainer>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
