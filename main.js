let activity = [
  "Go for a run",
  "Read a book",
  "Watch a documentary",
  "Cook a new recipe",
  "Try a new hobby",
  "Visit a museum",
  "Learn a new skill",
];
function suggestActivity() {
  const randomIndex = Math.floor(Math.random() * activity.length);
  document.getElementById("result").innerHTML = activity[randomIndex];
}
function add() {
  const newActivity = document.getElementById("addActivity").value.trim();
  if (newActivity != "") activity.push(newActivity);
  document.getElementById("addActivity").value = "";
}
// trim ;
