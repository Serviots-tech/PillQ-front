import React from "react";
import { FemaleIcon, MaleIcon, NonBinaryIcon, OtherIcon } from "./svgs";

export const genderOptions = [
    { label: "Male", value: "MALE", icon: <MaleIcon /> },
    { label: "Female", value: "FEMALE", icon: <FemaleIcon /> },
    { label: "Non-Binary", value: "NON_BINARY", icon: <NonBinaryIcon /> },
    { label: "Other", value: "OTHER", icon: <OtherIcon /> },
];

export const appUsageOptions = [
    { label: "Get medication reminder", value: "GET_MEDICATION_REMINDER" },
    { label: "Track whether I took my meds", value: "TRACK_WHETHER_I_TOOK_MY_MEDS" },
    { label: "Keep a list of my meds", value: "KEEP_A_LIST_OF_MY_MEDS" },
    { label: "Remember when it’s time to refill", value: "REMEMBER_WHEN_ITS_TIME_TO_REFILL" },
    { label: "Check for drug interaction", value: "CHECK_FOR_DRUG_INTERACTION" },
    { label: "Track side effect/symptoms", value: "TRACK_SIDE_EFFECT_SYMPTOMS" },
    { label: "Track measurements", value: "TRACK_MEASUREMENTS" }

];