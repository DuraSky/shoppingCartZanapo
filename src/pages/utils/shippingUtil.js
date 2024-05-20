export const paymentText = (choosenPayment) => {
  switch (choosenPayment) {
    case "CreditCard":
      return "Platba kartou online";
    case "BankTransfer":
      return "Bankovní převod";
    case "Dobirka":
      return "Dobírka";
    case "HomeCredit":
      return "Na splátky - Home Credit";
  }
};

export const cartAndShippingTotal = (cartTotal) => {
  return "To be implemented";
};
