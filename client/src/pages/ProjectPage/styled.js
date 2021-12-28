import styled from "styled-components";

export const Content = styled.div `
  width: 100%;
  min-height: 100vh;
  color: var(--color-text);
  padding: 6rem 3rem 2rem 8rem;
  @media (max-width: 998px) {
    padding: 6rem 1rem;
  }
  @media (max-width: 768px) {
    padding: 6rem 1rem;
  }
`;

export const ProjectTitle = styled.h2 `
  opacity: 0;
  color: var(--color-text);
  margin-top: 1rem;
  font-size: 1.8rem;
`;

export const PreviewProject = styled.div `
opacity:0;
height: 400px;
width:fit-content;
margin: 2rem 0 ;
border-radius: 15px;
overflow: hidden;
box-shadow: 1px 1px 26px -5px var(--color-text);
@media (max-width: 768px) {

height:220px;

}
@media (max-width: 550px) {
 margin-left: auto;
 margin-right: auto;
 height:160px;
}
}


`;
export const Picture = styled.img `
  height: 100%;
  object-fit: contain;
`;

export const ProjectPresentation = styled.div `
  margin: 2rem 0;
  width: 100%;
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  grid-gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const DescriptionProject = styled.div ``;

export const DescriptionTex = styled.p `
  margin-left: 1rem;
`;

export const Separator = styled.hr `
  opacity: 0;
  height: 1.5px;
  background: var(--color-text);
  border: none;
  border-radius: 15px;
  margin: 1.5rem 0;
  width: 100%;
`;

export const InfoProject = styled.p `margin 1.5rem 0 1.5rem 1rem;`;

export const ImportantText = styled.span `
  font-weight: bold;
`;

export const Icontext = styled.span `
  margin-right: 0.5rem;
`;
export const LinkProject = styled.div `
  display: flex;
  padding-top: 0.5rem;
  flex-wrap: wrap;
`;
export const ButtonRedirect = styled.a `
  display: inline-block;
  color: var(--color-text);
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border: 2px solid var(--color-text);
  border-radius: 5px;
  margin-bottom: 1rem;
  :hover {
    background-color: var(--color-text);
    color: var(--color-bg);
  }
  :first-of-type {
    margin-right: 1rem;
  }
`;