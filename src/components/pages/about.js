import React from "react";
import profilePicture from "../../../static/assets/bio/ares-me-grad.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci risus,
        vestibulum et porttitor vel, condimentum non velit. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Suspendisse potenti. Nullam efficitur elit sem, congue bibendum enim
        tincidunt nec. Etiam pulvinar nisl vitae consectetur imperdiet. Proin
        mattis non risus vitae dapibus. Vestibulum porta ullamcorper justo, quis
        pulvinar ipsum tincidunt eu. Nam venenatis pharetra elit eu blandit.
        Cras vel malesuada risus, id viverra justo. Aliquam posuere ut purus non
        convallis. Praesent pulvinar dictum tortor, ac malesuada ante venenatis
        quis. Maecenas at eleifend est, ut malesuada orci. Vestibulum sit amet
        bibendum dolor. Phasellus pellentesque faucibus ullamcorper. Maecenas
        posuere arcu eros, nec laoreet nibh tempor vel. Duis eu hendrerit enim,
        vel mattis velit. Proin suscipit convallis dolor ac sodales. Phasellus
        enim arcu, vestibulum non sagittis ut, semper ut elit. Integer et lectus
        dolor. Nulla ullamcorper ullamcorper finibus.
      </div>
    </div>
  );
}
