import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export interface FormDatas {
  loanType: string;
  bvn: string;
  title: string;
  firstName: string;
  lastName: string;
  gender: string;
  maritalStatus: string;
  education: string;
  identification: string;
  identificationNo: string;
  dateOfBirth: string;
  mobile: string;
  email: string;
  homeAddress: string;
  building: string;
  landmark: string;
  busStop: string;
  lga: string;
  state: string;
  stayLength: string;
  previousAddress: string;
  accommodation: string;
  refereePhone: string;
  spousePhone: string;
  dependents: string;
  employmentStatus: string;
  occupation: string;
  designation: string;
  department: string;
  employerName: string;
  officeAddress: string;
  officeLandmark: string;
  officeLga: string;
  officeState: string;
  officialEmail: string;
  timeInEmployment: string;
  taxId: string;
  netIncome: string;
  staffId: string;
  otherIncome: string;
  employmentType: string;
  paymentOption: string;
  loanAmount: string;
  tenor: string;
  loanPurpose: string;
  repaymentMode: string;
  existingLoan: string;
  repaymentIfYes: string;
  accountName: string;
  accountNo: string;
  accountType: string;
  bankName: string;
  kinName: string;
  kinRelationship: string;
  kinAddress: string;
  kinPhone: string;
  kinEmail: string;
  kinEmployer: string;
  referralSource: string[];
  accountOfficer: string;
  privacyConsent: boolean;
  kinConsent: boolean;
}


export const initialFormData: FormDatas = {
  loanType: "",
  bvn: "",
  title: "",
  firstName: "",
  lastName: "",
  gender: "",
  maritalStatus: "",
  education: "",
  identification: "",
  identificationNo: "",
  dateOfBirth: "",
  mobile: "",
  email: "",
  homeAddress: "",
  building: "",
  landmark: "",
  busStop: "",
  lga: "",
  state: "",
  stayLength: "",
  previousAddress: "",
  accommodation: "",
  refereePhone: "",
  spousePhone: "",
  dependents: "",
  employmentStatus: "",
  occupation: "",
  designation: "",
  department: "",
  employerName: "",
  officeAddress: "",
  officeLandmark: "",
  officeLga: "",
  officeState: "",
  officialEmail: "",
  timeInEmployment: "",
  taxId: "",
  netIncome: "",
  staffId: "",
  otherIncome: "",
  employmentType: "",
  paymentOption: "",
  loanAmount: "",
  tenor: "",
  loanPurpose: "",
  repaymentMode: "",
  existingLoan: "",
  repaymentIfYes: "",
  accountName: "",
  accountNo: "",
  accountType: "",
  bankName: "",
  kinName: "",
  kinRelationship: "",
  kinAddress: "",
  kinPhone: "",
  kinEmail: "",
  kinEmployer: "",
  referralSource: [], // array
  accountOfficer: "",
  privacyConsent: false, // boolean
  kinConsent: false,     // boolean
};
