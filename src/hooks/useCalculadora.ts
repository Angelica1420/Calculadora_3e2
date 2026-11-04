import { useState } from "react";

type Operador = "+" | "-" | "×" | "÷";

function calcular(a: number, b: number, operador: Operador): number | null {
  switch (operador) {
    case "+": return a + b;
    case "-": return a - b;
    case "×": return a * b;
    case "÷": return b === 0 ? null : a / b;
  }
}

function mostrar(numero: number | null): string {
  if (numero === null || !Number.isFinite(numero)) return "Error";
  return String(Number(numero.toPrecision(12)));
}

export function useCalculadora() {
  const [valor, setValor] = useState("0");
  const [anterior, setAnterior] = useState<string | null>(null);
  const [operacion, setOperacion] = useState<Operador | null>(null);
  const [empezarNuevo, setEmpezarNuevo] = useState(false);

  const presionarBoton = (texto: string) => {
    if (texto === "AC" || texto === "C") {
      setValor("0");
      setAnterior(null);
      setOperacion(null);
      setEmpezarNuevo(false);
      return;
    }

    if (valor === "Error") {
      if (/^[0-9.]$/.test(texto)) {
        setValor(texto === "." ? "0." : texto);
        setAnterior(null);
        setOperacion(null);
        setEmpezarNuevo(false);
      }
      return;
    }

    if (texto === "+/-") {
      if (Number(valor) !== 0) {
        setValor(valor.startsWith("-") ? valor.slice(1) : `-${valor}`);
      }
      return;
    }

    if (texto === "%") {
      setValor(mostrar(Number(valor) / 100));
      return;
    }

    if (["+", "-", "×", "÷"].includes(texto)) {
      const nuevoOperador = texto as Operador;
      if (anterior !== null && operacion !== null && !empezarNuevo) {
        const resultado = mostrar(calcular(Number(anterior), Number(valor), operacion));
        setValor(resultado);
        if (resultado === "Error") {
          setAnterior(null);
          setOperacion(null);
          setEmpezarNuevo(true);
          return;
        }
        setAnterior(resultado);
      } else if (anterior === null) {
        setAnterior(valor);
      }
      setOperacion(nuevoOperador);
      setEmpezarNuevo(true);
      return;
    }

    if (texto === "=") {
      if (anterior !== null && operacion !== null && !empezarNuevo) {
        setValor(mostrar(calcular(Number(anterior), Number(valor), operacion)));
        setAnterior(null);
        setOperacion(null);
        setEmpezarNuevo(true);
      }
      return;
    }

    if (texto === ".") {
      if (empezarNuevo) {
        setValor("0.");
        setEmpezarNuevo(false);
      } else if (!valor.includes(".")) {
        setValor(`${valor}.`);
      }
      return;
    }

    if (/^[0-9]$/.test(texto)) {
      if (empezarNuevo || valor === "0") {
        setValor(texto);
      } else if (valor.length < 15) {
        setValor(`${valor}${texto}`);
      }
      setEmpezarNuevo(false);
    }
  };

  const textoOperacion =
    anterior !== null && operacion !== null
      ? empezarNuevo
        ? `${anterior} ${operacion}`
        : `${anterior} ${operacion} ${valor}`
      : valor;

  const resultadoPrevio =
    anterior !== null && operacion !== null && !empezarNuevo && valor !== "Error"
      ? mostrar(calcular(Number(anterior), Number(valor), operacion))
      : "";

  return { textoOperacion, resultadoPrevio, presionarBoton };
}
