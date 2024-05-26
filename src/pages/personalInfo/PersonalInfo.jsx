import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Recap from "../recap/Recap";
import { BillingAddress } from "./billingAddress/BillingAddress";
import { CompanyAddress } from "./companyAddress/CompanyAddress";
import { DeliveryAddress } from "./deliveryAddress/DeliveryAddress";
import { Comment } from "./comment/Comment";

const PersonalInfo = () => {
  const [showDeliveryAddress, setShowDeliveryAddress] = useState(false);
  const [showCompanyAddress, setShowCompanyAddress] = useState(false);
  const [showComment, setShowComment] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    unregister,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    return alert("form has been successfully submitted");
  };

  const formValues = watch();

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      const parsedFormData = JSON.parse(savedFormData);
      Object.keys(parsedFormData).forEach((key) => {
        setValue(key, parsedFormData[key]);
      });
    }
  }, [setValue]);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formValues));
  }, [formValues]);

  useEffect(() => {
    if (!showDeliveryAddress) {
      unregister([
        "company",
        "deliveryName",
        "deliverySurname",
        "deliveryStreet",
        "deliveryPsc",
        "deliveryTown",
      ]);
    }
    if (!showCompanyAddress) {
      unregister(["companyName", "ic", "dic"]);
    }
    if (!showComment) {
      unregister("comment");
    }
  }, [showDeliveryAddress, showCompanyAddress, showComment, unregister]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BillingAddress register={register} errors={errors} />

      <div>
        <input
          type="checkbox"
          id="deliveryAddressCheckbox"
          onChange={(e) => setShowDeliveryAddress(e.target.checked)}
        />
        <label htmlFor="deliveryAddressCheckbox">
          Chci zadat dodací adresu
        </label>
      </div>

      {showDeliveryAddress && (
        <DeliveryAddress register={register} errors={errors} />
      )}

      <div>
        <input
          type="checkbox"
          id="companyAddressCheckbox"
          onChange={(e) => setShowCompanyAddress(e.target.checked)}
        />
        <label htmlFor="companyAddressCheckbox">
          Chci zadat údaje pro firmu
        </label>
      </div>

      {showCompanyAddress && (
        <CompanyAddress register={register} errors={errors} />
      )}

      <div>
        <input
          type="checkbox"
          id="commentCheckbox"
          onChange={(e) => setShowComment(e.target.checked)}
        />
        <label htmlFor="commentCheckbox">Chci přidat komentář</label>
      </div>

      {showComment && <Comment register={register} errors={errors} />}

      <Recap />

      <button type="submit">Odeslat</button>
    </form>
  );
};

export default PersonalInfo;
