import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

// Styled components
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ComicForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ComicPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const ComicPanelItem = styled.div`
  flex: 1 0 calc(33.333% - 10px);
  box-sizing: border-box;

  @media (max-width: 600px) {
    flex: 1 0 calc(50% - 10px);
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const StyledButton = styled.button`
  ${({ theme }) => theme.mixins.button};
  align-self: flex-end;
`;

export default function Home() {
  const [textInputs, setTextInputs] = useState(Array(10).fill(""));
  const [comicPanels, setComicPanels] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const notify = (butter) => toast(butter);
  useEffect(() => {}, [comicPanels]);

  async function query(data) {
    try {
      const response = await fetch(
        "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
        {
          headers: {
            Accept: "image/png",
            Authorization:
              "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      const result = await response.blob();
      return result;
      // setImage(URL.createObjectURL(result));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  const handleInputChange = (index, value) => {
    // const newInputs = [...textInputs];
    // newInputs[index] = value;
    setTextInputs((previousInputs) => {
      const updatedInputs = [...previousInputs];
      updatedInputs[index] = value;
      return updatedInputs;
    });
  };

  const generateComic = async () => {
    // Assuming you have a function called sendToTextToImageAPI to handle the API call
    // const generatedPanels = await sendToTextToImageAPI(textInputs);
    console.log("textInputs", textInputs);
    // Placeholder for testing, replace with actual API call
    try {
      // const generatedPanels = Array(10).fill("placeholder"); // Placeholder URLs

      // setError(null);

      // const nonEmptyInputs = textInputs.filter((input) => input.trim() !== "");

      const areAllInputsFilled = textInputs.every(
        (input) => input.trim() !== ""
      );

      if (!areAllInputsFilled) {
        notify("Please fill in all input boxes before generating the comic.");
        // setError("Please fill in all input boxes before generating the comic.");
        return;
      }

      const generatedPanels = Array(10).fill("https://via.placeholder.com/300");
      setComicPanels(generatedPanels);
      setLoading(true);

      for (let i = 0; i < textInputs.length; i++) {
        const inputText = textInputs[i];
        console.log("currently gettng", inputText);
        // Adjust the API call to use the user-provided text

        try {
          const response = await query({ inputs: inputText });
          console.log(`response for ${inputText}`, response);
          // Assuming the response from the API is an image
          const imageUrl = URL.createObjectURL(response);

          // Replace the placeholder with the actual image URL
          generatedPanels[i] = imageUrl;
          setComicPanels((prevPanels) => {
            const updatedPanels = [...prevPanels];
            updatedPanels[i] = imageUrl;
            return updatedPanels;
          });
        } catch (error) {
          console.error("Error generating comic:", error);
          notify(`Error generating comic panel ${i}`);
          // setError(`Error generating comic panel ${1}`);
          // Handle the error (e.g., display an error message to the user)
        }
        // setComicPanels(generatedPanels);
        // console.log("generatedPanels", generatedPanels);
      }

      // setComicPanels(generatedPanels);
    } catch (error) {
      console.error("Error generating comic:", error);
      // setError("Error generating comic");
      notify("Error generating comic");
      // Handle the error (e.g., display an error message to the user)
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <ComicForm>
        {textInputs.map((input, index) => (
          <input
            key={index}
            type="text"
            value={input}
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder={`Panel ${index + 1}`}
          />
        ))}
        {loading ? (
          <StyledButton type="button" disabled>
            Generating...
          </StyledButton>
        ) : (
          <StyledButton type="button" onClick={generateComic}>
            Generate Comic
          </StyledButton>
        )}
      </ComicForm>
      {/* {error && notify(error)} */}
      <Toaster />

      {comicPanels.length > 0 && (
        <ComicPanel>
          {comicPanels.map((panel, index) => (
            <ComicPanelItem key={index}>
              <img src={panel} alt={`Panel ${index + 1}`} />
            </ComicPanelItem>
          ))}
        </ComicPanel>
      )}
    </Container>
  );
}
