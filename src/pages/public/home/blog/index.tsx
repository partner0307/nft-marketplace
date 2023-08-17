import React from "react";
import {
  Avatar1,
  Avatar2,
  Avatar3,
  BlogContainer,
  BlogImage,
  BlogWrapper,
  ContentColor,
  Line,
  MainBlog,
  NewsImage1,
  NewsImage2,
  NewsImage3,
  Newsletter,
  Rect,
  Reveal,
  SmallBlog,
} from "./style";

import { Flex, Heading, P, Span } from "../../../../components/basic";
import { Button, Icon, Input } from "../../../../components/custom";
import { GV } from "../../../../utils/style.util";

import Image from "../../../../assets/img/main-blog.png";
import Image1 from "../../../../assets/img/blog.png";
import Image2 from "../../../../assets/img/avatar2.png";

const Blog = () => {
  return (
    <BlogContainer>
      <Flex
        $style={{
          hAlign: "center",
        }}
      >
        <BlogWrapper>
          <MainBlog>
            <BlogImage src={Image} />
            <Flex
              $style={{
                fDirection: "column",
                vAlign: "flex-start",
                gap: "24px",
              }}
            >
              <P $style={{ size: "32px", weight: "900" }}>
                Morem ipsum dolor sit amet, consectetur adipiscing elit.
              </P>
              <P $style={{ size: "20px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem lit sed risus. amet
                lacinia. Aliquam in elementum tellus...
              </P>
              <Flex
                $style={{ fDirection: "row", hAlign: "center", gap: "30px" }}
              >
                <Span $style={{ size: "10px" }}>2mins Read</Span>
                <Flex
                  $style={{ fDirection: "row", hAlign: "center", gap: "8px" }}
                >
                  <Icon icon="HeartBrown" />
                  <Span $style={{ size: "10px" }}>28</Span>
                </Flex>
                <Flex
                  $style={{
                    fDirection: "row",
                    hAlign: "center",
                    gap: "8px",
                  }}
                >
                  <Icon icon="Share" />
                  <Span $style={{ size: "10px" }}>72</Span>
                </Flex>
                <Icon icon="Bookmark" />
              </Flex>
            </Flex>
          </MainBlog>
          <Flex
            $style={{
              fDirection: "column",
              vAlign: "flex-start",
              gap: "24px",
            }}
          >
            <Flex
              $style={{
                fDirection: "column",
                vAlign: "flex-start",
                gap: "24px",
              }}
            >
              <Heading level={3} $style={{ weight: '900' }}>
                <ContentColor>News</ContentColor>
              </Heading>
              <P
                $style={{
                  size: "20px",
                }}
              >
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fring.
              </P>
              <Button
                $style={{
                  bg: GV("gradient"),
                  radius: "8px",
                  p: "6px 64px",
                }}
              >
                See All Post
              </Button>
            </Flex>
            <Flex
              $style={{
                fDirection: "row",
                gap: "48px",
              }}
            >
              <SmallBlog>
                <BlogImage src={Image1} />
                <Flex
                  $style={{
                    fDirection: "column",
                    vAlign: "flex-start",
                    gap: "24px",
                  }}
                >
                  <P
                    $style={{
                      size: "32px",
                      weight: "900",
                    }}
                  >
                    Morem ipsum dolor sit amet, ing elit.
                  </P>
                  <P
                    $style={{
                      size: "20px",
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
                    <Span $style={{ size: "10px" }}>2mins Read</Span>
                    <Flex
                      $style={{
                        fDirection: "row",
                        hAlign: "center",
                        gap: "8px",
                      }}
                    >
                      <Icon icon="HeartBrown" />
                      <Span $style={{ size: "10px" }}>28</Span>
                    </Flex>
                    <Flex
                      $style={{
                        fDirection: "row",
                        hAlign: "center",
                        gap: "8px",
                      }}
                    >
                      <Icon icon="Share" />
                      <Span $style={{ size: "10px" }}>72</Span>
                    </Flex>
                    <Icon icon="Bookmark" />
                  </Flex>
                </Flex>
              </SmallBlog>
              <SmallBlog>
                <BlogImage src={Image1} />
                <Flex
                  $style={{
                    fDirection: "column",
                    vAlign: "flex-start",
                    gap: "24px",
                  }}
                >
                  <P
                    $style={{
                      size: "32px",
                      weight: "900",
                    }}
                  >
                    Morem ipsum dolor sit amet, ing elit.
                  </P>
                  <P
                    $style={{
                      size: "20px",
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
                    <Span $style={{ size: "10px" }}>2mins Read</Span>
                    <Flex
                      $style={{
                        fDirection: "row",
                        hAlign: "center",
                        gap: "8px",
                      }}
                    >
                      <Icon icon="HeartBrown" />
                      <Span $style={{ size: "10px" }}>28</Span>
                    </Flex>
                    <Flex
                      $style={{
                        fDirection: "row",
                        hAlign: "center",
                        gap: "8px",
                      }}
                    >
                      <Icon icon="Share" />
                      <Span $style={{ size: "10px" }}>72</Span>
                    </Flex>
                    <Icon icon="Bookmark" />
                  </Flex>
                </Flex>
              </SmallBlog>
            </Flex>
          </Flex>
        </BlogWrapper>
      </Flex>
      <Rect />
      <Reveal>
        <Avatar1 src={Image2} />
        <Avatar2 src={Image2} />
        <Avatar3 src={Image2} />
        <Line>
          <Icon icon="Line" />
        </Line>
      </Reveal>
      <Flex
        $style={{
          hAlign: "center",
        }}
      >
        <Newsletter>
          <Flex
            $style={{
              fDirection: "row",
              vAlign: "center",
            }}
          >
            <NewsImage1 src={Image2} />
            <NewsImage2 src={Image2} />
            <NewsImage3 src={Image2} />
          </Flex>
          <Flex
            $style={{
              maxW: "550px",
              fDirection: "column",
              gap: "24px",
            }}
          >
            <Heading
              level={3}
              $style={{
                color: "black",
              }}
            >
              Be Up To Date
            </Heading>
            <P
              $style={{
                size: "20px",
                color: "black",
              }}
            >
              Subscribe to our news letter and never miss our latest news and
              promotions. Our news letter is sent once a week, every Teusday
            </P>
            <Input
              value=""
              placeholder="Enter email address"
              padding="8px 24px"
              radius="999px"
              bg="#53BBB5"
              border="#000"
              helpSide={
                <Button
                  $style={{
                    bg: GV("black"),
                    color: "bg",
                    radius: "999px",
                    p: "8px 24px",
                  }}
                >
                  <P
                    $style={{
                      size: "20px",
                    }}
                  >
                    Subscribe
                  </P>
                </Button>
              }
            />
          </Flex>
        </Newsletter>
      </Flex>
    </BlogContainer>
  );
};

export default Blog;
