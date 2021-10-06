import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 1rem;
  width: 7rem;
  border-radius: 10px;
  color: #fff;
  border: black solid 1px;
  background-color: black;
  font-weight: 600;
`;

const KEY =
  'pk_test_51GjZtqFdOeaGS57h0YiX3mOYVJ8pFrBT8DdlR0bz1JGD8EHJDSqVPw1N8xTcV3EBYvxH303SIK9qqcu98FHHU3JX00S5l9yELt';

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          'http://localhost:5000/api/v1/checkout/payment',
          {
            tokenId: stripeToken.id,
            amount: 2000
          }
        );
        console.log(res.data);
        history.push('/success');
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, history]);

  return (
    <Container>
      <Wrapper>
        {stripeToken ? (
          <span>Processing. Please wait...</span>
        ) : (
          <StripeCheckout
            name="BA shop"
            image="https://i.ibb.co/PgkcZrW/BA-png-light-blue.png"
            billingAddress
            shippingAddress
            description=" Your total is $20"
            amount={2000}
            token={onToken}
            stripeKey={KEY}
          >
            <Button>Pay Now</Button>
          </StripeCheckout>
        )}
      </Wrapper>
    </Container>
  );
};

export default Pay;

// import React from 'react';
// import StripeCheckout from 'react-stripe-checkout';

// export default class Pay extends React.Component {
//   onToken = (token) => {
//     fetch('/save-stripe-token', {
//       method: 'POST',
//       body: JSON.stringify(token)
//     }).then((response) => {
//       response.json().then((data) => {
//         alert(`We are in business, ${data.email}`);
//       });
//     });
//   };

//   // ...

//   render() {
//     return (
//       // ...
//       <StripeCheckout
//         token={this.onToken}
//         stripeKey="my_PUBLISHABLE_stripekey"
//       />
//     );
//   }
// }
