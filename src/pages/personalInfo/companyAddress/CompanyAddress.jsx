import React from "react";

export const CompanyAddress = ({ register, errors }) => {
  return (
    <div>
      <h2>Dodací adresa pro firmu</h2>
      <div>
        <label>Společnost</label>
        <input
          {...register("companyName", {
            required: "Společnost nesmí být prázdná",
          })}
          type="text"
          placeholder="Společnost"
        />
        {errors.companyName && <div>{errors.companyName.message}</div>}
      </div>
      <div>
        <label>IČ</label>
        <input
          {...register("ic", {
            required: "IČ nesmí být prázdné",
            pattern: {
              value: /^[0-9]{8}$/,
              message: "IČ musí být osmiciferné číslo",
            },
          })}
          type="text"
          placeholder="IČ"
        />
        {errors.ic && <div>{errors.ic.message}</div>}
      </div>
      <div>
        <label>DIČ</label>
        <input
          {...register("dic", {
            required: "DIČ nesmí být prázdné",
            pattern: {
              value: /^[A-Z]{2}[0-9]{8,10}$/,
              message: "DIČ musí být platné",
            },
          })}
          type="text"
          placeholder="DIČ"
        />
        {errors.dic && <div>{errors.dic.message}</div>}
      </div>
    </div>
  );
};
