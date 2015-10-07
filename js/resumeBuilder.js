/*
This is empty on purpose! Your code to build the resume will go here.
 */

//var awesomeThoughts = "I am Geoff Kleimeyer and I am AWESOME!";
//var funThoughts = awesomeThoughts.replace("AWESOME","FUN")
//console.log(awesomeThoughts);
//$("#main").append(funThoughts);

var name = "Geoff Kleimeyer";
var role = "Chemical Engineer";
var skills = ["math", "programming", "engineering"];

var bio = {
	"name" : "Geoff Kleimeyer",
	"role" : "Chemical Engineer",
	"contacts" : {
		"mobile" : "513-509-4300",
		"email" : "geoff.kleimeyer@gmail.com",
		"github" : "GKleim",
		"twitter" : "@GKleim",
		"location" : "Houston"
	},
	"bioPic" : "images/me.jpg",
	"welcomeMessage" : "Welcome",
	"skills" : skills
};

var work = {};
work.employer = "Dow Chemical";
work.position = "process engineer";
work.dates = "2014 - present";
work.location = "Houston";

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
            "dates": 2013
        },
        {
            "name": "Udacity",
            "city": "virtual",
            "degree": "Nanodegree",
            "majors": [
                "Front End Developer"
            ],
            "dates": 2015
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

education["name"] = "The Ohio State University";
education["dates"] = "2009 - 2013";
education["location"] = "Columbus, OH";

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
//var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedWorkPosition = HTMLworkTitle.replace("%data%", work.position);
var formattedSchoolName = HTMLschoolName.replace("%data%", education.name);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMessage);
$("#header").append(HTMLskillsStart);
//$("#header").append(formattedSkills);
$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formattedWorkPosition);
$("#education").append(HTMLschoolStart);
$("#education").append(formattedSchoolName);



