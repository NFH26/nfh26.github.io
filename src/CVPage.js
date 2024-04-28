import React from 'react';
import { Box, Typography, Link, Avatar } from '@mui/material';
import { Work, School, Language, Security, Business, Place } from '@mui/icons-material'; // Import relevant Material Icons

const CVPage = () => {
  const profile = {
    name: "Nayef Alharbi",
    location: "Brisbane City, Queensland, Australia",
    email: "alharbi.nayef1@gmail.com",
    linkedin: "www.linkedin.com/in/nayefalharbi",
    skills: ["Java", "Technical Solution Design", "Presentations"],
    languages: ["English (Professional Working)", "Arabic (Native)"],
    certifications: [".Net/JAVA/ Web Development", "Security (WEBDEVSEC2)", "Data Protection Program", "Implementer (DPPI6)"],
    summary: "Cybersecurity expert with over 10 years of experience...",
    experiences: [
      {
        title: "Cryptography Expert",
        duration: "January 2023 - Present (1 year 4 months)",
        company: "Center of Excellence in Information Assurance",
        location: "Riyadh",
        description: "Conducting cryptographic research: Stay up to date with the latest advancements in cryptography and analyze their applicability to practical scenarios. Designing cryptographic solutions: Develop cryptographic protocols, and systems tailored to specific needs, ensuring they are secure and efficient. Evaluating cryptographic protocols: Assess the security and performance of existing cryptographic solutions, identifying vulnerabilities and potential weaknesses. Conducting risk assessments: Assess the cryptographic risks and vulnerabilities in systems and applications, providing recommendations for mitigating those risks. Providing cryptographic guidance and consulting: Advise stakeholders, such as development teams or clients, on cryptographic best practices, standards, and suitable algorithms for specific use cases. Performing cryptographic audits: Review the cryptographic implementations and configurations of systems to ensure compliance with security standards and regulatory requirements. Collaborating with cross-functional teams: Work closely with software engineers, security professionals, and project managers to integrate cryptographic solutions into larger systems or applications. Staying informed about emerging technologies: Keep track of advancements in cryptography, including quantum-resistant algorithms, post-quantum cryptography and assess their potential impact on existing systems."
      },
      {
        title: "Cryptography Specialist",
        duration: "August 2018 - July 2023 (5 years)",
        company: "Center of Excellence in Information Assurance",
        location: "Riyadh",
        description: "Conducting cryptographic research: Stay up to date with the latest advancements in cryptography and analyze their applicability to practical scenarios. Designing cryptographic solutions: Develop cryptographic protocols, and systems tailored to specific needs, ensuring they are secure and efficient. Evaluating cryptographic protocols: Assess the security and performance of existing cryptographic solutions, identifying vulnerabilities and potential weaknesses. Conducting risk assessments: Assess the cryptographic risks and vulnerabilities in systems and applications, providing recommendations for mitigating those risks. Providing cryptographic guidance and consulting: Advise stakeholders, such as development teams or clients, on cryptographic best practices, standards, and suitable algorithms for specific use cases. Performing cryptographic audits: Review the cryptographic implementations and configurations of systems to ensure compliance with security standards and regulatory requirements. Collaborating with cross-functional teams: Work closely with software engineers, security professionals, and project managers to integrate cryptographic solutions into larger systems or applications. Staying informed about emerging technologies: Keep track of advancements in cryptography, including quantum-resistant algorithms, post-quantum cryptography and assess their potential impact on existing systems."
      },
      {
        title: "Information Security Group Leader",
        duration: "October 2017 - August 2018 (11 months)",
        company: "Saudi Aramco",
        location: "Al-Dhahran, Eastern Region, Saudi Arabia",
        description: "Led a team of information security professionals and provided technical support for Training and Development Administration Area, supporting over 7,000 employees across the Kingdom. Successfully implemented and executed the Data Protection and Data Leakage Programs, protecting employees, infrastructure, and the company from potential cyber threats."
      },
      {
        title: "Systems Developer",
        duration: "May 2017 - October 2017 (6 months)",
        company: "Saudi Aramco",
        location: "Al-Dhahran, Eastern Region, Saudi Arabia",
        description: "Developed web applications using cutting-edge technologies, including the Experience API (xAPI) to measure learning and experience. Provided expert consultation on information security and cryptography to colleagues and clients."
      },
      {
        title: "Information Security Specialist",
        duration: "January 2015 - May 2017 (2 years 5 months)",
        company: "Saudi Aramco",
        location: "Al-Dhahran, Eastern Region, Saudi Arabia",
        description: "Conducted advanced research and development in Public Key Infrastructure (PKI) and cryptography. Designed and implemented innovative solutions based on cryptographic primitives and Active Directory."
      },
      {
        title: "Information Security Specialist",
        duration: "April 2014 - December 2014 (9 months)",
        company: "Saudi Aramco",
        location: "Al-Dhahran, Eastern Region, Saudi Arabia",
        description: "Led the implementation of the data protection program, ensuring sensitive information assets were protected from common threats. Developed numerous defensible applications, demonstrating a strong understanding of information security principles."
      },
      {
        title: "Software Engineer - Security",
        duration: "August 2012 - April 2014 (1 year 9 months)",
        company: "TECHNOLOGY CONTROL CO.",
        location: "Riyadh, Saudi Arabia",
        description: "Worked in the area of information security & cryptography, designing and developing secure products and solutions. Conducted research and developed customized cryptographic algorithms. Performed secure code reviews and worked on systems ranging from embedded systems to general purpose ones. Developed a cryptographic key generation technique using Hybrid Random Generator and implemented NIST SUITE B."
      },
      {
        title: "System Developer",
        duration: "June 2011 - January 2012 (8 months)",
        company: "TECHNOLOGY CONTROL CO.",
        location: "Riyadh, Saudi Arabia",
        description: "Developed an application to help decision makers predict subjects' opinions with high accuracy using machine learning algorithms and text analysis techniques."
      }
    ]
  };

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ width: 150, height: 150, mb: 2 }}>NFH</Avatar>
        <Typography variant="h5">{profile.name}</Typography>
        <Typography>{profile.location}</Typography>
        <Link href={`mailto:${profile.email}`} sx={{ mt: 1 }}>Email</Link>
        <Link href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" sx={{ mt: 1 }}>LinkedIn</Link>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Summary</Typography>
        <Typography>{profile.summary}</Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Top Skills</Typography>
        {profile.skills.map((skill, index) => (
          <Typography key={index}><Work sx={{ mr: 1 }} /> {skill}</Typography>
        ))}
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Languages</Typography>
        {profile.languages.map((language, index) => (
          <Typography key={index}><Language sx={{ mr: 1 }} /> {language}</Typography>
        ))}
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Certifications</Typography>
        {profile.certifications.map((certification, index) => (
          <Typography key={index}><Security sx={{ mr: 1 }} /> {certification}</Typography>
        ))}
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Experience</Typography>
        {profile.experiences.map((exp, index) => (
          <Box key={index} sx={{ mt: 2 }}>
            <Typography variant="h6">{exp.title}</Typography>
            <Typography><Business sx={{ mr: 1 }} /> {exp.duration}</Typography>
            <Typography><Work sx={{ mr: 1 }} /> {exp.company}</Typography>
            <Typography><Place sx={{ mr: 1 }} /> {exp.location}</Typography>
            <Typography>{exp.description}</Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Education</Typography>
        <Typography><School sx={{ mr: 1 }} /> Bachelor of Science (B.S.), Computer Science</Typography>
        <Typography>KFUPM (2006 - June 2012)</Typography>
      </Box>
    </Box>
  );
};

export default CVPage;