var work = {
  "jobs": [
      {
            "employer": "Dow Chemical",
            "title": "Process Engineer",
            "location": "Houston, TX",
            "dates": "2014 - Present",
            "description": "Design chemical processes. This includes designing hydraulic systems, heat transfer systems, and associated safety systems."
        },
        {
            "employer": "The Ohio State University",
            "title": "General Chemistry Lab Teaching Assistant",
            "location": "Columbus, OH",
            "dates": "2011 - 2013",
            "description": "Teach and supervise lab classes. Grade lab reports and tutor students in general chemistry topics"
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Dow Agrosciences",
            "dates": "Feb 2014 - Jun 2014",
            "description": "Hydraulic calculations.",
            "images": [
                "http://placehold.it/555x300"
            ]
        },
        {
            "title": "Polyethylene",
            "dates": "Jun 2014 - Jan 2015",
            "description": "Instruments, GMISS, hydraulic hammer, equipment datasheets",
            "images": [
                "http://placehold.it/555x300"
            ]
        },
        {
            "title": "PS&F",
            "dates": "Jan 2015 - Aug 2015",
            "description": "Utilities, rundown, vacuum, filter startup, and LOPA.",
            "images": [
                 "http://placehold.it/555x300"
            ]
        },
        {
            "title": "Monomers & Coatings",
            "dates": "Aug 2015 - present",
            "description": "Heaters and product transfer system.",
            "images": [
                 "http://placehold.it/555x300"
            ]
        }
    ]
}

var bio = {
    "name": "Geoff Kleimeyer",
    "role": "Chemical Engineer",
    "contacts": {
        "mobile": "513-509-4300",
        "email": "geoff.kleimeyer@gmail.com",
        "github": "GKleim",
        "twitter": "@GKleim",
        "location": "Houston, TX"
    },
    "bioPic": "images/me.jpg",
    "welcomeMessage": "Welcome",
    "skills" : [
        "math",
        "computer programming",
        "juggling",
        "delivering things"
        ]
}

var education = {
    "schools": [
        {
            "name": "The Ohio State University",
            "city": "Columbus, OH",
            "degree": "BS",
            "majors": [
                "Chemical Engineering"
            ],
            "minors": [
                "Economics"
            ],
            "dates": 2013,
            "url": "http://www.osu.edu"
        },
        {
            "name": "Udacity",
            "city": "virtual",
            "degree": "Nanodegree",
            "majors": [
                "Front End Developer"
            ],
            "dates": 2015,
            "url": "http://www.udacity.com"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": 2015,
            "url": "http://www.udacity.com"
        }
    ]
}

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for(skill in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));       
    }
}else{
    console.log("No skills to post");
}

if(work.jobs.length > 0) {
    var formattedEmployer = "";
    var formattedTitle = "";
    $("#workExperience").append(HTMLworkStart);
    for(job in work.jobs) {
        formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));                  
    }
}else{
    console.log("No jobs to post");
}

$("#main").append(internationalizeButton)

projects.display = function() {
  for(project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedprojectTitle);
    var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedprojectDates);
    var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedprojectDescription);
    for(image in projects.projects[project].images) {
      var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedprojectImage);
    }
  }
}

projects.display();