// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Header from "./components/Header";
import { useForm } from "react-hook-form";

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
                console.log(e.target.st);
                e.target.style.borderColor = "red";
              } else {
                e.target.style.borderColor = "black";
              }
            }}
            list={name}
            className="border-1 p-1 rounded"
          />
          <datalist id={name} className="border-1 " {...register(name)}>
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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // console.log(watch("first_name"));
  const onSubmit = (data) => console.log(data);
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
    // <div className="w-[100vw] h-[100vh]">
    //   <Header />
    //   <Router>
    //     <Routes>
    //       <Route path="/" Component={Home} />
    //       <Route path="/about" Component={About} />
    //     </Routes>
    //   </Router>
    // </div>
    <div className=" w-screen h-full  flex items-center justify-center">
      <form className="flex flex-col gap-1" onSubmit={handleSubmit(onSubmit)}>
        {/* <>
          <label>First Name</label>
          <input className="border-1" {...register("firstName")} />
        </>
        <>
          <label>Last Name</label>
          <input className="border-1" {...register("lastName")} />
        </>
        <>
          <label>Phone number</label>
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            className="border-1"
            {...register("phoneNumber")}
          />
        </>
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select> */}

        {inputs?.map((inp) => (
          <Input
            key={inp?.name}
            props={{ ...inp, register, errors, required: true, watch }}
          />
        ))}
        {/* <input type="submit" /> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
