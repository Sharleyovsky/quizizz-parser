import axios from "axios";

export const getAnswersFile = async (id: string): Promise<boolean> => {
  try {
    const answersBlob = await axios.post(
      `${process.env.API_URL}/getAnswers`,
      {
        id,
      },
      { responseType: "blob" }
    );
    const fileName = `quiz_${id}_answers.pdf`;
    const file = new Blob([answersBlob.data], { type: "application/pdf" });

    await saveAs(file, fileName);

    return true;
  } catch {
    return false;
  }
};
