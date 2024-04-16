import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    } else {
      this._amount = amount;
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(curr) {
    if (typeof Currency !== typeof curr) {
      throw new TypeError('Currency must be a currency');
    } else {
      this._currency = curr;
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.code} ${this._currency.name}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;
