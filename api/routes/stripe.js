const router = require('express').Router();
const stripe = require('stripe')(
  'sk_test_51GjZtqFdOeaGS57haJtO1ZQw5q1vs7G3INlP6NnJvZLNB2QomDkMo259UB8xkkgiAhIqyB7U3EHS09Q8ABfn6qVM00nQkd48v5'
);

router.post('/payment', (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: 'usd'
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
