import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export const BillingAddress = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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

  return (
    <div>
      <h2>Fakturacni a dodaci adresa</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: "Jméno nesmí být prázdné" })}
          type="text"
          placeholder="Jmeno"
        />
        {errors.name && <div>{errors.name.message}</div>}

        <input
          {...register("surname", { required: "Příjmení nesmí být prázdné" })}
          type="text"
          placeholder="Prijmeni"
        />
        {errors.surname && <div>{errors.surname.message}</div>}

        <input
          {...register("street", { required: "Ulice nesmí být prázdná" })}
          type="text"
          placeholder="Ulice a cislo popisne"
        />
        {errors.street && <div>{errors.street.message}</div>}

        <input
          {...register("psc", { required: "PSČ nesmí být prázdná" })}
          type="text"
          placeholder="PSC"
        />
        {errors.psc && <div>{errors.psc.message}</div>}

        <input
          {...register("town", { required: "Město nesmí být prázdné" })}
          type="text"
          placeholder="Mesto"
        />
        {errors.town && <div>{errors.town.message}</div>}

        <input
          {...register("country")}
          type="text"
          placeholder="Zeme"
          value={"Česká republika"}
        />

        <input
          {...register("email", {
            required: "Email nesmí být prázdný",
            validate: (value) => {
              if (!value.includes("@")) {
                return "Email musí obsahovat @";
              }
            },
          })}
          type="text"
          placeholder="Email"
        />
        {errors.email && <div>{errors.email.message}</div>}

        <input
          {...register("phone", {
            required: "Telefon nesmí být prázdný",
            validate: (value) => {
              if (isNaN(value)) {
                return "Telefon musí obsahovat pouze cisla";
              }
            },
          })}
          type="text"
          placeholder="Telefon"
        />
        {errors.phone && <div>{errors.phone.message}</div>}

        <button type="submit">odeslat</button>
      </form>
    </div>
  );
};
