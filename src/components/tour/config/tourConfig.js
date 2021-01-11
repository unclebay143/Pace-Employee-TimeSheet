import Text from "./Text";
import Glitch from "./Glitch";
import Tooltip from "./Tooltip";
import { Link } from "./Button";

const tourConfig = [
    {
        selector: '[data-tut="reactour_welcome"]',
        content: `Welcome onboard, let's run you through your new workspace`
    },
    {
      selector: '[data-tut="reactour__taskCards"]',
      content: `Your tasks progress will be displayed here.`
    },
    {
      selector: '[data-tut="reactour__notification"]',
      content: `Your latest todo and and upcoming event will be displayed here for quick reminder`
    },
    {
      selector: '[data-tut="reactour__timer"]',
      content: `Start and stop your timer here with a single click and visible counter…`
    },
    {
      selector: '[data-tut="reactour__hourscreen"]',
      content: `Hour screen shows the numbers of hours you've spent so far in a day…`
    },
    {
      selector: '[data-tut="reactour__sidebar"]',
      content: `Navigate around your workspace using the sidebar menu…`
    },
    {
      selector: '[data-tut="reactour__profileImage"]',
      content: `View your profile here and also logout…`
    },
    {
      selector: '[data-tut="reactour__style"]',
      content: () => (
        <div>
          <Glitch data-glitch="Pace">Pace</Glitch>
          <Text color="#e5e5e5">
            We are <Tooltip data-tooltip="this helper ⬇">extremely happy</Tooltip>{" "}
            to have you here, looking forward to serving you better…
          </Text>
          <Text color="#373737" size=".7em" style={{ marginTop: ".7em" }}>
            <Link
              to="/about"
              color="dark"
              nospaces
            >
              Developed
            </Link>{" "}
            by{" "}
            <Link to="/about" color="dark" nospaces>
              TIIDELab Circuit
            </Link>
          </Text>
        </div>
      ),
      style: {
        backgroundColor: "black",
        color: "white"
      }
    },
    // {
    //   selector: '[data-tut="reactour__goTo"]',
    //   content: ({ goTo }) => (
    //     <div>
    //       If you wanna go anywhere, skipping places, it is absolutely possible.
    //       <br /> "Oh, I forgot something inside the bus…"{" "}
    //       <button
    //         style={{
    //           border: "1px solid #f7f7f7",
    //           background: "none",
    //           padding: ".3em .7em",
    //           fontSize: "inherit",
    //           display: "block",
    //           cursor: "pointer",
    //           margin: "1em auto"
    //         }}
    //         onClick={() => goTo(1)}
    //       >
    //         Please go back to{" "}
    //         <span aria-label="bus" role="img">
    //           🚌
    //         </span>
    //       </button>
    //     </div>
    //   )
    // },
    // {
    //   selector: '[data-tut="reactour__position"]',
    //   content: () => (
    //     <Text>
    //       The <Tooltip data-tooltip="this helper ⬇">tourist guide</Tooltip> could
    //       be positioned where you want.
    //       <br /> In this case will try to stay in the <strong>
    //         left side
    //       </strong>{" "}
    //       if there's available space, otherwise will{" "}
    //       <strong>auto position</strong>.
    //     </Text>
    //   ),
    //   position: "left"
    // },
    // {
    //   selector: '[data-tut="reactour__scroll"]',
    //   content:
    //     "Probably you noted that the Tour scrolled directly to the desired place, and you could control the time also…"
    // },
    // {
    //   selector: '[data-tut="reactour__scroll--hidden"]',
    //   content: "Also when places are pretty hidden…"
    // },
    // {
    //   selector: '[data-tut="reactour__action"]',
    //   content:
    //     "When arrived on each place you could fire an action, like… (look at the console)",
    //   action: () =>
    //     console.log(`
    //                 ------------🏠🏚---------
    //     🚌 Arrived to explore these beautiful buildings! 🚌
    //                 ------------🏠🏚---------
    //  🚧 This action could also fire a method in your Component 🚧
    //   `)
    // },
    // {
    //   selector: '[data-tut="reactour__state"]',
    //   content:
    //     "And the Tour could be observing changes to update the view, try clicking the button…",
    //   observe: '[data-tut="reactour__state--observe"]'
    // }
  ];


  export default tourConfig;