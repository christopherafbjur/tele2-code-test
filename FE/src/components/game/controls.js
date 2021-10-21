import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
// import './controls.css';
import styles from './controls.module.css';

const schema = yup
  .object({
    simulations: yup
      .number()
      .positive("Numret måste vara mer än 0.")
      .integer("Numret måste vara en siffra.")
      .required("Nummer måste anges."),
  })
  .required();

export default function Form({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      simulations: 1,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="simulations">Simulationer</label>
      <input className={styles.formField} type="number" {...register("simulations")} />
      <p style={{color: 'red'}}>{errors.simulations?.message}</p>

      <label htmlFor="doorChange">Byt dörr</label>
      <input type="checkbox" {...register("doorChange")} />

      <input className={styles.button} type="submit" />
    </form>
  );
}
