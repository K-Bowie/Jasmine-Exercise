
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 15000, years: 10, rate: 5};

  expect(calculateMonthlyPayment(values)).toEqual('159.10');
});


it("should return a result with 2 decimal places", function() {
  const values  = {amount: 25000, years: 5, rate: 2.5};

  expect(calculateMonthlyPayment(values)).toEqual('443.68');
});

it("should manage high rates", function() {
  const values  = {amount: 100000, years: 25, rate: 20};

  expect(calculateMonthlyPayment(values)).toEqual('81678.45');
});
