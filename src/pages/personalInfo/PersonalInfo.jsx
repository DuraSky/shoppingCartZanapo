import Recap from "../recap/Recap";
import { BillingAddress } from "./billingAddress/BillingAddress";
import { CompanyAddress } from "./companyAddress/CompanyAddress";
import { DeliveryAddress } from "./deliveryAddress/DeliveryAddress";
import { Comment } from "./comment/Comment";

const PersonalInfo = () => {
  return (
    <>
      <BillingAddress />

      <DeliveryAddress />

      <CompanyAddress />

      <Comment />
      <Recap />
    </>
  );
};

export default PersonalInfo;
