import axios from "axios";
import { saveAs } from "file-saver";
import React from "react";

export const getAnswersFile = async (
  id: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const answersBlob = await axios.post(
      `/answers`,
      {
        id,
      },
      { responseType: "blob" }
    );
    const fileName = `quiz_${id}_answers.pdf`;
    const file = new Blob([answersBlob.data], { type: "application/pdf" });

    await saveAs(file, fileName);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
