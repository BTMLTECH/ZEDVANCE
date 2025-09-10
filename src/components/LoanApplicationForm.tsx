import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Upload, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import TermsModal from './TermsModal';
import { FormDatas, initialFormData } from '@/lib/utils';


const LoanApplicationForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormDatas>({
    loanType: '',
    bvn: '',
    title: '',
    firstName: '',
    lastName: '',
    gender: '',
    maritalStatus: '',
    education: '',
    identification: '',
    identificationNo: '',
    dateOfBirth: '',
    mobile: '',
    email: '',
    homeAddress: '',
    building: '',
    landmark: '',
    busStop: '',
    lga: '',
    state: '',
    stayLength: '',
    previousAddress: '',
    accommodation: '',
    refereePhone: '',
    spousePhone: '',
    dependents: '',
    employmentStatus: '',
    occupation: '',
    designation: '',
    department: '',
    employerName: '',
    officeAddress: '',
    officeLandmark: '',
    officeLga: '',
    officeState: '',
    officialEmail: '',
    timeInEmployment: '',
    taxId: '',
    netIncome: '',
    staffId: '',
    otherIncome: '',
    employmentType: '',
    paymentOption: '',
    loanAmount: '',
    tenor: '',
    loanPurpose: '',
    repaymentMode: '',
    existingLoan: '',
    repaymentIfYes: '',
    accountName: '',
    accountNo: '',
    accountType: '',
    bankName: '',
    kinName: '',
    kinRelationship: '',
    kinAddress: '',
    kinPhone: '',
    kinEmail: '',
    kinEmployer: '',
    referralSource: [],
    accountOfficer: '',
    privacyConsent: false,
    kinConsent: false,
  });
  const [showTerms, setShowTerms] = useState(false);


  const handleInputChange = (field: keyof FormDatas, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
     try {
    const response = await fetch("http://localhost:5000/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    });

    const data = await response.json();

    if (data.success) {
       toast({
      title: "Application Submitted",
      description: "Your loan application has been submitted successfully!",
    });
      setFormData({ ...initialFormData }); // reset if needed
    } else {
      alert("Failed to submit form");
    }
  } catch (error) {
    console.error("❌ Error submitting form:", error);
    alert("Server error while submitting form");
  }
  
  };

  const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
    <div className="bg-form-section text-form-section-foreground px-4 py-3 font-semibold text-sm uppercase tracking-wide">
      {title}
    </div>
  );

  return (
    <div className="min-h-screen bg-form-bg py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
    {/* Header */}
<div className="mb-8">
  <Card className="shadow-lg">
    <CardContent className="p-6">
<div className="mb-8">
  <div className="p-6">
    {/* Header */}
    <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:items-start">
      
      {/* Logo & Company Info (stacked under logo) */}
      <div className="flex flex-col items-center text-center space-y-3">
     
        {/* Company Info */}
        <div className="space-y-1">
          <div className="text-2xl font-bold text-primary">BTM HOLIDAY'S</div>
          <div className="text-sm text-muted-foreground">
            <p>45, Oduduwa way,</p>
            <p>Ikeja, Lagos.</p>
            <p>Tel: 08129911906</p>
            <p>www.btmliminted.net</p>
          </div>
        </div>
      </div>

      {/* Loan Title & Selection */}
      <div className="text-center mt-6 lg:mt-0">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">LOAN APPLICATION FORM</h1>
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">SELECT LOAN TYPE</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <label className="flex items-center space-x-2 cursor-pointer">
              <Checkbox 
                checked={formData.loanType === 'TRAVEL LOAN'}
                onCheckedChange={() => handleInputChange('loanType', 'TRAVEL LOAN')}
              />
              <span className="text-sm">TRAVEL LOAN</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




      {/* BVN Input */}
      <div className="mt-6">
        <Label htmlFor="bvn" className="text-sm font-semibold">BVN</Label>
        <Input
          id="bvn"
          value={formData.bvn}
          onChange={(e) => handleInputChange('bvn', e.target.value)}
          className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your BVN"
        />
      </div>

          
      {/* Disclaimer */}
      <div className="mt-4 text-xs text-muted-foreground">
        <p>
          <strong>Disclaimer:</strong> Do not make any loan repayment to any personal bank accounts. All loan repayments must be made to official Zedvance Finance bank accounts with the account name "Zedvance Finance Limited". Zedvance Finance Limited, in partnership with BTM Holidays, shall not be held liable for any losses borne from interactions with fraudulent individuals.
        </p>
      </div>

    </CardContent>
  </Card>
</div>


        {/* Form */}
        <Card className="shadow-lg">
          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <SectionHeader title="PERSONAL INFORMATION" />
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <Label>Title</Label>
                  <RadioGroup 
                    value={formData.title} 
                    onValueChange={(value) => handleInputChange('title', value)}
                    className="flex gap-4 mt-1"
                  >
                    {['Mr', 'Miss', 'Mrs'].map((title) => (
                      <div key={title} className="flex items-center space-x-2">
                        <RadioGroupItem value={title} id={title} />
                        <Label htmlFor={title} className="text-sm">{title}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label>Gender</Label>
                  <RadioGroup 
                    value={formData.gender} 
                    onValueChange={(value) => handleInputChange('gender', value)}
                    className="flex gap-4 mt-1"
                  >
                    {['Male', 'Female'].map((gender) => (
                      <div key={gender} className="flex items-center space-x-2">
                        <RadioGroupItem value={gender} id={gender} />
                        <Label htmlFor={gender} className="text-sm">{gender}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div>
                  <Label>Marital Status</Label>
                  <RadioGroup 
                    value={formData.maritalStatus} 
                    onValueChange={(value) => handleInputChange('maritalStatus', value)}
                    className="flex flex-wrap gap-3 mt-1"
                  >
                    {['Single', 'Married', 'Widowed', 'Divorced'].map((status) => (
                      <div key={status} className="flex items-center space-x-2">
                        <RadioGroupItem value={status} id={status} />
                        <Label htmlFor={status} className="text-sm">{status}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div>
                  <Label htmlFor="stateOfOrigin">State of Origin</Label>
                  <Input
                    id="stateOfOrigin"
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label>Level of Education</Label>
                  <RadioGroup 
                    value={formData.education} 
                    onValueChange={(value) => handleInputChange('education', value)}
                    className="flex flex-wrap gap-3 mt-1"
                  >
                    {['Primary', 'Secondary', 'Graduate', 'Post Graduate'].map((edu) => (
                      <div key={edu} className="flex items-center space-x-2">
                        <RadioGroupItem value={edu} id={edu} />
                        <Label htmlFor={edu} className="text-sm">{edu}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div>
                  <Label>Means of Identification</Label>
                  <RadioGroup 
                    value={formData.identification} 
                    onValueChange={(value) => handleInputChange('identification', value)}
                    className="flex flex-wrap gap-3 mt-1"
                  >
                    {["Driver's License", "Int'l Passport", 'National Id', 'Voters Card', 'Others'].map((id) => (
                      <div key={id} className="flex items-center space-x-2">
                        <RadioGroupItem value={id} id={id} />
                        <Label htmlFor={id} className="text-sm">{id}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div>
                  <Label htmlFor="identificationNo">Identification No.</Label>
                  <Input
                    id="identificationNo"
                    value={formData.identificationNo}
                    onChange={(e) => handleInputChange('identificationNo', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
              </div>
            </CardContent>

            {/* Contact Details */}
            <SectionHeader title="CONTACT DETAILS" />
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="mobile">Mobile No</Label>
                  <Input
                    id="mobile"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Personal Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div className="md:col-span-2">
                  <Label htmlFor="homeAddress">Home Address</Label>
                  <Textarea
                    id="homeAddress"
                    value={formData.homeAddress}
                    onChange={(e) => handleInputChange('homeAddress', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="building">Building Description</Label>
                  <Input
                    id="building"
                    value={formData.building}
                    onChange={(e) => handleInputChange('building', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="landmark">Landmark</Label>
                  <Input
                    id="landmark"
                    value={formData.landmark}
                    onChange={(e) => handleInputChange('landmark', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="busStop">Closest Bus Stop</Label>
                  <Input
                    id="busStop"
                    value={formData.busStop}
                    onChange={(e) => handleInputChange('busStop', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="lga">LGA</Label>
                  <Input
                    id="lga"
                    value={formData.lga}
                    onChange={(e) => handleInputChange('lga', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="stayLength">Length of Stay in Current Address</Label>
                  <Input
                    id="stayLength"
                    value={formData.stayLength}
                    onChange={(e) => handleInputChange('stayLength', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div className="md:col-span-2">
                  <Label htmlFor="previousAddress">Previous Address</Label>
                  <Textarea
                    id="previousAddress"
                    value={formData.previousAddress}
                    onChange={(e) => handleInputChange('previousAddress', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label>Accommodation Type</Label>
                  <RadioGroup 
                    value={formData.accommodation} 
                    onValueChange={(value) => handleInputChange('accommodation', value)}
                    className="flex gap-4 mt-1"
                  >
                    {['Owner', 'Rented'].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <RadioGroupItem value={type} id={type} />
                        <Label htmlFor={type} className="text-sm">{type}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div>
                  <Label htmlFor="refereePhone">Referee Phone No</Label>
                  <Input
                    id="refereePhone"
                    value={formData.refereePhone}
                    onChange={(e) => handleInputChange('refereePhone', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="spousePhone">Spouse's Phone No</Label>
                  <Input
                    id="spousePhone"
                    value={formData.spousePhone}
                    onChange={(e) => handleInputChange('spousePhone', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="dependents">No of Dependencies</Label>
                  <Input
                    id="dependents"
                    value={formData.dependents}
                    onChange={(e) => handleInputChange('dependents', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
              </div>
            </CardContent>

            {/* Employment Details */}
            <SectionHeader title="EMPLOYMENT DETAILS" />
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Status</Label>
                  <RadioGroup 
                    value={formData.employmentStatus} 
                    onValueChange={(value) => handleInputChange('employmentStatus', value)}
                    className="flex gap-4 mt-1"
                  >
                    {['Employed', 'Self Employed'].map((status) => (
                      <div key={status} className="flex items-center space-x-2">
                        <RadioGroupItem value={status} id={status} />
                        <Label htmlFor={status} className="text-sm">{status}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div>
                  <Label htmlFor="occupation">Occupation</Label>
                  <Input
                    id="occupation"
                    value={formData.occupation}
                    onChange={(e) => handleInputChange('occupation', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="designation">Designation</Label>
                  <Input
                    id="designation"
                    value={formData.designation}
                    onChange={(e) => handleInputChange('designation', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="department">Department</Label>
                  <Input
                    id="department"
                    value={formData.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="employerName">Employer's Name</Label>
                  <Input
                    id="employerName"
                    value={formData.employerName}
                    onChange={(e) => handleInputChange('employerName', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div className="md:col-span-2">
                  <Label htmlFor="officeAddress">Office Address</Label>
                  <Textarea
                    id="officeAddress"
                    value={formData.officeAddress}
                    onChange={(e) => handleInputChange('officeAddress', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="officeLandmark">Landmark</Label>
                  <Input
                    id="officeLandmark"
                    value={formData.officeLandmark}
                    onChange={(e) => handleInputChange('officeLandmark', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="officeLga">LGA</Label>
                  <Input
                    id="officeLga"
                    value={formData.officeLga}
                    onChange={(e) => handleInputChange('officeLga', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="officeState">State</Label>
                  <Input
                    id="officeState"
                    value={formData.officeState}
                    onChange={(e) => handleInputChange('officeState', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="officialEmail">Official Email</Label>
                  <Input
                    id="officialEmail"
                    type="email"
                    value={formData.officialEmail}
                    onChange={(e) => handleInputChange('officialEmail', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="timeInEmployment">Time in Current Employment</Label>
                  <Input
                    id="timeInEmployment"
                    value={formData.timeInEmployment}
                    onChange={(e) => handleInputChange('timeInEmployment', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="taxId">Tax ID No.</Label>
                  <Input
                    id="taxId"
                    value={formData.taxId}
                    onChange={(e) => handleInputChange('taxId', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="netIncome">Net Monthly Income</Label>
                  <Input
                    id="netIncome"
                    value={formData.netIncome}
                    onChange={(e) => handleInputChange('netIncome', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="staffId">Staff ID No</Label>
                  <Input
                    id="staffId"
                    value={formData.staffId}
                    onChange={(e) => handleInputChange('staffId', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="otherIncome">Other Source of Income</Label>
                  <Input
                    id="otherIncome"
                    value={formData.otherIncome}
                    onChange={(e) => handleInputChange('otherIncome', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label>Employment Type</Label>
                  <RadioGroup 
                    value={formData.employmentType} 
                    onValueChange={(value) => handleInputChange('employmentType', value)}
                    className="flex gap-4 mt-1"
                  >
                    {['Full Time', 'Contract'].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <RadioGroupItem value={type} id={type} />
                        <Label htmlFor={type} className="text-sm">{type}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div>
                  <Label>Fee Payment Option</Label>
                  <RadioGroup 
                    value={formData.paymentOption} 
                    onValueChange={(value) => handleInputChange('paymentOption', value)}
                    className="flex gap-4 mt-1"
                  >
                    {['Capitalization', 'Upfront Deduction'].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="text-sm">{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </CardContent>



            {/* Loan Details */}
            <SectionHeader title="LOAN DETAILS" />
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="loanAmount">Loan Amount</Label>
                  <Input
                    id="loanAmount"
                    value={formData.loanAmount}
                    onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                    placeholder="₦"
                  />
                </div>

                <div>
                  <Label htmlFor="tenor">Tenor</Label>
                  <div className="flex flex-col space-y-2 mt-1">
                    {['2 weeks', '1 month', '3 months', '6 months'].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <Checkbox
                          checked={formData.tenor === option}
                          onCheckedChange={() => handleInputChange('tenor', option)}
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="loanPurpose">Loan Purpose</Label>
                  <Input
                    id="loanPurpose"
                    value={formData.loanPurpose}
                    onChange={(e) => handleInputChange('loanPurpose', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>

                <div>
                  <Label>Repayment Mode</Label>
                  <RadioGroup 
                    value={formData.repaymentMode} 
                    onValueChange={(value) => handleInputChange('repaymentMode', value)}
                    className="flex gap-4 mt-1"
                  >
                    {['Direct Debit', 'Cheques'].map((mode) => (
                      <div key={mode} className="flex items-center space-x-2">
                        <RadioGroupItem value={mode} id={mode} />
                        <Label htmlFor={mode} className="text-sm">{mode}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label>Any Existing Loan?</Label>
                  <RadioGroup 
                    value={formData.existingLoan} 
                    onValueChange={(value) => handleInputChange('existingLoan', value)}
                    className="flex gap-4 mt-1"
                  >
                    {['Yes', 'No'].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="text-sm">{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="repaymentIfYes">Repayment (If Yes)</Label>
                  <Input
                    id="repaymentIfYes"
                    value={formData.repaymentIfYes}
                    onChange={(e) => handleInputChange('repaymentIfYes', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
              </div>
            </CardContent>



            {/* Next of Kin Info */}
            <SectionHeader title="NEXT OF KIN INFO" />
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="kinName">Name</Label>
                  <Input
                    id="kinName"
                    value={formData.kinName}
                    onChange={(e) => handleInputChange('kinName', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="kinRelationship">Relationship</Label>
                  <Input
                    id="kinRelationship"
                    value={formData.kinRelationship}
                    onChange={(e) => handleInputChange('kinRelationship', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div className="md:col-span-2">
                  <Label htmlFor="kinAddress">Home Address</Label>
                  <Textarea
                    id="kinAddress"
                    value={formData.kinAddress}
                    onChange={(e) => handleInputChange('kinAddress', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="kinPhone">Phone No</Label>
                  <Input
                    id="kinPhone"
                    value={formData.kinPhone}
                    onChange={(e) => handleInputChange('kinPhone', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="kinEmail">Email Address</Label>
                  <Input
                    id="kinEmail"
                    type="email"
                    value={formData.kinEmail}
                    onChange={(e) => handleInputChange('kinEmail', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                
                <div>
                  <Label htmlFor="kinEmployer">Employer</Label>
                  <Input
                    id="kinEmployer"
                    value={formData.kinEmployer}
                    onChange={(e) => handleInputChange('kinEmployer', e.target.value)}
                              className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
              </div>
            </CardContent>


            {/* Attestation */}
            <SectionHeader title="ATTESTATION" />
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  I hereby confirm that I am applying for the above credit facility and certify that all the information provided by me above and attached hereto is true, correct and complete. I authorize you to make any enquiries you may consider necessary and relevant to the processing of my application for the purpose of evaluating this application.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                                className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="signatureDate">Signature & Date</Label>
                    <Input
                      id="signatureDate"
                                className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                    />
                  </div>
                </div>
              </div>
            </CardContent>

            {/* Privacy Policy */}
             <SectionHeader title="TERMS & CONDITIONS" />
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-xs text-muted-foreground">
                    By continuing, you agree to{" "}
                    <button
                      type="button"
                      onClick={() => setShowTerms(true)}
                      className="text-blue-600 underline"
                    >
                      read our Terms & Conditions
                    </button>{" "}
                    for instalment payment with Zedvance.
                  </p>

                  <div className="space-y-3">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <Checkbox
                        checked={formData.privacyConsent}
                        onCheckedChange={(checked) =>
                          handleInputChange("privacyConsent", checked)
                        }
                                  className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                      />
                      <span className="text-sm">
                        I confirm that I have read, understood and agree to the above
                        Terms & Conditions.
                      </span>
                    </label>

                    <label className="flex items-start space-x-3 cursor-pointer">
                      <Checkbox
                        checked={formData.kinConsent}
                        onCheckedChange={(checked) =>
                          handleInputChange("kinConsent", checked)
                        }
                                  className="mt-1 max-w-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                      />
                      <span className="text-sm">
                        I confirm that I have obtained permission from my next of kin/any
                        third party to provide their personal data to us.
                      </span>
                    </label>
                  </div>
                </div>
              </CardContent>

            {/* Terms Modal */}
            <TermsModal open={showTerms} onClose={() => setShowTerms(false)} />

            {/* Submit Button */}
            <CardContent className="p-6 bg-muted">
              <Button 
                type="submit" 
                className="w-full md:w-auto px-8 py-3 bg-primary hover:bg-primary/90"
                disabled={!formData.privacyConsent || !formData.kinConsent || !formData}
              >
                <FileText className="w-4 h-4 mr-2" />
                Submit Application
              </Button>
            </CardContent>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default LoanApplicationForm;
