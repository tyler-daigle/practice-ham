import { createClient } from "contentful";
console.log(process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN);
const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export default client;

// getTestChoices() gets the IDs of the already created exams from Contentful.
// Each entry is just a list of question IDs. It returns an array of all the
// exam IDs for the licenseClass.
function getTestChoices(licenseClass = "Technician") {
  return client
    .getEntries({
      content_type: "exam",
      select: "fields.exam_id",
      "fields.license_class[match]": licenseClass,
    })
    .then((entries) => entries.items);
}

// getExamQuestionIds() gets the array of IDs for the questions that make up the
// exam with the examId passed to it.
function getExamQuestionIds(examId) {
  // TODO: contentful might return questions in a random order. Try to sort them based on sections.
  // const ql = await contentfulClient
  return client
    .getEntries({
      content_type: "exam",
      "fields.exam_id": examId,
      select: "fields.question_list",
    })
    .then((entries) => entries.items[0].fields.question_list);
}

// getQuestions() takes an array of question IDs and returns the actual question
// data.
async function getQuestions(questionIds) {
  return client
    .getEntries({
      content_type: "question",
      "fields.question_id[in]": questionIds.join(","),
    })
    .then((entries) => {
      // console.log(entries);
      // console.log(`Got ${entries.items.length} questions.`);
      return entries.items;
    })
    .catch((e) => console.log(e));
}

export const Contentful = {
  getTestChoices,
  getExamQuestionIds,
  getQuestions,
};
