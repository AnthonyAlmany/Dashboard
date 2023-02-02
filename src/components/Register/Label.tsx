import React from "react";

type LabelType = {
   htmlFor: string;
   icon: any;
};

function Label({ htmlFor, icon }: LabelType) {
   return <label htmlFor={htmlFor}>{icon}</label>;
}

export default Label;
