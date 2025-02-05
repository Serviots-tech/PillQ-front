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


export const medFormOptions = [
    { label: "Pill", value: "PILL", icon: <MaleIcon /> },
    { label: "Injection", value: "INJECTION", icon: <FemaleIcon /> },
    { label: "Solution (liquid)", value: "SOLUTION", icon: <NonBinaryIcon /> },
    { label: "Drops", value: "DROPS", icon: <OtherIcon /> },
    { label: "Inhaler", value: "INHALER", icon: <MaleIcon /> },
    { label: "Powder", value: "POWDER", icon: <MaleIcon /> },
    { label: "Other", value: "OTHER", icon: <MaleIcon /> },
];

export const howOftenOptions = [
    { label: "Every day", value: "EVERY_DAY" },
    { label: "Every other day", value: "EVERY_OTHER_DAY" },
    { label: "Specific days of the week", value: "SPECIFIC_DAYS" },
    { label: "On a recurring cycle", value: "RECURRING_CYCLE" },
    { label: "Every X days", value: "EVERY_X_DAYS" },
    { label: "Every X weeks", value: "EVERY_X_WEEKS" },
    { label: "Every X months", value: "EVERY_X_MONTHS" },
    { label: "Only as needed", value: "AS_NEEDED" },
];

export const howOftenEveryDayOptions = [
    { label: "Once a day", value: "ONCE_A_DAY" },
    { label: "Twice a day", value: "TWICE_A_DAY" },
    { label: "3 Times a day", value: "THREE_TIMES_A_DAY" },
    { label: "More than 3 times a day", value: "MORE_THAN_THREE_TIMES" },
    { label: "Every X hours", value: "EVERY_X_HOURS" },
    { label: "On a recurring cycle", value: "RECURRING_CYCLE" },
    { label: "Only as needed", value: "AS_NEEDED" },
];