import { useState } from "react";
import Input from "../components/Input";

import { useForm } from "react-hook-form";

const countriesList = [
  { name: "Afghanistan", code: "AF" },
  { name: "land Islands", code: "AX" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "AndorrA", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
];

export default function Home() {
  // const [form, setForm] = useState({});

  const { register, handleSubmit, formState } = useForm();

  const inputField = [
    { label: "first Name", name: "first_name" },
    { label: "last Name", name: "last_name" },
    { type: "email", label: "Email", name: "email" },
    { type: "number", label: "Number", min: 10, max: 10, name: "number" },
    {
      type: "select",
      label: " Select Countries",
      options: countriesList,
      name: "country",
    },
  ];
  console.log(formState);

  const onSubmit = (e) => console.log(e);

  return (
    <div className="flex items-center justify-center">
      <form className=" flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        {inputField?.map((input) => (
          <Input
            key={crypto.randomUUID()}
            props={input}
            // form={form}
            // setForm={setForm}
            register={register}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
