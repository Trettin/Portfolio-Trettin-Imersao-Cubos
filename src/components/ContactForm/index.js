import "./style.css";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit(data) {
    const newFrom = data.name + " " + data.from;
    const { name, from, ...dataLessNameFrom } = { ...data };
    try {
      const response = await fetch("https://trettin-dev.herokuapp.com/", {
        method: "POST",
        body: JSON.stringify({ from: newFrom, ...dataLessNameFrom }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <form id="contact_form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">
        Name
        <input id="name" type="text" {...register("name")} />
      </label>

      <label htmlFor="from">
        From
        <input id="from" type="text" {...register("from")} />
      </label>

      <label htmlFor="to">
        To
        <input id="to" type="text" {...register("to")} />
      </label>

      <label htmlFor="subject">
        Subject
        <input id="subject" type="text" {...register("subject")} />
      </label>

      <label htmlFor="contact_content">
        Content
        <textarea
          name="contact_content"
          id="contact_content"
          cols="30"
          rows="10"
          {...register("text")}
        ></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  );
}
