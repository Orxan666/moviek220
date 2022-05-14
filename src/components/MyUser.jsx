import React from "react";

function MyUser({ name, surname, hobbies }) {
  return (
    <div>
      <h1>{`sizin adiniz: ${name} sizin soyadiniz:  ${surname}`}</h1>

      {hobbies.map((hobbi) => <div key={hobbi.id}>{hobbi.name}</div>)}
    </div>
  );
}

export default MyUser;
