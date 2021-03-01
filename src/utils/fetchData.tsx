
const query = `*[_type == "event"] {
  _id,
  name,
  startTime,
  organizer->
}`;
