import React from "react";
import { motion } from "framer-motion"
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

import { Flex, Heading, P, Span } from "@/components/basic";
import { Button, Icon, Input } from "@/components/custom";
import { GV } from "@/utils/style.util";

import BlogImg1 from "@/assets/img/main-blog.png";
import BlogImg2 from "@/assets/img/blog.png";
import Avatar from "@/assets/img/avatar2.png";
import Image from "@/components/basic/img";

const Blog = () => {
  const [email, setEmail] = React.useState('');

  return (
    <BlogContainer>
      <Rect />
      <Flex
        $style={{
          hAlign: "center",
        }}
      >
        <BlogWrapper>
          <Flex
            as={motion.div}
            initial={{ translateX: "-100%" }}
            whileInView={{ translateX: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            $style={{
              w: "548px"
            }}
          >
            <MainBlog>
              {/* <Image src="" /> */}
              <Image src={BlogImg1} alt="" />
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
              <Heading level={1} $style={{ weight: '900' }}>
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
              as={motion.div}
              initial={{ translateX: "100%" }}
              whileInView={{ translateX: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              $style={{
                fDirection: "row",
                gap: "2.88rem",
              }}
            >
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
      <Reveal>
        <Avatar1
          initial={{ translateY: "-300px" }}
          whileInView={{ translateY: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "-150px" }}
        />
        <Avatar2
          initial={{ translateX: "150px" }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "-150px" }}
        />
        <Avatar3
          initial={{ translateX: "-150px" }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "-150px" }}
        />
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
            <NewsImage1 src={Avatar} />
            <NewsImage2 src={Avatar} />
            <NewsImage3 src={Avatar} />
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
              value={email}
              placeholder="Enter email address"
              padding="8px 24px"
              radius="999px"
              bg="#53BBB5"
              border="#000"
              onChange={(e: any) => setEmail(e.target.value)}
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
