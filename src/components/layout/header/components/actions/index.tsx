import React from "react";
import { ActionContainer, Content, ItemContainer } from "./style";
import { Flex, Link } from "@/components/basic";
import { Button, Icon } from "@/components/custom";
import { GV } from "@/utils/style.util";
import _ROUTERS from "@/constants/route.constant";

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
      <ItemContainer>
        <Link to={_ROUTERS.signin} $style={{ color: 'purple' }}>
          <Content>Sign in</Content>
        </Link>
        <Icon icon="Login" />
      </ItemContainer>
      <Link to={_ROUTERS.signup}>
        <Button
          $style={{
            bg: GV("gradient"),
            radius: "8px",
            h: "2.5rem",
            p: "0 1rem",
            fsize: GV("font-size-5")
          }}
        >
          <Content>Register</Content>
        </Button></Link>
    </ActionContainer>
  );
};

export default Actions;
