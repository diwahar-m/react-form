import React from "react";

export default function Input({ props, register, key }) {
  const { label, type, min, max, options, name } = props;

  return (
    <div className="flex  gap-2 items-center">
      <label className="w-[50%]">{label}</label>
      {type === "select" ? (
        <select
          //   value={form?.[label]}
          //   required
          //   onChange={(e) => setForm({ ...form, [label]: e.target.value })}
          {...register(name)}
          id={key}
        >
          {options?.map((country) => (
            <option key={country?.name} value={country?.name}>
              {country?.name}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={key}
          //   value={form?.[label]}
          {...register(name, { required: true, min: min, max: max })}
          //   onChange={(e) => {
          //     setForm({ ...form, [label]: e.target.value });
          //     console.log(form);
          //   }}
          //   required
          className="border-[2px] border-[#000] p-2"
          //   type={type || "text"}
          //   minLength={min}
          //   maxLength={max}
        />
      )}
      ;
    </div>
  );
}
