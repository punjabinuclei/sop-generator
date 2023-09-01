// pages/api/submit-form.ts

const sendEmail = require("../../utils/sendEmail");

import { NextApiRequest, NextApiResponse } from "next";
import { send } from "process";

function generateMockSOP(formData: any): string {
  const mockSOP = `
Statement of Purpose
    
Dear Admissions Committee,

I am writing to express my sincere interest in the ${formData.programOfStudy} at ${formData.admittedInstitute}  in ${formData.countryOfApplication}. I believe that my academic background, work experience, and future aspirations align perfectly with the goals of this program. In this statement, I will provide an overview of my qualifications and the reasons behind my decision to pursue this opportunity.

Personal Information:

Full Name: ${formData.fullName}
Age: ${formData.age}
Education Level: ${formData.educationLevel}
Institute: ${formData.institute}
Field of Study: ${formData.fieldOfStudy}
Work Experience: ${formData.workExperience}
Job Details: ${formData.jobDetails}
Admitted Institute: ${formData.admittedInstitute}

English Proficiency:

Listening Score: ${formData.listeningScore}
Reading Score: ${formData.readingScore}
Speaking Score: ${formData.speakingScore}
Writing Score: ${formData.writingScore}

Financial Information:

Tuition Payment: ${formData.tuitionPayment}
Tuition Fee: ${formData.tuitionFee}
Guaranteed Investment Certificate (GIC): ${formData.gic}
GIC Amount: ${formData.gicAmount}

Program and Aspirations:

My academic journey has equipped me with a strong foundation in ${formData.fieldOfStudy}. I am particularly interested in ${formData.fieldOfStudy} and believe that the ${formData.programOfStudy} at ${formData.institute} will provide the ideal platform to further my knowledge and expertise in this field.

${formData.jobDetails}, enhancing my practical skills and deepening my understanding of ${formData.fieldOfStudy}. I am eager to leverage this experience to contribute meaningfully to the ${formData.programOfStudy} and engage with fellow students.

Why ${formData.institute}?:
${formData.institute} has earned a stellar reputation for its academic excellence and commitment to ${formData.fieldOfStudy}. I am impressed by the institution's dedication to fostering a vibrant academic community and providing students with access to cutting-edge resources. I am confident that ${formData.institute} is the ideal place for me to pursue my academic and professional goals.

Future Goals:
My ultimate goal is to ${formData.futureGoals}. I believe that the ${formData.fieldOfStudy}  at ${formData.institute} will equip me with the knowledge and skills necessary to make a significant impact in ${formData.fieldOfStudy} and achieve my objectives.

Conclusion:
In conclusion, I am excited about the opportunity to join the esteemed ${formData.institute} and the ${formData.fieldOfStudy}. I am committed to working diligently, collaborating with peers and faculty, and maximizing my potential in this program. Thank you for considering my application.

Sincerely,

${formData.fullName}
  `;
  return mockSOP;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const formData = req.body; 
      const mockSOP = generateMockSOP(formData);


      console.log("Generated SOP:", mockSOP);
      await sendEmail(formData, mockSOP);
      res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error processing form:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
