import React from "react";

export const BillingAddress = ({ register, errors }) => {
  return (
    <div>
      <h2>Fakturační a dodací adresa</h2>
      <div>
        <label>Jméno</label>
        <input
          {...register("name", { required: "Jméno nesmí být prázdné" })}
          type="text"
          placeholder="Jméno"
        />
        {errors.name && <div>{errors.name.message}</div>}
      </div>
      <div>
        <label>Příjmení</label>
        <input
          {...register("surname", { required: "Příjmení nesmí být prázdné" })}
          type="text"
          placeholder="Příjmení"
        />
        {errors.surname && <div>{errors.surname.message}</div>}
      </div>
      <div>
        <label>Ulice a číslo popisné</label>
        <input
          {...register("street", { required: "Ulice nesmí být prázdná" })}
          type="text"
          placeholder="Ulice a číslo popisné"
        />
        {errors.street && <div>{errors.street.message}</div>}
      </div>
      <div>
        <label>PSČ</label>
        <input
          {...register("psc", {
            required: "PSČ nesmí být prázdné",
            pattern: {
              value: /^[0-9]{5}$/,
              message: "PSČ musí být pětimístné číslo",
            },
          })}
          type="text"
          placeholder="PSČ"
        />
        {errors.psc && <div>{errors.psc.message}</div>}
      </div>
      <div>
        <label>Město</label>
        <input
          {...register("town", { required: "Město nesmí být prázdné" })}
          type="text"
          placeholder="Město"
        />
        {errors.town && <div>{errors.town.message}</div>}
      </div>
      <div>
        <label>Země</label>
        <input
          {...register("country")}
          type="text"
          placeholder="Země"
          value="Česká republika"
          readOnly
        />
      </div>
      <div>
        <label>Email</label>
        <input
          {...register("email", {
            required: "Email nesmí být prázdný",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Email musí být platná emailová adresa",
            },
          })}
          type="text"
          placeholder="Email"
        />
        {errors.email && <div>{errors.email.message}</div>}
      </div>
      <div>
        <label>Telefon</label>
        <input
          {...register("phone", {
            required: "Telefon nesmí být prázdný",
            pattern: {
              value: /^[0-9]{9}$/,
              message: "Telefon musí obsahovat pouze devítimístné číslo",
            },
          })}
          type="text"
          placeholder="Telefon"
        />
        {errors.phone && <div>{errors.phone.message}</div>}
      </div>
    </div>
  );
};
