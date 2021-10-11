// import styled from 'styled-components';

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const Logo = styled.img`
//   width: 25%;
// `;

// const Button = styled.button`
//   padding: 0.8rem;
//   width: 8rem;
//   border-radius: 10px;
//   color: #fff;
//   border: none;
//   background-color: teal;
//   font-weight: 600;
//   font-size: 20px;
//   margin-bottom: 10px;

//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Text = styled.p`
//   font-size: 15px;
//   width: 70%;
//   text-align: center;
// `;

// const Success = () => {
//   return (
//     <Container>
//       <Wrapper>
//         <Logo src="https://i.ibb.co/PgkcZrW/BA-png-light-blue.png"></Logo>
//         <Button>Successful..</Button>
//         <Text>Your order is being prepared. Thanks for choosing BA Shop.</Text>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Success;

import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { userRequest } from '../requestMethods';

const Success = () => {
  const location = useLocation();
  const data = location.state.data;

  console.log(data);

  //TODO
  //Create an order

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Successfull. Your order is being prepared...
      <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
    </div>
  );
};

export default Success;
