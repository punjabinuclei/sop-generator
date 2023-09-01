import React, { useState } from 'react'
import FormComponent from './components/formComponent'
import Lottie from 'lottie-react';
import animationData from "../../assets/homePageAnimation.json";

import { useRouter } from 'next/router';

const Homepage = () => {
  const router = useRouter(); 


  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    age: '',
    educationLevel: '',
    institute: '',
    fieldOfStudy: '',
    workExperience: '',
    jobDetails: '',
    admittedInstitute: '',
    listeningScore: '',
    readingScore: '',
    speakingScore: '',
    writingScore: '',
    tuitionPayment: '',
    tuitionFee: '',
    gic: '',
    gicAmount: '',
    programOfStudy: '',
    countryOfApplication: '',
    futureGoals: '',
  });



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        router.push('/FormSubmitted');
      } else {
        console.error('Form submission failed');
        router.push('/Error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className=''>
      <div className='flex justify-center  my-[3rem]'>
        <h1 className=' text-purple-900 font-semibold text-[3rem] lg:text-[6rem] text-center'>EFFIZENT</h1>
        <div className='lg:w-1/12 w-2/12'>
          <Lottie animationData={animationData} />
        </div>
      </div>
      <div className='flex justify-center lg:mx-[8rem] mx-[1rem]'>
        <div>
          <div className=' lg:px-[8rem] lg:py-[2rem] '>
            <div>
              <p className=' lg:w-[58rem] lg:text-[1.25rem] text-[#383030] font-medium text-[0.7rem]'>
              This form is designed to generate a customized Statement of Purpose for you. After completing this questionnaire and submitting it, you will receive an email with your personalized Statement of Purpose. You can then tailor and adjust it according to your preferences.
              </p>
            </div>
          </div>
          {/* Form */}
          <div className='lg:px-[8rem]'>
            <form action="" onSubmit={handleSubmit}>
              <FormComponent
                labelText="Email"
                type="email"
                placeholder="Email"
                id="email"
                defaultValue={formData.email} 
                handleChange={handleChange}
              />
              <FormComponent
                labelText="Full Name"
                type="text"
                placeholder="Full Name"
                id="fullName"
                defaultValue={formData.fullName} 
                handleChange={handleChange}

              />
              <FormComponent labelText="Age" type="number" placeholder="Age" id="age"
                defaultValue={formData.age}
                handleChange={handleChange}
              />
              <FormComponent
                labelText="Highest Level of Education"
                type="text"
                placeholder="Highest Level of Education"
                id="educationLevel"
                defaultValue={formData.educationLevel} 
                handleChange={handleChange}
              />
              <FormComponent
                labelText="Institute where you completed your highest level of education"
                type="text"
                placeholder="Institute where you completed your highest level of education"
                id="institute"
                defaultValue={formData.institute}
                handleChange={handleChange}
              />
              <FormComponent
                labelText="Field of Study"
                type="text"
                placeholder="Field of Study"
                id="fieldOfStudy"
                defaultValue={formData.fieldOfStudy} 
                handleChange={handleChange}
              />

              <FormComponent
                labelText="Do you have any relevant work experience?"
                type="textarea"
                placeholder="Write 'None' if no work experience. Provide details if yes."
                id="workExperience"
                defaultValue={formData.workExperience} 
                handleChange={handleChange}
              />
              <FormComponent
                labelText="What institute did you get admitted to in Canada?"
                type="text"
                placeholder="Admitted Institute in Canada"
                id="admittedInstitute"
                defaultValue={formData.admittedInstitute} 
                handleChange={handleChange}
              />

              <FormComponent
                labelText="What is your program of study in Canada?"
                type="text"
                placeholder="Program of Study in Canada"
                id="programOfStudy"
                defaultValue={formData.programOfStudy} 
                handleChange={handleChange}
              />

              <FormComponent
                labelText="Which country are you applying from?"
                type="text"
                placeholder="Country of Application"
                id="countryOfApplication"
                defaultValue={formData.countryOfApplication} 
                handleChange={handleChange}
              />
              <FormComponent
                labelText="What are your future goals?"
                type="textarea"
                placeholder="Future Goals"
                id="futureGoals"
                defaultValue={formData.futureGoals} 
                handleChange={handleChange}
              />
              <FormComponent
                labelText="English Scores - Listening"
                type="number"
                placeholder="Listening Score"
                id="listeningScore"
                defaultValue={formData.listeningScore} 
                handleChange={handleChange}
              />
              <FormComponent
                labelText="English Scores - Reading"
                type="number"
                placeholder="Reading Score"
                id="readingScore"
                defaultValue={formData.readingScore} 
                handleChange={handleChange}
              />
              <FormComponent
                labelText="English Scores - Speaking"
                type="number"
                placeholder="Speaking Score"
                id="speakingScore"
                defaultValue={formData.speakingScore} 
                handleChange={handleChange}
              />
              <FormComponent
                labelText="English Scores - Writing"
                type="number"
                placeholder="Writing Score"
                id="writingScore"
                defaultValue={formData.writingScore} 
                handleChange={handleChange}
              />
              <FormComponent
                labelText="Did you pay your first year tuition?"
                type="text"
                placeholder="Yes or No"
                id="tuitionPayment"
                defaultValue={formData.tuitionPayment} 
                handleChange={handleChange}
              />
              <FormComponent
                labelText="How much tuition fee did you pay?"
                type="number"
                placeholder="Tuition Fee Amount"
                id="tuitionFee"
                defaultValue={formData.tuitionFee} 
                handleChange={handleChange}
              />
              <FormComponent
                labelText="Did you do a GIC?"
                type="text"
                placeholder="Yes or No"
                id="gic"
                defaultValue={formData.gic} 
                handleChange={handleChange}
              />
              <FormComponent
                labelText="How much did you pay towards GIC?"
                type="number"
                placeholder="GIC Amount"
                id="gicAmount"
                defaultValue={formData.gicAmount} 
                handleChange={handleChange}
              />
              <div className='flex justify-center'>
                <button className="mt-2 mb-10 px-8 py-2 bg-purple-700 text-white rounded-md  hover:bg-purple-900 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" type="submit">
                  Generate SOP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage