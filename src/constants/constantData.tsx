import React from "react";
import { FemaleIcon, MaleIcon, NonBinaryIcon, OtherIcon } from "./svgs";

export const genderOptions = [
    { label: "Male", value: "MALE", icon: <MaleIcon /> },
    { label: "Female", value: "FEMALE", icon: <FemaleIcon/> },
    { label: "Non-Binary", value: "NON_BINARY", icon: <NonBinaryIcon/> },
    { label: "Other", value: "OTHER", icon: <OtherIcon/> },
];