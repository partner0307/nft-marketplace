import React from "react";
import {
  Avatar1,
  Avatar2,
  Avatar3,
  BlogContainer,
  BlogWrapper,
  ContentColor,
  Line,
  MainBlog,
  Rect,
  Reveal,
  SmallBlog,
} from "./style";

import { Flex, Heading, P, Span } from "@/components/basic";
import { Button, Icon } from "@/components/custom";
import Anime, { anime } from 'react-anime';
import { useInView } from 'react-intersection-observer';

import BlogImg1 from "@/assets/img/main-blog.png";
import BlogImg2 from "@/assets/img/blog.png";
import Image from "@/components/basic/img";
import NewsLetter from "@/components/custom/newsletter";
import { GV } from "@/utils/style.util";

const Blog = () => {
  const {ref, inView} = useInView({ threshold: 0.4, triggerOnce: true });

  return (
    <BlogContainer ref={ref}>
      <Flex
        $style={{
          hAlign: "center",
        }}
      >
        {inView && (
          <BlogWrapper>
            <Flex
              $style={{
                w: "548px"
              }}
            >
              <Anime
                easing="easeInOutQuad"
                duration={1000}
                delay={500}
                translateX={['-10rem', '0rem']}
                opacity={[0, 1]}
              >
                <MainBlog>
                  <Image src={BlogImg1} alt="" />
                  <Flex
                    $style={{
                      fDirection: "column",
                      vAlign: "flex-start",
                      gap: "24px",
                    }}
                  >
                    <P $style={{ size: GV('font-size-2'), weight: GV('weight-xxl') }}>
                      Morem ipsum dolor sit amet, consectetur adipiscing elit.
                    </P>
                    <P $style={{ size: GV('font-size-3') }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                      eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                      metus nec fringilla accumsan, risus sem lit sed risus. amet
                      lacinia. Aliquam in elementum tellus...
                    </P>
                    <Flex
                      $style={{ fDirection: "row", hAlign: "center", gap: "30px" }}
                    >
                      <Span $style={{ size: GV('font-size-7') }}>2mins Read</Span>
                      <Flex
                        $style={{ fDirection: "row", hAlign: "center", gap: "8px" }}
                      >
                        <Icon icon="HeartBrown" />
                        <Span $style={{ size: GV('font-size-7') }}>28</Span>
                      </Flex>
                      <Flex
                        $style={{
                          fDirection: "row",
                          hAlign: "center",
                          gap: "8px",
                        }}
                      >
                        <Icon icon="Share" />
                        <Span $style={{ size: GV('font-size-7') }}>72</Span>
                      </Flex>
                      <Icon icon="Bookmark" />
                    </Flex>
                  </Flex>
                </MainBlog>
              </Anime>
            </Flex>
            <Flex
              $style={{
                flex: "1",
                fDirection: "column",
                vAlign: "flex-start",
                gap: "64px",
              }}
            >
              <Flex
                $style={{
                  fDirection: "column",
                  vAlign: "flex-start",
                  gap: "24px",
                }}
              >
                <Anime
                  easing="easeInOutQuad"
                  duration={1000}
                  delay={anime.stagger(500, { start: 1000 })}
                  translateY={['-5rem', '0rem']}
                  opacity={[0, 1]}
                >
                  <Heading level={1} $style={{ weight: '900' }}>
                    <ContentColor>News</ContentColor>
                  </Heading>
                  <P
                    $style={{
                      size: GV('font-size-3'),
                    }}
                  >
                    Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                    eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                    metus nec fring.
                  </P>
                </Anime>
                <Anime
                  easing="easeInOutQuad"
                  duration={1000}
                  delay={1500}
                  opacity={[0, 1]}
                >
                  <Button
                    $style={{
                      bg: GV("gradient"),
                      radius: "8px",
                      p: "6px 64px",
                    }}
                  >
                    See All Post
                  </Button>
                </Anime>
              </Flex>
              <Flex
                $style={{
                  fDirection: "row",
                  gap: "2.5rem",
                }}
              >
                <Anime
                  easing="easeOutSine"
                  duration={1500}
                  delay={anime.stagger(500, { start: 2000 })}
                  translateX={['10rem', '0rem']}
                  opacity={[0, 1]}
                >
                  <SmallBlog>
                    <Image src={BlogImg2} alt="" />
                    <Flex
                      $style={{
                        fDirection: "column",
                        vAlign: "flex-start",
                        gap: "24px",
                      }}
                    >
                      <P
                        $style={{
                          size: GV('font-size-2'),
                          weight: GV('weight-xxl'),
                        }}
                      >
                        Morem ipsum dolor sit amet, ing elit.
                      </P>
                      <P
                        $style={{
                          size: GV('font-size-3'),
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, entum tellus...
                      </P>
                      <Flex
                        $style={{
                          fDirection: "row",
                          hAlign: "center",
                          gap: "30px",
                        }}
                      >
                        <Span $style={{ size: GV('font-size-7') }}>2mins Read</Span>
                        <Flex
                          $style={{
                            fDirection: "row",
                            hAlign: "center",
                            gap: "8px",
                          }}
                        >
                          <Icon icon="HeartBrown" />
                          <Span $style={{ size: GV('font-size-7') }}>28</Span>
                        </Flex>
                        <Flex
                          $style={{
                            fDirection: "row",
                            hAlign: "center",
                            gap: "8px",
                          }}
                        >
                          <Icon icon="Share" />
                          <Span $style={{ size: GV('font-size-7') }}>72</Span>
                        </Flex>
                        <Icon icon="Bookmark" />
                      </Flex>
                    </Flex>
                  </SmallBlog>
                  <SmallBlog>
                    {/* <BlogImage src={BlogImg2} /> */}
                    <Image src={BlogImg2} alt="" />
                    <Flex
                      $style={{
                        fDirection: "column",
                        vAlign: "flex-start",
                        gap: "24px",
                      }}
                    >
                      <P
                        $style={{
                          size: GV('font-size-2'),
                          weight: GV('weight-xxl'),
                        }}
                      >
                        Morem ipsum dolor sit amet, ing elit.
                      </P>
                      <P
                        $style={{
                          size: GV('font-size-3'),
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, entum tellus...
                      </P>
                      <Flex
                        $style={{
                          fDirection: "row",
                          hAlign: "center",
                          gap: "30px",
                        }}
                      >
                        <Span $style={{ size: GV('font-size-7') }}>2mins Read</Span>
                        <Flex
                          $style={{
                            fDirection: "row",
                            hAlign: "center",
                            gap: "8px",
                          }}
                        >
                          <Icon icon="HeartBrown" />
                          <Span $style={{ size: GV('font-size-7') }}>28</Span>
                        </Flex>
                        <Flex
                          $style={{
                            fDirection: "row",
                            hAlign: "center",
                            gap: "8px",
                          }}
                        >
                          <Icon icon="Share" />
                          <Span $style={{ size: GV('font-size-7') }}>72</Span>
                        </Flex>
                        <Icon icon="Bookmark" />
                      </Flex>
                    </Flex>
                  </SmallBlog>
                </Anime>
              </Flex>
            </Flex>
          </BlogWrapper>
        )}
      </Flex>
      {inView && (
        <Reveal>
          <Anime
            easing="easeOutQuad"
            duration={1000}
            delay={3000}
            opacity={[0, 1]}
          >
            <Line>
              <Icon icon="Line" width="192px" height="523px" />
            </Line>
          </Anime>
          <Anime
            easing="linear"
            duration={1000}
            delay={3000}
            translateY={['-10rem', '0rem']}
            opacity={[0.5, 1]}
          >
            <Avatar1 />
          </Anime>
          <Anime
            easing="linear"
            duration={1000}
            delay={3500}
            translateX={['10rem', '0rem']}
          >
            <Avatar2 />
          </Anime>
          <Anime
            easing="linear"
            duration={1000}
            delay={3000}
            opacity={[0, 1]}
          >
            <Avatar3 />
          </Anime>
        </Reveal>
      )}
      <NewsLetter />
      <Rect />
    </BlogContainer>
  );
};

export default Blog;
