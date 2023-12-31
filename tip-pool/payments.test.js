describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {

      billAmtInput.value = 160;
      tipAmtInput.value = 10;
    });

    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();
    
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('160');
        expect(allPayments['payment1'].tipAmt).toEqual('10');
        expect(allPayments['payment1'].tipPercent).toEqual(6);
      });

      it('should not add a new payment to allPayments on submitPaymentInfo() without an input', function () {
        billAmtInput.value = '';
        submitPaymentInfo();
    
        expect(Object.keys(allPayments).length).toEqual(0);
      });
    
      it('should payment update #paymentTable on appendPaymentTable()', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
    
        appendPaymentTable(curPayment);
    
        let currentTdList = document.querySelectorAll('#paymentTable tbody tr td');
    
        expect(currentTdList.length).toEqual(4);
        expect(currentTdList[0].innerText).toEqual('$160');
        expect(currentTdList[1].innerText).toEqual('$10');
        expect(currentTdList[2].innerText).toEqual('6%');
      });
    
      it('should create a new payment on createCurPayment()', function () {
        let expectedPayment = {
          billAmt: '160',
          tipAmt: '10',
          tipPercent: 6,
        }
    
        expect(createCurPayment()).toEqual(expectedPayment);
      });
    
      it('should not create payment with empty input on createCurPayment()', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let curPayment = createCurPayment();
    
        expect(curPayment).toEqual(undefined);
      });
    
      afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
});
