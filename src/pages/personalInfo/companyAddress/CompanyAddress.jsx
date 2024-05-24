import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const CompanyAddress = () => {
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
      <h2>Dodaci adresa</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("companyName", {
            required: "Spolecnost nesmí být prázdna",
          })}
          type="text"
          placeholder="Spolecnost"
        />
        {errors.companyName && <div>{errors.companyName.message}</div>}

        <input
          {...register("ic", { required: "IC nesmí být prázdné" })}
          type="text"
          placeholder="IC"
        />
        {errors.ic && <div>{errors.ic.message}</div>}

        <input
          {...register("dic", { required: "DIC nesmí být prázdné" })}
          type="text"
          placeholder="DIC"
        />
        {errors.dic && <div>{errors.dic.message}</div>}

        <button type="submit">odeslat</button>
      </form>
    </div>
  );
};
