interface WorkExperience {
      title: string;
      department: string;
      company: string;
      date: string;
      icon: string;
      acheivement: { tag: string; details: string }[];
}


export const workExperience: WorkExperience[] = [
    {
        title: "HR Co-op Student",
        department: "Organizational Capability",
        company: "Armstrong Fluid Technology",
        date: "Aug to Sep 2023",
        icon: "/armstrong.png",
        acheivement: [
            {
                tag: "VBA Automation",
                details: "Transformed a 17-hour manual process into a 20-minute task"
            }
        ]        
    },
    {
        title: "Associate",
        department: "Derivatives Trading",
        company: "Hong Kong Exchnages",
        date: "Jan 2020 to Feb 2022",
        icon: "/hkex.png",
        acheivement: [
            {
                tag: "Quality Assurance Testing",
                details: "Developed and executed over 2,000 User Testing and Performance Testing "
            },
            {
                tag: "Project Management",
                details: "Guided timely delivery of a software upgrade project with a 2-year roadmap as a Project Coordinator"
            }
        ]
    },
   {
        title: "Officer",
        department: "Derivatives Trading",
        company: "Hong Kong Exchnages",
        date: "Aug 2017 to Dec 2019",
        icon: "/hkex.png",
        acheivement: [
            {
                tag: "VBA scripts",
                details: "Automated daily data handling process and saved 2 hours per day"
            }
        ]
    }
]