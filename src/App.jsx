// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Header from "./components/Header";
import { useForm } from "react-hook-form";
import * as motion from "motion/react-client";
import { useState } from "react";

export function Input({ props }) {
  const { label, register, options, errors, name, watch } = props;

  return (
    <>
      <label>{label}</label>
      {props.type === "select" ? (
        <>
          <input
            onBlurCapture={(e) => {
              if (!watch(name)?.length) {
                e.target.style.borderColor = "red";
              } else {
                e.target.style.borderColor = "black";
              }
            }}
            list={name}
            className="border-1 p-1 rounded"
            {...register(name)}
          />
          <datalist id={name} className="border-1 ">
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </datalist>
        </>
      ) : (
        <input
          onBlurCapture={(e) => {
            console.log("vjhvj");
            console.log("uuu", typeof watch(name));
            if (!watch(name)?.length) {
              console.log(e.target.st);
              e.target.style.borderColor = "red";
            } else {
              e.target.style.borderColor = "black";
            }
          }}
          className="border-1 p-1 rounded"
          {...register(name, { required: true })}
        />
      )}
      {errors[name] && (
        <p className="text-red-600 p-1">{errors?.[name]?.type}</p>
      )}
    </>
  );
}

function App() {
  const [x, setX] = useState("0");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));
  const inputs = [
    { label: "First Name", name: "first_name" },
    { label: "Last Name", name: "last_name" },
    {
      label: "Phone Number",
      name: "phone_number",
      type: "tel",
      pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
    },
    {
      label: "Gender",
      type: "select",
      options: ["male", "female", "other"],
      name: "gender",
    },
  ];
  return (
    <div className="w-screen h-full  ">
      {/* main container */}
      <div className="m-auto w-[60%] h-[60%] border-1 border-red-700 flex rounded relative ">
        <motion.div className=" w-[50%] h-full flex items-center justify-center p-4">
          <h1> Login </h1>
        </motion.div>

        <motion.div
          animate={{
            x,
          }}
          transition={{ type: "spring" }}
          className="absolute w-[50%] min-h-full bg-red-700 rounded flex items-center justify-center "
        >
          <button
            onClick={() => {
              if (x === 410) setX(0);
              else setX(410);
            }}
          >
            {x ? "Sign Up" : "Login"}
          </button>
        </motion.div>
        <div className=" w-[50%] h-full flex items-center justify-center p-4  ">
          <form
            className="flex flex-col gap-1"
            onSubmit={handleSubmit(onSubmit)}
          >
            {inputs?.map((inp) => (
              <Input
                key={inp?.name}
                props={{ ...inp, register, errors, required: true, watch }}
              />
            ))}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
