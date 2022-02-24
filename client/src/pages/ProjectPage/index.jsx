import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import {
  Content,
  ProjectTitle,
  PreviewProject,
  Picture,
  ProjectPresentation,
  Separator,
  DescriptionProject,
  DescriptionTex,
  InfoProject,
  ImportantText,
  Icontext,
  ButtonRedirect,
  LinkProject,
} from "./styled.js";
import { gsap } from "gsap";
import LoadingPage from "./LoadingPage";
import { useSelector, useDispatch } from "react-redux";
import { get_client_current_project } from "../../redux/actions/projectAction";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import gfm from "remark-gfm";
import remarkHtml from "remark-html";
import rehypeMathjax from "rehype-mathjax";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import rehypeStringify from "rehype-stringify";

const ProjectPage = () => {
  const { slug } = useParams();
  library.add(fab, fas, far);

  const [ready, setReady] = useState(false);
  const dispatch = useDispatch();

  const pic = useRef();
  const projectState = useSelector((state) => state.ClientProjectReducer);
  const { isLoading, current } = projectState;

  const slide_animation = (nodeElement, delay, duration) => {
    return gsap.fromTo(
      nodeElement,
      { opacity: 0, y: 50, duration: duration },
      { opacity: 1, y: 0, duration: duration, delay: delay }
    );
  };

  const fade_animation = (nodeElement, delay, duration) => {
    return gsap.fromTo(
      nodeElement,
      { opacity: 0, duration: duration },
      { opacity: 1, duration: duration, delay: delay }
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(get_client_current_project(slug));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 2000);
    const animation3 = fade_animation(".separator", 0.3, 1);
    const animation1 = slide_animation(pic.current, null, 1);
    const animation2 = slide_animation(".textAnimation", 1, 1.2);
    const animation4 = gsap.fromTo(
      ".title",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, delay: null, duration: 1 }
    );

    return () => {
      clearTimeout(timer);
      animation1.kill();
      animation2.kill();
      animation3.kill();
      animation4.kill();
    };
  }, [ready]);

  const { title, preview, description, category, postedAt, github, link } =
    current;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {!ready ? (
        <LoadingPage />
      ) : (
        <Content>
          <ProjectTitle className="title">{title}</ProjectTitle>
          <PreviewProject ref={pic}>
            <Picture src={preview} alt={`${title}-picture`} />
          </PreviewProject>
          <ProjectPresentation>
            <DescriptionProject>
              <Separator className="separator" />
              <DescriptionTex className="textAnimation">
                <ReactMarkdown
                  remarkPlugins={[gfm, remarkHtml, remarkMath, remarkParse]}
                  rehypePlugins={[
                    rehypeHighlight,
                    rehypeMathjax,
                    rehypeStringify,
                  ]}
                >
                  {description}
                </ReactMarkdown>
              </DescriptionTex>
            </DescriptionProject>

            <DescriptionProject>
              <Separator className="separator" />
              <InfoProject className="textAnimation">
                <Icontext>
                  <FontAwesomeIcon icon={["far", "calendar-alt"]} />
                </Icontext>
                Réaliser le : <ImportantText>12 nov 2020</ImportantText>
              </InfoProject>
              <InfoProject className="textAnimation">
                <Icontext>
                  <FontAwesomeIcon icon={["fas", "tag"]} />
                </Icontext>
                Categorie : <ImportantText>{category}</ImportantText>
              </InfoProject>
              <Separator className="separator" />
              <LinkProject className="textAnimation">
                <ButtonRedirect
                  href={github}
                  alt="GitHub-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icontext>
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </Icontext>
                  Github
                </ButtonRedirect>
                <ButtonRedirect
                  href={link}
                  alt="Project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icontext>
                    <FontAwesomeIcon icon={["fas", "link"]} />
                  </Icontext>
                  Lien du projet
                </ButtonRedirect>
              </LinkProject>
            </DescriptionProject>
          </ProjectPresentation>
        </Content>
      )}
    </>
  );
};

export default ProjectPage;
