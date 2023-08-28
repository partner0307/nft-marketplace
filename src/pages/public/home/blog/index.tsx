import React from "react";
import { motion } from "framer-motion"
import {
  Avatar1,
  Avatar2,
  Avatar3,
  BlogContainer,
  BlogWrapper,
  Line,
  MainBlog,
  Rect,
  Reveal,
  SmallBlog,
} from "./style";

import { Flex, P, Span } from "@/components/basic";
import { Icon } from "@/components/custom";

import BlogImg1 from "@/assets/img/main-blog.png";
import BlogImg2 from "@/assets/img/blog.png";
import Image from "@/components/basic/img";
import NewsLetter from "@/components/custom/newsletter";

const Blog = () => {
  return (
    <BlogContainer>
      <Rect />
      <Flex
        $style={{
          hAlign: "center",
        }}
      >
        <BlogWrapper>
          <motion.div
            initial={{ translateX: "-100%", opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            viewport={{ once: true }}
          >
            <Flex
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
          </motion.div>
          <Flex
            $style={{
              flex: "1",
              fDirection: "column",
              vAlign: "flex-start",
              gap: "64px",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
            ></motion.div>
            <Flex
              as={motion.div}
              initial={{ translateX: "100%", opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
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
          transition={{ duration: 0.3, delay: 2 }}
          viewport={{ once: true, margin: "-150px" }}
        />
        <Avatar2
          initial={{ translateX: "150px" }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 0.3, delay: 2.2 }}
          viewport={{ once: true, margin: "-150px" }}
        />
        <Avatar3
          initial={{ translateX: "-150px" }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 0.3, delay: 2.5 }}
          viewport={{ once: true, margin: "-150px" }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <Line>
            <Icon icon="Line" />
          </Line>
        </motion.div>
      </Reveal>
      <NewsLetter />
    </BlogContainer>
  );
};

export default Blog;
