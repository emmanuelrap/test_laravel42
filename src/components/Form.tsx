"use client";

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import InputMask from "react-input-mask";

function Form() {
  const [formData, setFormData] = useState({
    email: "",
    cellulare: "",
    nome: "",
    cognome: "",
    codice: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    cellulare: false,
    nome: false,
    cognome: false,
    codice: false,
  });

  const [selection, setSelection] = useState({
    email: false,
    cellulare: false,
    nome: false,
    cognome: false,
    codice: false,
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [existError, setExistError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // name oR cognome make uppercase
    if (name == "nome") {
      const upperCaseValue = value.toUpperCase();
      if (/^[A-Z]*$/.test(upperCaseValue)) {
        setFormData({
          ...formData,
          nome: upperCaseValue,
        });
      }
    } else if (name == "cognome") {
      const upperCaseValue = value.toUpperCase();
      if (/^[A-Z]*$/.test(upperCaseValue)) {
        setFormData({
          ...formData,
          cognome: upperCaseValue,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  //FORM VALIDATE INPUTS
  useEffect(() => {
    if (
      formData?.email == "" ||
      formData?.cellulare == "" ||
      formData?.nome == "" ||
      formData?.cognome == "" ||
      formData?.codice == ""
    )
      setIsButtonDisabled(true);
    else if (!existError) setIsButtonDisabled(false);

    console.log("selection", selection);
  }, [formData]);

  const handleCodiceChange = (event) => {
    const newValue = event.target.value;
    const upperCaseValue = newValue.toUpperCase();

    if (/^[A-Z]*$/.test(upperCaseValue) && upperCaseValue.length <= 16) {
      setFormData({
        ...formData,
        codice: upperCaseValue,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    mostrarModal(formData);
  };

  const handleInputBlur = () => {
    //validate Errors Empty
    if (formData?.email == "" && selection.email) errors.email = true;
    else errors.email = false;

    if (formData?.cellulare == "" && selection.cellulare)
      errors.cellulare = true;
    else errors.cellulare = false;

    if (formData?.codice == "" && selection.codice) errors.codice = true;
    else errors.codice = false;

    if (formData?.cognome == "" && selection.cognome) errors.cognome = true;
    else errors.cognome = false;

    if (formData?.nome == "" && selection.nome) errors.nome = true;
    else errors.nome = false;
  };

  const mostrarModal = (data) => {
    Swal.fire({
      title: "Datos Ingresados",
      html: `E-mail: ${data.email} <br> Cellulare: ${data.cellulare} <br> Nome: ${data.nome} <br> Cognome: ${data.cognome} <br> Codice: ${data.codice}`,
      icon: "info",
      confirmButtonText: "Entendido",
    });
  };

  return (
    <div className="p-10">
      <form onSubmit={handleSubmit}>
        <p className="text-center sm:text-left mb-2 w-full">
          Ora completa la richiesta con i tuoi dati
        </p>
        <p className="text-center sm:text-left mt-2 mb-6 w-full">
          Questi pochi dati sono utili anche per aiutarti durante la
          compilazione.
        </p>

        <div className="sm:flex flex-wrap">
          <div className="w-full sm:w-1/2 sm:pr-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              className={`mt-1 p-2 w-full border rounded-md mb-2 ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="E-mail"
              onClick={() => setSelection({ ...selection, email: true })}
            />
          </div>
          <div className="w-full sm:w-1/2">
            <InputMask
              onBlur={handleInputBlur}
              mask="+39 999 999999"
              maskChar="_"
              name="cellulare"
              value={formData.cellulare}
              onChange={handleInputChange}
              onClick={() => setSelection({ ...selection, cellulare: true })}
            >
              {(inputProps) => (
                <input
                  {...inputProps}
                  className={`mt-1 p-2 w-full border rounded-md mb-2 ${
                    errors.cellulare ? "border-red-500" : ""
                  }`}
                  placeholder="Cellulare"
                />
              )}
            </InputMask>
          </div>
        </div>

        <div className="sm:flex flex-wrap">
          <div className="w-full sm:w-1/2 sm:pr-2">
            <input
              onClick={() => setSelection({ ...selection, nome: true })}
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              className={`mt-1 p-2 w-full border rounded-md mb-2 ${
                errors.nome ? "border-red-500" : ""
              }`}
              placeholder="Nome"
            />
          </div>

          <div className="w-full sm:w-1/2">
            <input
              name="cognome"
              value={formData.cognome}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              className={`mt-1 p-2 w-full border rounded-md mb-2 ${
                errors.cognome ? "border-red-500" : ""
              }`}
              placeholder="Cognome"
              onClick={() => setSelection({ ...selection, cognome: true })}
            />
          </div>
        </div>

        <div className="sm:flex flex-wrap">
          <div className="w-full sm:w-1/2 sm:pr-2">
            <input
              type="text"
              name="codice"
              value={formData.codice}
              onChange={handleCodiceChange}
              onBlur={handleInputBlur}
              className={`mt-1 p-2 w-full border rounded-md mb-2 ${
                errors.codice ? "border-red-500" : ""
              }`}
              placeholder="Codice Fiscale"
              onClick={() => setSelection({ ...selection, codice: true })}
            />
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isButtonDisabled}
            className={`rounded-full p-3 px-16 font-semibold shadow-xl hover-bg-yellow-600 mt-5 ${
              isButtonDisabled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-yellow-400"
            }`}
          >
            CONTINUA
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
