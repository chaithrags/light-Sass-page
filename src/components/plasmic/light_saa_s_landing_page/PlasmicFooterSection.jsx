// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6BxTEj8a9DknNCNNoYZBh2
// Component: FzqZs6fxePSGr
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: WnBdUS-sUNaTG/component
import TextInput from "../../TextInput"; // plasmic-import: w7jnxs7NParPr/component
import { useScreenVariants as useScreenVariantsthE8Y2YcRk68 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: th_e8Y2ycRk68/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_light_saa_s_landing_page.module.css"; // plasmic-import: 6BxTEj8a9DknNCNNoYZBh2/projectcss
import sty from "./PlasmicFooterSection.module.css"; // plasmic-import: FzqZs6fxePSGr/css
import FacebooksvgIcon from "./icons/PlasmicIcon__Facebooksvg"; // plasmic-import: uUd0PCcsA0OIk/icon
import TwittersvgIcon from "./icons/PlasmicIcon__Twittersvg"; // plasmic-import: N6i3zxA8VciKX/icon
import InstagramsvgIcon from "./icons/PlasmicIcon__Instagramsvg"; // plasmic-import: Rov_0K0TTiwQJ/icon
import LinkedinsvgIcon from "./icons/PlasmicIcon__Linkedinsvg"; // plasmic-import: LaZUDAcr27TKo/icon
import logoFooterpngJY1PzwLakGZz from "./images/logoFooterpng.png"; // plasmic-import: jY1-pzwLakGZz/picture

export const PlasmicFooterSection__VariantProps = new Array();

export const PlasmicFooterSection__ArgProps = new Array();

function PlasmicFooterSection__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsthE8Y2YcRk68()
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__wPH1)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__xOsX6)}>
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto"}
            displayMaxHeight={"35px"}
            displayMaxWidth={"229px"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: logoFooterpngJY1PzwLakGZz,
              fullWidth: 458,
              fullHeight: 70,
              aspectRatio: undefined
            }}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__wxZe
            )}
          >
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            }
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__gAlO9)}>
            <FacebooksvgIcon
              className={classNames(projectcss.all, sty.svg__hmv3V)}
              role={"img"}
            />

            <TwittersvgIcon
              className={classNames(projectcss.all, sty.svg__zncKh)}
              role={"img"}
            />

            <InstagramsvgIcon
              className={classNames(projectcss.all, sty.svg___4P4Lm)}
              role={"img"}
            />

            <LinkedinsvgIcon
              className={classNames(projectcss.all, sty.svg___8Wl3N)}
              role={"img"}
            />
          </div>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__gRLzR)}>
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4__jowTn
            )}
          >
            {"Menu"}
          </h4>

          <Button
            className={classNames("__wab_instance", sty.button__oMwda)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___5Ntz3)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__eGIqK)}
                role={"img"}
              />
            }
          >
            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__l9AT
              )}
            >
              {"How it work"}
            </a>
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__zfnlt)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__iM7N)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___7M3BJ)}
                role={"img"}
              />
            }
          >
            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___7VBw
              )}
            >
              {"Pricing"}
            </a>
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__hoSpZ)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___6Mbq)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__x2Iq)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___9IZ3D
              )}
            >
              {"FAQs"}
            </div>
          </Button>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox___0Ga0A)}>
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4__h8GYb
            )}
          >
            {"Help"}
          </h4>

          <Button
            className={classNames("__wab_instance", sty.button__dZZlw)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__jFgTk)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__yXkIx)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__dlT1H
              )}
            >
              {"Privacy and Policy"}
            </div>
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__e21Fz)}
            color={"footerButton"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__t1D5L)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___1Vzt6)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__k8Atc
              )}
            >
              {"Terms of Use"}
            </div>
          </Button>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__chpit)}>
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4__i80R
            )}
          >
            {"Company"}
          </h4>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__jmBvX
            )}
          >
            {"Lorem ipsum dolor sit amet, consectetur."}
          </div>

          <TextInput
            data-plasmic-name={"textInput"}
            data-plasmic-override={overrides.textInput}
            className={classNames("__wab_instance", sty.textInput)}
          />

          <Button
            className={classNames("__wab_instance", sty.button__ewq0Z)}
            color={"white"}
            small={
              hasVariant(globalVariants, "screen", "mobile") ? true : undefined
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___2AOYl
              )}
            >
              {hasVariant(globalVariants, "screen", "mobile")
                ? "Subscribe"
                : "Subscribe"}
            </div>
          </Button>
        </div>
      </p.Stack>

      <div className={classNames(projectcss.all, sty.freeBox__uq98J)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__h4VSz
          )}
        >
          {"Copyrights ?? 2022 All Rights Reserved by PlasmicApp"}
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "img", "textInput", "textbox"],
  img: ["img"],
  textInput: ["textInput", "textbox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFooterSection__ArgProps,
          internalVariantPropNames: PlasmicFooterSection__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFooterSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterSection";
  } else {
    func.displayName = `PlasmicFooterSection.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterSection = Object.assign(
  // Top-level PlasmicFooterSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    textInput: makeNodeComponent("textInput"),
    // Metadata about props expected for PlasmicFooterSection
    internalVariantProps: PlasmicFooterSection__VariantProps,
    internalArgProps: PlasmicFooterSection__ArgProps
  }
);

export default PlasmicFooterSection;
/* prettier-ignore-end */
