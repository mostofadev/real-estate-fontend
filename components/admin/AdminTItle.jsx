import React from "react";
import PrimaryButton from "../ui/button/PrimaryButton";

function AdminTItle({title,href,text}) {
  return (
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">{title}</h2>
      <PrimaryButton href={href} text={text} />
    </div>
  );
}

export default AdminTItle;
