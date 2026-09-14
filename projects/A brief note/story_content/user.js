window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script14 = function()
{
  var player = GetPlayer();

var email1 = player.GetVar("Email1");
var email2 = player.GetVar("Email2");
var email3 = player.GetVar("Email3");

var emailThread =
"From: Anita Mone\n" +
"To: Justin Time\n" +
"Subject: A brief note about my luxury room\n\n" +

"Justin,\n\n" +

"I hope this note finds you well, and that your own travels have been significantly less labyrinthine than ours.\n\n" +

"We have finally arrived at the Nient di che in Florence. While I appreciate the historical significance of the cobblestones, the seven-hour layover you scheduled in Frankfurt, followed by the unexpected three-hour regional train ride, left us somewhat depleted upon arrival.\n\n" +

"Regarding the 'Palazzo Master Suite' we discussed: I am currently looking out the window, and rather than the promised view of the Duomo, I am looking directly into the exhaust vents of a local trattoria. Furthermore, while the room is certainly historic, the lack of functional air conditioning and the presence of two twin beds pushed together, rather than the requested California King, feels somewhat less than the unparalleled opulence discussed at length and promised during our extensive call.\n\n" +

"Given the premium fee paid for Meridian Mirage's expertise, I am confident this is simply a severe administrative oversight. Please let me know how you intend to rectify the room assignment and optimise our return routing.\n\n" +

"Warm regards,\n\n" +
"Anita\n\n" +

"==================================================\n" +
"REPLY\n" +
"==================================================\n\n" +

"From: Justin Time\n" +
"To: Anita Mone\n" +
"Subject: Re: A brief note about my luxury room\n\n" +

"Dear Anita,\n\n" +

email1 + "\n\n" +
email2 + "\n\n" +
email3 + "\n\n" +

"Kind regards,\n\n" +
"Justin\n" +
"Luxury Travel Consultant\n" +
"Meridian Mirage";

var blob = new Blob([emailThread], { type: "text/plain;charset=utf-8" });

var link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "Anita_Email_Response.txt";

document.body.appendChild(link);
link.click();
document.body.removeChild(link);

URL.revokeObjectURL(link.href);

}

};
