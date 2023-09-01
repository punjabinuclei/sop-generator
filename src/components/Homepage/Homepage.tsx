import React, { useState } from 'react'
import FormComponent from './components/formComponent'

const Homepage = () => {


  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    age: '',
    educationLevel: '',
    institute: '',
    fieldOfStudy: '',
    workExperience: '',
    jobDetails: '',
    admittedInstitute:'',
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
        // You can add further actions or redirection here if needed
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className=''>
      <h1 className='my-[3rem] text-[#383030] font-semibold text-[6rem] text-center'>EFFIZENT</h1>
      <div className='flex justify-center'>
        <div>
          <div className='w-[70rem] px-[3rem] py-[2rem] bg-blue-100'>
            <div>
              <h1 className='text-[2.25rem] text-[#0062bc] font-semibold'>Fill form Guidelines</h1>
              <p className='w-[56rem] text-[1.25rem] font-[#383030] font-medium'>
                Fill this questionnaire for the student. After submitting, you will receive an email at the email address that you have provided with a Statement of Purpose customized for you. You can use and modify that as per your needs.
              </p>
            </div>
          </div>
          {/* Form */}
          <div>
            <form action="" onSubmit={handleSubmit}>
              <FormComponent
                labelText="Email*"
                type="email"
                placeholder="Email"
                id="email"
                defaultValue={formData.email} // Use formData.email or any specific value
                handleChange={handleChange}
              />
              <FormComponent
                labelText="Full Name*"
                type="text"
                placeholder="Full Name"
                id="fullName"
                defaultValue={formData.fullName} // Use formData.fullName or any specific value
                handleChange={handleChange}

              />
              <FormComponent labelText="Age*" type="number" placeholder="Age" id="age"
                defaultValue={formData.age}
                handleChange={handleChange}
              />
              <FormComponent
                labelText="Highest Level of Education*"
                type="text"
                placeholder="Highest Level of Education"
                id="educationLevel"
                defaultValue={formData.educationLevel} // Use formData.educationLevel or any specific value
                handleChange={handleChange}
              />
              <FormComponent
                labelText="Institute where you completed your highest level of education*"
                type="text"
                placeholder="Institute where you completed your highest level of education"
                id="institute"
                defaultValue={formData.institute} // Use formData.institute or any specific value
                handleChange={handleChange}
              />
              <FormComponent
                labelText="Field of Study*"
                type="text"
                placeholder="Field of Study"
                id="fieldOfStudy"
                defaultValue={formData.fieldOfStudy} // Use formData.fieldOfStudy or any specific value
                handleChange={handleChange}
              />

              <FormComponent
                labelText="Do you have any relevant work experience?"
                type="textarea"
                placeholder="Write 'None' if no work experience. Provide details if yes."
                id="workExperience"
                defaultValue={formData.workExperience} // Use formData.workExperience or any specific value
                handleChange={handleChange}
              />
              <FormComponent
                labelText="What institute did you get admitted to in Canada?"
                type="text"
                placeholder="Admitted Institute in Canada"
                id="admittedInstitute"
                defaultValue={formData.admittedInstitute} // Use formData.admittedInstitute or any specific value
                handleChange={handleChange}
              />

              <FormComponent
                labelText="What is your program of study in Canada?"
                type="text"
                placeholder="Program of Study in Canada"
                id="programOfStudy"
                defaultValue={formData.programOfStudy} // Use formData.programOfStudy or any specific value
                handleChange={handleChange}
              />

              <FormComponent
                labelText="Which country are you applying from?"
                type="text"
                placeholder="Country of Application"
                id="countryOfApplication"
                defaultValue={formData.countryOfApplication} // Use formData.countryOfApplication or any specific value
                handleChange={handleChange}
              />
              <FormComponent
                labelText="What are your future goals?"
                type="textarea"
                placeholder="Future Goals"
                id="futureGoals"
                defaultValue={formData.futureGoals} // Use formData.futureGoals or any specific value
                handleChange={handleChange}
              />
              <FormComponent
                labelText="English Scores - Listening"
                type="number"
                placeholder="Listening Score"
                id="listeningScore"
                defaultValue={formData.listeningScore} // Use formData.listeningScore or any specific value
                handleChange={handleChange}
              />
              <FormComponent
                labelText="English Scores - Reading"
                type="number"
                placeholder="Reading Score"
                id="readingScore"
                defaultValue={formData.readingScore} // Use formData.readingScore or any specific value
                handleChange={handleChange}
              />
              <FormComponent
                labelText="English Scores - Speaking"
                type="number"
                placeholder="Speaking Score"
                id="speakingScore"
                defaultValue={formData.speakingScore} // Use formData.speakingScore or any specific value
                handleChange={handleChange}
              />
              <FormComponent
                labelText="English Scores - Writing"
                type="number"
                placeholder="Writing Score"
                id="writingScore"
                defaultValue={formData.writingScore} // Use formData.writingScore or any specific value
                handleChange={handleChange}
              />
              <FormComponent
                labelText="Did you pay your first year tuition?"
                type="text"
                placeholder="Yes or No"
                id="tuitionPayment"
                defaultValue={formData.tuitionPayment} // Use formData.tuitionPayment or any specific value
                handleChange={handleChange}
              />
              <FormComponent
                labelText="How much tuition fee did you pay?"
                type="number"
                placeholder="Tuition Fee Amount"
                id="tuitionFee"
                defaultValue={formData.tuitionFee} // Use formData.tuitionFee or any specific value
                handleChange={handleChange}
              />
              <FormComponent
                labelText="Did you do a GIC?"
                type="text"
                placeholder="Yes or No"
                id="gic"
                defaultValue={formData.gic} // Use formData.gic or any specific value
                handleChange={handleChange}
              />
              <FormComponent
                labelText="How much did you pay towards GIC?"
                type="number"
                placeholder="GIC Amount"
                id="gicAmount"
                defaultValue={formData.gicAmount} // Use formData.gicAmount or any specific value
                handleChange={handleChange}
              />
              <div className='flex justify-center'>
                <button className="mt-2 mb-10 px-8 py-2 bg-blue-500 text-white rounded-md" type="submit">
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