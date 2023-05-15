var ValidatePaymentGateways = {
  validate: function(type) {
    switch (type) {
      case 'stripe':
        return this.validateStripe();
        break;
      default:
        return true;
        break;
    }
  },
	validateStripe: function() {
    return JotForm.stripe.createPaymentMethodForPE(null, function (paymentMethod, error) {
      if (error) {
          return JotForm.stripe.handleErrors(error);
      }
    });
  }
};