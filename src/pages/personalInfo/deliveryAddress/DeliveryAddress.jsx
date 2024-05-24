import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const DeliveryAddress = () => {
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

  return (
    <div>
      <h2>Dodaci adresa</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("company", {
            required: "Dodaci spolecnost nesmí být prázdna",
          })}
          type="text"
          placeholder="Dodaci spolecnost"
        />
        {errors.company && <div>{errors.company.message}</div>}

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

        <button type="submit">odeslat</button>
      </form>
    </div>
  );
};
