import { css } from "styled-components";

const button = css`
  color: ${({ theme }) => theme.color};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: var(--border-radius);
  font-size: var(--fz-xs);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  padding: 1.25rem 1.75rem;

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.shade};
    outline: none;
    color: ${({ theme }) => theme.contrast};
  }
  &:after {
    display: none !important;
  }

  @media (max-width: 600px) {
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    line-height: 1;
  }
`;

const card = css`
  position: relative;
  /* height: 30%; */
  padding: 2rem;
  /* width: 30%; */
  /* max-width: 400px; */
  border: 2px solid ${({ theme }) => theme.border};
  transition: all 0.3s ease;
  cursor: pointer;
  top: 0;
  right: 0;

  &:hover {
    box-shadow: 10px 10px 0 ${({ theme }) => theme.color};
    top: -10px;
    right: 10px;
  }
`;

const mixins = {
  button,

  flexStart: css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `,

  flexCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,

  flexColumn: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  flexColumnSpacebetween: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
  `,

  flexColumnStart: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `,

  flexBetween: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,

  flexAround: css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  `,

  flexEven: css`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  `,

  flexBeside: css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,

  iconWithText: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    svg {
      width: 1.1rem;
      height: 1.1rem;
    }
  `,
  padding: css`
    width: 90%;
    max-width: 1240px;
    margin: 115px auto 50px auto;
    /* flex-grow: 1; */
    flex: 1 0 auto;

    @media (min-width: 600px) {
      width: 90%;
    }

    @media (min-width: 1000px) {
      width: 80%;
    }
  `,

  titleDiv: css`
    font-weight: 500;
    font-size: var(--fz-heading);
    margin: 50px 0 30px 0;

    @media (min-width: 600px) {
      margin: 30px 0 20px 0;
    }
  `,

  pageTitle: css`
    font-weight: 500;
    font-size: var(--fz-headingxl);
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    color: ${({ theme }) => theme.color};
    &:hover,
    &:focus,
    &:active {
      color: ${({ theme }) => theme.color};
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: ${({ theme }) => theme.color} !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${({ theme }) => theme.color};
      transition: var(--transition);
      opacity: 0.5;
    }
  `,

  textarea: css`
    width: 100%;
    /* resize: none; */
    background: url('data:image/svg+xml;utf8,<svg width="100" height="100" transform="rotate(0)" opacity="0.2" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g  fill="%23250E17"><circle cx="25" cy="25" r="12.5"/><circle cx="75" cy="75" r="12.5"/><circle cx="75" cy="25" r="12.5"/><circle cx="25" cy="75" r="12.5"/></g></svg>'),
      #32cd32;
    background-size: 10px;
    border: 2px solid ${({ theme }) => theme.border};
    font-size: var(--fz-lg);
    padding: 10px;
    margin-bottom: 0.5em;
    border-width: 3px 4px 3px 5px;
    border-radius: 95% 4% 92% 5%/4% 95% 6% 95%;
    /* padding: 15px 20px; */
    /* margin: 0px 0 15px 0; */
    font-family: "Open Sans", -apple-system, system-ui, sans-serif;
    color: ${({ theme }) => theme.text};

    :disabled {
      background-color: ${({ theme }) => theme.shadeBackcard};
    }
  `,
};

export default mixins;
