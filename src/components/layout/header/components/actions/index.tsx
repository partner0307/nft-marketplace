import React from "react";
import { Flex, Link, P } from "../../../../basic";
import { Button, Icon } from "../../../../custom";
import { GV } from "../../../../../utils/style.util";
import { ActionContainer, Content } from "./style";

const Actions = () => {
  return (
    <ActionContainer>
      <Flex
        $style={{
          p: "0 12px",
          h: "40px",
          vAlign: "center",
        }}
      >
        <Link
          to="/"
          $style={{
            color: "purple",
            decorator: "underline",
            offset: "0.5rem",
          }}
        >
          <Content>Buy Metaverse</Content>
        </Link>
      </Flex>
      <Flex
        $style={{
          p: "0 12px",
          h: "40px",
          vAlign: "center",
        }}
      >
        <Link
          to="/"
          $style={{
            color: "purple",
            decorator: "underline",
            offset: "0.5rem",
          }}
        >
          <Content>Work in Metaverse</Content>
        </Link>
      </Flex>
      <Flex
        $style={{
          vAlign: "center",
          fDirection: "row",
          h: "40px",
          p: "0 12px",
          gap: "8px",
        }}
      >
        <Link to="/">
          <Content>Sign in</Content>
        </Link>
        <Icon icon="Login" />
      </Flex>
      <Button
        $style={{
          bg: GV("gradient"),
          radius: "8px",
        }}
      >
        <Content>Register</Content>
      </Button>
    </ActionContainer>
  );
};

export default Actions;
