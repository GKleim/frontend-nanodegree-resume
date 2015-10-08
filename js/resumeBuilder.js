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
                "url here"
            ]
        },
        {
            "title": "Polyethylene",
            "dates": "Jun 2014 - Jan 2015",
            "description": "Instruments, GMISS, hydraulic hammer, equipment datasheets",
            "images": [
                "url here"
            ]
        },
        {
            "title": "PS&F",
            "dates": "Jan 2015 - Aug 2015",
            "description": "Utilities, rundown, vacuum, filter startup, and LOPA.",
            "images": [
                "url here"
            ]
        },
        {
            "title": "Monomers & Coatings",
            "dates": "Aug 2015 - present",
            "description": "Heaters and product transfer system.",
            "images": [
                "url here"
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
        "juggling"
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
    }
}else{
    console.log("No jobs to post");
}

