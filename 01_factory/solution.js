class PayPalGateway {
  constructor() {
    this.name = "Paypal";
  }

  processPayment(amount) {
    console.log(`This Payment did with ${this.name}`);
  }
}

class StripeGateway {
  constructor() {
    this.name = "Stripe";
  }

  processPayment(amount) {
    console.log(`This Payment did with ${this.name}`);
  }
}

class PaymentFactory {
  static createPaymentGateway = (type) => {
    switch (type) {
      case "Paypal":
        return new PayPalGateway();
        break;
      case "Stripe":
        return new StripeGateway();
        break;
      default:
        throw new Error("Unspported");
    }
  };
}
function processOrder(paymentType, amount) {
  try {
    const paymentGateway = PaymentFactory.createPaymentGateway(paymentType);
    paymentGateway.processPayment(amount);
  } catch (error) {
    console.error(error.message);
  }
}

processOrder("Paypal", 100);
processOrder("Stripe", 100);
processOrder("Unspported", 100);
