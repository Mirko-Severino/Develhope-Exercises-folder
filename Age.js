import React from "react";

export default function Age({ age }) {
  return (
    <p>
      {(age > 18 && "la tua età è pari a " + age + " anni") ||
        "Sei troppo giovane"}
    </p>
  );
}
