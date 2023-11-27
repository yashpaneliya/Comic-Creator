import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

// Styled components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ComicForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ComicPanel = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const StyledInput = styled.input`
  ${({ theme }) => theme.mixins.textarea};
`;

const ComicPanelItem = styled.div`
  position: relative;
  flex: 1 0 calc(33.333% - 10px);
  box-sizing: border-box;
  background: url('data:image/svg+xml;utf8,<svg width="100" height="100" transform="rotate(0)" opacity="0.2" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g  fill="%23250E17"><circle cx="25" cy="25" r="12.5"/><circle cx="75" cy="75" r="12.5"/><circle cx="75" cy="25" r="12.5"/><circle cx="25" cy="75" r="12.5"/></g></svg>'),
    ${({ theme }) => theme.card};
  background-size: 10px;
  border: solid ${({ theme }) => theme.border};
  border-color: ${({ theme }) => theme.border};
  padding: 20px;
  border-width: 3px 4px 3px 5px;
  border-radius: 95% 4% 92% 5%/4% 95% 6% 95%;
  transform: rotate(2deg);

  @media (max-width: 600px) {
    flex: 1 0 calc(50% - 10px);
  }

  img {
    width: 100%;
    height: auto;
    border-width: 3px 4px 3px 5px;
    border-radius: 95% 4% 92% 5%/4% 95% 6% 95%;
    transform: rotate(2deg);
  }
`;

const StyledCaption = styled.div`
  position: absolute;
  transform: rotate(-2deg);
  font-size: 1.2rem;
  padding: 0rem;
  font-weight: bold;
  border-style: solid;
  border-width: 3px 4px 3px 5px;
  border-radius: 95% 4% 92% 5%/4% 95% 6% 95%;
  background: url('data:image/svg+xml;utf8,<svg width="100" height="100" transform="rotate(0)" opacity="0.2" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g  fill="%23250E17"><circle cx="25" cy="25" r="12.5"/><circle cx="75" cy="75" r="12.5"/><circle cx="75" cy="25" r="12.5"/><circle cx="25" cy="75" r="12.5"/></g></svg>'),
    ${({ theme }) => theme.card};
  padding: 0 0.5rem;
  background-size: 10px;
  display: inline-block;
  z-index: 1000;
`;

const StyledEmptyPanel = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  ${({ theme }) => theme.mixins.button};
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  display: none;

  &:checked + ${Switch} {
    background: green;

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;

const FloatButton = styled.div`
  position: fixed;
  right: 25px;
  left: auto;
  bottom: 25px;
  margin: 0;
  padding: 1em;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5em;
  /* width: 2em; */
  padding: 2em;
  border-width: 3px 4px 3px 5px;
  border-radius: 95% 4% 92% 5%/4% 95% 6% 95%;
  border-color: ${({ theme }) => theme.border};
  border-style: solid;
  transform: rotate(2deg);
  background: url('data:image/svg+xml;utf8,<svg width="100" height="100" transform="rotate(0)" opacity="0.2" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g  fill="%23250E17"><circle cx="25" cy="25" r="12.5"/><circle cx="75" cy="75" r="12.5"/><circle cx="75" cy="25" r="12.5"/><circle cx="25" cy="75" r="12.5"/></g></svg>'),
    #32cd32;
  background-size: 10px;
  border-radius: 50%;
  cursor: pointer;
`;

export default function Home() {
  const [textInputs, setTextInputs] = useState(Array(10).fill(""));
  const [previousTextInputs, setPreviousTextInputs] = useState(
    Array(10).fill("")
  );
  const [BallonText, setBallonText] = useState(Array(10).fill(""));
  const [comicPanels, setComicPanels] = useState(Array(10).fill(null));
  const [loading, setLoading] = useState(false);
  const [showInputs, setShowInputs] = useState(true);

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
    } catch (error) {
      console.error("Error fetching data:", error);
      notify("Error fetching data");
    }
  }
  const handleInputChange = (index, value) => {
    setTextInputs((previousInputs) => {
      const updatedInputs = [...previousInputs];
      updatedInputs[index] = value;
      return updatedInputs;
    });
  };

  const handleBallonTextChange = (index, value) => {
    setBallonText((previousBallons) => {
      const updatedBallons = [...previousBallons];
      updatedBallons[index] = value;
      return updatedBallons;
    });
  };

  const generateComic = async () => {
    console.log("textInputs", textInputs);
    try {
      setLoading(true);

      for (let i = 0; i < textInputs.length; i++) {
        const inputText = textInputs[i];
        const previousInputTextForThisIndex = previousTextInputs[i];
        console.log(
          "previousInputTextForThisIndex",
          previousInputTextForThisIndex
        );
        const previousPanelImageForThisIndex = comicPanels[i];
        console.log("currently gettng", inputText);
        if (
          inputText.trim() === "" &&
          previousPanelImageForThisIndex !== null
        ) {
          setComicPanels((prevPanels) => {
            const updatedPanels = [...prevPanels];
            updatedPanels[i] = null;
            return updatedPanels;
          });

          setBallonText((prevBallons) => {
            const updatedBallons = [...prevBallons];
            updatedBallons[i] = "";
            return updatedBallons;
          });

          setTextInputs((prevInputs) => {
            const updatedInputs = [...prevInputs];
            updatedInputs[i] = "";
            return updatedInputs;
          });
          continue;
        }

        // // if empty string, and previous panel is null, skip
        // if (
        //   inputText.trim() === "" &&
        //   previousPanelImageForThisIndex === null
        // ) {
        //   continue;
        // }

        // // if not empty string, and previous panel is null, skip
        // if (
        //   inputText.trim() === null &&
        //   previousPanelImageForThisIndex !== null
        // ) {
        //   // if not empty string, and previous panel is not null, skip
        //   continue;
        // }

        if (
          (inputText.trim() !== "" &&
            previousPanelImageForThisIndex === null) ||
          (inputText.trim() !== previousInputTextForThisIndex.trim() &&
            previousPanelImageForThisIndex !== null)
        ) {
          try {
            const response = await query({ inputs: inputText });
            console.log(`response for ${inputText}`, response);
            const imageUrl = URL.createObjectURL(response);

            setComicPanels((prevPanels) => {
              const updatedPanels = [...prevPanels];
              updatedPanels[i] = imageUrl;
              return updatedPanels;
            });
          } catch (error) {
            console.error("Error generating comic:", error);
            notify(`Error generating comic panel ${i}`);
          }
        }
      }
    } catch (error) {
      console.error("Error generating comic:", error);
      notify("Error generating comic");
    } finally {
      setPreviousTextInputs(textInputs);
      setLoading(false);
    }
  };

  return (
    <Container>
      <Toaster />
      <ComicForm>
        <ComicPanel>
          {comicPanels.map((panel, index) => (
            <ComicPanelItem key={index}>
              {panel ? (
                <div>
                  {BallonText[index].trim() !== "" && (
                    <StyledCaption>
                      <p>{BallonText[index]}</p>
                    </StyledCaption>
                  )}
                  <Image
                    src={panel}
                    alt={`Panel ${index + 1}`}
                    width={300}
                    height={300}
                  />
                </div>
              ) : (
                <div>
                  {BallonText[index].trim() !== "" && (
                    <StyledCaption>
                      <p>{BallonText[index]}</p>
                    </StyledCaption>
                  )}
                  <StyledEmptyPanel>Generate Image</StyledEmptyPanel>
                </div>
              )}
              {/* <img src={panel} alt={`Panel ${index + 1}`} /> */}
              {showInputs && (
                <div>
                  <StyledInput
                    key={index}
                    type="text"
                    value={textInputs[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    placeholder={`Generative Image Text`}
                  />

                  <StyledInput
                    key={index}
                    type="text"
                    value={BallonText[index]}
                    onChange={(e) =>
                      handleBallonTextChange(index, e.target.value)
                    }
                    placeholder={`Balloon Text`}
                  />
                </div>
              )}
            </ComicPanelItem>
          ))}
        </ComicPanel>
      </ComicForm>
      <FloatButton>
        <Label>
          <span>Show Inputs:</span>
          <Input
            type="checkbox"
            checked={showInputs}
            onClick={() => {
              setShowInputs(!showInputs);
            }}
          />
          <Switch />
        </Label>
        {loading ? (
          <StyledButton type="button" disabled>
            Generating...
          </StyledButton>
        ) : (
          <StyledButton type="button" onClick={generateComic}>
            Generate Comic
          </StyledButton>
        )}
      </FloatButton>
    </Container>
  );
}
