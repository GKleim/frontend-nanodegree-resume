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
  "welcomeMsg": "Welcome",
  "skills" : [
    "math",
    "computer programming",
    "juggling",
    "delivering things"
  ]
}

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
      "description": "Hydraulics",
      "images": [
        "http://placehold.it/300x200"
      ]
    },
    {
      "title": "Plastics",
      "dates": "Jun 2014 - Jan 2015",
      "description": "Instruments, hydraulics, equipment",
      "images": [
        "http://placehold.it/300x200"
      ]
    },
    {
      "title": "PS&F",
      "dates": "Jan 2015 - Aug 2015",
      "description": "Utilities, vacuum, separations, and safety",
      "images": [
        "http://placehold.it/300x200"
      ]
    },
    {
      "title": "Monomers & Coatings",
      "dates": "Aug 2015 - present",
      "description": "Heaters and hydraulics",
      "images": [
        "http://placehold.it/300x200"
      ]
    }
  ]
}

var education = {
  "schools": [
    {
      "name": "The Ohio State University",
      "location": "Columbus, OH",
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
      "location": "Houston, TX",
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

bio.display = function() {
  var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role)
  $("#header").prepend(formattedHeaderRole);

  var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name)
  $("#header").prepend(formattedHeaderName);

  $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
  $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
  $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
  $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
  $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedBioPic);

  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
  $("#header").append(formattedWelcomeMsg);

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for(skill in bio.skills) {
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkills);
    }
  }else{
    console.log("No skills to post");
  }
}

work.display = function() {
  if(work.jobs.length > 0) {
    $("#workExperience").append(HTMLworkStart);

    for(job in work.jobs) {
      var formattedEmployer = formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      $(".work-entry:last").append(formattedEmployer + formattedTitle);

      var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedWorkDates);

      var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedWorkLocation);

      var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedWorkDescription);
    }
  }else{
    console.log("No jobs to post");
  }
}

projects.display = function() {
  for(project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedProjectDates);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDescription);

    if(projects.projects[project].images.length > 0) {
      for(image in projects.projects[project].images) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedProjectImage);
      }
    }
  }
}

education.display = function() {
  for(school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);

    for(major in education.schools[school].majors) {
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
      $(".education-entry:last").append(formattedSchoolMajor);
    }
  }

  $("#education").append(HTMLonlineClasses);

  for(course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    $(".education-entry:last").append(formattedOnlineDates);

    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
    $(".education-entry:last").append(formattedOnlineURL);
  }
}

function inName() {
  var inputName = bio.name;
  var spaceLoc = inputName.indexOf(" ");
  var firstName = inputName.slice(0,spaceLoc);
  firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  var lastName = inputName.slice(spaceLoc);

  var outputName = firstName + lastName.toUpperCase();
  return outputName;
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);
